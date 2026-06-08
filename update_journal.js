const fs = require('fs');

const file = '/Users/akki/Documents/blackspace-web/src/pages/Journal.jsx';
let content = fs.readFileSync(file, 'utf8');

// We need to inject CarouselPost component
const carouselPostCode = `
const CarouselPost = ({ entry, T, F, f1CarPng }) => {
  const [index, setIndex] = React.useState(0);
  const [isFlipping, setIsFlipping] = React.useState(false);

  const mocks = entry.mocks;
  const currentMock = mocks[index];

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % mocks.length);
      setIsFlipping(false);
    }, 200);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((i) => (i - 1 + mocks.length) % mocks.length);
      setIsFlipping(false);
    }, 200);
  };

  return (
    <div style={{
      background: T.paper, border: \`1px solid \${T.ink}\`, borderRadius: 16,
      padding: 24, transform: \`perspective(800px) rotate(\${currentMock.rotate || 0}deg) \${isFlipping ? 'rotateY(90deg)' : 'rotateY(0deg)'}\`,
      boxShadow: \`4px 6px 0 \${T.ink}15\`,
      fontFamily: F.body, transition: 'transform 0.2s ease',
      margin: entry.big ? '16px 24px 24px' : '12px 16px 28px',
      position: 'relative'
    }}
    onMouseEnter={e => { if (!isFlipping) e.currentTarget.style.transform = \`perspective(800px) rotate(0deg) translateY(-4px)\`; }}
    onMouseLeave={e => { if (!isFlipping) e.currentTarget.style.transform = \`perspective(800px) rotate(\${currentMock.rotate || 0}deg) translateY(0)\`; }}>
      
      {mocks.length > 1 && (
        <div style={{ position: 'absolute', top: -14, right: -14, display: 'flex', gap: 6, zIndex: 10 }}>
          <button onClick={handlePrev} style={{ width: 32, height: 32, borderRadius: 16, background: T.ink, color: T.paper, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, boxShadow: \`2px 2px 0 \${T.popA}\`, transition: 'transform 0.1s' }}
            onMouseDown={e => e.currentTarget.style.transform = 'translate(2px, 2px)'}
            onMouseUp={e => e.currentTarget.style.transform = 'none'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >←</button>
          <button onClick={handleNext} style={{ width: 32, height: 32, borderRadius: 16, background: T.ink, color: T.paper, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, boxShadow: \`2px 2px 0 \${T.popA}\`, transition: 'transform 0.1s' }}
            onMouseDown={e => e.currentTarget.style.transform = 'translate(2px, 2px)'}
            onMouseUp={e => e.currentTarget.style.transform = 'none'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >→</button>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: currentMock.avatarBg || T.ink, color: T.paper, border: \`1px solid \${T.ink}\`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.display, fontSize: 16, fontWeight: 700 }}>
          {currentMock.initial}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{currentMock.author}</div>
          <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>{currentMock.platform} • {currentMock.time}</div>
        </div>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.45, margin: 0, opacity: 0.9 }}>{currentMock.excerpt}</p>
      {currentMock.hasImage && (
        <div style={{ width: '100%', borderRadius: 8, marginTop: 16, border: \`1px solid \${T.ink}44\`, overflow: 'hidden', background: T.paper }}>
          <img src={f1CarPng} alt="Post media" style={{ width: '100%', height: 'auto', display: 'block', imageRendering: 'pixelated' }} />
        </div>
      )}
      <div style={{ display: 'flex', gap: 20, marginTop: 16, fontSize: 11, opacity: 0.6, fontWeight: 600 }}>
        <span>♡ {currentMock.likes}</span>
        <span>💬 {currentMock.comments}</span>
      </div>
    </div>
  );
};
`;

content = content.replace("function SPJournal", carouselPostCode + "\nfunction SPJournal");

// Now we update the mock objects to mocks arrays
content = content.replace(/mock: \{\s*author: 'Shraddha',[\s\S]*?comments: '18'\s*\}/, `mocks: [
      {
        author: 'Shraddha',
        initial: 'S',
        platform: 'LinkedIn',
        time: '2h',
        rotate: -2,
        excerpt: 'We often get asked how we maintain the brand voice across 40+ variations. The answer is surprisingly analog. We print the scripts and read them out loud. If you stumble, you rewrite.',
        likes: '142',
        comments: '18'
      },
      {
        author: 'Shraddha',
        initial: 'S',
        platform: 'X.com',
        time: '1d',
        rotate: 1,
        excerpt: 'Controversial take: Your B2B copy doesn\\'t have to sound like a textbook. People buy from people. Write like a human.',
        likes: '2.1k',
        comments: '89'
      }
    ]`);

content = content.replace(/mock: \{\s*author: 'Bharat',[\s\S]*?comments: '45'\s*\}/, `mocks: [
      {
        author: 'Bharat',
        initial: 'B',
        platform: 'X.com',
        time: '5h',
        rotate: 3,
        excerpt: 'Shipping first cuts fast means we get to spend more time where it actually matters: refining the pacing and killing the darlings.',
        likes: '3.2k',
        comments: '45'
      },
      {
        author: 'Bharat',
        initial: 'B',
        platform: 'LinkedIn',
        time: '3d',
        rotate: -1,
        excerpt: 'The gap between a good video and a great video is usually just 3 frames of audio overlap.',
        likes: '890',
        comments: '24'
      }
    ]`);

content = content.replace(/mock: \{\s*author: 'Mayank',[\s\S]*?comments: '12'\s*\}/, `mocks: [
      {
        author: 'Mayank',
        initial: 'M',
        platform: 'Instagram',
        time: '1d',
        rotate: -3,
        excerpt: 'A quick dump of the moodboards and references that didn\\'t make it into the final Okinawa film. Still love these.',
        hasImage: true,
        likes: '890',
        comments: '12'
      },
      {
        author: 'Mayank',
        initial: 'M',
        platform: 'Instagram',
        time: '4d',
        rotate: 2,
        excerpt: 'Lighting tests for the new studio. The 1200d is a beast. We ended up bouncing it entirely off the ceiling.',
        hasImage: false,
        likes: '1.2k',
        comments: '34'
      }
    ]`);

// Finally, replace the rendering of entry.mock to use CarouselPost
const renderMockRegex = /\{entry\.mock \? \([\s\S]*?\) : \(/;
content = content.replace(renderMockRegex, `{entry.mocks ? (\n                    <CarouselPost entry={entry} T={T} F={F} f1CarPng={f1CarPng} />\n                  ) : (`);

fs.writeFileSync(file, content);
console.log("Success");
