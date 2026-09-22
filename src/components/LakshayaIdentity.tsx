import { useState } from 'react';
import { Target, Flame, BookOpen, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const LakshayaIdentity = () => {
  const [activeTab, setActiveTab] = useState<'meaning' | 'logo' | 'beliefs' | 'founder'>('meaning');

  return (
    <section id="identity" className="section-wrapper bg-dark-sapphire" style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <Target size={14} />
            <span>Heritage & Symbolism</span>
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            The Philosophy of 'Lakshaya'
          </h2>
          <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
            Every element of our name, emblem, and beliefs is crafted to inspire purposeful learning, 
            moral uprightness, and global excellence.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'meaning', label: "Meaning Of 'Lakshaya'", icon: Target },
            { id: 'logo', label: 'Our Logo Symbolism', icon: Flame },
            { id: 'beliefs', label: 'Our Beliefs & Motto', icon: BookOpen },
            { id: 'founder', label: 'Founder & Welcome Address', icon: Award },
          ].map(tab => {
            const isSelected = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '2px solid var(--primary-900)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--primary-900)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Icon size={16} color={isSelected ? 'var(--accent-gold)' : 'var(--primary-700)'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="glass-card" style={{
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-light)',
          minHeight: '380px'
        }}>
          {activeTab === 'meaning' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  color: 'var(--primary-950)',
                  fontWeight: 800,
                  marginBottom: '0.5rem'
                }}>
                  लक्ष्य <span style={{ fontSize: '1.25rem', color: 'var(--accent-crimson)', fontWeight: 600 }}>[Lakshaya]</span>
                </div>
                <div style={{ fontSize: '1.15rem', color: 'var(--accent-gold-hover)', fontWeight: 700, marginBottom: '1.25rem' }}>
                  The Noble Target • The Ultimate Aim
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {SCHOOL_INFO.meaningOfLakshaya}
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  In Sanskrit philosophical traditions, <em>Lakshaya</em> is not simply a mundane objective; 
                  it is the deliberate cultivation of one's faculties—intellectual, physical, and moral—directed 
                  toward enlightened service to society.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, var(--primary-950) 0%, var(--primary-850) 100%)',
                color: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <Sparkles size={24} color="var(--accent-gold)" />
                  <h4 style={{ color: '#ffffff', fontSize: '1.25rem' }}>Where Aim Meets Achievement</h4>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.925rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Clarity of Purpose:</strong> Teaching children to set constructive life goals early.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.925rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Enduring Discipline:</strong> Channeling energy into martial arts, academics, and creative arts.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.925rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Ethical Fulfillment:</strong> Success measured through integrity, kindness, and empathy.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'logo' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #070f1e 0%, #1e427d 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  boxShadow: '0 20px 40px rgba(11, 26, 48, 0.35)',
                  border: '4px solid var(--accent-gold)',
                  position: 'relative'
                }} className="animate-float">
                  <Flame size={54} />
                  <BookOpen size={36} style={{ marginTop: '0.5rem', color: '#ffffff' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    color: 'var(--accent-gold)'
                  }}>
                    LAKSHAYA CREST
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-950)', marginBottom: '0.75rem' }}>
                  The Anatomy of the Lakshaya Emblem
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {SCHOOL_INFO.logoSymbolism}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 800, color: 'var(--accent-gold-hover)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      🔥 Flame of Knowledge
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Igniting curiosity, intellect, and scientific reasoning.
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 800, color: 'var(--primary-700)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      📖 The Open Book
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Foundational literacy, scholarship, and Indian cultural values.
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 800, color: 'var(--accent-crimson)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      ☀️ Rising Sun
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Unfolding boundless global potential and enlightened vitality.
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 800, color: '#059669', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      🛡️ Shield of Values
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Moral integrity, character, and lifelong resilience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'beliefs' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}>
              <div style={{ borderRight: '1px solid var(--border-light)', paddingRight: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  color: 'var(--accent-crimson)',
                  fontWeight: 800,
                  marginBottom: '1rem'
                }}>
                  "{SCHOOL_INFO.sanskritMotto}"
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-950)', marginBottom: '0.75rem' }}>
                  Our Guiding Credo
                </h4>
                <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  At Lakshaya, we hold that true education liberates the human spirit. It removes ignorance, 
                  unlocks potential, and prepares each child for an unpredictable global future.
                </p>
                <div style={{
                  backgroundColor: 'var(--primary-50)',
                  borderLeft: '4px solid var(--primary-700)',
                  padding: '1rem',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                }}>
                  <div style={{ fontWeight: 700, color: 'var(--primary-900)', fontSize: '0.925rem' }}>
                    "A well formed mind is better than just a well filled one."
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    The Lakshaya Pedagogical Standard
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-950)', marginBottom: '1rem' }}>
                  Five Pillars of Institutional Belief
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                      1
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-950)' }}>Inquiry Over Memorization:</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '0.35rem' }}>
                        Children learn by doing, questioning, and experimenting in sunlit labs.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                      2
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-950)' }}>Holistic Balance:</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '0.35rem' }}>
                        Athletic vitality in Karate and Skating carries equal weight to mathematics.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                      3
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-950)' }}>Roots & Wings:</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '0.35rem' }}>
                        Firmly grounded in timeless Indian cultural ethics while equipped with international competencies.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'founder' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--accent-gold-light)',
                  color: '#92400e',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '1rem'
                }}>
                  <Award size={15} />
                  <span>27th ECI National Education Award Winner</span>
                </div>

                <h3 style={{ fontSize: '1.85rem', color: 'var(--primary-950)', marginBottom: '0.5rem' }}>
                  Ms. Neha Agrawal
                </h3>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-crimson)', marginBottom: '1.25rem' }}>
                  Principal & Educational Director • Lakshaya International School
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  "Welcome to Lakshaya International School. When we laid the cornerstone of Lakshaya on S.P. Ring Road, 
                  our dream was not just to erect an earthquake-safe campus, but to build a home of joyful discovery. 
                  Every child who enters our gates carries unique brilliance that our faculty nurtures with utmost patience and love."
                </p>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Honored as <strong>Best Pre-School Principal</strong> at the 27th ECI Awards, Ms. Agrawal leads 
                  a dedicated team of passionate educators shaping the future leaders of Gujarat and India.
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}>
                <div style={{ fontWeight: 800, color: 'var(--primary-950)', fontSize: '1.1rem' }}>
                  Key Leadership Distinctions:
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={22} color="var(--accent-gold)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-900)' }}>27th ECI Excellence in Education</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Best Pre-School Principal Distinction</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={22} color="var(--accent-crimson)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-900)' }}>Best Pre-Nursery International School</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ahmedabad Educational Jury Honor</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Shield size={22} color="#059669" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-900)' }}>Seismic Safety Compliance</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Engineered Earthquake-Safe Infrastructure</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
