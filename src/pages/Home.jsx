import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

// HOME page — sticker pop, refined with handmade stickers, fun statuses, Acid TM
// Uses SP_THEMES, SP_TYPE, SPNav, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPFooter

function SPHome({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = useIsMobile();

  const root = { width: '100%', minHeight: 2400, background: T.paper, color: T.ink, fontFamily: F.body, position: 'relative' };

  const hero = { padding: isMobile ? '40px 20px' : '60px 40px 80px', position: 'relative' };
  const heroMeta = { display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40, fontFamily: F.body };
  const wordmark = { fontFamily: F.display, fontSize: 'clamp(180px, 24vw, 360px)', lineHeight: 0.82, fontWeight: 700, letterSpacing: '-0.06em', margin: 0, textAlign: 'center', position: 'relative', color: T.ink };
  const wordmarkItal = { fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.ink, letterSpacing: '-0.03em' };
  const heroBottom = { display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'start', gap: isMobile ? 40 : 20, marginTop: isMobile ? 40 : 80 };
  const heroBlock = { fontSize: 14, lineHeight: 1.5, maxWidth: 320, fontFamily: F.body };
  const heroBlockHead = { fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.6 };
  const heroDek = { fontFamily: F.italic, fontStyle: 'italic', fontSize: 28, lineHeight: 1.25, textAlign: 'center', color: T.ink };

  // Floating status stickers — varied rotation, tape, torn edges
  const statusStickers = isMobile ? [
    { top: '10%', left: '5%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '◉', label: 'Right now', name: 'On Set', iconBg: T.ink, size: 'sm', zIndex: 20 },
    { top: '80%', right: '5%', rotate: 7, variant: 'square', bg: peach, icon: 'AI', label: 'In the oven', name: 'Draft Engine', iconBg: T.ink, size: 'sm', zIndex: 20 },
  ] : [
    { top: '5%', left: '8%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '◉', label: 'Right now', name: 'On Set', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '10%', right: '10%', rotate: 9, variant: 'torn', bg: lilac, icon: '✂', label: 'Currently', name: 'Editing', iconBg: T.popB, size: 'md', zIndex: 20 },
    { top: '45%', left: '2%', rotate: -5, variant: 'tape', tape: '#b0b0b0', bg: butter, icon: '☕', label: 'Team status', name: 'Brewing Coffee', iconBg: T.popA, size: 'md', zIndex: 20 },
    { top: '50%', right: '2%', rotate: 7, variant: 'square', bg: peach, icon: 'AI', label: 'In the oven', name: 'Draft Engine', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '80%', left: '20%', rotate: -4, variant: 'torn', bg: sky, icon: '✎', label: 'Fresh', name: 'Script Pass 3', iconBg: T.popB, size: 'md', zIndex: 20 },
    { top: '85%', right: '20%', rotate: 11, variant: 'tape', tape: T.popC, bg: mint, icon: '▶', label: 'Playback', name: 'Reel Cut', iconBg: T.popA, size: 'md', zIndex: 20 }
  ];


  const services = [
    { slug: 'content-campaigns', col: 6, row: 2, bg: T.paper, n: '01 / Flagship', name: 'Content Campaigns', body: 'End-to-end. Concept, script, shoot, cut, post. One team, no handoffs, no blame.', big: true, border: true },
    { slug: 'scripts', col: 3, row: 2, bg: lilac, n: '02', name: 'Scripts', body: 'Reels, ads, explainers. Words that sound like someone said them.' },
    { slug: 'video-edits', col: 3, row: 2, bg: sky, n: '03', name: 'Video Edits', body: 'Tight cuts, honest grades, music that earns its place.' },
    { slug: 'ai-workflows', col: 4, row: 1, bg: T.ink, dark: true, n: '04', name: 'AI Workflows', body: 'Drafts, variants, dubs, b-roll — on tap.', badge: 'NEW' },
    { slug: 'brand-identity', col: 4, row: 1, bg: mint, n: '05', name: 'Brand Identity', body: 'Marks, type, guidelines.' },
    { slug: 'websites-social', col: 4, row: 1, bg: peach, n: '06', name: 'Websites & Social', body: 'Framer, reels, management.' }];


  const work = [
    { col: 7, row: 3, bg: `radial-gradient(ellipse at 30% 40%, #8a4820 0%, #1a0e08 80%)`, chip: 'CAMPAIGN · FILM', title: 'Okinawa — The 5AM Film', meta: 'Fitness · 02:14', dark: true },
    { col: 5, row: 2, bg: butter, chip: 'IDENTITY', title: 'Monarc — mark & system', meta: 'Brand · 2025' },
    { col: 5, row: 1, bg: lilac, chip: 'AI + EDIT', title: '42 reels from 1 shoot day', meta: 'Experiment' },
    { col: 4, row: 2, bg: sky, chip: 'SCRIPT', title: 'Cut skincare spec', meta: 'Campaign' },
    { col: 4, row: 2, bg: peach, chip: 'CONTENT', title: 'Office Hours series', meta: '12 eps' },
    { col: 4, row: 2, bg: mint, chip: 'WEB', title: 'Heirloom — lookbook', meta: 'Site · 2025' }];


  const why = [
    { n: '01', h: 'Writers who shoot.', b: 'Editors who pitch. Directors who care about commas. Roles blur. Work sharpens.' },
    { n: '02', h: 'Strategy before swatches.', b: 'We ask the boring questions first. Audience, channel, budget. Then the fun ones.' },
    { n: '03', h: 'Taste is the brief.', b: 'You are paying for judgment. We are the filter between fine and sharp.' },
    { n: '04', h: 'AI, as a mixer.', b: 'It speeds up the boring part so the chef can cook. The author stays human.' },
    { n: '05', h: 'One phone number.', b: 'No account layer. You talk to the people making the thing.' },
    { n: '06', h: 'We ship, then tune.', b: 'First cut is not the last cut. We measure, tweak, ship again.' }];


  return (
    <div style={root}>
      <SPNav T={T} F={F} active="" />

      <section style={hero}>
        <div style={heroMeta}>
          <span>✳ Blackspace® — A content studio</span>
          <span>Bengaluru · IN · Est. 2023</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: isMobile ? 300 : 600, position: 'relative' }}>
          {statusStickers.map((st, i) =>
            <SPStatusSticker key={i} T={T} F={F} {...st} />
          )}
          {!isMobile && <SPStar size={80} color={T.popA} rotate={20} top="-2%" right="35%" />}
          {!isMobile && <SPStar size={56} color={T.popB} rotate={-10} top="65%" left="15%" />}
          {!isMobile && <SPStar size={44} color={T.popC} rotate={15} top="30%" right="5%" />}

          <div className="sp-wordmark" style={{ zIndex: 10, position: 'relative', width: '100%', padding: isMobile ? '0 10px' : 0, boxSizing: 'border-box' }}>
            <img src="../logo.svg" alt="Blackspace" style={{ width: '100%', maxWidth: isMobile ? 400 : 900, height: 'auto', display: 'block', margin: '0 auto' }} />
          </div>
        </div>

        <div style={heroBottom}>
          <SPParallax speed={0.04} style={{ ...heroDek, order: isMobile ? 1 : 2, flex: 1, maxWidth: isMobile ? '100%' : 400 }}>
            <em>We write, shoot, cut & <span style={{ color: T.popA }}>occasionally go viral.</span></em>
          </SPParallax>

          <SPParallax speed={0.08} style={{ ...heroBlock, order: isMobile ? 2 : 1, textAlign: isMobile ? 'center' : 'left', flex: 1 }}>
            <div style={heroBlockHead}>↳ What we are</div>
            <p style={{ margin: 0 }}>A creative studio making content campaigns, scripts, edits, and brand work — with AI quietly doing the laundry in the back.</p>
          </SPParallax>

          <SPParallax speed={0.06} style={{ ...heroBlock, order: 3, textAlign: isMobile ? 'center' : 'right', flex: 1 }}>
            <div style={heroBlockHead}>(2) Discover ↓</div>
            <p style={{ margin: 0 }}>Scripts → Shoots → Edits → AI → Posts → Repeat. Seven days a week, minus the occasional Sunday.</p>
          </SPParallax>
        </div>
      </section>

      <SPMarquee T={T} F={F} words={['Scripts', 'Campaigns', 'Edits', 'AI Workflows', 'Brand', 'Websites', 'Social']} />

      {/* Services */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 01 / Services" title="The menu," titleIt="in pastel." dek="Six things. Done fully, not partially." />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gridAutoRows: isMobile ? 'auto' : 220, gap: 16 }}>
          {services.map((svc, i) =>
            <Link key={i} to={`/service-detail?id=${svc.slug}`} style={{
              gridColumn: isMobile ? '1 / -1' : `span ${svc.col}`, gridRow: isMobile ? 'auto' : `span ${svc.row}`,
              background: svc.bg, border: `1px solid ${T.ink}`, borderRadius: 20,
              padding: 28, position: 'relative', overflow: 'hidden', color: svc.dark ? T.paper : T.ink, fontFamily: F.body,
              textDecoration: 'none', display: 'block', cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.1)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{svc.n}</span>
                  {svc.badge && <span style={{ background: T.popB, color: T.paper, padding: '4px 10px', borderRadius: 999, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, border: `1px solid ${T.ink}`, transform: 'rotate(6deg)' }}>✦ {svc.badge}</span>}
                </div>
                <div style={{ marginTop: svc.big ? 40 : 24 }}>
                  <h3 style={{ fontFamily: F.display, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, margin: 0, fontSize: svc.big ? 'clamp(40px, 10vw, 72px)' : 'clamp(28px, 6vw, 36px)', color: svc.dark ? T.paper : T.ink }}>{svc.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 12, maxWidth: 320, opacity: 0.85, color: svc.dark ? T.paper : T.ink }}>{svc.body}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Work */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.ink, color: T.paper }}>
        <SPSectionHead T={T} F={{ ...F }} num="§ 02 / Selected Work" title="Receipts," titleIt="attached." dek="Six shown. Forty-six under NDA." />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gridAutoRows: isMobile ? 'auto' : 180, gap: 12 }}>
          {work.map((w, i) =>
            <div key={i} style={{
              gridColumn: isMobile ? '1 / -1' : `span ${w.col}`, gridRow: isMobile ? 'auto' : `span ${w.row}`, background: w.bg,
              minHeight: isMobile ? 240 : 'auto',
              borderRadius: 16, position: 'relative', overflow: 'hidden', padding: 20,
              color: w.dark ? T.paper : T.ink, border: `1px solid ${w.dark ? T.paper : T.ink}33`, fontFamily: F.body, cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: w.dark ? 'transparent' : T.paper, color: w.dark ? T.paper : T.ink,
                  padding: '4px 10px', borderRadius: 999,
                  fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
                  width: 'fit-content', border: `1px solid ${w.dark ? T.paper : T.ink}33`
                }}>{w.chip}</div>
                <div>
                  <div style={{ fontFamily: F.display, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05, fontSize: w.col >= 7 ? 'clamp(32px, 8vw, 52px)' : 'clamp(24px, 6vw, 26px)' }}>{w.title}</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, opacity: 0.7 }}>{w.meta}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Color theme — colorful section between dark work + light why */}
      <section style={{ background: T.popA, color: T.paper, padding: isMobile ? '40px 20px' : '60px 40px', borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, position: 'relative', overflow: 'hidden' }}>
        <SPStar size={140} color={T.popB} rotate={20} top={-30} right={isMobile ? -20 : 120} />
        <SPStar size={90} color={butter} rotate={-15} bottom={-20} left={isMobile ? -20 : 60} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 30 : 60, alignItems: 'center' }}>
          <div style={{ fontFamily: F.display, fontSize: 'clamp(40px, 12vw, 120px)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.05em' }}>
            AI, but <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>like,</span><br />tastefully.
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.55, fontFamily: F.body, maxWidth: 520 }}>
            <p style={{ margin: 0, marginBottom: 16 }}>We use AI the way a good kitchen uses a sous-chef: for the prep, the reps, the 2am labor. Never the plating.</p>
            <p style={{ margin: 0, opacity: 0.85 }}>Drafts, variants, dubs, b-roll, research — automated. Taste, story, tone, the gut of it — human.</p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 03 / Why us" title="Six arguments," titleIt="if you need them." dek="Take what helps." />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
          {[why.slice(0, 3), why.slice(3)].map((col, ci) =>
            <div key={ci}>
              {col.map((w, i) =>
                <div key={i} style={{ padding: '28px 16px', borderTop: `1px solid ${T.ink}`, fontFamily: F.body, margin: '0 -16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24 }}>
                    <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 36, color: T.popA }}>{w.n}.</span>
                    <div>
                      <h3 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0 }}>{w.h}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 10, opacity: 0.75 }}>{w.b}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '80px 20px' : '140px 40px', background: butter, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SPStar size={120} color={T.popB} rotate={15} top={40} right={isMobile ? -20 : 60} />
        <SPStar size={90} color={T.popA} rotate={-20} bottom={isMobile ? 20 : 120} left={isMobile ? -20 : 60} />
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, fontFamily: F.body, marginBottom: 24 }}>§ 04 / Let's talk</div>
        <SPParallax speed={0.06}>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 15vw, 240px)', lineHeight: 0.85, fontWeight: 700, letterSpacing: '-0.06em', margin: 0, color: T.ink }}>
            Let's <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>make</span><br />something.
          </h2>
        </SPParallax>
        <Link to="/contact" style={{ display: 'inline-flex', gap: 12, marginTop: 40, padding: '22px 34px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, fontFamily: F.body, textDecoration: 'none', border: `1px solid ${T.ink}`, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>hello@blackspace.media →</Link>
      </section>

      <SPFooter T={T} F={F} />
    </div>);

}

export default SPHome;