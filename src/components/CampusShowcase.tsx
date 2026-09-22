import { ShieldCheck, Sun, Trophy, TreePine, BookOpen, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data/schoolData';

interface CampusShowcaseProps {
  onOpenAdmission: () => void;
}

export const CampusShowcase = ({ onOpenAdmission }: CampusShowcaseProps) => {

  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'earthquake-safe': return <ShieldCheck size={22} />;
      case 'smart-classes': return <Sun size={22} />;
      case 'sports-complex': return <Trophy size={22} />;
      case 'shilaj-farm': return <TreePine size={22} />;
      case 'knowledge-center': return <BookOpen size={22} />;
      case 'science-labs': return <Microscope size={22} />;
      default: return <ShieldCheck size={22} />;
    }
  };

  return (
    <section id="campus" className="section-wrapper bg-warm-canvas" style={{
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-crimson">
            <ShieldCheck size={14} />
            <span>Infrastructure & Safety</span>
          </div>
          <h2 className="section-title">
            Engineered for Safety, Designed for Wonder
          </h2>
          <p className="section-subtitle">
            Situated on Sardar Patel Ring Road, Ahmedabad, Lakshaya's certified earthquake-resistant campus 
            combines seismic engineering with naturally sunlit classrooms and expansive outdoor learning hubs.
          </p>
        </div>

        {/* Facilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1rem, 2.5vw, 2rem)',
          marginBottom: '3rem'
        }}>
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all var(--transition-normal)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
            >
              {/* Photo Box */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 15, 30, 0.7) 0%, transparent 60%)'
                }} />

                {/* Badge */}
                {facility.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(7, 15, 30, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--accent-gold)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(245, 158, 11, 0.3)'
                  }}>
                    {facility.badge}
                  </span>
                )}

                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: '#ffffff'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--accent-gold)',
                    color: '#1e1b4b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getFacilityIcon(facility.id)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', lineHeight: 1.2 }}>
                      {facility.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--primary-700)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  {facility.subtitle}
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {facility.description}
                </p>

                <div style={{
                  marginTop: 'auto',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {facility.features.slice(0, 3).map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                      <CheckCircle size={14} color="#059669" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Booking Strip */}
        <div style={{
          background: 'linear-gradient(135deg, #091a32 0%, #0e274b 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          boxShadow: 'var(--shadow-premium)',
          border: '1.5px solid rgba(245, 158, 11, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          color: '#ffffff'
        }}>
          <div>
            <h4 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', color: '#ffffff', marginBottom: '0.35rem', fontWeight: 800 }}>
              Want to Experience the Campus in Person?
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', maxWidth: '640px' }}>
              Schedule a guided walkthrough to inspect our smart classrooms, sports dojo, and certified earthquake-resilient architecture.
            </p>
          </div>

          <button
            onClick={onOpenAdmission}
            className="btn btn-primary"
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <span>Book a Campus Walkthrough</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
