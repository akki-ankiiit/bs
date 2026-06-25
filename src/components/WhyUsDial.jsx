import React from 'react';
import { useBreakpoints } from '../hooks';

export function WhyUsDial({ items, T, F }) {
  const { isMobile } = useBreakpoints();

  // 6 items total. We map them into 2 orbits (3 items each).
  // Orbit 1: Radius 240 (Diameter 480). Duration 60s. Spacing 20s.
  // Orbit 2: Radius 360 (Diameter 720). Duration 80s. Spacing 26.66s, offset by 13.33s.
  
  const orbit1Radius = isMobile ? 140 : 220;
  const orbit2Radius = isMobile ? 220 : 340;
  
  const orbit1Duration = 60;
  const orbit2Duration = 80;

  const getDelays = (duration, count, offsetRatio = 0) => {
    const spacing = duration / count;
    const offset = duration * offsetRatio;
    return Array.from({ length: count }).map((_, i) => -((spacing * i) + offset));
  };

  const orbit1Delays = getDelays(orbit1Duration, 3, 0); // 0, -20, -40
  const orbit2Delays = getDelays(orbit2Duration, 3, 1/6); // Offset by 60 degrees (1/6 of circle)

  const planets = [
    // Orbit 1 Items
    { item: items[0], radius: orbit1Radius, duration: orbit1Duration, delay: orbit1Delays[0] },
    { item: items[1], radius: orbit1Radius, duration: orbit1Duration, delay: orbit1Delays[1] },
    { item: items[2], radius: orbit1Radius, duration: orbit1Duration, delay: orbit1Delays[2] },
    // Orbit 2 Items
    { item: items[3], radius: orbit2Radius, duration: orbit2Duration, delay: orbit2Delays[0] },
    { item: items[4], radius: orbit2Radius, duration: orbit2Duration, delay: orbit2Delays[1] },
    { item: items[5], radius: orbit2Radius, duration: orbit2Duration, delay: orbit2Delays[2] },
  ];

  return (
    <div 
      style={{ 
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? 600 : 900,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a', // Dark background to match the reference aesthetic
        color: '#fff',
        borderRadius: 24, // Optional: if we want it contained in a box
        marginTop: 40
      }}
    >
      <style>
        {`
          @keyframes orbit-spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes orbit-spin-reverse {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(-360deg); }
          }
          .visible-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.15);
            transform: translate(-50%, -50%);
            pointer-events: none;
          }
          .tracker-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }
          .planet-pill-wrapper {
            position: absolute;
            top: 50%;
            left: 100%; /* Placed on the right edge of the tracker ring */
            transform: translate(-50%, -50%);
            pointer-events: auto;
          }
        `}
      </style>

      {/* VISIBLE ORBIT RINGS */}
      <div className="visible-ring" style={{ width: orbit1Radius * 2, height: orbit1Radius * 2 }} />
      <div className="visible-ring" style={{ width: orbit2Radius * 2, height: orbit2Radius * 2 }} />
      {/* Decorative Outer Rings (like in the image) */}
      <div className="visible-ring" style={{ width: orbit2Radius * 2 + (isMobile ? 160 : 240), height: orbit2Radius * 2 + (isMobile ? 160 : 240), opacity: 0.5 }} />

      {/* CENTRAL HUB */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? 160 : 220,
        height: isMobile ? 160 : 220,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #e0e0e0 0%, #a0a0a0 100%)', // Match the glowing sphere look
        boxShadow: '0 0 80px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255,255,255,0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        color: '#000',
      }}>
        <h2 style={{ 
          fontFamily: F.display, 
          fontSize: isMobile ? 32 : 48, 
          fontWeight: 800, 
          margin: 0, 
          lineHeight: 0.9,
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          Why us?
        </h2>
      </div>

      {/* PLANETS (Invisible trackers carrying pills) */}
      {planets.map((planet, idx) => {
        const diameter = planet.radius * 2;
        
        return (
          <div 
            key={idx}
            className="tracker-ring"
            style={{
              width: diameter,
              height: diameter,
              zIndex: 20,
              animation: `orbit-spin ${planet.duration}s linear infinite`,
              animationDelay: `${planet.delay}s`
            }}
          >
            <div 
              className="planet-pill-wrapper"
              style={{
                animation: `orbit-spin-reverse ${planet.duration}s linear infinite`,
                animationDelay: `${planet.delay}s`,
              }}
            >
              {/* The Actual Pill */}
              <div style={{
                background: 'linear-gradient(180deg, rgba(60,60,60,0.9) 0%, rgba(30,30,30,0.9) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                borderRadius: 999,
                padding: isMobile ? '8px 16px' : '10px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                width: 'max-content',
                minWidth: isMobile ? 100 : 140,
              }}>
                <h3 style={{ 
                  fontFamily: F.body, 
                  fontWeight: 600, 
                  fontSize: isMobile ? 10 : 12, 
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}>
                  {planet.item.h}
                </h3>
              </div>
            </div>
          </div>
        );
      })}

      {/* Decorative Orbs on Orbits (optional, to match the dots in the image) */}
      <div className="tracker-ring" style={{ width: orbit1Radius * 2, height: orbit1Radius * 2, animation: 'orbit-spin 40s linear infinite' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
      </div>
      <div className="tracker-ring" style={{ width: orbit2Radius * 2, height: orbit2Radius * 2, animation: 'orbit-spin 55s linear infinite' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translate(-50%, -50%)', width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
      </div>

    </div>
  );
}
