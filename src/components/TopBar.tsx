import { Phone, Mail, MapPin, Clock, FileText, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TopBarProps {
  onOpenBrochure: () => void;
  onOpenAdmission: () => void;
}

export const TopBar = ({ onOpenBrochure, onOpenAdmission }: TopBarProps) => {
  return (
    <div style={{
      backgroundColor: 'var(--primary-950)',
      color: 'rgba(255, 255, 255, 0.85)',
      fontSize: '0.8rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      zIndex: 40,
      width: '100%',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.45rem',
        paddingBottom: '0.45rem',
        gap: '0.5rem'
      }}>
        {/* Contact info items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <a
            href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color var(--transition-fast)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
          >
            <Phone size={13} color="var(--accent-gold)" />
            <span style={{ fontWeight: 700, fontSize: '0.78rem' }}>{SCHOOL_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            style={{ display: 'none', alignItems: 'center', gap: '0.35rem', transition: 'color var(--transition-fast)' }}
            className="topbar-tablet-up"
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
          >
            <Mail size={13} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.78rem' }}>{SCHOOL_INFO.email}</span>
          </a>

          <div style={{ display: 'none', alignItems: 'center', gap: '0.35rem', color: '#94a3b8' }} className="topbar-desktop-only">
            <MapPin size={13} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.78rem' }}>Ahmedabad, Gujarat</span>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '0.35rem', color: '#94a3b8' }} className="topbar-desktop-only">
            <Clock size={13} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.78rem' }}>Mon–Sat: 8AM–4PM</span>
          </div>
        </div>

        {/* Quick action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
          <button
            onClick={onOpenBrochure}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-gold)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.2rem 0.4rem',
              borderRadius: 'var(--radius-xs)'
            }}
          >
            <FileText size={13} />
            <span>E-Brochure</span>
          </button>

          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="topbar-tablet-up">|</span>

          <a
            href="#campus"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.3rem',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.78rem',
              padding: '0.2rem 0.4rem'
            }}
            className="topbar-tablet-up"
          >
            <Compass size={13} color="var(--accent-gold)" />
            <span>Campus Tour</span>
          </a>

          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="topbar-desktop-only">|</span>

          <button
            onClick={onOpenAdmission}
            style={{
              display: 'none',
              backgroundColor: 'var(--accent-crimson)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.25rem 0.75rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer'
            }}
            className="topbar-desktop-only"
          >
            Admissions 2025-26
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .topbar-tablet-up {
            display: flex !important;
          }
        }
        @media (min-width: 1024px) {
          .topbar-desktop-only {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};
