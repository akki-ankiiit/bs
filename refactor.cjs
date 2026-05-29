const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, 'src', 'pages');
const publicPages = path.join(__dirname, 'public', 'project', 'pages');

if (!fs.existsSync(srcPages)) {
  fs.mkdirSync(srcPages, { recursive: true });
}

const filesToRefactor = [
  'home.jsx',
  'work.jsx',
  'studio.jsx',
  'services.jsx',
  'journal.jsx',
  'contact.jsx',
  'service-detail.jsx'
];

filesToRefactor.forEach(file => {
  if (!fs.existsSync(path.join(publicPages, file))) return;
  let content = fs.readFileSync(path.join(publicPages, file), 'utf-8');

  // Replace global window references and component extraction
  content = content.replace(/\/\* global React \*\/\n?/g, '');
  
  // Remove "const { ... } = window;"
  content = content.replace(/const\s+\{.*\}\s*=\s*window;/g, '');
  
  // Replace window.useIsMobile()
  content = content.replace(/window\.useIsMobile\(\)/g, 'useIsMobile()');

  // Replace window.SP_THEMES
  content = content.replace(/window\.SP_THEMES/g, 'SP_THEMES');
  
  // Replace window.SP_TYPE
  content = content.replace(/window\.SP_TYPE/g, 'SP_TYPE');

  // Remove window assignment at the end
  const componentNameMatch = content.match(/window\.(SP\w+)\s*=\s*\1;/);
  if (componentNameMatch) {
    const componentName = componentNameMatch[1];
    content = content.replace(componentNameMatch[0], `export default ${componentName};`);
  } else {
    // for service-detail.jsx which might have different exports
    content = content.replace(/window\.(SP\w+)\s*=\s*\1;/g, '');
  }

  // Replace <a> tags with <Link> (basic regex, covers href="xyz.html" and href="#")
  content = content.replace(/<a([^>]*)href="([a-zA-Z0-9-]+\.html)"([^>]*)>/g, (match, before, href, after) => {
    let route = '/' + href.replace('.html', '');
    if (route === '/index') route = '/';
    return `<Link${before}to="${route}"${after}>`;
  });
  content = content.replace(/<\/a>/g, '</Link>');

  // Special case: href="#"
  content = content.replace(/<a([^>]*)href="#"([^>]*)>/g, '<Link$1to="#"$2>');

  // Add imports at the top
  const imports = `import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

`;
  
  // service-detail.jsx has specific window.location.search parsing which is fine for now, we can leave it or change it later.
  
  fs.writeFileSync(path.join(srcPages, file.charAt(0).toUpperCase() + file.slice(1)), imports + content);
});

console.log('Pages refactored successfully.');
