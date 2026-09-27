import { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  FileText, 
  Settings, 
  CheckCircle, 
  Search, 
  ArrowLeft, 
  Mail, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  UserCheck, 
  Eye, 
  X, 
  Smartphone,
  Save,
  RefreshCw
} from 'lucide-react';
import type { 
  StudentInquiry, 
  AlumniMember, 
  StudentResult, 
  NotificationLog, 
  NotificationConfig 
} from '../types';
import { AlumniEventManager } from './AlumniEventManager';
import { DataService } from '../services/dataService';

interface AdminPanelProps {
  onBackToHome: () => void;
  onOpenAlumni: () => void;
  onOpenResults: () => void;
}


export const AdminPanel = ({ onBackToHome, onOpenAlumni, onOpenResults }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inquiries' | 'alumni' | 'results' | 'notifications'>('dashboard');

  // Live Data States
  const [inquiries, setInquiries] = useState<StudentInquiry[]>(() => DataService.getInquiries());
  const [alumni, setAlumni] = useState<AlumniMember[]>(() => DataService.getAlumni());
  const [results, setResults] = useState<StudentResult[]>(() => DataService.getResults());
  const [logs, setLogs] = useState<NotificationLog[]>(() => DataService.getNotificationLogs());
  const [config, setConfig] = useState<NotificationConfig>(() => DataService.getConfig());

  // Filter States
  const [inquiryFilter, setInquiryFilter] = useState<string>('all');
  const [inquirySearch, setInquirySearch] = useState('');
  const [alumniFilter, setAlumniFilter] = useState<string>('all');
  const [alumniSearch, setAlumniSearch] = useState('');

  // Modals & Popups
  const [selectedInquiry, setSelectedInquiry] = useState<StudentInquiry | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // WhatsApp Simulator State
  const [simPhone, setSimPhone] = useState('+91 98250 14829');
  const [simName, setSimName] = useState('Rajesh Dave');
  const [simTemplate, setSimTemplate] = useState('admission_approved_welcome');
  const [simChannel, setSimChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [simHistory, setSimHistory] = useState<Array<{ text: string; time: string; channel: string }>>([
    {
      text: '🎓 Lakshaya International School: Namaste Rajesh Dave! We have received your inquiry for Vivaan Dave (Grade 5). Counselor will connect with you.',
      time: '10:31 AM',
      channel: 'whatsapp'
    }
  ]);

  // Refresh helper
  const reloadData = () => {
    setInquiries(DataService.getInquiries());
    setAlumni(DataService.getAlumni());
    setResults(DataService.getResults());
    setLogs(DataService.getNotificationLogs());
    setConfig(DataService.getConfig());
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Inquiry Actions
  const handleApproveInquiry = (id: string) => {
    DataService.updateInquiryStatus(id, 'approved', 'Approved by Principal Neha Agrawal');
    reloadData();
    showToast('Inquiry Approved! Automated WhatsApp & Email notification triggered.');
  };

  const handleUpdateInquiryStatus = (id: string, status: StudentInquiry['status']) => {
    DataService.updateInquiryStatus(id, status);
    reloadData();
    showToast(`Inquiry status updated to ${status}.`);
  };

  // Alumni Actions
  const handleApproveAlumni = (id: string) => {
    DataService.approveAlumni(id);
    reloadData();
    showToast('Alumni Profile Verified! Badge activated and welcome WhatsApp sent.');
  };

  const handleRejectAlumni = (id: string) => {
    DataService.rejectAlumni(id);
    reloadData();
    showToast('Alumni Profile rejected.');
  };

  // Send Test Notification Simulator
  const handleSendSimNotification = (e: React.FormEvent) => {
    e.preventDefault();
    let text = '';
    if (simTemplate === 'admission_inquiry_received') {
      text = `🎓 Lakshaya International School: Namaste ${simName}! Your inquiry has been registered. Admissions counselor will contact you within 24 hours.`;
    } else if (simTemplate === 'admission_approved_welcome') {
      text = `🎉 Congratulations ${simName}! Admission for your ward has been APPROVED by Principal Neha Agrawal at Lakshaya International School. Welcome to the Lakshaya family!`;
    } else if (simTemplate === 'alumni_verification_approved') {
      text = `🌟 Welcome to the Lakshaya Alumni Network, ${simName}! Your alumni membership is verified. Find your batchmates at https://lakshayaschool.com/alumni`;
    } else {
      text = `📊 Lakshaya School: Examination result for Roll LIS2025-X01 has been published. Download marksheet at https://lakshayaschool.com/result`;
    }

    DataService.recordNotification({
      recipient: `${simPhone} (${simName})`,
      channel: simChannel,
      template: simTemplate,
      status: 'Delivered',
      previewText: text
    });

    setSimHistory(prev => [
      ...prev,
      {
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        channel: simChannel
      }
    ]);

    reloadData();
    showToast(`Test ${simChannel.toUpperCase()} successfully dispatched to ${simPhone}!`);
  };

  // Save Settings
  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    DataService.saveConfig(config);
    showToast('WhatsApp & Mail notification configurations saved successfully!');
  };

  // Filtered lists
  const filteredInquiries = useMemo(() => {
    return inquiries.filter(item => {
      if (inquiryFilter !== 'all' && item.status !== inquiryFilter) return false;
      if (inquirySearch) {
        const q = inquirySearch.toLowerCase();
        return (
          item.studentName.toLowerCase().includes(q) ||
          item.parentName.toLowerCase().includes(q) ||
          item.grade.toLowerCase().includes(q) ||
          item.phone.includes(q) ||
          item.id.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [inquiries, inquiryFilter, inquirySearch]);

  const filteredAlumni = useMemo(() => {
    return alumni.filter(item => {
      if (alumniFilter !== 'all' && item.status !== alumniFilter) return false;
      if (alumniSearch) {
        const q = alumniSearch.toLowerCase();
        return (
          item.fullName.toLowerCase().includes(q) ||
          item.currentRole.toLowerCase().includes(q) ||
          item.company.toLowerCase().includes(q) ||
          item.city.toLowerCase().includes(q) ||
          String(item.batchYear).includes(q)
        );
      }
      return true;
    });
  }, [alumni, alumniFilter, alumniSearch]);

  // Metrics
  const pendingInquiriesCount = inquiries.filter(i => i.status === 'new' || i.status === 'review').length;
  const pendingAlumniCount = alumni.filter(a => a.status === 'pending').length;

  return (
    <div style={{ backgroundColor: '#0b132b', minHeight: '100vh', color: '#f8fafc' }}>
      
      {/* Top Bar */}
      <header style={{
        backgroundColor: '#07152b',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0.75rem 1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1440px',
          margin: '0 auto',
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
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={15} />
              <span>Back to Public Site</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                backgroundColor: '#ed1c25',
                color: '#ffffff',
                padding: '0.35rem 0.6rem',
                borderRadius: '6px',
                fontWeight: 900,
                fontSize: '0.82rem',
                letterSpacing: '0.05em'
              }}>
                ADMIN HUB
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Lakshaya Executive Command Hub</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Live Status indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#86efac' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
              <span>WhatsApp Cloud API Active</span>
            </div>

            {/* Admin badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '0.35rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.82rem'
            }}>
              <ShieldCheck size={16} color="var(--accent-gold)" />
              <span>Principal Neha Agrawal (Admin)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '1.5rem', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1.5rem' }}>
        
        {/* Sidebar Nav */}
        <aside style={{
          backgroundColor: '#0e1e38',
          borderRadius: '16px',
          padding: '1.25rem',
          height: 'fit-content',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
            Modules & Operations
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <button
              onClick={() => setActiveTab('dashboard')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: activeTab === 'dashboard' ? '#ed1c25' : 'transparent',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <LayoutDashboard size={18} />
                <span>Dashboard Overview</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: activeTab === 'inquiries' ? '#ed1c25' : 'transparent',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <GraduationCap size={18} />
                <span>Student Inquiries</span>
              </div>
              {pendingInquiriesCount > 0 && (
                <span style={{
                  backgroundColor: activeTab === 'inquiries' ? '#ffffff' : '#f59e0b',
                  color: activeTab === 'inquiries' ? '#ed1c25' : '#07152b',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '0.15rem 0.45rem',
                  borderRadius: '9999px'
                }}>
                  {pendingInquiriesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('alumni')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: activeTab === 'alumni' ? '#ed1c25' : 'transparent',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Users size={18} />
                <span>Alumni Approvals</span>
              </div>
              {pendingAlumniCount > 0 && (
                <span style={{
                  backgroundColor: activeTab === 'alumni' ? '#ffffff' : '#ef4444',
                  color: activeTab === 'alumni' ? '#ed1c25' : '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '0.15rem 0.45rem',
                  borderRadius: '9999px'
                }}>
                  {pendingAlumniCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('results')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: activeTab === 'results' ? '#ed1c25' : 'transparent',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FileText size={18} />
                <span>Result Management</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{results.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: activeTab === 'notifications' ? '#ed1c25' : 'transparent',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MessageSquare size={18} />
                <span>Mail & WhatsApp Config</span>
              </div>
            </button>
          </nav>

          {/* Quick Direct Links */}
          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Client Demo Jump Links
            </div>
            <button
              onClick={onOpenAlumni}
              style={{
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.55rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                marginBottom: '0.5rem',
                textAlign: 'left'
              }}
            >
              ↗ View Alumni Portal
            </button>
            <button
              onClick={onOpenResults}
              style={{
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.55rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              ↗ View Result Portal Public
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <main>
          
          {/* Toast Notification */}
          {toastMessage && (
            <div style={{
              backgroundColor: '#15803d',
              color: '#ffffff',
              padding: '0.85rem 1.25rem',
              borderRadius: '10px',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              fontSize: '0.88rem',
              fontWeight: 600
            }}>
              <CheckCircle size={18} />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* 1. DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div>
              {/* Stat Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Total Inquiries</span>
                    <GraduationCap size={20} color="#ed1c25" />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>{inquiries.length}</div>
                  <div style={{ fontSize: '0.78rem', color: '#f59e0b', marginTop: '0.25rem' }}>
                    {pendingInquiriesCount} pending review
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Alumni Network</span>
                    <Users size={20} color="var(--accent-gold)" />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>{alumni.length}</div>
                  <div style={{ fontSize: '0.78rem', color: pendingAlumniCount > 0 ? '#ef4444' : '#22c55e', marginTop: '0.25rem' }}>
                    {pendingAlumniCount} pending admin verification
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Published Results</span>
                    <FileText size={20} color="#38bdf8" />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>{results.length}</div>
                  <div style={{ fontSize: '0.78rem', color: '#38bdf8', marginTop: '0.25rem' }}>
                    100% CBSE & Term verified
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Notifications Dispatched</span>
                    <MessageSquare size={20} color="#22c55e" />
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>{logs.length}</div>
                  <div style={{ fontSize: '0.78rem', color: '#22c55e', marginTop: '0.25rem' }}>
                    WhatsApp + Email live logs
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Stream */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
                
                {/* Pending Actions Box */}
                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
                    Priority Inquiries Awaiting Action
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {inquiries.slice(0, 3).map(inq => (
                      <div
                        key={inq.id}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          borderRadius: '10px',
                          padding: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{inq.studentName}</div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                            {inq.grade} • Parent: {inq.parentName} ({inq.phone})
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          {inq.status !== 'approved' ? (
                            <button
                              onClick={() => handleApproveInquiry(inq.id)}
                              style={{
                                backgroundColor: '#15803d',
                                color: '#ffffff',
                                border: 'none',
                                padding: '0.35rem 0.65rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              Approve
                            </button>
                          ) : (
                            <span style={{ fontSize: '0.75rem', color: '#86efac', fontWeight: 700 }}>Approved ✓</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab('inquiries')}
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                      padding: '0.65rem',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    View All {inquiries.length} Inquiries →
                  </button>
                </div>

                {/* Pending Alumni Verification Box */}
                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
                    Alumni Awaiting Admin Verification
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {alumni.filter(a => a.status === 'pending').length > 0 ? (
                      alumni.filter(a => a.status === 'pending').map(al => (
                        <div
                          key={al.id}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderRadius: '10px',
                            padding: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem'
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{al.fullName}</div>
                            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                              Batch {al.batchYear} • {al.currentRole} at {al.company}
                            </div>
                          </div>

                          <button
                            onClick={() => handleApproveAlumni(al.id)}
                            style={{
                              backgroundColor: '#ed1c25',
                              color: '#ffffff',
                              border: 'none',
                              padding: '0.35rem 0.65rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Verify & Approve
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
                        All alumni profiles have been verified. Zero pending.
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveTab('alumni')}
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                      padding: '0.65rem',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#cbd5e1',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    Moderate Alumni Registrations →
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* 2. STUDENT INQUIRIES HUB */}
          {activeTab === 'inquiries' && (
            <div style={{ backgroundColor: '#0e1e38', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                    Student Inquiries & Admissions
                  </h2>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>
                    Submitted inquiries from website landing page with automated WhatsApp acknowledgment.
                  </p>
                </div>

                <button
                  onClick={() => reloadData()}
                  style={{

                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  <RefreshCw size={14} />
                  <span>Refresh List</span>
                </button>
              </div>

              {/* Filters & Search */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: '1 1 240px' }}>
                  <input
                    type="text"
                    placeholder="Search by student, parent, phone, grade..."
                    value={inquirySearch}
                    onChange={e => setInquirySearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem 0.65rem 2.2rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {['all', 'new', 'review', 'contacted', 'approved'].map(status => (
                    <button
                      key={status}
                      onClick={() => setInquiryFilter(status)}
                      style={{
                        padding: '0.55rem 0.85rem',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: inquiryFilter === status ? '#ed1c25' : 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        cursor: 'pointer'
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>
                      <th style={{ padding: '0.75rem' }}>Ref ID</th>
                      <th style={{ padding: '0.75rem' }}>Student & Grade</th>
                      <th style={{ padding: '0.75rem' }}>Parent & WhatsApp</th>
                      <th style={{ padding: '0.75rem' }}>Visit Date</th>
                      <th style={{ padding: '0.75rem' }}>Status</th>
                      <th style={{ padding: '0.75rem', textAlign: 'right' }}>Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.map(item => (
                      <tr key={item.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                          {item.id}
                        </td>
                        <td style={{ padding: '0.75rem' }}>
                          <div style={{ fontWeight: 700, color: '#ffffff' }}>{item.studentName}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.grade}</div>
                        </td>
                        <td style={{ padding: '0.75rem' }}>
                          <div>{item.parentName}</div>
                          <div style={{ fontSize: '0.75rem', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <MessageSquare size={12} />
                            <span>{item.phone}</span>
                          </div>
                        </td>
                        <td style={{ padding: '0.75rem', color: '#cbd5e1' }}>
                          {item.visitDate || 'Not specified'}
                        </td>
                        <td style={{ padding: '0.75rem' }}>
                          <span style={{
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            backgroundColor:
                              item.status === 'approved' ? '#14532d' :
                              item.status === 'new' ? '#7f1d1d' :
                              item.status === 'contacted' ? '#1e3a8a' : '#78350f',
                            color:
                              item.status === 'approved' ? '#86efac' :
                              item.status === 'new' ? '#fca5a5' :
                              item.status === 'contacted' ? '#93c5fd' : '#fde68a'
                          }}>
                            {item.status}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.35rem' }}>
                            <button
                              onClick={() => setSelectedInquiry(item)}
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '0.35rem 0.6rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                cursor: 'pointer'
                              }}
                            >
                              <Eye size={13} />
                            </button>

                            {item.status !== 'approved' && (
                              <button
                                onClick={() => handleApproveInquiry(item.id)}
                                style={{
                                  backgroundColor: '#15803d',
                                  color: '#ffffff',
                                  border: 'none',
                                  padding: '0.35rem 0.65rem',
                                  borderRadius: '6px',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  cursor: 'pointer'
                                }}
                              >
                                Approve Admission
                              </button>
                            )}

                            {item.status === 'new' && (
                              <button
                                onClick={() => handleUpdateInquiryStatus(item.id, 'contacted')}
                                style={{
                                  backgroundColor: '#1e40af',
                                  color: '#ffffff',
                                  border: 'none',
                                  padding: '0.35rem 0.65rem',
                                  borderRadius: '6px',
                                  fontSize: '0.75rem',
                                  cursor: 'pointer'
                                }}
                              >
                                Contacted
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* 3. ALUMNI NETWORK MODERATION */}
          {activeTab === 'alumni' && (
            <div style={{ backgroundColor: '#0e1e38', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                    Alumni Verification
                  </h2>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>
                    Check registrations against school records. Only verified alumni appear in the public directory.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => setAlumniFilter('pending')}
                    style={{
                      backgroundColor: alumniFilter === 'pending' ? '#ef4444' : 'rgba(239, 68, 68, 0.15)',
                      color: '#ffffff',
                      border: '1px solid #ef4444',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Pending Approvals ({alumni.filter(a => a.status === 'pending').length})
                  </button>

                  <button
                    onClick={() => setAlumniFilter('all')}
                    style={{
                      backgroundColor: alumniFilter === 'all' ? '#07152b' : 'rgba(255, 255, 255, 0.08)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    All Members ({alumni.length})
                  </button>
                </div>
              </div>

              {/* Alumni Search Input */}
              <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  placeholder="Search alumni by name, role, company, city..."
                  value={alumniSearch}
                  onChange={e => setAlumniSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem 0.65rem 2.2rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>

              {/* Alumni Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>

                {filteredAlumni.map(item => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      border: item.status === 'pending' ? '1.5px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <div
                            aria-hidden="true"
                            style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#1e4fa1', color: '#ffffff', display: 'grid', placeItems: 'center', fontWeight: 800, flexShrink: 0 }}
                          >
                            {item.fullName.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()}
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff' }}>
                              {item.fullName}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                              Batch {item.batchYear} • {item.lastClass} • {item.house} House
                            </div>
                          </div>
                        </div>

                        <span style={{
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          backgroundColor: item.status === 'verified' ? '#14532d' : '#78350f',
                          color: item.status === 'verified' ? '#86efac' : '#fde68a'
                        }}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.82rem', marginBottom: '0.4rem', color: '#e2e8f0' }}>
                        <strong>{item.currentRole}</strong> at {item.company}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                        🎓 {item.higherEducation} • 📍 {item.city}, {item.country}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                        📞 {item.phone} • ✉️ {item.email}
                      </div>

                      <p style={{ fontSize: '0.78rem', color: '#cbd5e1', fontStyle: 'italic', margin: 0, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
                        "{item.bio}"
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {item.status !== 'verified' ? (
                        <button
                          onClick={() => handleApproveAlumni(item.id)}
                          style={{
                            flex: 1,
                            backgroundColor: '#15803d',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.5rem',
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.3rem'
                          }}
                        >
                          <UserCheck size={14} />
                          <span>Verify & Grant Badge</span>
                        </button>
                      ) : (
                        <div style={{ fontSize: '0.75rem', color: '#86efac', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <CheckCircle size={14} />
                          <span>Listed in the public alumni directory</span>
                        </div>
                      )}

                      {item.status === 'pending' && (
                        <button
                          onClick={() => handleRejectAlumni(item.id)}
                          style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.2)',
                            color: '#fca5a5',
                            border: 'none',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <AlumniEventManager />
            </div>
          )}

          {/* 4. RESULT MANAGEMENT */}
          {activeTab === 'results' && (
            <div style={{ backgroundColor: '#0e1e38', borderRadius: '16px', padding: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                    Student Marksheets & Result Repository
                  </h2>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>
                    Certified marksheet records available for student search and download.
                  </p>
                </div>

                <button
                  onClick={onOpenResults}
                  style={{
                    backgroundColor: '#ed1c25',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Open Result Download Portal ↗
                </button>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>
                      <th style={{ padding: '0.75rem' }}>Roll No</th>
                      <th style={{ padding: '0.75rem' }}>Student Name</th>
                      <th style={{ padding: '0.75rem' }}>Class</th>
                      <th style={{ padding: '0.75rem' }}>DOB</th>
                      <th style={{ padding: '0.75rem' }}>Percentage</th>
                      <th style={{ padding: '0.75rem' }}>Result Standing</th>
                      <th style={{ padding: '0.75rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(res => (
                      <tr key={res.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                          {res.rollNo}
                        </td>
                        <td style={{ padding: '0.75rem', fontWeight: 700, color: '#ffffff' }}>
                          {res.studentName}
                        </td>
                        <td style={{ padding: '0.75rem', color: '#cbd5e1' }}>
                          {res.classGrade} ({res.section})
                        </td>
                        <td style={{ padding: '0.75rem', color: '#94a3b8' }}>
                          {res.dob}
                        </td>
                        <td style={{ padding: '0.75rem', fontWeight: 800, color: '#86efac' }}>
                          {res.percentage}% (CGPA {res.cgpa})
                        </td>
                        <td style={{ padding: '0.75rem' }}>
                          <span style={{
                            backgroundColor: '#14532d',
                            color: '#86efac',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.72rem',
                            fontWeight: 800
                          }}>
                            {res.resultStatus}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                          <button
                            onClick={onOpenResults}
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              color: '#ffffff',
                              border: 'none',
                              padding: '0.35rem 0.65rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              cursor: 'pointer'
                            }}
                          >
                            Preview Marksheet
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* 5. MAIL & WHATSAPP CONFIGURATION & SIMULATOR */}
          {activeTab === 'notifications' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                
                {/* Configuration Settings */}
                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    <Settings size={20} color="#ed1c25" />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
                      Mail & WhatsApp Configuration
                    </h3>
                  </div>

                  <form onSubmit={handleSaveConfig} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* WhatsApp API Section */}
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <MessageSquare size={14} />
                        <span>Meta WhatsApp Business Cloud API</span>
                      </div>
                      
                      <div style={{ marginBottom: '0.75rem' }}>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                          API Access Token
                        </label>
                        <input
                          type="password"
                          value={config.whatsappApiKey}
                          onChange={e => setConfig({ ...config, whatsappApiKey: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.55rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            color: '#ffffff',
                            fontSize: '0.8rem',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                          Phone Number ID (Meta Business Manager)
                        </label>
                        <input
                          type="text"
                          value={config.whatsappPhoneId}
                          onChange={e => setConfig({ ...config, whatsappPhoneId: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.55rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            color: '#ffffff',
                            fontSize: '0.8rem',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    {/* Email SMTP Section */}
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Mail size={14} />
                        <span>Institutional Mail Gateway (SMTP / SES)</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                            SMTP Host
                          </label>
                          <input
                            type="text"
                            value={config.smtpHost}
                            onChange={e => setConfig({ ...config, smtpHost: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '0.55rem',
                              borderRadius: '6px',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              color: '#ffffff',
                              fontSize: '0.8rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                            Port
                          </label>
                          <input
                            type="number"
                            value={config.smtpPort}
                            onChange={e => setConfig({ ...config, smtpPort: Number(e.target.value) })}
                            style={{
                              width: '100%',
                              padding: '0.55rem',
                              borderRadius: '6px',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              color: '#ffffff',
                              fontSize: '0.8rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                          Sender Address
                        </label>
                        <input
                          type="text"
                          value={config.senderEmail}
                          onChange={e => setConfig({ ...config, senderEmail: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.55rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            color: '#ffffff',
                            fontSize: '0.8rem',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    {/* Automation Checkboxes */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={config.notifyOnInquiry}
                          onChange={e => setConfig({ ...config, notifyOnInquiry: e.target.checked })}
                          style={{ accentColor: '#ed1c25' }}
                        />
                        <span>Auto-send WhatsApp prospectus on student inquiry</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={config.notifyOnInquiryApproval}
                          onChange={e => setConfig({ ...config, notifyOnInquiryApproval: e.target.checked })}
                          style={{ accentColor: '#ed1c25' }}
                        />
                        <span>Send WhatsApp + Email on Admission Approval</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={config.notifyOnAlumniApproval}
                          onChange={e => setConfig({ ...config, notifyOnAlumniApproval: e.target.checked })}
                          style={{ accentColor: '#ed1c25' }}
                        />
                        <span>Send WhatsApp welcome on Alumni Badge Approval</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#ed1c25',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Save size={16} />
                      <span>Save Gateway Settings</span>
                    </button>
                  </form>
                </div>

                {/* Live Mobile Simulator for Client Demo */}
                <div style={{
                  backgroundColor: '#0e1e38',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                      <Smartphone size={20} color="#22c55e" />
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
                          Live Notification Simulator
                        </h3>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                          Demonstrate real-time WhatsApp delivery to the client.
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSendSimNotification} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                            Recipient Phone / WhatsApp
                          </label>
                          <input
                            type="text"
                            value={simPhone}
                            onChange={e => setSimPhone(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              borderRadius: '6px',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              color: '#ffffff',
                              fontSize: '0.8rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                            Recipient Name
                          </label>
                          <input
                            type="text"
                            value={simName}
                            onChange={e => setSimName(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              borderRadius: '6px',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              color: '#ffffff',
                              fontSize: '0.8rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                          Notification Channel
                        </label>

                        <select
                          value={simChannel}
                          onChange={e => setSimChannel(e.target.value as 'whatsapp' | 'email')}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backgroundColor: '#07152b',
                            color: '#ffffff',
                            fontSize: '0.8rem',
                            boxSizing: 'border-box',
                            marginBottom: '0.5rem'
                          }}
                        >
                          <option value="whatsapp">WhatsApp Cloud API (Instant Chat Alert)</option>
                          <option value="email">Email Notification Gateway (SMTP)</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.2rem' }}>
                          Select Message Template
                        </label>

                        <select
                          value={simTemplate}
                          onChange={e => setSimTemplate(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backgroundColor: '#07152b',
                            color: '#ffffff',
                            fontSize: '0.8rem',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="admission_approved_welcome">1. Admission Approved & Welcome Letter</option>
                          <option value="admission_inquiry_received">2. Student Inquiry Received (Instant Acknowledgment)</option>
                          <option value="alumni_verification_approved">3. Alumni Verification Success</option>
                          <option value="result_published_alert">4. Examination Result & Marksheet Download Alert</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        style={{
                          backgroundColor: '#22c55e',
                          color: '#07152b',
                          border: 'none',
                          padding: '0.65rem',
                          borderRadius: '8px',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <Send size={15} />
                        <span>Dispatch Test WhatsApp Alert</span>
                      </button>
                    </form>

                    {/* WhatsApp Mobile Chat Mockup */}
                    <div style={{
                      backgroundColor: '#efeae2',
                      borderRadius: '16px',
                      padding: '1rem',
                      border: '4px solid #1e293b',
                      color: '#111827',
                      maxHeight: '260px',
                      overflowY: 'auto'
                    }}>
                      <div style={{ textAlign: 'center', fontSize: '0.7rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                        🔒 End-to-end encrypted with Lakshaya International School
                      </div>

                      {simHistory.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: '#dcf8c6',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '8px 8px 2px 8px',
                            fontSize: '0.78rem',
                            lineHeight: 1.4,
                            marginBottom: '0.5rem',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                            marginLeft: 'auto',
                            maxWidth: '90%'
                          }}
                        >
                          <div>{item.text}</div>
                          <div style={{ textAlign: 'right', fontSize: '0.65rem', color: '#4b5563', marginTop: '0.2rem' }}>
                            {item.time} • Delivered ✓✓
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>

              {/* Notification Audit Log */}
              <div style={{
                backgroundColor: '#0e1e38',
                borderRadius: '16px',
                padding: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>
                  Live Notification Dispatch Log
                </h3>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>
                        <th style={{ padding: '0.6rem' }}>Time</th>
                        <th style={{ padding: '0.6rem' }}>Channel</th>
                        <th style={{ padding: '0.6rem' }}>Recipient</th>
                        <th style={{ padding: '0.6rem' }}>Template</th>
                        <th style={{ padding: '0.6rem' }}>Preview</th>
                        <th style={{ padding: '0.6rem' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map(log => (
                        <tr key={log.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                          <td style={{ padding: '0.6rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>{log.timestamp}</td>
                          <td style={{ padding: '0.6rem' }}>
                            <span style={{
                              backgroundColor: log.channel === 'whatsapp' ? '#14532d' : '#1e3a8a',
                              color: log.channel === 'whatsapp' ? '#86efac' : '#bfdbfe',
                              padding: '0.15rem 0.45rem',
                              borderRadius: '4px',
                              fontSize: '0.7rem',
                              fontWeight: 800,
                              textTransform: 'uppercase'
                            }}>
                              {log.channel}
                            </span>
                          </td>
                          <td style={{ padding: '0.6rem', fontWeight: 600, color: '#ffffff' }}>{log.recipient}</td>
                          <td style={{ padding: '0.6rem', color: '#cbd5e1' }}>{log.template}</td>
                          <td style={{ padding: '0.6rem', color: '#94a3b8', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {log.previewText}
                          </td>
                          <td style={{ padding: '0.6rem' }}>
                            <span style={{ color: '#22c55e', fontWeight: 700 }}>{log.status} ✓✓</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="modal-overlay" onClick={() => setSelectedInquiry(null)}>
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '600px', padding: '2rem', backgroundColor: '#0e1e38', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.8rem' }}>{selectedInquiry.id}</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: '0.2rem 0 0 0' }}>
                  Inquiry: {selectedInquiry.studentName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem' }}>Grade Applying:</span>
                <strong>{selectedInquiry.grade}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem' }}>Academic Session:</span>
                <strong>{selectedInquiry.academicYear}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem' }}>Parent Name:</span>
                <strong>{selectedInquiry.parentName}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem' }}>WhatsApp / Phone:</span>
                <strong>{selectedInquiry.phone}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem' }}>Parent Email:</span>
                <strong>{selectedInquiry.email}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem' }}>Preferred Campus Visit:</span>
                <strong>{selectedInquiry.visitDate || 'Flexible'}</strong>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ color: '#94a3b8', display: 'block', fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                Parent Message / Special Interests:
              </span>
              <p style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '0.75rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                lineHeight: 1.5,
                margin: 0
              }}>
                {selectedInquiry.notes || 'No extra notes provided.'}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  handleApproveInquiry(selectedInquiry.id);
                  setSelectedInquiry(null);
                }}
                style={{
                  backgroundColor: '#15803d',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Approve Admission & Send WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
