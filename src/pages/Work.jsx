import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

// WORK page — project index with bento + list + filters

function SPWork({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = useIsMobile();

  const projects = [
    { col: 8, row: 3, bg: `radial-gradient(ellipse at 30% 40%, #8a4820 0%, #1a0e08 80%)`, chip: 'CAMPAIGN · FILM', title: 'Okinawa — The 5AM Film', client: 'Okinawa Fitness', year: '2025', result: '2.1M views / 14k DMs', dark: true, big: true },
    { col: 4, row: 3, bg: butter, chip: 'IDENTITY', title: 'Monarc', client: 'Monarc Watches', year: '2025', result: 'Full rebrand + launch film' },
    { col: 4, row: 2, bg: lilac, chip: 'AI + EDIT', title: '42 reels, 1 shoot day', client: 'Internal', year: '2024', result: 'Pipeline experiment' },
    { col: 4, row: 2, bg: sky, chip: 'SCRIPT', title: 'Skincare Spec Cut', client: 'Ajna Co.', year: '2024', result: 'Writers\' room 3-day sprint' },
    { col: 4, row: 2, bg: peach, chip: 'CONTENT', title: 'Office Hours', client: 'Blackspace', year: '2024', result: '12-ep founder series' },
    { col: 6, row: 2, bg: mint, chip: 'WEB', title: 'Heirloom Lookbook', client: 'Heirloom', year: '2025', result: 'Framer site + motion system' },
    { col: 6, row: 2, bg: T.ink, dark: true, chip: 'FILM', title: 'Bengaluru Breakfast', client: 'Self-initiated', year: '2024', result: 'Short doc, 4 min' },
  ];

  const filters = ['All', 'Campaigns', 'Films', 'Identity', 'Websites', 'AI Experiments', 'Scripts'];

  const past = [
    { year: '2025', client: 'Okinawa Fitness', title: 'The 5AM Film', scope: 'Campaign · Film · Social', result: '2.1M views', color: T.popA },
    { year: '2025', client: 'Monarc Watches', title: 'Monarc Rebrand', scope: 'Identity · Launch Film', result: '12% ↑ DTC', color: T.popB },
    { year: '2025', client: 'Heirloom', title: 'Lookbook Site', scope: 'Web · Motion', result: 'Gallery launch', color: T.popC },
    { year: '2024', client: 'Ajna Co.', title: 'Skincare Spec Cut', scope: 'Script · Campaign', result: 'Silver @ AdFest', color: T.popA },
    { year: '2024', client: 'Blackspace', title: 'Office Hours', scope: 'Content Series', result: '12 eps · 800k views', color: T.popB },
    { year: '2024', client: 'Internal R&D', title: '42 Reels / 1 Day', scope: 'AI Workflow', result: 'Internal pipeline', color: T.popC },
    { year: '2024', client: 'Self-initiated', title: 'Bengaluru Breakfast', scope: 'Short Film', result: 'Festival circuit', color: T.popA },
    { year: '2023', client: 'Undisclosed D2C', title: 'Founder Film', scope: 'Campaign', result: 'Seed close', color: T.popB },
    { year: '2023', client: 'Undisclosed SaaS', title: 'Product Launch Reel', scope: 'Film · Edit', result: 'ARR lift', color: T.popC },
  ];

  const [activeFilter, setActiveFilter] = React.useState('All');

  const matchFilter = (scopeStr, filter) => {
    if (filter === 'All') return true;
    const s = (scopeStr || '').toUpperCase();
    if (filter === 'Campaigns') return s.includes('CAMPAIGN');
    if (filter === 'Films') return s.includes('FILM');
    if (filter === 'Identity') return s.includes('IDENTITY');
    if (filter === 'Websites') return s.includes('WEB');
    if (filter === 'AI Experiments') return s.includes('AI');
    if (filter === 'Scripts') return s.includes('SCRIPT');
    return true;
  };

  const filteredProjects = projects.filter(p => matchFilter(p.chip, activeFilter));
  const filteredPast = past.filter(p => matchFilter(p.scope, activeFilter));

  return (
    <div style={{ background: 'transparent', color: T.ink, fontFamily: F.body, minHeight: '100vh' }}>
      <SPNav T={T} F={F} active="Work" />

      {/* Hero */}
      <section style={{ padding: isMobile ? '100px 20px 20px' : '140px 40px 40px', position: 'relative' }}>
        <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, opacity: 0.7 }}>
          <span>✳ Selected Work 2023—2025</span>
          <span>46 projects · 18 clients · 1 studio</span>
        </div>

        <div style={{ position: 'relative' }}>
          {!isMobile && <SPStatusSticker T={T} F={F} top={-50} right={200} rotate={-6} variant="torn" bg={lilac} icon="✎" iconBg={T.popB} label="Just shipped" name="Okinawa v2" />}
          {!isMobile && <SPStatusSticker T={T} F={F} top={140} right={40} rotate={8} variant="tape" tape={T.popA} bg={mint} icon="★" iconBg={T.ink} label="Award" name="AdFest Silver" />}
          {!isMobile && <SPStar size={70} color={T.popA} rotate={18} top={30} right={520} />}

          <h1 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 15vw, 260px)', lineHeight: 0.84, fontWeight: 700, letterSpacing: '-0.05em', margin: 0 }}>
            the <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>work,</span><br />not the <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>vibes.</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: isMobile ? 32 : 20, marginTop: isMobile ? 32 : 40, alignItems: 'start' }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, maxWidth: 320 }}>A running list of things we wrote, shot, cut, and occasionally had to explain to our mothers. Click anything to see how it was made.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  padding: '8px 16px', borderRadius: 999,
                  border: `1px solid ${T.ink}`,
                  background: isActive ? T.ink : 'transparent',
                  color: isActive ? T.paper : T.ink,
                  fontSize: 12, fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.2s ease', fontFamily: F.body
                }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = `${T.ink}11`; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}>{f}</button>
              );
            })}
          </div>
          <div style={{ textAlign: 'right', fontSize: 12, lineHeight: 1.6, opacity: 0.7 }}>
            <div>Sort: <u>Recent</u> / Impact / Client</div>
            <div>View: <u>Bento</u> / List / Film strip</div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section style={{ padding: isMobile ? '20px 20px 60px' : '20px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gridAutoRows: isMobile ? 'auto' : 140, gap: 14 }}>
          {filteredProjects.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', padding: '100px 20px', textAlign: 'center', opacity: 0.5, fontFamily: F.italic, fontSize: 24 }}>Nothing found for this category.</div>
          ) : filteredProjects.map((p, i) => (
            <Link key={i} to="#" style={{
              gridColumn: isMobile ? '1 / -1' : `span ${p.col}`, gridRow: isMobile ? 'auto' : `span ${p.row}`, background: p.bg,
              minHeight: isMobile ? 240 : 'auto',
              borderRadius: 20, position: 'relative', overflow: 'hidden', padding: 24,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              color: p.dark ? T.paper : T.ink, border: `1px solid ${T.ink}`,
              fontFamily: F.body, textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{
                  background: p.dark ? 'transparent' : T.paper, color: p.dark ? T.paper : T.ink,
                  padding: '6px 12px', borderRadius: 999,
                  fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: `1px solid ${p.dark ? T.paper : T.ink}33`, fontWeight: 500,
                }}>{p.chip}</div>
                <span style={{ fontSize: 11, letterSpacing: '0.1em', opacity: 0.7 }}>{p.year}</span>
              </div>
              <div>
                <div style={{ fontFamily: F.display, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.02, fontSize: p.big ? 'clamp(36px, 10vw, 64px)' : 'clamp(28px, 6vw, 40px)' }}>{p.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 12, opacity: 0.75 }}>
                  <span>{p.client}</span>
                  <span>{p.result}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SPMarquee T={T} F={F} words={['Clients', 'Okinawa', 'Monarc', 'Heirloom', 'Ajna Co.', '+ 14 more', 'Since 2023']} />

      {/* The list — chronological index */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.paper }}>
        <SPSectionHead T={T} F={F} num="§ 02 / The index" title="Everything," titleIt="chronological." dek="One row per project. The way databases wish they could look." />

        <div style={{ borderTop: `1px solid ${T.ink}` }}>
          <div style={{
            display: isMobile ? 'none' : 'grid', gridTemplateColumns: '80px 1.2fr 2fr 1.5fr 1fr 40px',
            gap: 20, padding: '16px 0', borderBottom: `1px solid ${T.ink}`,
            fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6,
          }}>
            <span>Year</span><span>Client</span><span>Project</span><span>Scope</span><span>Result</span><span></span>
          </div>
          {filteredPast.length === 0 ? (
            <div style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontFamily: F.italic, fontSize: 18 }}>No chronological entries for this filter.</div>
          ) : filteredPast.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '80px 1.2fr 2fr 1.5fr 1fr 40px',
              gap: isMobile ? 4 : 20, padding: isMobile ? '16px 16px' : '24px 16px', borderBottom: `1px solid ${T.ink}22`,
              alignItems: isMobile ? 'start' : 'baseline', position: 'relative', margin: '0 -16px',
              transition: 'transform 0.3s ease, background 0.3s ease, border-radius 0.3s ease', cursor: 'pointer'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = `${T.popA}11`; e.currentTarget.style.borderRadius = '16px'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderRadius = '0'; }}>
              <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 20, color: r.color }}>{r.year}</span>
              <span style={{ fontSize: 14, opacity: 0.8 }}>{r.client}</span>
              <span style={{ fontFamily: F.display, fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>{r.title}</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{r.scope}</span>
              <span style={{ fontSize: 13, fontFamily: F.italic, fontStyle: 'italic' }}>{r.result}</span>
              <span style={{ textAlign: 'right', fontSize: 18, display: isMobile ? 'none' : 'block' }}>↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* Big quote / testimonial */}
      <section style={{ padding: isMobile ? '80px 20px' : '120px 40px', background: lilac, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, position: 'relative', overflow: 'hidden' }}>
        <SPStar size={100} color={T.popB} rotate={18} top={40} right={isMobile ? -20 : 80} />
        <SPStar size={60} color={T.popA} rotate={-12} bottom={isMobile ? 20 : 60} left={isMobile ? -20 : 100} />
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.7 }}>§ Client testimony</div>
          <p style={{ fontFamily: F.display, fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 }}>
            "They showed up with a <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>script</span>, a <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popB }}>camera</span>, and <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>one dog</span>. We left with 42 assets and a whole brand."
          </p>
          <div style={{ marginTop: 32, fontSize: 14, opacity: 0.75 }}>— Priya K., Head of Brand, Monarc</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 14vw, 200px)', lineHeight: 0.85, fontWeight: 700, letterSpacing: '-0.05em', margin: 0 }}>
          your <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>project</span><br />could <span style={{ color: T.popA }}>live here.</span>
        </h2>
        <Link to="/contact" style={{ display: 'inline-flex', gap: 12, marginTop: 40, padding: '22px 34px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Start a project →</Link>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}

export default SPWork;
