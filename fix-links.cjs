const fs = require('fs');
const path = require('path');
const srcPages = path.join(__dirname, 'src', 'pages');

const filesToRefactor = [
  'Home.jsx',
  'Work.jsx',
  'Studio.jsx',
  'Services.jsx',
  'Journal.jsx',
  'Contact.jsx',
  'Service-detail.jsx'
];

filesToRefactor.forEach(file => {
  const filePath = path.join(srcPages, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  // Any remaining <a ...> that closes with </Link> must be changed to <Link ...> or </Link> back to </a>
  
  // For mailto links or external links, we want <a>...</a>
  // So let's revert all </Link> to </a> and then properly parse it.
  content = content.replace(/<\/Link>/g, '</a>');
  
  // Now replace only valid internal links with <Link>...</Link>
  // A valid internal link starts with <Link (from the previous replace)
  // Let's change all <Link back to <a to start clean
  content = content.replace(/<Link/g, '<a');
  content = content.replace(/to="/g, 'href="');

  // Now properly replace <a href="/something"> with <Link to="/something">
  content = content.replace(/<a([^>]*)href="(\/[^"]*|#)"([^>]*)>(.*?)<\/a>/gs, (match, before, href, after, inner) => {
    return `<Link${before}to="${href}"${after}>${inner}</Link>`;
  });
  
  // service-detail.html string interpolation
  content = content.replace(/<a([^>]*)href=\{`service-detail\.html\?id=\$\{([^}]*)\}`\}([^>]*)>(.*?)<\/a>/gs, (match, before, idExpr, after, inner) => {
    return `<Link${before}to={\`/service-detail?id=\$\{${idExpr}\}\`}${after}>${inner}</Link>`;
  });

  fs.writeFileSync(filePath, content);
});
console.log('Fixed links');
