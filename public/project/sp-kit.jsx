/* global React */
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

// Shared Sticker Pop tokens + components — used across all pages

window.SP_THEMES = {
  classic: {
    name: 'Classic',
    paper: '#f2ede2',
    ink: '#0a0a0a',
    pastels: ['#9de6d8', '#dfc4f0', '#a7d0f5', '#f5d77a', '#f6b39a'],
    popA: '#FF4D1A',
    popB: '#FF2E8B',
    popC: '#2E4CFF',
  },
  citrus: {
    name: 'Citrus',
    paper: '#f5f0e4',
    ink: '#111',
    pastels: ['#fff2b0', '#ffd6a5', '#c4e9b0', '#d9f1ff', '#f4c9d4'],
    popA: '#FF6A00',
    popB: '#E4003A',
    popC: '#007A3D',
  },
  bubblegum: {
    name: 'Bubblegum',
    paper: '#f6efe7',
    ink: '#0c0c0c',
    pastels: ['#ffc9df', '#c9e4ff', '#e3d5ff', '#d0f0c0', '#fff1a8'],
    popA: '#FF2E8B',
    popB: '#6A2EFF',
    popC: '#FF4D1A',
  },
  marine: {
    name: 'Marine',
    paper: '#eee8db',
    ink: '#0a1a24',
    pastels: ['#bde0e8', '#c9e6c2', '#f0d9b8', '#ead6ea', '#d5e3f4'],
    popA: '#0040D8',
    popB: '#FF4D1A',
    popC: '#009A68',
  },
  neon: {
    name: 'Neon pastel',
    paper: '#f0ece0',
    ink: '#0a0a0a',
    pastels: ['#baf0a8', '#c0f0ef', '#f0c0e8', '#f0e8a8', '#ffcfb8'],
    popA: '#FF2E8B',
    popB: '#C8FF00',
    popC: '#2E4CFF',
  },
};

