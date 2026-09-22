import { Eye, Compass, BookOpen, Award, CheckCircle, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, INSTITUTIONAL_AWARDS } from '../data/schoolData';

export const VisionMission = () => {
  return (
    <section id="about" className="section-wrapper bg-warm-canvas" style={{
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <Sparkles size={14} />
            <span>Foundational Pillars</span>
          </div>
          <h2 className="section-title">
            The Spirit & Purpose of Lakshaya
          </h2>
          <p className="section-subtitle">
            Founded with the belief that true education ennobles the spirit as much as it sharpens the mind, 
            Lakshaya International School offers a transformational learning environment on Sardar Patel Ring Road, Ahmedabad.
          </p>
        </div>

        {/* 3 Core Cards: Vision, Mission, Motto */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Vision Card */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '4px solid #2563eb'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              marginBottom: '1.5rem'
            }}>
              <Eye size={28} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-950)' }}>
              Our Vision
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              To offer an exceptional educational environment that is conducive to the development of 
              <strong style={{ color: 'var(--primary-900)' }}> compassionate, ethical global citizens</strong>, 
              ready and well-armed to achieve their fullest in education, work, and life.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="#2563eb" />
                <span>Ethical character & moral responsibility</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="#2563eb" />
                <span>Global competence & critical problem solving</span>
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '4px solid var(--accent-gold)'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold-hover)',
              marginBottom: '1.5rem'
            }}>
              <Compass size={28} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-950)' }}>
              Our Mission
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              To prepare students for a <strong style={{ color: 'var(--primary-900)' }}>dynamic, fast-changing, tech-savvy world</strong>. 
              To give them the necessary pedagogy, and instill in them a passion for lifelong learning and a spirit of enquiry that sharpens their practical senses and intellectual prowess.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="var(--accent-gold)" />
                <span>Inquiry-driven scientific temperament</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="var(--accent-gold)" />
                <span>Adaptive digital literacy & innovation</span>
              </li>
            </ul>
          </div>

          {/* Motto & Core Philosophy Card */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '4px solid var(--accent-crimson)'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-crimson)',
              marginBottom: '1.5rem'
            }}>
              <BookOpen size={28} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-950)' }}>
              Our Motto & Creed
            </h3>

            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              color: 'var(--accent-crimson)',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}>
              "{SCHOOL_INFO.motto}"
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <em>"A well-formed mind is better than just a well-filled one."</em> We reject rote memorization in favor 
              of deep comprehension, experiential farm learning, and multifaceted sportsmanship.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="var(--accent-crimson)" />
                <span>Meaning of Lakshaya: The ultimate worthy aim</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="var(--accent-crimson)" />
                <span>Synthesis of Indian ethos & international pedagogy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership & Awards Spotlight Bar */}
        <div id="leadership" style={{
          background: 'linear-gradient(135deg, var(--primary-950) 0%, var(--primary-900) 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          color: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }} className="leadership-grid">
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                color: 'var(--accent-gold)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1rem'
              }}>
                <Award size={16} />
                <span>ECI National Award Winner</span>
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
                "We Nurture Children to Excel in Knowledge, Compassion, and Life."
              </h3>

              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                At Lakshaya International School, we foster an environment where every child feels seen, celebrated, and challenged. 
                Recognized at the <strong>27th ECI Awards for Excellence in Education</strong> for Best Pre-School Leadership, 
                our educational team combines state-of-the-art earthquake-safe infrastructure with child-centric pedagogy.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                    Ms. Neha Agrawal
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    Principal & Founder • Best Pre-School Principal Awardee
                  </div>
                </div>
              </div>
            </div>

            {/* Awards grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '1rem'
            }}>
              {INSTITUTIONAL_AWARDS.map((award, i) => (
                <div key={i} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      color: 'var(--accent-gold)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem'
                    }}>
                      {award.organization}
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      marginBottom: '0.5rem'
                    }}>
                      {award.title}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 600,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '0.5rem'
                  }}>
                    {award.badge || award.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .leadership-grid {
            grid-template-columns: 1.35fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
