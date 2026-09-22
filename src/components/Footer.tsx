import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowUp, GraduationCap, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--primary-950)',
      color: '#cbd5e1',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          marginBottom: '3rem'
        }}>
          {/* Column 1: Institutional Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #102444 0%, #1e427d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                border: '1.5px solid rgba(245, 158, 11, 0.4)'
              }}>
                <GraduationCap size={26} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  LAKSHAYA
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  International School
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Rooted in the <strong>Developmental Pentagon</strong> and anchored by a certified earthquake-resistant campus, 
              we cultivate curious intellects, ethical citizens, and athletic champions in Ahmedabad.
            </p>

            <div style={{
              display: 'inline-block',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.5rem 0.85rem',
              color: 'var(--accent-gold)',
              fontSize: '0.8125rem',
              fontWeight: 700
            }}>
              🏆 Best Pre-Nursery International School Ahmedabad
            </div>
          </div>

          {/* Column 2: Quick Links & Institutional Policies */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Institutional Policies & Links
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li>
                <a href="#about" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
                  :: Institutional Overview & Motto
                </a>
              </li>
              <li>
                <a href="#pentagon" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
                  :: The Developmental Pentagon Framework
                </a>
              </li>
              <li>
                <a href="#campus" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
                  :: Certified Earthquake-Resistant Campus
                </a>
              </li>
              <li>
                <a href="#student-life" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
                  :: Shilaj Farm & Beyond Textbooks
                </a>
              </li>
              <li>
                <a href="#achievements" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
                  :: Student Achievements & Karate Laurels
                </a>
              </li>
              <li>
                <span style={{ color: '#94a3b8' }}>:: General Policy & Transport Safety Rules</span>
              </li>
              <li>
                <span style={{ color: '#94a3b8' }}>:: Discipline Policy & Code of Conduct</span>
              </li>
              <li>
                <span style={{ color: '#94a3b8' }}>:: Mandatory Public Disclosure (CBSE Compliance)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Location */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Campus Address & Contact
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Lakshaya International School</strong><br />
                  Opp. Applewoods Township,<br />
                  Shantipura Cross Road,<br />
                  Sardar Patel Ring Road,<br />
                  Ahmedabad - 380058, Gujarat, India
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <div>
                  <a
                    href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                    style={{ color: '#ffffff', fontWeight: 700 }}
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`mailto:${SCHOOL_INFO.email}`} style={{ color: '#cbd5e1' }}>
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Clock size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <div style={{ color: '#94a3b8' }}>
                  Mon–Sat: 8:00 AM – 4:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Academic Bulletin */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Academic Newsletter
            </h4>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>
              Subscribe to receive circulars, academic calendar updates, and inter-school championship announcements.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter E-mail ID"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.65rem 0.85rem',
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: 'var(--accent-gold)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      width: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#1e1b4b'
                    }}
                    aria-label="Subscribe to newsletter"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Weekly academic highlights. No spam.
                </div>
              </form>
            ) : (
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#34d399',
                fontSize: '0.85rem'
              }}>
                <CheckCircle size={18} />
                <span>Subscribed! Welcome to Lakshaya updates.</span>
              </div>
            )}

            <div style={{ marginTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                Affiliation & Pedagogy
              </div>
              <div style={{ fontSize: '0.875rem', color: '#ffffff', fontWeight: 600 }}>
                CBSE & International Progressive Curriculum
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: '#64748b'
        }}>
          <div>
            Copyright &copy; {new Date().getFullYear()} All rights reserved by 
            <strong style={{ color: '#94a3b8', marginLeft: '0.25rem' }}>Lakshaya International School</strong>.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Opp. Applewoods, S.P. Ring Road, Ahmedabad - 380058</span>

            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background var(--transition-fast)'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-gold)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
