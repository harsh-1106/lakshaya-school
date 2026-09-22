import { GraduationCap, ArrowRight, Phone, CheckCircle2, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsCTAProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
}

export const AdmissionsCTA = ({ onOpenAdmission, onOpenBrochure }: AdmissionsCTAProps) => {
  return (
    <section className="section-wrapper" style={{
      background: 'linear-gradient(135deg, var(--primary-950) 0%, #0d2242 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: 'var(--accent-gold)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            <GraduationCap size={16} />
            <span>Admissions Open for Academic Session 2025-26</span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }} className="cta-heading">
            Shape Your Child’s Future at Lakshaya International School
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#cbd5e1',
            lineHeight: 1.7,
            marginBottom: '2.5rem'
          }}>
            Limited seats available across Pre-Nursery, Kindergarten, Primary, Middle, and Senior Secondary wings. 
            Experience our safe, earthquake-engineered campus, meet our faculty, and discover the power of the Developmental Pentagon.
          </p>

          {/* Features Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            fontSize: '0.9rem',
            color: '#e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="var(--accent-gold)" />
              <span>Personalized Campus Walkthrough</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="var(--accent-gold)" />
              <span>1-on-1 Faculty & Principal Interaction</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="var(--accent-gold)" />
              <span>Transparent Admission Counseling</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={onOpenAdmission}
              className="btn btn-primary"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1.05rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span>Begin Online Admission Inquiry</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onOpenBrochure}
              className="btn btn-outline-white"
              style={{
                padding: '0.95rem 1.75rem',
                fontSize: '1rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <FileText size={18} />
              <span>Download Official E-Brochure</span>
            </button>
          </div>

          {/* Helpline */}
          <div style={{
            marginTop: '2.5rem',
            fontSize: '0.9rem',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Phone size={15} color="var(--accent-gold)" />
            <span>Direct Admissions Desk:</span>
            <a
              href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
              style={{ color: '#ffffff', fontWeight: 700, textDecoration: 'underline' }}
            >
              {SCHOOL_INFO.phone}
            </a>
            <span>(Mon–Sat: 8:00 AM – 4:00 PM)</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .cta-heading {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};
