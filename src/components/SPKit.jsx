import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile, useParallaxStyle } from '../hooks';

// Inject sticker hover styles
if (typeof document !== 'undefined' && !document.getElementById('sp-sticker-styles')) {
  const styleEl = document.createElement('style');
  styleEl.id = 'sp-sticker-styles';
  styleEl.innerHTML = `
    .sp-sticker {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      animation: stickerFloat 8s ease-in-out infinite;
    }
    @keyframes stickerFloat {
      0%, 100% { translate: 0px 0px; }
      50% { translate: -4px -8px; }
    }
    .sp-sticker:hover {
      animation-play-state: paused;
      transform: scale(1.08) rotate(0deg) !important;
      z-index: 50 !important;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
    }
    .sp-wordmark {
      display: inline-block;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .sp-wordmark:hover {
      transform: scale(1.02);
    }
    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marqueeRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .sp-marquee-inner {
      display: inline-block;
      white-space: nowrap;
      animation: marqueeScroll 35s linear infinite;
    }
    @keyframes grainDrift {
      0% { transform: translate(0, 0); }
      25% { transform: translate(1px, -1px); }
      50% { transform: translate(-1px, 1px); }
      75% { transform: translate(1px, 1px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes grainFloat {
      0% { transform: scale(2.5) translate(0, 0); }
      100% { transform: scale(2.5) translate(2px, -2px); }
    }
  `;
  document.head.appendChild(styleEl);
}

export function SPNoise({ intensity = 'content', mixBlendMode = 'overlay', position = 'absolute' }) {
  return null;
}

