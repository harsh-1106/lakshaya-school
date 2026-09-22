import { useState } from 'react';
import { MessageSquare, Phone, X, GraduationCap, Calendar } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FloatingAssistantProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
}

export const FloatingAssistant = ({ onOpenAdmission, onOpenBrochure }: FloatingAssistantProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 90 }}>
      {expanded ? (
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          width: '320px',
          boxShadow: 'var(--shadow-premium)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-950) 0%, var(--primary-800) 100%)',
            color: '#ffffff',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e1b4b'
              }}>
                <GraduationCap size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Lakshaya Counselor</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Admissions Desk 2025-26</div>
              </div>
            </div>

            <button
              onClick={() => setExpanded(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                opacity: 0.8
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '1.25rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
              Hello! Looking for admission details or want to book a campus walkthrough?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <button
                onClick={() => {
                  setExpanded(false);
                  onOpenAdmission();
                }}
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.85rem', padding: '0.6rem', borderRadius: 'var(--radius-md)' }}
              >
                <Calendar size={15} />
                <span>Book Campus Walkthrough</span>
              </button>

              <button
                onClick={() => {
                  setExpanded(false);
                  onOpenBrochure();
                }}
                className="btn btn-outline-navy"
                style={{ width: '100%', fontSize: '0.85rem', padding: '0.6rem', borderRadius: 'var(--radius-md)' }}
              >
                <span>Download E-Brochure</span>
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'var(--primary-800)',
                  fontWeight: 700,
                  padding: '0.5rem',
                  textAlign: 'center'
                }}
              >
                <Phone size={14} color="var(--accent-gold)" />
                <span>Call Us: {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="floating-assistant-btn"
          aria-label="Admissions Counselor Help"
        >
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'inline-block'
          }} className="animate-glow" />
          <MessageSquare size={16} color="var(--accent-gold)" />
          <span>Inquire & Tour</span>
        </button>
      )}
    </div>
  );
};
