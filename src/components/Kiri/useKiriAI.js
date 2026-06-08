import { useRef, useEffect } from 'react';

const MESSAGES = [
  "Hi, I'm Kiri!",
  "Woof!",
  "Need help?",
  "Let's build something!",
  "Nice website!",
  "Thanks for visiting!",
  "Have a great day!",
  "I love pixel art.",
  "Throw a stick!"
];

/**
 * The Brain of Kiri.
 * Manages the Finite State Machine (FSM) autonomously.
 */
export function useKiriAI(spriteSize, currentPosRef, onSpawnParticle) {
  const stateRef = useRef({
    action: 'idle',
    targetX: null,
    direction: 1, // 1: right, -1: left
    isInteracting: false,
    sleepTimer: 0
  });

  const messageRef = useRef(null);

  const getBounds = () => {
    if (typeof window === 'undefined') return { min: 0, max: 1000 };
    return {
      min: 20,
      max: window.innerWidth - spriteSize - 20
    };
  };

  useEffect(() => {
    let timeoutId;

    const chooseNextAction = () => {
      const state = stateRef.current;
      if (state.isInteracting) return; 

      const bounds = getBounds();
      const currentX = currentPosRef.current.x;
      const r = Math.random();

      state.sleepTimer += 1;
      
      if (state.sleepTimer > 10) { 
        // Go to sleep after prolonged inactivity
        state.action = 'sleep';
        state.targetX = null;
        if (Math.random() < 0.3) {
           onSpawnParticle('zzz', currentX + 40, -40);
        }
        timeoutId = setTimeout(chooseNextAction, 4000);
        return;
      }

      if (r < 0.2) {
        state.action = 'idle';
        state.targetX = null;
        timeoutId = setTimeout(chooseNextAction, 2000 + Math.random() * 3000);
      } else if (r < 0.4) {
        state.action = 'sit';
        state.targetX = null;
        timeoutId = setTimeout(chooseNextAction, 3000 + Math.random() * 4000);
      } else if (r < 0.6) {
        state.action = 'walk';
        const dist = 100 + Math.random() * 300;
        let dest = currentX + (Math.random() > 0.5 ? dist : -dist);
        dest = Math.max(bounds.min, Math.min(bounds.max, dest));
        state.targetX = dest;
        state.direction = dest >= currentX ? 1 : -1;
        timeoutId = setTimeout(chooseNextAction, 4000);
      } else if (r < 0.7) {
        state.action = 'run';
        const dist = 300 + Math.random() * 400;
        let dest = currentX + (Math.random() > 0.5 ? dist : -dist);
        dest = Math.max(bounds.min, Math.min(bounds.max, dest));
        state.targetX = dest;
        state.direction = dest >= currentX ? 1 : -1;
        timeoutId = setTimeout(chooseNextAction, 3000);
      } else if (r < 0.8) {
        state.action = 'jump';
        state.targetX = null;
        timeoutId = setTimeout(chooseNextAction, 1500);
      } else if (r < 0.9) {
        state.action = 'play';
        state.targetX = null;
        timeoutId = setTimeout(chooseNextAction, 2000);
      } else {
        state.action = 'idle';
        messageRef.current = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
        timeoutId = setTimeout(() => {
          messageRef.current = null;
          chooseNextAction();
        }, 3000);
      }
    };

    timeoutId = setTimeout(chooseNextAction, 2000);
    return () => clearTimeout(timeoutId);
  }, [spriteSize, currentPosRef, onSpawnParticle]);

  // Interaction handlers (Interrupt the FSM)
  const onHover = () => {
    stateRef.current.isInteracting = true;
    stateRef.current.action = 'hello';
    stateRef.current.targetX = null;
    stateRef.current.sleepTimer = 0;
  };

  const onHoverOut = () => {
    stateRef.current.isInteracting = false;
    stateRef.current.action = 'idle';
  };

  const onClick = () => {
    stateRef.current.isInteracting = true;
    stateRef.current.action = 'happy';
    messageRef.current = 'Woof!';
    stateRef.current.sleepTimer = 0;
    onSpawnParticle('heart', currentPosRef.current.x + 40, -40);
    setTimeout(() => {
      messageRef.current = null;
      stateRef.current.isInteracting = false;
    }, 1500);
  };

  const onDoubleClick = () => {
    stateRef.current.isInteracting = true;
    stateRef.current.action = 'run';
    stateRef.current.sleepTimer = 0;
    const bounds = getBounds();
    const dest = stateRef.current.direction === 1 ? bounds.max : bounds.min;
    stateRef.current.targetX = dest;
    messageRef.current = 'Zoomies!!';
    setTimeout(() => {
      messageRef.current = null;
      stateRef.current.isInteracting = false;
    }, 3000);
  };
  
  const onLongPress = () => {
    stateRef.current.isInteracting = true;
    stateRef.current.action = 'petting';
    stateRef.current.sleepTimer = 0;
    onSpawnParticle('heart', currentPosRef.current.x + 40, -20);
    setTimeout(() => {
      stateRef.current.isInteracting = false;
    }, 2000);
  };

  return {
    stateRef,
    messageRef,
    handlers: {
      onHover,
      onHoverOut,
      onClick,
      onDoubleClick,
      onLongPress
    }
  };
}
