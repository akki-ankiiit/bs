import { useState, useCallback } from 'react';

/**
 * Manages ephemeral VFX particles like hearts, dust, and Zzz bubbles.
 */
export function useParticles() {
  const [particles, setParticles] = useState([]);

  const spawnParticle = useCallback((type, x, y) => {
    const id = Date.now() + Math.random();
    
    setParticles(prev => [...prev, { id, type, x, y }]);

    // Automatically clean up particle after its animation finishes
    // Keep in sync with CSS animation durations!
    const duration = type === 'dust' ? 600 : type === 'zzz' ? 2000 : 1000;
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, duration);
  }, []);

  return { particles, spawnParticle };
}
