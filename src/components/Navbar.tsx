import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
}

export const Navbar = ({ onOpenAdmission, onOpenBrochure }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    {
      label: 'About Lakshaya',
      href: '#about',
      children: [
        { label: 'Vision, Mission & Motto', href: '#about', desc: 'Compassionate, ethical global citizens' },
        { label: 'Meaning & Logo Philosophy', href: '#identity', desc: 'Symbolism of aim, flame & rising sun' },
        { label: 'The Developmental Pentagon', href: '#pentagon', desc: '5 Core dimensions of student growth' },
        { label: '8 Core Focus Pillars', href: '#focus-on', desc: 'From earthquake safety to karate & farms' },
        { label: 'Leadership & Welcome Address', href: '#leadership', desc: 'ECI Awardee Principal Neha Agrawal' },
      ]
    },
    {
      label: 'Academics',
      href: '#academics',
      children: [
        { label: 'Early Years (Pre-Nursery)', href: '#academics', desc: 'Ranked #1 Pre-Nursery in Ahmedabad' },
        { label: 'Primary Wing (Grades 1-5)', href: '#academics', desc: 'Experiential & foundational discovery' },
        { label: 'Middle Wing (Grades 6-8)', href: '#academics', desc: 'Inquiry STEM & analytical mastery' },
        { label: 'Senior Secondary (Grades 9-12)', href: '#academics', desc: 'Board excellence & global readiness' },
      ]
    },
    {
      label: 'Campus & Safety',
      href: '#campus',
      children: [
        { label: 'Earthquake-Resistant Campus', href: '#campus', desc: 'Certified seismic-engineered safety' },
        { label: 'Sunlit Smart Classrooms', href: '#campus', desc: 'Natural daylight & cross-ventilation' },
        { label: 'Shilaj Farm Eco-Hub', href: '#campus', desc: 'Experiential botany & nature immersion' },
        { label: 'Sports Arena & Karate Dojo', href: '#campus', desc: 'Home of State & National Champions' },
      ]
    },
    { label: 'Campus Tour', href: '#gallery' },
    { label: 'Student Life', href: '#student-life' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'all var(--transition-normal)',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: isScrolled ? 'var(--shadow-md)' : '0 1px 3px rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: isScrolled ? '0.75rem' : '1rem',
        paddingBottom: isScrolled ? '0.75rem' : '1rem',
        transition: 'padding var(--transition-normal)'
      }}>
        {/* Brand Crest & Title */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem, 2vw, 0.75rem)', minWidth: 0 }}>
          <div style={{
            width: 'clamp(38px, 6vw, 46px)',
            height: 'clamp(38px, 6vw, 46px)',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0b1a30 0%, #1e427d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-gold)',
            boxShadow: '0 4px 12px rgba(11, 26, 48, 0.25)',
            position: 'relative',
            border: '2px solid rgba(245, 158, 11, 0.4)',
            flexShrink: 0
          }}>
            <GraduationCap size={24} />
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-crimson)',
              border: '2px solid #ffffff'
            }} />
          </div>

          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
              fontWeight: 800,
              color: 'var(--primary-950)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              whiteSpace: 'nowrap'
            }}>
              <span>LAKSHAYA</span>
              <span style={{
                color: 'var(--accent-crimson)',
                fontSize: 'clamp(0.6rem, 1.8vw, 0.72rem)',
                fontWeight: 700,
                backgroundColor: 'var(--accent-crimson-light)',
                padding: '0.1rem 0.35rem',
                borderRadius: '4px',
                letterSpacing: '0.04em'
              }}>AHMEDABAD</span>
            </div>
            <div style={{
              fontSize: 'clamp(0.65rem, 1.8vw, 0.72rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              International School
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => item.children && setActiveDropdown(null)}
            >
              <a
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.5rem 0.85rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--primary-700)';
                  e.currentTarget.style.backgroundColor = 'var(--primary-50)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{item.label}</span>
                {item.children && <ChevronDown size={14} style={{ opacity: 0.6 }} />}
              </a>

              {/* Dropdown Menu */}
              {item.children && activeDropdown === item.label && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '280px',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--border-light)',
                  padding: '0.5rem',
                  animation: 'fadeIn 0.2s ease',
                  zIndex: 60
                }}>
                  {item.children.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      style={{
                        display: 'block',
                        padding: '0.625rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'background var(--transition-fast)'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-main)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-900)' }}>
                        {subItem.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        {subItem.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.35rem, 1.5vw, 0.75rem)', flexShrink: 0 }}>
          <button
            onClick={onOpenAdmission}
            className="btn btn-primary"
            style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              padding: 'clamp(0.45rem, 1.5vw, 0.625rem) clamp(0.65rem, 2vw, 1.15rem)',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <GraduationCap size={16} />
            <span>Apply</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.45rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              flexShrink: 0
            }}
            className="mobile-nav-trigger"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid var(--border-light)',
          padding: '1.25rem',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)'
        }} className="mobile-drawer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((item) => (
              <div key={item.label} style={{ borderBottom: '1px solid var(--bg-alt)', paddingBottom: '0.5rem' }}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.625rem 0',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--primary-900)'
                  }}
                >
                  <span>{item.label}</span>
                </a>
                {item.children && (
                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', marginTop: '0.25rem' }}>
                    {item.children.map(subItem => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          padding: '0.25rem 0'
                        }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexDirection: 'column' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <GraduationCap size={18} />
                <span>Admissions 2025-26</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="btn btn-outline-navy"
                style={{ width: '100%' }}
              >
                <span>Download E-Brochure</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-trigger {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
