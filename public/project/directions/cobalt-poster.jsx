/* global React */

function CobaltPosterDirection() {
  const blue = '#1e3bff';
  const cream = '#f1ece0';
  const ink = '#0a0a0a';
  const butter = '#f5d77a';
  const peach = '#f4a989';
  const mag = '#ff3d7f';
  const mint = '#a8e6cf';

  const acid = '"Space Grotesk", "Acid Grotesk", "Helvetica Neue", sans-serif';
  const helv = '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const gara = '"EB Garamond", "Apple Garamond", Garamond, serif';

  const s = {
    root:{ width:1440, minHeight:2400, background:blue, color:cream, fontFamily:helv, position:'relative', overflow:'hidden' },
    nav:{ display:'flex', justifyContent:'space-between', padding:'28px 40px', fontSize:12, letterSpacing:'0.15em', textTransform:'uppercase', fontWeight:600 },
    navLeft:{ display:'flex', alignItems:'center', gap:10 },
    navStar:{ color:butter, fontSize:18 },

    hero:{ padding:'40px 40px 80px', position:'relative' },
    heroTitle:{ fontFamily:acid, fontSize:340, lineHeight:0.82, fontWeight:700, letterSpacing:'-0.055em', margin:0, color:cream, textAlign:'left' },
    heroItalic:{ fontFamily:gara, fontStyle:'italic', fontWeight:400, letterSpacing:'-0.02em' },
    heroMeta:{ display:'flex', justifyContent:'space-between', marginTop:40, fontSize:12, letterSpacing:'0.15em', textTransform:'uppercase' },
    heroDek:{ fontFamily:gara, fontStyle:'italic', fontSize:36, lineHeight:1.2, maxWidth:720, margin:'36px 0 0' },
    stickerObj:(bg,top,left,right,rot,size)=>({
      position:'absolute', width:size, height:size, top, left, right,
      transform:`rotate(${rot}deg)`, background:bg,
      borderRadius:18, border:`2px solid ${ink}`,
      boxShadow:`6px 6px 0 ${ink}`, zIndex:5,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:acid, fontWeight:700, letterSpacing:'-0.02em', fontSize:20, color:ink,
    }),
    starShape:(size,bg,rot,top,left,right)=>({
      position:'absolute', width:size, height:size, top, left, right,
      transform:`rotate(${rot}deg)`,
      background:bg,
      clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      zIndex:6,
    }),

    section:{ padding:'100px 40px', background:cream, color:ink, position:'relative' },
    sectionDark:{ padding:'100px 40px', background:ink, color:cream },
    sectionNum:{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase' },
    sectionH:{ fontFamily:acid, fontSize:120, fontWeight:700, letterSpacing:'-0.045em', lineHeight:0.9, margin:0 },
    sectionIt:{ fontFamily:gara, fontStyle:'italic', fontWeight:400 },
    sectionHeadGrid:{ display:'grid', gridTemplateColumns:'200px 1fr 300px', gap:40, alignItems:'baseline', marginBottom:80 },
    sectionDek:{ fontFamily:gara, fontStyle:'italic', fontSize:22, lineHeight:1.35 },

    svcList:{ borderTop:`2px solid ${ink}` },
    svcRow:(bg)=>({
      display:'grid', gridTemplateColumns:'80px 1fr 1fr 200px',
      padding:'36px 24px', borderBottom:`2px solid ${ink}`, alignItems:'center',
      background:bg||'transparent', gap:24,
    }),
    svcN:{ fontFamily:gara, fontStyle:'italic', fontSize:42 },
    svcName:{ fontFamily:acid, fontSize:48, fontWeight:700, letterSpacing:'-0.03em', lineHeight:1 },
    svcBody:{ fontSize:15, lineHeight:1.5 },
    svcChip:{ justifySelf:'end', padding:'8px 14px', background:ink, color:cream, borderRadius:999, fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase' },

    workBento:{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gridAutoRows:180, gap:12 },
    workCell:(col,row,bg,dark=false)=>({
      gridColumn:`span ${col}`, gridRow:`span ${row}`, background:bg,
      borderRadius:16, position:'relative', overflow:'hidden', padding:20,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      color:dark?cream:ink, border:`1px solid ${dark?cream+'33':ink+'33'}`,
    }),
    workChip:{ display:'inline-flex', gap:6, padding:'4px 10px', borderRadius:999, fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', width:'fit-content', border:`1px solid currentColor`, opacity:0.9 },
    workTitle:{ fontFamily:acid, fontWeight:700, letterSpacing:'-0.025em', lineHeight:1.05 },
    workMeta:{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', marginTop:4, opacity:0.7 },

    manifesto:{ padding:'140px 40px', background:blue, color:cream, textAlign:'center', position:'relative', overflow:'hidden' },
    manifestoQuote:{ fontFamily:acid, fontSize:140, lineHeight:0.95, letterSpacing:'-0.045em', fontWeight:700, margin:0, position:'relative', zIndex:2 },

    cta:{ padding:'140px 40px', background:butter, color:ink, borderTop:`2px solid ${ink}`, borderBottom:`2px solid ${ink}`, position:'relative' },
    ctaH:{ fontFamily:acid, fontSize:220, lineHeight:0.86, letterSpacing:'-0.055em', fontWeight:700, margin:0 },
    ctaBtn:{ display:'inline-flex', gap:12, marginTop:40, padding:'24px 36px', background:ink, color:cream, borderRadius:999, fontSize:15, fontWeight:500 },

    footer:{ padding:'28px 40px', background:ink, color:cream, display:'flex', justifyContent:'space-between', fontSize:12 },
  };

  const services = [
    { n:'01', name:'Content Campaigns', body:'End-to-end: concept, script, shoot, cut, post. One team, no handoffs.', chip:'Flagship', bg:butter },
    { n:'02', name:'Scripts', body:'Reels, ads, explainers, long-form. Words that sound said, not typed.', chip:'Writing' },
    { n:'03', name:'Video Edits', body:'Punchy cuts, honest grades, music chosen for reasons.', chip:'Post' },
    { n:'04', name:'AI Workflows', body:'Drafts, variants, dubs, synthetic b-roll. Humans still author.', chip:'New', bg:mag },
    { n:'05', name:'Brand Identity', body:'Marks, type, guidelines. The rulebook competitors screenshot.', chip:'Brand' },
    { n:'06', name:'Websites & Social', body:'Framer + code, plus the calendar that keeps you posted.', chip:'Always' },
  ];

  const work = [
    { col:7, row:3, bg:`radial-gradient(ellipse at 30% 50%, ${peach} 0%, ${mag} 100%)`, chip:'CAMPAIGN · FILM', title:'Okinawa — The 5AM Film', meta:'Fitness · 02:14' },
    { col:5, row:2, bg:mint, chip:'IDENTITY', title:'Monarc — mark & system', meta:'2025' },
    { col:5, row:1, bg:butter, chip:'AI + EDIT', title:'42 reels, 1 shoot day', meta:'Lab' },
    { col:4, row:2, bg:`linear-gradient(135deg, ${blue}, #0d1a7a)`, dark:true, chip:'SCRIPT', title:'Cut — skincare spec', meta:'Campaign' },
    { col:4, row:2, bg:ink, dark:true, chip:'CONTENT', title:'Office Hours series', meta:'12 eps' },
    { col:4, row:2, bg:peach, chip:'WEB', title:'Heirloom lookbook site', meta:'Fashion' },
  ];

  return (
    <div style={s.root}>
      <nav style={s.nav}>
        <div style={s.navLeft}><span style={s.navStar}>✳</span> Blackspace®</div>
        <div style={{display:'flex', gap:32}}>
          <span>Work</span><span>Studio</span><span>Process</span><span>Journal</span>
        </div>
        <div>Contact →</div>
      </nav>

      <section style={s.hero}>
        <div style={s.heroMeta}>
          <span>✱ A content studio — Bengaluru, IN</span>
          <span>2025 / Open for work</span>
        </div>
        <div style={{position:'relative'}}>
          <div style={s.stickerObj(butter, 80, null, 80, 14, 140)}>FOREVER<br/>BRIEFS</div>
          <div style={s.stickerObj(mag, 260, 60, null, -10, 120)}>AI ✶</div>
          <div style={s.stickerObj(mint, 420, null, 260, 8, 110)}>FILM<br/>2025</div>
          <div style={s.stickerObj(peach, 360, 520, null, -15, 130)}>NOT<br/>TODAY</div>
          <div style={s.starShape(90, mag, 0, 20, 500, null)}></div>
          <div style={s.starShape(60, butter, 30, 480, null, 40)}></div>

          <h1 style={s.heroTitle}>
            blackspace<span style={{color:butter}}>®</span>
          </h1>
          <p style={s.heroDek}>
            We write, shoot, cut, and <span style={{color:butter}}>occasionally go viral</span>. A content studio for brands that have something to say.
          </p>
        </div>
      </section>

      <section style={s.section}>
        <div style={s.sectionHeadGrid}>
          <span style={s.sectionNum}>§ 01 / Services</span>
          <h2 style={s.sectionH}>The menu.</h2>
          <p style={s.sectionDek}>Six things. No ten-page upsell.</p>
        </div>
        <div style={s.svcList}>
          {services.map((svc,i)=>(
            <div key={i} style={s.svcRow(svc.bg)}>
              <span style={s.svcN}>{svc.n}.</span>
              <span style={s.svcName}>{svc.name}</span>
              <span style={s.svcBody}>{svc.body}</span>
              <span style={s.svcChip}>{svc.chip}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={s.sectionDark}>
        <div style={s.sectionHeadGrid}>
          <span style={{...s.sectionNum, color:butter}}>§ 02 / Selected Work</span>
          <h2 style={s.sectionH}>Receipts, <span style={s.sectionIt}>attached.</span></h2>
          <p style={{...s.sectionDek, opacity:0.75}}>Six on the wall. More under NDA.</p>
        </div>
        <div style={s.workBento}>
          {work.map((w,i)=>(
            <div key={i} style={s.workCell(w.col,w.row,w.bg,w.dark)}>
              <span style={s.workChip}>{w.chip}</span>
              <div>
                <div style={{...s.workTitle, fontSize: w.col>=7?52:26}}>{w.title}</div>
                <div style={s.workMeta}>{w.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={s.manifesto}>
        <div style={s.starShape(140, butter, 10, 80, 60, null)}></div>
        <div style={s.starShape(100, mag, -15, null, 400, 100)}></div>
        <p style={s.manifestoQuote}>
          "We don't make content.<br/>
          <span style={{...s.sectionIt, color:butter}}>We make</span> the thing content is <span style={{color:butter}}>about</span>."
        </p>
      </section>

      <section style={s.cta}>
        <div style={s.starShape(100, mag, 20, 60, null, 80)}></div>
        <span style={s.sectionNum}>§ 03 / Let's talk</span>
        <h2 style={{...s.ctaH, marginTop:20}}>Let's<br/><span style={s.sectionIt}>make</span> something<br/>people save.</h2>
        <div style={s.ctaBtn}>hello@blackspace.media →</div>
      </section>

      <footer style={s.footer}>
        <span>© Blackspace 2025</span>
        <span>Bengaluru · IST</span>
        <span>Instagram ↗  LinkedIn ↗</span>
      </footer>
    </div>
  );
}

window.CobaltPosterDirection = CobaltPosterDirection;
