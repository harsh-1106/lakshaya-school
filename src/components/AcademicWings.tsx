import { useState } from 'react';
import { CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';
import { ACADEMIC_WINGS } from '../data/schoolData';

interface AcademicWingsProps {
  onOpenAdmission: () => void;
}

export const AcademicWings = ({ onOpenAdmission }: AcademicWingsProps) => {
  const [activeWingId, setActiveWingId] = useState<string>(ACADEMIC_WINGS[0].id);

  const activeWing = ACADEMIC_WINGS.find(w => w.id === activeWingId) || ACADEMIC_WINGS[0];

  return (
    <section id="academics" className="section-wrapper bg-academic-sapphire" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <GraduationCap size={14} />
            <span>Academic Wings</span>
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Tailored Pathways for Every Stage
          </h2>
          <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
            From our award-winning Pre-Nursery foundation to senior secondary scholarship, 
            we provide age-appropriate pedagogy, individualized mentorship, and rich experiential learning.
          </p>
        </div>

        {/* Wing Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.625rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {ACADEMIC_WINGS.map((wing) => {
            const isSelected = wing.id === activeWingId;
            return (
              <button
                key={wing.id}
                onClick={() => setActiveWingId(wing.id)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '2px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                  color: isSelected ? 'var(--accent-gold)' : '#cbd5e1',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 0 20px rgba(245, 158, 11, 0.2)' : 'none',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <span>{wing.name}</span>
                <span style={{
                  fontSize: '0.72rem',
                  padding: '0.12rem 0.45rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isSelected ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.12)',
                  color: isSelected ? '#1e1b4b' : '#cbd5e1',
                  fontWeight: 800
                }}>
                  {wing.grades.split(',')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Wing Content Display */}
        <div style={{
          backgroundColor: 'rgba(10, 24, 48, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 255, 255, 0.14)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-premium)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'stretch'
          }} className="wing-display-grid">
            
            {/* Wing Photo */}
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <img
                src={activeWing.image}
                alt={activeWing.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(7, 15, 30, 0.9)',
                backdropFilter: 'blur(8px)',
                color: 'var(--accent-gold)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}>
                {activeWing.grades}
              </div>
            </div>

            {/* Wing Details */}
            <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                color: 'var(--accent-gold)',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.4rem'
              }}>
                {activeWing.tagline}
              </div>

              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#ffffff', marginBottom: '0.75rem', fontWeight: 800 }}>
                {activeWing.name}
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {activeWing.description}
              </p>

              {/* Focus Areas */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '0.65rem'
                }}>
                  Core Curricular Competencies
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                  gap: '0.65rem'
                }}>
                  {activeWing.focusAreas.map((area, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <CheckCircle2 size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Pill Row */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
                marginBottom: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '1.25rem'
              }}>
                {activeWing.highlights.map((h, i) => (
                  <span key={i} style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.12)',
                    color: 'var(--accent-gold)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    ✦ {h}
                  </span>
                ))}
              </div>

              <div>
                <button
                  onClick={onOpenAdmission}
                  className="btn btn-primary"
                  style={{ borderRadius: 'var(--radius-full)' }}
                >
                  <span>Apply for {activeWing.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .wing-display-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
};
