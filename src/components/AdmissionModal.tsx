import { useState, type FormEvent } from 'react';
import { X, GraduationCap, CheckCircle, Calendar, Phone, Mail, User, BookOpen, Send } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal = ({ isOpen, onClose }: AdmissionModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade I',
    visitDate: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.5rem 2rem' }}
      >
        {/* Close Button */}
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

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--primary-50)',
                color: 'var(--primary-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-950)' }}>
                  Admission & Campus Visit
                </h3>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Academic Session 2025-26 • Lakshaya International School
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Please fill out this quick inquiry form. Our admissions counselor will contact you within 24 hours 
              to confirm your slot and share our curriculum guide.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    Student's Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Patel"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    Grade Seeking Admission *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="Pre-Nursery">Pre-Nursery (Early Years)</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Junior KG">Junior KG</option>
                      <option value="Senior KG">Senior KG</option>
                      <option value="Grade I">Grade I</option>
                      <option value="Grade II">Grade II</option>
                      <option value="Grade III">Grade III</option>
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI (Middle Wing)</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX (Secondary)</option>
                      <option value="Grade X">Grade X</option>
                      <option value="Grade XI">Grade XI (Senior Secondary)</option>
                      <option value="Grade XII">Grade XII</option>
                    </select>
                    <BookOpen size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    Phone Number (WhatsApp) *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <Phone size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    Preferred Campus Visit Date
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <Calendar size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                  Questions or Transportation Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your child's interests or bus route query (optional)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
                >
                  <Send size={18} />
                  <span>Submit Admission Inquiry</span>
                </button>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.25rem' }}>
                🔒 Your contact info is strictly confidential and protected by Lakshaya Privacy Policy.
              </div>
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

            <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-950)', marginBottom: '0.75rem' }}>
              Inquiry Received Successfully!
            </h3>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you, <strong>{formData.parentName}</strong>. We have received your inquiry for <strong>{formData.studentName}</strong> ({formData.grade}). 
              Our admissions team will reach out at <strong>{formData.phone}</strong> shortly.
            </p>

            <div style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              border: '1px solid var(--border-light)',
              marginBottom: '1.75rem',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-700)', marginBottom: '0.35rem' }}>
                Next Steps for Campus Walkthrough:
              </div>
              <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                <li>Carry student birth certificate & prior school evaluation records (if applicable).</li>
                <li>Visit hours: Monday through Saturday, 8:00 AM – 4:00 PM.</li>
                <li>Location: Opp. Applewoods Township, Shantipura Cross Road, S.P. Ring Road, Ahmedabad.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-navy"
              style={{ padding: '0.75rem 2rem', borderRadius: 'var(--radius-full)' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
