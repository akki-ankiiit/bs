import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SPNav, SPFooter, SPNoise, SPSectionHead, SPVideoCarousel, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPParallax } from '../components/SPKit';
import { useBreakpoints } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';
import { Target, Calendar, Lightbulb, Map, Rocket, Megaphone, Sprout, BarChart, Smartphone, Play, Mic, User, Tv, BookOpen, Sparkles, PenTool, Music, Image as ImageIcon, Bot, TrendingUp, RefreshCw, Search, Brain, Settings, FileText, CheckCircle, Monitor, Globe, UserSquare, MousePointerClick, Check } from 'lucide-react';


export default function SPServiceDetail({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  // Read query params safely and idiomatic to React Router
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get('id') || 'video-edits';

  const serviceData = {
    'content-campaigns': { name: 'Content Campaigns', bg: T.paper, color: T.ink, dek: 'End-to-end. Concept, script, shoot, cut, post. One team, no handoffs, no blame.', sticker: mint },
    'scripts': { name: 'Scripts', bg: lilac, color: T.ink, dek: 'Reels, ads, explainers. Words that sound like someone said them.', sticker: butter },
    'video-edits': { name: 'Video Edits', bg: sky, color: T.ink, dek: 'Tight cuts, honest grades, music that earns its place.', sticker: peach },
    'ai-workflows': { name: 'AI Workflows', bg: mint, color: T.ink, dek: 'Drafts, variants, dubs, b-roll — on tap.', sticker: lilac },
    'brand-identity': { name: 'Brand Identity', bg: butter, color: T.ink, dek: 'Marks, type, guidelines.', sticker: lilac },
    'websites-social': { name: 'Websites & Social', bg: peach, color: T.ink, dek: 'Framer, reels, management.', sticker: sky }
  };

  const data = serviceData[slug] || serviceData['video-edits'];

  // Pinterest format placeholder video images
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

  // Carousel State
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

  const renderVideoEditsLayout = () => (
    <React.Fragment>
      {/* Coverflow Video Carousel */}
      <SPVideoCarousel T={T} F={F} items={carouselItems} title="Hero" titleIt="Reels." dek="Click cards to bring them into focus." bg={T.ink} textColor={T.paper} />

      {/* Pinterest Masonry Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
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

                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)', pointerEvents: 'none' }}></div>

                {/* Center Play Button */}
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
    </React.Fragment>
  );

  const renderBespokeLayout = () => {
    const CONTENT = {
      'content-campaigns': {
        hero: { t1: 'Content Campaigns That Create ', hl: 'Attention,', t2: 'Not Just Posts.', sub: 'We build content systems designed to launch products, grow communities, and keep your brand consistently visible across platforms.', cta: 'Start a Campaign →', color: mint },
        wwd: { t: 'What We Do', sub: 'A content campaign is more than posting regularly.', text: 'We create strategic content ecosystems that connect your business goals with audience behavior, ensuring every piece of content serves a purpose.' },
        deliv: {
          t: 'Deliverables', items: [
            { t: "Campaign Strategy", c: mint, i: Target, span: 2 }, { t: "Content Calendar", c: lilac, i: Calendar, span: 1 }, { t: "Creative Concepts", c: butter, i: Lightbulb, span: 1 }, { t: "Platform Planning", c: sky, i: Map, span: 2 }, { t: "Launch Campaigns", c: peach, i: Rocket, span: 2 }, { t: "Product Awareness", c: butter, i: Megaphone, span: 1 }, { t: "Community Growth", c: mint, i: Sprout, span: 1 }, { t: "Performance Reporting", c: lilac, i: BarChart, span: 2 }
          ]
        },
        process: { t: 'Method', title: 'Our Process.', items: [{ t: "Research & Positioning", c: lilac }, { t: "Campaign Planning", c: butter }, { t: "Content Production", c: sky }, { t: "Distribution", c: peach }, { t: "Optimization", c: mint }] },
        results: { t: 'The Results', items: [{ t: "Stronger brand visibility", c: mint }, { t: "Better audience engagement", c: lilac }, { t: "Consistent growth", c: peach }, { t: "Higher conversion opportunities", c: butter }] }
      },
      'scripts': {
        hero: { t1: 'Stories Designed To ', hl: 'Hold Attention.', t2: '', sub: 'We write scripts that transform ideas into engaging content for social media, ads, YouTube, podcasts, and brand films.', cta: 'Get a Script →', color: lilac },
        wwd: { t: 'What We Do', sub: 'Every great piece of content starts with a strong narrative.', text: 'Our team develops scripts that capture attention within seconds and maintain engagement throughout the entire experience.' },
        deliv: {
          t: 'Deliverables', items: [
            { t: "Reels Scripts", c: sky, i: Smartphone, span: 1 }, { t: "YouTube Scripts", c: peach, i: Play, span: 2 }, { t: "Podcast Outlines", c: lilac, i: Mic, span: 1 },
            { t: "Founder Videos", c: mint, i: User, span: 1 }, { t: "Ad Scripts", c: butter, i: Tv, span: 1 }, { t: "Launch Scripts", c: sky, i: Rocket, span: 2 },
            { t: "Brand Storytelling", c: peach, i: BookOpen, span: 4 }
          ]
        },
        process: { t: 'Method', title: 'Script Framework.', items: [{ t: "Hook", c: mint }, { t: "Problem", c: sky }, { t: "Insight", c: butter }, { t: "Solution", c: lilac }, { t: "Call-To-Action", c: peach }] },
        results: { t: 'Ideal For', items: [{ t: "Founders", c: mint }, { t: "Creators", c: lilac }, { t: "Startups", c: sky }, { t: "Agencies & Brands", c: butter }] }
      },
      'video-edits': {
        hero: { t1: 'Editing That Makes Content Feel ', hl: 'Premium.', t2: '', sub: 'We transform raw footage into polished visual stories designed for engagement and performance.', cta: 'Edit My Content →', color: peach },
        wwd: { t: 'What We Do', sub: 'Every cut serves a purpose.', text: 'Our editing process combines storytelling, motion design, pacing, and platform-specific optimization.' },
        deliv: {
          t: 'Deliverables', items: [
            { t: "Short Form Reels", c: butter, i: Smartphone, span: 2 }, { t: "YouTube Videos", c: sky, i: Play, span: 1 }, { t: "Commercial Edits", c: lilac, i: Tv, span: 1 },
            { t: "Motion Graphics", c: mint, i: Sparkles, span: 1 }, { t: "Captions", c: peach, i: FileText, span: 1 }, { t: "Sound Design", c: butter, i: Music, span: 2 },
            { t: "Color Grading", c: sky, i: PenTool, span: 2 }, { t: "Thumbnail Support", c: lilac, i: ImageIcon, span: 2 }
          ]
        },
        process: { t: 'Method', title: 'Editing Styles.', items: [{ t: "Luxury", c: lilac }, { t: "Minimal", c: mint }, { t: "Documentary", c: sky }, { t: "Fast-Paced Social", c: butter }, { t: "Corporate", c: peach }] },
        results: { t: 'Outcomes', items: [{ t: "Higher watch time", c: mint }, { t: "Better retention", c: sky }, { t: "Professional perception", c: lilac }, { t: "Increased engagement", c: peach }] }
      },
      'ai-workflows': {
        hero: { t1: 'Automate Repetitive Work. ', hl: 'Scale', t2: ' Creative Output.', sub: 'We design AI-powered systems that save time, reduce manual effort, and improve business efficiency.', cta: 'Build My Workflow →', color: sky },
        wwd: { t: 'What We Do', sub: 'From content generation to lead management, we help teams work smarter.', text: 'Blackspace creates custom AI workflows tailored to your business operations.' },
        deliv: {
          t: 'Deliverables', items: [
            { t: "AI Content Systems", c: mint, i: Bot, span: 2 }, { t: "Lead Automation", c: sky, i: TrendingUp, span: 2 },
            { t: "CRM Integrations", c: lilac, i: RefreshCw, span: 1 }, { t: "Reporting Dashboards", c: peach, i: BarChart, span: 1 }, { t: "Research Automation", c: butter, i: Search, span: 2 },
            { t: "Knowledge Systems", c: sky, i: Brain, span: 2 }, { t: "Process Automation", c: mint, i: Settings, span: 2 }
          ]
        },
        process: { t: 'Method', title: 'Workflow Examples.', items: [{ t: "Idea → Script → Publish", c: butter }, { t: "Lead → Qualify → CRM", c: sky }, { t: "Meeting → Notes → Task", c: lilac }] },
        results: { t: 'Benefits', items: [{ t: "Save Hours Weekly", c: mint }, { t: "Reduce Human Errors", c: sky }, { t: "Faster Execution", c: lilac }, { t: "Scalable Operations", c: butter }] }
      },
      'brand-identity': {
        hero: { t1: 'Build A Brand People ', hl: 'Remember.', t2: '', sub: 'We create visual identities that communicate credibility, personality, and market positioning.', cta: 'Build My Brand →', color: butter },
        wwd: { t: 'What We Do', sub: 'A brand is more than a logo.', text: 'We design complete identity systems that help businesses appear consistent across every touchpoint.' },
        deliv: {
          t: 'Deliverables', items: [
            { t: "Logo Design", c: peach, i: Target, span: 1 }, { t: "Brand Strategy", c: lilac, i: Brain, span: 2 }, { t: "Color System", c: mint, i: PenTool, span: 1 },
            { t: "Typography System", c: sky, i: FileText, span: 2 }, { t: "Brand Guidelines", c: butter, i: BookOpen, span: 2 },
            { t: "Visual Language", c: lilac, i: UserSquare, span: 2 }, { t: "Brand Assets", c: peach, i: ImageIcon, span: 2 }
          ]
        },
        process: { t: 'Method', title: 'Identity Framework.', items: [{ t: "Positioning", c: lilac }, { t: "Personality", c: butter }, { t: "Visual Direction", c: mint }, { t: "Brand System", c: sky }, { t: "Launch", c: peach }] },
        results: { t: 'Outcomes', items: [{ t: "Professional perception", c: mint }, { t: "Strong recognition", c: sky }, { t: "Consistent communication", c: lilac }, { t: "Better trust", c: butter }] }
      },
      'websites-social': {
        hero: { t1: 'Digital Experiences Designed For ', hl: 'Growth.', t2: '', sub: 'From websites to social presence, we build digital ecosystems that convert attention into action.', cta: 'Start Your Project →', color: mint },
        wwd: { t: 'What We Do', sub: 'We create websites and social media systems that work together to strengthen your online presence.', text: 'Your digital ecosystem is your most important asset.' },
        deliv: {
          t: 'Deliverables', items: [
            { t: "Websites", c: sky, i: Globe, span: 2 }, { t: "Landing Pages", c: butter, i: MousePointerClick, span: 1 }, { t: "Portfolio Sites", c: peach, i: ImageIcon, span: 1 },
            { t: "Profile Design", c: lilac, i: User, span: 1 }, { t: "Social Branding", c: mint, i: Sparkles, span: 2 }, { t: "Content Templates", c: sky, i: Smartphone, span: 1 },
            { t: "Conversion Design", c: butter, i: CheckCircle, span: 2 }, { t: "Responsive Dev", c: lilac, i: Monitor, span: 2 }
          ]
        },
        process: { t: 'Method', title: 'Process.', items: [{ t: "Strategy", c: mint }, { t: "Design", c: sky }, { t: "Development", c: lilac }, { t: "Launch", c: butter }, { t: "Growth", c: peach }] },
        results: { t: 'Outcomes', items: [{ t: "Better first impressions", c: mint }, { t: "Increased credibility", c: sky }, { t: "Higher conversion rates", c: lilac }, { t: "Stronger digital presence", c: butter }] }
      }
    };

    const d = CONTENT[slug] || CONTENT['content-campaigns'];

    return (
      <React.Fragment>
        {/* Bespoke Hero */}
        <section style={{ 
          position: 'relative', 
          padding: isMobile ? '160px 20px 80px' : `220px 40px ${slug === 'video-edits' ? 80 : 140}px`, 
          background: data.bg, 
          color: data.color, 
          minHeight: slug === 'video-edits' ? 'auto' : '75vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden' 
        }}>
          <SPStatusSticker T={T} F={F} top={isMobile ? 90 : isTablet ? 120 : 140} right={isMobile ? 10 : isTablet ? 40 : '10%'} rotate={8} variant="tape" tape={T.popB} bg={d.hero.color} icon="+" iconBg={T.ink} label="Service" name={data.name} zIndex={5} scale={isMobile ? 0.6 : isTablet ? 0.75 : 1} />
          <SPStar size={isMobile ? 40 : isTablet ? 60 : 80} color={T.popA} rotate={-15} bottom={isMobile ? 40 : isTablet ? 80 : 120} left={isMobile ? 20 : isTablet ? 40 : '10%'} zIndex={5} />

          {slug === 'video-edits' && !isMobile && (
            <>
              <SPStatusSticker T={T} F={F} top={isTablet ? 100 : 160} left={isTablet ? 20 : '15%'} rotate={-5} variant="torn" bg={sky} icon="▶" iconBg={T.ink} label="Format" name="Short Form" size="sm" zIndex={10} scale={isTablet ? 0.7 : 0.9} />
              <SPStatusSticker T={T} F={F} bottom={isTablet ? 60 : 100} right={isTablet ? 20 : '18%'} rotate={12} variant="square" bg={peach} icon="✂" iconBg={T.ink} label="Status" name="Cutting" size="sm" zIndex={10} scale={isTablet ? 0.7 : 0.9} />
            </>
          )}
          <SPParallax speed={0.04}>
            <h1 style={{ fontFamily: F.display, fontSize: 'clamp(48px, 9vw, 130px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: '0 auto', maxWidth: 1100 }}>
              {d.hero.t1}<span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>{d.hero.hl}</span><br />{d.hero.t2}
            </h1>
          </SPParallax>
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, position: 'relative', zIndex: 10 }}>
            <p style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', lineHeight: 1.5, opacity: 0.85, margin: '0 auto', maxWidth: 640 }}>
              {d.hero.sub}
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', padding: '20px 44px', background: data.color, color: data.bg, borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 24px rgba(0,0,0,0.15)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>{d.hero.cta}</Link>
          </div>
        </section>

        {/* Render Video Edits visual portfolio if needed */}
        {slug === 'video-edits' && renderVideoEditsLayout()}

        {/* What We Do */}
        <section style={{ padding: isMobile ? '80px 20px' : '160px 40px', background: T.paper, color: T.ink }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 2fr', gap: isMobile || isTablet ? 40 : 80 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, borderTop: `1px solid ${T.ink}`, paddingTop: 16 }}>{d.wwd.t}</div>
            </div>
            <div>
              <h2 style={{ fontFamily: F.display, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1, fontWeight: 500, margin: 0, letterSpacing: '-0.02em' }}>
                <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>{d.wwd.sub}</span><br /><br />
                {d.wwd.text}
              </h2>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section style={{ padding: isMobile ? '80px 20px' : '120px 40px', background: T.paper, color: T.ink, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}` }}>
          <SPSectionHead T={T} F={F} num="§ Output" title="The" titleIt={d.deliv.t + "."} dek="Everything you need." />
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16, marginTop: 40 }}>
            {d.deliv.items.map((item, i) => (
              <div key={i} style={{ gridColumn: isMobile ? '1 / -1' : `span ${item.span}`, padding: 24, background: item.c, borderRadius: 20, border: `1px solid ${T.ink}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 140, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 24px rgba(0,0,0,0.1)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ marginBottom: 16, opacity: 0.8 }}>
                  {React.createElement(item.i, { size: 28, strokeWidth: 1.5 })}
                </div>
                <div>
                  <div style={{ fontSize: 12, opacity: 0.5, fontFamily: F.italic, fontStyle: 'italic', marginBottom: 4 }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: F.display, fontSize: 20, margin: 0, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{item.t}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section style={{ padding: isMobile ? '80px 20px' : '160px 40px', background: T.paper, color: T.ink }}>
          <SPSectionHead T={T} F={F} num={`§ ${d.process.t}`} title="Our" titleIt={d.process.title} dek="How we do it." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 40 }}>
            {d.process.items.map((p, i) => (
              <div key={i} style={{ background: p.c, borderRadius: 24, border: `1px solid ${T.ink}`, padding: isMobile ? '32px 24px' : '48px 40px', display: 'flex', alignItems: 'center', gap: isMobile ? 24 : 60, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.1)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: F.italic, fontStyle: 'italic', opacity: 0.3, lineHeight: 0.8 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontFamily: F.display, fontSize: 'clamp(28px, 4vw, 56px)', margin: 0, fontWeight: 700, letterSpacing: '-0.04em' }}>{p.t}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section style={{ padding: isMobile ? '80px 20px' : '160px 40px', background: T.ink, color: T.paper }}>
          <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 60, textAlign: 'center' }}>
            {d.results.t} <span style={{ fontFamily: F.italic, fontStyle: 'italic', textTransform: 'none', fontSize: 16 }}>& Outcomes</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : `repeat(${Math.min(4, d.results.items.length)}, 1fr)`, gap: 24, maxWidth: 1200, margin: '0 auto' }}>
            {d.results.items.map((r, i) => {
              const words = r.t.split(' ');
              const firstWord = words[0];
              const rest = words.slice(1).join(' ');

              return (
                <div key={i} style={{
                  padding: '32px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 180,
                  transition: 'background 0.3s ease, transform 0.3s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: r.c, color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                    <Check size={20} strokeWidth={2} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(24px, 3vw, 34px)', color: T.paper, lineHeight: 1 }}>
                      {firstWord}
                    </div>
                    <div style={{ fontFamily: F.display, fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 600, letterSpacing: '-0.01em', color: T.paper, marginTop: 8, lineHeight: 1.1 }}>
                      {rest}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  };

  return (
    <div style={{ background: 'transparent', color: T.ink, fontFamily: F.body, minHeight: '100vh', overflowX: 'hidden' }}>
      <SPNav T={T} F={F} active="Services" />

      {/* Bespoke Dynamic Layout */}
      {renderBespokeLayout()}

      {/* Mini CTA */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.popA, color: T.paper, textAlign: 'center' }}>
        <div>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 8vw, 100px)', margin: '0 0 32px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Want this for <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>your brand?</span>
          </h2>
          <Link to="/contact" style={{ display: 'inline-flex', padding: '16px 32px', background: T.paper, color: T.ink, borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', border: `1px solid ${T.ink}`, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Start a project →</Link>
        </div>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
};
