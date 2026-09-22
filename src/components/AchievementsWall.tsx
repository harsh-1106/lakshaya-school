import { useState } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/schoolData';

export const AchievementsWall = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic & Quiz', 'Karate & Martial Arts', 'Sports'];

  const filtered = selectedCategory === 'All'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.category === selectedCategory);

  const getMedalColor = (type: string) => {
    switch (type) {
      case 'gold': return '#eab308';
      case 'silver': return '#94a3b8';
      case 'bronze': return '#d97706';
      case 'trophy': return 'var(--accent-gold)';
      default: return '#2563eb';
    }
  };

  return (
    <section id="achievements" className="section-wrapper bg-gold-canvas" style={{
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <Trophy size={14} />
            <span>Honors & Accolades</span>
          </div>
          <h2 className="section-title">
            Hall of Laurels & Milestones
          </h2>
          <p className="section-subtitle">
            From Discovery Channel's nationwide Wild Wisdom Quiz to All-India Martial Arts championships and 
            national SpellBee certifications, Lakshaya students consistently shine on competitive stages.
          </p>
        </div>

        {/* Milestone Metric Strips */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              backgroundColor: 'rgba(234, 179, 8, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ca8a04',
              flexShrink: 0
            }}>
              <Trophy size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-950)', lineHeight: 1.1 }}>
                229+
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Discovery Quiz Honors
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              backgroundColor: 'rgba(220, 38, 38, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-crimson)',
              flexShrink: 0
            }}>
              <Medal size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-950)', lineHeight: 1.1 }}>
                70+
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Karate & Martial Arts Medals
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              backgroundColor: 'rgba(37, 99, 235, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              flexShrink: 0
            }}>
              <Star size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-950)', lineHeight: 1.1 }}>
                51+
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                National SpellBee Certificates
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.625rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => {
            const isSelected = cat === selectedCategory;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '1.5px solid var(--primary-900)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--primary-900)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Achievements Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)'
        }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.25rem, 2vw, 1.75rem)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                border: '1px solid rgba(226, 232, 240, 0.9)'
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: `${getMedalColor(item.medalType)}18`,
                color: getMedalColor(item.medalType),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Trophy size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.35rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--primary-700)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {item.level}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-950)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--accent-gold-light)',
                  color: '#92400e',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '0.75rem'
                }}>
                  🏆 {item.result}
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
