/* global React */
const { useState } = React;

function EditorialDirection() {
  const accent = '#E64B1F'; // warm vermillion
  const ink = '#1a1612';
  const paper = '#f4efe6';

  const editorialStyles = {
    root: {
      width: 1440,
      minHeight: 2400,
      background: paper,
      color: ink,
      fontFamily: '"EB Garamond", "Cormorant Garamond", Georgia, serif',
      position: 'relative',
      overflow: 'hidden',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '28px 60px',
      borderBottom: `1px solid ${ink}22`,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    navLinks: { display: 'flex', gap: 28 },
    masthead: {
      padding: '80px 60px 40px',
      borderBottom: `1px solid ${ink}22`,
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'end',
      gap: 40,
    },
    issueMeta: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: ink,
      opacity: 0.6,
    },
    wordmark: {
      fontSize: 220,
      lineHeight: 0.85,
      fontWeight: 500,
      letterSpacing: '-0.04em',
      fontStyle: 'italic',
      margin: 0,
    },
    dek: {
      fontSize: 22,
      lineHeight: 1.35,
      maxWidth: 420,
      textAlign: 'right',
      fontStyle: 'italic',
      color: ink,
      opacity: 0.85,
    },
    hero: {
      position: 'relative',
      height: 720,
      margin: '40px 60px',
      background: `repeating-linear-gradient(45deg, ${ink}10 0 2px, transparent 2px 14px), #b8a890`,
      overflow: 'hidden',
      border: `1px solid ${ink}22`,
    },
    heroLabel: {
      position: 'absolute',
      top: 20,
      left: 20,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: paper,
      background: ink,
      padding: '6px 10px',
    },
    heroOverlay: {
      position: 'absolute',
      bottom: 48,
      left: 48,
      right: 48,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      color: paper,
      mixBlendMode: 'difference',
    },
    heroTitle: {
      fontSize: 96,
      lineHeight: 0.95,
      fontStyle: 'italic',
      margin: 0,
      fontWeight: 400,
      maxWidth: 800,
    },
    pageNum: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 14,
      letterSpacing: '0.2em',
    },
    section: {
      padding: '80px 60px',
      borderTop: `1px solid ${ink}22`,
    },
    sectionHead: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 1fr',
      gap: 40,
      marginBottom: 60,
      alignItems: 'baseline',
    },
    sectionNum: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.2em',
      color: accent,
    },
    sectionKicker: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      opacity: 0.6,
    },
    h2: {
      fontSize: 84,
      lineHeight: 0.95,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      margin: 0,
      fontStyle: 'italic',
    },
    columns: {
      columnCount: 2,
      columnGap: 60,
      fontSize: 20,
      lineHeight: 1.5,
      textAlign: 'justify',
      hyphens: 'auto',
      maxWidth: 960,
    },
    dropcap: {
      float: 'left',
      fontSize: 110,
      lineHeight: 0.85,
      paddingRight: 10,
      paddingTop: 6,
      color: accent,
      fontStyle: 'italic',
      fontWeight: 500,
    },
    services: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 1fr 1fr',
      gap: 40,
      marginTop: 40,
    },
    serviceItem: {
      borderTop: `1px solid ${ink}44`,
      paddingTop: 20,
    },
    serviceName: {
      fontSize: 28,
      fontStyle: 'italic',
      margin: '0 0 12px',
      fontWeight: 500,
    },
    serviceBody: {
      fontSize: 14,
      lineHeight: 1.5,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      opacity: 0.7,
    },
    bento: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateRows: 'repeat(3, 200px)',
      gap: 16,
      marginTop: 40,
    },
    bentoCell: (span, rows, bg) => ({
      gridColumn: `span ${span}`,
      gridRow: `span ${rows}`,
      background: bg || `repeating-linear-gradient(45deg, ${ink}10 0 2px, transparent 2px 14px), #c9b9a0`,
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid ${ink}22`,
    }),
    bentoCaption: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      right: 12,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: paper,
      background: ink,
      padding: '4px 8px',
      display: 'inline-block',
      width: 'fit-content',
    },
    bentoNumber: {
      position: 'absolute',
      top: 12,
      right: 16,
      fontSize: 48,
      fontStyle: 'italic',
      color: paper,
      mixBlendMode: 'difference',
      fontWeight: 500,
    },
    manifesto: {
      padding: '120px 60px',
      background: ink,
      color: paper,
      borderTop: `1px solid ${ink}22`,
    },
    manifestoText: {
      fontSize: 72,
      lineHeight: 1.05,
      fontStyle: 'italic',
      maxWidth: 1100,
      fontWeight: 400,
      margin: 0,
      letterSpacing: '-0.015em',
    },
    manifestoAccent: { color: accent, fontStyle: 'italic' },
    whyUs: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      marginTop: 40,
    },
    whyRow: {
      display: 'grid',
      gridTemplateColumns: '60px 1fr',
      gap: 24,
      padding: '28px 0',
      borderTop: `1px solid ${ink}44`,
      alignItems: 'baseline',
    },
    whyNum: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.2em',
      opacity: 0.5,
    },
    whyText: {
      fontSize: 26,
      lineHeight: 1.2,
      fontStyle: 'italic',
      fontWeight: 500,
    },
    cta: {
      padding: '160px 60px',
      textAlign: 'center',
      borderTop: `1px solid ${ink}22`,
    },
    ctaHead: {
      fontSize: 180,
      lineHeight: 0.9,
      fontStyle: 'italic',
      fontWeight: 500,
      letterSpacing: '-0.03em',
      margin: 0,
    },
    ctaSub: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginTop: 32,
      opacity: 0.6,
    },
    ctaButton: {
      display: 'inline-block',
      marginTop: 40,
      padding: '22px 56px',
      background: ink,
      color: paper,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      border: 'none',
    },
    footer: {
      padding: '40px 60px',
      borderTop: `1px solid ${ink}22`,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      opacity: 0.6,
    },
  };

  const services = [
    { name: 'Social Media', note: 'Feeds that don’t look like everyone else’s.' },
    { name: 'Content Strategy', note: 'We plan, then we play.' },
    { name: 'Brand Identity', note: 'Logos that survive the founder changing their mind.' },
    { name: 'Websites', note: 'Loads fast. Looks expensive.' },
    { name: 'Creative Production', note: 'Cameras, coffee, ideas, chaos — in that order.' },
    { name: 'Campaigns', note: 'Concepts first. Assets second. Panic never.' },
  ];

  const bento = [
    { span: 3, rows: 2, label: 'Fitness — Reel Series', num: '01', bg: `repeating-linear-gradient(45deg, ${ink}12 0 2px, transparent 2px 12px), #d4a574` },
    { span: 3, rows: 1, label: 'Lifestyle — Campaign', num: '02', bg: `repeating-linear-gradient(0deg, ${ink}10 0 1px, transparent 1px 10px), #a89685` },
    { span: 2, rows: 1, label: 'Fashion — Lookbook', num: '03', bg: `repeating-linear-gradient(90deg, ${ink}10 0 1px, transparent 1px 10px), #c9b9a0` },
    { span: 1, rows: 1, label: 'Logo', num: '04', bg: accent },
    { span: 2, rows: 2, label: 'Health — Long Form', num: '05', bg: `repeating-linear-gradient(45deg, ${ink}10 0 2px, transparent 2px 16px), #8a7a6a` },
    { span: 2, rows: 1, label: 'Corporate Reel', num: '06', bg: `repeating-linear-gradient(135deg, ${ink}10 0 2px, transparent 2px 12px), #b8a890` },
    { span: 2, rows: 1, label: 'Talking Heads', num: '07', bg: `repeating-linear-gradient(0deg, ${ink}14 0 2px, transparent 2px 14px), #d9c9b0` },
  ];

  const why = [
    'Young team, sharp taste.',
    'Fast. Clean. Modern.',
    'Strategy lives next to craft.',
    'We reply. Like, actually.',
    'Deadlines are friends, not foes.',
    'Nobody’s precious about feedback.',
  ];

  return (
    <div style={editorialStyles.root}>
      <nav style={editorialStyles.nav}>
        <span>Blackspace — Vol. 01 / Issue 04</span>
        <div style={editorialStyles.navLinks}>
          <span>Index</span>
          <span>Work</span>
          <span>Studio</span>
          <span>Contact ↗</span>
        </div>
      </nav>

      <header style={editorialStyles.masthead}>
        <div>
          <div style={editorialStyles.issueMeta}>Bengaluru — Est. 2023 — A Creative Studio</div>
          <h1 style={editorialStyles.wordmark}>Blackspace.</h1>
        </div>
        <p style={editorialStyles.dek}>
          A studio for brands that are tired of the template. Strategy, design, and visual storytelling, printed on a screen.
        </p>
      </header>

      <section style={editorialStyles.hero}>
        <span style={editorialStyles.heroLabel}>Cover Story — Spring Issue</span>
        <div style={editorialStyles.heroOverlay}>
          <h2 style={editorialStyles.heroTitle}>We make the scroll stop.</h2>
          <span style={editorialStyles.pageNum}>p. 01</span>
        </div>
      </section>

      <section style={editorialStyles.section}>
        <div style={editorialStyles.sectionHead}>
          <span style={editorialStyles.sectionNum}>§ 01</span>
          <span style={editorialStyles.sectionKicker}>A letter from the editor</span>
          <div />
        </div>
        <div style={editorialStyles.columns}>
          <p style={{ margin: 0 }}>
            <span style={editorialStyles.dropcap}>W</span>
            e started Blackspace because most agencies looked the same, sounded the same, and charged you extra for the pleasure. So we built a smaller, sharper thing — a studio that treats every brief like a cover story, every edit like it’s going in the time capsule, and every deadline like a rumour worth honoring. We work across fitness, health, lifestyle, fashion, and whatever else shows up in the inbox looking interesting. We bring taste. We bring the camera. We bring receipts.
          </p>
        </div>
      </section>

      <section style={editorialStyles.section}>
        <div style={editorialStyles.sectionHead}>
          <span style={editorialStyles.sectionNum}>§ 02</span>
          <span style={editorialStyles.sectionKicker}>Table of Services</span>
          <h2 style={editorialStyles.h2}>What we do, <br />at the desk.</h2>
        </div>
        <div style={editorialStyles.services}>
          <div />
          {services.map((s, i) => (
            <div key={i} style={editorialStyles.serviceItem}>
              <div style={{ ...editorialStyles.sectionNum, marginBottom: 8 }}>0{i + 1}</div>
              <h3 style={editorialStyles.serviceName}>{s.name}</h3>
              <p style={editorialStyles.serviceBody}>{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={editorialStyles.section}>
        <div style={editorialStyles.sectionHead}>
          <span style={editorialStyles.sectionNum}>§ 03</span>
          <span style={editorialStyles.sectionKicker}>Selected works — 2024/25</span>
          <h2 style={editorialStyles.h2}>The folio.</h2>
        </div>
        <div style={editorialStyles.bento}>
          {bento.map((b, i) => (
            <div key={i} style={editorialStyles.bentoCell(b.span, b.rows, b.bg)}>
              <span style={editorialStyles.bentoNumber}>{b.num}</span>
              <span style={editorialStyles.bentoCaption}>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={editorialStyles.manifesto}>
        <p style={editorialStyles.manifestoText}>
          Good work is <span style={editorialStyles.manifestoAccent}>obvious</span> in hindsight, <br />
          invisible in process, and <span style={editorialStyles.manifestoAccent}>loud</span> in the feed.
        </p>
      </section>

      <section style={editorialStyles.section}>
        <div style={editorialStyles.sectionHead}>
          <span style={editorialStyles.sectionNum}>§ 04</span>
          <span style={editorialStyles.sectionKicker}>Why hire us</span>
          <h2 style={editorialStyles.h2}>Six small <br />reasons.</h2>
        </div>
        <div style={editorialStyles.whyUs}>
          {why.map((w, i) => (
            <div key={i} style={editorialStyles.whyRow}>
              <span style={editorialStyles.whyNum}>0{i + 1}</span>
              <span style={editorialStyles.whyText}>{w}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={editorialStyles.cta}>
        <div style={{ ...editorialStyles.sectionKicker, marginBottom: 20 }}>Subscribe to our inbox, not our newsletter</div>
        <h2 style={editorialStyles.ctaHead}>Let’s work <br /><em style={{ color: accent }}>together.</em></h2>
        <div style={editorialStyles.ctaSub}>hello@blackspace.media — Bengaluru — IST</div>
        <div style={editorialStyles.ctaButton}>Contact Now ↗</div>
      </section>

      <footer style={editorialStyles.footer}>
        <span>© Blackspace 2025</span>
        <span>Set in Garamond & JetBrains Mono</span>
        <span>Instagram ↗ &nbsp; LinkedIn ↗</span>
      </footer>
    </div>
  );
}

window.EditorialDirection = EditorialDirection;
