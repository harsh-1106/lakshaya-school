import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export const Testimonials = () => {
  return (
    <section className="section-wrapper bg-warm-canvas" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <Quote size={14} />
            <span>Community Voices</span>
          </div>
          <h2 className="section-title">
            Trusted by Parents, Celebrated by Educators
          </h2>
          <p className="section-subtitle">
            Hear from families whose children have blossomed under Lakshaya's nurturing environment, 
            academic focus, and vibrant extracurricular culture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1rem, 2.5vw, 2rem)',
          marginBottom: '3.5rem'
        }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-light)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                color: 'var(--border-light)',
                pointerEvents: 'none'
              }}>
                <Quote size={40} />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  ))}
                </div>

                <p style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '1.25rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-100)',
                  color: 'var(--primary-800)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  flexShrink: 0
                }}>
                  {t.parentName.charAt(0)}
                </div>

                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary-950)' }}>
                    {t.parentName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-700)', fontWeight: 600 }}>
                    {t.studentGrade}
                  </div>
                  {t.awardOrRole && (
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {t.awardOrRole}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations & Recognitions Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #091a32 0%, #102444 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.3)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-premium)',
          color: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <Award size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>Best Pre-School Principal</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Ms. Neha Agrawal (27th ECI Awards)</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <Award size={32} color="var(--accent-crimson)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>Best Pre-Nursery International</div>
              <div style={{ fontSize: '0.8rem', color: '#fca5a5' }}>Ranked #1 in Ahmedabad</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <Award size={32} color="#34d399" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>Earthquake Safe Certification</div>
              <div style={{ fontSize: '0.8rem', color: '#6ee7b7' }}>Engineered Structural Safety</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
