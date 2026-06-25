import React from 'react';
import { SPNav, SPFooter, SPVideoCarousel, SPStatusSticker, SPSectionHead } from '../components/SPKit';
import { useBreakpoints } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

export default function DomainSocialMedia({ themeKey, typeKey }) {
  const { isMobile, isTablet } = useBreakpoints();

  const T = SP_THEMES[themeKey || 'classic'];
  const F = SP_TYPE[typeKey || 'acidGaraHelv'];

  const masonryVideos = [
    { height: 380, src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    { height: 260, src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
    { height: 420, src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
    { height: 320, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
    { height: 480, src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
    { height: 340, src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
    { height: 400, src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
    { height: 280, src: 'https://images.unsplash.com/photo-1518131672697-613bc04fa4da?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
    { height: 360, src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800', vid: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  ];

  const carouselItems = [
    { title: 'Ocean Deep', vid: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Jellyfish', vid: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Sintel', vid: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Tears of Steel', vid: 'https://media.w3.org/2010/05/bunny/trailer.mp4', poster: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Big Buck Bunny', vid: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Mountain Peak', vid: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Urban Flow', vid: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Abstract Light', vid: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Forest Canopy', vid: 'https://media.w3.org/2010/05/bunny/trailer.mp4', poster: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Desert Wind', vid: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Neon Nights', vid: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Quiet Morning', vid: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Golden Hour', vid: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://images.unsplash.com/photo-1506744626753-143d60235882?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Night Drive', vid: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000' },
    { title: 'City Lights', vid: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000' },
  ];




  const mint = '#B2FBA5';
  const lilac = '#D4B8FF';
  const butter = '#FFEC99';
  const peach = '#FFC9B1';
  const sky = '#AEE5FF';

  const stickers = isMobile ? [
    { top: '5%', left: '5%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '⚡', label: 'Growth', name: 'Viral Hooks', iconBg: T.ink, size: 'sm', scale: 0.8, zIndex: 20 },
    { top: '8%', right: '5%', rotate: 12, variant: 'torn', bg: sky, icon: '★', label: 'Status', name: 'Algorithm', iconBg: T.popC, size: 'sm', scale: 0.8, zIndex: 20 },
    { top: '85%', left: '5%', rotate: -5, variant: 'square', bg: peach, icon: '📈', label: 'Trend', name: 'Rising', iconBg: T.ink, size: 'sm', scale: 0.8, zIndex: 20 },
    { top: '88%', right: '5%', rotate: 9, variant: 'tape', tape: T.popB, bg: butter, icon: '📱', label: 'Format', name: 'Shorts', iconBg: T.popA, size: 'sm', scale: 0.8, zIndex: 20 }
  ] : isTablet ? [
    { top: '8%', left: '8%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '⚡', label: 'Growth', name: 'Viral Hooks', iconBg: T.ink, size: 'md', scale: 0.75, zIndex: 20 },
    { top: '5%', right: '10%', rotate: 12, variant: 'torn', bg: sky, icon: '★', label: 'Status', name: 'Algorithm', iconBg: T.popC, size: 'md', scale: 0.75, zIndex: 20 },
    { top: '85%', left: '8%', rotate: -5, variant: 'square', bg: peach, icon: '📈', label: 'Trend', name: 'Rising', iconBg: T.ink, size: 'md', scale: 0.75, zIndex: 20 },
    { top: '88%', right: '10%', rotate: 9, variant: 'tape', tape: T.popB, bg: butter, icon: '📱', label: 'Format', name: 'Shorts', iconBg: T.popA, size: 'md', scale: 0.75, zIndex: 20 }
  ] : [
    { top: '12%', left: '12%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '⚡', label: 'Growth', name: 'Viral Hooks', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '5%', right: '40%', rotate: 12, variant: 'torn', bg: sky, icon: '★', label: 'Status', name: 'Algorithm', iconBg: T.popC, size: 'md', zIndex: 20 },
    { top: '45%', right: '2%', rotate: 7, variant: 'square', bg: peach, icon: '📈', label: 'Trend', name: 'Rising', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '82%', right: '15%', rotate: -11, variant: 'tape', tape: T.popB, bg: butter, icon: '📱', label: 'Format', name: 'Shorts', iconBg: T.popA, size: 'md', zIndex: 20 },
    { top: '88%', left: '40%', rotate: -5, variant: 'torn', bg: lilac, icon: '🔥', label: 'Culture', name: 'Relevant', iconBg: T.popB, size: 'md', zIndex: 20 },
    { top: '50%', left: '2%', rotate: 9, variant: 'tape', tape: T.popC, bg: mint, icon: '👀', label: 'Views', name: 'Millions', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '15%', right: '12%', rotate: -4, variant: 'torn', bg: sky, icon: '✂', label: 'Cut', name: 'Fast Paced', iconBg: T.popB, size: 'md', zIndex: 20 },
    { top: '78%', left: '10%', rotate: 11, variant: 'tape', tape: '#b0b0b0', bg: peach, icon: '🎯', label: 'Target', name: 'Gen-Z', iconBg: T.popA, size: 'md', zIndex: 20 }
  ];

  return (
    <div style={{ background: T.paper, color: T.ink, minHeight: '100vh', fontFamily: F.body }}>
      <SPNav T={T} F={F} />

      {/* 1. HERO SECTION (Landing Page Style) */}
      <section style={{
        padding: isMobile ? '120px 20px 40px' : isTablet ? '140px 30px 60px' : '160px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 15% 10%, ${'#e74c3c'}33 0%, transparent 35%),
          radial-gradient(circle at 85% 20%, ${'#e74c3c'}22 0%, transparent 35%)
        `
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto' }}>

          {/* Top Meta */}
          <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40, fontFamily: F.body }}>
            <span>✳ Domain — Social Media</span>
            <span>Blackspace®</span>
          </div>

          {/* Center Mark & Stickers */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: isMobile ? 450 : 650, position: 'relative' }}>

            {/* Stickers around the mark */}
            {stickers.map((st, i) => <SPStatusSticker key={i} T={T} F={F} {...st} />)}

            <h1 style={{
              fontFamily: F.display,
              fontSize: 'clamp(70px, 16vw, 240px)',
              lineHeight: 0.85,
              fontWeight: 700,
              letterSpacing: '-0.06em',
              margin: 0,
              textAlign: 'center',
              position: 'relative',
              color: T.ink,
              zIndex: 10
            }}>
              social<br /><span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: '#e74c3c' }}>media</span>
            </h1>
          </div>

          {/* Bottom Intro Text */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'start', gap: isMobile ? 40 : 20, marginTop: isMobile ? 40 : 80 }}>
            <div style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.25, textAlign: 'center', color: T.ink, flex: 1, maxWidth: isMobile ? '100%' : 400, order: isMobile ? 1 : 2 }}>
              <em>Reels, Shorts. <span style={{ color: '#e74c3c' }}>The algorithms love us.</span></em>
            </div>

            <div style={{ fontSize: 14, lineHeight: 1.5, maxWidth: 320, fontFamily: F.body, textAlign: isMobile ? 'center' : 'left', flex: 1, order: isMobile ? 2 : 1 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.6 }}>↳ The Approach</div>
              <p style={{ margin: 0 }}>We craft native social content that commands attention and drives explosive growth.</p>
            </div>

            <div style={{ fontSize: 14, lineHeight: 1.5, maxWidth: 320, fontFamily: F.body, textAlign: isMobile ? 'center' : 'right', flex: 1, order: 3 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.6 }}>(2) Outcome ↓</div>
              <p style={{ margin: 0 }}>Engagement, retention, and a community that actually cares about your brand.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Coverflow Video Carousel */}
      <SPVideoCarousel T={T} F={F} items={carouselItems} title="Featured" titleIt="Reels." dek="Click cards to bring them into focus." bg={T.ink} textColor={T.paper} />

      {/* Pinterest Masonry Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', maxWidth: 1600, margin: '0 auto' }}>
        <SPSectionHead T={T} F={F} num="§ 02 / Archive" title="Project" titleIt="Archive." dek="A visual dump of what we've been up to." />

        <div style={{ columnCount: isMobile ? 2 : isTablet ? 3 : 4, columnGap: isMobile ? 12 : 16 }}>
          {masonryVideos.map((v, i) => (
            <div
              key={i}
              style={{
                display: 'inline-block',
                width: '100%',
                breakInside: 'avoid',
                marginBottom: isMobile ? 12 : 16
              }}
            >
              <div style={{
                width: '100%', height: isMobile ? v.height * 0.6 : v.height, background: '#e0e0e0', borderRadius: 16,
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                border: `1px solid ${T.ink}22`,
              }}
                onMouseEnter={e => {
                  const playBtn = e.currentTarget.querySelector('.sp-play');
                  if (playBtn) { playBtn.style.opacity = 1; playBtn.style.transform = 'scale(1)'; }
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play().catch(() => { });
                }}
                onMouseLeave={e => {
                  const playBtn = e.currentTarget.querySelector('.sp-play');
                  if (playBtn) { playBtn.style.opacity = 0; playBtn.style.transform = 'scale(0.8)'; }
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.pause();
                }}>
                <video
                  src={v.vid}
                  poster={v.src}
                  muted playsInline loop
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.4s ease' }}
                />

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)', pointerEvents: 'none' }}></div>

                <div className="sp-play" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transform: 'scale(0.8)', transition: 'opacity 0.3s ease, transform 0.3s ease', pointerEvents: 'none' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.paper, fontSize: 16, border: '1px solid rgba(255,255,255,0.3)' }}>▶</div>
                </div>

                <div style={{ position: 'absolute', bottom: 16, left: 16, color: T.paper, pointerEvents: 'none' }}>
                  <div style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Brand snippet</div>
                  <div style={{ fontFamily: F.display, fontSize: isMobile ? 14 : 18, fontWeight: 600 }}>Visual Archive {i + 1}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}