export function SPNav({ T, F, active = 'Work' }) {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = ['Work', 'Services', 'Contact'];
  const hrefs = { Work: '/work', Services: '/services', Contact: '/contact' };
  const navStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: isMobile ? '16px 20px' : '22px 40px', fontSize: 13, fontFamily: F.body,
    position: 'fixed', top: 0, left: 0, width: '100%', boxSizing: 'border-box', zIndex: 100,
    background: scrolled ? `${T.paper}cc` : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? `1px solid ${T.ink}11` : '1px solid transparent',
    transition: 'background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease, border-color 0.3s ease'
  };
  const logo = { fontFamily: F.display, fontSize: isMobile ? 20 : 22, fontWeight: 700, letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: 8, color: T.ink, textDecoration: 'none' };

  const mobileMenuWrap = {
    position: 'absolute', top: '100%', left: 0, right: 0, background: T.paper,
    display: menuOpen ? 'flex' : 'none', flexDirection: 'column', padding: '20px',
    borderBottom: `1px solid ${T.ink}`, boxShadow: `0 10px 20px rgba(0,0,0,0.1)`, zIndex: 101, gap: 10
  };

  const pillWrap = isMobile ? mobileMenuWrap : { display: 'flex', gap: 6, background: T.ink, padding: 4, borderRadius: 999, color: T.paper, fontSize: 12 };
  const pill = (a) => isMobile
    ? { padding: '16px 20px', color: a ? T.popA : T.ink, fontWeight: 700, fontSize: 'clamp(28px, 8vw, 36px)', fontFamily: F.display, letterSpacing: '-0.02em', textDecoration: 'none', borderBottom: `1px solid ${T.ink}22` }
    : { padding: '8px 16px', borderRadius: 999, background: a ? T.paper : 'transparent', color: a ? T.ink : T.paper, fontWeight: 500, textDecoration: 'none' };

  const cta = { background: T.popA, color: T.paper, padding: '10px 18px', borderRadius: 999, fontWeight: 500, fontSize: 13, border: `1px solid ${T.ink}`, textDecoration: 'none', display: isMobile ? 'none' : 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' };

  const handleCtaEnter = e => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = `3px 4px 0 ${T.ink}`;
  };
  const handleCtaLeave = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logo}>
        <img src="/logo.svg" alt="Blackspace" style={{ height: isMobile ? 30 : 36 }} />
      </Link>

      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', fontSize: 24, color: T.ink, cursor: 'pointer' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      )}

      <div style={pillWrap}>
        {items.map(it => <Link key={it} to={hrefs[it]} style={pill(active === it)} onClick={() => setMenuOpen(false)}>{it}</Link>)}
        {isMobile && <Link to="/contact" style={{ ...cta, display: 'block', marginTop: 16, textAlign: 'center', fontSize: 16, padding: '16px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }} onClick={() => setMenuOpen(false)} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>Start a project →</Link>}
      </div>

      {!isMobile && <Link to="/contact" style={cta} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>Start a project →</Link>}
    </nav>
  );
}



export function SPSticker({ T, F, top, left, right, bottom, rotate = 0, bg, variant = 'tape', tape, size = 'md', children, zIndex = 10, speed = 0.18, scale = 1 }) {
  const ref = useRef(null);
  useParallaxStyle(ref, speed);

  const dims = size === 'sm' ? { minW: 140, pad: '10px 14px' } : size === 'lg' ? { minW: 220, pad: '14px 18px' } : { minW: 170, pad: '12px 16px' };
  const shadowOffset = 3 + Math.floor(Math.abs(rotate) / 4);

  const baseWrapper = {
    position: 'absolute', top, left, right, bottom, zIndex, willChange: 'transform'
  };

  const baseInner = {
    transform: `scale(${scale}) rotate(${rotate}deg)`,
    background: bg,
    color: T.ink,
    padding: dims.pad,
    minWidth: dims.minW,
    boxShadow: `${shadowOffset}px ${shadowOffset + 1}px 0 ${T.ink}, 0 12px 24px rgba(0,0,0,0.12)`,
    border: `1px solid ${T.ink}`,
    fontFamily: F.body,
  };

  if (variant === 'torn') {
    baseInner.borderRadius = '4px 12px 6px 14px';
    baseInner.clipPath = 'polygon(0% 6%, 8% 0%, 92% 2%, 100% 10%, 98% 94%, 88% 100%, 12% 98%, 2% 92%)';
    baseInner.border = 'none';
    baseInner.boxShadow = `0 14px 28px rgba(0,0,0,0.18)`;
  } else if (variant === 'round') {
    baseInner.borderRadius = 999;
  } else if (variant === 'square') {
    baseInner.borderRadius = 6;
  } else {
    baseInner.borderRadius = 10;
  }

  const tapeStyle = tape ? {
    position: 'absolute', top: -12, left: '50%', marginLeft: -28,
    width: 56, height: 20, background: tape,
    opacity: 0.85,
    boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
    transform: `rotate(${rotate > 0 ? -3 : 4}deg)`,
    zIndex: 1,
    backgroundImage: `repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,0.04) 4px 5px)`,
  } : null;

  return (
    <div ref={ref} style={baseWrapper}>
      <div
        style={{ ...baseInner, transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
        className="sp-sticker"
        onMouseEnter={e => { e.currentTarget.style.transform = `rotate(${rotate}deg) translateY(-6px)`; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
        onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${rotate}deg)`; e.currentTarget.style.boxShadow = baseInner.boxShadow; }}
      >
        {tape && <div style={tapeStyle}></div>}
        <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
      </div>
    </div>
  );
}

export function SPStatusSticker(props) {
  const { T, F, icon, iconBg, label, name } = props;
  return (
    <SPSticker {...props}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: iconBg || T.ink, color: T.paper,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 14, fontFamily: F.display,
        }}>{icon}</div>
        <div>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7, fontFamily: F.body }}>{label}</div>
          <div style={{ fontSize: 13, fontWeight: 600, fontFamily: F.body, letterSpacing: '-0.005em' }}>{name}</div>
        </div>
      </div>
    </SPSticker>
  );
}

export function SPStar({ size = 80, color, rotate = 0, top, left, right, bottom, zIndex = 9, speed = 0.35 }) {
  const ref = useRef(null);
  useParallaxStyle(ref, speed);

  return (
    <div ref={ref} style={{ position: 'absolute', top, left, right, bottom, zIndex, willChange: 'transform', pointerEvents: 'none' }}>
      <div style={{
        width: size, height: size,
        transform: `rotate(${rotate}deg)`, background: color,
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      }}></div>
    </div>
  );
}

export function SPMarquee({ T, F, words, bg, fg }) {
  const isMobile = useIsMobile();
  const style = { background: bg || T.ink, color: fg || T.paper, padding: isMobile ? '12px 0' : '20px 0', overflow: 'hidden', whiteSpace: 'nowrap', fontFamily: F.display, fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}` };
  const sep = { display: 'inline-block', margin: '0 30px', color: T.popA };
  const list = [...words, ...words, ...words, ...words]; // repeat heavily for smooth infinite scrolling
  return (
    <div style={style}>
      <div className="sp-marquee-inner">
        {list.map((w, i) => (
          <span key={i}>
            {w}
            <span style={sep}>✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SPParallax({ children, speed = 0.05, style = {}, className = "" }) {
  const ref = useRef(null);
  useParallaxStyle(ref, speed);
  return (
    <div ref={ref} className={className} style={{ willChange: 'transform', display: 'block', ...style }}>
      {children}
    </div>
  );
}

export function SPSectionHead({ T, F, num, title, titleIt, dek, color }) {
  const isMobile = useIsMobile();
  const c = color || 'inherit';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '140px 1fr 300px', gap: isMobile ? 16 : 40, alignItems: 'flex-start', marginBottom: isMobile ? 40 : 100 }}>
      <span style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: F.body, color: c, marginTop: isMobile ? 0 : 24 }}>{num}</span>
      <SPParallax speed={0.04}>
        <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 12vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.94, margin: 0, color: c }}>
          {title} {titleIt && <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>{titleIt}</span>}
        </h2>
      </SPParallax>
      <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 18, margin: 0, opacity: 0.8, color: c, textAlign: isMobile ? 'left' : 'right', maxWidth: isMobile ? '100%' : 280, marginTop: isMobile ? 0 : 24 }}>{dek}</p>
    </div>
  );
}

