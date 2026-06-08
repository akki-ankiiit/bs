import { useEffect, useRef } from 'react';

export function useKiriMotion(wrapperRef, spriteRef, action, targetX, onReachTarget) {
  const stateRef = useRef({ action, targetX });
  
  useEffect(() => {
    stateRef.current = { action, targetX };
  }, [action, targetX]);

  const physics = useRef({
    x: -999,
    v: 0,
    facing: 1,
    lastTime: 0,
  });

  const onReachTargetRef = useRef(onReachTarget);
  useEffect(() => { 
    onReachTargetRef.current = onReachTarget; 
  }, [onReachTarget]);

  useEffect(() => {
    let rafId;

    const loop = (time) => {
      rafId = requestAnimationFrame(loop);
      
      if (!wrapperRef.current) return;
      
      const p = physics.current;
      if (p.lastTime === 0) {
        p.lastTime = time;
        p.x = window.innerWidth / 2;
        return;
      }

      const dt = Math.min((time - p.lastTime) / 1000, 0.1);
      p.lastTime = time;

      const { action, targetX } = stateRef.current;

      const padding = 20;
      const KIRI_WIDTH = 90;
      const minX = padding + KIRI_WIDTH / 2;
      const maxX = window.innerWidth - padding - KIRI_WIDTH / 2;

      let maxSpeed = 0;
      let accel = 100; 
      let decelDist = 120; 

      if (action === 'run') { maxSpeed = 55; accel = 120; decelDist = 140; }
      else if (action === 'walk') { maxSpeed = 35; accel = 80; decelDist = 80; }

      const safeTarget = Math.max(minX, Math.min(maxX, targetX));

      if (maxSpeed > 0) {
        const dist = safeTarget - p.x;
        const dir = Math.sign(dist);
        const absDist = Math.abs(dist);

        if (absDist > 5) {
          p.facing = dir;
        }

        if (absDist < 10) {
          p.v = 0;
          p.x = safeTarget;
          if (onReachTargetRef.current) onReachTargetRef.current();
        } else if (absDist < decelDist) {
          // Ensure she never drops below 25px/s while decelerating so she actually reaches the target
          const targetV = Math.max(25, (absDist / decelDist) * maxSpeed) * dir;
          p.v += (targetV - p.v) * (dt * 5); 
        } else {
          p.v += accel * dir * dt;
          if (Math.abs(p.v) > maxSpeed) {
            p.v = maxSpeed * dir;
          }
        }
        p.x += p.v * dt;
      } else {
        p.v *= (1 - dt * 5);
        if (Math.abs(p.v) < 1) p.v = 0;
        p.x += p.v * dt;
      }

      p.x = Math.max(minX, Math.min(maxX, p.x));

      wrapperRef.current.style.transform = `translate3d(${p.x}px, 0, 0)`;
      if (spriteRef.current) {
        spriteRef.current.style.transform = `scaleX(${p.facing})`;
      }
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [wrapperRef, spriteRef]);
}
