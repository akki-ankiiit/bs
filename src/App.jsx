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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/work" element={<Work themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/studio" element={<Studio themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/services" element={<Services themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/journal" element={<Journal themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/contact" element={<Contact themeKey={themeKey} typeKey={typeKey} />} />
        <Route path="/service-detail" element={<ServiceDetail themeKey={themeKey} typeKey={typeKey} />} />
      </Routes>
    </>
  );
}
