import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import Studio from './pages/Studio.jsx';
import Services from './pages/Services.jsx';
import Journal from './pages/Journal.jsx';
import Contact from './pages/Contact.jsx';
import ServiceDetail from './pages/Service-detail.jsx';
import { SP_THEMES, SP_TYPE } from './theme/theme';
import KiriPet from './components/Kiri/KiriPet.jsx';

export default function App() {
  const location = useLocation();
  // Hardcode defaults since tweaks panel is removed
  const themeKey = 'classic';
  const typeKey = 'acidGaraHelv';

  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  // Set global body styles based on theme
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.background = T.paper;
    document.body.style.color = T.ink;
    document.body.style.fontFamily = F.body;
  }, [T, F]);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [showKiri, setShowKiri] = React.useState(() => {
    return localStorage.getItem('kiri_enabled') !== 'false';
  });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position between -0.5 and 0.5
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    
    const handleKiriToggle = () => {
      setShowKiri(localStorage.getItem('kiri_enabled') !== 'false');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('kiri_toggle', handleKiriToggle);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('kiri_toggle', handleKiriToggle);
    };
  }, []);

  return (
    <>
      {/* Global Halftone dot pattern */}
      <div style={{
        position: 'fixed', top: -20, left: -20, right: -20, bottom: -20,
        backgroundImage: `radial-gradient(${T.ink} 1px, transparent 1.5px)`,
        backgroundSize: '4px 4px',
        opacity: 0.15,
        transform: `scale(1.02) translate(${mousePos.x * -6}px, ${mousePos.y * -6}px)`,
        transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        zIndex: -2
      }} />
      
      {/* Global Organic noise for distress effect */}
      <div style={{
        position: 'fixed', top: -20, left: -20, right: -20, bottom: -20,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.12,
        transform: `scale(1.05) translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
        transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        mixBlendMode: 'color-burn',
        pointerEvents: 'none',
        zIndex: -1
      }} />

      <Routes>
        <Route path="/" element={<Home themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/work" element={<Work themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/studio" element={<Studio themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/services" element={<Services themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/journal" element={<Journal themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/contact" element={<Contact themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/service-detail" element={<ServiceDetail themeKey={themeKey} typeKey={typeKey} />} />
      </Routes>

      {/* Global Interactive Digital Pet */}
      {showKiri && <KiriPet size={80} bottomOffset={0} />}
    </>
  );
}
