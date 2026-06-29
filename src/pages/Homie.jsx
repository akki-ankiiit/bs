import React from 'react';
import { Link } from 'react-router-dom';
import { SPNoise, SPFooter, SPVideoCarousel, SPSectionHead, SPNav, SPStatusSticker, SPStar, SPParallax } from '../components/SPKit';
import { useBreakpoints } from '../hooks';
import Lenis from 'lenis';
import { PosterCarousel } from '../components/PosterCarousel';
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

export default function Homie({ themeKey = 'classic', typeKey = 'allHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const { isMobile, isTablet } = useBreakpoints();

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
    { title: "Social Media Strategy", bg: T.paper, col: 4, row: 2, big: true, badge: 'CORE', dek: 'Scaling communities with culture-first content.' },
    { title: "Content Creation", bg: butter, col: 4, row: 1, dek: 'Scripts, shoots, cuts.' },
    { title: "Brand Identity", bg: T.paper, col: 4, row: 1, dek: 'Marks that last.' },
    { title: "Digital Experiences", bg: butter, col: 4, row: 1, dek: 'Websites & apps.' },
    { title: "Campaign Concepts", bg: T.paper, col: 4, row: 1, dek: 'The big ideas.' },
    { title: "Creative Production", bg: butter, col: 4, row: 2, dek: 'Full-service execution from pre to post.' }
  ];

  const whyUsList = [
    { n: '01', h: 'Young team, sharp taste', b: 'We know what looks good and what works right now.', bg: mint },
    { n: '02', h: 'Communication-driven', b: 'Clear, transparent, and frequent updates. No radio silence.', bg: lilac },
    { n: '03', h: 'Speed without compromise', b: 'Fast turnarounds because we hate waiting as much as you do.', bg: sky },
    { n: '04', h: 'We speak the internet', b: 'Trend-aware, culturally plugged in, extremely online.', bg: peach },
    { n: '05', h: 'Full creative control', b: 'You don\'t have to micromanage. We bring the vision to life.', bg: butter },
    { n: '06', h: 'Zero boring ideas', b: 'If it\'s not interesting, we don\'t make it.', bg: T.paper }
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
              <p style={{ margin: 0 }}>We're creative-first, not brief-first. Every story, edit, and format gets pushed until it's actually worth watching, Visuals that hit, messaging that's clear, nothing safe in between.</p>
            </SPParallax>

            <SPParallax speed={0.06} style={{ ...heroBlock, order: 3, textAlign: isMobile ? 'center' : 'right', flex: 1 }}>
              <div style={heroBlockHead}>(2) Discover ↓</div>
              <p style={{ margin: 0 }}>Creative-first, always. We don't make content to fill a calendar, we make it to be watched, shared, and remembered.</p>
            </SPParallax>
          </div>
        </div>
      </section>

      {/* 2. WHAT DO WE DO SECTION (Custom Layout from Image) */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 40px', background: '#FAF9F6', color: T.ink, position: 'relative', overflow: 'hidden' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: isMobile ? 32 : 48, textAlign: 'center', letterSpacing: '-0.02em', marginTop: 10 }}>
              <div style={{ color: T.ink, fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, transition: 'color 0.3s, transform 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.color = T.popC; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.color = T.ink; e.currentTarget.style.transform = 'scale(1)'; }}>Social Media</div>
              <div style={{ color: T.ink, fontFamily: F.display, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85em', letterSpacing: '0.02em', transition: 'color 0.3s, transform 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.color = T.popB; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.color = T.ink; e.currentTarget.style.transform = 'scale(1)'; }}>Content Strategy</div>
              <div style={{ color: T.ink, fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, transition: 'color 0.3s, transform 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.color = T.popA; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.color = T.ink; e.currentTarget.style.transform = 'scale(1)'; }}>Brand Identity</div>
              <div style={{ color: T.ink, fontFamily: F.display, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85em', letterSpacing: '0.02em', transition: 'color 0.3s, transform 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.color = T.popC; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.color = T.ink; e.currentTarget.style.transform = 'scale(1)'; }}>Websites & Design</div>
              <div style={{ color: T.ink, fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, transition: 'color 0.3s, transform 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.color = T.popB; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.color = T.ink; e.currentTarget.style.transform = 'scale(1)'; }}>Creative Production</div>
              <div style={{ color: T.ink, fontFamily: F.display, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85em', letterSpacing: '0.02em', transition: 'color 0.3s, transform 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.color = T.popA; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.color = T.ink; e.currentTarget.style.transform = 'scale(1)'; }}>Campaign Concepts</div>
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

        {/* Logo ticker merged into branding section */}
        <div style={{ overflow: 'hidden', position: 'relative', paddingBottom: 32 }}>
          <SPNoise T={T} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: 20, whiteSpace: 'nowrap', animation: 'marqueeRight 40s linear infinite', width: 'max-content', padding: '8px 0' }}>
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                {logoImages.map((item, idx) => (
                  <div key={idx} style={{
                    width: isMobile ? 100 : 168,
                    height: isMobile ? 100 : 168,
                    borderRadius: isMobile ? 12 : 14,
                    background: '#111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `rotate(${item.rotate}deg)`,
                    border: '1px solid #222',
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
        </div>
      </section>

      {/* 5. WORK EXPERIENCE & VIDEO CAROUSEL */}
      <section style={{ padding: isMobile ? '60px 20px 10px' : '60px 40px 20px', position: 'relative' }}>
        <div style={{ maxWidth: 800, margin: '0 auto 24px auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: '0 0 16px 0', color: T.ink }}>
            Work <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>Experience.</span>
          </h2>
          <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.4, fontWeight: 400, color: T.ink, opacity: 0.9, maxWidth: 800, margin: '0 auto' }}>
            We take a <span style={{ color: T.popA, fontFamily: F.display, fontStyle: 'normal', fontWeight: 600, letterSpacing: '-0.02em' }}>creative-first</span> approach to everything we make, from storytelling, editing styles, to trying new formats. Our work blends strong visuals with clear messaging.
          </p>
        </div>

        <SPVideoCarousel
          T={T}
          F={F}
          items={[
            { category: "Social", title: "Social Storytelling", vid: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000" },
            { category: "Campaigns", title: "Brand Anthem", vid: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000" },
            { category: "Storytelling", title: "Mini Doc", vid: "https://media.w3.org/2010/05/bunny/trailer.mp4", poster: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1000" },
            { category: "Brand", title: "Product Launch", vid: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000" },
            { category: "Culture", title: "Culture Reel", vid: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1000" },
            { category: "Lifestyle", title: "Urban Flow", vid: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000" },
            { category: "Cinematic", title: "Desert Wind", vid: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1000" },
            { category: "Vlog", title: "Neon Nights", vid: "https://media.w3.org/2010/05/bunny/trailer.mp4", poster: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=1000" },
            { category: "Music", title: "Quiet Morning", vid: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000" },
            { category: "Nature", title: "Golden Hour", vid: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1506744626753-143d60235882?auto=format&fit=crop&q=80&w=1000" },
            { category: "Automotive", title: "Night Drive", vid: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000" },
            { category: "Travel", title: "City Lights", vid: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4", poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" }
          ]}
        />
      </section>

      {/* 6. DOMAINS */}
      <section style={{ overflow: 'hidden', background: '#E4E4E4', color: T.ink, position: 'relative', padding: isMobile ? '40px 0 20px' : '60px 0 40px', zIndex: 1 }}>
        <SPNoise T={T} intensity="card" />

        <div style={{ padding: isMobile ? '0 20px' : '0 40px', position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto' }}>

          <div style={{ marginBottom: isMobile ? -20 : -60 }}>
            <SPSectionHead
              T={T}
              F={F}
              num="§ 03 / Categories"
              title="Our"
              titleIt={<span style={{ color: T.popA, paddingRight: '8px' }}>domains.</span>}
              dek="Specific areas we excel at."
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 24, marginTop: 24, marginBottom: 0 }}>
            {[
              { title: 'Content Production', desc: 'Scripted, shot, edited, ready to post.', thumbnail: '/uploads/domain_new_1.png', bg: mint, path: '/domain/social-media' },
              { title: 'Campaign Strategy', desc: 'The ideas that help you outshine.', thumbnail: '/uploads/domain_new_2.jpg', bg: sky, path: '/domain/talking-heads' },
              { title: 'Editing', desc: 'Raw footage in. Magic out.', thumbnail: '/uploads/domain_new_3.png', bg: butter, path: '/domain/corporates' },
              { title: 'Branding', desc: 'Looks good. Sounds like you.', thumbnail: '/uploads/domain_new_4.jpg', bg: peach, path: '/domain/promotion' },
            ].map((card, idx) => {
              return (
                <Link to={card.path} key={idx} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: card.bg,
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: 24,
                    padding: 24,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    color: T.ink,
                    overflow: 'hidden'
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 0 24px ${card.bg}, 0 30px 60px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)`;
                      if (e.currentTarget.querySelector('.inner-img')) e.currentTarget.querySelector('.inner-img').style.transform = 'scale(1.05)';
                      if (e.currentTarget.querySelector('.arrow-btn')) {
                        e.currentTarget.querySelector('.arrow-btn').style.transform = 'translateX(0)';
                        e.currentTarget.querySelector('.arrow-btn').style.opacity = '1';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.4)';
                      if (e.currentTarget.querySelector('.inner-img')) e.currentTarget.querySelector('.inner-img').style.transform = 'scale(1)';
                      if (e.currentTarget.querySelector('.arrow-btn')) {
                        e.currentTarget.querySelector('.arrow-btn').style.transform = 'translateX(-10px)';
                        e.currentTarget.querySelector('.arrow-btn').style.opacity = '0';
                      }
                    }}>

                    {/* Massive Background Number */}
                    <div style={{
                      position: 'absolute',
                      top: -20,
                      right: -10,
                      fontFamily: F.display,
                      fontSize: 180,
                      fontWeight: 800,
                      color: T.ink,
                      opacity: 0.03,
                      lineHeight: 0.8,
                      pointerEvents: 'none',
                      zIndex: 0
                    }}>
                      {idx + 1}
                    </div>

                    {/* Inner Image Frame (Portrait) */}
                    <div style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      borderRadius: 16,
                      boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                      overflow: 'hidden',
                      position: 'relative',
                      zIndex: 2,
                      background: card.bg
                    }}>
                      <img className="inner-img" src={card.thumbnail} alt={card.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }} />
                      <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', color: T.ink, padding: '6px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, zIndex: 2, position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                        <h4 style={{ margin: 0, fontFamily: F.display, fontSize: 'clamp(22px, 2.5vw, 28px)', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-0.02em', maxWidth: '85%' }}>
                          {card.title}
                        </h4>
                        <div className="arrow-btn" style={{
                          width: 32,
                          height: 32,
                          borderRadius: 16,
                          background: T.ink,
                          color: T.paper,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transform: 'translateX(-10px)',
                          transition: 'all 0.3s ease',
                          fontWeight: 'bold',
                          fontSize: 18
                        }}>
                          ↗
                        </div>
                      </div>
                      <p style={{ fontFamily: F.body, fontSize: 15, opacity: 0.75, margin: 0, lineHeight: 1.5, fontWeight: 400 }}>{card.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 & 8. POSTER CAROUSEL & WHY US MERGED */}
      <section style={{ overflow: 'hidden', background: '#F0F0F0', color: T.ink, position: 'relative', padding: isMobile ? '0 0 20px' : '0 0 20px', zIndex: 1 }}>
        <SPNoise T={T} intensity="card" />

        {/* 7. POSTER CAROUSEL */}
        <PosterCarousel items={carouselPosters} />

        {/* WHY US */}
        <div style={{ position: 'relative', zIndex: 2, height: isMobile ? 'auto' : 500, paddingBottom: isMobile ? 40 : 0, margin: '0 auto', marginTop: isMobile ? 80 : 20, width: '100%', maxWidth: 1200 }}>

          <style>{`
            @keyframes orbitFloat {
              0% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(8px, -12px) rotate(1.5deg); }
              66% { transform: translate(-6px, 8px) rotate(-1deg); }
              100% { transform: translate(0, 0) rotate(0deg); }
            }
          `}</style>

          <div style={{ position: isMobile ? 'relative' : 'absolute', top: isMobile ? 'auto' : '50%', left: isMobile ? 'auto' : '50%', transform: isMobile ? 'none' : 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10, width: '100%', marginBottom: isMobile ? 32 : 0, marginTop: isMobile ? 24 : 0 }}>
            <h2 style={{ fontFamily: F.display, fontSize: 'clamp(50px, 12vw, 140px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0, color: T.ink, textShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              Why <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>us.</span>
            </h2>
          </div>

          {isMobile && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, padding: '0 20px', position: 'relative', zIndex: 11 }}>
              {whyUsList.map((item, i) => (
                <div key={i} style={{
                  background: item.bg,
                  border: '1px solid rgba(0,0,0,0.1)',
                  padding: '8px 16px',
                  borderRadius: 999,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ width: 20, height: 20, borderRadius: 10, background: 'rgba(255,255,255,0.8)', color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.display, fontWeight: 700, fontSize: 10 }}>
                    {item.n}
                  </div>
                  <h3 style={{ margin: 0, fontFamily: F.display, fontWeight: 600, fontSize: 13, letterSpacing: '-0.02em' }}>
                    {item.h}
                  </h3>
                </div>
              ))}
            </div>
          )}
          {!isMobile && whyUsList.map((item, i) => {
            // Placement mimicking the reference image:
            // 0: Top Center, 1: Mid-Top Left, 2: Mid-Bottom Left
            // 3: Mid-Top Right, 4: Mid-Bottom Right, 5: Bottom Center
            const desktopCoords = [
              { top: '23%', left: '50%', transform: 'translateX(-50%)' }, // Top Center
              { top: '35%', right: 'calc(50% + 220px)' }, // Mid-Top Left
              { top: '60%', right: 'calc(50% + 220px)' }, // Mid-Bottom Left
              { top: '35%', left: 'calc(50% + 220px)' },  // Mid-Top Right
              { top: '60%', left: 'calc(50% + 220px)' },  // Mid-Bottom Right
              { bottom: '20%', left: '50%', transform: 'translateX(-50%)' } // Bottom Center
            ];

            const coords = desktopCoords[i];
            const delay = i * 0.8;

            return (
              <div key={i} style={{ position: 'absolute', zIndex: 20, ...coords }}>
                <div style={{
                  padding: '12px 24px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 999,
                  background: item.bg,
                  color: T.ink,
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06), inset 0 2px 4px rgba(255,255,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  cursor: 'pointer',
                  animation: `orbitFloat 7s ease-in-out infinite ${delay}s`
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12), inset 0 2px 4px rgba(255,255,255,0.6)';
                    e.currentTarget.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06), inset 0 2px 4px rgba(255,255,255,0.4)';
                    e.currentTarget.style.animationPlayState = 'running';
                  }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: 'rgba(255,255,255,0.8)', color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.display, fontWeight: 700, fontSize: 13 }}>
                    {item.n}
                  </div>
                  <h3 style={{ margin: 0, fontFamily: F.display, fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                    {item.h}
                  </h3>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 9. LET'S WORK SECTION (CTA) */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 40px', background: butter, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}`, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SPStar size={80} color={T.popB} rotate={15} top={40} right={isMobile ? -20 : 60} />
        <SPStar size={60} color={T.popA} rotate={-20} bottom={isMobile ? 20 : 120} left={isMobile ? -20 : 60} />
        <SPNoise T={T} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, fontFamily: F.body, marginBottom: 24 }}>§ 05 / Let's talk</div>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(48px, 10vw, 120px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0, color: T.ink }}>
            You got a <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>brief,</span><br />We got an idea.
          </h2>
          <Link to="/contact" style={{ display: 'inline-flex', gap: 12, marginTop: isMobile ? 40 : 80, padding: isMobile ? '16px 24px' : '20px 32px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', textDecoration: 'none', border: `1px solid ${T.ink}`, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>hello@blackspace.media →</Link>
        </div>
      </section>

      {/* 10. FOOTER */}
      <SPFooter T={T} F={F} />
    </div>
  );
}
