import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';


export default function SPServiceDetail({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];
  
  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = useIsMobile();
  
  // Read query params safely
  const [slug, setSlug] = React.useState('video-edits');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('id')) setSlug(params.get('id'));
    }
  }, []);

  const serviceData = {
    'content-campaigns': { name: 'Content Campaigns', bg: T.paper, color: T.ink, dek: 'End-to-end. Concept, script, shoot, cut, post. One team, no handoffs, no blame.', sticker: mint },
    'scripts': { name: 'Scripts', bg: lilac, color: T.ink, dek: 'Reels, ads, explainers. Words that sound like someone said them.', sticker: butter },
    'video-edits': { name: 'Video Edits', bg: sky, color: T.ink, dek: 'Tight cuts, honest grades, music that earns its place.', sticker: peach },
    'ai-workflows': { name: 'AI Workflows', bg: T.ink, color: T.paper, dek: 'Drafts, variants, dubs, b-roll — on tap.', sticker: mint },
    'brand-identity': { name: 'Brand Identity', bg: butter, color: T.ink, dek: 'Marks, type, guidelines.', sticker: lilac },
    'websites-social': { name: 'Websites & Social', bg: peach, color: T.ink, dek: 'Framer, reels, management.', sticker: sky }
  };

  const data = serviceData[slug] || serviceData['video-edits'];

  // Pinterest format placeholder video images
  const masonryVideos = [
    { height: 500, src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    { height: 350, src: 'https://images.unsplash.com/photo-1528148343865-51218c4a13e6?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
    { height: 600, src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
    { height: 400, src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
    { height: 700, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
    { height: 450, src: 'https://images.unsplash.com/photo-1518131672697-613bc04fa4da?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
    { height: 550, src: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
    { height: 380, src: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
    { height: 480, src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  ];

  // Carousel State
  const carouselItems = [
    { title: 'The 5AM Film', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Monarc System', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Office Hours', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Skin Spec', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', poster: 'https://images.unsplash.com/photo-1518131672697-613bc04fa4da?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Heirloom Site', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', poster: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000' },
  ];
  const [activeIdx, setActiveIdx] = React.useState(2);

  const renderVideoEditsLayout = () => (
    <React.Fragment>
      {/* Coverflow Video Carousel */}
      <section style={{ padding: isMobile ? '60px 0' : '100px 0', background: T.ink, color: T.paper, borderTop: `1px solid ${T.ink}`, overflow: 'hidden' }}>
        <div style={{ padding: '0 40px', marginBottom: 60 }}>
           <SPSectionHead T={T} F={F} num="§ 01 / Featured" title="Hero" titleIt="Reels." dek="Click cards to bring them into focus." color={T.paper} />
        </div>
        
        {/* Carousel Container */}
        <div style={{ 
          position: 'relative', height: isMobile ? 450 : 700, width: '100%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {carouselItems.map((item, i) => {
            const offset = i - activeIdx;
            const isActive = i === activeIdx;
            const distance = Math.abs(offset);
            
            const scale = isActive ? 1 : 1 - (distance * 0.15);
            const translateX = offset * (isMobile ? 200 : 360);
            const blur = isActive ? 0 : distance * 4;
            const zIndex = 10 - distance;
            const opacity = isActive ? 1 : Math.max(0, 1 - (distance * 0.4));
            
            return (
              <div 
                key={i} 
                onClick={() => setActiveIdx(i)}
                style={{ 
                  position: 'absolute',
                  width: isMobile ? 280 : 540, 
                  height: isMobile ? 400 : 640, 
                  background: '#111', 
                  borderRadius: 24,
                  overflow: 'hidden', 
                  border: `1px solid rgba(255,255,255,0.15)`,
                  boxShadow: isActive ? `0 24px 60px rgba(0,0,0,0.6)` : 'none',
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  filter: `blur(${blur}px)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  cursor: isActive ? 'default' : 'pointer',
                  pointerEvents: opacity === 0 ? 'none' : 'auto'
                }}
              >
                <video 
                     src={item.vid} 
                     poster={item.poster}
                     muted playsInline loop
                     style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.5s ease' }} 
                     onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.play(); }}
                     onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.pause(); }}
                     ref={el => { if (el && isActive && el.paused) { el.play().catch(()=>{}); } else if (el && !isActive && !el.paused) { el.pause(); } }}
                />
                <div style={{ 
                  position: 'absolute', top: 24, left: 24, background: T.paper, color: T.ink, 
                  padding: '6px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                  opacity: isActive ? 1 : 0, transition: 'opacity 0.3s ease 0.2s'
                }}>00:45</div>
                
                <div style={{ 
                  position: 'absolute', bottom: 24, left: 24, right: 24,
                  opacity: isActive ? 1 : 0, transition: 'opacity 0.3s ease 0.2s', pointerEvents: 'none'
                }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8, opacity: 0.8 }}>Campaign</div>
                  <h3 style={{ fontFamily: F.display, fontSize: 32, margin: 0, fontWeight: 600 }}>{item.title}</h3>
                </div>
                
                <div style={{ 
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
                  opacity: isActive ? 1 : 0, transition: 'opacity 0.3s ease 0.2s'
                }}>
                  <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.paper, fontSize: 40, pointerEvents: 'auto', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>▶</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pinterest Masonry Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '120px 40px' }}>
         <SPSectionHead T={T} F={F} num="§ 02 / Archive" title="Project" titleIt="Archive." dek="A visual dump of what we've been up to." />
         
         <div style={{ columnCount: isMobile ? 2 : 3, columnGap: isMobile ? 12 : 24 }}>
            {masonryVideos.map((v, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'inline-block',
                  width: '100%', 
                  breakInside: 'avoid',
                  marginBottom: isMobile ? 12 : 24 
                }}
              >
                <div style={{
                  width: '100%', height: isMobile ? v.height * 0.6 : v.height, background: '#e0e0e0', borderRadius: 20,
                  position: 'relative', overflow: 'hidden', cursor: 'pointer',
                  border: `1px solid ${T.ink}22`
                }}>
                  <video 
                     src={v.vid} 
                     poster={v.src}
                     muted playsInline loop
                     style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.4s ease' }} 
                     onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.play(); }}
                     onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.pause(); }}
                  />
                  
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)', opacity: 0.8, pointerEvents: 'none' }}></div>
                  
                  <div style={{ position: 'absolute', top: 12, right: 12, background: T.paper, color: T.ink, width: isMobile ? 32 : 44, height: isMobile ? 32 : 44, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? 14 : 18, border: `1px solid ${T.ink}22`, pointerEvents: 'none' }}>▶</div>
                  
                  <div style={{ position: 'absolute', bottom: 16, left: 16, color: T.paper, pointerEvents: 'none' }}>
                    <div style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Brand snippet</div>
                    <div style={{ fontFamily: F.display, fontSize: isMobile ? 16 : 22, fontWeight: 600 }}>Visual Archive {i+1}</div>
                  </div>
                </div>
              </div>
            ))}
         </div>
      </section>
    </React.Fragment>
  );

  const renderGenericLayout = () => {
    // Tailored content dictionary based on service slug
    const tailoredData = {
      'content-campaigns': [
        { col: 8, bg: T.ink, color: T.paper, height: isMobile ? 300 : 440, title: 'End-to-End Production', tag: 'Shoot & Cut', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200' },
        { col: 4, bg: data.sticker, color: T.ink, height: isMobile ? 240 : 440, title: 'Concept Scripting', tag: 'Pre-production', img: '' },
        { col: 4, bg: T.paper, color: T.ink, height: isMobile ? 240 : 440, title: 'Color Grade', tag: 'Post', img: '' },
        { col: 8, bg: lilac, color: T.ink, height: isMobile ? 300 : 440, title: 'Platform Distribution', tag: 'Strategy', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200' }
      ],
      'scripts': [
        { col: 8, bg: T.ink, color: T.paper, height: isMobile ? 300 : 440, title: 'Commercial Ads', tag: 'TVC & Digital', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200' },
        { col: 4, bg: data.sticker, color: T.ink, height: isMobile ? 240 : 440, title: 'Social Reels', tag: 'Short Form', img: '' },
        { col: 4, bg: T.paper, color: T.ink, height: isMobile ? 240 : 440, title: 'Brand Manifestos', tag: 'Long Form', img: '' },
        { col: 8, bg: butter, color: T.ink, height: isMobile ? 300 : 440, title: 'Explainer Series', tag: 'Educational', img: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&w=1200' }
      ],
      'ai-workflows': [
        { col: 8, bg: T.ink, color: T.paper, height: isMobile ? 300 : 440, title: 'Midjourney Prompting', tag: 'Generation', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200' },
        { col: 4, bg: data.sticker, color: T.ink, height: isMobile ? 240 : 440, title: 'Voice Clones', tag: 'Audio', img: '' },
        { col: 4, bg: T.paper, color: T.ink, height: isMobile ? 240 : 440, title: 'Automated QC', tag: 'Pipeline', img: '' },
        { col: 8, bg: mint, color: T.ink, height: isMobile ? 300 : 440, title: 'Variant Scaling', tag: 'Performance', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200' }
      ],
      'brand-identity': [
        { col: 8, bg: T.ink, color: T.paper, height: isMobile ? 300 : 440, title: 'Logo Systems', tag: 'Marks', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200' },
        { col: 4, bg: data.sticker, color: T.ink, height: isMobile ? 240 : 440, title: 'Color Theory', tag: 'Palettes', img: '' },
        { col: 4, bg: T.paper, color: T.ink, height: isMobile ? 240 : 440, title: 'Typography', tag: 'Typefaces', img: '' },
        { col: 8, bg: lilac, color: T.ink, height: isMobile ? 300 : 440, title: 'Brand Guidelines', tag: 'Rules', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200' }
      ],
      'websites-social': [
        { col: 8, bg: T.ink, color: T.paper, height: isMobile ? 300 : 440, title: 'Framer Sites', tag: 'Web', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200' },
        { col: 4, bg: data.sticker, color: T.ink, height: isMobile ? 240 : 440, title: 'Feed Curation', tag: 'Instagram', img: '' },
        { col: 4, bg: T.paper, color: T.ink, height: isMobile ? 240 : 440, title: 'Link in Bio', tag: 'Conversion', img: '' },
        { col: 8, bg: sky, color: T.ink, height: isMobile ? 300 : 440, title: 'Social Playbooks', tag: 'Strategy', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200' }
      ]
    };
    
    // Default fallback
    const defaultData = [
      { col: 8, bg: T.ink, color: T.paper, height: isMobile ? 300 : 440, title: 'Flagship Campaign', tag: 'Showcase', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200' },
      { col: 4, bg: data.sticker, color: T.ink, height: isMobile ? 240 : 440, title: 'Core Mechanics', tag: 'Strategy', img: '' },
      { col: 4, bg: T.paper, color: T.ink, height: isMobile ? 240 : 440, title: 'Concept Deck', tag: 'Deliverables', img: '' },
      { col: 8, bg: lilac, color: T.ink, height: isMobile ? 300 : 440, title: 'Execution Phase', tag: 'Process', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200' }
    ];

    const bentoBoxes = tailoredData[slug] || defaultData;

    return (
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', borderTop: `1px solid ${T.ink}` }}>
        <SPSectionHead T={T} F={F} num="§ 01 / Selected Work" title="Case" titleIt="Studies." dek={`Recent work in ${data.name}.`} />
        
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: 16 }}>
          {bentoBoxes.map((block, i) => (
             <div key={i} style={{ gridColumn: isMobile ? '1 / -1' : `span ${block.col}` }}>
               <div style={{
                  height: block.height, background: block.bg, color: block.color, borderRadius: 20, padding: 32,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  border: `1px solid ${T.ink}`, position: 'relative', overflow: 'hidden', cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
               }}
               onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.15)`; }}
               onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  {block.img && (
                    <img src={block.img} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} alt="Background" />
                  )}
                  <div style={{ position: 'relative', zIndex: 2, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{block.tag}</div>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontFamily: F.display, fontSize: 'clamp(32px, 5vw, 48px)', margin: 0, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>{block.title}</h3>
                    <div style={{ marginTop: 16, display: 'inline-flex', padding: '8px 16px', border: `1px solid ${block.color}55`, borderRadius: 999, fontSize: 12, fontWeight: 500 }}>View Case Study ↗</div>
                  </div>
               </div>
             </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div style={{ background: T.paper, color: T.ink, fontFamily: F.body, minHeight: '100vh', overflowX: 'hidden' }}>
      <SPNav T={T} F={F} active="Services" />
      
      {/* Hero section */}
      <section style={{ padding: isMobile ? '60px 20px' : '120px 40px', background: data.bg, color: data.color, position: 'relative' }}>
         {!isMobile && <SPStatusSticker T={T} F={F} top={40} right={80} rotate={8} variant="tape" tape={T.popB} bg={data.sticker} icon="+" iconBg={T.ink} label="Service" name={data.name} zIndex={5} />}
         {!isMobile && <SPStar size={80} color={T.popA} rotate={-15} bottom={-20} left={80} zIndex={5} />}
         
         <div>
           <div style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.7 }}>✳ Capability</div>
           <h1 style={{ fontFamily: F.display, fontSize: 'clamp(50px, 12vw, 160px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0 }}>
             {data.name}
           </h1>
           <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 32, opacity: 0.85, maxWidth: 640 }}>
             {data.dek}
           </p>
         </div>
      </section>

      {/* Conditional Content Rendering */}
      {slug === 'video-edits' ? renderVideoEditsLayout() : renderGenericLayout()}
      
      {/* Mini CTA */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.popA, color: T.paper, textAlign: 'center' }}>
        <div>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 8vw, 100px)', margin: '0 0 32px' }}>Want this for your brand?</h2>
          <Link to="/contact" style={{ display: 'inline-flex', padding: '16px 32px', background: T.paper, color: T.ink, borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: F.body }}>Start a project →</Link>
        </div>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
};
