import { X, BookOpen, Clock, Bus, ShieldCheck, Award, FileText, ChevronRight } from 'lucide-react';
import { SCHOOL_INFO, FAST_FACTS, QUICK_LINKS, SCHOOL_POLICIES } from '../data/schoolData';

interface FastFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
}

export const FastFactsModal = ({ isOpen, onClose, onOpenAdmission, onOpenBrochure }: FastFactsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '680px', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          background: 'linear-gradient(135deg, var(--primary-950) 0%, #102444 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid var(--accent-gold)'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Lakshaya International School • Ahmedabad
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800 }}>
              :: Fast Facts & Institutional Highlights
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem 1.75rem', overflowY: 'auto', flex: 1 }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            Direct facts and verified accreditations from <strong>Lakshaya International School</strong>, 
            an educational initiative of the 35-year Agarwal Group of Companies.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.85rem', marginBottom: '1.5rem' }}>
            {FAST_FACTS.map((fact, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--primary-700)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                  {fact.label}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-950)' }}>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>

          {/* Agarwal Group Overview */}
          <div style={{
            backgroundColor: 'rgba(10, 25, 47, 0.04)',
            borderLeft: '4px solid var(--accent-gold)',
            padding: '1rem 1.25rem',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-950)', marginBottom: '0.35rem' }}>
              35 Years Lineage — The Agarwal Group
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {SCHOOL_INFO.founderAndGroup.overview}
            </p>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => { onClose(); onOpenAdmission(); }}
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '180px', borderRadius: 'var(--radius-full)' }}
            >
              <span>Apply for Admission 2025-26</span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => { onClose(); onOpenBrochure(); }}
              className="btn btn-outline-navy"
              style={{ flex: 1, minWidth: '180px', borderRadius: 'var(--radius-full)' }}
            >
              <span>Download E-Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export const PoliciesModal = ({ isOpen, onClose, activeSection = 'general' }: PoliciesModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '720px', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          background: 'linear-gradient(135deg, var(--primary-950) 0%, #102444 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid var(--accent-gold)'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Official Institutional Guidelines
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800 }}>
              Lakshaya School Policies & Code of Conduct
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem 1.75rem', overflowY: 'auto', flex: 1 }}>
          {/* Section 1: General Policy & Attendance */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Clock size={20} color="var(--accent-crimson)" />
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-950)', fontWeight: 800 }}>
                {SCHOOL_POLICIES.generalPolicy.title}
              </h4>
            </div>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {SCHOOL_POLICIES.generalPolicy.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Section 2: Library Rules */}
          <div style={{ marginBottom: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <BookOpen size={20} color="var(--primary-700)" />
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-950)', fontWeight: 800 }}>
                {SCHOOL_POLICIES.libraryServices.title}
              </h4>
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary-950)', marginBottom: '0.35rem' }}>
                Library Facilities & Services:
              </div>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {SCHOOL_POLICIES.libraryServices.services.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary-950)', marginBottom: '0.35rem' }}>
                Regulations & Borrowing Rules:
              </div>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {SCHOOL_POLICIES.libraryServices.regulations.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Transport & House Details */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Bus size={20} color="#059669" />
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-950)', fontWeight: 800 }}>
                {SCHOOL_POLICIES.transportRules.title}
              </h4>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {SCHOOL_POLICIES.transportRules.summary}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={20} color="var(--accent-gold)" />
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-950)', fontWeight: 800 }}>
                {SCHOOL_POLICIES.houseAndClubs.title}
              </h4>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {SCHOOL_POLICIES.houseAndClubs.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
