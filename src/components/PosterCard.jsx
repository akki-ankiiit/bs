import React from 'react';
import { motion } from 'framer-motion';

export function PosterCard({ item, cardWidth, cardHeight }) {
  const cardRef = React.useRef(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max movement 8px
    const moveX = (x / (rect.width / 2)) * 8;
    const moveY = (y / (rect.height / 2)) * 8;
    setMousePos({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={false}
      animate={{
        x: mousePos.x,
        y: mousePos.y,
      }}
      whileHover={{
        y: -12,
        scale: 1.04,
        rotateY: 0,
        boxShadow: '0 45px 100px rgba(0,0,0,0.38)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: 26,
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
      }}
    >
      <img
        src={item}
        alt="Poster"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
}
