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
  photoUrl: string;
  photoCaption: string;
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

  // 100% Authentic Slides with Real School Photos & Verbatim Text from lakshayaschool.com
  const slides: SlideData[] = [
    {
      id: 'vision',
      badgeIcon: Award,
      badgeText: 'Agarwal Group Educational Initiative (35-Yr Lineage)',
      badgeColor: '#fbbf24',
      titlePrimary: 'Nurturing',
      titleHighlight: 'Compassionate, Ethical',
      titleSecondary: 'Global Citizens.',
      mottoQuote: 'Knowledge is the Supreme Goal • Behind the Name : AIM HIGH',
      description: 'Lakshaya International School offers an exceptional educational environment on Sardar Patel Ring Road, blending 35 years of Agrawal Group trust with student-first pedagogy: "A well formed mind is better than just a well filled one."',
      trustPoints: ['Putting Children First', '2-Acre Certified Campus', '1:15 Ratio'],
      ctaPrimaryText: 'Admissions Open 2025-26',
      ctaSecondaryText: 'Official E-Brochure',
      categoryTag: '01. Vision & Credo',
      photoUrl: '/images/school_hero_students.jpg',
      photoCaption: 'Happy Lakshaya Students • S.P. Ring Road Campus'
    },
    {
      id: 'eci-award',
      badgeIcon: Trophy,
      badgeText: '27th ECI National Education Award Winner',
      badgeColor: '#f59e0b',
      titlePrimary: 'Honoured as',
      titleHighlight: 'Best Pre-School',
      titleSecondary: '& Best Principal Leadership.',
      mottoQuote: 'Ms. Neha Agrawal Conferred with "Best Pre School Principal" Award',
      description: 'Recognized at the prestigious 27th ECI National Education Awards. Guided by our 5 foundational beliefs: every child is born potentially gifted, unique, and learns best in a joyous, curious school environment.',
      trustPoints: ['ECI Award Winner', '5 Core Beliefs', 'Early Years Excellence'],
      ctaPrimaryText: 'Explore Pre-Primary',
      ctaSecondaryText: 'Principal Welcome Address',
      categoryTag: '02. National Award',
      photoUrl: '/images/science_quiz.jpg',
      photoCaption: 'Recognized for Child-Centric Pedagogical Excellence'
    },
    {
      id: 'mission-pentagon',
      badgeIcon: Sparkles,
      badgeText: 'Collaborative & Inquisitive 21st-Century Learning',
      badgeColor: '#38bdf8',
      titlePrimary: 'Preparing for a',
      titleHighlight: 'Tech-Savvy World',
      titleSecondary: 'Through Inquisitive Scholarship.',
      mottoQuote: 'Cognitive • Social • Emotional • Physical • Ethical Development',
      description: 'Our mission is to prepare students for a fast changing, dynamic world through self-reflective inquiry. Our signature Developmental Pentagon ensures harmonious growth across all 5 human faculties.',
      trustPoints: ['Pentagon Model', 'Hi-Tech IT Labs', 'STEM Inquiry'],
      ctaPrimaryText: 'Explore Pentagon',
      ctaSecondaryText: 'Download Curriculum',
      categoryTag: '03. Pentagon',
      photoUrl: '/images/art_exhibition.jpg',
      photoCaption: 'Annual Art Exhibition & Creative Expression Studios'
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
      trustPoints: ['Seismic Safe', 'Shilaj Eco Farm', 'Open-Access Library'],
      ctaPrimaryText: 'Book Campus Tour',
      ctaSecondaryText: 'Inspect Facilities',
      categoryTag: '04. Campus & Farm',
      photoUrl: '/images/shilaj_farm.jpg',
      photoCaption: 'Hands-on Agriculture & Botany at Shilaj Organic Farm'
    },
    {
      id: 'achievements',
      badgeIcon: Medal,
      badgeText: '22 All-India Karate Medals & Wild Wisdom Quiz Podiums',
      badgeColor: '#fbbf24',
      titlePrimary: 'Where Students Win',
      titleHighlight: 'National Podiums',
      titleSecondary: 'In Academics & Martial Arts.',
      mottoQuote: 'State Finalists in Wild Wisdom Quiz • 51 National SpellBee Honors',
      description: 'Lakshaya students consistently triumph: 22 medals at the 2nd All-India Shito-Ryu Karate Championship, 4 state finalists & 225+ Discovery Channel quiz awards, and Khel Maha Kumbh gold medals.',
      trustPoints: ['22 All-India Medals', 'Wild Wisdom Finalists', '51 SpellBee Awards'],
      ctaPrimaryText: 'Lakshaya Champions',
      ctaSecondaryText: 'Hall of Laurels',
      categoryTag: '05. Laurels',
      photoUrl: '/images/karate_championship.jpg',
      photoCaption: 'All-India Shito-Ryu Karate Champions with Sensei'
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
        // Authentic Prestigious Collegiate Navy with Warm Subtle Tone (Not Gaming Cyber Glows)
        background: 'linear-gradient(135deg, #07152b 0%, #0d2240 60%, #081730 100%)',
        color: '#ffffff',
        overflow: 'hidden',
        borderBottom: '3px solid #d97706', // Royal Academic Gold Stripe
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%'
      }}
      className="single-screen-hero"
    >
      {/* Classical Academic Guilloche & Sanskrit Motto Watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(320px, 45vw, 650px)',
        height: 'clamp(320px, 45vw, 650px)',
        borderRadius: '50%',
        border: '1px solid rgba(217, 119, 6, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <div style={{
          width: '84%',
          height: '84%',
          borderRadius: '50%',
          border: '1px dashed rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1rem, 2.5vw, 2rem)',
          fontWeight: 800,
          color: 'rgba(255, 255, 255, 0.03)',
          letterSpacing: '0.18em',
          textAlign: 'center'
        }}>
          LAKSHAYA • AHMEDABAD
        </div>
      </div>

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
        {/* Top Institutional Trust Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '0.4rem',
          marginBottom: '0.2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
            {/* Active Slide Category Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              backgroundColor: 'rgba(217, 119, 6, 0.18)',
              border: '1px solid rgba(245, 158, 11, 0.45)',
              padding: '0.1rem 0.5rem',
              borderRadius: 'var(--radius-full)'
            }}>
              <slide.badgeIcon size={12} color={slide.badgeColor} style={{ flexShrink: 0 }} />
              <span style={{
                fontSize: '0.66rem',
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
              backgroundColor: 'rgba(237, 28, 37, 0.16)',
              border: '1px solid rgba(237, 28, 37, 0.35)',
              padding: '0.1rem 0.45rem',
              borderRadius: 'var(--radius-full)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ed1c25', display: 'inline-block' }} />
              <span style={{ fontSize: '0.64rem', fontWeight: 800, color: '#fca5a5', textTransform: 'uppercase' }}>
                CBSE • S.P. Ring Road
              </span>
            </div>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '0.4rem', fontSize: '0.66rem', color: '#cbd5e1' }} className="hero-top-seal">
            <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>★ Admissions 2025-26 Open</span>
          </div>
        </div>

        {/* Center Grid: Left Text Column + Right Real School Photo Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(0.6rem, 1.4vw, 1.25rem)',
          alignItems: 'center',
          flex: 1
        }} className="hero-slide-grid">
          
          {/* Left Column: Official School Pedagogy & Headings */}
          <div style={{ minWidth: 0, maxWidth: '100%' }}>
            
            {/* Dynamic Headline */}
            <h1 style={{
              fontSize: 'clamp(1.15rem, 1.75vw, 1.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '0.2rem',
              wordBreak: 'break-word'
            }}>
              {slide.titlePrimary}{' '}
              <span style={{
                color: '#fde047',
                textDecoration: 'underline',
                textDecorationColor: '#ed1c25',
                textUnderlineOffset: '3px',
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
              fontSize: 'clamp(0.66rem, 0.95vw, 0.74rem)',
              color: '#fef08a',
              borderLeft: '2.5px solid #ed1c25',
              paddingLeft: '0.45rem',
              marginBottom: '0.2rem',
              letterSpacing: '0.02em',
              fontStyle: 'italic',
              lineHeight: 1.25
            }}>
              "{slide.mottoQuote}"
            </div>

            {/* Verbatim Description from Real Site */}
            <p style={{
              fontSize: 'clamp(0.66rem, 0.9vw, 0.73rem)',
              color: '#cbd5e1',
              lineHeight: 1.35,
              marginBottom: '0.28rem',
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
              fontSize: 'clamp(0.64rem, 0.85vw, 0.68rem)',
              color: '#f1f5f9'
            }}>
              {slide.trustPoints.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle2 size={12} color="#fbbf24" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 700 }}>{pt}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
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
                  padding: '0.32rem 0.75rem',
                  fontSize: '0.74rem',
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
                  padding: '0.32rem 0.7rem',
                  fontSize: '0.72rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <FileText size={12} />
                <span>{slide.ctaSecondaryText}</span>
              </button>

              {/* Fast Facts Modal Pill */}
              {onOpenFastFacts && (
                <button
                  onClick={onOpenFastFacts}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(251, 191, 36, 0.45)',
                    color: '#fbbf24',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.32rem 0.6rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  title="Open Lakshaya Fast Facts"
                >
                  <Info size={11} />
                  <span>Fast Facts</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Genuine School Photo Frame + Compact Interactive Widget */}
          <div style={{ minWidth: 0, maxWidth: '100%', position: 'relative' }}>
            <div style={{
              backgroundColor: '#0c1d37',
              border: '1.5px solid rgba(251, 191, 36, 0.35)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              boxSizing: 'border-box'
            }}>
              {/* Authentic School Photo Banner */}
              <div style={{ position: 'relative', height: '135px', overflow: 'hidden', backgroundColor: '#07152b' }}>
                <img 
                  src={slide.photoUrl} 
                  alt={slide.photoCaption}
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
                
                {/* Official Photo Caption Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.4rem',
                  left: '0.5rem',
                  right: '0.5rem',
                  backgroundColor: 'rgba(7, 21, 43, 0.88)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255,255,255,0.12)'
                }}>
                  <span style={{ fontSize: '0.64rem', color: '#f8fafc', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {slide.photoCaption}
                  </span>
                  <span style={{ fontSize: '0.58rem', color: '#fbbf24', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Verified
                  </span>
                </div>
              </div>

              {/* Compact Interactive Area below the photograph */}
              <div style={{ padding: '0.45rem 0.65rem', backgroundColor: 'rgba(8, 20, 39, 0.95)' }}>
                {/* Slide 1 Widget: Age & Grade Calculator */}
                {currentSlide === 0 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', fontWeight: 800, color: '#fbbf24' }}>
                        <Calculator size={12} />
                        <span>Grade Eligibility Matcher</span>
                      </div>
                      <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>
                        Age: <strong style={{ color: '#ffffff' }}>{selectedAge} Yrs</strong>
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.18rem', overflowX: 'auto', paddingBottom: '0.1rem', marginBottom: '0.25rem', scrollbarWidth: 'none' }}>
                      {[2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16].map((age) => (
                        <button
                          key={age}
                          onClick={() => setSelectedAge(age)}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: selectedAge === age ? '2px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.25)',
                            backgroundColor: selectedAge === age ? '#fbbf24' : 'rgba(255, 255, 255, 0.08)',
                            color: selectedAge === age ? '#07152b' : '#ffffff',
                            fontWeight: 800,
                            fontSize: '0.64rem',
                            cursor: 'pointer',
                            flexShrink: 0
                          }}
                        >
                          {age}
                        </button>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.25rem 0.45rem', borderRadius: '4px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#ffffff', fontWeight: 800 }}>
                        {wingInfo.wing.split('(')[0]} <span style={{ fontSize: '0.62rem', color: '#38bdf8' }}>({wingInfo.ratio})</span>
                      </div>
                      <button
                        onClick={onOpenAdmission}
                        style={{
                          backgroundColor: '#ed1c25',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '3px',
                          padding: '0.18rem 0.45rem',
                          fontSize: '0.66rem',
                          fontWeight: 800,
                          cursor: 'pointer'
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                )}

                {/* Slide 2 Widget: 5 Foundational Beliefs */}
                {currentSlide === 1 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', fontWeight: 800, color: '#fbbf24' }}>
                        <Trophy size={12} />
                        <span>Our 5 Foundational Beliefs</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', color: '#34d399', fontWeight: 800 }}>ECI Award Winner</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', marginBottom: '0.25rem' }}>
                      <div style={{ fontSize: '0.65rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <HeartHandshake size={10} color="#fbbf24" />
                        <span>1. Every child is born potentially gifted.</span>
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <HeartHandshake size={10} color="#fbbf24" />
                        <span>2. Children learn best when they are happy.</span>
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#fbbf24', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <HeartHandshake size={10} color="#fbbf24" />
                        <span>3. PUTTING CHILDREN FIRST.</span>
                      </div>
                    </div>

                    <a
                      href="#leadership"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        color: '#ffffff',
                        padding: '0.2rem',
                        borderRadius: '3px',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      Read Principal Neha Agrawal's Address →
                    </a>
                  </div>
                )}

                {/* Slide 3 Widget: Pentagon Model */}
                {currentSlide === 2 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8' }}>
                        <Sparkles size={12} />
                        <span>The Developmental Pentagon</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', color: '#fde047', fontWeight: 800 }}>5 Faculties</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.2rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.64rem', color: '#e2e8f0', borderLeft: '2px solid #38bdf8', paddingLeft: '0.25rem' }}>Cognitive & STEM</span>
                      <span style={{ fontSize: '0.64rem', color: '#e2e8f0', borderLeft: '2px solid #f472b6', paddingLeft: '0.25rem' }}>Emotional Balance</span>
                      <span style={{ fontSize: '0.64rem', color: '#e2e8f0', borderLeft: '2px solid #34d399', paddingLeft: '0.25rem' }}>Physical Vigor</span>
                      <span style={{ fontSize: '0.64rem', color: '#e2e8f0', borderLeft: '2px solid #fbbf24', paddingLeft: '0.25rem' }}>Social Harmony</span>
                    </div>

                    <a
                      href="#pentagon"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: 'rgba(56, 189, 248, 0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        color: '#38bdf8',
                        padding: '0.2rem',
                        borderRadius: '3px',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      Interact with Pentagon Geometry →
                    </a>
                  </div>
                )}

                {/* Slide 4 Widget: Campus & Shilaj Farm */}
                {currentSlide === 3 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', fontWeight: 800, color: '#34d399' }}>
                        <TreePine size={12} />
                        <span>2-Acre Campus & Shilaj Farm</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>S.P. Ring Road</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', fontSize: '0.65rem', color: '#e2e8f0' }}>
                      <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.15rem 0.35rem', borderRadius: '3px' }}>🏛️ Seismic Certified</span>
                      <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.15rem 0.35rem', borderRadius: '3px' }}>🌿 Shilaj Eco-Hub</span>
                    </div>

                    <a
                      href="#campus"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: 'rgba(52, 211, 153, 0.15)',
                        border: '1px solid rgba(52, 211, 153, 0.3)',
                        color: '#34d399',
                        padding: '0.2rem',
                        borderRadius: '3px',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      View Campus Facilities & Labs →
                    </a>
                  </div>
                )}

                {/* Slide 5 Widget: Laurels */}
                {currentSlide === 4 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', fontWeight: 800, color: '#fbbf24' }}>
                        <Medal size={12} />
                        <span>National Laurels</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', color: '#38bdf8', fontWeight: 800 }}>250+ Awards</span>
                    </div>

                    <div style={{ fontSize: '0.64rem', color: '#e2e8f0', marginBottom: '0.25rem', lineHeight: 1.25 }}>
                      • <strong>22 Medals</strong> at All-India Karate Championship<br />
                      • <strong>4 State Finalists</strong> & 225+ Discovery Quiz Honors
                    </div>

                    <a
                      href="#achievements"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: 'rgba(251, 191, 36, 0.15)',
                        border: '1px solid rgba(251, 191, 36, 0.3)',
                        color: '#fbbf24',
                        padding: '0.2rem',
                        borderRadius: '3px',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      Inspect Complete Hall of Laurels →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slide Controller Bar (Single Slim Row Docked at Bottom) */}
        <div style={{
          marginTop: '0.15rem',
          marginBottom: '0.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '0.35rem',
          backgroundColor: 'rgba(7, 21, 43, 0.75)',
          backdropFilter: 'blur(8px)',
          borderRadius: 'var(--radius-md)',
          padding: '0.12rem 0.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Slide Indicator Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  background: currentSlide === idx ? 'rgba(237, 28, 37, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                  border: currentSlide === idx ? '1px solid #ed1c25' : '1px solid transparent',
                  color: currentSlide === idx ? '#ffffff' : '#cbd5e1',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.08rem 0.38rem',
                  fontSize: '0.62rem',
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

          {/* Prev/Next Navigation Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', flexShrink: 0 }}>
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

      <style>{`
        @media (min-width: 992px) {
          .single-screen-hero {
            height: calc(100vh - 95px) !important;
            min-height: 380px !important;
            max-height: calc(100vh - 95px) !important;
            overflow: hidden !important;
          }
          .hero-slide-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
            gap: 1rem !important;
          }
          .hero-top-seal {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .single-screen-hero {
            min-height: calc(100vh - 95px) !important;
            padding-top: 0.35rem !important;
            padding-bottom: 0.35rem !important;
          }
        }
      `}</style>
    </section>
  );
};
