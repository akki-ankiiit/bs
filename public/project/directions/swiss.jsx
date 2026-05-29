/* global React */

function SwissDirection() {
  const bg = '#f5f5f2';
  const fg = '#111111';
  const accent = '#D32F2F';
  const muted = '#9a9a96';

  const swissStyles = {
    root: {
      width: 1440,
      minHeight: 2400,
      background: bg,
      color: fg,
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      letterSpacing: '-0.005em',
    },
    grid12: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      columnGap: 20,
      padding: '0 60px',
    },
    topnav: {
      padding: '28px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13,
      fontWeight: 500,
    },
    logo: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    logoBullet: {
      width: 14,
      height: 14,
      background: fg,
      borderRadius: '50%',
      display: 'inline-block',
    },
    navLinks: { display: 'flex', gap: 36, fontSize: 13 },
    navMeta: { fontSize: 12, color: muted, display: 'flex', gap: 20 },
    hero: {
      padding: '80px 60px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      columnGap: 20,
      rowGap: 48,
    },
    heroLabel: {
      gridColumn: '1 / 3',
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: muted,
    },
    heroTitle: {
      gridColumn: '1 / 11',
      fontSize: 120,
      lineHeight: 1.0,
      fontWeight: 500,
      letterSpacing: '-0.035em',
      margin: 0,
    },
    heroMeta: {
      gridColumn: '11 / 13',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: muted,
      textAlign: 'right',
      alignSelf: 'end',
    },
    heroMedia: {
      gridColumn: '1 / 13',
      height: 560,
      background: `linear-gradient(180deg, #d4d0c9 0%, #a8a49c 100%)`,
      position: 'relative',
      overflow: 'hidden',
    },
    heroMediaStripes: {
      position: 'absolute',
      inset: 0,
      background: `repeating-linear-gradient(90deg, ${fg}0a 0 1px, transparent 1px 80px)`,
    },
    heroCaption: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      right: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      color: bg,
      mixBlendMode: 'difference',
    },
    heroCaptionText: {
      fontSize: 36,
      lineHeight: 1.15,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      maxWidth: 640,
      margin: 0,
    },
    heroCaptionMeta: {
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    statRow: {
      padding: '60px 60px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      columnGap: 20,
      borderTop: `1px solid ${fg}22`,
      borderBottom: `1px solid ${fg}22`,
    },
    stat: { },
    statNum: {
      fontSize: 72,
      fontWeight: 500,
      letterSpacing: '-0.03em',
      lineHeight: 1,
    },
    statLabel: {
      marginTop: 12,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: muted,
      maxWidth: 220,
    },
    section: { padding: '100px 60px' },
    sectionHead: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      columnGap: 20,
      marginBottom: 56,
      alignItems: 'end',
    },
    sectionNum: {
      gridColumn: '1 / 3',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: accent,
      fontWeight: 500,
    },
    sectionTitle: {
      gridColumn: '3 / 10',
      fontSize: 56,
      fontWeight: 500,
      letterSpacing: '-0.025em',
      lineHeight: 1.05,
      margin: 0,
    },
    sectionDek: {
      gridColumn: '10 / 13',
      fontSize: 14,
      lineHeight: 1.55,
      color: muted,
      alignSelf: 'end',
    },
    svcGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      background: `${fg}22`,
      border: `1px solid ${fg}22`,
    },
    svcCard: {
      background: bg,
      padding: 32,
      minHeight: 280,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    svcN: {
      fontSize: 11,
      letterSpacing: '0.15em',
      color: muted,
    },
    svcName: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      margin: '12px 0 16px',
    },
    svcBody: { fontSize: 14, lineHeight: 1.55, color: `${fg}aa` },
    bento: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoRows: 180,
      gap: 16,
    },
    bentoCell: (col, row, bg) => ({
      gridColumn: `span ${col}`,
      gridRow: `span ${row}`,
      background: bg,
      position: 'relative',
      overflow: 'hidden',
    }),
    bentoMeta: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: bg,
      mixBlendMode: 'difference',
      fontWeight: 500,
    },
    bentoTitle: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      fontSize: 22,
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
      color: bg,
      mixBlendMode: 'difference',
    },
    whyRow: {
      display: 'grid',
      gridTemplateColumns: '100px 60px 1fr 1fr',
      columnGap: 20,
      padding: '28px 0',
      borderTop: `1px solid ${fg}22`,
      alignItems: 'start',
    },
    whyNum: { fontSize: 13, color: accent, fontWeight: 500 },
    whyDot: { fontSize: 13, color: muted },
    whyHead: { fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.2 },
    whyBody: { fontSize: 14, lineHeight: 1.55, color: muted },
    cta: {
      padding: '140px 60px',
      textAlign: 'left',
      borderTop: `1px solid ${fg}22`,
    },
    ctaNum: {
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: muted,
      marginBottom: 32,
    },
    ctaHead: {
      fontSize: 160,
      lineHeight: 0.95,
      fontWeight: 500,
      letterSpacing: '-0.04em',
      margin: 0,
    },
    ctaForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      columnGap: 20,
      marginTop: 80,
    },
    ctaFormLabel: {
      gridColumn: '1 / 3',
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: muted,
    },
    ctaEmail: {
      gridColumn: '3 / 10',
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      borderBottom: `1px solid ${fg}`,
      paddingBottom: 12,
    },
    ctaBtn: {
      gridColumn: '10 / 13',
      background: fg,
      color: bg,
      padding: '20px 28px',
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 500,
    },
    footer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      columnGap: 20,
      padding: '32px 60px',
      borderTop: `1px solid ${fg}22`,
      fontSize: 12,
      color: muted,
    },
  };

  const services = [
    { n: '01', name: 'Social Media', body: 'Management, content, posting cadence. We run the feed so you can run the business.' },
    { n: '02', name: 'Content Strategy', body: 'A map for what to say, when, and to whom — before the camera turns on.' },
    { n: '03', name: 'Brand Identity', body: 'Marks, systems, guidelines. The rulebook for how your brand behaves in public.' },
    { n: '04', name: 'Websites', body: 'Responsive, fast, quietly expensive-looking. Built to last longer than the sprint.' },
    { n: '05', name: 'Creative Production', body: 'Film and photo, in-studio and on-location. We come with a shot list and a thermos.' },
    { n: '06', name: 'Campaigns', body: 'From the headline to the hoarding. Big ideas, executed end-to-end.' },
  ];

  const bento = [
    { col: 8, row: 3, n: '001', tag: 'FILM', title: 'Shore — fitness brand film for a launch that couldn’t be beige.', bg: `linear-gradient(135deg, #c9c2b8, #9a928a)` },
    { col: 4, row: 2, n: '002', tag: 'BRAND', title: 'Monarc — identity for a founder who said “no swooshes.”', bg: accent },
    { col: 4, row: 1, n: '003', tag: 'WEB', title: 'Heirloom — redesign.', bg: fg },
    { col: 4, row: 2, n: '004', tag: 'CAMPAIGN', title: 'Cut — skincare launch visuals.', bg: `linear-gradient(180deg, #b8aea2, #8e8478)` },
    { col: 4, row: 2, n: '005', tag: 'CONTENT', title: 'Office Hours — founder interview series.', bg: `linear-gradient(180deg, #d4cfc6, #a59e93)` },
    { col: 4, row: 2, n: '006', tag: 'REEL', title: 'Studio Reel — Q1 ’25.', bg: `linear-gradient(180deg, #e6e1d6, #b8b2a4)` },
  ];

  const why = [
    { n: '01', head: 'Small team, senior hands.', body: 'No account exec layer. You talk to the people making the thing.' },
    { n: '02', head: 'Taste is a deliverable.', body: 'We edit ourselves so you don’t have to.' },
    { n: '03', head: 'Strategy before swatches.', body: 'We ask the boring questions first. Then the fun ones.' },
    { n: '04', head: 'We ship.', body: 'Decks are not the deliverable. The launch is.' },
    { n: '05', head: 'Reply-all optional.', body: 'We keep threads short and meetings shorter.' },
    { n: '06', head: 'Deadlines aren’t scary.', body: 'We’ve made reels in a day and brands in a month. Depends on the coffee.' },
  ];

  return (
    <div style={swissStyles.root}>
      <nav style={swissStyles.topnav}>
        <div style={swissStyles.logo}><span style={swissStyles.logoBullet}></span>Blackspace</div>
        <div style={swissStyles.navLinks}>
          <span>Index</span>
          <span>Work</span>
          <span>Studio</span>
          <span>Journal</span>
          <span>Contact</span>
        </div>
        <div style={swissStyles.navMeta}>
          <span>BLR — 14:22 IST</span>
          <span>● Available</span>
        </div>
      </nav>

      <section style={swissStyles.hero}>
        <span style={swissStyles.heroLabel}>— 01 / Studio</span>
        <h1 style={swissStyles.heroTitle}>
          A small studio<br />in Bengaluru,<br />doing work that<br />isn’t.
        </h1>
        <div style={swissStyles.heroMeta}>Est. 2023<br />Creative Studio<br />BLR • IN</div>
        <div style={swissStyles.heroMedia}>
          <div style={swissStyles.heroMediaStripes}></div>
          <div style={swissStyles.heroCaption}>
            <p style={swissStyles.heroCaptionText}>Strategy, design, and visual storytelling — tuned for feeds that move fast and brands that don’t.</p>
            <span style={swissStyles.heroCaptionMeta}>Reel 01 — 01:42</span>
          </div>
        </div>
      </section>

      <section style={swissStyles.statRow}>
        <div style={swissStyles.stat}><div style={swissStyles.statNum}>+84</div><div style={swissStyles.statLabel}>Projects shipped since ya pehle</div></div>
        <div style={swissStyles.stat}><div style={swissStyles.statNum}>6</div><div style={swissStyles.statLabel}>Services, no upsells</div></div>
        <div style={swissStyles.stat}><div style={swissStyles.statNum}>12</div><div style={swissStyles.statLabel}>People, one studio, two cats</div></div>
        <div style={swissStyles.stat}><div style={swissStyles.statNum}>0</div><div style={swissStyles.statLabel}>Account managers, by design</div></div>
      </section>

      <section style={swissStyles.section}>
        <div style={swissStyles.sectionHead}>
          <span style={swissStyles.sectionNum}>— 02 / Services</span>
          <h2 style={swissStyles.sectionTitle}>Six things we do. Mostly well.</h2>
          <p style={swissStyles.sectionDek}>We’re suspicious of studios with a ten-page menu. Here’s the short list.</p>
        </div>
        <div style={swissStyles.svcGrid}>
          {services.map((s, i) => (
            <div key={i} style={swissStyles.svcCard}>
              <div style={swissStyles.svcN}>— {s.n}</div>
              <div>
                <h3 style={swissStyles.svcName}>{s.name}</h3>
                <p style={swissStyles.svcBody}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={swissStyles.section}>
        <div style={swissStyles.sectionHead}>
          <span style={swissStyles.sectionNum}>— 03 / Selected Work</span>
          <h2 style={swissStyles.sectionTitle}>Evidence, exhibit A through F.</h2>
          <p style={swissStyles.sectionDek}>A cross-section. The rest is under NDA, or on Instagram.</p>
        </div>
        <div style={swissStyles.bento}>
          {bento.map((b, i) => (
            <div key={i} style={swissStyles.bentoCell(b.col, b.row, b.bg)}>
              <div style={swissStyles.bentoMeta}>
                <span>{b.tag}</span>
                <span>{b.n}</span>
              </div>
              <div style={swissStyles.bentoTitle}>{b.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={swissStyles.section}>
        <div style={swissStyles.sectionHead}>
          <span style={swissStyles.sectionNum}>— 04 / Why us</span>
          <h2 style={swissStyles.sectionTitle}>Six arguments, if you need them.</h2>
          <p style={swissStyles.sectionDek}>Take what’s useful. Ignore the rest.</p>
        </div>
        <div>
          {why.map((w, i) => (
            <div key={i} style={swissStyles.whyRow}>
              <span style={swissStyles.whyNum}>— {w.n}</span>
              <span style={swissStyles.whyDot}>●</span>
              <span style={swissStyles.whyHead}>{w.head}</span>
              <span style={swissStyles.whyBody}>{w.body}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={swissStyles.cta}>
        <div style={swissStyles.ctaNum}>— 05 / Contact</div>
        <h2 style={swissStyles.ctaHead}>Let’s make something<br />we’re both proud of.</h2>
        <div style={swissStyles.ctaForm}>
          <span style={swissStyles.ctaFormLabel}>Your email</span>
          <div style={swissStyles.ctaEmail}>you@brand.com</div>
          <div style={swissStyles.ctaBtn}>Send brief ↗</div>
        </div>
      </section>

      <footer style={swissStyles.footer}>
        <span>Blackspace © 2025</span>
        <span>hello@blackspace.media</span>
        <span>Bengaluru, IN — 12.97°N</span>
        <span>Instagram ↗ &nbsp; LinkedIn ↗</span>
      </footer>
    </div>
  );
}

window.SwissDirection = SwissDirection;
