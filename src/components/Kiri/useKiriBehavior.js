import { useState, useEffect, useRef, useCallback } from 'react';

const messages = [
  "Hi, I'm Kiri!",
  "Woof!",
  "Let's code!",
  "Need help?",
  "Yay!"
];

export function useKiriBehavior() {
  const [action, setAction] = useState("idle");
  const [targetX, setTargetX] = useState(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const [message, setMessage] = useState("");
  const [hearts, setHearts] = useState([]);
  
  const timerRef = useRef(null);
  const lastActivityRef = useRef(Date.now());
  const isMovingRef = useRef(false);

  const showMessage = useCallback((text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 1800);
  }, []);

  // Ensure she strictly goes from corner to corner
  const getOppositeCorner = useCallback(() => {
    const padding = 20;
    const KIRI_WIDTH = 90;
    const minX = padding + KIRI_WIDTH / 2;
    const maxX = window.innerWidth - padding - KIRI_WIDTH / 2;
    
    // If she's closer to the right side, go left. Otherwise go right.
    if (targetX >= window.innerWidth / 2) {
      return minX;
    } else {
      return maxX;
    }
  }, [targetX]);

  const scheduleNext = (fn, delay) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(fn, delay);
  };

  const resumePatrol = useCallback(() => {
    // If she's been inactive too long, maybe sleep, but otherwise just resume running to current target
    if (Date.now() - lastActivityRef.current > 15000) {
      setAction("sleep");
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => resumePatrol(), 3000);
      return;
    }

    setAction("run");
    isMovingRef.current = true;
  }, []);

  useEffect(() => {
    const updateActivity = () => lastActivityRef.current = Date.now();
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('scroll', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('touchstart', updateActivity);

    resumePatrol();

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('scroll', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('touchstart', updateActivity);
    };
  }, [resumePatrol]);

  const onReachTarget = useCallback(() => {
    isMovingRef.current = false;
    setAction("idle"); // pause and catch breath
    clearTimeout(timerRef.current);
    
    // Immediately run back to the other corner after a brief pause
    timerRef.current = setTimeout(() => {
      isMovingRef.current = true;
      setAction("run");
      setTargetX(getOppositeCorner());
    }, 200);
  }, [getOppositeCorner]);

  const lastTapRef = useRef(0);

  // Define handlers stably so they don't look like render-phase mutations
  const onDoubleClick = useCallback(() => {
    isMovingRef.current = true;
    setAction("run");
    showMessage("Zoomies!!");
    // Zoomies makes her turn around and sprint back
    setTargetX(getOppositeCorner());
  }, [showMessage, getOppositeCorner]);

  const onClick = useCallback(() => {
    const clickActions = ["jump", "sit", "hello"];
    setAction(clickActions[Math.floor(Math.random() * clickActions.length)]);
    showMessage("Woof!");

    const id = Date.now();
    setHearts(prev => [...prev, id]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h !== id));
    }, 1000);
    
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => resumePatrol(), 2000);
  }, [showMessage, resumePatrol]);

  const onMouseEnter = useCallback(() => {
    isMovingRef.current = false;
    setAction("hello");
    showMessage("Hi, I'm Kiri!");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => resumePatrol(), 2500);
  }, [showMessage, resumePatrol]);

  const onTouchStart = useCallback((e) => {
    const now = e.timeStamp;
    if (now - lastTapRef.current < 300) {
      onDoubleClick();
    } else {
      onClick();
    }
    lastTapRef.current = now;
  }, [onDoubleClick, onClick]);

  const handlers = { onMouseEnter, onClick, onDoubleClick, onTouchStart };

  return { action, targetX, message, hearts, handlers, onReachTarget };
}
