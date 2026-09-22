import { Phone, Mail, MapPin, FileText, Info, ShieldAlert, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TopBarProps {
  onOpenBrochure: () => void;
  onOpenAdmission: () => void;
  onOpenFastFacts: () => void;
  onOpenPolicies: () => void;
}

export const TopBar = ({ onOpenBrochure, onOpenAdmission, onOpenFastFacts, onOpenPolicies }: TopBarProps) => {
  return (
    <div style={{
      backgroundColor: '#07152b',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.78rem',
      position: 'relative',
      zIndex: 40,
      width: '100%',
      borderTop: '3.5px solid #ed1c25' // Signature Lakshaya Red Accent Stripe
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
        {/* Contact info items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <a
            href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              color: '#ffffff',
              transition: 'color var(--transition-fast)' 
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
          >
            <Phone size={13} color="var(--accent-gold)" />
            <span style={{ fontWeight: 700 }}>{SCHOOL_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '0.35rem', 
              color: 'rgba(255, 255, 255, 0.85)',
              transition: 'color var(--transition-fast)' 
            }}
            className="topbar-tablet-up"
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
          >
            <Mail size={13} color="var(--accent-gold)" />
            <span>{SCHOOL_INFO.email}</span>
          </a>

          <div style={{ display: 'none', alignItems: 'center', gap: '0.35rem', color: '#94a3b8' }} className="topbar-desktop-only">
            <MapPin size={13} color="var(--accent-gold)" />
            <span>S.P. Ring Road, Ahmedabad (2 Acres Campus)</span>
          </div>

          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(237, 28, 37, 0.15)',
            border: '1px solid rgba(237, 28, 37, 0.35)',
            padding: '0.1rem 0.5rem',
            borderRadius: '4px',
            color: '#fca5a5',
            fontSize: '0.7rem',
            fontWeight: 700
          }} className="topbar-desktop-only">
            <Award size={11} color="#fca5a5" />
            <span>Agarwal Group • 35-Yr Lineage</span>
          </div>
        </div>

        {/* Quick action buttons & Institutional Links matching lakshayaschool.com */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          {/* Fast Facts Modal Trigger */}
          <button
            onClick={onOpenFastFacts}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-gold)',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.2rem 0.4rem',
              borderRadius: 'var(--radius-xs)'
            }}
            title="View Lakshaya Fast Facts and Statistics"
          >
            <Info size={13} />
            <span>:: Fast Facts</span>
          </button>

          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="topbar-tablet-up">|</span>

          {/* School Policies Modal Trigger */}
          <button
            onClick={onOpenPolicies}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.76rem',
              fontWeight: 600,
              cursor: 'pointer',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.2rem 0.4rem'
            }}
            className="topbar-tablet-up"
            title="School Policies: Attendance, Library, Transport"
          >
            <ShieldAlert size={13} color="#fca5a5" />
            <span>Policies</span>
          </button>

          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="topbar-tablet-up">|</span>

          {/* E-Brochure Trigger */}
          <button
            onClick={onOpenBrochure}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.76rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.2rem 0.4rem'
            }}
          >
            <FileText size={13} color="var(--accent-gold)" />
            <span>E-Brochure</span>
          </button>

          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="topbar-desktop-only">|</span>

          {/* Admissions Trigger Button */}
          <button
            onClick={onOpenAdmission}
            style={{
              display: 'none',
              backgroundColor: '#ed1c25',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.25rem 0.75rem',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(237, 28, 37, 0.4)'
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
