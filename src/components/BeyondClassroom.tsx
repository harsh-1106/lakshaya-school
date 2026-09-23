import { useState, useRef, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { STUDENT_LIFE_EVENTS } from '../data/schoolData';

export const BeyondClassroom = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Art & Creativity', 'Experiential Learning', 'Sports', 'Celebrations'];

  const filteredEvents = activeCategory === 'All'
    ? STUDENT_LIFE_EVENTS
    : STUDENT_LIFE_EVENTS.filter(e => e.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredEvents.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredEvents.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="student-life" className="section-wrapper bg-warm-linen" style={{ borderTop: '1px solid var(--border-light)', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <Sparkles size={14} />
            <span>Beyond The Textbook</span>
          </div>
          <h2 className="section-title">
            Vibrant Student Life & Experiences
          </h2>
          <p className="section-subtitle">
            Classroom teaching is foundational at Lakshaya, yet we support a rich kaleidoscope of extracurricular pursuits—from 
            state-level art exhibitions and Shilaj Farm ecology immersions to festive pajama celebrations and martial arts championships.
          </p>
        </div>

        {/* Filter Pills & Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.4rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => {
              const isSelected = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: isSelected ? '1.5px solid #07152b' : '1px solid rgba(0,0,0,0.12)',
                    backgroundColor: isSelected ? '#07152b' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#475569',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
              {currentIndex + 1} / {filteredEvents.length}
            </span>
            <button
              onClick={handlePrev}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#07152b',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
              }}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#07152b',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#ffffff',
                boxShadow: '0 2px 6px rgba(7, 21, 43, 0.25)'
              }}
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Smooth Interactive Showcase Grid / Slider */}
        <div 
          ref={sliderRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {filteredEvents.map((event, idx) => (
            <div
              key={event.id}
              className="student-life-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 16px rgba(11, 26, 48, 0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(11, 26, 48, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(11, 26, 48, 0.06)';
              }}
            >
              {/* Photo Area with Instant Load Local Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    display: 'block'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Category Badge on image */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(7, 21, 43, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--accent-gold)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  {event.category}
                </div>

                {/* Location indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(6px)',
                  color: '#0f172a',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}>
                  <MapPin size={11} color="#ed1c25" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.45rem', fontSize: '0.75rem', color: '#64748b' }}>
                    <Calendar size={13} color="#ed1c25" />
                    <span>{event.dateText}</span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', color: '#07152b', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {event.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {event.description}
                  </p>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ed1c25', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Explore Activity <ArrowRight size={12} />
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>
                    Official Record
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
