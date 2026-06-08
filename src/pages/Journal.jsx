import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax, SPNoise } from '../components/SPKit';
import { useBreakpoints } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

// JOURNAL page — blog / updates / notes

function SPJournal({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];

  const [mint, lilac, sky, butter, peach] = T.pastels;
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const entries = [
    {
      date: 'June 5, 2026',
      title: 'Shraddha posted a thought on LinkedIn',
      category: 'LinkedIn',
      readTime: 'Read post',
      bg: lilac,
      big: true,
      mock: {
        author: 'Shraddha',
        initial: 'S',
        platform: 'LinkedIn',
        time: '2h',
        rotate: -2,
        excerpt: 'We often get asked how we maintain the brand voice across 40+ variations. The answer is surprisingly analog. We print the scripts and read them out loud. If you stumble, you rewrite.',
        likes: '142',
        comments: '18'
      }
    },
    {
      date: 'May 28, 2026',
      title: 'Bharat posted a thought',
      category: 'LinkedIn · Instagram · X.com',
      readTime: 'View posts',
      bg: sky,
      big: false,
      mock: {
        author: 'Bharat',
        initial: 'B',
        platform: 'X.com',
        time: '5h',
        rotate: 3,
        excerpt: 'Shipping first cuts fast means we get to spend more time where it actually matters: refining the pacing and killing the darlings.',
        likes: '3.2k',
        comments: '45'
      }
    },
    {
      date: 'May 24, 2026',
      title: 'Mayank posted something on Instagram',
      category: 'Instagram',
      readTime: 'View post',
      bg: mint,
      big: false,
      mock: {
        author: 'Mayank',
        initial: 'M',
        platform: 'Instagram',
        time: '1d',
        rotate: -3,
        excerpt: 'A quick dump of the moodboards and references that didn\'t make it into the final Okinawa film. Still love these.',
        hasImage: true,
        likes: '890',
        comments: '12'
      }
    },
    {
      date: 'May 12, 2026',
      title: 'Why we stopped writing 60-second scripts',
      category: 'Craft',
      readTime: '4 min read',
      excerpt: 'Attention spans aren\'t shrinking, they are just getting more selective. Here is how we adapted our pacing.',
      bg: butter,
      big: true
    },
    {
      date: 'April 28, 2026',
      title: 'The AI pipeline that didn\'t break',
      category: 'Process',
      readTime: '6 min read',
      excerpt: 'How we used AI to generate 42 variations of a single hook without losing the brand voice.',
      bg: sky,
      big: false
    },
    {
      date: 'April 15, 2026',
      title: 'Notes on lighting a dark studio',
      category: 'Behind the scenes',
      readTime: '3 min read',
      excerpt: 'We moved into a new space and learned a lot about bouncing light off matte black walls.',
      bg: mint,
      big: false
    },
    {
      date: 'March 30, 2026',
      title: 'In defense of the messy brief',
      category: 'Opinion',
      readTime: '5 min read',
      excerpt: 'Sometimes the best starting point is a chaotic brain dump. Don\'t polish it, just send it.',
      bg: butter,
      big: true
    },
    {
      date: 'March 10, 2026',
      title: 'Our typography stack for 2026',
      category: 'Design',
      readTime: '2 min read',
      excerpt: 'A quick look at the font pairings we are reaching for the most this quarter.',
      bg: peach,
      big: false
    }
  ];

  return (
    <div style={{ background: 'transparent', color: T.ink, fontFamily: F.body, minHeight: '100vh' }}>
      <SPNav T={T} F={F} active="Journal" />

      {/* Hero */}
      <section style={{ padding: isMobile ? '100px 20px 20px' : isTablet ? '120px 30px 30px' : '140px 40px 40px', position: 'relative' }}>
        <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, opacity: 0.7 }}>
          <span>✳ Journal · Notes · Thoughts</span>
          <span>Writing down what we learn.</span>
        </div>

        <div style={{ position: 'relative' }}>
          <SPStatusSticker T={T} F={F} top={isMobile ? -30 : isTablet ? -20 : -10} left={isMobile ? 10 : isTablet ? 40 : 140} rotate={-6} variant="tape" tape={T.popA} bg={mint} icon="✎" iconBg={T.ink} label="Latest" name="New post" scale={isMobile ? 0.6 : isTablet ? 0.75 : 1} />
          <SPStatusSticker T={T} F={F} top={isMobile ? 80 : isTablet ? 110 : 140} right={isMobile ? 10 : isTablet ? 40 : 140} rotate={7} variant="torn" bg={butter} icon="☕" iconBg={T.popB} label="Status" name="Drafting" scale={isMobile ? 0.6 : isTablet ? 0.75 : 1} />
          <SPStar size={isMobile ? 30 : isTablet ? 45 : 60} color={T.popA} rotate={18} top={isMobile ? 20 : isTablet ? 40 : 60} right={isMobile ? 10 : isTablet ? 30 : 60} />

          <h1 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 15vw, 260px)', lineHeight: 0.84, fontWeight: 700, letterSpacing: '-0.05em', margin: 0 }}>
            the <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>journal,</span><br />some <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>thoughts.</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1.2fr 1fr', gap: isMobile || isTablet ? 32 : 40, marginTop: isMobile || isTablet ? 40 : 60, alignItems: 'start' }}>
          <SPParallax speed={0.06}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.8 }}>A collection of notes on process, craft, and building things we actually want to see exist.</p>
          </SPParallax>
          <SPParallax speed={0.04}>
            <p style={{ margin: 0, fontFamily: F.italic, fontStyle: 'italic', fontSize: 22, lineHeight: 1.35, textAlign: 'center' }}>
              We write when we have something to say. Not when an algorithm asks us to.
            </p>
          </SPParallax>
          <SPParallax speed={0.08} style={{ textAlign: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', gap: 8, padding: '12px 22px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `3px 4px 0 ${T.ink}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Subscribe →</Link>
          </SPParallax>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: isMobile ? '20px 20px 60px' : isTablet ? '30px 30px 60px' : '40px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gridAutoRows: 'auto', gap: 16 }}>
          {entries.map((entry, i) => (
            <article key={i} style={{
              gridColumn: isMobile ? '1 / -1' : isTablet ? (entry.big ? 'span 12' : 'span 6') : `span ${entry.big ? 8 : 4}`,
              background: entry.bg, border: `1px solid ${T.ink}`, borderRadius: 20,
              position: 'relative', overflow: 'hidden',
              color: T.ink,
              minHeight: 300, cursor: 'pointer', textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex', flexDirection: 'column'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.1)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ padding: isMobile ? 24 : 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 24 }}>
                    <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
                      {entry.category}
                    </span>
                    <span style={{ fontSize: 11, letterSpacing: '0.1em', opacity: 0.6 }}>
                      {entry.date}
                    </span>
                  </div>
                  
                  {entry.mock ? (
                    <div style={{
                      background: T.paper, border: `1px solid ${T.ink}`, borderRadius: 16,
                      padding: 24, transform: `rotate(${entry.mock.rotate}deg)`,
                      boxShadow: `4px 6px 0 ${T.ink}15`,
                      fontFamily: F.body, transition: 'transform 0.3s ease',
                      margin: entry.big ? '16px 24px 24px' : '12px 16px 28px'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = `rotate(0deg) translateY(-4px)`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${entry.mock.rotate}deg) translateY(0)`; }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 18, background: entry.mock.avatarBg || T.ink, color: T.paper, border: `1px solid ${T.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.display, fontSize: 16, fontWeight: 700 }}>
                          {entry.mock.initial}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{entry.mock.author}</div>
                          <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>{entry.mock.platform} • {entry.mock.time}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.45, margin: 0, opacity: 0.9 }}>{entry.mock.excerpt}</p>
                      {entry.mock.hasImage && (
                        <div style={{ width: '100%', height: 100, background: `linear-gradient(135deg, ${sky} 0%, ${lilac} 100%)`, borderRadius: 8, marginTop: 16, border: `1px solid ${T.ink}44` }}></div>
                      )}
                      <div style={{ display: 'flex', gap: 20, marginTop: 16, fontSize: 11, opacity: 0.6, fontWeight: 600 }}>
                        <span>♡ {entry.mock.likes}</span>
                        <span>💬 {entry.mock.comments}</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 style={{ fontFamily: F.display, fontSize: entry.big ? 'clamp(32px, 6vw, 56px)' : 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, margin: 0 }}>{entry.title}</h3>
                      {entry.big && <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, marginTop: 16, maxWidth: 480, opacity: 0.8 }}>{entry.excerpt}</p>}
                    </>
                  )}
                </div>

                <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${T.ink}22`, paddingTop: 16 }}>
                  <span style={{ fontSize: 12, opacity: 0.7 }}>{entry.readTime}</span>
                  <span style={{ fontSize: 16 }}>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '80px 20px' : isTablet ? '100px 30px' : '120px 40px', textAlign: 'center', background: peach, borderTop: `1px solid ${T.ink}`, position: 'relative', overflow: 'hidden' }}>
        <SPStar size={120} color={T.popB} rotate={15} top={40} right={isMobile ? -20 : 80} />
        <SPStar size={80} color={T.popA} rotate={-20} bottom={isMobile ? 20 : 60} left={isMobile ? -20 : 80} />

        <SPNoise T={T} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 14vw, 200px)', lineHeight: 0.85, fontWeight: 700, letterSpacing: '-0.05em', margin: 0 }}>
            read <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>enough?</span>
          </h2>
          <Link to="/contact" style={{ display: 'inline-flex', gap: 12, marginTop: 40, padding: '22px 34px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `4px 5px 0 ${T.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>Start a project →</Link>
        </div>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}

export default SPJournal;