window.SP_TYPE = {
  acidGaraHelv: {
    name: 'Acid™ · Garamond · Helvetica',
    display: '"Space Grotesk", "Acid Grotesk", "Helvetica Neue", sans-serif',
    italic: '"EB Garamond", "Apple Garamond", Garamond, serif',
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  allHelv: {
    name: 'All Helvetica',
    display: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    italic: '"EB Garamond", "Apple Garamond", Garamond, serif',
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  serifFirst: {
    name: 'Garamond-led',
    display: '"EB Garamond", "Apple Garamond", Garamond, serif',
    italic: '"EB Garamond", "Apple Garamond", Garamond, serif',
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
};

// --- Nav ---
window.useIsMobile = function () {
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

window.useParallaxStyle = function (ref, speed) {
  React.useEffect(() => {
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
      // Lerp currentY towards targetY for buttery smoothness
      currentY += (targetY - currentY) * 0.08;

      if (ref.current && Math.abs(targetY - currentY) > 0.01) {
        ref.current.style.transform = `translate3d(0, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    setTimeout(() => {
      updateBase();
      loop(); // start animation loop
    }, 150);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateBase);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBase);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);
};

window.SPNav = function SPNav({ T, F, active = 'Work' }) {
  const isMobile = window.useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const items = ['Work', 'Studio', 'Services', 'Journal', 'Contact'];
  const hrefs = { Work: 'work.html', Studio: 'studio.html', Services: 'services.html', Journal: 'journal.html', Contact: 'contact.html' };
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

  const cta = { background: T.popA, color: T.paper, padding: '10px 18px', borderRadius: 999, fontWeight: 500, fontSize: 13, border: `1px solid ${T.ink}`, textDecoration: 'none', display: isMobile ? 'none' : 'block' };

  return (
    <nav style={navStyle}>
      <a href="index.html" style={logo}>
        <img src="../logo.svg" alt="Blackspace" style={{ height: isMobile ? 30 : 36 }} />
      </a>

      {isMobile && (
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', fontSize: 24, color: T.ink, cursor: 'pointer' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      )}

      <div style={pillWrap}>
        {items.map(it => <a key={it} href={hrefs[it]} style={pill(active === it)}>{it}</a>)}
        {isMobile && <a href="contact.html" style={{ ...cta, display: 'block', marginTop: 16, textAlign: 'center', fontSize: 16, padding: '16px', fontFamily: F.body }}>Start a project →</a>}
      </div>

      {!isMobile && <a href="contact.html" style={cta}>Start a project →</a>}
    </nav>
  );
};

// --- Sticker (handmade feel) ---
// variants: tape, torn, round, square; rotation, shadow, tape colors
window.SPSticker = function SPSticker({ T, F, top, left, right, bottom, rotate = 0, bg, variant = 'tape', tape, size = 'md', children, zIndex = 10, speed = 0.18 }) {
  const ref = React.useRef(null);
  window.useParallaxStyle(ref, speed);

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
    // rough-edge paper: skew slightly + slight clip
    baseInner.borderRadius = '4px 12px 6px 14px';
    baseInner.clipPath = 'polygon(0% 6%, 8% 0%, 92% 2%, 100% 10%, 98% 94%, 88% 100%, 12% 98%, 2% 92%)';
    baseInner.border = 'none';
    baseInner.boxShadow = `0 14px 28px rgba(0,0,0,0.18)`;
  } else if (variant === 'round') {
    baseInner.borderRadius = 999;
  } else if (variant === 'square') {
    baseInner.borderRadius = 6;
  } else {
    // tape/index card
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
};

// --- Sticker label (icon + label + name) ---
window.SPStatusSticker = function SPStatusSticker(props) {
  const { T, F, icon, iconBg, label, name } = props;
  return (
    <window.SPSticker {...props}>
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
    </window.SPSticker>
  );
};

// --- Star shape ---
window.SPStar = function SPStar({ size = 80, color, rotate = 0, top, left, right, bottom, zIndex = 9, speed = 0.35 }) {
  const ref = React.useRef(null);
  window.useParallaxStyle(ref, speed);

  return (
    <div ref={ref} style={{ position: 'absolute', top, left, right, bottom, zIndex, willChange: 'transform', pointerEvents: 'none' }}>
      <div style={{
        width: size, height: size,
        transform: `rotate(${rotate}deg)`, background: color,
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      }}></div>
    </div>
  );
};

// --- Marquee strip ---
window.SPMarquee = function SPMarquee({ T, F, words, bg, fg }) {
  const isMobile = window.useIsMobile();
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
};

// --- Parallax Wrapper ---
window.SPParallax = function SPParallax({ children, speed = 0.05, style = {}, className = "" }) {
  const ref = React.useRef(null);
  window.useParallaxStyle(ref, speed);
  return (
    <div ref={ref} className={className} style={{ willChange: 'transform', display: 'block', ...style }}>
      {children}
    </div>
  );
};

// --- Section head (num / title / dek) ---
window.SPSectionHead = function SPSectionHead({ T, F, num, title, titleIt, dek, color }) {
  const isMobile = window.useIsMobile();
  const c = color || 'inherit';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '140px 1fr 300px', gap: isMobile ? 16 : 40, alignItems: isMobile ? 'flex-start' : 'baseline', marginBottom: isMobile ? 40 : 60 }}>
      <span style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: F.body, color: c }}>{num}</span>
      <window.SPParallax speed={0.06}>
        <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 12vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.94, margin: 0, color: c }}>
          {title} {titleIt && <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>{titleIt}</span>}
        </h2>
      </window.SPParallax>
      <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 18, margin: 0, opacity: 0.8, color: c, textAlign: isMobile ? 'left' : 'right', maxWidth: isMobile ? '100%' : 280 }}>{dek}</p>
    </div>
  );
};

// --- Footer ---
window.SPFooter = function SPFooter({ T, F }) {
  const isMobile = window.useIsMobile();
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
        <a href="studio.html" style={{ color: T.ink, textDecoration: 'none' }}>About</a>
        <a href="services.html" style={{ color: T.ink, textDecoration: 'none' }}>Services</a>
        <a href="work.html" style={{ color: T.ink, textDecoration: 'none' }}>Work</a>
        <a href="#" style={{ color: T.ink, textDecoration: 'none' }}>Journal</a>
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
};