export function SPFooter({ T, F }) {
  const isMobile = useIsMobile();
  const [kiriEnabled, setKiriEnabled] = React.useState(() => {
    return localStorage.getItem('kiri_enabled') !== 'false';
  });

  const toggleKiri = () => {
    const newState = !kiriEnabled;
    setKiriEnabled(newState);
    localStorage.setItem('kiri_enabled', newState);
    window.dispatchEvent(new Event('kiri_toggle'));
  };

  const footer = { padding: isMobile ? '40px 20px' : '40px', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: 40, borderTop: `1px solid ${T.ink}`, background: 'transparent', color: T.ink, fontFamily: F.body, fontSize: 13, overflowX: 'hidden', position: 'relative', overflow: 'hidden' };
  const h = { fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.7 };
  const bigWord = { fontFamily: F.display, fontSize: 'clamp(48px, 15vw, 120px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.9, margin: 0 };
  const it = { fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 };
  const col = { display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 2 };
  return (
    <footer style={footer}>
      <SPNoise intensity="footer" />
      <div style={isMobile ? { gridColumn: '1 / -1', marginBottom: 20, position: 'relative', zIndex: 2 } : { position: 'relative', zIndex: 2 }}>
        <h3 style={bigWord}>let's  <span style={it}>talk.</span></h3>
        <div style={{ marginTop: 20, fontSize: 14, opacity: 0.7 }}>© Blackspace™ 2026 — all feelings reserved.</div>
      </div>
      <div style={col}>
        <div style={h}>Studio</div>
        <Link to="/studio" style={{ color: T.ink, textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ color: T.ink, textDecoration: 'none' }}>Services</Link>
        <Link to="/work" style={{ color: T.ink, textDecoration: 'none' }}>Work</Link>
        <Link to="/journal" style={{ color: T.ink, textDecoration: 'none' }}>Journal</Link>
        <Link to="/homie" style={{ color: T.ink, textDecoration: 'none' }}>Homie</Link>
      </div>
      <div style={col}>
        <div style={h}>Contact</div>
        <span>hello@blackspace.media</span>
        <span>Bengaluru, IN</span>
        <span>+91 00 0000 0000</span>
      </div>
      <div style={col}>
        <div style={h}>Social</div>
        <span>Instagram ↗</span>
        <span>LinkedIn ↗</span>
        <button
          onClick={toggleKiri}
          style={{
            background: 'none', border: 'none', padding: 0, margin: '16px 0 0 0',
            color: T.ink, fontFamily: F.body, fontSize: 13, textAlign: 'left',
            cursor: 'pointer', opacity: 0.8, textDecoration: 'underline'
          }}
        >
          {kiriEnabled ? 'Disable Kiri 🐾' : 'Enable Kiri 🐾'}
        </button>
      </div>
    </footer>
  );
}

export function SPVideoCarousel({ T, F, items, title, titleIt, dek, bg, textColor }) {
  const isMobile = useIsMobile();
  const [activeIdx, setActiveIdx] = React.useState(Math.floor(items.length / 2));
  const videoRefs = React.useRef([]);

  React.useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid) {
        if (i === activeIdx) {
          vid.play().catch(() => { });
        } else {
          vid.pause();
        }
      }
    });
  }, [activeIdx]);

  const containerBg = bg || 'transparent';
  const txtColor = textColor || T.ink;

  return (
    <section style={{ padding: isMobile ? '20px 0' : '40px 0', background: containerBg, color: txtColor, overflowX: 'clip', overflowY: 'visible' }}>
      {(title || titleIt || dek) && (
        <div style={{ padding: '0 40px', marginBottom: 20 }}>
          <SPSectionHead T={T} F={F} num="§ 01 / Featured" title={title} titleIt={titleIt} dek={dek} color={txtColor} />
        </div>
      )}

      {/* Carousel Container */}
      <div style={{
        position: 'relative', height: isMobile ? 420 : 540, width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute',
          width: isMobile ? '80%' : '50%', height: '80%',
          background: 'radial-gradient(circle, rgba(220, 20, 20, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}></div>

        {/* Left Button */}
        <button
          onClick={() => setActiveIdx((activeIdx - 1 + items.length) % items.length)}
          style={{ position: 'absolute', left: isMobile ? 10 : 40, top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: 48, height: 48, borderRadius: 24, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: T.paper, border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', fontSize: 18 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >←</button>

        {/* Right Button */}
        <button
          onClick={() => setActiveIdx((activeIdx + 1) % items.length)}
          style={{ position: 'absolute', right: isMobile ? 10 : 40, top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: 48, height: 48, borderRadius: 24, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: T.paper, border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', fontSize: 18 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >→</button>

        {items.map((item, i) => {
          let offset = i - activeIdx;
          const halfLength = Math.floor(items.length / 2);
          if (offset > halfLength) {
            offset -= items.length;
          } else if (offset < -halfLength) {
            offset += items.length;
          }

          const isActive = offset === 0;
          const distance = Math.abs(offset);

          const scale = isActive ? 1 : 1 - (distance * 0.15);
          const translateX = offset * (isMobile ? 160 : 260); // tighter overlap
          const blur = isActive ? 0 : distance * 2;
          const zIndex = 10 - distance;
          const brightness = isActive ? 1 : Math.max(0.4, 1 - (distance * 0.4));
          const opacity = distance > 2 ? 0 : 1;

          return (
            <div
              key={i}
              onClick={() => { if (!isActive) setActiveIdx(i); }}
              style={{
                position: 'absolute',
                width: isMobile ? 240 : 360,
                height: isMobile ? 360 : 500,
                background: '#111',
                borderRadius: 24,
                overflow: 'hidden',
                border: `1px solid rgba(255,255,255,0.15)`,
                boxShadow: isActive ? `0 24px 60px rgba(0,0,0,0.8), 0 0 100px rgba(220, 20, 20, 0.4)` : '0 12px 30px rgba(0,0,0,0.5)',
                transform: `translateX(${translateX}px) scale(${scale})`,
                filter: `blur(${blur}px) brightness(${brightness})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: isActive ? 'default' : 'pointer',
                pointerEvents: opacity === 0 ? 'none' : 'auto'
              }}
            >
              <video
                src={item.vid}
                poster={item.poster}
                muted={!isActive} // sound only for active
                controls={isActive} // native controls when active
                playsInline
                loop
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.5s ease', pointerEvents: isActive ? 'auto' : 'none' }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.transform = 'scale(1)'; }}
                ref={el => videoRefs.current[i] = el}
              />

              {/* Custom Overlay (hidden when active so controls are visible) */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                opacity: isActive ? 0 : 1, transition: 'opacity 0.3s ease'
              }}>
                <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6, opacity: 0.8, color: T.paper }}>{item.category || 'Video'}</div>
                  <h3 style={{ fontFamily: F.display, fontSize: 24, margin: 0, fontWeight: 600, color: T.paper }}>{item.title}</h3>
                </div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.paper, fontSize: 24, border: '1px solid rgba(255,255,255,0.3)' }}>▶</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SPArcCarousel({ T, items }) {
  const containerRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { scrollLeft, clientWidth } = container;
          const center = scrollLeft + clientWidth / 2;
          
          const cards = trackRef.current.children;
          for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = cardCenter - center;
            
            // Normalize distance based on a fixed pixel width (e.g., 600px) so the curve is consistent regardless of screen size
            const normalizedDist = dist / (isMobile ? 300 : 600); 
            
            const absDist = Math.abs(normalizedDist);
            
            // y offset (parabola)
            const yOffset = Math.pow(absDist, 2) * (isMobile ? 80 : 120); 
            
            // rotation
            const rotation = normalizedDist * (isMobile ? 12 : 20);
            
            // scale
            const scale = Math.max(0.6, 1 - (Math.pow(absDist, 2) * 0.15));

            // z-index
            const zIndex = 100 - Math.round(absDist * 10);
            
            // brightness to simulate lighting/shadows at the edges
            const brightness = Math.max(0.4, 1 - (absDist * 0.4));
            
            card.style.transform = `translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`;
            card.style.zIndex = zIndex;
            card.style.filter = `brightness(${brightness})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load and after images load
    handleScroll();
    setTimeout(handleScroll, 100);
    setTimeout(handleScroll, 500);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile]);

  // We add pseudo-elements for padding to ensure the first and last items can reach the center
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: isMobile ? '60px 0 100px 0' : '100px 0 160px 0', background: 'transparent' }}>
      <div 
        ref={containerRef}
        className="no-scrollbar"
        style={{ 
          overflowX: 'auto', 
          display: 'flex', 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          alignItems: 'center'
        }}
      >
        <div style={{ minWidth: `calc(50vw - ${isMobile ? 100 : 150}px)`, flexShrink: 0 }}></div>
        <div ref={trackRef} style={{ display: 'flex', gap: isMobile ? 20 : 40, alignItems: 'center' }}>
          {items.map((img, idx) => (
            <div 
              key={idx} 
              style={{
                height: isMobile ? 320 : 480,
                width: isMobile ? 220 : 340, // fixed width to prevent reflow
                flexShrink: 0,
                scrollSnapAlign: 'center',
                borderRadius: 20,
                border: `1px solid rgba(255,255,255,0.1)`,
                boxShadow: `0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)`,
                background: '#111',
                overflow: 'hidden',
                transition: 'transform 0.1s ease-out',
                transformOrigin: 'bottom center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                willChange: 'transform'
              }}
            >
              <img src={img} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="Poster" />
            </div>
          ))}
        </div>
        <div style={{ minWidth: `calc(50vw - ${isMobile ? 100 : 150}px)`, flexShrink: 0 }}></div>
      </div>
    </div>
  );
}
