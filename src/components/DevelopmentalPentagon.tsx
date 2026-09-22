import { useState } from 'react';
import { Brain, Compass, Palette, Medal, Leaf, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PENTAGON_PILLARS } from '../data/schoolData';

interface DevelopmentalPentagonProps {
  onOpenAdmission: () => void;
}

export const DevelopmentalPentagon = ({ onOpenAdmission }: DevelopmentalPentagonProps) => {
  const [activePillarId, setActivePillarId] = useState<string>(PENTAGON_PILLARS[0].id);

  const activePillar = PENTAGON_PILLARS.find(p => p.id === activePillarId) || PENTAGON_PILLARS[0];

  const getPillarIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Brain': return <Brain size={size} />;
      case 'Compass': return <Compass size={size} />;
      case 'Palette': return <Palette size={size} />;
      case 'Medal': return <Medal size={size} />;
      case 'Leaf': return <Leaf size={size} />;
      default: return <Brain size={size} />;
    }
  };

  // Precomputed coordinates for a regular pentagon centered at (150, 150) with radius 105
  // Top: (150, 45)
  // Top Right: (250, 118)
  // Bottom Right: (212, 235)
  // Bottom Left: (88, 235)
  // Top Left: (50, 118)
  const nodePositions = [
    { id: 'intellectual', x: 150, y: 45, label: 'Intellect' },
    { id: 'ethical', x: 250, y: 118, label: 'Ethics' },
    { id: 'creative', x: 212, y: 235, label: 'Arts' },
    { id: 'physical', x: 88, y: 235, label: 'Athletics' },
    { id: 'environmental', x: 50, y: 118, label: 'Ecology' }
  ];

  return (
    <section id="pentagon" className="section-wrapper bg-warm-canvas" style={{
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <div className="badge-tag badge-blue">
            <Sparkles size={14} />
            <span>Lakshaya Signature Pedagogy</span>
          </div>
          <h2 className="section-title">
            The Developmental Pentagon
          </h2>
          <p className="section-subtitle">
            An interactive holistic framework synthesizing Indian cultural heritage with international standards across five synergistic dimensions.
          </p>
        </div>

        {/* Interactive Pillar Selector Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
          gap: '0.75rem',
          marginBottom: '1.75rem'
        }}>
          {PENTAGON_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                style={{
                  backgroundColor: isSelected ? pillar.color : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  border: isSelected ? `2px solid ${pillar.color}` : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: isSelected ? 'var(--shadow-xl)' : 'var(--shadow-xs)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.22)' : `${pillar.color}15`,
                  color: isSelected ? '#ffffff' : pillar.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem'
                }}>
                  {getPillarIcon(pillar.icon, 22)}
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  opacity: isSelected ? 0.95 : 0.7,
                  marginBottom: '0.2rem',
                  letterSpacing: '0.04em'
                }}>
                  {pillar.sanskritName}
                </div>

                <div style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  lineHeight: 1.2
                }}>
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight & SVG Interactive Diagram */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'center'
          }} className="pentagon-detail-grid">
            
            {/* Left Content Area */}
            <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: `${activePillar.color}18`,
                color: activePillar.color,
                fontWeight: 800,
                fontSize: '0.85rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1rem',
                alignSelf: 'flex-start'
              }}>
                {getPillarIcon(activePillar.icon, 16)}
                <span>Dimension of {activePillar.title}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--primary-950)',
                marginBottom: '0.5rem'
              }}>
                {activePillar.title} — <span style={{ color: activePillar.color }}>{activePillar.sanskritName}</span>
              </h3>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.75rem'
              }}>
                {activePillar.fullDesc}
              </p>

              <div style={{
                fontSize: '0.875rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                marginBottom: '1rem'
              }}>
                Key Curricular Highlights & Activities
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                {activePillar.highlights.map((h, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    backgroundColor: 'var(--bg-main)',
                    padding: '0.75rem 0.95rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <CheckCircle2 size={18} color={activePillar.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={onOpenAdmission}
                  className="btn"
                  style={{
                    backgroundColor: activePillar.color,
                    color: '#ffffff',
                    boxShadow: `0 8px 20px ${activePillar.color}40`,
                    padding: '0.8rem 1.75rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  <span>Explore Admissions</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Interactive SVG Diagram */}
            <div style={{
              background: `linear-gradient(135deg, ${activePillar.color}10 0%, #ffffff 100%)`,
              borderLeft: '1px solid var(--border-light)',
              padding: '2.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {/* Outer connecting polygon */}
                  <polygon
                    points="150,45 250,118 212,235 88,235 50,118"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />

                  {/* Inner spokes from center (150, 150) */}
                  {nodePositions.map((pos) => (
                    <line
                      key={pos.id}
                      x1="150"
                      y1="150"
                      x2={pos.x}
                      y2={pos.y}
                      stroke={pos.id === activePillarId ? activePillar.color : '#e2e8f0'}
                      strokeWidth={pos.id === activePillarId ? "3" : "1.5"}
                    />
                  ))}

                  {/* Active highlight polygon */}
                  <polygon
                    points="150,45 250,118 212,235 88,235 50,118"
                    fill={`${activePillar.color}12`}
                  />

                  {/* Center Node */}
                  <circle cx="150" cy="150" r="28" fill="#ffffff" stroke="var(--primary-900)" strokeWidth="3" />
                  <text x="150" y="147" textAnchor="middle" fontSize="10" fontWeight="900" fill="var(--primary-900)">LAKSHAYA</text>
                  <text x="150" y="160" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--accent-crimson)">PENTAGON</text>

                  {/* 5 Vertex Nodes */}
                  {nodePositions.map((pos) => {
                    const isNodeActive = pos.id === activePillarId;
                    const pillarObj = PENTAGON_PILLARS.find(p => p.id === pos.id)!;
                    return (
                      <g
                        key={pos.id}
                        onClick={() => setActivePillarId(pos.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isNodeActive ? "24" : "18"}
                          fill={isNodeActive ? pillarObj.color : '#ffffff'}
                          stroke={pillarObj.color}
                          strokeWidth="2.5"
                          filter={isNodeActive ? "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" : "none"}
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 4}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="800"
                          fill={isNodeActive ? "#ffffff" : pillarObj.color}
                        >
                          {pos.label.slice(0, 4)}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div style={{
                textAlign: 'center',
                maxWidth: '280px',
                marginTop: '0.5rem'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Interactive Geometry
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.2rem' }}>
                  Click any vertex on the pentagon or the top buttons to inspect each developmental dimension.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .pentagon-detail-grid {
            grid-template-columns: 1.35fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
