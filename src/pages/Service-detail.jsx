import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';
import { Target, Calendar, Lightbulb, Map, Rocket, Megaphone, Sprout, BarChart, Smartphone, Play, Mic, User, Tv, BookOpen, Sparkles, PenTool, Music, Image as ImageIcon, Bot, TrendingUp, RefreshCw, Search, Brain, Settings, FileText, CheckCircle, Monitor, Globe, UserSquare, MousePointerClick, Check, X } from 'lucide-react';

const SCOPE_GALLERY_DATA = {
  "Websites": {
    mockups: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1481481600450-84ea51936bb4?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Landing Pages": {
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Portfolio Sites": {
    mockups: [
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Profile Design": {
    mockups: [
      "https://images.unsplash.com/photo-1513002749550-c59d220b8e42?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Social Branding": {
    mockups: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616469829935-c8f50d9ae365?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Content Templates": {
    mockups: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Conversion Design": {
    mockups: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "Responsive Dev": {
    mockups: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
    ],
    carousel: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800"
    ],
    masonry: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
    ]
  },
  "default": {
    mockups: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"],
    carousel: ["https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800"],
    masonry: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600"]
  }
};

const ScopeDetailModal = ({ title, onClose, T, F, isMobile }) => {
  const data = SCOPE_GALLERY_DATA[title] || SCOPE_GALLERY_DATA["default"];
  
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: T.ink, color: T.paper, zIndex: 9999, overflowY: 'auto', overflowX: 'hidden' }}>
      {/* Header */}
      <div style={{ position: 'sticky', top: 0, padding: isMobile ? '20px' : '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: `rgba(0,0,0,0.8)`, backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <h2 style={{ fontFamily: F.display, fontSize: isMobile ? 24 : 40, margin: 0, letterSpacing: '-0.02em' }}>{title}.</h2>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: T.paper, cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <X size={32} />
        </button>
      </div>

      <div style={{ padding: isMobile ? '40px 20px' : '80px 40px', maxWidth: 1400, margin: '0 auto' }}>
        {/* Mockups */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 24, marginBottom: 24, opacity: 0.6 }}>Featured Mockups</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {data.mockups.map((src, i) => (
              <img key={i} src={src} alt={`${title} mockup ${i}`} style={{ width: '100%', height: isMobile ? 300 : 600, objectFit: 'cover', borderRadius: 24, border: `1px solid rgba(255,255,255,0.1)` }} />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 24, marginBottom: 24, opacity: 0.6 }}>Gallery</h3>
          <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 20, scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
            {data.carousel.map((src, i) => (
              <img key={i} src={src} alt={`${title} gallery ${i}`} style={{ height: isMobile ? 240 : 400, minWidth: isMobile ? 300 : 600, objectFit: 'cover', borderRadius: 16, scrollSnapAlign: 'start', border: `1px solid rgba(255,255,255,0.1)` }} />
            ))}
          </div>
        </div>

        {/* Masonry */}
        <div>
          <h3 style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 24, marginBottom: 24, opacity: 0.6 }}>Details & Assets</h3>
          <div style={{ columnCount: isMobile ? 1 : 3, columnGap: 24 }}>
            {data.masonry.map((src, i) => (
              <img key={i} src={src} alt={`${title} detail ${i}`} style={{ width: '100%', breakInside: 'avoid', marginBottom: 24, borderRadius: 16, border: `1px solid rgba(255,255,255,0.1)` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function SPServiceDetail({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = useIsMobile();

  // Read query params safely
  const [slug, setSlug] = React.useState('video-edits');
  const [activeScopeItem, setActiveScopeItem] = React.useState(null);
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
  const [activeIdx, setActiveIdx] = React.useState(5);
  const videoRefs = React.useRef([]);

  React.useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid) {
        if (i === activeIdx) {
          vid.play().catch(() => { });
        } else {
          vid.pause();
        }
      }
    });
  }, [activeIdx]);

  const renderVideoEditsLayout = () => (
    <React.Fragment>
      {/* Coverflow Video Carousel */}
      <section style={{ padding: isMobile ? '60px 0' : '100px 0', background: T.ink, color: T.paper, borderTop: `1px solid ${T.ink}`, overflow: 'hidden' }}>
        <div style={{ padding: '0 40px', marginBottom: 20 }}>
          <SPSectionHead T={T} F={F} num="§ 01 / Featured" title="Hero" titleIt="Reels." dek="Click cards to bring them into focus." color={T.paper} />
        </div>

        {/* Carousel Container */}
        <div style={{
          position: 'relative', height: isMobile ? 420 : 540, width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Ambient Glow */}
          <div style={{
            position: 'absolute',
            width: isMobile ? '80%' : '50%', height: '80%',
            background: 'radial-gradient(circle, rgba(220, 20, 20, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0,
            pointerEvents: 'none',
          }}></div>

          {/* Left Button */}
          <button
            onClick={() => setActiveIdx((activeIdx - 1 + carouselItems.length) % carouselItems.length)}
            style={{ position: 'absolute', left: isMobile ? 10 : 40, top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: 48, height: 48, borderRadius: 24, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: T.paper, border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', fontSize: 18 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
          >←</button>

          {/* Right Button */}
          <button
            onClick={() => setActiveIdx((activeIdx + 1) % carouselItems.length)}
            style={{ position: 'absolute', right: isMobile ? 10 : 40, top: '50%', transform: 'translateY(-50%)', zIndex: 20, width: 48, height: 48, borderRadius: 24, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: T.paper, border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', fontSize: 18 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
          >→</button>

          {carouselItems.map((item, i) => {
            let offset = i - activeIdx;
            const half = Math.floor(carouselItems.length / 2);
            if (offset > half) offset -= carouselItems.length;
            if (offset < -half) offset += carouselItems.length;
            
            const isActive = offset === 0;
            const distance = Math.abs(offset);

            const scale = isActive ? 1 : 1 - (distance * 0.15);
            const translateX = offset * (isMobile ? 160 : 260); // tighter overlap
            const blur = isActive ? 0 : distance * 2;
            const zIndex = 10 - distance;
            const brightness = isActive ? 1 : Math.max(0.4, 1 - (distance * 0.4));
            const opacity = distance > 2 ? 0 : 1;

            return (
              <div
                key={i}
                onClick={() => { if (!isActive) setActiveIdx(i); }}
                style={{
                  position: 'absolute',
                  width: isMobile ? 240 : 360,
                  height: isMobile ? 360 : 500,
                  background: '#111',
                  borderRadius: 24,
                  overflow: 'hidden',
                  border: `1px solid rgba(255,255,255,0.15)`,
                  boxShadow: isActive ? `0 24px 60px rgba(0,0,0,0.8), 0 0 100px rgba(220, 20, 20, 0.4)` : '0 12px 30px rgba(0,0,0,0.5)',
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  filter: `blur(${blur}px) brightness(${brightness})`,
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
                  muted={!isActive} // sound only for active
                  controls={isActive} // native controls when active
                  playsInline
                  loop
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.5s ease', pointerEvents: isActive ? 'auto' : 'none' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.transform = 'scale(1)'; }}
                  ref={el => videoRefs.current[i] = el}
                />

                {/* Custom Overlay (hidden when active so controls are visible) */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  opacity: isActive ? 0 : 1, transition: 'opacity 0.3s ease'
                }}>
                  <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                    <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6, opacity: 0.8, color: T.paper }}>Nature</div>
                    <h3 style={{ fontFamily: F.display, fontSize: 24, margin: 0, fontWeight: 600, color: T.paper }}>{item.title}</h3>
                  </div>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.paper, fontSize: 24, border: '1px solid rgba(255,255,255,0.3)' }}>▶</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pinterest Masonry Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <SPSectionHead T={T} F={F} num="§ 02 / Archive" title="Project" titleIt="Archive." dek="A visual dump of what we've been up to." />

        <div style={{ columnCount: isMobile ? 2 : 4, columnGap: isMobile ? 12 : 16 }}>
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
        <section style={{ position: 'relative', padding: isMobile ? '120px 20px 40px' : `180px 40px ${slug === 'video-edits' ? 40 : 120}px`, background: T.ink, color: T.paper, minHeight: slug === 'video-edits' ? 'auto' : '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
          {!isMobile && <SPStatusSticker T={T} F={F} top={80} right={120} rotate={8} variant="tape" tape={T.popB} bg={d.hero.color} icon="+" iconBg={T.ink} label="Service" name={data.name} zIndex={5} />}
          {!isMobile && <SPStar size={100} color={T.popA} rotate={-15} bottom={100} left={80} zIndex={5} />}

          {slug === 'video-edits' && !isMobile && (
            <>
              <SPStatusSticker T={T} F={F} top={100} left={350} rotate={-5} variant="torn" bg={sky} icon="▶" iconBg={T.ink} label="Format" name="Short Form" size="sm" zIndex={10} />
              <SPStatusSticker T={T} F={F} bottom={100} right={250} rotate={12} variant="square" bg={peach} icon="✂" iconBg={T.ink} label="Status" name="Cutting" size="sm" zIndex={10} />
              {/* <SPStatusSticker T={T} F={F} top={160} right={200} rotate={-8} variant="tape" tape={T.popC} bg={butter} icon="⚡" iconBg={T.ink} label="Pacing" name="Dynamic" size="sm" zIndex={10} /> */}
              {/* <SPStatusSticker T={T} F={F} bottom={80} left={150} rotate={14} variant="round" bg={mint} icon="🎧" iconBg={T.ink} label="Audio" name="Sound Design" size="sm" zIndex={10} />  */}
            </>
          )}
          <SPParallax speed={0.05}>
            <h1 style={{ fontFamily: F.display, fontSize: 'clamp(50px, 8vw, 120px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0, maxWidth: 1200 }}>
              {d.hero.t1}<span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>{d.hero.hl}</span><br />{d.hero.t2}
            </h1>
          </SPParallax>
          <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40 }}>
            <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.5, opacity: 0.8, margin: 0, maxWidth: 500 }}>
              {d.hero.sub}
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <Link to="/contact" style={{ display: 'inline-flex', padding: '20px 40px', background: T.paper, color: T.ink, borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 24px rgba(255,255,255,0.15)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>{d.hero.cta}</Link>
            </div>
          </div>
        </section>

        {/* Render Video Edits visual portfolio if needed */}
        {slug === 'video-edits' && renderVideoEditsLayout()}

        {/* What We Do */}
        <section style={{ padding: isMobile ? '80px 20px' : '160px 40px', background: T.paper, color: T.ink }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 40 : 80 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: 16, marginTop: 40 }}>
            {d.deliv.items.map((item, i) => (
              <div key={i} onClick={() => setActiveScopeItem(item.t)} style={{ cursor: 'pointer', gridColumn: isMobile ? '1 / -1' : `span ${item.span}`, padding: 24, background: item.c, borderRadius: 20, border: `1px solid ${T.ink}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 140, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
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
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${Math.min(4, d.results.items.length)}, 1fr)`, gap: 24, maxWidth: 1200, margin: '0 auto' }}>
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

        {activeScopeItem && (
          <ScopeDetailModal title={activeScopeItem} onClose={() => setActiveScopeItem(null)} T={T} F={F} isMobile={isMobile} />
        )}
      </React.Fragment>
    );
  };

  return (
    <div style={{ background: T.paper, color: T.ink, fontFamily: F.body, minHeight: '100vh', overflowX: 'hidden' }}>
      <SPNav T={T} F={F} active="Services" />

      {/* Bespoke Dynamic Layout */}
      {renderBespokeLayout()}

      {/* Mini CTA */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: T.popA, color: T.paper, textAlign: 'center' }}>
        <div>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(40px, 8vw, 100px)', margin: '0 0 32px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Want this for <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>your brand?</span>
          </h2>
          <Link to="/contact" style={{ display: 'inline-flex', padding: '16px 32px', background: T.paper, color: T.ink, borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: F.body, border: `1px solid ${T.ink}`, transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Start a project →</Link>
        </div>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
};
