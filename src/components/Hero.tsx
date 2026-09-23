import { useState, useEffect } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Trophy, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Calculator, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Compass,
  TreePine,
  Medal,
  Info,
  HeartHandshake
} from 'lucide-react';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
  onOpenFastFacts?: () => void;
  onOpenPolicies?: () => void;
}

interface SlideData {
  id: string;
  badgeIcon: any;
  badgeText: string;
  badgeColor: string;
  titlePrimary: string;
  titleHighlight: string;
  titleSecondary: string;
  mottoQuote: string;
  description: string;
  trustPoints: string[];
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  categoryTag: string;
}

export const Hero = ({ onOpenAdmission, onOpenBrochure, onOpenFastFacts }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number>(4);

  const getWingForAge = (age: number) => {
    if (age <= 3) return { wing: 'Early Years (Pre-Nursery)', ratio: '1:8', focus: 'Montessori playway, sensory motor mastery & joy' };
    if (age <= 5) return { wing: 'Early Years (KG Wing)', ratio: '1:10', focus: 'Foundational phonics, social bonding & arts' };
    if (age <= 10) return { wing: 'Primary Wing (Grades 1-5)', ratio: '1:15', focus: 'Inquiry science, math logic & Shilaj Farm trips' };
    if (age <= 14) return { wing: 'Middle Wing (Grades 6-8)', ratio: '1:15', focus: 'Discovery Quiz, robotics labs & Karate championships' };
    return { wing: 'Senior Secondary (Grades 9-12)', ratio: '1:15', focus: 'Rigorous board excellence & global university prep' };
  };

  const wingInfo = getWingForAge(selectedAge);

  // 100% Authentic Slides directly derived from lakshayaschool.com
  const slides: SlideData[] = [
    {
      id: 'vision',
      badgeIcon: Award,
      badgeText: 'An Educational Initiative of Agarwal Group (35-Yr Lineage)',
      badgeColor: 'var(--accent-gold)',
      titlePrimary: 'Nurturing',
      titleHighlight: 'Compassionate, Ethical',
      titleSecondary: 'Global Citizens.',
      mottoQuote: 'Knowledge is the Supreme Goal • Behind the Name : AIM HIGH',
      description: 'Lakshaya International School offers an exceptional educational environment on Sardar Patel Ring Road, blending 35 years of Agrawal Group trust with student-first pedagogy: "A well formed mind is better than just a well filled one."',
      trustPoints: ['Putting Children First', '2-Acre Certified Campus', '1:15 Teacher-Student Ratio'],
      ctaPrimaryText: 'Admissions Open 2025-26',
      ctaSecondaryText: 'Download Official E-Brochure',
      categoryTag: '01. Vision & Credo'
    },
    {
      id: 'eci-award',
      badgeIcon: Trophy,
      badgeText: '27th ECI National Education Award Winner',
      badgeColor: '#fbbf24',
      titlePrimary: 'Honoured as',
      titleHighlight: 'Best Pre-School',
      titleSecondary: '& Best Principal Leadership.',
      mottoQuote: 'Ms. Neha Agrawal Conferred with "Best Pre School Principal" Award',
      description: 'Recognized at the prestigious 27th ECI National Education Awards. Guided by our 5 foundational beliefs: every child is born potentially gifted, unique, and learns best in a joyous, curious school environment.',
      trustPoints: ['ECI Award Winner', '5 Foundational Beliefs', 'Early Years Excellence'],
      ctaPrimaryText: 'Explore Pre-Primary Wing',
      ctaSecondaryText: 'Read Principal Address',
      categoryTag: '02. National Award'
    },
    {
      id: 'mission-pentagon',
      badgeIcon: Sparkles,
      badgeText: 'Collaborative & Inquisitive 21st-Century Learning',
      badgeColor: '#60a5fa',
      titlePrimary: 'Preparing for a',
      titleHighlight: 'Tech-Savvy World',
      titleSecondary: 'Through Inquisitive Scholarship.',
      mottoQuote: 'Cognitive • Social • Emotional • Physical • Ethical Development',
      description: 'Our mission is to prepare students for a fast changing, dynamic world through self-reflective inquiry. Our signature Developmental Pentagon ensures harmonious growth across all 5 human faculties.',
      trustPoints: ['Signature Pentagon Model', 'Science & Hi-Tech IT Labs', 'STEM Inquiry Curriculum'],
      ctaPrimaryText: 'Explore Pentagon Model',
      ctaSecondaryText: 'Download Curriculum',
      categoryTag: '03. Mission & Pentagon'
    },
    {
      id: 'campus-safety',
      badgeIcon: ShieldCheck,
      badgeText: '2 Acres on S.P. Ring Road • Certified Earthquake Safety',
      badgeColor: '#34d399',
      titlePrimary: 'Engineered for',
      titleHighlight: 'Absolute Safety',
      titleSecondary: '& Green Nature Immersion.',
      mottoQuote: 'Sunlit Smart Classrooms & Shilaj Agricultural Eco-Farm Hub',
      description: 'A certified earthquake-resistant campus featuring expansive daylight-filled classrooms, verified GPS-tracked bus fleet, dedicated martial arts dojo, and unique outdoor botanical learning at Shilaj Farm.',
      trustPoints: ['Certified Seismic Resistance', 'Shilaj Agricultural Farm', 'Open-Access Library System'],
      ctaPrimaryText: 'Book Guided Campus Visit',
      ctaSecondaryText: 'Inspect Campus Facilities',
      categoryTag: '04. Safe Smart Campus'
    },
    {
      id: 'achievements',
      badgeIcon: Medal,
      badgeText: 'Discovery Channel Wild Wisdom & 22 All-India Karate Medals',
      badgeColor: '#f59e0b',
      titlePrimary: 'Where Students Win',
      titleHighlight: 'National Podiums',
      titleSecondary: 'In Academics & Martial Arts.',
      mottoQuote: 'State Finalists in Wild Wisdom Quiz • 51 National SpellBee Honors',
      description: 'Lakshaya students consistently triumph: 22 medals at the 2nd All-India Shito-Ryu Karate Championship, 4 state finalists & 225+ Discovery Channel quiz awards, and Khel Maha Kumbh gold medals.',
      trustPoints: ['22 All-India Karate Medals', 'Wild Wisdom Quiz Finalists', '51 National SpellBee Laurels'],
      ctaPrimaryText: 'Join Lakshaya Champions',
      ctaSecondaryText: 'View Hall of Laurels',
      categoryTag: '05. Hall of Laurels'
    }
  ];

  // Auto-slide transition
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrimaryCTA = () => {
    if (slide.id === 'mission-pentagon') {
      const el = document.getElementById('pentagon');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'campus-safety') {
      const el = document.getElementById('campus');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'achievements') {
      const el = document.getElementById('achievements');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'eci-award') {
      const el = document.getElementById('academics');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    onOpenAdmission();
  };

  const handleSecondaryCTA = () => {
    if (slide.id === 'eci-award') {
      const el = document.getElementById('leadership');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'campus-safety') {
      const el = document.getElementById('campus');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'achievements') {
      const el = document.getElementById('achievements');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    onOpenBrochure();
  };

  return (
    <section 
      id="hero" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #061122 0%, #0d203f 45%, #050e1b 100%)',
        color: '#ffffff',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%'
      }}
      className="single-screen-hero"
    >
      {/* Background Sanskrit Seal Watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(400px, 60vw, 750px)',
        height: 'clamp(400px, 60vw, 750px)',
        borderRadius: '50%',
        border: '1px dashed rgba(245, 158, 11, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <div style={{
          width: '80%',
          height: '80%',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.02)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
          LAKSHAYA • AHMEDABAD
        </div>
      </div>

      {/* Ambient Lighting Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: 'clamp(300px, 45vw, 550px)',
        height: 'clamp(300px, 45vw, 550px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(237, 28, 37, 0.12) 0%, rgba(245, 158, 11, 0.08) 50%, rgba(0, 0, 0, 0) 75%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-5%',
        width: 'clamp(280px, 40vw, 500px)',
        height: 'clamp(280px, 40vw, 500px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 64, 175, 0.22) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Main Slide Content Area */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%', 
        maxWidth: '1280px',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Top Header Row with Category Badge + Official Portal Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.35rem',
          marginBottom: '0.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
            {/* Active Slide Category Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              padding: '0.12rem 0.55rem',
              borderRadius: 'var(--radius-full)',
              backdropFilter: 'blur(8px)'
            }}>
              <slide.badgeIcon size={12} color={slide.badgeColor} style={{ flexShrink: 0 }} />
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                color: slide.badgeColor,
                letterSpacing: '0.03em',
                textTransform: 'uppercase'
              }}>
                {slide.badgeText}
              </span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              backgroundColor: 'rgba(237, 28, 37, 0.12)',
              border: '1px solid rgba(237, 28, 37, 0.35)',
              padding: '0.12rem 0.5rem',
              borderRadius: 'var(--radius-full)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#fca5a5', textTransform: 'uppercase' }}>
                Official Portal • S.P. Ring Road
              </span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(0.6rem, 1.5vw, 1.25rem)',
          alignItems: 'center',
          flex: 1
        }} className="hero-slide-grid">
          
          {/* Left Column: Headline & Official School Information */}
          <div style={{ minWidth: 0, maxWidth: '100%' }}>
            
            {/* Dynamic Headline */}
            <h1 style={{
              fontSize: 'clamp(1.15rem, 1.9vw, 1.7rem)',
              fontWeight: 800,
              lineHeight: 1.16,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '0.22rem',
              wordBreak: 'break-word'
            }}>
              {slide.titlePrimary}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #fde047 0%, #f59e0b 60%, #ed1c25 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                {slide.titleHighlight}
              </span>{' '}
              {slide.titleSecondary}
            </h1>

            {/* Sanskrit / Motto Subhead directly from lakshayaschool.com */}
            <div style={{
              display: 'inline-block',
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(0.68rem, 1vw, 0.78rem)',
              color: 'rgba(254, 243, 199, 0.95)',
              borderLeft: '2.5px solid #ed1c25',
              paddingLeft: '0.45rem',
              marginBottom: '0.22rem',
              letterSpacing: '0.02em',
              fontStyle: 'italic',
              lineHeight: 1.25
            }}>
              "{slide.mottoQuote}"
            </div>

            {/* Verbatim Description from Real Site */}
            <p style={{
              fontSize: 'clamp(0.68rem, 0.95vw, 0.76rem)',
              color: '#cbd5e1',
              lineHeight: 1.35,
              marginBottom: '0.3rem',
              maxWidth: '560px'
            }}>
              {slide.description}
            </p>

            {/* Trust points */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.2rem 0.6rem',
              marginBottom: '0.35rem',
              fontSize: 'clamp(0.65rem, 0.9vw, 0.7rem)',
              color: '#e2e8f0'
            }}>
              {slide.trustPoints.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle2 size={12} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>{pt}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.35rem',
              alignItems: 'center'
            }}>
              <button
                onClick={handlePrimaryCTA}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backgroundColor: '#ed1c25',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.32rem 0.8rem',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(237, 28, 37, 0.35)'
                }}
              >
                <span>{slide.ctaPrimaryText}</span>
                <ArrowRight size={13} />
              </button>

              <button
                onClick={handleSecondaryCTA}
                className="btn btn-outline-white"
                style={{
                  padding: '0.32rem 0.75rem',
                  fontSize: '0.74rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <FileText size={13} />
                <span>{slide.ctaSecondaryText}</span>
              </button>

              {/* Fast Facts Modal Pill */}
              {onOpenFastFacts && (
                <button
                  onClick={onOpenFastFacts}
                  style={{
                    background: 'transparent',
                    border: '1px dashed rgba(245, 158, 11, 0.5)',
                    color: 'var(--accent-gold)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.32rem 0.65rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  title="Open Lakshaya Fast Facts"
                >
                  <Info size={12} />
                  <span>Fast Facts</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Slide-Specific Visual Feature Card */}
          <div style={{ minWidth: 0, maxWidth: '100%', position: 'relative' }}>
            
            {/* Slide 1 Visual: Grade & Age Calculator */}
            {currentSlide === 0 && (
              <div style={{
                backgroundColor: 'rgba(11, 23, 44, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(245, 158, 11, 0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.55rem 0.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calculator size={14} color="var(--accent-gold)" />
                    <h3 style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 800 }}>
                      Grade & Age Eligibility Matcher
                    </h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    backgroundColor: 'rgba(237, 28, 37, 0.2)',
                    color: '#fca5a5',
                    padding: '0.08rem 0.4rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.64rem',
                    fontWeight: 800
                  }}>
                    <span>Admissions 2025-26</span>
                  </div>
                </div>

                <div style={{ marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', marginBottom: '0.2rem', color: '#cbd5e1' }}>
                    <span>Child's Age:</span>
                    <strong style={{ color: 'var(--accent-gold)' }}>{selectedAge} Years Old</strong>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '0.2rem',
                    overflowX: 'auto',
                    paddingBottom: '0.1rem',
                    maxWidth: '100%',
                    scrollbarWidth: 'none'
                  }}>
                    {[2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16].map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAge(age)}
                        style={{
                          width: '21px',
                          height: '21px',
                          borderRadius: '50%',
                          border: selectedAge === age ? '2px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                          backgroundColor: selectedAge === age ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.08)',
                          color: selectedAge === age ? '#0b1a30' : '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.66rem',
                          cursor: 'pointer',
                          flexShrink: 0
                        }}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(6, 14, 26, 0.85)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.35rem 0.55rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '0.35rem'
                }}>
                  <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 800, letterSpacing: '0.04em' }}>
                    Recommended Wing & Teacher Ratio:
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', margin: '0.05rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{wingInfo.wing}</span>
                    <span style={{ fontSize: '0.64rem', color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.15)', padding: '0.05rem 0.3rem', borderRadius: '4px' }}>
                      Ratio {wingInfo.ratio}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.66rem', color: '#cbd5e1', lineHeight: 1.25, margin: 0 }}>
                    {wingInfo.focus}
                  </p>
                </div>

                <button
                  onClick={onOpenAdmission}
                  style={{
                    width: '100%',
                    backgroundColor: '#ed1c25',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.32rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Apply for {wingInfo.wing.split('(')[0]}</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            )}

            {/* Slide 2 Visual: 27th ECI Award & 5 Foundational Beliefs */}
            {currentSlide === 1 && (
              <div style={{
                backgroundColor: 'rgba(11, 23, 44, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(251, 191, 36, 0.35)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.55rem 0.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
                  <Trophy size={14} color="var(--accent-gold)" />
                  <h3 style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 800 }}>
                    27th ECI Award • Our 5 Core Beliefs
                  </h3>
                </div>

                <div style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '0.28rem 0.45rem',
                  borderRadius: 'var(--radius-xs)',
                  marginBottom: '0.3rem'
                }}>
                  <div style={{ fontSize: '0.64rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                    ECI National Education Award Citation:
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#ffffff', fontWeight: 600, marginTop: '0.04rem', lineHeight: 1.2 }}>
                    Ms. Neha Agrawal honoured as <em>Best Pre School Principal</em> & Lakshaya recognized as <em>Best Pre School</em>.
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.12rem', marginBottom: '0.35rem' }}>
                  {[
                    '1. Every child is born potentially gifted.',
                    '2. Each child is a unique individual.',
                    '3. Fostering curiosity makes the child an eager learner.',
                    '4. Children learn best when they are happy.',
                    '5. PUTTING CHILDREN FIRST.'
                  ].map((belief, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.12rem 0.35rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      fontSize: '0.65rem',
                      color: idx === 4 ? 'var(--accent-gold)' : '#e2e8f0',
                      fontWeight: idx === 4 ? 800 : 500
                    }}>
                      <HeartHandshake size={10} color={idx === 4 ? 'var(--accent-gold)' : '#60a5fa'} style={{ flexShrink: 0 }} />
                      <span>{belief}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#leadership"
                  className="btn btn-outline-white"
                  style={{ width: '100%', fontSize: '0.72rem', padding: '0.32rem', borderRadius: 'var(--radius-sm)' }}
                >
                  <span>Read Ms. Neha Agrawal's Welcome Address</span>
                  <ArrowRight size={11} />
                </a>
              </div>
            )}

            {/* Slide 3 Visual: The 5 Pentagon Dimensions */}
            {currentSlide === 2 && (
              <div style={{
                backgroundColor: 'rgba(11, 23, 44, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(96, 165, 250, 0.35)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.55rem 0.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
                  <Sparkles size={14} color="#60a5fa" />
                  <h3 style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 800 }}>
                    The 5 Pentagon Dimensions
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.14rem', marginBottom: '0.35rem' }}>
                  {[
                    { name: '1. Cognitive Acuity', desc: 'Critical inquiry, STEM & math logic', color: '#60a5fa' },
                    { name: '2. Emotional Balance', desc: 'Resilience, mindfulness & self-regulation', color: '#f472b6' },
                    { name: '3. Physical Vigor', desc: 'Karate dojo, athletics & fitness mastery', color: '#34d399' },
                    { name: '4. Social Harmony', desc: 'Collaborative bonding & Shilaj Farm outings', color: '#fbbf24' },
                    { name: '5. Ethical Soul', desc: 'Universal values, integrity & empathy', color: '#a78bfa' }
                  ].map((p, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.14rem 0.35rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderLeft: `2.5px solid ${p.color}`
                    }}>
                      <div style={{ fontWeight: 800, fontSize: '0.68rem', color: '#ffffff' }}>{p.name}:</div>
                      <div style={{ fontSize: '0.64rem', color: '#cbd5e1' }}>{p.desc}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#pentagon"
                  className="btn btn-outline-white"
                  style={{ width: '100%', fontSize: '0.72rem', padding: '0.32rem', borderRadius: 'var(--radius-sm)' }}
                >
                  <span>Interact with Pentagon Geometry</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            )}

            {/* Slide 4 Visual: Campus Safety & Eco Infrastructure */}
            {currentSlide === 3 && (
              <div style={{
                backgroundColor: 'rgba(11, 23, 44, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(52, 211, 153, 0.35)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.55rem 0.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
                  <ShieldCheck size={14} color="#34d399" />
                  <h3 style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 800 }}>
                    Campus Safety & Eco Infrastructure
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem', marginBottom: '0.35rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.35rem 0.45rem', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <ShieldCheck size={14} color="#34d399" style={{ marginBottom: '0.1rem' }} />
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff' }}>Seismic Safe</div>
                    <div style={{ fontSize: '0.64rem', color: '#cbd5e1', lineHeight: 1.2 }}>Certified earthquake safety</div>
                  </div>

                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.35rem 0.45rem', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <TreePine size={14} color="#34d399" style={{ marginBottom: '0.1rem' }} />
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff' }}>Shilaj Farm</div>
                    <div style={{ fontSize: '0.64rem', color: '#cbd5e1', lineHeight: 1.2 }}>Hands-on eco field trips</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.67rem', color: '#cbd5e1', marginBottom: '0.35rem', lineHeight: 1.25 }}>
                  📍 <strong>2 Acres Campus:</strong> S.P. Ring Road, Opp. Applewoods, Ahmedabad.
                </div>

                <a
                  href="#campus"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.72rem', padding: '0.32rem', borderRadius: 'var(--radius-sm)' }}
                >
                  <Compass size={12} />
                  <span>Inspect Campus Amenities & Labs</span>
                </a>
              </div>
            )}

            {/* Slide 5 Visual: Medals & Trophy Showcase */}
            {currentSlide === 4 && (
              <div style={{
                backgroundColor: 'rgba(11, 23, 44, 0.82)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(251, 191, 36, 0.35)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.55rem 0.8rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
                  <Trophy size={14} color="var(--accent-gold)" />
                  <h3 style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 800 }}>
                    Verified Student Laurels (Real Records)
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.18rem', marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.22rem 0.4rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-xs)' }}>
                    <Medal size={14} color="#eab308" />
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ffffff' }}>22 Medals • 2nd All-India Shito-Ryu Karate</div>
                      <div style={{ fontSize: '0.64rem', color: '#cbd5e1' }}>6 Gold, 7 Silver, 9 Bronze & 4 Certificates</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.22rem 0.4rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-xs)' }}>
                    <Trophy size={14} color="#60a5fa" />
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ffffff' }}>Discovery Channel Wild Wisdom Quiz</div>
                      <div style={{ fontSize: '0.64rem', color: '#cbd5e1' }}>4 State Finalists & 225+ Certificates</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.22rem 0.4rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-xs)' }}>
                    <Award size={14} color="#34d399" />
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ffffff' }}>SpellBee National Level Examination</div>
                      <div style={{ fontSize: '0.64rem', color: '#cbd5e1' }}>51 National Level Certificates</div>
                    </div>
                  </div>
                </div>

                <a
                  href="#achievements"
                  className="btn btn-outline-white"
                  style={{ width: '100%', fontSize: '0.72rem', padding: '0.32rem', borderRadius: 'var(--radius-sm)' }}
                >
                  <span>Inspect Complete Hall of Laurels</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Slide Controller & Quick Stats Bar */}
        <div style={{
          marginTop: '0.2rem',
          marginBottom: '0.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '0.4rem',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--radius-md)',
          padding: '0.15rem 0.55rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Slide Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  background: currentSlide === idx ? 'rgba(237, 28, 37, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                  border: currentSlide === idx ? '1px solid #ed1c25' : '1px solid transparent',
                  color: currentSlide === idx ? '#ffffff' : '#cbd5e1',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.1rem 0.42rem',
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                <span style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === idx ? '#ed1c25' : 'rgba(255, 255, 255, 0.4)'
                }} />
                <span>{s.categoryTag}</span>
              </button>
            ))}
          </div>

          {/* Prev/Next Controls + Quick Stat Pointers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            <div style={{ display: 'none', alignItems: 'center', gap: '0.55rem' }} className="hero-stats-compact">
              <span style={{ fontSize: '0.68rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                <strong style={{ color: '#ffffff' }}>2 Acres</strong> Campus
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ fontSize: '0.68rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                <strong style={{ color: '#ffffff' }}>1:15</strong> Mentorship
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ fontSize: '0.68rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                <strong style={{ color: 'var(--accent-gold)' }}>250+</strong> Honors
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={12} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Next Slide"
              >
                <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .single-screen-hero {
            height: calc(100vh - 95px) !important;
            min-height: 400px !important;
            max-height: calc(100vh - 95px) !important;
            overflow: hidden !important;
          }
          .hero-slide-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 1rem !important;
          }
        }
        @media (min-width: 1220px) {
          .hero-stats-compact {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .single-screen-hero {
            min-height: calc(100vh - 95px) !important;
            padding-top: 0.4rem !important;
            padding-bottom: 0.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};
