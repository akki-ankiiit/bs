/* global React */
// STUDIO page — about, team, manifesto

function SPStudio({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = window.SP_THEMES[themeKey];
  const F = window.SP_TYPE[typeKey];
  const { SPNav, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPFooter } = window;
  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = window.useIsMobile();

  const team = [
    { name:'Aarav Menon', role:'Founder · Creative Director', bg:mint, emoji:'🎬', sticker:'Directing', rotate:-3 },
    { name:'Riya Shah', role:'Head of Words', bg:lilac, emoji:'✎', sticker:'Scripting', rotate:4 },
    { name:'Kabir Rao', role:'Lead Editor', bg:sky, emoji:'✂', sticker:'Cutting', rotate:-5 },
    { name:'Nisha Pillai', role:'Design & Identity', bg:peach, emoji:'◐', sticker:'Designing', rotate:3 },
    { name:'Dev Krishnan', role:'AI Workflows', bg:butter, emoji:'AI', sticker:'Prompting', rotate:-4 },
    { name:'Tara George', role:'Producer', bg:mint, emoji:'☎', sticker:'Producing', rotate:5 },
    { name:'Rhea Fernandes', role:'Social & Community', bg:lilac, emoji:'✦', sticker:'Posting', rotate:-2 },
    { name:'Studio Dog (Kori)', role:'Morale Department', bg:peach, emoji:'🐕', sticker:'Napping', rotate:6 },
  ];

  const beliefs = [
    { n:'I.', h:'Boredom is a strategy problem.', b:'If the work is boring, the brief was wrong. We rewrite briefs.' },
    { n:'II.', h:'Taste is mostly courage.', b:'Anyone can spot the good option. The hard part is killing the safe one.' },
    { n:'III.', h:'Craft is a receipt for care.', b:'We sweat frame rates, kerning, and the third word of every sentence. So you don\'t have to.' },
    { n:'IV.', h:'Speed beats perfection, once.', b:'First cuts ship. Second cuts earn their slowness.' },
    { n:'V.', h:'AI is a junior, not a peer.', b:'Useful, fast, sometimes wrong. Always supervised.' },
    { n:'VI.', h:'We are not a vibe. We are a contract.', b:'Scope, price, date. Written down. Honored.' },
  ];

  const timeline = [
    { year:'2023', h:'Started in a 2BHK in Indiranagar.', b:'Two laptops, one camera, a projector that occasionally worked.' },
    { year:'2023', h:'First campaign: a skincare brand.', b:'We learned what a D-I-1 shot is. Also what a "client comment" is.' },
    { year:'2024', h:'Office Hours, the series.', b:'12 episodes. 800k views. Our parents finally understood the job.' },
    { year:'2024', h:'AI pipeline goes live.', b:'42 reels from one shoot day. The studio dog was unimpressed.' },
    { year:'2025', h:'Moved to Koramangala.', b:'Bigger room. Same projector. Now with plants.' },
    { year:'2025', h:'Team of 11.', b:'Plus Kori. Kori counts.' },
  ];

  return (
    <div style={{ background:T.paper, color:T.ink, fontFamily:F.body, minHeight:'100vh' }}>
      <SPNav T={T} F={F} active="Studio" />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px' : '60px 40px 40px', position:'relative' }}>
        <div style={{ display: isMobile ? 'none' : 'flex', justifyContent:'space-between', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:32, opacity:0.7 }}>
          <span>✳ The studio</span>
          <span>11 people · 1 dog · 1 projector</span>
        </div>

        <div style={{ position:'relative' }}>
          {!isMobile && <SPStatusSticker T={T} F={F} top={-10} left={80} rotate={-7} variant="tape" tape={T.popC} bg={butter} icon="☕" iconBg={T.ink} label="Right now" name="Brewing coffee" />}
          {!isMobile && <SPStatusSticker T={T} F={F} top={120} right={180} rotate={6} variant="torn" bg={mint} icon="♫" iconBg={T.popA} label="Office audio" name="Lofi + dogs" />}
          {!isMobile && <SPStar size={60} color={T.popB} rotate={15} top={40} right={80} />}

          <h1 style={{ fontFamily:F.display, fontSize:'clamp(60px, 15vw, 260px)', lineHeight:0.84, fontWeight:700, letterSpacing:'-0.05em', margin:0, textAlign:'center' }}>
            a small<br/><span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400, color:T.popA }}>studio,</span> <span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400 }}>unhurried.</span>
          </h1>
        </div>

        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr 1fr', gap: isMobile ? 32 : 40, marginTop: isMobile ? 40 : 80, alignItems:'start' }}>
          <p style={{ margin:0, fontSize:14, lineHeight:1.55, opacity:0.8 }}>We started Blackspace in 2023 because the ad industry had become two kinds of boring: the expensive kind, and the cheap kind.</p>
          <p style={{ margin:0, fontFamily:F.italic, fontStyle:'italic', fontSize:22, lineHeight:1.35, textAlign:'center' }}>
            We make content that <span style={{ color:T.popA }}>earns attention</span>, not the kind that pays to borrow it.
          </p>
          <p style={{ margin:0, fontSize:14, lineHeight:1.55, opacity:0.8, textAlign:'right' }}>Writers, editors, designers, and one dog. Based in Bengaluru, on calls with the rest of the world.</p>
        </div>
      </section>

      {/* Studio photo placeholder — big pastel block with stickers */}
      <section style={{ padding: isMobile ? '20px 20px 60px' : '40px 40px 80px' }}>
        <div style={{
          width:'100%', height:520, background:`linear-gradient(135deg, ${sky} 0%, ${lilac} 100%)`,
          borderRadius:24, border:`1px solid ${T.ink}`, position:'relative', overflow:'hidden',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          {/* placeholder for studio photo */}
          <div style={{ fontSize:11, letterSpacing:'0.3em', textTransform:'uppercase', opacity:0.4 }}>[ Studio photo goes here ]</div>
          <SPStatusSticker T={T} F={F} top={40} left={60} rotate={-6} variant="tape" tape={T.popA} bg={T.paper} icon="📍" iconBg={T.ink} label="Location" name="Koramangala 5th Block" />
          <SPStatusSticker T={T} F={F} bottom={60} right={80} rotate={5} variant="torn" bg={butter} icon="☀" iconBg={T.popB} label="Weather" name="28°C / hazy" />
          <SPStatusSticker T={T} F={F} top={180} right={200} rotate={-4} variant="square" bg={mint} icon="🎧" iconBg={T.ink} label="Current album" name="On loop" />
          <SPStar size={80} color={T.popA} rotate={15} top={40} right={300} />
        </div>
      </section>

      {/* Beliefs */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background:T.ink, color:T.paper }}>
        <SPSectionHead T={T} F={F} num="§ 01 / Beliefs" title="Six things" titleIt="we think." dek="Also a couple we don't." />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 0 : 40 }}>
          {[beliefs.slice(0,3), beliefs.slice(3)].map((col, ci) => (
            <div key={ci}>
              {col.map((b,i)=>(
                <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:24, padding:'32px 16px', borderTop:`1px solid ${T.paper}33`, margin: '0 -16px', transition: 'transform 0.3s ease, background 0.3s ease, border-radius 0.3s ease', cursor: 'pointer' }}
                     onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = `${T.popA}22`; e.currentTarget.style.borderRadius = '16px'; }}
                     onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderRadius = '0'; }}>
                  <span style={{ fontFamily:F.italic, fontStyle:'italic', fontSize:36, color:T.popA }}>{b.n}</span>
                  <div>
                    <h3 style={{ fontFamily:F.display, fontSize:32, fontWeight:600, letterSpacing:'-0.02em', lineHeight:1.1, margin:0 }}>{b.h}</h3>
                    <p style={{ fontSize:14, lineHeight:1.55, marginTop:10, opacity:0.75 }}>{b.b}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 02 / The team" title="Eleven humans," titleIt="one dog." dek="Roles blur on purpose. Everyone writes. Everyone ships." />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 12 : 20 }}>
          {team.map((m,i)=>(
            <div key={i} style={{
              background:m.bg, border:`1px solid ${T.ink}`, borderRadius:20,
              padding:24, aspectRatio:'4/5', position:'relative', overflow:'hidden',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{
                display:'inline-flex', alignSelf:'flex-start',
                background:T.paper, border:`1px solid ${T.ink}`, borderRadius:999,
                padding:'6px 14px', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase',
                boxShadow:`2px 2px 0 ${T.ink}`, transform:`rotate(${m.rotate}deg)`,
              }}>● {m.sticker}</div>
              <div style={{ fontSize:96, textAlign:'center', lineHeight:1, fontFamily:F.display, fontWeight:700 }}>{m.emoji}</div>
              <div>
                <div style={{ fontFamily:F.display, fontSize:22, fontWeight:600, letterSpacing:'-0.015em', lineHeight:1.1 }}>{m.name}</div>
                <div style={{ fontSize:12, opacity:0.7, marginTop:4 }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background:butter, borderTop:`1px solid ${T.ink}`, borderBottom:`1px solid ${T.ink}` }}>
        <SPSectionHead T={T} F={F} num="§ 03 / A little history" title="How we got" titleIt="here." dek="Briefly." />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap:24 }}>
          {timeline.map((t,i)=>(
            <div key={i} style={{
              background:T.paper, border:`1px solid ${T.ink}`, borderRadius:16,
              padding:24, position:'relative',
              boxShadow:`4px 4px 0 ${T.ink}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `8px 12px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `4px 4px 0 ${T.ink}`; }}>
              <div style={{
                position:'absolute', top:-14, left:20,
                background:T.ink, color:T.paper, padding:'6px 14px', borderRadius:999,
                fontFamily:F.italic, fontStyle:'italic', fontSize:14,
              }}>{t.year}</div>
              <h3 style={{ fontFamily:F.display, fontSize:22, fontWeight:600, letterSpacing:'-0.015em', lineHeight:1.15, margin:0, marginTop:12 }}>{t.h}</h3>
              <p style={{ fontSize:13, lineHeight:1.5, marginTop:10, opacity:0.75 }}>{t.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients strip */}
      <SPMarquee T={T} F={F} words={['Okinawa', 'Monarc', 'Heirloom', 'Ajna', '+ 14 more', 'Since 2023']} />

      {/* Press / recognition */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 04 / Seen in" title="Nice to be" titleIt="noticed." dek="And occasionally linked." />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: isMobile ? 32 : 20 }}>
          {[
            { pub:'Campaign India', q:'One of the smartest young studios out of Bengaluru.', year:'2025' },
            { pub:'AFAQs', q:'Their script-first process is quietly revolutionary.', year:'2025' },
            { pub:'Little Black Book', q:'Content with a spine.', year:'2024' },
            { pub:'AdFest', q:'Silver · Short Film category.', year:'2024' },
          ].map((p,i)=>(
            <div key={i} style={{ borderTop:`1px solid ${T.ink}`, paddingTop:20 }}>
              <div style={{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.6 }}>{p.pub} · {p.year}</div>
              <p style={{ fontFamily:F.italic, fontStyle:'italic', fontSize:20, lineHeight:1.3, margin:0, marginTop:12 }}>"{p.q}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '80px 20px' : '120px 40px', textAlign:'center', background:lilac, borderTop:`1px solid ${T.ink}`, position:'relative', overflow:'hidden' }}>
        <SPStar size={100} color={T.popA} rotate={15} top={40} right={isMobile ? -20 : 100} />
        <h2 style={{ fontFamily:F.display, fontSize:'clamp(60px, 14vw, 200px)', lineHeight:0.85, fontWeight:700, letterSpacing:'-0.05em', margin:0 }}>
          want to <span style={{ fontFamily:F.italic, fontStyle:'italic', fontWeight:400 }}>work</span><br/>with us?
        </h2>
        <a href="contact.html" style={{ display:'inline-flex', gap:12, marginTop:40, padding:'22px 34px', background:T.ink, color:T.paper, borderRadius:999, fontSize:15, fontWeight:500, textDecoration:'none' }}>Say hello →</a>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}

window.SPStudio = SPStudio;
