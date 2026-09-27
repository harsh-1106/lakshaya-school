import { useState } from 'react';
import { 
  FileText, 
  Search, 
  ArrowLeft, 
  CheckCircle, 
  Award, 
  Calendar, 
  User, 
  Printer, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  QrCode,
  AlertCircle
} from 'lucide-react';
import type { StudentResult } from '../types';
import { DataService } from '../services/dataService';
import { LakshayaLogo } from './LakshayaLogo';


interface ResultPortalProps {
  onBackToHome: () => void;
  onOpenAdmin: () => void;
}

export const ResultPortal = ({ onBackToHome, onOpenAdmin }: ResultPortalProps) => {
  const [rollNo, setRollNo] = useState('');
  const [dob, setDob] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [foundResult, setFoundResult] = useState<StudentResult | null>(null);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const handleSearch = (customRoll?: string, customDob?: string) => {
    const targetRoll = customRoll !== undefined ? customRoll : rollNo;
    const targetDob = customDob !== undefined ? customDob : dob;

    if (!targetRoll.trim()) return;

    setSearchSubmitted(true);
    const res = DataService.findResultByRoll(targetRoll, targetDob);
    setFoundResult(res);
  };

  const handleQuickFill = (sampleRoll: string, sampleDob: string) => {
    setRollNo(sampleRoll);
    setDob(sampleDob);
    handleSearch(sampleRoll, sampleDob);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendWhatsApp = () => {
    if (!foundResult) return;
    DataService.recordNotification({
      recipient: `Registered Mobile of ${foundResult.studentName} (Manoj Sharma)`,
      channel: 'whatsapp',
      template: 'result_published_alert',
      status: 'Delivered',
      previewText: `Dear Parent, Official Marksheet for ${foundResult.studentName} (Roll ${foundResult.rollNo}) - Overall Result: ${foundResult.resultStatus} (${foundResult.percentage}%). Download link: https://lakshayaschool.com/result/${foundResult.rollNo}`
    });
    setNotificationMsg(`Marksheet dispatched to parent's registered WhatsApp (+91 98250 99182)`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const handleSendEmail = () => {
    if (!foundResult) return;
    DataService.recordNotification({
      recipient: `parent.${foundResult.studentName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      channel: 'email',
      template: 'result_published_alert',
      status: 'Delivered',
      previewText: `Official Marksheet PDF for ${foundResult.studentName} - Session 2024-25. Lakshaya International School.`
    });
    setNotificationMsg(`Marksheet PDF copy emailed to parent's registered address.`);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', color: '#0f172a' }}>
      
      {/* Top Banner */}
      <div className="no-print" style={{
        backgroundColor: '#07152b',
        borderBottom: '3px solid #ed1c25',
        color: '#ffffff',
        padding: '0.75rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onBackToHome}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to School Website</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: '#ed1c25',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <FileText size={18} />
              </div>
              <div>
                <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>Result & Marksheet Portal</span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block' }}>Lakshaya International School</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onOpenAdmin}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--accent-gold)',
                color: '#07152b',
                border: 'none',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              <ShieldCheck size={15} />
              <span>Admin Result Hub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Header Banner */}
      <div className="no-print" style={{
        background: 'linear-gradient(135deg, #07152b 0%, #1e293b 100%)',
        color: '#ffffff',
        padding: '3rem 1.5rem 2.5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(237, 28, 37, 0.2)',
            border: '1px solid rgba(237, 28, 37, 0.4)',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            color: '#fca5a5',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            <Award size={14} />
            <span>SESSION 2024–2025 OFFICIAL EVALUATION REPORT</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
            Student Result & Marksheet Download
          </h1>

          <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '2rem' }}>
            Enter your student Roll Number and Date of Birth to view and download your certified official progress report card.
          </p>

          {/* Quick Demo Fill Buttons */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '1rem',
            borderRadius: '12px',
            display: 'inline-block',
            maxWidth: '100%'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.5rem' }}>
              💡 Quick 1-Click Demo Fill for Client Presentation:
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => handleQuickFill('LIS2025-X01', '2009-08-14')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#07152b',
                  border: 'none',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Class 10: Aryan Sharma (LIS2025-X01)
              </button>
              <button
                onClick={() => handleQuickFill('LIS2025-VIII04', '2011-11-20')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#07152b',
                  border: 'none',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Class 8: Ananya Patel (LIS2025-VIII04)
              </button>
              <button
                onClick={() => handleQuickFill('LIS2025-V12', '2014-05-18')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#07152b',
                  border: 'none',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Class 5: Kabir Mehta (LIS2025-V12)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container" style={{ maxWidth: '1000px', margin: '-1.5rem auto 4rem auto', padding: '0 1.5rem' }}>
        
        {/* Search Card */}
        <div className="no-print" style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '1.75rem 2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            alignItems: 'flex-end'
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Roll Number / Student ID *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="e.g. LIS2025-X01"
                  value={rollNo}
                  onChange={e => setRollNo(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <User size={16} color="#94a3b8" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Date of Birth (YYYY-MM-DD)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="date"
                  value={dob}
                  onChange={e => setDob(e.target.value)}
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

            <button
              onClick={() => handleSearch()}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#ed1c25',
                color: '#ffffff',
                border: 'none',
                padding: '0.85rem 1.5rem',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 800,
                cursor: 'pointer',
                height: '46px'
              }}
            >
              <Search size={18} />
              <span>Fetch Marksheet</span>
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        {notificationMsg && (
          <div style={{
            backgroundColor: '#07152b',
            color: '#ffffff',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            borderLeft: '4px solid #25D366'
          }}>
            <CheckCircle size={20} color="#25D366" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{notificationMsg}</span>
          </div>
        )}

        {/* Marksheet Display */}
        {foundResult ? (
          <div>
            {/* Marksheet Action Bar (Not printed) */}
            <div className="no-print" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} color="#16a34a" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#16a34a' }}>
                  Marksheet Verified & Ready
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handlePrint}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#07152b',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.55rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Printer size={16} />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={handleSendWhatsApp}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.55rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Send to WhatsApp</span>
                </button>

                <button
                  onClick={handleSendEmail}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.55rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Mail size={16} />
                  <span>Email Marksheet</span>
                </button>
              </div>
            </div>

            {/* Official Printable Marksheet Card */}
            <div id="printable-marksheet" style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
              border: '2px solid #cbd5e1',
              position: 'relative'
            }}>
              {/* Outer watermark pattern */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.03,
                pointerEvents: 'none',
                zIndex: 0
              }}>
                <LakshayaLogo size={140} />
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                
                {/* Official School Header */}
                <div style={{ textAlign: 'center', borderBottom: '2px solid #07152b', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <LakshayaLogo size={56} />
                  </div>

                  
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', color: '#ed1c25', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    An Educational Initiative of Agrawal Group of Companies (35-Yr Heritage)
                  </div>

                  <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#07152b', margin: '0 0 0.25rem 0', letterSpacing: '-0.02em' }}>
                    LAKSHAYA INTERNATIONAL SCHOOL
                  </h2>

                  <p style={{ fontSize: '0.82rem', color: '#475569', margin: '0 0 0.4rem 0' }}>
                    Opp. Applewoods Township, Shantipura Cross Road, S.P. Ring Road, Ahmedabad - 382210, Gujarat
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                    <span>CBSE Affiliation No: <strong>430291</strong></span>
                    <span>•</span>
                    <span>School Code: <strong>10271</strong></span>
                    <span>•</span>
                    <span>UDISE: <strong>24070600108</strong></span>
                  </div>

                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#07152b',
                    color: 'var(--accent-gold)',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    padding: '0.35rem 1.25rem',
                    borderRadius: '9999px',
                    marginTop: '1rem',
                    letterSpacing: '0.04em'
                  }}>
                    {foundResult.term.toUpperCase()} • {foundResult.academicYear}
                  </div>
                </div>

                {/* Student Details Grid */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '1.75rem'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    fontSize: '0.88rem'
                  }}>
                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Student Full Name
                      </span>
                      <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>{foundResult.studentName}</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Roll Number
                      </span>
                      <strong style={{ fontSize: '1.05rem', color: '#ed1c25' }}>{foundResult.rollNo}</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Class & Section
                      </span>
                      <strong>{foundResult.classGrade} ({foundResult.section})</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Admission / Reg No
                      </span>
                      <strong>{foundResult.admissionNo}</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Date of Birth
                      </span>
                      <strong>{foundResult.dob}</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Father's Name
                      </span>
                      <strong>{foundResult.fatherName}</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Mother's Name
                      </span>
                      <strong>{foundResult.motherName}</strong>
                    </div>

                    <div>
                      <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Annual Attendance
                      </span>
                      <strong style={{ color: '#16a34a' }}>{foundResult.attendancePercent}% (Mandatory &gt;80% Rule Met)</strong>
                    </div>
                  </div>
                </div>

                {/* Scholastic Subject Table */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#07152b', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                    Part 1: Scholastic Performance
                  </div>

                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#07152b', color: '#ffffff', textAlign: 'left' }}>
                        <th style={{ padding: '0.75rem 1rem', border: '1px solid #cbd5e1' }}>Subject Description</th>
                        <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>Theory (80)</th>
                        <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>IA/Prac (20)</th>
                        <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>Total (100)</th>
                        <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>Grade</th>
                        <th style={{ padding: '0.75rem 0.5rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>GP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foundResult.subjects.map((sub, idx) => (
                        <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                          <td style={{ padding: '0.7rem 1rem', border: '1px solid #e2e8f0', fontWeight: 600 }}>{sub.name}</td>
                          <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>{sub.theoryMarks}</td>
                          <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>{sub.practicalMarks}</td>
                          <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 800, color: '#07152b' }}>{sub.total}</td>
                          <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: sub.grade === 'A1' ? '#16a34a' : '#0284c7' }}>
                            {sub.grade}
                          </td>
                          <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>{sub.gradePoint.toFixed(1)}</td>
                        </tr>
                      ))}
                      {/* Summary Row */}
                      <tr style={{ backgroundColor: '#f1f5f9', fontWeight: 800 }}>
                        <td style={{ padding: '0.85rem 1rem', border: '1px solid #cbd5e1' }}>
                          GRAND TOTAL & PERCENTAGE
                        </td>
                        <td colSpan={2} style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>
                          Percentage: <span style={{ color: '#ed1c25', fontSize: '1rem' }}>{foundResult.percentage}%</span>
                        </td>
                        <td style={{ padding: '0.85rem 0.5rem', textAlign: 'center', border: '1px solid #cbd5e1', fontSize: '1.05rem', color: '#07152b' }}>
                          {foundResult.totalMarksObtained} / {foundResult.maxTotalMarks}
                        </td>
                        <td colSpan={2} style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #cbd5e1' }}>
                          Overall Grade: <strong>{foundResult.overallGrade}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Co-Scholastic & Developmental Pentagon Evaluation */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginBottom: '1.75rem'
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#07152b', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                    Part 2: The Developmental Pentagon & Co-Scholastic Skills (3-Point Scale A-B-C)
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', fontSize: '0.82rem' }}>
                    <div>Work Education (STEM / Robotics): <strong>Grade A</strong></div>
                    <div>Art Education & Creative Expression: <strong>Grade A</strong></div>
                    <div>Health, Physical Ed & Karate: <strong>Grade A</strong></div>
                    <div>Discipline & Ethical Values: <strong>Grade A</strong></div>
                  </div>
                </div>

                {/* Final Result Banner */}
                <div style={{
                  backgroundColor: '#ecfdf5',
                  border: '1.5px solid #86efac',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.75rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#166534', fontWeight: 700, textTransform: 'uppercase' }}>
                      Final Examination Standing
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#14532d' }}>
                      {foundResult.resultStatus}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.78rem', color: '#166534', fontWeight: 700 }}>CUMULATIVE CGPA</div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#14532d' }}>
                      {foundResult.cgpa} / 10.0
                    </div>
                  </div>
                </div>

                {/* Remarks */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', backgroundColor: '#ffffff' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Class Teacher's Observations:
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#334155', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                      "{foundResult.teacherRemarks}"
                    </p>
                  </div>

                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', backgroundColor: '#ffffff' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Principal's Commendation:
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#334155', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                      "{foundResult.principalRemark}"
                    </p>
                  </div>
                </div>

                {/* Signatures & Seal */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  paddingTop: '2rem',
                  borderTop: '1px solid #cbd5e1',
                  flexWrap: 'wrap',
                  gap: '2rem'
                }}>
                  {/* Digital QR */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      border: '1px solid #07152b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px'
                    }}>
                      <QrCode size={48} color="#07152b" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#07152b' }}>
                        DIGITALLY VERIFIED
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                        Ref: LIS-EVAL-{foundResult.rollNo}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                        Dated: {foundResult.issueDate}
                      </div>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '140px', borderBottom: '1px solid #0f172a', marginBottom: '0.35rem' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>Class Teacher</div>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '140px', borderBottom: '1px solid #0f172a', marginBottom: '0.35rem' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>Controller of Examinations</div>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      display: 'inline-block',
                      fontFamily: 'serif',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#07152b',
                      transform: 'rotate(-4deg)',
                      marginBottom: '0.2rem'
                    }}>
                      Neha Agrawal
                    </div>
                    <div style={{ width: '140px', borderBottom: '1.5px solid #0f172a', marginBottom: '0.35rem' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#07152b' }}>
                      Principal (ECI Awardee)
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : searchSubmitted ? (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
          }}>
            <AlertCircle size={48} color="#f59e0b" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              No Marksheet Found for "{rollNo}"
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
              Please verify your Roll Number format (e.g. LIS2025-X01) or click one of the quick demo buttons above.
            </p>
            <button
              onClick={() => handleQuickFill('LIS2025-X01', '2009-08-14')}
              style={{
                backgroundColor: '#ed1c25',
                color: '#ffffff',
                border: 'none',
                padding: '0.65rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Load Sample Marksheet (Aryan Sharma - Class 10)
            </button>
          </div>
        ) : null}

      </div>

    </div>
  );
};
