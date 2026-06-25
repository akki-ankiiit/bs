import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { PosterCard } from './PosterCard';
import { useBreakpoints } from '../hooks';

export function PosterCarousel({ items }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  
  let isMobile = false;
  let isTablet = false;
  try {
    const bp = useBreakpoints();
    isMobile = bp.isMobile;
    isTablet = bp.isTablet;
  } catch (e) {
    isMobile = window.innerWidth < 768;
    isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  // Sizes increased by another 1.3x
  const cardWidth = isMobile ? 157 : isTablet ? 208 : 238;
  const cardHeight = isMobile ? 208 : isTablet ? 272 : 317;
  const spacing = isMobile ? 12 : 24;
  const itemStride = cardWidth + spacing;

  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  // Duplicate items to ensure enough content width for infinite scroll
  // 6 times duplication of 7 items = 42 items. Even on a 4K screen, this is more than enough width.
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  useAnimationFrame(() => {
    if (!containerRef.current) return;
    
    // Equivalent to scrollLeft in the old setup
    const scrollLeft = -x.get();
    const clientWidth = containerRef.current.clientWidth;
    const v = x.getVelocity();
    
    // Elastic skew based on drag velocity
    const skewX = Math.max(-10, Math.min(10, v * 0.003));
    // Dynamic stretch based on velocity
    const stretch = Math.abs(v) * 0.003;

    const contentWidth = duplicatedItems.length * itemStride;

    // Helper for proper modulo (handles negative numbers)
    const mod = (n, m) => ((n % m) + m) % m;

    cardsRef.current.forEach((card, idx) => {
      if (!card) return;
      
      // Calculate original un-stretched distance from center
      const rawDist = (idx * itemStride) - scrollLeft;
      
      // Wrap distance so it's always in the range [-contentWidth/2, contentWidth/2]
      const wrappedDist = mod(rawDist + contentWidth / 2, contentWidth) - contentWidth / 2;
      
      // The visual shift required to teleport the card to the wrapped position
      const shift = wrappedDist - rawDist;
      
      // Apply elastic stretch: items stretch away from the center when dragged fast
      const stretchOffset = wrappedDist > 0 ? stretch : wrappedDist < 0 ? -stretch : 0;
      const dist = wrappedDist + stretchOffset;
      
      // Normalize distance
      const normalizedDist = dist / (clientWidth * 0.4); 
      const absDist = Math.abs(normalizedDist);
      
      // 1. Arc curve (Y offset) - Exact Semi-Circle Math
      const r = clientWidth * 0.7; 
      const clampedDist = Math.max(-r + 1, Math.min(r - 1, dist)); 
      const yOffset = r - Math.sqrt(r * r - clampedDist * clampedDist);
      
      // 2. 2D Rotation (Z) - Exact tangent of the circle
      const rotateZ = Math.asin(clampedDist / r) * (180 / Math.PI);
      const clampedRotateZ = Math.max(-60, Math.min(60, rotateZ));
      
      // 3. Scale and Opacity
      const scale = Math.max(0.7, 1 - (Math.pow(absDist, 2) * 0.1));
      const opacity = Math.max(0.4, 1 - (absDist * 0.3));
      
      card.style.transform = `translateX(${shift + stretchOffset}px) translateY(${yOffset}px) scale(${scale}) rotateZ(${clampedRotateZ}deg) skewX(${skewX}deg)`;
      card.style.opacity = opacity;
      card.style.zIndex = 100 - Math.round(absDist * 10);
    });
  });

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'visible', 
        paddingTop: isMobile ? 0 : 0, 
        paddingBottom: isMobile ? 40 : 60,
      }}
    >
      {/* We use a static absolute track wrapper so its left edge is dead center, then offset by cardWidth/2 */}
      <motion.div 
        ref={trackRef}
        drag="x"
        dragElastic={0.2} // Classic Framer rubber banding
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ 
          x,
          display: 'flex', 
          gap: spacing, 
          position: 'absolute',
          left: `calc(50vw - ${cardWidth / 2}px)`, // Item 0 is precisely centered
          top: isMobile ? 40 : 60,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div 
            key={idx}
            ref={el => cardsRef.current[idx] = el}
            style={{
              width: cardWidth,
              height: cardHeight,
              flexShrink: 0,
              transformOrigin: 'bottom center',
              willChange: 'transform, opacity',
              pointerEvents: isDragging ? 'none' : 'auto' // Prevent drag conflict with hover effects
            }}
          >
            <PosterCard item={item} cardWidth={cardWidth} cardHeight={cardHeight} />
          </div>
        ))}
      </motion.div>
      
      {/* Invisible spacer to maintain height since track is absolute */}
      <div style={{ height: cardHeight, width: '100%' }}></div>
    </div>
  );
}
