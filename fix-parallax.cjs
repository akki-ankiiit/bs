const fs = require('fs');
const path = require('path');
const srcPages = path.join(__dirname, 'src', 'pages');

const filesToRefactor = [
  'Home.jsx',
  'Journal.jsx',
  'Contact.jsx',
];

filesToRefactor.forEach(file => {
  const filePath = path.join(srcPages, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/window\.SPParallax/g, 'SPParallax');
  fs.writeFileSync(filePath, content);
});
console.log('Fixed SPParallax');
