/* global React */

function BrutalistDirection() {
  const bg = '#ededed';
  const fg = '#0a0a0a';
  const accent = '#FF4500';

  const brutalistStyles = {
    root: {
      width: 1440,
      minHeight: 2400,
      background: bg,
      color: fg,
      fontFamily: '"JetBrains Mono", ui-monospace, "Courier New", monospace',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `linear-gradient(${fg}0a 1px, transparent 1px), linear-gradient(90deg, ${fg}0a 1px, transparent 1px)`,
      backgroundSize: '48px 48px',
    },
    topBar: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      borderBottom: `2px solid ${fg}`,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    topCell: (span = 1, align = 'left') => ({
      gridColumn: `span ${span}`,
      padding: '14px 16px',
      borderRight: `2px solid ${fg}`,
      textAlign: align,
    }),
    blink: {
      display: 'inline-block',
      width: 8,
      height: 8,
      background: accent,
      borderRadius: '50%',
      marginRight: 8,
      verticalAlign: 'middle',
    },
    hero: {
      padding: '60px 48px 40px',
      borderBottom: `2px solid ${fg}`,
      position: 'relative',
    },
    heroMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginBottom: 40,
    },
    heroTitle: {
      fontSize: 180,
      lineHeight: 0.88,
      letterSpacing: '-0.04em',
      fontWeight: 700,
      margin: 0,
      fontFamily: '"Space Grotesk", "Helvetica Neue", sans-serif',
    },
    heroMediaRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 0,
      marginTop: 40,
      border: `2px solid ${fg}`,
    },
    heroMedia: {
      height: 520,
      background: `repeating-linear-gradient(0deg, ${fg}18 0 2px, transparent 2px 8px), #8f8f8f`,
      borderRight: `2px solid ${fg}`,
      position: 'relative',
    },
    heroCaption: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      background: fg,
      color: bg,
      padding: '6px 12px',
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    heroSide: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: 13,
      lineHeight: 1.55,
    },
    heroSideTitle: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      fontFamily: '"Space Grotesk", sans-serif',
      margin: 0,
    },
    badge: {
      display: 'inline-block',
      border: `2px solid ${fg}`,
      padding: '6px 10px',
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginRight: 6,
      marginBottom: 6,
    },
    section: {
      borderBottom: `2px solid ${fg}`,
    },
    sectionHead: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderBottom: `2px solid ${fg}`,
    },
    sectionHeadCell: {
      padding: '20px 48px',
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    sectionTitle: {
      padding: '48px 48px 60px',
      fontSize: 96,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
      fontFamily: '"Space Grotesk", sans-serif',
      margin: 0,
    },
    servicesTable: {
      borderTop: `2px solid ${fg}`,
    },
    svcRow: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 2fr 120px',
      borderBottom: `2px solid ${fg}`,
      alignItems: 'center',
    },
    svcCell: {
      padding: '28px 24px',
      borderRight: `2px solid ${fg}`,
      fontSize: 14,
    },
    svcName: {
      fontSize: 32,
      fontWeight: 700,
      fontFamily: '"Space Grotesk", sans-serif',
      letterSpacing: '-0.02em',
    },
    bento: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoRows: 140,
      borderTop: `2px solid ${fg}`,
    },
    bentoCell: (col, row, bg) => ({
      gridColumn: `span ${col}`,
      gridRow: `span ${row}`,
      background: bg,
      borderRight: `2px solid ${fg}`,
      borderBottom: `2px solid ${fg}`,
      position: 'relative',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
    }),
    bentoTag: {
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      background: fg,
      color: bg,
      padding: '4px 8px',
      display: 'inline-block',
      width: 'fit-content',
    },
    bentoNum: {
      fontSize: 64,
      fontWeight: 700,
      fontFamily: '"Space Grotesk", sans-serif',
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: fg,
    },
    bentoNumLight: {
      fontSize: 64,
      fontWeight: 700,
      fontFamily: '"Space Grotesk", sans-serif',
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: bg,
    },
    bentoTitle: {
      fontSize: 22,
      fontWeight: 700,
      fontFamily: '"Space Grotesk", sans-serif',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      marginTop: 8,
    },
    ticker: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '20px 0',
      borderBottom: `2px solid ${fg}`,
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontFamily: '"Space Grotesk", sans-serif',
    },
    tickerInner: { display: 'inline-block' },
    star: { color: accent, display: 'inline-block', margin: '0 24px' },
    whyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: `2px solid ${fg}`,
    },
    whyCell: {
      padding: 32,
      borderRight: `2px solid ${fg}`,
      borderBottom: `2px solid ${fg}`,
      minHeight: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    whyNum: {
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      opacity: 0.6,
    },
    whyText: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      fontFamily: '"Space Grotesk", sans-serif',
    },
    whyNote: {
      fontSize: 12,
      lineHeight: 1.5,
      opacity: 0.7,
    },
    cta: {
      padding: '100px 48px',
      background: fg,
      color: bg,
      position: 'relative',
    },
    ctaLine: {
      fontSize: 220,
      fontWeight: 700,
      lineHeight: 0.88,
      letterSpacing: '-0.05em',
      fontFamily: '"Space Grotesk", sans-serif',
      margin: 0,
    },
    ctaMeta: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
      marginTop: 60,
      fontSize: 12,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      borderTop: `2px solid ${bg}`,
      paddingTop: 24,
    },
    ctaBtn: {
      display: 'inline-block',
      marginTop: 40,
      padding: '24px 40px',
      background: accent,
      color: fg,
      border: `2px solid ${bg}`,
      fontSize: 14,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  };

  const services = [
    { n: '01', name: 'Social Media', desc: 'Feeds, reels, posting schedules, and the occasional viral accident.', tag: '→ Monthly' },
    { n: '02', name: 'Content Strategy', desc: 'A plan so your intern doesn’t post a meme at 3am again.', tag: '→ Quarterly' },
    { n: '03', name: 'Brand Identity', desc: 'Logo, type, palette, rules, vibes. In that order.', tag: '→ Project' },
    { n: '04', name: 'Websites', desc: 'Fast, legible, scrollable, explainable to your CFO.', tag: '→ Project' },
    { n: '05', name: 'Creative Production', desc: 'We show up with cameras, lights, and opinions.', tag: '→ Shoot' },
    { n: '06', name: 'Campaigns', desc: 'Big idea. Small deck. Loud rollout.', tag: '→ Project' },
  ];

  const bento = [
    { col: 6, row: 3, bg: `repeating-linear-gradient(90deg, ${fg}20 0 2px, transparent 2px 12px), #ff7043`, n: '01', title: 'OKINAWA — Fitness brand film', tag: 'Film / 2025', light: true },
    { col: 3, row: 2, bg: `repeating-linear-gradient(45deg, ${fg}14 0 2px, transparent 2px 10px), #c9c9c9`, n: '02', title: 'Monarc — identity system', tag: 'Brand' },
    { col: 3, row: 2, bg: accent, n: '03', title: 'Cut — skincare launch', tag: 'Campaign' },
    { col: 3, row: 1, bg: fg, n: '04', title: 'RxRun playbook', tag: 'Strategy', light: true },
    { col: 3, row: 1, bg: `repeating-linear-gradient(135deg, ${fg}14 0 2px, transparent 2px 10px), #d9d9d9`, n: '05', title: 'Office Hours — podcast', tag: 'Content' },
    { col: 4, row: 2, bg: `repeating-linear-gradient(0deg, ${fg}18 0 2px, transparent 2px 8px), #8a8a8a`, n: '06', title: 'Heirloom — lookbook', tag: 'Fashion' },
    { col: 4, row: 2, bg: `repeating-linear-gradient(90deg, ${fg}18 0 2px, transparent 2px 8px), #a8a8a8`, n: '07', title: 'Studio Reel — Q1', tag: 'Reel' },
    { col: 4, row: 2, bg: `repeating-linear-gradient(45deg, ${fg}14 0 2px, transparent 2px 10px), #bababa`, n: '08', title: 'Corporate explainer', tag: 'Talking Heads' },
  ];

  const why = [
    { n: '01', text: 'We reply in working hours. Mostly.', note: 'Slack, WhatsApp, email, pigeon.' },
    { n: '02', text: 'Small team. Senior hands.', note: 'No layers, no project managers performing project management.' },
    { n: '03', text: 'Strategy is not a deck.', note: 'It’s the reason the deck exists.' },
    { n: '04', text: 'We care about the 2am details.', note: 'Kerning. Cuts. Color. Compression.' },
    { n: '05', text: 'AI-assisted, human-approved.', note: 'Faster drafts. Smarter ideas. Same taste.' },
    { n: '06', text: 'Tight deadlines? We’re fine.', note: 'As long as you are.' },
  ];

  return (
    <div style={brutalistStyles.root}>
      <div style={brutalistStyles.topBar}>
        <div style={brutalistStyles.topCell(1)}><span style={brutalistStyles.blink}></span>LIVE</div>
        <div style={brutalistStyles.topCell(2)}>BLACKSPACE/INDEX</div>
        <div style={brutalistStyles.topCell(2)}>BENGALURU, IN — 12.97°N</div>
        <div style={brutalistStyles.topCell(1)}>IST 14:22</div>
        <div style={brutalistStyles.topCell(2)}>V. 2025.04</div>
        <div style={brutalistStyles.topCell(1, 'center')}>WORK</div>
        <div style={brutalistStyles.topCell(1, 'center')}>STUDIO</div>
        <div style={brutalistStyles.topCell(1, 'center')}>JOURNAL</div>
        <div style={{ ...brutalistStyles.topCell(1, 'center'), background: accent, color: fg, borderRight: 'none' }}>CONTACT ↗</div>
      </div>

      <section style={brutalistStyles.hero}>
        <div style={brutalistStyles.heroMeta}>
          <span>[01] — The Studio</span>
          <span>A creative studio, probably the one you want.</span>
        </div>
        <h1 style={brutalistStyles.heroTitle}>A STUDIO<br />FOR BRANDS<br />WITH<br /><span style={{ color: accent }}>OPINIONS.</span></h1>
        <div style={brutalistStyles.heroMediaRow}>
          <div style={brutalistStyles.heroMedia}>
            <span style={brutalistStyles.heroCaption}>REEL — 2024 HIGHLIGHTS — 01:42</span>
          </div>
          <div style={brutalistStyles.heroSide}>
            <div>
              <h3 style={brutalistStyles.heroSideTitle}>Strategy, design, visual storytelling — the unglamorous parts included.</h3>
              <p style={{ marginTop: 20, opacity: 0.7 }}>
                We’ve been making work for founders, athletes, brands that sell soap, brands that sell sweat, and at least one cloud company.
              </p>
            </div>
            <div>
              <span style={brutalistStyles.badge}>• FITNESS</span>
              <span style={brutalistStyles.badge}>• LIFESTYLE</span>
              <span style={brutalistStyles.badge}>• FASHION</span>
              <span style={brutalistStyles.badge}>• HEALTH</span>
              <span style={brutalistStyles.badge}>• CORPORATE</span>
            </div>
          </div>
        </div>
      </section>

      <section style={brutalistStyles.section}>
        <div style={brutalistStyles.sectionHead}>
          <div style={brutalistStyles.sectionHeadCell}>[02] — Services — Six of them</div>
          <div style={{ ...brutalistStyles.sectionHeadCell, borderLeft: `2px solid ${fg}`, textAlign: 'right' }}>→ Scroll for the catalog</div>
        </div>
        <h2 style={brutalistStyles.sectionTitle}>What lands on the invoice.</h2>
        <div style={brutalistStyles.servicesTable}>
          {services.map((s, i) => (
            <div key={i} style={brutalistStyles.svcRow}>
              <div style={brutalistStyles.svcCell}>{s.n}</div>
              <div style={{ ...brutalistStyles.svcCell }}><span style={brutalistStyles.svcName}>{s.name}</span></div>
              <div style={{ ...brutalistStyles.svcCell, opacity: 0.75 }}>{s.desc}</div>
              <div style={{ ...brutalistStyles.svcCell, borderRight: 'none', textAlign: 'right', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={brutalistStyles.ticker}>
        <div style={brutalistStyles.tickerInner}>
          SELECTED WORKS &nbsp;<span style={brutalistStyles.star}>◆</span>&nbsp; 2024\u20132025 &nbsp;<span style={brutalistStyles.star}>◆</span>&nbsp; FILM / BRAND / WEB &nbsp;<span style={brutalistStyles.star}>◆</span>&nbsp; SELECTED WORKS &nbsp;<span style={brutalistStyles.star}>◆</span>&nbsp; 2024\u20132025 &nbsp;<span style={brutalistStyles.star}>◆</span>
        </div>
      </div>

      <section style={brutalistStyles.section}>
        <div style={brutalistStyles.sectionHead}>
          <div style={brutalistStyles.sectionHeadCell}>[03] — The Folio</div>
          <div style={{ ...brutalistStyles.sectionHeadCell, borderLeft: `2px solid ${fg}`, textAlign: 'right' }}>8 pieces / 42 unshipped</div>
        </div>
        <div style={brutalistStyles.bento}>
          {bento.map((b, i) => (
            <div key={i} style={brutalistStyles.bentoCell(b.col, b.row, b.bg)}>
              <span style={b.light ? { ...brutalistStyles.bentoTag, background: bg, color: fg } : brutalistStyles.bentoTag}>{b.tag}</span>
              <div>
                <div style={b.light ? brutalistStyles.bentoNumLight : brutalistStyles.bentoNum}>{b.n}</div>
                <div style={{ ...brutalistStyles.bentoTitle, color: b.light ? bg : fg }}>{b.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={brutalistStyles.section}>
        <div style={brutalistStyles.sectionHead}>
          <div style={brutalistStyles.sectionHeadCell}>[04] — Why Us — Six reasons</div>
          <div style={{ ...brutalistStyles.sectionHeadCell, borderLeft: `2px solid ${fg}`, textAlign: 'right' }}>Take what’s useful</div>
        </div>
        <h2 style={brutalistStyles.sectionTitle}>Arguments, for the record.</h2>
        <div style={brutalistStyles.whyGrid}>
          {why.map((w, i) => (
            <div key={i} style={{
              ...brutalistStyles.whyCell,
              background: i === 2 ? accent : 'transparent',
              borderRight: (i + 1) % 3 === 0 ? 'none' : `2px solid ${fg}`,
            }}>
              <span style={brutalistStyles.whyNum}>[{w.n}]</span>
              <div>
                <div style={brutalistStyles.whyText}>{w.text}</div>
                <div style={{ ...brutalistStyles.whyNote, marginTop: 12 }}>{w.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={brutalistStyles.cta}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20, opacity: 0.6 }}>[05] — THE END / OR THE START</div>
        <h2 style={brutalistStyles.ctaLine}>HIRE US.<br />OR DON’T.<br /><span style={{ color: accent }}>BUT HIRE US.</span></h2>
        <a style={brutalistStyles.ctaBtn}>CONTACT ↗</a>
        <div style={brutalistStyles.ctaMeta}>
          <div>HELLO@BLACKSPACE.MEDIA</div>
          <div>BENGALURU — IST</div>
          <div>INSTAGRAM ↗</div>
          <div>LINKEDIN ↗</div>
        </div>
      </section>
    </div>
  );
}

window.BrutalistDirection = BrutalistDirection;
