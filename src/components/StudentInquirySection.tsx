import { useState, type FormEvent } from 'react';
import { 
  GraduationCap, 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  Calendar, 
  User, 
  BookOpen, 
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Award
} from 'lucide-react';

import { DataService } from '../services/dataService';
import { SCHOOL_INFO } from '../data/schoolData';

interface StudentInquirySectionProps {
  onSuccess?: () => void;
}

export const StudentInquirySection = ({ onSuccess }: StudentInquirySectionProps) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Grade 1 (Foundational)',
    academicYear: '2025-26',
    visitDate: '',
    interests: 'STEM & Experiential Learning',
    notes: ''
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone || !formData.parentName) return;

    setIsSubmitting(true);
    try {
      const created = await DataService.createInquiry({
        studentName: formData.studentName,
        parentName: formData.parentName,
        phone: formData.phone.startsWith('+91') ? formData.phone : `+91 ${formData.phone}`,
        email: formData.email || `${formData.parentName.toLowerCase().replace(/\s+/g, '.')}@example.com`,
        grade: formData.grade,
        academicYear: formData.academicYear,
        visitDate: formData.visitDate || undefined,
        notes: `Interests: ${formData.interests}. ${formData.notes}`.trim()
      });

      setSubmittedInquiry(created);
      if (onSuccess) onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      grade: 'Grade 1 (Foundational)',
      academicYear: '2025-26',
      visitDate: '',
      interests: 'STEM & Experiential Learning',
      notes: ''
    });
  };

  return (
    <section id="inquiry-form-section" style={{
      backgroundColor: '#f8fafc',
      padding: '5rem 0',
      position: 'relative',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0'
    }}>
      {/* Decorative gradient glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '180px',
        background: 'radial-gradient(circle, rgba(237, 28, 37, 0.06) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(237, 28, 37, 0.08)',
            border: '1px solid rgba(237, 28, 37, 0.2)',
            padding: '0.35rem 0.95rem',
            borderRadius: '9999px',
            color: 'var(--primary-700)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '0.04em'
          }}>
            <Sparkles size={14} color="#ed1c25" />
            <span>ADMISSIONS OPEN 2025–2026 • PRIORITY EVALUATION</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
            fontWeight: 900,
            color: 'var(--primary-950)',
            lineHeight: 1.2,
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Begin Your Child's Journey at <span style={{ color: 'var(--primary-700)' }}>Lakshaya</span>
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Experience Gujarat's premier holistic institution rooted in 35 years of Agarwal Group heritage. 
            Submit the official student inquiry below for instant WhatsApp prospectus and counselor scheduling.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>

          {/* Left Column: Why Lakshaya & Trust Points */}
          <div style={{
            background: 'linear-gradient(145deg, #07152b 0%, #0e2246 100%)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            color: '#ffffff',
            boxShadow: '0 20px 40px rgba(7, 21, 43, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background accent ring */}
            <div style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              border: '2px solid rgba(237, 28, 37, 0.2)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                marginBottom: '1.75rem'
              }}>
                <Award size={14} />
                <span>27th ECI National Education Award Winner</span>
              </div>

              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1.25rem',
                lineHeight: 1.3
              }}>
                Why Discerning Parents Choose Lakshaya International
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(237, 28, 37, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fca5a5',
                    flexShrink: 0
                  }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                      2-Acre Earthquake-Resistant Safe Campus
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                      Seismic Zone III certified structural safety, natural cross-ventilation, RFID bus security & lady attendants.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(237, 28, 37, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fca5a5',
                    flexShrink: 0
                  }}>
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                      The Developmental Pentagon Pedagogy
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                      Balanced nourishment across Intellectual, Physical, Social, Emotional and Spiritual-Ethical intelligences.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(237, 28, 37, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fca5a5',
                    flexShrink: 0
                  }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                      22 All-India Karate Medals & Wild Wisdom
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                      National martial arts dojo, Discovery Channel quiz finalists, and hands-on farm discovery at Shilaj.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Counselor Box */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: '1.25rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.35rem' }}>
                Need Immediate Assistance? Speak With Admissions Desk:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={18} color="var(--accent-gold)" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/919924148000?text=Hello%20Lakshaya%20Admissions%20Desk%2C%20I%20would%20like%20to%20inquire%20for%20admission`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '2.75rem 2.25rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
            position: 'relative'
          }}>

            {!submittedInquiry ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-950)' }}>
                      Student Admission Inquiry
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Fill in details for admission evaluation & instant confirmation.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(237, 28, 37, 0.08)',
                    color: 'var(--primary-700)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    Session 2025–26
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  
                  {/* Student & Parent Name */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Student's Full Name *
                      </label>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="text"
                          required
                          value={formData.studentName}
                          onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="e.g. Aryan Shah"
                          style={{
                            width: '100%',
                            padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                            borderRadius: '10px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box'
                          }}
                        />
                        <User size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Parent / Guardian Name *
                      </label>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Deepak Shah"
                          style={{
                            width: '100%',
                            padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                            borderRadius: '10px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                        <User size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        WhatsApp Number *
                      </label>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98250 12345"
                          style={{
                            width: '100%',
                            padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                            borderRadius: '10px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                        <Phone size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Parent's Email Address
                      </label>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. parent@gmail.com"
                          style={{
                            width: '100%',
                            padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                            borderRadius: '10px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                        <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Grade & Campus Visit Date */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Grade Applying For *
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          value={formData.grade}
                          onChange={e => setFormData({ ...formData, grade: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                            borderRadius: '10px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            backgroundColor: '#ffffff',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="Pre-Nursery (Early Years)">Pre-Nursery (Early Years - 2+ Yrs)</option>
                          <option value="Nursery">Nursery (3+ Yrs)</option>
                          <option value="Junior KG (LKG)">Junior KG (4+ Yrs)</option>
                          <option value="Senior KG (UKG)">Senior KG (5+ Yrs)</option>
                          <option value="Grade 1 (Foundational)">Grade 1 (6+ Yrs)</option>
                          <option value="Grade 2">Grade 2</option>
                          <option value="Grade 3">Grade 3</option>
                          <option value="Grade 4">Grade 4</option>
                          <option value="Grade 5 (Primary Wing)">Grade 5 (Primary Wing)</option>
                          <option value="Grade 6 (Middle Wing)">Grade 6 (Middle Wing)</option>
                          <option value="Grade 7">Grade 7</option>
                          <option value="Grade 8 (Secondary Ready)">Grade 8 (Secondary Ready)</option>
                        </select>
                        <BookOpen size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        Preferred Campus Visit Date
                      </label>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="date"
                          value={formData.visitDate}
                          onChange={e => setFormData({ ...formData, visitDate: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                            borderRadius: '10px',
                            border: '1.5px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                        <Calendar size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Special Interest / Queries */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Additional Queries / Special Talents
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Inquiring regarding safe bus routes, sports coaching, or Shilaj eco-farm trips..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.875rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  {/* Notification badge assurance */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#f1f5f9',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    color: '#475569'
                  }}>
                    <MessageSquare size={16} color="#25D366" />
                    <span>
                      <strong>Automated Updates:</strong> A confirmation receipt and brochure will be dispatched to your WhatsApp immediately upon submission.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      backgroundColor: 'var(--primary-700)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.95rem 1.5rem',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 800,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      boxShadow: '0 8px 20px rgba(237, 28, 37, 0.3)',
                      transition: 'all 0.2s',
                      marginTop: '0.5rem'
                    }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Registering Inquiry...' : 'Submit Inquiry & Receive WhatsApp Prospectus'}</span>
                  </button>

                </form>
              </div>
            ) : (
              /* Success Card with Live WhatsApp Simulation */
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#dcfce7',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <CheckCircle size={36} />
                </div>

                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(237, 28, 37, 0.1)',
                  color: 'var(--primary-700)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }}>
                  INQUIRY REFERENCE: {submittedInquiry.id}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-950)', marginBottom: '0.5rem' }}>
                  Inquiry Successfully Registered!
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  Thank you, <strong>{submittedInquiry.parentName}</strong>. Your inquiry for <strong>{submittedInquiry.studentName}</strong> ({submittedInquiry.grade}) 
                  has been routed to the Lakshaya Admissions Office for review and approval.
                </p>

                {/* WhatsApp Notification Simulation Card */}
                <div style={{
                  backgroundColor: '#efeae2',
                  border: '1px solid #d1d7db',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  textAlign: 'left',
                  marginBottom: '1.5rem',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#25D366' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#128c7e', textTransform: 'uppercase' }}>
                      Simulated WhatsApp Dispatch to {submittedInquiry.phone}
                    </span>
                  </div>

                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '0.85rem 1rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    fontSize: '0.84rem',
                    lineHeight: 1.45,
                    color: '#111827'
                  }}>
                    <p style={{ fontWeight: 700, color: '#07152b', marginBottom: '0.35rem' }}>
                      🎓 Lakshaya International School • Admissions Desk
                    </p>
                    <p style={{ margin: 0, marginBottom: '0.5rem' }}>
                      Namaste <strong>{submittedInquiry.parentName}</strong>! We have received your admission inquiry <strong>#{submittedInquiry.id}</strong> for <strong>{submittedInquiry.studentName}</strong> for <strong>{submittedInquiry.grade}</strong> (Session 2025-26).
                    </p>
                    <p style={{ margin: 0, color: '#4b5563', fontSize: '0.78rem' }}>
                      Our Admissions Counselor will connect with you within 24 hours. A digital prospectus and fee breakdown has also been emailed to {submittedInquiry.email}.
                    </p>
                    <div style={{ textAlign: 'right', fontSize: '0.68rem', color: '#9ca3af', marginTop: '0.35rem' }}>
                      Just now • Delivered ✓✓
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '0.75rem 1.5rem',
                      borderRadius: '10px',
                      backgroundColor: 'var(--primary-700)',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
