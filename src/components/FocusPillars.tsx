import { useState } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { LEGACY_FOCUS_ITEMS, type LegacyFocusItem } from '../data/schoolData';

interface FocusPillarsProps {
  onOpenAdmission: () => void;
}

export const FocusPillars = ({ onOpenAdmission }: FocusPillarsProps) => {
  const [selectedItem, setSelectedItem] = useState<LegacyFocusItem | null>(null);

  return (
    <section id="focus-on" className="section-wrapper bg-warm-canvas" style={{
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-crimson">
            <Sparkles size={14} />
            <span>Core Institutional Focus</span>
          </div>
          <h2 className="section-title">
            The 8 Pillars of Campus Life
          </h2>
          <p className="section-subtitle">
            Directly defining the Lakshaya difference: From seismic earthquake-resistant construction and inquiry curricula 
            to Shilaj Farm nature journeys, festive pajama parties, and championship sports.
          </p>
        </div>

        {/* 8-Card Interactive Creative Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          {LEGACY_FOCUS_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card interactive-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-light)',
                cursor: 'pointer'
              }}
            >
              {/* Photo Box */}
              <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Gradient shade */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6, 14, 26, 0.85) 0%, transparent 60%)'
                }} />

                {/* Number & Category badges */}
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#1e1b4b',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-xs)',
                  letterSpacing: '0.05em'
                }}>
                  {item.number}
                </div>

                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  right: '0.85rem',
                  backgroundColor: 'rgba(7, 15, 30, 0.8)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {item.badge}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '0.85rem',
                  left: '1rem',
                  right: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.15rem',
                    color: '#ffffff',
                    fontWeight: 800,
                    lineHeight: 1.25
                  }}>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--accent-crimson)',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {item.tagline}
                  </div>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '1rem'
                  }}>
                    {item.expandedDesc.slice(0, 115)}...
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--primary-700)'
                }}>
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Focus Pillar */}
        {selectedItem && (
          <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
              <div style={{ position: 'relative', height: '260px' }}>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.5rem',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#1e1b4b',
                  fontSize: '0.8rem',
                  fontWeight: 900,
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  Pillar {selectedItem.number} • {selectedItem.badge}
                </div>
              </div>

              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-950)', marginBottom: '0.5rem' }}>
                  {selectedItem.title}
                </h3>
                <div style={{ color: 'var(--accent-crimson)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  {selectedItem.tagline}
                </div>

                <div style={{
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--primary-900)',
                  fontSize: '0.925rem',
                  borderLeft: '4px solid var(--accent-gold)',
                  marginBottom: '1.25rem'
                }}>
                  "{selectedItem.originalText}"
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {selectedItem.expandedDesc}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onOpenAdmission();
                    }}
                    className="btn btn-primary"
                    style={{ borderRadius: 'var(--radius-full)', flex: 1 }}
                  >
                    <span>Inquire About This Program</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="btn btn-outline-navy"
                    style={{ borderRadius: 'var(--radius-full)' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
