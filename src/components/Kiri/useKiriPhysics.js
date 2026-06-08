import { useRef, useEffect } from 'react';

/**
 * The Muscle of Kiri.
 * Runs a 60fps requestAnimationFrame loop to handle exact pixel coordinates,
 * velocity, gravity, and bounding box collisions without triggering React renders.
 */
export function useKiriPhysics(containerRef, spriteRef, shadowRef, aiStateRef, onSpawnParticle) {
  const posRef = useRef({ x: 100, y: 0, vx: 0, vy: 0 });
  const isJumpingRef = useRef(false);

  useEffect(() => {
    // Initial random spawn
    if (typeof window !== 'undefined') {
      posRef.current.x = Math.max(20, Math.random() * (window.innerWidth - 150));
    }

    let rafId;
    let lastTime = performance.now();

    const loop = (time) => {
      rafId = requestAnimationFrame(loop);
      const dt = Math.min((time - lastTime) / 1000, 0.1); // clamp dt to prevent huge jumps
      lastTime = time;

      const p = posRef.current;
      const ai = aiStateRef.current;

      // --- Y PHYSICS (Gravity) ---
      // Trigger jumps
      if ((ai.action === 'jump' || ai.action === 'happy') && !isJumpingRef.current && p.y === 0) {
        p.vy = ai.action === 'happy' ? -300 : -450; 
        isJumpingRef.current = true;
      }

      // Apply gravity
      if (p.y < 0 || p.vy !== 0) {
        p.vy += 1500 * dt; // Gravity
        p.y += p.vy * dt;
        
        // Landing collision
        if (p.y >= 0) {
          p.y = 0;
          p.vy = 0;
          if (isJumpingRef.current) {
            isJumpingRef.current = false;
            // Spawn dust on hard landing
            onSpawnParticle('dust', p.x + 40, 0);
          }
        }
      }

      // --- X PHYSICS (Movement) ---
      if (ai.targetX !== null) {
        const speed = ai.action === 'run' ? 250 : 80;
        const dist = ai.targetX - p.x;
        
        if (Math.abs(dist) < 5) {
          // Reached destination
          p.x = ai.targetX;
          ai.targetX = null; 
          p.vx = 0;
          if (ai.action === 'run' || ai.action === 'walk') ai.action = 'idle';
        } else {
          p.vx = Math.sign(dist) * speed;
          // Spawn dust occasionally when running
          if (ai.action === 'run' && Math.random() < 0.1 && p.y === 0) {
            onSpawnParticle('dust', p.x + 40, 0);
          }
        }
      } else {
        // Friction deceleration
        p.vx *= 0.8;
        if (Math.abs(p.vx) < 1) p.vx = 0;
      }

      p.x += p.vx * dt;

      // Screen bounds collision (failsafe)
      const maxWalk = typeof window !== 'undefined' ? window.innerWidth - 100 : 1000;
      if (p.x < 10) p.x = 10;
      if (p.x > maxWalk) p.x = maxWalk;

      // --- RENDER TRANSFORMS ---
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        // Assign action class to trigger CSS animations (wagging, breathing)
        containerRef.current.className = `kiri-pet-wrapper kiri-state-${ai.action}`;
      }
      if (spriteRef.current) {
        spriteRef.current.style.transform = `scaleX(${ai.direction})`;
      }
      if (shadowRef.current) {
        // Shadow scales down and fades out as Kiri jumps higher
        const scale = Math.max(0.3, 1 - Math.abs(p.y) / 100);
        shadowRef.current.style.transform = `scaleX(${scale})`;
        shadowRef.current.style.opacity = scale * 0.5;
      }
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [containerRef, spriteRef, shadowRef, aiStateRef, onSpawnParticle]);

  return posRef;
}
