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
  Medal
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
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

export const Hero = ({ onOpenAdmission, onOpenBrochure }: HeroProps) => {
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

  const slides: SlideData[] = [
    {
      id: 'admissions',
      badgeIcon: Award,
      badgeText: 'Ranked #1 Pre-Nursery & International School Ahmedabad',
      badgeColor: 'var(--accent-gold)',
      titlePrimary: 'Nurturing',
      titleHighlight: 'Global Minds,',
      titleSecondary: 'Grounded in Timeless Values.',
      mottoQuote: SCHOOL_INFO.sanskritMotto,
      description: 'Welcome to Lakshaya International School. Rooted in our signature Developmental Pentagon pedagogy and safeguarded by an earthquake-resistant smart campus, we prepare ethical innovators for tomorrow.',
      trustPoints: ['Earthquake-Resistant Campus', 'Shilaj Farm Eco-Learning', 'Karate & Skating Laurels'],
      ctaPrimaryText: 'Apply for Admission 2025-26',
      ctaSecondaryText: 'Download E-Brochure',
      categoryTag: '01. Admissions 2025-26'
    },
    {
      id: 'pentagon',
      badgeIcon: Sparkles,
      badgeText: 'Signature Developmental Pentagon Pedagogy',
      badgeColor: '#60a5fa',
      titlePrimary: 'Shaping',
      titleHighlight: 'Complete Humans,',
      titleSecondary: 'Across 5 Core Dimensions.',
      mottoQuote: 'Cognitive • Social • Emotional • Physical • Ethical Excellence',
      description: 'Our proprietary curriculum integrates classical Indian wisdom with progressive international standards, ensuring balanced growth from sensory pre-school discovery through senior secondary scholarship.',
      trustPoints: ['Inquiry-Based Learning', 'Individualized Mentorship (1:15)', 'Universal Ethics & Empathy'],
      ctaPrimaryText: 'Explore Pentagon Model',
      ctaSecondaryText: 'Download E-Brochure',
      categoryTag: '02. Pentagon Pedagogy'
    },
    {
      id: 'campus',
      badgeIcon: ShieldCheck,
      badgeText: 'Sardar Patel Ring Road • Certified Seismic Engineering',
      badgeColor: '#34d399',
      titlePrimary: 'Engineered for',
      titleHighlight: 'Child Safety,',
      titleSecondary: 'Inspired by Natural Wonder.',
      mottoQuote: 'Sunlit Smart Classrooms & Organic Shilaj Farm Excursions',
      description: 'A certified earthquake-resistant campus featuring expansive daylight-filled classrooms, state-of-the-art science and robotics laboratories, and outdoor eco-learning at Shilaj Farm.',
      trustPoints: ['Certified Seismic Safety', 'Natural Daylight Classrooms', 'Dedicated Martial Arts Dojo'],
      ctaPrimaryText: 'Book Guided Campus Visit',
      ctaSecondaryText: 'View Campus Gallery',
      categoryTag: '03. Safe Smart Campus'
    },
    {
      id: 'honors',
      badgeIcon: Trophy,
      badgeText: '250+ State & National Competitive Laurels',
      badgeColor: '#fbbf24',
      titlePrimary: 'Where Young',
      titleHighlight: 'Champions Rise',
      titleSecondary: 'In Academics & Martial Arts.',
      mottoQuote: 'Discovery Channel Wild Wisdom Quiz State Finalists',
      description: 'Lakshaya students consistently excel on national podiums: from 22 medals in All-India Shito-Ryu Karate to 51 National SpellBee certificates and district sports championships.',
      trustPoints: ['22+ All-India Karate Medals', 'Wild Wisdom Quiz Laurels', '51 National SpellBee Honors'],
      ctaPrimaryText: 'Join Lakshaya Today',
      ctaSecondaryText: 'View Hall of Fame',
      categoryTag: '04. 250+ Laurels'
    }
  ];

  // Auto-slide transition
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
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
    if (slide.id === 'pentagon') {
      const el = document.getElementById('pentagon');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'campus') {
      const el = document.getElementById('campus');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'honors') {
      const el = document.getElementById('achievements');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    onOpenAdmission();
  };

  const handleSecondaryCTA = () => {
    if (slide.id === 'campus') {
      const el = document.getElementById('gallery');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (slide.id === 'honors') {
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
        background: 'radial-gradient(ellipse at 30% 20%, #162c52 0%, #0a192f 55%, #050e1c 100%)',
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
      {/* Background Realistic Architectural & Ambient Accents */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-5%',
        width: 'clamp(280px, 40vw, 520px)',
        height: 'clamp(280px, 40vw, 520px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: 'clamp(260px, 35vw, 460px)',
        height: 'clamp(260px, 35vw, 460px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Main Slide Content Area */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%', 
        maxWidth: '1280px',
        paddingTop: 'clamp(1rem, 2.5vh, 2rem)',
        paddingBottom: 'clamp(0.75rem, 2vh, 1.5rem)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(1rem, 2.5vw, 2.25rem)',
          alignItems: 'center'
        }} className="hero-slide-grid">
          
          {/* Left Column: Headline & Messaging */}
          <div style={{ minWidth: 0, maxWidth: '100%' }}>
            
            {/* Prestige Ribbon */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: 'rgba(245, 158, 11, 0.14)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.65rem',
              backdropFilter: 'blur(8px)',
              maxWidth: '100%'
            }}>
              <slide.badgeIcon size={14} color={slide.badgeColor} style={{ flexShrink: 0 }} />
              <span style={{
                fontSize: 'clamp(0.68rem, 1.6vw, 0.78rem)',
                fontWeight: 700,
                color: slide.badgeColor,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                lineHeight: 1.3
              }}>
                {slide.badgeText}
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1 style={{
              fontSize: 'clamp(1.65rem, 3.4vw, 2.85rem)',
              fontWeight: 800,
              lineHeight: 1.16,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              marginBottom: '0.55rem',
              wordBreak: 'break-word'
            }}>
              {slide.titlePrimary}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                {slide.titleHighlight}
              </span>{' '}
              {slide.titleSecondary}
            </h1>

            {/* Sanskrit / Motto Subhead */}
            <div style={{
              display: 'inline-block',
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
              color: 'rgba(254, 243, 199, 0.95)',
              borderLeft: '3px solid var(--accent-gold)',
              paddingLeft: '0.65rem',
              marginBottom: '0.65rem',
              letterSpacing: '0.02em',
              fontStyle: 'italic',
              lineHeight: 1.35
            }}>
              "{slide.mottoQuote}"
            </div>

            {/* Concise Description */}
            <p style={{
              fontSize: 'clamp(0.825rem, 1.4vw, 0.95rem)',
              color: '#cbd5e1',
              lineHeight: 1.5,
              marginBottom: '0.85rem',
              maxWidth: '560px'
            }}>
              {slide.description}
            </p>

            {/* Trust points */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem 0.85rem',
              marginBottom: '1rem',
              fontSize: 'clamp(0.72rem, 1.4vw, 0.8rem)',
              color: '#e2e8f0'
            }}>
              {slide.trustPoints.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle2 size={14} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              alignItems: 'center'
            }}>
              <button
                onClick={handlePrimaryCTA}
                className="btn btn-primary"
                style={{
                  padding: 'clamp(0.55rem, 1.4vw, 0.75rem) clamp(1rem, 2vw, 1.4rem)',
                  fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <span>{slide.ctaPrimaryText}</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={handleSecondaryCTA}
                className="btn btn-outline-white"
                style={{
                  padding: 'clamp(0.55rem, 1.4vw, 0.75rem) clamp(0.85rem, 1.8vw, 1.25rem)',
                  fontSize: 'clamp(0.78rem, 1.6vw, 0.86rem)',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <FileText size={15} />
                <span>{slide.ctaSecondaryText}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Slide-Specific Visual Feature Card */}
          <div style={{ minWidth: 0, maxWidth: '100%', position: 'relative' }}>
            
            {/* Slide 1 Visual: Grade & Age Calculator */}
            {currentSlide === 0 && (
              <div style={{
                backgroundColor: 'rgba(15, 30, 56, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1rem, 2vw, 1.4rem)',
                boxShadow: 'var(--shadow-premium)',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calculator size={16} color="var(--accent-gold)" />
                    <h3 style={{ fontSize: 'clamp(0.88rem, 1.8vw, 1rem)', color: '#ffffff', fontWeight: 800 }}>
                      Grade & Age Eligibility Matcher
                    </h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    color: 'var(--accent-gold)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 700
                  }}>
                    <Trophy size={11} />
                    <span>250+ Wins</span>
                  </div>
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.35rem', color: '#cbd5e1' }}>
                    <span>Select Child's Age:</span>
                    <strong style={{ color: 'var(--accent-gold)' }}>{selectedAge} Years Old</strong>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '0.3rem',
                    overflowX: 'auto',
                    paddingBottom: '0.25rem',
                    maxWidth: '100%',
                    scrollbarWidth: 'none'
                  }}>
                    {[2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16].map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAge(age)}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          border: selectedAge === age ? '2px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                          backgroundColor: selectedAge === age ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.08)',
                          color: selectedAge === age ? '#1e1b4b' : '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.75rem',
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
                  backgroundColor: 'rgba(6, 14, 26, 0.8)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 800, letterSpacing: '0.04em' }}>
                    Recommended Wing:
                  </div>
                  <div style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', fontWeight: 800, color: '#ffffff', margin: '0.15rem 0' }}>
                    {wingInfo.wing}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.35, margin: 0 }}>
                    {wingInfo.focus}
                  </p>
                </div>

                <button
                  onClick={onOpenAdmission}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem' }}
                >
                  <span>Apply for {wingInfo.wing.split('(')[0]}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            )}

            {/* Slide 2 Visual: 5 Pillars Interactive Card */}
            {currentSlide === 1 && (
              <div style={{
                backgroundColor: 'rgba(15, 30, 56, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(96, 165, 250, 0.3)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1rem, 2vw, 1.4rem)',
                boxShadow: 'var(--shadow-premium)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={16} color="#60a5fa" />
                  <h3 style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 800 }}>
                    The 5 Pentagon Dimensions
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  {[
                    { name: '1. Cognitive Acuity', desc: 'Critical thinking, STEM & scientific inquiry', color: '#60a5fa' },
                    { name: '2. Emotional Balance', desc: 'Resilience, mindfulness & self-regulation', color: '#f472b6' },
                    { name: '3. Physical Vigor', desc: 'Karate dojo, athletics & fitness mastery', color: '#34d399' },
                    { name: '4. Social Harmony', desc: 'Collaborative bonding & farm excursions', color: '#fbbf24' },
                    { name: '5. Ethical Soul', desc: 'Universal values, integrity & empathy', color: '#a78bfa' }
                  ].map((p, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.35rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderLeft: `3px solid ${p.color}`
                    }}>
                      <div style={{ fontWeight: 800, fontSize: '0.78rem', color: '#ffffff' }}>{p.name}:</div>
                      <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>{p.desc}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#pentagon"
                  className="btn btn-outline-white"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem', borderRadius: 'var(--radius-md)' }}
                >
                  <span>Interact with Pentagon Geometry</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            )}

            {/* Slide 3 Visual: Campus Safety & Nature Card */}
            {currentSlide === 2 && (
              <div style={{
                backgroundColor: 'rgba(15, 30, 56, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(52, 211, 153, 0.3)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1rem, 2vw, 1.4rem)',
                boxShadow: 'var(--shadow-premium)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={16} color="#34d399" />
                  <h3 style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 800 }}>
                    Campus Safety & Eco Infrastructure
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.85rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <ShieldCheck size={20} color="#34d399" style={{ marginBottom: '0.25rem' }} />
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>Seismic Safe</div>
                    <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Earthquake-certified structural engineering</div>
                  </div>

                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <TreePine size={20} color="#34d399" style={{ marginBottom: '0.25rem' }} />
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>Shilaj Farm</div>
                    <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Hands-on eco & botany field learning</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  📍 Sardar Patel Ring Road, Opp. Applewoods Township, Ahmedabad.
                </div>

                <a
                  href="#campus"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem', borderRadius: 'var(--radius-md)' }}
                >
                  <Compass size={14} />
                  <span>Inspect Campus Amenities</span>
                </a>
              </div>
            )}

            {/* Slide 4 Visual: Medals & Trophy Showcase */}
            {currentSlide === 3 && (
              <div style={{
                backgroundColor: 'rgba(15, 30, 56, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(251, 191, 36, 0.3)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1rem, 2vw, 1.4rem)',
                boxShadow: 'var(--shadow-premium)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <Trophy size={16} color="var(--accent-gold)" />
                  <h3 style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 800 }}>
                    Verified Student Laurels
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-md)' }}>
                    <Medal size={22} color="#eab308" />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>22 Medals • Shito-Ryu Karate</div>
                      <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>All-India martial arts gold & silver honors</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-md)' }}>
                    <Trophy size={22} color="#60a5fa" />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>Discovery Channel Quiz Finalists</div>
                      <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Wild Wisdom State level winners</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)' }}>
                    <Award size={22} color="#34d399" />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>51 National SpellBee Laurels</div>
                      <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Top-tier language mastery certificates</div>
                    </div>
                  </div>
                </div>

                <a
                  href="#achievements"
                  className="btn btn-outline-white"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem', borderRadius: 'var(--radius-md)' }}
                >
                  <span>Inspect Complete Hall of Laurels</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Slide Controller & Quick Stats Bar */}
        <div style={{
          marginTop: 'clamp(0.75rem, 1.8vh, 1.25rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--radius-md)',
          padding: '0.5rem 1rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Slide Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  background: currentSlide === idx ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  border: currentSlide === idx ? '1px solid var(--accent-gold)' : '1px solid transparent',
                  color: currentSlide === idx ? 'var(--accent-gold)' : '#cbd5e1',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.2rem 0.65rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === idx ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.4)'
                }} />
                <span>{s.categoryTag}</span>
              </button>
            ))}
          </div>

          {/* Prev/Next Controls + Quick Stat Pointers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="hero-stats-compact">
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#ffffff' }}>1:15</strong> Mentorship
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#ffffff' }}>100%</strong> Board Pass
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                <strong style={{ color: 'var(--accent-gold)' }}>250+</strong> Honors
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '26px',
                  height: '26px',
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
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: '26px',
                  height: '26px',
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
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .single-screen-hero {
            height: calc(100vh - 120px) !important;
            min-height: 540px !important;
            max-height: 720px !important;
          }
          .hero-slide-grid {
            grid-template-columns: 1.18fr 0.82fr !important;
          }
          .hero-stats-compact {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .single-screen-hero {
            min-height: calc(100vh - 120px) !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
