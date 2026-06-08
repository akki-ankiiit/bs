import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useBreakpoints } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

// CONTACT page — form + "what happens next" + team on-call

function SPContact({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const services = ['Content Campaign', 'Scripts', 'Video Edits', 'AI Workflows', 'Brand Identity', 'Website', 'Social', 'Not sure yet'];
  const budgets = ['< ₹2L', '₹2–5L', '₹5–12L', '₹12L+'];

  const input = {
    background: T.paper, border: `1px solid ${T.ink}`, borderRadius: 12,
    padding: '16px 18px', fontSize: 15, width: '100%',
    fontFamily: F.body, color: T.ink, outline: 'none',
    boxSizing: 'border-box',
  };
  const label = { fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 8, display: 'block' };

  const chip = (active) => ({
    padding: '10px 16px', borderRadius: 999,
    border: `1px solid ${T.ink}`,
    background: active ? T.ink : T.paper,
    color: active ? T.paper : T.ink,
    fontSize: 13, cursor: 'pointer', fontWeight: 500,
  });

  const [activeSvc, setActiveSvc] = React.useState('Content Campaign');
  const [activeBudget, setActiveBudget] = React.useState('₹5–12L');
  const [isRetainer, setIsRetainer] = React.useState(false);

  const sideCardStyle = (bg) => ({
    background: bg, border: `1px solid ${T.ink}`, borderRadius: 20, padding: 24, position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  });
  const sideCardEnter = e => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = `4px 6px 0 ${T.ink}`;
  };
  const sideCardLeave = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={{ background: 'transparent', color: T.ink, fontFamily: F.body, minHeight: '100vh' }}>
      <SPNav T={T} F={F} active="Contact" />

      {/* Hero */}
      <section style={{ padding: isMobile ? '100px 20px 20px' : isTablet ? '120px 30px 30px' : '140px 40px 40px', position: 'relative' }}>
        <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, opacity: 0.7 }}>
          <span>✳ Contact · Say hi</span>
          <span>We reply in 1 business day. Usually less.</span>
        </div>

        <div style={{ position: 'relative' }}>
          <SPStatusSticker T={T} F={F} top={isMobile ? -30 : isTablet ? -10 : 10} left={isMobile ? 10 : isTablet ? 30 : 120} rotate={-7} variant="tape" tape={T.popA} bg={mint} icon="◉" iconBg={T.ink} label="Right now" name="Taking briefs" scale={isMobile ? 0.6 : isTablet ? 0.75 : 1} />
          <SPStatusSticker T={T} F={F} top={isMobile ? 180 : isTablet ? 220 : 300} right={isMobile ? 10 : isTablet ? 40 : 140} rotate={8} variant="torn" bg={butter} icon="✎" iconBg={T.popB} label="Team status" name="Writing pitches" scale={isMobile ? 0.6 : isTablet ? 0.75 : 1} />
          <SPStar size={isMobile ? 40 : isTablet ? 55 : 70} color={T.popA} rotate={18} top={isMobile ? 20 : isTablet ? 40 : 60} right={isMobile ? 10 : isTablet ? 30 : 60} />

          <h1 style={{ fontFamily: F.display, fontSize: isMobile ? '80px' : 'clamp(140px, 18vw, 260px)', lineHeight: 0.84, fontWeight: 700, letterSpacing: '-0.05em', margin: 0, textAlign: 'center' }}>
            say the <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>thing.</span>
          </h1>
          <SPParallax speed={0.04}>
            <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 22, textAlign: 'center', maxWidth: 640, margin: '24px auto 0', opacity: 0.85, paddingTop: 40 }}>
              Shortest path: fill this in. Longer path: email us. Longest: LinkedIn <br />(we check on Fridays).
            </p>
          </SPParallax>
        </div>
      </section>

      {/* Form + side */}
      <section style={{ padding: isMobile ? '40px 20px' : isTablet ? '50px 30px 60px' : '60px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1.4fr 1fr', gap: isMobile || isTablet ? 32 : 40 }}>

          {/* Form */}
          <div style={{
            background: T.paper, border: `1px solid ${T.ink}`, borderRadius: 24,
            padding: 40, position: 'relative',
            boxShadow: `6px 6px 0 ${T.ink}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `8px 12px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `6px 6px 0 ${T.ink}`; }}>
            <div style={{
              position: 'absolute', top: -16, left: 40, zIndex: 10,
              background: T.popA, color: T.paper, padding: '8px 18px', borderRadius: 999,
              fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600,
              border: `1px solid ${T.ink}`, transform: 'rotate(-3deg)',
            }}>New brief ↓</div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr', gap: 20, marginTop: 16 }}>
              <div>
                <label style={label}>Your name</label>
                <input style={input} placeholder="Riya Kapoor" />
              </div>
              <div>
                <label style={label}>Company</label>
                <input style={input} placeholder="Acme Co." />
              </div>
              <div>
                <label style={label}>Email</label>
                <input style={input} placeholder="riya@acme.co" />
              </div>
              <div>
                <label style={label}>Phone (optional)</label>
                <input style={input} placeholder="+91 ..." />
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <label style={label}>What do you need?</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {services.map(s => (
                  <span key={s} style={chip(s === activeSvc)} onClick={() => setActiveSvc(s)}>{s}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <label style={label}>Budget range</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                {budgets.map(b => (
                  <span key={b} style={chip(b === activeBudget)} onClick={() => setActiveBudget(activeBudget === b ? null : b)}>{b}</span>
                ))}
                <span style={{ width: 1, height: 24, background: T.ink, opacity: 0.2, margin: '0 4px' }} />
                <span style={chip(isRetainer)} onClick={() => setIsRetainer(!isRetainer)}>Retainer</span>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <label style={label}>Tell us about the project</label>
              <textarea style={{ ...input, minHeight: 140, resize: 'vertical', fontFamily: F.body }} placeholder="The rougher the better. Who it's for, what it needs to do, when it needs to land. Link us to anything useful." />
            </div>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 0, justifyContent: 'space-between', alignItems: isMobile ? 'stretch' : 'center', marginTop: 32 }}>
              <div style={{ fontSize: 12, opacity: 0.7, maxWidth: isMobile ? '100%' : 320 }}>
                <label style={{ display: 'flex', gap: 10, alignItems: 'center', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: T.popA }} />
                  <span>I'd like to receive occasional studio dispatches. (About once a quarter, we promise.)</span>
                </label>
              </div>
              <button style={{
                background: T.popA, color: T.paper, border: `1px solid ${T.ink}`,
                padding: '18px 32px', borderRadius: 999, fontSize: 15, fontWeight: 500,
                fontFamily: F.body, cursor: 'pointer',
                boxShadow: `3px 3px 0 ${T.ink}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `5px 6px 0 ${T.ink}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `3px 3px 0 ${T.ink}`; }}>Send brief →</button>
            </div>
          </div>

          {/* Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 20 }}>
            <div style={sideCardStyle(mint)} onMouseEnter={sideCardEnter} onMouseLeave={sideCardLeave}>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 10 }}>Or just email</div>
              <a href="mailto:hello@blackspace.media" style={{ fontFamily: F.display, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: T.ink, display: 'block' }}>hello@blackspace.media</a>
              <div style={{ fontSize: 13, marginTop: 12, opacity: 0.75 }}>Hits all three founders at once. Someone replies within a day.</div>
            </div>

            <div style={sideCardStyle(lilac)} onMouseEnter={sideCardEnter} onMouseLeave={sideCardLeave}>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 10 }}>Walk-ins welcome</div>
              <div style={{ fontFamily: F.display, fontSize: 24, fontWeight: 600, letterSpacing: '-0.015em' }}>Koramangala 5th Block</div>
              <div style={{ fontSize: 13, marginTop: 6, opacity: 0.75 }}>Bengaluru, IN — 560095. Coffee, tea, tap water, biscuits.</div>
            </div>

            <div style={sideCardStyle(butter)} onMouseEnter={sideCardEnter} onMouseLeave={sideCardLeave}>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 10 }}>Other frequencies</div>
              <div style={{ display: 'grid', gap: 8, fontSize: 14 }}>
                <Link to="#" style={{ color: T.ink, textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }}><span>Instagram</span><span>@blackspace.media ↗</span></Link>
                <Link to="#" style={{ color: T.ink, textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }}><span>LinkedIn</span><span>/blackspace-media ↗</span></Link>
                {/* <Link to="#" style={{ color: T.ink, textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }}><span>Vimeo</span><span>/blackspace ↗</span></Link> */}
              </div>
            </div>

            <div style={sideCardStyle(peach)} onMouseEnter={sideCardEnter} onMouseLeave={sideCardLeave}>
              <SPStar size={40} color={T.popA} rotate={15} top={-12} right={-10} />
              <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 10 }}>Careers</div>
              <div style={{ fontFamily: F.display, fontSize: 24, fontWeight: 600, letterSpacing: '-0.015em' }}>Join us?</div>
              <div style={{ fontSize: 13, marginTop: 6, opacity: 0.75 }}>We hire slowly. Send your work + a short note.</div>
              <a href="mailto:jobs@blackspace.media" style={{ marginTop: 14, display: 'inline-block', fontSize: 13, fontWeight: 500, color: T.ink }}>jobs@blackspace.media →</a>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section style={{ padding: isMobile ? '60px 20px' : isTablet ? '70px 30px' : '80px 40px', background: T.ink, color: T.paper }}>
        <SPSectionHead T={T} F={F} num="§ 02 / Next" title="What happens" titleIt="when you send this." dek="A rough schedule, from our side." />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile || isTablet ? 40 : 20 }}>
          {[
            { n: 'Day 0', h: 'Auto-reply.', b: 'You get a receipt. It\'s short. We\'re reading.' },
            { n: 'Day 1', h: 'A human replies.', b: 'With either a call invite, follow-up questions, or a soft decline.' },
            { n: 'Day 2–4', h: 'Discovery call.', b: '30 minutes. We ask more than we tell. No pitch deck.' },
            { n: 'Day 5–7', h: 'Proposal.', b: 'A 2-page PDF. Scope, team, timeline, price. Legible.' },
          ].map((s, i) => (
            <div key={i} style={{ borderTop: `1px solid ${T.paper}33`, paddingTop: 20 }}>
              <div style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 16, color: T.popA, marginBottom: 8 }}>{s.n}</div>
              <h3 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, letterSpacing: '-0.015em', margin: 0 }}>{s.h}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 10, opacity: 0.75 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}

export default SPContact;
