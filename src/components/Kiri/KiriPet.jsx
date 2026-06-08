import React, { useRef } from "react";
import { useKiriBehavior } from "./useKiriBehavior";
import { useKiriMotion } from "./useKiriMotion";
import "./KiriPet.css";

// An inline, layered pixel-art SVG so we can animate limbs, tail, and head!
const DachshundSprite = React.forwardRef((props, ref) => (
  // Apply direction flip ONLY to the container
  <div ref={ref} style={{ transform: `scaleX(1)`, width: 90, height: 60, margin: '0 auto', willChange: 'transform' }}>
    <div className="dachshund-container">
      <div className="d-tail" />
      <div className="d-leg back-left" />
      <div className="d-leg front-left" />
      <div className="d-body">
        <div className="d-belly" />
        <div className="d-chest" />
      </div>
      <div className="d-leg back-right" />
      <div className="d-leg front-right" />
      <div className="d-head">
        <div className="d-ear" />
        <div className="d-snout">
          <div className="d-nose" />
        </div>
        <div className="d-eye left">
          <div className="d-catchlight" />
        </div>
        <div className="d-eye right">
          <div className="d-catchlight" />
        </div>
        <div className="d-eyebrow left" />
        <div className="d-eyebrow right" />
      </div>
    </div>
  </div>
));

export default function KiriPet() {
  const wrapperRef = useRef(null);
  const spriteRef = useRef(null);
  
  const { action, targetX, message, hearts, handlers, onReachTarget } = useKiriBehavior();

  // The physics engine updates wrapperRef and spriteRef directly to avoid React re-renders during rAF loop
  useKiriMotion(wrapperRef, spriteRef, action, targetX, onReachTarget);

  return (
    <div
      ref={wrapperRef}
      className={`kiri-wrapper kiri-${action}`}
      style={{
        left: 0,
        marginLeft: -45, // Half of 90px width to precisely center the 0x transform origin
        willChange: 'transform' // Optimize GPU composition
      }}
      {...handlers}
      aria-label="Kiri digital pet"
    >
      {message && (
        <div className="kiri-bubble">
          {message}
        </div>
      )}

      {/* Hearts */}
      {hearts.map(id => (
        <div key={id} className="kiri-heart">❤</div>
      ))}

      {/* Fully animated CSS component matching the pixel art Dachshund */}
      <DachshundSprite ref={spriteRef} />
      <div className="kiri-shadow" />
    </div>
  );
}
