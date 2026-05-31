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
    .sp-marquee-inner {
      display: inline-block;
      white-space: nowrap;
      animation: marqueeScroll 35s linear infinite;
    }
  `;
  document.head.appendChild(styleEl);
}

export function SPNav({ T, F, active = 'Work' }) {
  const isMobile = useIsMobile();
  const [menuOpen, React_useState] = React.useState(false);
  const setMenuOpen = React_useState;

  const items = ['Work', 'Studio', 'Services', 'Journal', 'Contact'];
  const hrefs = { Work: '/work', Studio: '/studio', Services: '/services', Journal: '/journal', Contact: '/contact' };
  const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: isMobile ? '16px 20px' : '22px 40px', fontSize: 13, fontFamily: F.body, position: 'sticky', top: 0, zIndex: 100, background: `${T.paper}cc`, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: `1px solid ${T.ink}11` };
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

  const cta = { background: T.popA, color: T.paper, padding: '10px 18px', borderRadius: 999, fontWeight: 500, fontSize: 13, border: `1px solid ${T.ink}`, textDecoration: 'none', display: isMobile ? 'none' : 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease' };

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
        {isMobile && <Link to="/contact" style={{ ...cta, display: 'block', marginTop: 16, textAlign: 'center', fontSize: 16, padding: '16px', fontFamily: F.body }} onClick={() => setMenuOpen(false)} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>Start a project →</Link>}
      </div>

      {!isMobile && <Link to="/contact" style={cta} onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave}>Start a project →</Link>}
    </nav>
  );
}

export function SPSticker({ T, F, top, left, right, bottom, rotate = 0, bg, variant = 'tape', tape, size = 'md', children, zIndex = 10, speed = 0.18 }) {
  const ref = useRef(null);
  useParallaxStyle(ref, speed);

  const dims = size === 'sm' ? { minW: 140, pad: '10px 14px' } : size === 'lg' ? { minW: 220, pad: '14px 18px' } : { minW: 170, pad: '12px 16px' };
  const shadowOffset = 3 + Math.floor(Math.abs(rotate) / 4);

  const baseWrapper = {
    position: 'absolute', top, left, right, bottom, zIndex, willChange: 'transform'
  };

  const baseInner = {
    transform: `rotate(${rotate}deg)`,
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
  const footer = { padding: isMobile ? '40px 20px' : '40px', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: 40, borderTop: `1px solid ${T.ink}`, background: T.paper, color: T.ink, fontFamily: F.body, fontSize: 13, overflowX: 'hidden' };
  const h = { fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.7 };
  const bigWord = { fontFamily: F.display, fontSize: 'clamp(48px, 15vw, 120px)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.9, margin: 0 };
  const it = { fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 };
  const col = { display: 'flex', flexDirection: 'column', gap: 8 };
  return (
    <footer style={footer}>
      <div style={isMobile ? { gridColumn: '1 / -1', marginBottom: 20 } : {}}>
        <h3 style={bigWord}>let's<span style={it}>talk.</span></h3>
        <div style={{ marginTop: 20, fontSize: 14, opacity: 0.7 }}>© Blackspace™ 2025 — all feelings reserved.</div>
      </div>
      <div style={col}>
        <div style={h}>Studio</div>
        <Link to="/studio" style={{ color: T.ink, textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ color: T.ink, textDecoration: 'none' }}>Services</Link>
        <Link to="/work" style={{ color: T.ink, textDecoration: 'none' }}>Work</Link>
        <Link to="/journal" style={{ color: T.ink, textDecoration: 'none' }}>Journal</Link>
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
        <span>Vimeo ↗</span>
      </div>
    </footer>
  );
}
