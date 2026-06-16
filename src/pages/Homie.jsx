import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPStatusSticker, SPStar, SPSectionHead, SPParallax, SPNoise } from '../components/SPKit';
import { useBreakpoints } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';
import logo13 from '../carousel logo/13.png';
import logo14 from '../carousel logo/14.png';
import logo15 from '../carousel logo/15.png';
import logo16 from '../carousel logo/16.png';
import logo17 from '../carousel logo/17.png';
import logo18 from '../carousel logo/18.png';

import poster1 from '../poster/1.jpg';
import poster2 from '../poster/1a cover.jpg';
import poster3 from '../poster/3.jpg';
import poster4 from '../poster/5.jpg';
import poster5 from '../poster/MHC Vizag Poster.jpg';
import poster6 from '../poster/MHC new 2.jpg';
import poster7 from '../poster/ed.jpg';

export default function Homie({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const { isMobile, isTablet } = useBreakpoints();

  const root = { width: '100%', minHeight: '100vh', background: 'transparent', color: T.ink, fontFamily: F.body, position: 'relative' };

  // --- HERO CONFIG ---
  const hero = { padding: isMobile ? '100px 20px 40px' : isTablet ? '120px 30px 60px' : '140px 40px 80px', position: 'relative' };
  const heroMeta = { display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 40, fontFamily: F.body };
  const wordmark = { fontFamily: F.display, fontSize: 'clamp(180px, 24vw, 360px)', lineHeight: 0.82, fontWeight: 700, letterSpacing: '-0.06em', margin: 0, textAlign: 'center', position: 'relative', color: T.ink };
  const wordmarkItal = { fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.ink, letterSpacing: '-0.03em' };
  const heroBottom = { display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'start', gap: isMobile ? 40 : 20, marginTop: isMobile ? 40 : 80 };
  const heroBlock = { fontSize: 14, lineHeight: 1.5, maxWidth: 320, fontFamily: F.body };
  const heroBlockHead = { fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.6 };
  const heroDek = { fontFamily: F.italic, fontStyle: 'italic', fontSize: 28, lineHeight: 1.25, textAlign: 'center', color: T.ink };

  // Floating status stickers — varied rotation, tape, torn edges
  const statusStickers = isMobile ? [
    { top: '2%', left: '-3%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '◉', label: 'Right now', name: 'On Set', iconBg: T.ink, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '5%', right: '-2%', rotate: 12, variant: 'torn', bg: sky, icon: '✦', label: 'Vibe check', name: 'Immaculate', iconBg: T.popC, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '18%', left: '-15%', rotate: 7, variant: 'square', bg: peach, icon: 'AI', label: 'In the oven', name: 'Draft Engine', iconBg: T.ink, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '22%', right: '15%', rotate: -11, variant: 'tape', tape: T.popB, bg: T.paper, icon: '⏱', label: 'Deadline', name: 'Yesterday', iconBg: T.popA, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '75%', left: '-5%', rotate: -5, variant: 'tape', tape: '#b0b0b0', bg: butter, icon: '☕', label: 'Team status', name: 'Brewing Coffee', iconBg: T.popA, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '70%', right: '8%', rotate: 9, variant: 'torn', bg: lilac, icon: '✂', label: 'Currently', name: 'Editing', iconBg: T.popB, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '90%', left: '-15%', rotate: -4, variant: 'torn', bg: sky, icon: '✎', label: 'Fresh', name: 'Script Pass 3', iconBg: T.popB, size: 'sm', scale: 0.65, zIndex: 20 },
    { top: '86%', right: '5%', rotate: 11, variant: 'tape', tape: T.popC, bg: mint, icon: '▶', label: 'Playback', name: 'Reel Cut', iconBg: T.popA, size: 'sm', scale: 0.65, zIndex: 20 }
  ] : isTablet ? [
    { top: '10%', left: '5%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '◉', label: 'Right now', name: 'On Set', iconBg: T.ink, size: 'md', scale: 0.75, zIndex: 20 },
    { top: '10%', right: '5%', rotate: 9, variant: 'torn', bg: lilac, icon: '✂', label: 'Currently', name: 'Editing', iconBg: T.popB, size: 'md', scale: 0.75, zIndex: 20 },
    { top: '85%', left: '5%', rotate: -4, variant: 'torn', bg: sky, icon: '✎', label: 'Fresh', name: 'Script Pass 3', iconBg: T.popB, size: 'md', scale: 0.75, zIndex: 20 },
    { top: '85%', right: '5%', rotate: 7, variant: 'square', bg: peach, icon: 'AI', label: 'In the oven', name: 'Draft Engine', iconBg: T.ink, size: 'md', scale: 0.75, zIndex: 20 }
  ] : [
    { top: '20%', left: '5%', rotate: -8, variant: 'tape', tape: T.popA, bg: mint, icon: '◉', label: 'Right now', name: 'On Set', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '5%', right: '5%', rotate: 9, variant: 'torn', bg: lilac, icon: '✂', label: 'Currently', name: 'Editing', iconBg: T.popB, size: 'md', zIndex: 20 },
    { top: '15%', left: '25%', rotate: 14, variant: 'square', bg: sky, icon: '✦', label: 'Vibe check', name: 'Immaculate', iconBg: T.popC, size: 'md', zIndex: 20 },
    { top: '15%', right: '25%', rotate: -11, variant: 'tape', tape: T.popB, bg: T.paper, icon: '⏱', label: 'Deadline', name: 'Yesterday', iconBg: T.popA, size: 'md', zIndex: 20 },
    { top: '65%', left: '10%', rotate: -5, variant: 'tape', tape: '#b0b0b0', bg: butter, icon: '☕', label: 'Team status', name: 'Brewing Coffee', iconBg: T.popA, size: 'md', zIndex: 20 },
    { top: '65%', right: '10%', rotate: 7, variant: 'square', bg: peach, icon: 'AI', label: 'In the oven', name: 'Draft Engine', iconBg: T.ink, size: 'md', zIndex: 20 },
    { top: '70%', left: '30%', rotate: -4, variant: 'torn', bg: sky, icon: '✎', label: 'Fresh', name: 'Script Pass 3', iconBg: T.popB, size: 'md', zIndex: 20 },
    { top: '75%', right: '30%', rotate: 11, variant: 'tape', tape: T.popC, bg: mint, icon: '▶', label: 'Playback', name: 'Reel Cut', iconBg: T.popA, size: 'md', zIndex: 20 }
  ];

  // --- DATA ---
  const expertise = [
    { title: "Social Media Strategy", bg: peach, col: 4, row: 2, big: true, badge: 'CORE', dek: 'Scaling communities with culture-first content.' },
    { title: "Content Creation", bg: mint, col: 4, row: 1, dek: 'Scripts, shoots, cuts.' },
    { title: "Brand Identity", bg: sky, col: 4, row: 1, dek: 'Marks that last.' },
    { title: "Digital Experiences", bg: butter, col: 4, row: 1, dek: 'Websites & apps.' },
    { title: "Campaign Concepts", bg: T.paper, col: 4, row: 1, dek: 'The big ideas.' },
    { title: "Creative Production", bg: lilac, col: 4, row: 2, dek: 'Full-service execution from pre to post.' }
  ];

  const whyUsList = [
    { n: '01', h: 'Young team, sharp taste', b: 'We know what looks good and what works right now.', bg: mint },
    { n: '02', h: 'Communication-driven', b: 'Clear, transparent, and frequent updates. No radio silence.', bg: lilac },
    { n: '03', h: 'Tight deadlines', b: 'We move fast without breaking things. Yesterday is fine.', bg: sky },
    { n: '04', h: 'Creative + Strategic', b: 'It’s not just pretty, it actually serves the business goal.', bg: butter },
    { n: '05', h: 'Easy to work with', b: 'No egos. Just good people making exceptionally good things.', bg: peach },
    { n: '06', h: 'Fast, clean, modern', b: 'Zero bloat. High impact. Always fresh.', bg: T.paper }
  ];

  const brandingImages = [
    { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', col: 6, row: 2 },
    { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', col: 3, row: 1 },
    { url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80', col: 3, row: 1 },
    { url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80', col: 6, row: 1 },
    { url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80', col: 4, row: 2 },
    { url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80', col: 8, row: 1 },
    { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80', col: 4, row: 1 },
    { url: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=800&q=80', col: 4, row: 1 },
  ];

  const carouselImages = [
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
  ];

  const logoImages = [
    { src: logo13, rotate: -2 },
    { src: logo14, rotate: 3 },
    { src: logo15, rotate: -1 },
    { src: logo16, rotate: 2 },
    { src: logo17, rotate: -3 },
    { src: logo18, rotate: 1 },
  ];

  const carouselPosters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7];

  return (
    <div style={root}>
      <SPNav T={T} F={F} active="homie" />

      {/* 1. HERO SECTION */}
      <section style={{
        ...hero,
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 15% 10%, ${mint}44 0%, transparent 35%),
          radial-gradient(circle at 85% 20%, ${lilac}44 0%, transparent 35%),
          radial-gradient(circle at 50% 80%, ${butter}40 0%, transparent 50%)
        `
      }}>
        <SPNoise T={T} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={heroMeta}>
            <span>✳ Blackspace® — Homie</span>
            <span>Bengaluru · IN · Est. 2023</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: isMobile ? 450 : 600, position: 'relative' }}>
            {statusStickers.map((st, i) =>
              <SPStatusSticker key={i} T={T} F={F} {...st} />
            )}
            <SPStar size={isMobile ? 40 : isTablet ? 60 : 80} color={T.popA} rotate={20} top={isMobile ? "5%" : isTablet ? "5%" : "5%"} left={isMobile ? "40%" : isTablet ? "40%" : "45%"} />
            <SPStar size={isMobile ? 30 : isTablet ? 40 : 56} color={T.popB} rotate={-10} top={isMobile ? "75%" : isTablet ? "80%" : "85%"} left={isMobile ? "40%" : isTablet ? "40%" : "45%"} />
            <SPStar size={isMobile ? 24 : isTablet ? 30 : 44} color={T.popC} rotate={15} top={isMobile ? "30%" : isTablet ? "40%" : "45%"} right={isMobile ? "5%" : isTablet ? "5%" : "5%"} />

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
        </div>
      </section>

      {/* 2. WHAT DO WE DO SECTION (Custom Layout from Image) */}
      <section style={{ padding: isMobile ? '80px 20px' : '140px 40px', background: '#FAF9F6', color: T.ink, position: 'relative', overflow: 'hidden' }}>
        <SPNoise T={T} intensity="card" />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>

          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, letterSpacing: '-0.04em', margin: 0 }}>
            What <span style={{ fontFamily: F.italic, fontStyle: 'italic', color: T.popA, fontWeight: 400 }}>do we</span> do?
          </h2>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: isMobile ? 40 : 60, marginTop: isMobile ? 30 : 50 }}>

            {/* Left Card: Tilted Video Card */}
            <div style={{
              borderRadius: 20,
              transform: 'rotate(-4deg)',
              width: 320,
              height: 480,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              transition: 'transform 0.4s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(-2deg) scale(1.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-4deg) scale(1)'; }}>
              <iframe src="https://www.youtube.com/embed/fzCvDsoviKk?autoplay=1&mute=1&loop=1&playlist=fzCvDsoviKk&controls=0" style={{ width: '100%', height: '100%', pointerEvents: 'none', transform: 'scale(1.35)', border: 'none' }} frameBorder="0" allow="autoplay; fullscreen" />
            </div>

            {/* Center List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: isMobile ? 24 : 36, textAlign: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <span style={{ fontSize: 20, color: T.popC }}>✦</span>
                <span style={{ fontFamily: F.display, fontWeight: 800, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>Social Media</span>
                <span style={{ fontSize: 20, color: T.popC }}>✦</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: F.italic, fontStyle: 'italic', color: T.popB, fontSize: isMobile ? 32 : 48, lineHeight: 1 }}>Content Strategy</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <span style={{ fontSize: 24, color: T.ink }}>❋</span>
                <span style={{ fontFamily: F.display, fontWeight: 700, letterSpacing: '-0.02em', background: T.ink, color: T.paper, padding: '4px 20px', borderRadius: 99, display: 'inline-block', transform: 'rotate(-2deg)' }}>Brand Identity</span>
                <span style={{ fontSize: 24, color: T.ink }}>❋</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: F.italic, fontStyle: 'italic', color: T.ink, fontSize: isMobile ? 32 : 48, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '6px', lineHeight: 1 }}>Websites & Design</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <span style={{ fontSize: 20, color: T.popA }}>✺</span>
                <span style={{ fontFamily: F.display, fontWeight: 600, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Creative Production</span>
                <span style={{ fontSize: 20, color: T.popA }}>✺</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: F.italic, fontStyle: 'italic', color: T.popC, fontSize: isMobile ? 32 : 48, fontWeight: 500, lineHeight: 1 }}>Campaign Concepts</span>
              </div>

            </div>

            {/* Right Card: Tilted Video Card with Sticker */}
            <div style={{
              borderRadius: 20,
              transform: 'rotate(4deg)',
              width: 320,
              height: 480,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              transition: 'transform 0.4s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(2deg) scale(1.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(4deg) scale(1)'; }}>
              <iframe src="https://www.youtube.com/embed/1o-TBjEoxZY?autoplay=1&mute=1&loop=1&playlist=1o-TBjEoxZY&controls=0" style={{ width: '100%', height: '100%', pointerEvents: 'none', transform: 'scale(1.35)', border: 'none' }} frameBorder="0" allow="autoplay; fullscreen" />

              {/* Custom Sticker matching the image */}
              <div style={{ position: 'absolute', bottom: '25%', left: '5%', transform: 'rotate(-6deg)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ background: '#00A3FF', color: 'white', padding: '6px 16px', borderRadius: 999, fontSize: 16, fontWeight: 800, fontFamily: F.display, border: '2px solid white', boxShadow: '2px 2px 0 rgba(0,0,0,0.2)', width: 'max-content' }}>
                  coz we have
                </div>
                <div style={{ background: '#FFEB00', color: 'black', padding: '6px 16px', borderRadius: 999, fontSize: 16, fontWeight: 800, fontFamily: F.display, border: '2px solid white', alignSelf: 'flex-start', marginLeft: 20, boxShadow: '2px 2px 0 rgba(0,0,0,0.2)', width: 'max-content' }}>
                  something for you
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BRANDING SECTION */}
      <section style={{ paddingTop: isMobile ? '40px' : '80px', background: T.ink, position: 'relative', borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}` }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', textAlign: 'center', marginBottom: 0, padding: '0 20px' }}>
          {!isMobile && (
            <>
              <SPStar size={40} color={T.popB} rotate={-15} top="-10%" left="15%" />
              <SPStatusSticker T={T} F={F} top="20%" left="5%" rotate={-6} variant="tape" tape={T.popA} bg={butter} icon="✦" label="Identity" name="Design" iconBg={T.ink} size="sm" zIndex={10} />

              <SPStar size={30} color={T.popC} rotate={25} top="10%" right="10%" />
              <SPStatusSticker T={T} F={F} top="-5%" right="15%" rotate={8} variant="square" bg={lilac} icon="❤" label="Vibe" name="Check" iconBg={T.popB} size="sm" zIndex={10} />
            </>
          )}

          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 600, letterSpacing: '-0.02em', margin: 0, color: T.paper }}>
            Brand <span style={{ fontFamily: F.italic, fontStyle: 'italic', color: T.popB, fontWeight: 400 }}>identity.</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: isMobile ? 16 : 20, color: T.paper, opacity: 0.8, maxWidth: 600, margin: '20px auto 0' }}>
            We build visual worlds that <span style={{ color: T.popA, fontWeight: 'bold' }}>stand out</span>, ensuring every touchpoint feels unmistakably you.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1, marginTop: isMobile ? -20 : -60 }}>
          <img
            src={isMobile ? '/uploads/phone_branding.png' : isTablet ? '/uploads/tablet_branding.png' : '/uploads/desktop_branding.png'}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            alt="Branding"
          />
        </div>
      </section>

      {/* 4. FLOATING CAROUSEL WITH LOGOS (Dark Mode) */}
      <section style={{ padding: '80px 0', background: '#000', overflow: 'hidden', position: 'relative' }}>
        <SPNoise T={T} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: 32, whiteSpace: 'nowrap', animation: 'marqueeRight 40s linear infinite', width: 'max-content', padding: '20px 0' }}>
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {logoImages.map((item, idx) => (
                <div key={idx} style={{
                  width: 280,
                  height: 280,
                  borderRadius: 20,
                  background: '#0a0a0a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `rotate(${item.rotate}deg)`,
                  border: '1px solid #1a1a1a',
                  flexShrink: 0,
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = `scale(1.05) rotate(0deg)`; 
                  e.currentTarget.style.zIndex = 10;
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                  e.currentTarget.style.borderColor = '#333';
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = `rotate(${item.rotate}deg) scale(1)`; 
                  e.currentTarget.style.zIndex = 1;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#1a1a1a';
                }}
                >
                  <img src={item.src} style={{ maxWidth: '65%', maxHeight: '65%', objectFit: 'contain' }} alt="Brand Logo" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 5. WORK EXPERIENCE & VIDEO CAROUSEL */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', position: 'relative' }}>
        <div style={{ maxWidth: 800, margin: '0 auto 60px auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h3 style={{ fontFamily: F.display, fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.2, fontWeight: 500, letterSpacing: '-0.02em' }}>
            We take a <span style={{ color: T.popA, fontFamily: F.italic, fontStyle: 'italic' }}>creative-first</span> approach to everything we make, from storytelling, editing styles, to trying new formats. Our work blends strong visuals with clear messaging.
          </h3>
        </div>

        <div className="no-scrollbar" style={{ overflowX: 'auto', display: 'flex', gap: 24, paddingTop: 20, paddingBottom: 20, scrollSnapType: 'x mandatory', position: 'relative', zIndex: 2 }}>
          {[
            { color: mint, title: "Social", youtubeId: "Pymp9-kEBt4" },
            { color: lilac, title: "Campaigns", youtubeId: "k194wHZHjB0" },
            { color: sky, title: "Storytelling", youtubeId: "xCl2gndzFqE" },
            { color: butter, title: "Brand", youtubeId: "AydS-vA3qa4" },
            { color: peach, title: "Culture", youtubeId: "N0pwLtonPdg" }
          ].map((v, i) => (
            <div key={i} style={{
              minWidth: isMobile ? '75vw' : '320px',
              height: isMobile ? '60vh' : '480px',
              scrollSnapAlign: 'center',
              border: `1px solid ${T.ink}`,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: `6px 6px 0 ${T.ink}`,
              background: v.color,
              padding: 16,
              position: 'relative',
              transition: 'transform 0.3s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ position: 'absolute', top: 24, left: 24, zIndex: 10, background: T.paper, border: `1px solid ${T.ink}`, padding: '4px 12px', borderRadius: 999, fontSize: 11, letterSpacing: '0.1em', fontWeight: 'bold' }}>{v.title}</div>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${T.ink}`, height: '100%', position: 'relative', zIndex: 2, background: T.ink }}>
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${v.youtubeId}&controls=1`} style={{ width: '100%', height: '100%', transform: 'scale(1.05)', border: 'none' }} frameBorder="0" allow="autoplay; fullscreen" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CATEGORIES (Sleek Cards) */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.paper, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, position: 'relative' }}>
        <SPNoise T={T} />
        <SPSectionHead T={T} F={F} num="§ 03 / Categories" title="Our" titleIt="domains." dek="Specific areas we excel at." />

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 24, marginTop: 60, maxWidth: 1400, margin: '60px auto 0' }}>
          {[
            { title: 'Social Media', desc: 'TikTok, Reels, Shorts. The algorithms love us.', icon: '✦', bg: mint, dark: false },
            { title: 'Talking Heads', desc: 'Direct, clear, authentic communication.', icon: '◉', bg: T.ink, dark: true },
            { title: 'Corporates', desc: 'Professional, but never boring.', icon: '■', bg: butter, dark: false },
            { title: 'Promotion', desc: 'Campaigns that convert and look stunning.', icon: '▲', bg: peach, dark: false },
          ].map((card, idx) => (
            <div key={idx} style={{
              background: card.bg,
              border: `1px solid ${T.ink}`,
              borderRadius: 24,
              padding: '32px 24px',
              position: 'relative',
              color: card.dark ? T.paper : T.ink,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: `4px 4px 0 ${T.ink}`,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `8px 8px 0 ${T.ink}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `4px 4px 0 ${T.ink}`; }}>
              
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: '50%', 
                background: card.dark ? T.paper : T.ink, 
                color: card.dark ? T.ink : T.paper, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: 24, 
                marginBottom: 24,
                border: `1px solid ${card.dark ? T.paper : T.ink}`
              }}>
                {card.icon}
              </div>

              <h4 style={{ margin: '0 0 12px 0', fontFamily: F.display, fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.1, fontWeight: 600 }}>{card.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: 15, opacity: 0.85, margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. POSTER CAROUSEL */}
      <section style={{ padding: isMobile ? '60px 0' : '80px 0', overflow: 'hidden', background: T.paper, position: 'relative' }}>
        <SPNoise T={T} />
        <div className="no-scrollbar" style={{ overflowX: 'auto', display: 'flex', gap: 24, padding: isMobile ? '20px 20px 20px 20px' : '20px 40px 20px 40px', scrollSnapType: 'x mandatory' }}>
          {carouselPosters.map((img, idx) => (
            <div key={idx} style={{
              height: isMobile ? '42vh' : '336px',
              width: 'max-content',
              border: `1px solid ${T.ink}`,
              borderRadius: 16,
              background: T.ink,
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: `6px 6px 0 ${T.ink}`,
              scrollSnapAlign: 'center',
              position: 'relative',
              transition: 'transform 0.3s ease',
              display: 'flex'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <img src={img} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} alt="Poster" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHY US? SECTION (Sleek List) */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.ink, color: T.paper, position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: 60, textAlign: 'center' }}>
            <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0 }}>
              Why <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>us.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 24 }}>
            {whyUsList.map((item, i) => (
              <div key={i} style={{
                padding: '32px',
                border: `1px solid ${T.paper}`,
                borderRadius: 20,
                background: item.bg,
                color: T.ink,
                boxShadow: `4px 4px 0 ${T.paper}`,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontFamily: F.body, fontSize: 12, fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: 16, opacity: 0.6 }}>{item.n}</div>
                  <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', margin: '0 0 12px 0', fontFamily: F.display, lineHeight: 1.1 }}>{item.h}</h3>
                  <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5, fontSize: 16, fontFamily: F.italic, fontStyle: 'italic' }}>{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LET'S WORK SECTION (CTA) */}
      <section style={{ padding: isMobile ? '80px 20px' : '140px 40px', background: butter, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SPStar size={80} color={T.popB} rotate={15} top={40} right={isMobile ? -20 : 60} />
        <SPStar size={60} color={T.popA} rotate={-20} bottom={isMobile ? 20 : 120} left={isMobile ? -20 : 60} />
        <SPNoise T={T} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, fontFamily: F.body, marginBottom: 24 }}>§ 05 / Let's talk</div>
          <SPParallax speed={0.06}>
            <h2 style={{ fontFamily: F.display, fontSize: 'clamp(48px, 10vw, 120px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0, color: T.ink }}>
              Let's <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>make</span><br />something.
            </h2>
          </SPParallax>
          <Link to="/contact" style={{ display: 'inline-flex', gap: 12, marginTop: 40, padding: '20px 32px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, fontFamily: F.body, textDecoration: 'none', border: `1px solid ${T.ink}`, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>hello@blackspace.media →</Link>
        </div>
      </section>

      {/* 10. FOOTER */}
      <SPFooter T={T} F={F} />
    </div>
  );
}
