/* global React */

function StickerPopDirection() {
  const cream = '#f2ede2';
  const ink = '#0a0a0a';
  const mint = '#9de6d8';
  const lilac = '#dfc4f0';
  const sky = '#a7d0f5';
  const butter = '#f5d77a';
  const peach = '#f6b39a';
  const pop = '#FF4D1A';
  const popMag = '#FF2E8B';

  const acid = '"Space Grotesk", "Acid Grotesk", "Helvetica Neue", sans-serif';
  const helv = '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const gara = '"EB Garamond", "Apple Garamond", Garamond, serif';

  const s = {
    root: { width:1440, minHeight:2400, background:cream, color:ink, fontFamily:helv, position:'relative', overflow:'hidden' },
    nav: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'22px 40px', fontSize:13 },
    navLogo:{ fontFamily:acid, fontSize:22, fontWeight:700, letterSpacing:'-0.03em', display:'flex', alignItems:'center', gap:8 },
    navPills:{ display:'flex', gap:6, background:ink, padding:4, borderRadius:999, color:cream, fontSize:12 },
    navPill:(active)=>({ padding:'8px 16px', borderRadius:999, background:active?cream:'transparent', color:active?ink:cream, fontWeight:500 }),
    navCta:{ background:pop, color:cream, padding:'10px 18px', borderRadius:999, fontWeight:500, fontSize:13, border:`1px solid ${ink}` },
    hero:{ padding:'80px 40px 60px', position:'relative' },
    heroMeta:{ display:'flex', justifyContent:'space-between', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:40 },
    wordmark:{ fontFamily:acid, fontSize:360, lineHeight:0.82, fontWeight:700, letterSpacing:'-0.06em', margin:0, textAlign:'center', position:'relative', color:ink },
    wordmarkItal:{ fontFamily:gara, fontStyle:'italic', fontWeight:400, color:ink, letterSpacing:'-0.03em' },
    sticker:(bg,top,left,right,rot,size=160)=>({
      position:'absolute', top, left, right,
      transform:`rotate(${rot}deg)`,
      background:bg, border:`1px solid ${ink}`, borderRadius:14,
      padding:'10px 14px', display:'flex', alignItems:'center', gap:10,
      boxShadow:`4px 4px 0 ${ink}`, zIndex:10, minWidth:size,
    }),
    stickerIcon:{ width:36, height:36, borderRadius:10, background:ink, display:'flex', alignItems:'center', justifyContent:'center', color:cream, fontWeight:700, fontSize:14 },
    stickerLabel:{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:ink, opacity:0.7 },
    stickerName:{ fontSize:13, fontWeight:600, color:ink },
    starShape:(size,bg,rot,top,left,right)=>({
      position:'absolute', width:size, height:size, top, left, right,
      transform:`rotate(${rot}deg)`,
      background:bg,
      clipPath:'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      zIndex:9,
    }),
    heroBottom:{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20, marginTop:80, alignItems:'start' },
    heroBlock:{ fontSize:14, lineHeight:1.5, maxWidth:320 },
    heroBlockHead:{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:12, opacity:0.6 },
    heroDek:{ fontFamily:gara, fontStyle:'italic', fontSize:28, lineHeight:1.25, textAlign:'center' },

    marquee:{ background:ink, color:cream, padding:'20px 0', overflow:'hidden', whiteSpace:'nowrap', fontFamily:acid, fontSize:48, fontWeight:700, letterSpacing:'-0.03em', borderTop:`1px solid ${ink}`, borderBottom:`1px solid ${ink}` },
    marqSep:{ display:'inline-block', margin:'0 30px', color:pop },

    svcSection:{ padding:'100px 40px' },
    sectionHead:{ display:'grid', gridTemplateColumns:'140px 1fr auto', gap:40, alignItems:'baseline', marginBottom:60 },
    sectionNum:{ fontSize:12, letterSpacing:'0.15em', textTransform:'uppercase' },
    sectionTitle:{ fontFamily:acid, fontSize:96, fontWeight:700, letterSpacing:'-0.04em', lineHeight:0.94, margin:0 },
    sectionTitleIt:{ fontFamily:gara, fontStyle:'italic', fontWeight:400 },
    sectionDek:{ fontFamily:gara, fontStyle:'italic', fontSize:18, opacity:0.8, maxWidth:280, textAlign:'right' },

    svcGrid:{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gridAutoRows:220, gap:16 },
    svcCard:(col,row,bg,dark=false)=>({
      gridColumn:`span ${col}`, gridRow:`span ${row}`, background:bg,
      border:`1px solid ${ink}`, borderRadius:20, padding:28,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      position:'relative', overflow:'hidden', color:dark?cream:ink,
    }),
    svcTop:{ display:'flex', justifyContent:'space-between', alignItems:'start' },
    svcBadge:{ fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase' },
    svcNewBadge:{ background:popMag, color:cream, padding:'4px 10px', borderRadius:999, fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', fontWeight:600, border:`1px solid ${ink}`, transform:'rotate(6deg)' },
    svcName:{ fontFamily:acid, fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, margin:0 },
    svcBody:{ fontSize:14, lineHeight:1.55, marginTop:12, maxWidth:320, opacity:0.85 },

    workSection:{ padding:'100px 40px', background:ink, color:cream },
    workBento:{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gridAutoRows:180, gap:12 },
    workCell:(col,row,bg,dark=false)=>({
      gridColumn:`span ${col}`, gridRow:`span ${row}`, background:bg,
      borderRadius:16, position:'relative', overflow:'hidden', padding:20,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      color:dark?cream:ink, border:`1px solid ${dark?cream:ink}33`,
    }),
    workChip:(bg,fg)=>({
      display:'inline-flex', alignItems:'center', gap:6,
      background:bg, color:fg, padding:'4px 10px', borderRadius:999,
      fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase',
      width:'fit-content', border:`1px solid ${fg}33`,
    }),
    workTitle:{ fontFamily:acid, fontWeight:700, letterSpacing:'-0.025em', lineHeight:1.05 },
    workMeta:{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', marginTop:4, opacity:0.7 },

    whyWrap:{ padding:'100px 40px', background:cream },
    whyGrid:{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:20 },
    whyRow:{ display:'grid', gridTemplateColumns:'60px 1fr', gap:24, padding:'28px 0', borderTop:`1px solid ${ink}` },
    whyN:{ fontFamily:gara, fontStyle:'italic', fontSize:36, color:pop },
    whyH:{ fontFamily:acid, fontSize:28, fontWeight:600, letterSpacing:'-0.02em', lineHeight:1.1, margin:0 },
    whyB:{ fontSize:14, lineHeight:1.55, marginTop:10, opacity:0.75 },

    cta:{ padding:'140px 40px', background:butter, borderTop:`1px solid ${ink}`, borderBottom:`1px solid ${ink}`, textAlign:'center', position:'relative', overflow:'hidden' },
    ctaH:{ fontFamily:acid, fontSize:240, lineHeight:0.85, fontWeight:700, letterSpacing:'-0.06em', margin:0 },
    ctaBtn:{ display:'inline-flex', gap:12, marginTop:40, padding:'22px 34px', background:ink, color:cream, borderRadius:999, fontSize:15, fontWeight:500 },
    footer:{ padding:'28px 40px', display:'flex', justifyContent:'space-between', fontSize:12 },
  };

  const services = [
    { col:6, row:2, bg:cream, n:'01 / Flagship', name:'Content Campaigns', body:'End-to-end. Concept, script, shoot, cut, post. One team, no handoffs, no blame.', big:true },
    { col:3, row:2, bg:lilac, n:'02', name:'Scripts', body:'Reels, ads, explainers. Words that sound like someone said them.' },
    { col:3, row:2, bg:sky, n:'03', name:'Video Edits', body:'Tight cuts, honest grades, music that earns its place.' },
    { col:4, row:1, bg:ink, dark:true, n:'04', name:'AI Workflows', body:'Drafts, variants, dubs, b-roll.', badge:'NEW' },
    { col:4, row:1, bg:mint, n:'05', name:'Brand Identity', body:'Marks, type, guidelines.' },
    { col:4, row:1, bg:peach, n:'06', name:'Websites & Social', body:'Framer, reels, management.' },
  ];

  const work = [
    { col:7, row:3, bg:`radial-gradient(ellipse at 30% 40%, #8a4820 0%, #1a0e08 80%)`, chip:'CAMPAIGN · FILM', title:'Okinawa — The 5AM Film', meta:'Fitness · 02:14', dark:true },
    { col:5, row:2, bg:butter, chip:'IDENTITY', title:'Monarc — mark & system', meta:'Brand · 2025' },
    { col:5, row:1, bg:lilac, chip:'AI + EDIT', title:'42 reels from 1 shoot day', meta:'Experiment' },
    { col:4, row:2, bg:sky, chip:'SCRIPT', title:'Cut skincare spec', meta:'Campaign' },
    { col:4, row:2, bg:peach, chip:'CONTENT', title:'Office Hours series', meta:'12 eps' },
    { col:4, row:2, bg:mint, chip:'WEB', title:'Heirloom — lookbook', meta:'Site · 2025' },
  ];

  const why = [
    { n:'01', h:'Writers who shoot.', b:'Editors who pitch. Directors who care about commas. Roles blur. Work sharpens.' },
    { n:'02', h:'Strategy before swatches.', b:'We ask the boring questions first. Audience, channel, budget. Then the fun ones.' },
    { n:'03', h:'Taste is the brief.', b:'You are paying for judgment. We are the filter between fine and sharp.' },
    { n:'04', h:'AI, as a mixer.', b:'It speeds up the boring part so the chef can cook. The author stays human.' },
    { n:'05', h:'One phone number.', b:'No account layer. You talk to the people making the thing.' },
    { n:'06', h:'We ship, then tune.', b:'First cut is not the last cut. We measure, tweak, ship again.' },
  ];

  return (
    <div style={s.root}>
      <nav style={s.nav}>
        <div style={s.navLogo}><span style={{color:pop, fontSize:18}}>✳</span>Blackspace</div>
        <div style={s.navPills}>
          <span style={s.navPill(true)}>Work</span>
          <span style={s.navPill()}>Studio</span>
          <span style={s.navPill()}>Process</span>
          <span style={s.navPill()}>Journal</span>
        </div>
        <div style={s.navCta}>Start a project →</div>
      </nav>

      <section style={s.hero}>
        <div style={s.heroMeta}>
          <span>✳ Blackspace® — A content studio</span>
          <span>Bengaluru · IN · Est. 2023</span>
        </div>

        <div style={{position:'relative'}}>
          {/* Floating sticker labels, Officely-style */}
          <div style={s.sticker(mint,20,120,null,-6)}>
            <div style={s.stickerIcon}>✎</div>
            <div><div style={s.stickerLabel}>SCRIPT</div><div style={s.stickerName}>Writers Room</div></div>
          </div>
          <div style={s.sticker(lilac,60,null,180,8)}>
            <div style={{...s.stickerIcon, background:popMag}}>▶</div>
            <div><div style={s.stickerLabel}>EDIT</div><div style={s.stickerName}>Cut Floor</div></div>
          </div>
          <div style={s.sticker(butter,260,-20,null,-5)}>
            <div style={{...s.stickerIcon, background:pop}}>✱</div>
            <div><div style={s.stickerLabel}>CAMPAIGN</div><div style={s.stickerName}>Big Ideas</div></div>
          </div>
          <div style={s.sticker(peach,320,null,40,7)}>
            <div style={{...s.stickerIcon}}>AI</div>
            <div><div style={s.stickerLabel}>WORKFLOW</div><div style={s.stickerName}>Draft Engine</div></div>
          </div>
          <div style={s.sticker(sky,430,420,null,-3)}>
            <div style={{...s.stickerIcon, background:popMag}}>◎</div>
            <div><div style={s.stickerLabel}>REEL</div><div style={s.stickerName}>Brand Film</div></div>
          </div>
          <div style={s.starShape(80,pop,20,-10,null,400)}></div>
          <div style={s.starShape(56,popMag,-10,420,220)}></div>

          <h1 style={s.wordmark}>
            blackspace<span style={s.wordmarkItal}>.</span>
          </h1>
        </div>

        <div style={s.heroBottom}>
          <div style={s.heroBlock}>
            <div style={s.heroBlockHead}>↳ What we are</div>
            <p style={{margin:0}}>A creative studio making content campaigns, scripts, edits, and brand work — with AI quietly doing the laundry in the back.</p>
          </div>
          <div style={s.heroDek}>
            <em>We write, shoot, cut & <span style={{color:pop}}>occasionally go viral.</span></em>
          </div>
          <div style={{...s.heroBlock, textAlign:'right', marginLeft:'auto'}}>
            <div style={s.heroBlockHead}>(2) Discover ↓</div>
            <p style={{margin:0}}>Scripts → Shoots → Edits → AI → Posts → Repeat. Seven days a week, minus the occasional Sunday.</p>
          </div>
        </div>
      </section>

      <div style={s.marquee}>
        <span>Scripts</span><span style={s.marqSep}>✳</span>
        <span>Campaigns</span><span style={s.marqSep}>✳</span>
        <span>Edits</span><span style={s.marqSep}>✳</span>
        <span>AI Workflows</span><span style={s.marqSep}>✳</span>
        <span>Brand</span><span style={s.marqSep}>✳</span>
        <span>Websites</span><span style={s.marqSep}>✳</span>
        <span>Social</span><span style={s.marqSep}>✳</span>
        <span>Scripts</span><span style={s.marqSep}>✳</span>
        <span>Campaigns</span><span style={s.marqSep}>✳</span>
      </div>

      <section style={s.svcSection}>
        <div style={s.sectionHead}>
          <span style={s.sectionNum}>§ 01 / Services</span>
          <h2 style={s.sectionTitle}>The menu, <span style={s.sectionTitleIt}>in pastel.</span></h2>
          <p style={s.sectionDek}>Six things. Done fully, not partially.</p>
        </div>
        <div style={s.svcGrid}>
          {services.map((svc,i)=>(
            <div key={i} style={s.svcCard(svc.col,svc.row,svc.bg,svc.dark)}>
              <div style={s.svcTop}>
                <span style={s.svcBadge}>{svc.n}</span>
                {svc.badge && <span style={s.svcNewBadge}>✦ {svc.badge}</span>}
              </div>
              <div>
                <h3 style={{...s.svcName, fontSize:svc.big?72:36}}>{svc.name}</h3>
                <p style={s.svcBody}>{svc.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={s.workSection}>
        <div style={s.sectionHead}>
          <span style={{...s.sectionNum, color:cream}}>§ 02 / Selected Work</span>
          <h2 style={{...s.sectionTitle, color:cream}}>Receipts, <span style={s.sectionTitleIt}>attached.</span></h2>
          <p style={{...s.sectionDek, color:cream, opacity:0.75}}>Six shown. Forty-six under NDA.</p>
        </div>
        <div style={s.workBento}>
          {work.map((w,i)=>(
            <div key={i} style={s.workCell(w.col,w.row,w.bg,w.dark)}>
              <div style={s.workChip(w.dark?'transparent':cream, w.dark?cream:ink)}>{w.chip}</div>
              <div>
                <div style={{...s.workTitle, fontSize: w.col>=7?52:26}}>{w.title}</div>
                <div style={s.workMeta}>{w.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={s.whyWrap}>
        <div style={s.sectionHead}>
          <span style={s.sectionNum}>§ 03 / Why us</span>
          <h2 style={s.sectionTitle}>Six arguments, <span style={s.sectionTitleIt}>if you need them.</span></h2>
          <p style={s.sectionDek}>Take what helps.</p>
        </div>
        <div style={s.whyGrid}>
          <div>
            {why.slice(0,3).map((w,i)=>(
              <div key={i} style={s.whyRow}>
                <span style={s.whyN}>{w.n}.</span>
                <div><h3 style={s.whyH}>{w.h}</h3><p style={s.whyB}>{w.b}</p></div>
              </div>
            ))}
          </div>
          <div>
            {why.slice(3).map((w,i)=>(
              <div key={i} style={s.whyRow}>
                <span style={s.whyN}>{w.n}.</span>
                <div><h3 style={s.whyH}>{w.h}</h3><p style={s.whyB}>{w.b}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={s.cta}>
        <div style={s.starShape(120,popMag,15,40,null,60)}></div>
        <div style={s.starShape(90,pop,-20,null,120,60)}></div>
        <div style={{...s.heroBlockHead, textAlign:'center'}}>§ 04 / Let's talk</div>
        <h2 style={s.ctaH}>Let's <span style={s.sectionTitleIt}>make</span><br/>something.</h2>
        <div style={s.ctaBtn}>hello@blackspace.media →</div>
      </section>

      <footer style={s.footer}>
        <span>© Blackspace 2025 — all feelings reserved.</span>
        <span>Instagram ↗  ·  LinkedIn ↗</span>
      </footer>
    </div>
  );
}

window.StickerPopDirection = StickerPopDirection;
