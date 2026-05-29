/* global React */

function FusionDirection() {
  // Palette: pastels + pop, on off-white
  const ink = '#0f0f0f';
  const paper = '#f5f2ea';
  const butter = '#f5e9b8';     // pastel yellow
  const mint = '#c7e7c2';       // pastel mint
  const sky = '#c4d9ef';        // pastel blue
  const blush = '#f3c9c0';      // pastel peach
  const lilac = '#d9c9ea';      // pastel lilac
  const pop = '#FF4D1A';        // pop orange
  const popBlue = '#2E4CFF';    // pop blue
  const popPink = '#FF2E8B';    // pop magenta

  // Font stacks (Acid Grotesk is proprietary; substitute with similar-weighted display)
  const acid = '"Space Grotesk", "Acid Grotesk", "Helvetica Neue", Helvetica, sans-serif';
  const garamond = '"EB Garamond", "Apple Garamond", Garamond, serif';
  const helv = '"Helvetica Neue", Helvetica, Arial, sans-serif';

  const fusionStyles = {
    root: {
      width: 1440,
      minHeight: 2400,
      background: paper,
      color: ink,
      fontFamily: helv,
      position: 'relative',
      overflow: 'hidden',
    },
    // ── NAV
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '22px 40px',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      borderBottom: `1px solid ${ink}`,
    },
    navLogo: {
      fontFamily: acid,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.04em',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    navStar: { color: pop, fontSize: 20 },
    navLinks: { display: 'flex', gap: 36, fontFamily: helv, fontSize: 13 },
    navCta: {
      background: ink,
      color: paper,
      padding: '10px 18px',
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
    },

    // ── HERO
    hero: {
      position: 'relative',
      padding: '60px 40px 80px',
      borderBottom: `1px solid ${ink}`,
      overflow: 'hidden',
    },
    heroEyebrow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontFamily: helv,
      marginBottom: 36,
    },
    heroPill: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      padding: '6px 14px',
      border: `1px solid ${ink}`,
      borderRadius: 999,
      fontSize: 11,
      letterSpacing: '0.1em',
    },
    heroDot: (c) => ({
      width: 8, height: 8, background: c, borderRadius: '50%',
    }),
    heroTitleWrap: {
      position: 'relative',
      paddingRight: 120,
    },
    heroTitle: {
      fontFamily: acid,
      fontSize: 220,
      lineHeight: 0.86,
      fontWeight: 700,
      letterSpacing: '-0.05em',
      margin: 0,
      color: ink,
    },
    garamondItalic: {
      fontFamily: garamond,
      fontStyle: 'italic',
      fontWeight: 400,
      letterSpacing: '-0.02em',
    },
    heroBottom: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 40,
      marginTop: 60,
      alignItems: 'end',
    },
    heroDek: {
      fontFamily: garamond,
      fontSize: 32,
      fontStyle: 'italic',
      lineHeight: 1.25,
      fontWeight: 400,
      maxWidth: 620,
      margin: 0,
    },
    heroSideCard: {
      background: butter,
      border: `1px solid ${ink}`,
      padding: 24,
      borderRadius: 20,
      minHeight: 180,
      position: 'relative',
    },
    heroSideLabel: {
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      opacity: 0.6,
    },
    heroSideHead: {
      fontFamily: acid,
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      marginTop: 8,
    },
    // Floating shapes
    blob: (size, bg, top, left, right) => ({
      position: 'absolute',
      width: size, height: size,
      background: bg,
      borderRadius: '50%',
      top, left, right,
      zIndex: 0,
      border: `1px solid ${ink}`,
    }),
    stickerStar: (size, bg, rotate, top, right) => ({
      position: 'absolute',
      width: size, height: size,
      top, right,
      transform: `rotate(${rotate}deg)`,
      zIndex: 2,
      background: bg,
      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      border: 'none',
    }),

    // ── MARQUEE
    marquee: {
      borderBottom: `1px solid ${ink}`,
      padding: '22px 0',
      overflow: 'hidden',
      background: pop,
      color: paper,
    },
    marqueeInner: {
      whiteSpace: 'nowrap',
      fontFamily: acid,
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    marqueeStar: { display: 'inline-block', margin: '0 28px', color: paper },

    // ── WHAT WE DO
    whatWeDo: {
      padding: '100px 40px',
      borderBottom: `1px solid ${ink}`,
    },
    sectionHead: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr 1fr',
      gap: 40,
      alignItems: 'baseline',
      marginBottom: 60,
    },
    sectionNum: {
      fontFamily: helv,
      fontSize: 12,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    sectionTitle: {
      fontFamily: acid,
      fontSize: 88,
      fontWeight: 700,
      letterSpacing: '-0.035em',
      lineHeight: 0.95,
      margin: 0,
    },
    sectionDek: {
      fontFamily: garamond,
      fontStyle: 'italic',
      fontSize: 20,
      lineHeight: 1.4,
      alignSelf: 'end',
      maxWidth: 380,
    },

    // Services grid (bento, pastel-blocked)
    svcGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoRows: 240,
      gap: 16,
    },
    svcCard: (col, row, bg, { big = false, dark = false } = {}) => ({
      gridColumn: `span ${col}`,
      gridRow: `span ${row}`,
      background: bg,
      border: `1px solid ${ink}`,
      borderRadius: 20,
      padding: big ? 32 : 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      color: dark ? paper : ink,
    }),
    svcN: { fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 },
    svcName: {
      fontFamily: acid,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
    },
    svcBody: {
      fontFamily: helv,
      fontSize: 14,
      lineHeight: 1.5,
      opacity: 0.8,
      marginTop: 12,
    },
    svcTag: {
      position: 'absolute',
      top: 20, right: 20,
      background: ink,
      color: paper,
      padding: '4px 10px',
      borderRadius: 999,
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    newBadge: {
      position: 'absolute',
      top: 16, right: 16,
      background: popPink,
      color: paper,
      padding: '6px 12px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.1em',
      transform: 'rotate(6deg)',
      border: `1px solid ${ink}`,
    },

    // ── BIG AI BANNER
    aiBanner: {
      padding: '80px 40px',
      background: ink,
      color: paper,
      borderBottom: `1px solid ${ink}`,
      position: 'relative',
      overflow: 'hidden',
    },
    aiLine: {
      fontFamily: acid,
      fontSize: 160,
      lineHeight: 0.88,
      fontWeight: 700,
      letterSpacing: '-0.05em',
      margin: 0,
    },
    aiSubLine: {
      fontFamily: garamond,
      fontStyle: 'italic',
      fontSize: 28,
      lineHeight: 1.3,
      fontWeight: 400,
      maxWidth: 700,
      margin: '32px 0 0',
      opacity: 0.85,
    },

    // ── WORK BENTO
    work: {
      padding: '100px 40px',
      borderBottom: `1px solid ${ink}`,
    },
    workBento: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoRows: 180,
      gap: 12,
    },
    workCell: (col, row, bg, opts = {}) => ({
      gridColumn: `span ${col}`,
      gridRow: `span ${row}`,
      background: bg,
      border: `1px solid ${ink}`,
      borderRadius: 16,
      position: 'relative',
      overflow: 'hidden',
      padding: 16,
      color: opts.dark ? paper : ink,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }),
    workChip: (bg) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: bg || 'transparent',
      border: `1px solid ${ink}`,
      borderRadius: 999,
      padding: '4px 10px',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      width: 'fit-content',
    }),
    workTitle: {
      fontFamily: acid,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.05,
    },
    workMeta: {
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      opacity: 0.7,
      marginTop: 4,
    },
    playButton: {
      position: 'absolute',
      bottom: 16, right: 16,
      width: 56, height: 56,
      borderRadius: '50%',
      background: paper,
      border: `1px solid ${ink}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 18,
      color: ink,
    },

    // ── WHY US
    why: {
      padding: '100px 40px',
      background: mint,
      borderBottom: `1px solid ${ink}`,
      position: 'relative',
      overflow: 'hidden',
    },
    whyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
      marginTop: 40,
    },
    whyItem: {
      background: paper,
      border: `1px solid ${ink}`,
      borderRadius: 20,
      padding: 28,
      minHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    whyNum: {
      fontFamily: garamond,
      fontStyle: 'italic',
      fontSize: 48,
      fontWeight: 400,
      color: pop,
      lineHeight: 1,
    },
    whyTitle: {
      fontFamily: acid,
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
      marginTop: 16,
    },
    whyBody: {
      fontFamily: helv,
      fontSize: 14,
      lineHeight: 1.5,
      opacity: 0.75,
      marginTop: 10,
    },

    // ── PROCESS (AI block)
    process: {
      padding: '100px 40px',
      borderBottom: `1px solid ${ink}`,
    },
    processRow: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1fr 200px',
      gap: 40,
      padding: '32px 0',
      borderTop: `1px solid ${ink}`,
      alignItems: 'center',
    },
    processNum: {
      fontFamily: garamond,
      fontStyle: 'italic',
      fontSize: 56,
      fontWeight: 400,
    },
    processTitle: {
      fontFamily: acid,
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
    },
    processBody: {
      fontFamily: helv,
      fontSize: 15,
      lineHeight: 1.55,
      opacity: 0.8,
    },
    processChip: {
      justifySelf: 'end',
      background: ink,
      color: paper,
      padding: '8px 14px',
      borderRadius: 999,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },

    // ── CTA
    cta: {
      padding: '140px 40px 100px',
      background: blush,
      borderBottom: `1px solid ${ink}`,
      position: 'relative',
      overflow: 'hidden',
    },
    ctaHead: {
      fontFamily: acid,
      fontSize: 260,
      lineHeight: 0.85,
      letterSpacing: '-0.055em',
      fontWeight: 700,
      margin: 0,
    },
    ctaBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 60,
      padding: '22px 34px',
      background: ink,
      color: paper,
      borderRadius: 999,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: helv,
    },
    ctaMeta: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginTop: 60,
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },

    footer: {
      padding: '28px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      fontFamily: helv,
      letterSpacing: '0.05em',
    },
  };

  const services = [
    { col: 5, row: 2, bg: butter, n: '01', name: 'Content Campaigns', body: 'End-to-end campaigns: concept, script, shoot, edit, post. One team, no hand-offs.', big: true, tag: 'Flagship' },
    { col: 4, row: 2, bg: lilac, n: '02', name: 'Scripts & Writing', body: 'Reels, ads, explainers, long-form. Words that sound like a human wrote them — because one did.' },
    { col: 3, row: 1, bg: sky, n: '03', name: 'Video Edits', body: 'Punchy cuts, clean grades, music that earns its beat.' },
    { col: 3, row: 1, bg: ink, dark: true, n: '04', name: 'AI Workflows', body: 'Drafts, variants, dubs, b-roll synthesis. We use it like a power tool, not a crutch.', badge: 'NEW' },
    { col: 4, row: 1, bg: mint, n: '05', name: 'Brand Identity', body: 'Marks, type, guidelines. The rulebook.' },
    { col: 4, row: 1, bg: blush, n: '06', name: 'Websites', body: 'Framer, code, CMS. Fast, quietly expensive-looking.' },
    { col: 4, row: 1, bg: paper, n: '07', name: 'Social Management', body: 'Calendar, posting, community, monthly report.' },
  ];

  const bento = [
    { col: 7, row: 3, bg: `linear-gradient(135deg, ${pop} 0%, #ff8f5a 100%)`, chip: 'CAMPAIGN', title: 'Okinawa — The 5AM Film', meta: 'Fitness · Launch film · 02:14', dark: true, play: true },
    { col: 5, row: 2, bg: butter, chip: 'IDENTITY', title: 'Monarc — a mark that earns the stare', meta: 'Brand · 2025' },
    { col: 5, row: 1, bg: lilac, chip: 'AI + EDIT', title: '42 reels from 1 shoot day', meta: 'Experiment · 2025' },
    { col: 4, row: 2, bg: sky, chip: 'WEB', title: 'Heirloom', meta: 'Site · Lookbook' },
    { col: 4, row: 2, bg: ink, dark: true, chip: 'SCRIPT', title: 'A spec for skincare', meta: 'Campaign · Cut', play: true },
    { col: 4, row: 2, bg: mint, chip: 'CONTENT', title: 'Office Hours — founder series', meta: 'Ongoing · 12 eps', play: true },
  ];

  const why = [
    { n: '01', title: 'Writers who shoot.', body: 'Editors who pitch. Directors who care about commas. Every role talks to every other.' },
    { n: '02', title: 'Strategy before swatches.', body: 'We ask the boring questions first. Audience, channel, budget, what success even means.' },
    { n: '03', title: 'Taste is the brief.', body: 'You are paying for judgment. We are the filter between fine and sharp.' },
    { n: '04', title: 'Fast, because it is figured out.', body: 'Speed comes from preparation, not panic. Our timelines are short because our plans are long.' },
    { n: '05', title: 'AI, as a multiplier.', body: 'Drafts in minutes, not mornings. Variants in hours. The human is still the author.' },
    { n: '06', title: 'One phone number.', body: 'No account layer, no handover to juniors. You talk to the people making the thing.' },
  ];

  const process = [
    { n: '01', title: 'Listen. Ask. Pry.', body: 'Kickoff is a two-hour conversation, not a form. We leave with a brief you did not know you had.', chip: 'Week 00' },
    { n: '02', title: 'Write the thing first.', body: 'Scripts, boards, treatments. Nothing gets shot until the idea is readable on a page.', chip: 'Week 01' },
    { n: '03', title: 'Shoot with a plan.', body: 'Shot lists, call sheets, playlists. We show up caffeinated.', chip: 'Week 02' },
    { n: '04', title: 'Cut, grade, score.', body: 'Editing is 80% of the film. We spend it there. AI helps with variants and dubs.', chip: 'Week 03' },
    { n: '05', title: 'Ship and iterate.', body: 'First cut is not the last cut. We measure, we tweak, we ship again.', chip: 'Week 04' },
  ];

  return (
    <div style={fusionStyles.root}>

      {/* NAV */}
      <nav style={fusionStyles.nav}>
        <div style={fusionStyles.navLogo}>
          <span style={fusionStyles.navStar}>✳</span>
          Blackspace
        </div>
        <div style={fusionStyles.navLinks}>
          <span>Work</span>
          <span>Studio</span>
          <span>Process</span>
          <span>Journal</span>
        </div>
        <div style={fusionStyles.navCta}>
          Start a project <span style={{ opacity: 0.8 }}>→</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={fusionStyles.hero}>
        <div style={fusionStyles.blob(320, sky, 0, 'auto', -80)}></div>
        <div style={fusionStyles.blob(180, butter, 420, -60)}></div>
        <div style={fusionStyles.stickerStar(80, popPink, -18, 20, 420)}></div>

        <div style={fusionStyles.heroEyebrow}>
          <span style={fusionStyles.heroPill}>
            <span style={fusionStyles.heroDot(pop)}></span>
            A creative studio — Bengaluru, IN
          </span>
          <span style={fusionStyles.heroPill}>
            <span style={fusionStyles.heroDot('#22c55e')}></span>
            Booking Q3 · 2025
          </span>
        </div>

        <div style={fusionStyles.heroTitleWrap}>
          <h1 style={fusionStyles.heroTitle}>
            We write,<br />
            shoot, cut<br />
            <span style={fusionStyles.garamondItalic}>&amp; occasionally</span><br />
            <span style={{ color: pop }}>go viral.</span>
          </h1>
        </div>

        <div style={fusionStyles.heroBottom}>
          <p style={fusionStyles.heroDek}>
            A content studio for brands that <em>have something to say</em> — and would rather the feed noticed.
            Scripts, campaigns, edits, and AI as a backstage hand.
          </p>
          <div style={fusionStyles.heroSideCard}>
            <span style={fusionStyles.heroSideLabel}>↳ Now playing</span>
            <h3 style={fusionStyles.heroSideHead}>Studio Reel<br />Q1 · 2025</h3>
            <div style={{ ...fusionStyles.workChip(paper), marginTop: 16 }}>▶ 01:42 · Watch</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={fusionStyles.marquee}>
        <div style={fusionStyles.marqueeInner}>
          Scripts <span style={fusionStyles.marqueeStar}>✳</span>
          Campaigns <span style={fusionStyles.marqueeStar}>✳</span>
          Edits <span style={fusionStyles.marqueeStar}>✳</span>
          AI Workflows <span style={fusionStyles.marqueeStar}>✳</span>
          Brand <span style={fusionStyles.marqueeStar}>✳</span>
          Sites <span style={fusionStyles.marqueeStar}>✳</span>
          Scripts <span style={fusionStyles.marqueeStar}>✳</span>
          Campaigns <span style={fusionStyles.marqueeStar}>✳</span>
          Edits <span style={fusionStyles.marqueeStar}>✳</span>
        </div>
      </div>

      {/* WHAT WE DO */}
      <section style={fusionStyles.whatWeDo}>
        <div style={fusionStyles.sectionHead}>
          <span style={fusionStyles.sectionNum}>§ 01 / Services</span>
          <h2 style={fusionStyles.sectionTitle}>
            The menu,<br />
            <span style={fusionStyles.garamondItalic}>in pastel.</span>
          </h2>
          <p style={fusionStyles.sectionDek}>Seven things we do. Not eight. Eight would be showing off.</p>
        </div>

        <div style={fusionStyles.svcGrid}>
          {services.map((s, i) => (
            <div key={i} style={fusionStyles.svcCard(s.col, s.row, s.bg, { big: s.big, dark: s.dark })}>
              {s.badge && <span style={fusionStyles.newBadge}>✦ {s.badge}</span>}
              {s.tag && !s.badge && <span style={fusionStyles.svcTag}>{s.tag}</span>}
              <span style={fusionStyles.svcN}>— {s.n}</span>
              <div>
                <h3 style={{
                  ...fusionStyles.svcName,
                  fontSize: s.big ? 68 : 40,
                  margin: 0,
                }}>{s.name}</h3>
                <p style={{
                  ...fusionStyles.svcBody,
                  maxWidth: s.big ? 380 : 280,
                  color: s.dark ? '#c0c0c0' : `${ink}cc`,
                }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI BANNER */}
      <section style={fusionStyles.aiBanner}>
        <div style={{ ...fusionStyles.stickerStar(120, popPink, 15, 40, 60), zIndex: 3 }}></div>
        <div style={{ ...fusionStyles.heroEyebrow, marginBottom: 24 }}>
          <span style={{ ...fusionStyles.heroPill, borderColor: paper, color: paper }}>
            <span style={fusionStyles.heroDot(pop)}></span>
            § 02 / New this year
          </span>
        </div>
        <h2 style={fusionStyles.aiLine}>
          AI, but<br />
          <span style={{ ...fusionStyles.garamondItalic, color: butter }}>tastefully.</span>
        </h2>
        <p style={fusionStyles.aiSubLine}>
          Draft generation, variant edits, dubbed voice, synthetic b-roll, thumbnail storming.
          We use AI the way a kitchen uses a mixer — it speeds up the boring part so the chef can cook.
        </p>
      </section>

      {/* WORK */}
      <section style={fusionStyles.work}>
        <div style={fusionStyles.sectionHead}>
          <span style={fusionStyles.sectionNum}>§ 03 / Selected Work</span>
          <h2 style={fusionStyles.sectionTitle}>
            Receipts,<br />
            <span style={fusionStyles.garamondItalic}>attached.</span>
          </h2>
          <p style={fusionStyles.sectionDek}>Six on the wall. Forty-six under NDA. Ask nicely.</p>
        </div>

        <div style={fusionStyles.workBento}>
          {bento.map((b, i) => (
            <div key={i} style={fusionStyles.workCell(b.col, b.row, b.bg, { dark: b.dark })}>
              <div style={fusionStyles.workChip(b.dark ? 'transparent' : paper)}>
                <span style={{ ...fusionStyles.heroDot(b.dark ? butter : pop), width: 6, height: 6 }}></span>
                <span style={{ color: b.dark ? paper : ink, borderColor: b.dark ? paper : ink }}>{b.chip}</span>
              </div>
              <div>
                <div style={{ ...fusionStyles.workTitle, fontSize: b.col >= 7 ? 56 : 28, color: b.dark ? paper : ink }}>
                  {b.title}
                </div>
                <div style={fusionStyles.workMeta}>{b.meta}</div>
              </div>
              {b.play && <div style={fusionStyles.playButton}>▶</div>}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={fusionStyles.why}>
        <div style={{ ...fusionStyles.stickerStar(140, popBlue, -10, 40, 80), zIndex: 1 }}></div>
        <div style={fusionStyles.sectionHead}>
          <span style={fusionStyles.sectionNum}>§ 04 / Why us</span>
          <h2 style={fusionStyles.sectionTitle}>
            Six arguments,<br />
            <span style={fusionStyles.garamondItalic}>if you need them.</span>
          </h2>
          <p style={fusionStyles.sectionDek}>Take what's useful. Ignore the rest.</p>
        </div>

        <div style={fusionStyles.whyGrid}>
          {why.map((w, i) => (
            <div key={i} style={fusionStyles.whyItem}>
              <span style={fusionStyles.whyNum}>{w.n}.</span>
              <div>
                <h3 style={fusionStyles.whyTitle}>{w.title}</h3>
                <p style={fusionStyles.whyBody}>{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={fusionStyles.process}>
        <div style={fusionStyles.sectionHead}>
          <span style={fusionStyles.sectionNum}>§ 05 / Process</span>
          <h2 style={fusionStyles.sectionTitle}>
            Five weeks,<br />
            <span style={fusionStyles.garamondItalic}>give or take.</span>
          </h2>
          <p style={fusionStyles.sectionDek}>A rough rhythm. Your project may jog, sprint, or loiter — that's fine.</p>
        </div>

        <div>
          {process.map((p, i) => (
            <div key={i} style={fusionStyles.processRow}>
              <span style={fusionStyles.processNum}>{p.n}.</span>
              <h3 style={fusionStyles.processTitle}>{p.title}</h3>
              <p style={fusionStyles.processBody}>{p.body}</p>
              <span style={fusionStyles.processChip}>{p.chip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={fusionStyles.cta}>
        <div style={{ ...fusionStyles.blob(220, lilac, 40, 'auto', 80), zIndex: 1 }}></div>
        <div style={{ ...fusionStyles.stickerStar(100, butter, 22, 280, 40), zIndex: 2 }}></div>
        <div style={fusionStyles.sectionNum}>§ 06 / Let's talk</div>
        <h2 style={{ ...fusionStyles.ctaHead, position: 'relative', zIndex: 3 }}>
          Let's<br />
          <span style={fusionStyles.garamondItalic}>make</span><br />
          something.
        </h2>
        <a style={fusionStyles.ctaBtn}>
          hello@blackspace.media →
        </a>
        <div style={fusionStyles.ctaMeta}>
          <div>BENGALURU, IN</div>
          <div>IST — 14:22</div>
          <div>INSTAGRAM ↗</div>
          <div>LINKEDIN ↗</div>
        </div>
      </section>

      <footer style={fusionStyles.footer}>
        <span>© Blackspace 2025. All feelings reserved.</span>
        <span>Set in Acid Grotesk, Helvetica & Apple Garamond.</span>
      </footer>
    </div>
  );
}

window.FusionDirection = FusionDirection;
