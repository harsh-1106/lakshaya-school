import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap, Info, ShieldAlert, Sparkles, Phone } from 'lucide-react';
import { LakshayaLogo } from './LakshayaLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
  onOpenFastFacts: () => void;
  onOpenPolicies: () => void;
}

export const Navbar = ({ onOpenAdmission, onOpenBrochure, onOpenFastFacts, onOpenPolicies }: NavbarProps) => {
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
      label: 'About',
      href: '#about',
      children: [
        { label: 'Vision, Mission & Credo', href: '#about', desc: 'Supreme goal & compassionate global citizens' },
        { label: 'Meaning of Lakshaya & Crest', href: '#identity', desc: 'Behind the name: AIM HIGH & ज्ञान दीप' },
        { label: 'Agarwal Group 35-Yr Heritage', href: '#identity', desc: 'City Gold, Medilink & Agrasen Vidhyalaya' },
        { label: 'Leadership & Welcome Address', href: '#leadership', desc: 'ECI Awardee Principal Neha Agrawal' },
        { label: '5 Core Institutional Beliefs', href: '#identity', desc: 'Putting Children First in everything' },
      ]
    },
    {
      label: 'Policies',
      href: '#policies',
      isPolicyTrigger: true,
      children: [
        { label: 'General Policy & Attendance (80% Rule)', action: 'policies', desc: 'Mandatory 80% attendance & punctual entry' },
        { label: 'Library Open Access System', action: 'policies', desc: '1 Book/week, reading room & encyclopedia' },
        { label: 'Discipline Policy & Code of Conduct', action: 'policies', desc: 'Holistic character & behavioural standards' },
        { label: 'Safe Transport Fleet Guidelines', action: 'policies', desc: 'Verified routes, bus attendants & safety rules' },
        { label: 'House & Club Details', action: 'policies', desc: 'Leadership, inter-house sports & cultural clubs' }
      ]
    },
    {
      label: 'Curriculum',
      href: '#academics',
      children: [
        { label: 'The Developmental Pentagon', href: '#pentagon', desc: 'Cognitive, Social, Emotional, Physical & Ethical' },
        { label: 'Early Years (Pre-Nursery)', href: '#academics', desc: 'Award-winning experiential foundation' },
        { label: 'Primary Wing (Grades 1-5)', href: '#academics', desc: 'Inquiry STEM & Shilaj Farm field excursions' },
        { label: 'Middle Wing (Grades 6-8)', href: '#academics', desc: 'Robotics labs, Wild Wisdom & Karate championships' },
        { label: '8 Core Focus Pillars', href: '#focus-on', desc: 'Seismic safety, farm hub & martial arts' },
      ]
    },
    {
      label: 'Campus',
      href: '#campus',
      children: [
        { label: '2-Acre Certified Campus', href: '#campus', desc: 'Certified seismic earthquake-resistant safety' },
        { label: 'Sunlit Smart Classrooms', href: '#campus', desc: 'Cross-ventilated natural daylight architecture' },
        { label: 'Science & Computer Labs', href: '#campus', desc: 'Hi-tech hands-on experimental discovery' },
        { label: 'Shilaj Eco-Farm Immersion', href: '#campus', desc: 'Botanical, agro & ecological experiential hub' },
        { label: 'Martial Arts Dojo & Sports Arena', href: '#campus', desc: 'Home of 22 All-India Karate medalists' },
      ]
    },
    {
      label: 'Admissions',
      href: '#admissions-cta',
      children: [
        { label: 'Admissions 2025-26 Overview', href: '#admissions-cta', desc: 'Seats open for Pre-Nursery to Grade 8' },
        { label: 'Age Criteria & Grade Matcher', href: '#hero', desc: 'Check eligibility by birthdate & age' },
        { label: 'Online Enquiry & Registration', action: 'admissions', desc: 'Submit application for priority evaluation' },
        { label: 'Fee Structure & Guidelines', href: '#admissions-cta', desc: 'Transparent fee schedule & inclusions' },
      ]
    },
    {
      label: 'Achievements',
      href: '#achievements',
      children: [
        { label: '27th ECI National Education Award', href: '#achievements', desc: 'Best Pre School & Best Principal Neha Agrawal' },
        { label: 'Discovery Channel Wild Wisdom Quiz', href: '#achievements', desc: '4 State Finalists & 225+ Achievers' },
        { label: 'All-India Karate Championships', href: '#achievements', desc: '22 Medals (6 Gold, 7 Silver, 9 Bronze)' },
        { label: 'National SpellBee Laurels', href: '#achievements', desc: '51 National Level Certificates' },
      ]
    },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSubItemClick = (subItem: any) => {
    setActiveDropdown(null);
    if (subItem.action === 'policies') {
      onOpenPolicies();
      return;
    }
    if (subItem.action === 'admissions') {
      onOpenAdmission();
      return;
    }
    if (subItem.href) {
      const el = document.querySelector(subItem.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'all var(--transition-normal)',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(12px)',
      boxShadow: isScrolled ? '0 4px 20px rgba(11, 26, 48, 0.08)' : '0 1px 3px rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.85)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: isScrolled ? '0.5rem' : '0.75rem',
        paddingBottom: isScrolled ? '0.5rem' : '0.75rem',
        transition: 'padding var(--transition-normal)',
        gap: '0.5rem',
        maxWidth: '1360px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Brand Crest & Title with Authentic Lakshaya Vector Logo */}
        <a 
          href="#hero" 
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
          aria-label="Lakshaya International School Homepage"
        >
          <LakshayaLogo size={isScrolled ? 40 : 46} showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.1rem', flexWrap: 'nowrap' }} className="desktop-nav">
          {navLinks.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => item.children && setActiveDropdown(null)}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.isPolicyTrigger) {
                    e.preventDefault();
                    onOpenPolicies();
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.15rem',
                  padding: '0.35rem 0.45rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: item.isPolicyTrigger ? '#b91c1c' : '#1e293b',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#0b1a30';
                  e.currentTarget.style.backgroundColor = 'rgba(11, 26, 48, 0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = item.isPolicyTrigger ? '#b91c1c' : '#1e293b';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{item.label}</span>
                {item.children && <ChevronDown size={12} style={{ opacity: 0.6, marginLeft: '0.05rem' }} />}
              </a>

              {/* Dropdown Menu */}
              {item.children && activeDropdown === item.label && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: ['Achievements', 'Admissions', 'Campus', 'Contact'].includes(item.label) ? 'auto' : 0,
                  right: ['Achievements', 'Admissions', 'Campus', 'Contact'].includes(item.label) ? 0 : 'auto',
                  width: '280px',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 12px 30px rgba(11, 26, 48, 0.15)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  padding: '0.45rem',
                  animation: 'fadeIn 0.18s ease',
                  zIndex: 60
                }}>
                  <div style={{
                    padding: '0.3rem 0.65rem',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#94a3b8',
                    letterSpacing: '0.06em',
                    borderBottom: '1px solid #f1f5f9',
                    marginBottom: '0.3rem'
                  }}>
                    {item.label} • Official Details
                  </div>

                  {item.children.map((subItem: any) => (
                    <div
                      key={subItem.label}
                      onClick={() => handleSubItemClick(subItem)}
                      style={{
                        display: 'block',
                        padding: '0.45rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'background var(--transition-fast)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(241, 245, 249, 0.8)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-900)' }}>
                        {subItem.label}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.1rem', lineHeight: 1.25 }}>
                        {subItem.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
          {/* Primary Apply Button */}
          <button
            onClick={onOpenAdmission}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#ed1c25',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.45rem 1rem',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              boxShadow: '0 3px 10px rgba(237, 28, 37, 0.35)',
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 5px 14px rgba(237, 28, 37, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(237, 28, 37, 0.35)';
            }}
          >
            <GraduationCap size={15} />
            <span>Apply Now</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: 'var(--radius-sm)',
              padding: '0.45rem',
              cursor: 'pointer',
              color: '#0f172a',
              flexShrink: 0
            }}
            className="mobile-nav-trigger"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>


      {/* Mobile Drawer with authentic categorized links */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '2px solid #ed1c25',
          padding: '1.25rem',
          maxHeight: '82vh',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }} className="mobile-drawer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            
            {/* Quick Contact & Fast Facts Ribbon inside Mobile Menu */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFastFacts();
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#92400e',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                <Info size={14} />
                <span>:: Fast Facts</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPolicies();
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(237, 28, 37, 0.1)',
                  border: '1px solid rgba(237, 28, 37, 0.3)',
                  color: '#b91c1c',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                <ShieldAlert size={14} />
                <span>School Policies</span>
              </button>
            </div>

            {navLinks.map((item) => (
              <div key={item.label} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.isPolicyTrigger) {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      onOpenPolicies();
                    } else if (!item.children) {
                      setMobileMenuOpen(false);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: item.isPolicyTrigger ? '#b91c1c' : '#0f172a'
                  }}
                >
                  <span>{item.label}</span>
                </a>

                {item.children && (
                  <div style={{ paddingLeft: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.2rem' }}>
                    {item.children.map((subItem: any) => (
                      <div
                        key={subItem.label}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleSubItemClick(subItem);
                        }}
                        style={{
                          fontSize: '0.84rem',
                          color: '#475569',
                          padding: '0.3rem 0',
                          borderLeft: '2px solid #e2e8f0',
                          paddingLeft: '0.6rem',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ fontWeight: 600 }}>{subItem.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Direct Action Buttons in Mobile Menu */}
            <div style={{ display: 'flex', gap: '0.65rem', marginTop: '1rem', flexDirection: 'column' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.95rem' }}
              >
                <GraduationCap size={18} />
                <span>Admissions 2025-26 (Pre-Nursery to Gr. 8)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="btn btn-outline-navy"
                style={{ width: '100%', padding: '0.7rem', fontSize: '0.9rem' }}
              >
                <span>Download Official E-Brochure</span>
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: 'var(--radius-md)',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <Phone size={15} color="#ed1c25" />
                <span>Call Admissions: {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1140px) {
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
        @media (max-width: 1240px) and (min-width: 1140px) {
          .desktop-nav a {
            padding: 0.3rem 0.35rem !important;
            font-size: 0.76rem !important;
          }
        }
        @media (max-width: 1139px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-trigger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
