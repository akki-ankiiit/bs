/* global React */

function AsteriskStudioDirection() {
  // Make-it-simple × Max Pratt × Titans editorial
  const ink = '#0b0b0b';
  const cream = '#efeae0';
  const pop = '#ff4a1f';
  const dust = '#cec6b7';
  const soft = '#d9e2df';

  const acid = '"Space Grotesk", "Acid Grotesk", "Helvetica Neue", sans-serif';
  const helv = '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const gara = '"EB Garamond", "Apple Garamond", Garamond, serif';

  const s = {
    root:{ width:1440, minHeight:2400, background:ink, color:cream, fontFamily:helv, position:'relative', overflow:'hidden' },
    // Oil-painting backdrop (Max Pratt)
    backdrop:{
      position:'absolute', inset:0,
      background:`
        radial-gradient(ellipse at 10% 10%, #5a3a18 0%, transparent 40%),
        radial-gradient(ellipse at 90% 20%, #2a1a0a 0%, transparent 50%),
        radial-gradient(ellipse at 20% 90%, #3a2210 0%, transparent 50%),
        radial-gradient(ellipse at 80% 90%, #1a0f08 0%, transparent 50%),
        ${ink}
      `,
      pointerEvents:'none',
    },
    grain:{ position:'absolute', inset:0, backgroundImage:`radial-gradient(${cream}10 1px, transparent 1px)`, backgroundSize:'3px 3px', opacity:0.2, pointerEvents:'none' },

    topBar:{ position:'relative', display:'flex', justifyContent:'space-between', padding:'28px 40px', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', zIndex:10 },
    topStar:{ color:pop, fontSize:16 },

    // Floating window card (Max Pratt)
    heroWrap:{ position:'relative', padding:'40px 80px 80px', zIndex:2 },
    card:{
      background:cream, color:ink,
      borderRadius:28, padding:'60px 60px 80px',
      position:'relative', overflow:'hidden',
      boxShadow:'0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.1)',
    },
    cardNav:{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:36, borderBottom:`1px solid ${ink}22` },
    cardLogo:{ display:'flex', gap:10, alignItems:'center', fontSize:15, fontWeight:600 },
    cardLoc:{ fontSize:11, letterSpacing:'0.1em', color:`${ink}aa` },
    cardNavPills:{ display:'flex', background:ink, padding:4, borderRadius:999 },
    cardNavPill:(a)=>({ padding:'8px 18px', borderRadius:999, fontSize:12, fontWeight:500, color:a?ink:cream, background:a?cream:'transparent' }),
    cardSocial:{ display:'flex', gap:14, fontSize:11, letterSpacing:'0.1em', color:`${ink}aa` },

    asteriskRow:{ display:'flex', alignItems:'center', gap:28, margin:'100px 0 24px', justifyContent:'center' },
    asterisk:{ color:pop, fontSize:120, lineHeight:1 },
    makeSimple:{ fontFamily:acid, fontSize:80, fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, color:ink },
    makeSimpleReg:{ fontSize:28, verticalAlign:'super', opacity:0.5 },

    heroTitle:{ fontFamily:acid, fontSize:188, fontWeight:700, letterSpacing:'-0.045em', lineHeight:0.92, textAlign:'center', margin:'24px 0 0', color:ink },
    heroTitleIt:{ fontFamily:gara, fontStyle:'italic', fontWeight:400 },
    heroDek:{ fontFamily:gara, fontStyle:'italic', fontSize:28, lineHeight:1.3, textAlign:'center', maxWidth:700, margin:'36px auto 0', fontWeight:600, color:ink },

    cardFooter:{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:40, marginTop:100, paddingTop:32, borderTop:`1px solid ${ink}22` },
    cfLabel:{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', color:pop, marginBottom:8 },
    cfText:{ fontSize:14, lineHeight:1.5, color:`${ink}dd` },

    chipTab:{
      position:'absolute', right:-1, top:80,
      background:cream, color:ink, padding:'16px 10px',
      fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase',
      writingMode:'vertical-rl', borderTopLeftRadius:10, borderBottomLeftRadius:10,
      fontWeight:600, boxShadow:'0 4px 20px rgba(0,0,0,0.3)',
    },

    // Editorial services section (Titans look)
    editSection:{ position:'relative', padding:'160px 80px', background:cream, color:ink, zIndex:2 },
    editHead:{ display:'grid', gridTemplateColumns:'1fr 400px', gap:80, marginBottom:80, alignItems:'end' },
    editH:{ fontFamily:acid, fontSize:140, fontWeight:700, letterSpacing:'-0.045em', lineHeight:0.9, margin:0 },
    editDek:{ fontSize:15, lineHeight:1.6, color:`${ink}aa` },
    editMeta:{ display:'flex', justifyContent:'space-between', padding:'16px 0', borderTop:`1px solid ${ink}`, borderBottom:`1px solid ${ink}`, fontSize:12, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:60 },

    svcGrid:{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0, borderTop:`1px solid ${ink}` },
    svcItem:{ padding:'36px 28px 48px', borderRight:`1px solid ${ink}`, borderBottom:`1px solid ${ink}`, minHeight:340, position:'relative' },
    svcN:{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:pop },
    svcName:{ fontFamily:acid, fontSize:44, fontWeight:700, letterSpacing:'-0.03em', lineHeight:1, margin:'24px 0 20px' },
    svcBody:{ fontSize:14, lineHeight:1.6, color:`${ink}bb` },
    svcStar:{ position:'absolute', top:24, right:24, color:pop, fontSize:20 },

    // Work — dark editorial
    workSection:{ position:'relative', padding:'160px 80px', background:ink, color:cream, zIndex:2 },
    workHead:{ display:'grid', gridTemplateColumns:'1fr 360px', gap:80, alignItems:'end', marginBottom:60 },

    workBento:{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gridAutoRows:220, gap:12, marginTop:40 },
    workCell:(col,row,bg,dark=false)=>({
      gridColumn:`span ${col}`, gridRow:`span ${row}`, background:bg,
      borderRadius:14, position:'relative', overflow:'hidden', padding:24,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      color:dark?cream:ink, border:`1px solid ${dark?cream:ink}22`,
    }),
    workChip:(dark)=>({
      display:'inline-flex', gap:6, padding:'4px 10px', borderRadius:999,
      fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase',
      width:'fit-content', border:`1px solid ${dark?cream:ink}`, color:dark?cream:ink,
    }),
    workTitle:{ fontFamily:acid, fontWeight:700, letterSpacing:'-0.025em', lineHeight:1.05 },
    workMeta:{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', marginTop:4, opacity:0.7 },

    // CTA — Make It Simple feel
    cta:{ position:'relative', padding:'200px 80px 140px', textAlign:'center', color:cream, zIndex:2 },
    ctaAst:{ color:pop, fontSize:140, margin:0, lineHeight:1 },
    ctaH:{ fontFamily:acid, fontSize:200, lineHeight:0.88, letterSpacing:'-0.05em', fontWeight:700, margin:'20px 0 0' },
    ctaIt:{ fontFamily:gara, fontStyle:'italic', fontWeight:400 },
    ctaDek:{ fontFamily:gara, fontStyle:'italic', fontSize:24, margin:'40px auto 0', maxWidth:600, fontWeight:600 },
    ctaBtn:{ display:'inline-flex', gap:12, marginTop:60, padding:'22px 34px', background:cream, color:ink, borderRadius:999, fontSize:15, fontWeight:600 },

    footer:{ position:'relative', padding:'40px 80px', display:'flex', justifyContent:'space-between', fontSize:12, color:`${cream}99`, zIndex:2, borderTop:`1px solid ${cream}22` },
  };

  const services = [
    { n:'01', name:'Content Campaigns', body:'End-to-end. Concept, script, shoot, cut, and all the unglamorous bits in between.' },
    { n:'02', name:'Scripts', body:'Reels, ads, long-form. Lines built to be read out loud, not skimmed.' },
    { n:'03', name:'Video Edits', body:'Cuts that earn the second of attention they get.' },
    { n:'04', name:'AI Workflows', body:'Draft engines, variant mills, dub chains. We taught the machine, not the other way around.' },
    { n:'05', name:'Brand Identity', body:'Marks, type, systems. What your brand wears in public.' },
    { n:'06', name:'Websites', body:'Framer and code. Loads fast, reads easy, ages gracefully.' },
  ];

  const work = [
    { col:8, row:3, bg:`radial-gradient(ellipse at 30% 50%, #7a4020 0%, #1a0a05 80%)`, chip:'CAMPAIGN · FILM', title:'Okinawa — The 5AM Film', meta:'Fitness · 02:14', dark:true },
    { col:4, row:2, bg:dust, chip:'IDENTITY', title:'Monarc — mark', meta:'2025' },
    { col:4, row:1, bg:pop, chip:'AI + EDIT', title:'42 reels, 1 day', meta:'Experiment' },
    { col:4, row:2, bg:soft, chip:'SCRIPT', title:'Cut spec', meta:'Skincare' },
    { col:4, row:2, bg:`linear-gradient(135deg, #1a1a1a, #333)`, dark:true, chip:'CONTENT', title:'Office Hours', meta:'12 eps' },
    { col:4, row:2, bg:cream, chip:'WEB', title:'Heirloom site', meta:'Fashion' },
  ];

  return (
    <div style={s.root}>
      <div style={s.backdrop}></div>
      <div style={s.grain}></div>

      <div style={s.topBar}>
        <span><span style={s.topStar}>✱</span> Open for any work offer</span>
        <span>ES+ · Blackspace®</span>
        <span>2025 / A Studio</span>
      </div>

      <div style={s.heroWrap}>
        <div style={s.card}>
          <div style={s.chipTab}>W. Honors</div>

          <div style={s.cardNav}>
            <div>
              <div style={s.cardLogo}>
                <span style={{color:pop, fontSize:18}}>✱</span> Blackspace
              </div>
              <div style={s.cardLoc}>Bengaluru, IN</div>
            </div>
            <div style={s.cardNavPills}>
              <span style={s.cardNavPill(true)}>Home</span>
              <span style={s.cardNavPill()}>Work</span>
              <span style={s.cardNavPill()}>Studio</span>
              <span style={s.cardNavPill()}>Contact</span>
            </div>
            <div style={s.cardSocial}>
              <span>Social</span>
              <span>IG</span>
              <span>LI</span>
              <span>BE</span>
            </div>
          </div>

          <div style={s.asteriskRow}>
            <span style={s.asterisk}>✱</span>
            <span style={s.makeSimple}>make it loud<span style={s.makeSimpleReg}>®</span></span>
          </div>

          <h1 style={s.heroTitle}>
            A content studio<br/>for brands that <span style={s.heroTitleIt}>act</span>.
          </h1>

          <p style={s.heroDek}>
            <span style={{color:pop}}>(2)</span> We write, shoot, cut, and post — with AI quietly doing the laundry in the back. Based in Bengaluru, working everywhere a feed scrolls.
          </p>

          <div style={s.cardFooter}>
            <div>
              <div style={s.cfLabel}>✱ Scripts</div>
              <p style={s.cfText}>Reels, ads, explainers, long-form. Words that sound said, not typed.</p>
            </div>
            <div>
              <div style={s.cfLabel}>✱ Edits</div>
              <p style={s.cfText}>Punchy cuts, honest grades, music that earns its beat.</p>
            </div>
            <div>
              <div style={s.cfLabel}>✱ Campaigns</div>
              <p style={s.cfText}>Concept-to-rollout. One team from napkin to billboard.</p>
            </div>
            <div>
              <div style={s.cfLabel}>✱ AI</div>
              <p style={s.cfText}>Drafts, variants, dubs. A mixer, not a chef.</p>
            </div>
          </div>
        </div>
      </div>

      <section style={s.editSection}>
        <div style={s.editMeta}>
          <span>— Services</span>
          <span>Six, mostly well</span>
          <span>2025 · §01</span>
        </div>
        <div style={s.editHead}>
          <h2 style={s.editH}>What we <br/>run the<br/>camera for.</h2>
          <p style={s.editDek}>A short menu. We're suspicious of studios with a ten-page one. Six services, no upsells, every one executed by the people who sold it to you.</p>
        </div>
        <div style={s.svcGrid}>
          {services.map((svc,i)=>(
            <div key={i} style={{...s.svcItem, borderRight:(i+1)%3===0?'none':`1px solid ${ink}`}}>
              <span style={s.svcStar}>✱</span>
              <span style={s.svcN}>— {svc.n}</span>
              <h3 style={s.svcName}>{svc.name}</h3>
              <p style={s.svcBody}>{svc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={s.workSection}>
        <div style={s.editMeta}>
          <span style={{color:pop}}>— Selected Work</span>
          <span>Dailies, Q1</span>
          <span>§02</span>
        </div>
        <div style={s.workHead}>
          <h2 style={{...s.editH, color:cream}}>The folio, <span style={s.heroTitleIt}>cut loose.</span></h2>
          <p style={{...s.editDek, color:`${cream}aa`}}>A cross-section of work from the last eight months. Film, identity, campaign, web. The rest is on Instagram or under NDA.</p>
        </div>
        <div style={s.workBento}>
          {work.map((w,i)=>(
            <div key={i} style={s.workCell(w.col,w.row,w.bg,w.dark)}>
              <div style={s.workChip(w.dark)}>{w.chip}</div>
              <div>
                <div style={{...s.workTitle, fontSize: w.col>=7?56:26}}>{w.title}</div>
                <div style={s.workMeta}>{w.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={s.cta}>
        <span style={s.ctaAst}>✱</span>
        <h2 style={s.ctaH}>
          let's<br/>
          <span style={s.ctaIt}>make something</span><br/>
          loud<span style={{color:pop}}>.</span>
        </h2>
        <p style={s.ctaDek}>hello@blackspace.media — we reply in working hours. Mostly.</p>
        <div style={s.ctaBtn}>Start a project →</div>
      </section>

      <footer style={s.footer}>
        <span>© Blackspace 2025 — all feelings reserved</span>
        <span>Bengaluru · IST 14:22</span>
        <span>Instagram ↗  ·  LinkedIn ↗</span>
      </footer>
    </div>
  );
}

window.AsteriskStudioDirection = AsteriskStudioDirection;
