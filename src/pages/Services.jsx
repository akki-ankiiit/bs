import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

// SERVICES page — menu + process + pricing-ish

function SPServices({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];
  
  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = useIsMobile();

  const menu = [
    {
      n:'01', name:'Content Campaigns', bg:T.paper, big:true,
      tag:'Flagship',
      what:'End-to-end. Concept → script → shoot → edit → post.',
      for:'Brands launching, re-launching, or tired of stitched pipelines.',
      duration:'6–12 weeks',
      from:'₹12L',
      includes:['Strategy', 'Scripts', 'Direction', '3-day shoot', 'Edit + grade', 'Social cutdowns', 'Post schedule'],
    },
    {
      n:'02', name:'Scripts', bg:lilac,
      what:'Reels, ads, explainers, long-form. Words that sound said.',
      for:'Teams with a camera but no writer.',
      duration:'1–3 weeks',
      from:'₹40k',
      includes:['Kickoff', 'Script', '2 rounds edits', 'Shot list'],
    },
    {
      n:'03', name:'Video Edits', bg:sky,
      what:'Tight cuts, honest grades, music that earns its place.',
      for:'Footage-rich brands. Podcasts. Event teams.',
      duration:'5–10 days',
      from:'₹60k',
      includes:['Raw intake', 'Paper edit', 'Cut', 'Grade', 'Sound mix'],
    },
    {
      n:'04', name:'AI Workflows', bg:T.ink, dark:true, new:true,
      what:'Drafts, variants, dubs, b-roll — on tap.',
      for:'Marketing teams scaling without scaling.',
      duration:'Custom',
      from:'₹80k/mo',
      includes:['Pipeline design', 'Prompts & guardrails', 'Human QC', 'Monthly tune-up'],
    },
    {
      n:'05', name:'Brand Identity', bg:mint,
      what:'Marks, type, color, guidelines, launch assets.',
      for:'Early-stage brands and mature ones mid-molt.',
      duration:'4–8 weeks',
      from:'₹6L',
      includes:['Discovery', 'Logo system', 'Type + color', 'Guidelines PDF', 'Launch kit'],
    },
    {
      n:'06', name:'Websites & Social', bg:peach,
      what:'Framer sites. Instagram management. Reels that actually move.',
      for:'Founders who hate LinkedIn but need a presence.',
      duration:'Ongoing or 3–5 weeks',
      from:'₹2L',
      includes:['Site build', 'Social calendar', 'Reels production', 'Monthly report'],
    },
  ];

  const process = [
    { n:'01', h:'Call.', b:'30 minutes. You talk, we ask, nobody pitches.', icon:'☎', bg:mint },
    { n:'02', h:'Brief.', b:'We write it back to you. Your job: red-pen the hell out of it.', icon:'✎', bg:lilac },
    { n:'03', h:'Concept.', b:'2–3 directions, each with a one-liner and a reference reel.', icon:'◎', bg:sky },
    { n:'04', h:'Make.', b:'Scripts, shoots, edits, art. We ship drafts weekly.', icon:'▶', bg:butter },
    { n:'05', h:'Ship.', b:'Launch, measure, learn. Repeat. Retainer clients, that\'s forever.', icon:'✳', bg:peach },
  ];

  return (
    <div style={{ background:T.paper, color:T.ink, fontFamily:F.body, minHeight:'100vh' }}>
      <SPNav T={T} F={F} active="Services" />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px 20px' : '60px 40px 40px', position:'relative' }}>
        <div style={{ display: isMobile ? 'none' : 'flex', justifyContent:'space-between', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:32, opacity:0.7 }}>
          <span>✳ Services · Pricing · Process</span>
          <span>Six things. Plus a few off-menu specials.</span>
        </div>

        <div style={{ position:'relative' }}>
          {!isMobile && <SPStatusSticker T={T} F={F} top={-10} left={140} rotate={-6} variant="tape" tape={T.popA} bg={mint} icon="$" iconBg={T.ink} label="Starts at" name="₹40k" />}
          {!isMobile && <SPStatusSticker T={T} F={F} top={140} right={140} rotate={7} variant="torn" bg={butter} icon="⏱" iconBg={T.popB} label="Typical" name="6–12 weeks" />}
          {!isMobile && <SPStar size={60} color={T.popA} rotate={18} top={60} right={60} />}

          <h1 style={{ fontFamily:F.display, fontSize:'clamp(60px, 15vw, 260px)', lineHeight:0.84, fontWeight:700, letterSpacing:'-0.05em', margin:0 }}>
            the <span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400, color:T.popA }}>menu,</span><br/>no <span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400 }}>fine print.</span>
          </h1>
        </div>

        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr 1fr', gap: isMobile ? 32 : 40, marginTop: isMobile ? 40 : 60, alignItems:'start' }}>
          <p style={{ margin:0, fontSize:14, lineHeight:1.55, opacity:0.8 }}>Everything we do, what it's for, what it costs, and roughly how long it takes. Mix and match, or let us suggest a combo.</p>
          <p style={{ margin:0, fontFamily:F.italic, fontStyle:'italic', fontSize:22, lineHeight:1.35, textAlign:'center' }}>
            Prices are a starting point, not a ceiling. Good briefs get good prices.
          </p>
          <div style={{ textAlign:'right' }}>
            <Link to="/contact" style={{ display:'inline-flex', gap:8, padding:'12px 22px', background:T.ink, color:T.paper, borderRadius:999, fontSize:13, fontWeight:500, textDecoration:'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `3px 4px 0 ${T.ink}`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Get a quote →</Link>
          </div>
        </div>
      </section>

      {/* Menu grid */}
      <section style={{ padding: isMobile ? '20px 20px 60px' : '40px 40px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gridAutoRows:'auto', gap:16 }}>
          {menu.map((m,i)=>(
            <article key={i} style={{
              gridColumn: isMobile ? '1 / -1' : `span ${m.big?12:6}`,
              background:m.bg, border:`1px solid ${T.ink}`, borderRadius:20,
              padding: isMobile ? 24 : (m.big?40:32), position:'relative', overflow:'hidden',
              color:m.dark?T.paper:T.ink,
              display:'grid', gridTemplateColumns: isMobile ? '1fr' : (m.big?'1fr 1.4fr':'1fr'), gap: isMobile ? 32 : (m.big?48:0),
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:20 }}>
                  <span style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.7 }}>
                    {m.n} {m.tag && `· ${m.tag}`}
                  </span>
                  {m.new && <span style={{ background:T.popB, color:T.paper, padding:'4px 10px', borderRadius:999, fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', fontWeight:600, border:`1px solid ${T.paper}`, transform:'rotate(5deg)' }}>✦ NEW</span>}
                </div>
                <h3 style={{ fontFamily:F.display, fontSize: m.big ? 'clamp(32px, 8vw, 72px)' : 'clamp(28px, 6vw, 44px)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, margin:0 }}>{m.name}</h3>
                <p style={{ fontFamily:F.italic, fontStyle:'italic', fontSize:m.big?22:16, lineHeight:1.35, marginTop:16, maxWidth:420, opacity:0.9 }}>{m.what}</p>
              </div>

              <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : (m.big?'1fr 1fr':'1fr'), gap:m.big?24:16, marginTop: isMobile ? 0 : (m.big?0:24) }}>
                <div>
                  <div style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.6, marginBottom:6 }}>For</div>
                  <div style={{ fontSize:14, lineHeight:1.5 }}>{m.for}</div>
                </div>
                <div style={{ display:'flex', gap:24 }}>
                  <div>
                    <div style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.6, marginBottom:6 }}>Duration</div>
                    <div style={{ fontSize:14 }}>{m.duration}</div>
                  </div>
                  <div>
                    <div style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.6, marginBottom:6 }}>From</div>
                    <div style={{ fontFamily:F.display, fontSize:24, fontWeight:600 }}>{m.from}</div>
                  </div>
                </div>
                <div style={{ gridColumn: m.big?'1 / -1':'1' }}>
                  <div style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.6, marginBottom:8 }}>Includes</div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                    {m.includes.map(inc=>(
                      <span key={inc} style={{
                        background: m.dark?`${T.paper}22`:`${T.ink}0a`,
                        border:`1px solid ${(m.dark?T.paper:T.ink)}55`,
                        padding:'4px 10px', borderRadius:999, fontSize:11,
                      }}>{inc}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SPMarquee T={T} F={F} words={['Scripts', 'Shoots', 'Edits', 'AI', 'Brand', 'Web', 'Social']} />

      {/* Process */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 02 / The process" title="How it" titleIt="goes." dek="Five steps. Occasionally four. Sometimes six." />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5,1fr)', gap:12 }}>
          {process.map((p,i)=>(
            <div key={i} style={{
              background:p.bg, border:`1px solid ${T.ink}`, borderRadius:16,
              padding:24, aspectRatio:'3/4', position:'relative',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{
                width:56, height:56, borderRadius:14, background:T.ink, color:T.paper,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:F.display, fontSize:24, fontWeight:700,
              }}>{p.icon}</div>
              <div>
                <div style={{ fontFamily:F.italic, fontStyle:'italic', fontSize:14, opacity:0.7, marginBottom:4 }}>Step {p.n}</div>
                <h3 style={{ fontFamily:F.display, fontSize:32, fontWeight:700, letterSpacing:'-0.02em', lineHeight:0.95, margin:0 }}>{p.h}</h3>
                <p style={{ fontSize:13, lineHeight:1.5, marginTop:10, opacity:0.8 }}>{p.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background:T.ink, color:T.paper }}>
        <SPSectionHead T={T} F={F} num="§ 03 / FAQ" title="Things you're" titleIt="about to ask." dek="Usually in this order." />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 0 : 40 }}>
          {[
            { q:'Do you work with agencies?', a:'Sometimes. We prefer direct, but we play well with others.' },
            { q:'Do you work with startups?', a:'Yes, and we love it. We also have a seed-stage discount. Ask.' },
            { q:'Do you work outside India?', a:'Yes. About 40% of our work ships abroad. Calls at weird hours are a way of life.' },
            { q:'Can you guarantee virality?', a:'No. Anyone who does is lying. We can guarantee craft.' },
            { q:'What about AI — is it just slop?', a:'Not how we use it. We use it to speed the tedious parts, not to replace the judgment.' },
            { q:'Do you have a minimum engagement?', a:'₹40k. Smaller than that, we\'re not the right shop.' },
          ].map((f,i)=>(
            <div key={i} style={{ padding:'28px 16px', borderTop:`1px solid ${T.paper}33`, margin: '0 -16px', transition: 'transform 0.3s ease, background 0.3s ease, border-radius 0.3s ease', cursor: 'pointer' }}
                 onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = `${T.popA}22`; e.currentTarget.style.borderRadius = '16px'; }}
                 onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderRadius = '0'; }}>
              <h3 style={{ fontFamily:F.display, fontSize:26, fontWeight:600, letterSpacing:'-0.015em', lineHeight:1.15, margin:0 }}>{f.q}</h3>
              <p style={{ fontSize:14, lineHeight:1.55, marginTop:12, opacity:0.75 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '80px 20px' : '120px 40px', textAlign:'center', background:butter, borderBottom:`1px solid ${T.ink}`, position:'relative', overflow:'hidden' }}>
        <SPStar size={120} color={T.popB} rotate={15} top={40} right={isMobile ? -20 : 80} />
        <SPStar size={80} color={T.popA} rotate={-20} bottom={isMobile ? 20 : 60} left={isMobile ? -20 : 80} />
        <h2 style={{ fontFamily:F.display, fontSize:'clamp(60px, 14vw, 200px)', lineHeight:0.85, fontWeight:700, letterSpacing:'-0.05em', margin:0 }}>
          tell us about<br/><span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400, color:T.popA }}>your thing.</span>
        </h2>
        <Link to="/contact" style={{ display:'inline-flex', gap:12, marginTop:40, padding:'22px 34px', background:T.ink, color:T.paper, borderRadius:999, fontSize:15, fontWeight:500, textDecoration:'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Start a project →</Link>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}

export default SPServices;
