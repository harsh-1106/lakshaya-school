import { useState } from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { STUDENT_LIFE_EVENTS } from '../data/schoolData';

export const BeyondClassroom = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Art & Creativity', 'Experiential Learning', 'Sports', 'Celebrations'];

  const filteredEvents = activeCategory === 'All'
    ? STUDENT_LIFE_EVENTS
    : STUDENT_LIFE_EVENTS.filter(e => e.category === activeCategory);

  return (
    <section id="student-life" className="section-wrapper bg-warm-linen" style={{ borderTop: '1px solid var(--border-light)' }}>
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
            state-level art exhibitions and Shilaj Farm ecology immersions to festive pajama celebrations and martial arts.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => {
            const isSelected = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '1.5px solid var(--primary-900)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--primary-900)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Event Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1rem, 2.5vw, 1.75rem)'
        }}>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(7, 15, 30, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: 'var(--accent-gold)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {event.category}
                </div>
              </div>

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} color="var(--primary-700)" />
                    <span>{event.dateText}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={14} color="var(--accent-crimson)" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-950)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {event.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
