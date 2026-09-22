import { useState, type FormEvent } from 'react';
import { X, FileText, Download, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal = ({ isOpen, onClose }: BrochureModalProps) => {
  const [downloaded, setDownloaded] = useState(false);
  const [parentEmail, setParentEmail] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Create mock download trigger
    const element = document.createElement("a");
    const file = new Blob([
      `Lakshaya International School - Prospectus & Curriculum Overview\n\n` +
      `Motto: ${SCHOOL_INFO.motto}\n` +
      `Vision: To offer an exceptional educational environment that is conducive to development of compassionate, ethical global citizens.\n` +
      `Developmental Pentagon: Intellectual, Ethical, Creative, Physical, Eco-Consciousness.\n` +
      `Campus: Certified Earthquake-Resistant, Sunlit Classrooms, Shilaj Farm, Sports Dojo.\n` +
      `Contact: ${SCHOOL_INFO.phone} | ${SCHOOL_INFO.email}\n` +
      `Address: ${SCHOOL_INFO.fullAddress}\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Lakshaya_International_School_Prospectus_2025.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.5rem 2rem' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-alt)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {!downloaded ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                color: 'var(--accent-gold-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-950)' }}>
                  Download Institutional E-Brochure
                </h3>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Official Prospectus & Academic Framework (2025-26 Edition)
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
                Inside This Comprehensive Guide:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={15} color="#059669" />
                  <span>The Developmental Pentagon 5-dimension pedagogical structure</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={15} color="#059669" />
                  <span>Safety engineering details of our Earthquake-Resistant Campus</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={15} color="#059669" />
                  <span>Shilaj Farm experiential ecology and organic botany curriculum</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={15} color="#059669" />
                  <span>Admission procedure, age eligibility, and transport routes</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleDownload}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                  Enter your email to download the brochure:
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
              >
                <Download size={18} />
                <span>Instant Download E-Brochure</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-emerald-light)',
              color: 'var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.65rem', color: 'var(--primary-950)', marginBottom: '0.75rem' }}>
              Your E-Brochure Has Downloaded!
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We have also dispatched a high-resolution copy to <strong>{parentEmail}</strong>. 
              If you have any questions regarding admissions or wish to visit the campus, please contact our helpline:
            </p>

            <div style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              fontWeight: 700,
              color: 'var(--primary-900)',
              marginBottom: '1.5rem'
            }}>
              📞 Admissions Desk: {SCHOOL_INFO.phone}
            </div>

            <button
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
              className="btn btn-navy"
              style={{ borderRadius: 'var(--radius-full)', padding: '0.65rem 1.75rem' }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
