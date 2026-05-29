/* global React */

function CinematicDirection() {
  const bg = '#0a0a0a';
  const panel = '#121212';
  const fg = '#f0ece4';
  const muted = '#666';
  const accent = '#C8FF00'; // acid lime

  const cineStyles = {
    root: {
      width: 1440,
      minHeight: 2400,
      background: bg,
      color: fg,
      fontFamily: '"Inter", "Helvetica Neue", sans-serif',
      position: 'relative',
      overflow: 'hidden',
    },
    filmGrain: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: `radial-gradient(${fg}08 1px, transparent 1px)`,
      backgroundSize: '3px 3px',
      opacity: 0.25,
    },
    topBar: {
      position: 'absolute',
      top: 24,
      left: 32,
      right: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: fg,
      zIndex: 10,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    },
    recDot: {
      width: 8,
      height: 8,
      background: '#ff2a2a',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: 10,
      boxShadow: '0 0 10px #ff2a2a',
    },
    navLinks: { display: 'flex', gap: 28 },
    hero: {
      height: 900,
      position: 'relative',
      overflow: 'hidden',
      background: `radial-gradient(ellipse at 30% 50%, #2a1a0e 0%, #0a0a0a 60%)`,
    },
    heroImage: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `
        linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%),
        linear-gradient(90deg, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%),
        repeating-linear-gradient(0deg, #1a1208 0 2px, transparent 2px 6px)
      `,
      backgroundColor: '#3a2814',
    },
    crosshair: (top, left) => ({
      position: 'absolute',
      top,
      left,
      width: 24,
      height: 24,
      borderTop: `1px solid ${fg}55`,
      borderLeft: `1px solid ${fg}55`,
    }),
    heroContent: {
      position: 'absolute',
      left: 60,
      right: 60,
      bottom: 80,
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 60,
      alignItems: 'end',
    },
    heroKicker: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: accent,
      marginBottom: 24,
    },
    heroTitle: {
      fontSize: 156,
      lineHeight: 0.88,
      letterSpacing: '-0.04em',
      fontWeight: 600,
      margin: 0,
      color: fg,
    },
    heroTitleItalic: {
      fontStyle: 'italic',
      fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif',
      fontWeight: 400,
    },
    heroSide: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      lineHeight: 1.9,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: `${fg}aa`,
    },
    heroSideRow: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr',
      padding: '8px 0',
      borderBottom: `1px solid ${fg}15`,
    },
    heroSideLabel: { color: muted },
    timecode: {
      position: 'absolute',
      left: 60,
      top: 80,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 12,
      letterSpacing: '0.15em',
      color: accent,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    },
    sectionDiv: {
      borderTop: `1px solid ${fg}15`,
    },
    section: { padding: '120px 60px' },
    sectionHead: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 60,
      marginBottom: 80,
      alignItems: 'baseline',
    },
    sectionMeta: {
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: muted,
      lineHeight: 1.8,
    },
    sectionMetaAccent: { color: accent },
    sectionTitle: {
      fontSize: 96,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 500,
      margin: 0,
    },
    svcGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
    },
    svcCard: {
      background: panel,
      border: `1px solid ${fg}15`,
      padding: 28,
      minHeight: 300,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    },
    svcIcon: {
      width: 48,
      height: 48,
      border: `1px solid ${fg}33`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 16,
      color: accent,
    },
    svcName: {
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      margin: '20px 0 12px',
    },
    svcBody: {
      fontSize: 14,
      lineHeight: 1.6,
      color: `${fg}99`,
    },
    svcTag: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: muted,
      marginTop: 20,
      paddingTop: 16,
      borderTop: `1px solid ${fg}15`,
    },
    bento: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoRows: 170,
      gap: 12,
    },
    bentoCell: (col, row, bg) => ({
      gridColumn: `span ${col}`,
      gridRow: `span ${row}`,
      background: bg,
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid #1f1f1f`,
    }),
    bentoCorners: (color = `${fg}55`) => ({
      position: 'absolute',
      inset: 8,
      pointerEvents: 'none',
    }),
    bentoMeta: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: fg,
    },
    bentoBottom: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
    },
    bentoTitle: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    bentoClient: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: muted,
      marginTop: 6,
    },
    playBtn: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      width: 52,
      height: 52,
      border: `1px solid ${fg}55`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: fg,
      fontSize: 14,
    },
    manifesto: {
      padding: '140px 60px',
      textAlign: 'left',
      borderTop: `1px solid ${fg}15`,
      borderBottom: `1px solid ${fg}15`,
      position: 'relative',
    },
    manifestoQuote: {
      fontSize: 84,
      lineHeight: 1.05,
      fontFamily: '"Instrument Serif", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      maxWidth: 1100,
      margin: 0,
      fontStyle: 'italic',
    },
    manifestoAttr: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: muted,
      marginTop: 40,
    },
    whyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 1,
      background: `${fg}15`,
      border: `1px solid ${fg}15`,
    },
    whyCard: {
      background: bg,
      padding: 36,
      display: 'grid',
      gridTemplateColumns: '60px 1fr',
      gap: 24,
      alignItems: 'start',
      minHeight: 180,
    },
    whyNum: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 13,
      color: accent,
      letterSpacing: '0.15em',
    },
    whyText: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    whyNote: {
      fontSize: 13,
      color: muted,
      marginTop: 10,
      lineHeight: 1.5,
    },
    cta: {
      padding: '160px 60px',
      background: `linear-gradient(180deg, ${bg} 0%, #080803 100%)`,
      position: 'relative',
    },
    ctaHead: {
      fontSize: 200,
      lineHeight: 0.88,
      letterSpacing: '-0.045em',
      fontWeight: 500,
      margin: 0,
    },
    ctaAccent: { color: accent, fontStyle: 'italic', fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400 },
    ctaFooter: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24,
      marginTop: 80,
      paddingTop: 32,
      borderTop: `1px solid ${fg}15`,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: muted,
    },
    ctaBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 40,
      padding: '24px 36px',
      background: accent,
      color: bg,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 13,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 600,
      border: 'none',
    },
  };

  const services = [
    { icon: '01', name: 'Social media', body: 'Channels that look like you’re up to something, not like you outsourced it.', tag: 'Monthly retainer' },
    { icon: '02', name: 'Content strategy', body: 'A plan. A calendar. A real reason for every post that isn’t "the algorithm."', tag: 'Quarterly engagement' },
    { icon: '03', name: 'Brand identity', body: 'Naming, marks, type systems, guidelines. The part your competitors will screenshot.', tag: 'Project-based' },
    { icon: '04', name: 'Websites', body: 'Framer and code. Loads like it cost less. Looks like it cost more.', tag: 'Project-based' },
    { icon: '05', name: 'Creative production', body: 'DP, direction, edit. We show up with a crew and leave with a film.', tag: 'Shoot-day' },
    { icon: '06', name: 'Campaigns', body: 'Concept, treatment, rollout. From the idea on the napkin to the billboard.', tag: 'Project-based' },
  ];

  const bento = [
    { col: 7, row: 3, bg: `
        linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%),
        radial-gradient(ellipse at 40% 40%, #4a2814 0%, #0a0a0a 80%)
      `, client: 'OKINAWA FITNESS', title: 'The 5AM Film', n: 'WK 01 — FILM / BRAND', runtime: '02:14' },
    { col: 5, row: 2, bg: `
        linear-gradient(135deg, ${accent} 0%, #7a9a00 100%)
      `, client: 'MONARC', title: 'Identity, from zero', n: 'WK 02 — BRAND', dark: true },
    { col: 5, row: 1, bg: panel, client: 'BLACKSPACE STUDIO', title: 'Reel Q1 — 2025', n: 'WK 03 — REEL', runtime: '01:42' },
    { col: 4, row: 2, bg: `
        linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%),
        radial-gradient(ellipse at 50% 50%, #3a2a1a 0%, #0a0a0a 80%)
      `, client: 'CUT SKINCARE', title: 'Launch visuals', n: 'WK 04 — CAMPAIGN', runtime: '00:45' },
    { col: 4, row: 2, bg: `
        linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%),
        radial-gradient(ellipse at 50% 50%, #2a2a3a 0%, #0a0a0a 80%)
      `, client: 'OFFICE HOURS', title: 'Founder interview series', n: 'WK 05 — CONTENT', runtime: '12:30' },
    { col: 4, row: 2, bg: `
        linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%),
        radial-gradient(ellipse at 50% 50%, #2a1a1a 0%, #0a0a0a 80%)
      `, client: 'HEIRLOOM', title: 'Lookbook & site', n: 'WK 06 — WEB / FASHION', runtime: '—' },
  ];

  const why = [
    { n: '01', text: 'We’re on set, not on Slack.', note: 'When it matters, we’re in the room. Or behind the camera. Or both.' },
    { n: '02', text: 'Taste is the deliverable.', note: 'You’re paying for judgment, not pixels.' },
    { n: '03', text: 'Fast, clean, modern — pick three.', note: 'We don’t accept the trilemma.' },
    { n: '04', text: 'AI speeds us up, doesn’t replace us.', note: 'We use it for drafts and dead ends. Humans ship.' },
  ];

  return (
    <div style={cineStyles.root}>
      <div style={cineStyles.filmGrain}></div>

      <div style={cineStyles.topBar}>
        <div><span style={cineStyles.recDot}></span>REC — BLACKSPACE</div>
        <div style={cineStyles.navLinks}>
          <span>INDEX</span>
          <span>WORK</span>
          <span>STUDIO</span>
          <span>CONTACT</span>
        </div>
        <div>BLR • IST 14:22 • ● AVAILABLE</div>
      </div>

      <section style={cineStyles.hero}>
        <div style={cineStyles.heroImage}></div>
        <div style={cineStyles.crosshair(140, 60)}></div>
        <div style={{ ...cineStyles.crosshair(140, 60), left: 'auto', right: 60, borderLeft: 'none', borderRight: `1px solid ${fg}55` }}></div>

        <div style={cineStyles.timecode}>
          <span>TC 00:00:01:02</span>
          <span>SCENE 01 / TAKE 04</span>
          <span style={{ color: muted }}>F 2.0 — 24FPS</span>
        </div>

        <div style={cineStyles.heroContent}>
          <div>
            <div style={cineStyles.heroKicker}>[ A CREATIVE STUDIO — BENGALURU, IN ]</div>
            <h1 style={cineStyles.heroTitle}>
              We direct<br />brands<br />that <span style={cineStyles.heroTitleItalic}>act</span>.
            </h1>
          </div>
          <div style={cineStyles.heroSide}>
            <div style={cineStyles.heroSideRow}><span style={cineStyles.heroSideLabel}>Studio</span><span>Blackspace ©’25</span></div>
            <div style={cineStyles.heroSideRow}><span style={cineStyles.heroSideLabel}>Based</span><span>Bengaluru, IN</span></div>
            <div style={cineStyles.heroSideRow}><span style={cineStyles.heroSideLabel}>Est.</span><span>2023</span></div>
            <div style={cineStyles.heroSideRow}><span style={cineStyles.heroSideLabel}>Crew</span><span>12 humans / 2 cats</span></div>
            <div style={cineStyles.heroSideRow}><span style={cineStyles.heroSideLabel}>Status</span><span style={{ color: accent }}>● Booking Q3</span></div>
          </div>
        </div>
      </section>

      <section style={cineStyles.section}>
        <div style={cineStyles.sectionHead}>
          <div style={cineStyles.sectionMeta}>
            <div style={cineStyles.sectionMetaAccent}>—— 01</div>
            <div>Services</div>
            <div>06 items</div>
          </div>
          <h2 style={cineStyles.sectionTitle}>What we run the camera for.</h2>
        </div>
        <div style={cineStyles.svcGrid}>
          {services.map((s, i) => (
            <div key={i} style={cineStyles.svcCard}>
              <div style={cineStyles.svcIcon}>{s.icon}</div>
              <div>
                <h3 style={cineStyles.svcName}>{s.name}</h3>
                <p style={cineStyles.svcBody}>{s.body}</p>
                <div style={cineStyles.svcTag}>→ {s.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...cineStyles.section, paddingTop: 0 }}>
        <div style={cineStyles.sectionHead}>
          <div style={cineStyles.sectionMeta}>
            <div style={cineStyles.sectionMetaAccent}>—— 02</div>
            <div>Selected Film</div>
            <div>Dailies, Q1</div>
          </div>
          <h2 style={cineStyles.sectionTitle}>The folio, cut loose.</h2>
        </div>
        <div style={cineStyles.bento}>
          {bento.map((b, i) => (
            <div key={i} style={cineStyles.bentoCell(b.col, b.row, b.bg)}>
              <div style={cineStyles.bentoMeta}>
                <span style={{ color: b.dark ? bg : accent }}>{b.n}</span>
                {b.runtime && <span style={{ color: b.dark ? bg : fg }}>▶ {b.runtime}</span>}
              </div>
              <div style={cineStyles.bentoBottom}>
                <div style={{ ...cineStyles.bentoClient, color: b.dark ? '#000000aa' : muted }}>{b.client}</div>
                <div style={{ ...cineStyles.bentoTitle, color: b.dark ? bg : fg }}>{b.title}</div>
              </div>
              <div style={{ ...cineStyles.playBtn, borderColor: b.dark ? `${bg}55` : `${fg}55`, color: b.dark ? bg : fg }}>▶</div>
            </div>
          ))}
        </div>
      </section>

      <section style={cineStyles.manifesto}>
        <div style={{ ...cineStyles.sectionMeta, marginBottom: 40 }}>
          <div style={cineStyles.sectionMetaAccent}>—— 03 — MANIFESTO</div>
        </div>
        <p style={cineStyles.manifestoQuote}>
          "We don’t make content.<br />
          We make the thing that content is <span style={{ color: accent }}>about</span>."
        </p>
        <div style={cineStyles.manifestoAttr}>— House Rules, Pinned Above The Edit Bay</div>
      </section>

      <section style={cineStyles.section}>
        <div style={cineStyles.sectionHead}>
          <div style={cineStyles.sectionMeta}>
            <div style={cineStyles.sectionMetaAccent}>—— 04</div>
            <div>Why Us</div>
            <div>Short list</div>
          </div>
          <h2 style={cineStyles.sectionTitle}>Four lines of defense.</h2>
        </div>
        <div style={cineStyles.whyGrid}>
          {why.map((w, i) => (
            <div key={i} style={cineStyles.whyCard}>
              <span style={cineStyles.whyNum}>[{w.n}]</span>
              <div>
                <div style={cineStyles.whyText}>{w.text}</div>
                <div style={cineStyles.whyNote}>{w.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={cineStyles.cta}>
        <div style={{ ...cineStyles.sectionMeta, marginBottom: 40 }}>
          <div style={cineStyles.sectionMetaAccent}>—— 05 — END CARD</div>
        </div>
        <h2 style={cineStyles.ctaHead}>
          Roll<br />
          <span style={cineStyles.ctaAccent}>camera.</span>
        </h2>
        <a style={cineStyles.ctaBtn}>Start a project →</a>
        <div style={cineStyles.ctaFooter}>
          <div>hello@blackspace.media</div>
          <div>Bengaluru, IN</div>
          <div>Instagram ↗</div>
          <div>LinkedIn ↗</div>
        </div>
      </section>
    </div>
  );
}

window.CinematicDirection = CinematicDirection;
