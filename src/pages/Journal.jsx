import React from 'react';
import { Link } from 'react-router-dom';
import { SPNav, SPFooter, SPSticker, SPStatusSticker, SPStar, SPMarquee, SPSectionHead, SPParallax } from '../components/SPKit';
import { useIsMobile } from '../hooks';
import { SP_THEMES, SP_TYPE } from '../theme/theme';

// JOURNAL page — blog / updates / notes

function SPJournal({ themeKey = 'classic', typeKey = 'acidGaraHelv' }) {
  const T = SP_THEMES[themeKey];
  const F = SP_TYPE[typeKey];
  
  const [mint, lilac, sky, butter, peach] = T.pastels;
  const isMobile = useIsMobile();

  const entries = [
    {
      date: 'May 12, 2026',
      title: 'Why we stopped writing 60-second scripts',
      category: 'Craft',
      readTime: '4 min read',
      excerpt: 'Attention spans aren\'t shrinking, they are just getting more selective. Here is how we adapted our pacing.',
      bg: lilac,
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
    <div style={{ background: T.paper, color: T.ink, fontFamily: F.body, minHeight: '100vh' }}>
      <SPNav T={T} F={F} active="Journal" />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px 20px' : '60px 40px 40px', position: 'relative' }}>
        <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 32, opacity: 0.7 }}>
          <span>✳ Journal · Notes · Thoughts</span>
          <span>Writing down what we learn.</span>
        </div>

        <div style={{ position: 'relative' }}>
          {!isMobile && <SPStatusSticker T={T} F={F} top={-10} left={140} rotate={-6} variant="tape" tape={T.popA} bg={mint} icon="✎" iconBg={T.ink} label="Latest" name="New post" />}
          {!isMobile && <SPStatusSticker T={T} F={F} top={140} right={140} rotate={7} variant="torn" bg={butter} icon="☕" iconBg={T.popB} label="Status" name="Drafting" />}
          {!isMobile && <SPStar size={60} color={T.popA} rotate={18} top={60} right={60} />}

          <h1 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 15vw, 260px)', lineHeight: 0.84, fontWeight: 700, letterSpacing: '-0.05em', margin: 0 }}>
            the <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>journal,</span><br />some <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400 }}>thoughts.</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr 1fr', gap: isMobile ? 32 : 40, marginTop: isMobile ? 40 : 60, alignItems: 'start' }}>
          <SPParallax speed={0.06}>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.8 }}>A collection of notes on process, craft, and building things we actually want to see exist.</p>
          </SPParallax>
          <SPParallax speed={0.04}>
            <p style={{ margin: 0, fontFamily: F.italic, fontStyle: 'italic', fontSize: 22, lineHeight: 1.35, textAlign: 'center' }}>
              We write when we have something to say. Not when an algorithm asks us to.
            </p>
          </SPParallax>
          <SPParallax speed={0.08} style={{ textAlign: 'center' }}>
            <Link to="/contact" style={{ display: 'inline-flex', gap: 8, padding: '12px 22px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>Subscribe →</Link>
          </SPParallax>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: isMobile ? '20px 20px 60px' : '40px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gridAutoRows: 'auto', gap: 16 }}>
          {entries.map((entry, i) => (
            <article key={i} style={{
              gridColumn: isMobile ? '1 / -1' : `span ${entry.big ? 8 : 4}`,
              background: entry.bg, border: `1px solid ${T.ink}`, borderRadius: 20,
              padding: isMobile ? 24 : 32, position: 'relative', overflow: 'hidden',
              color: T.ink,
              minHeight: 300, cursor: 'pointer', textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 16px 32px rgba(0,0,0,0.1)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20 }}>
                    <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
                      {entry.category}
                    </span>
                    <span style={{ fontSize: 11, letterSpacing: '0.1em', opacity: 0.6 }}>
                      {entry.date}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: F.display, fontSize: entry.big ? 'clamp(32px, 6vw, 56px)' : 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, margin: 0 }}>{entry.title}</h3>
                  {entry.big && <p style={{ fontFamily: F.italic, fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, marginTop: 16, maxWidth: 480, opacity: 0.8 }}>{entry.excerpt}</p>}
                </div>
  
                <div style={{ marginTop: entry.big ? 0 : 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${T.ink}22`, paddingTop: 16 }}>
                  <span style={{ fontSize: 12, opacity: 0.7 }}>{entry.readTime}</span>
                  <span style={{ fontSize: 16 }}>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '80px 20px' : '120px 40px', textAlign: 'center', background: peach, borderTop: `1px solid ${T.ink}`, position: 'relative', overflow: 'hidden' }}>
        <SPStar size={120} color={T.popB} rotate={15} top={40} right={isMobile ? -20 : 80} />
        <SPStar size={80} color={T.popA} rotate={-20} bottom={isMobile ? 20 : 60} left={isMobile ? -20 : 80} />
        <h2 style={{ fontFamily: F.display, fontSize: 'clamp(60px, 14vw, 200px)', lineHeight: 0.85, fontWeight: 700, letterSpacing: '-0.05em', margin: 0 }}>
          read <span style={{ fontFamily: F.italic, fontStyle: 'italic', fontWeight: 400, color: T.popA }}>enough?</span>
        </h2>
        <Link to="/contact" style={{ display: 'inline-flex', gap: 12, marginTop: 40, padding: '22px 34px', background: T.ink, color: T.paper, borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Start a project →</Link>
      </section>

      <SPFooter T={T} F={F} />
    </div>
  );
}

export default SPJournal;
