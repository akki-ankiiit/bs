import { useState, useEffect, useCallback } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export function useBreakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1200 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1200 : true,
  });

  useEffect(() => {
    const handleResize = () => {
      setBreakpoints({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1200,
        isDesktop: window.innerWidth >= 1200,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
}

export function useParallaxStyle(ref, speed) {
  useEffect(() => {
    if (!ref.current || !speed) return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let targetY = 0;
    let currentY = 0;
    let baseY = 0;
    let animationFrameId;

    function getAbsoluteY(el) {
      let y = 0;
      while (el) {
        y += el.offsetTop;
        el = el.offsetParent;
      }
      return y;
    }

    const calculateTarget = () => {
      const scrollCenter = window.scrollY + window.innerHeight / 2;
      targetY = (baseY - scrollCenter) * speed;
    };

    const updateBase = () => {
      if (ref.current) {
        ref.current.style.transform = 'none';
        baseY = getAbsoluteY(ref.current) + ref.current.offsetHeight / 2;
        calculateTarget();
        currentY = targetY; // snap to initial position without lerp
      }
    };

    const handleScroll = () => {
      calculateTarget();
    };

    const loop = () => {
      currentY += (targetY - currentY) * 0.08;

      if (ref.current && Math.abs(targetY - currentY) > 0.01) {
        ref.current.style.transform = `translate3d(0, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    setTimeout(() => {
      updateBase();
      loop();
    }, 150);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateBase);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBase);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, ref]);
}

export function useTweaks(defaults) {
  const [values, setValues] = useState(defaults);
  const setTweak = useCallback((key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  }, []);
  return [values, setTweak];
}
