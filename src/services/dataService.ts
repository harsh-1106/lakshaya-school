import type {
  StudentInquiry,
  AlumniMember,
  AlumniEvent,
  AlumniRsvp,
  StudentResult,
  NotificationLog,
  NotificationConfig
} from '../types';


const STORAGE_KEYS = {
  INQUIRIES: 'lis_inquiries_data_v1',
  // v2: single-school alumni model (real houses, no sample profiles)
  ALUMNI: 'lis_alumni_data_v2',
  EVENTS: 'lis_alumni_events_v2',
  RESULTS: 'lis_student_results_v1',
  NOTIFICATIONS: 'lis_notification_logs_v1',
  CONFIG: 'lis_notification_config_v1'
};

const BACKEND_BASE_URL = 'http://localhost:8000/api';

// Seed Inquiries
const SEED_INQUIRIES: StudentInquiry[] = [
  {
    id: 'INQ-2025-001',
    studentName: 'Vivaan Dave',
    parentName: 'Rajesh Dave',
    email: 'rajesh.dave@gmail.com',
    phone: '+91 98250 14829',
    grade: 'Grade 5 (Primary)',
    academicYear: '2025-26',
    visitDate: '2025-04-10',
    notes: 'Interested in robotics lab and experiential learning at Shilaj Farm. Transfer from Mumbai.',
    status: 'new',
    createdAt: '2025-03-24T10:30:00Z',
    whatsappNotified: true,
    emailNotified: true,
    adminNotes: 'Awaiting campus tour confirmation'
  },
  {
    id: 'INQ-2025-002',
    studentName: 'Aanya Sharma',
    parentName: 'Dr. Vikram Sharma',
    email: 'v.sharma.ortho@gmail.com',
    phone: '+91 99099 23412',
    grade: 'Pre-Nursery (Early Years)',
    academicYear: '2025-26',
    visitDate: '2025-04-05',
    notes: 'Looking for award-winning early childhood foundation and safe transport with female attendants.',
    status: 'review',
    createdAt: '2025-03-23T14:15:00Z',
    whatsappNotified: true,
    emailNotified: true,
    adminNotes: 'Requested Saturday morning interaction'
  },
  {
    id: 'INQ-2025-003',
    studentName: 'Shaurya Patel',
    parentName: 'Bhavin Patel',
    email: 'bhavin.patel@agrocorp.in',
    phone: '+91 98791 88320',
    grade: 'Grade 8 (Middle School)',
    academicYear: '2025-26',
    visitDate: '2025-04-02',
    notes: 'Student is state-level karate champion and interested in Lakshaya martial arts dojo.',
    status: 'approved',
    createdAt: '2025-03-20T09:00:00Z',
    whatsappNotified: true,
    emailNotified: true,
    adminNotes: 'Admission approved by Principal. Welcome kit dispatched.'
  },
  {
    id: 'INQ-2025-004',
    studentName: 'Diya Parikh',
    parentName: 'Snehal Parikh',
    email: 'snehal.parikh@tcs.com',
    phone: '+91 94260 77192',
    grade: 'Grade 1 (Foundational)',
    academicYear: '2025-26',
    visitDate: '2025-04-08',
    notes: 'Interested in day boarding and holistic Pentagon curriculum.',
    status: 'contacted',
    createdAt: '2025-03-19T11:45:00Z',
    whatsappNotified: true,
    emailNotified: true,
    adminNotes: 'Counselor contacted on phone. Scheduled visit.'
  }
];

// Alumni and alumni events start empty: the directory only ever lists real, admin-verified registrations.
const SEED_ALUMNI: AlumniMember[] = [];
const SEED_EVENTS: AlumniEvent[] = [];

// Seed Student Marksheets
const SEED_RESULTS: StudentResult[] = [
  {
    id: 'RES-2025-X01',
    rollNo: 'LIS2025-X01',
    studentName: 'Aryan Sharma',
    admissionNo: 'LIS/ADM/2018/142',
    classGrade: 'Class 10',
    section: 'Section A',
    dob: '2009-08-14',
    academicYear: '2024-25',
    term: 'Annual Board Assessment & Pre-Board Final',
    fatherName: 'Mr. Manoj Sharma',
    motherName: 'Mrs. Kavita Sharma',
    attendancePercent: 97.4,
    subjects: [
      { name: 'English Communicative (101)', theoryMarks: 76, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 96, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Mathematics Standard (041)', theoryMarks: 78, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 98, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Science & Experimental Physics (086)', theoryMarks: 75, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 95, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Social Science & Civics (087)', theoryMarks: 74, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 94, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Hindi Course A (002)', theoryMarks: 73, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 93, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Artificial Intelligence & Coding (417)', theoryMarks: 49, maxTheory: 50, practicalMarks: 49, maxPractical: 50, total: 98, maxMarks: 100, grade: 'A1', gradePoint: 10.0 }
    ],
    totalMarksObtained: 574,
    maxTotalMarks: 600,
    percentage: 95.67,
    cgpa: 9.8,
    overallGrade: 'A1 (Outstanding)',
    resultStatus: 'PASSED WITH DISTINCTION',
    teacherRemarks: 'Exemplary academic focus, sharp analytical thinking in STEM, and commendable leadership in inter-house competitions.',
    principalRemark: 'A star scholar of Lakshaya International School. Heartiest congratulations to Aryan and proud parents!',
    issueDate: 'March 24, 2025'
  },
  {
    id: 'RES-2025-VIII04',
    rollNo: 'LIS2025-VIII04',
    studentName: 'Ananya Patel',
    admissionNo: 'LIS/ADM/2020/288',
    classGrade: 'Class 8',
    section: 'Section B',
    dob: '2011-11-20',
    academicYear: '2024-25',
    term: 'Annual Comprehensive Assessment',
    fatherName: 'Mr. Ketan Patel',
    motherName: 'Mrs. Hiral Patel',
    attendancePercent: 96.2,
    subjects: [
      { name: 'English Language & Literature', theoryMarks: 73, maxTheory: 80, practicalMarks: 19, maxPractical: 20, total: 92, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Mathematics & Applied Logic', theoryMarks: 72, maxTheory: 80, practicalMarks: 19, maxPractical: 20, total: 91, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Integrated General Science', theoryMarks: 75, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 95, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Social Studies & World Geography', theoryMarks: 70, maxTheory: 80, practicalMarks: 18, maxPractical: 20, total: 88, maxMarks: 100, grade: 'A2', gradePoint: 9.0 },
      { name: 'Gujarati / Sanskrit', theoryMarks: 71, maxTheory: 80, practicalMarks: 19, maxPractical: 20, total: 90, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Robotics & Environmental Science', theoryMarks: 48, maxTheory: 50, practicalMarks: 48, maxPractical: 50, total: 96, maxMarks: 100, grade: 'A1', gradePoint: 10.0 }
    ],
    totalMarksObtained: 552,
    maxTotalMarks: 600,
    percentage: 92.0,
    cgpa: 9.6,
    overallGrade: 'A1 (Distinction)',
    resultStatus: 'PASSED WITH DISTINCTION',
    teacherRemarks: 'Brilliant dedication in science projects and active contributor to Shilaj eco-farm observations. Keep up the high standard!',
    principalRemark: 'Well done Ananya! Promoted to Class 9 with honors.',
    issueDate: 'March 22, 2025'
  },
  {
    id: 'RES-2025-V12',
    rollNo: 'LIS2025-V12',
    studentName: 'Kabir Mehta',
    admissionNo: 'LIS/ADM/2022/419',
    classGrade: 'Class 5',
    section: 'Section A',
    dob: '2014-05-18',
    academicYear: '2024-25',
    term: 'Term 2 Cumulative Evaluation',
    fatherName: 'Mr. Alok Mehta',
    motherName: 'Mrs. Ritu Mehta',
    attendancePercent: 98.1,
    subjects: [
      { name: 'English & Creative Expression', theoryMarks: 70, maxTheory: 80, practicalMarks: 19, maxPractical: 20, total: 89, maxMarks: 100, grade: 'A2', gradePoint: 9.0 },
      { name: 'Mathematics & Mental Ability', theoryMarks: 76, maxTheory: 80, practicalMarks: 20, maxPractical: 20, total: 96, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Environmental Studies (EVS)', theoryMarks: 72, maxTheory: 80, practicalMarks: 19, maxPractical: 20, total: 91, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Hindi Bhasha & Vyakaran', theoryMarks: 69, maxTheory: 80, practicalMarks: 18, maxPractical: 20, total: 87, maxMarks: 100, grade: 'A2', gradePoint: 9.0 },
      { name: 'Computer Basics & Coding Scratch', theoryMarks: 47, maxTheory: 50, practicalMarks: 48, maxPractical: 50, total: 95, maxMarks: 100, grade: 'A1', gradePoint: 10.0 },
      { name: 'Visual Arts & Physical Education', theoryMarks: 45, maxTheory: 50, practicalMarks: 49, maxPractical: 50, total: 94, maxMarks: 100, grade: 'A1', gradePoint: 10.0 }
    ],
    totalMarksObtained: 552,
    maxTotalMarks: 600,
    percentage: 92.0,
    cgpa: 9.4,
    overallGrade: 'A1 (Excellent)',
    resultStatus: 'PROMOTED',
    teacherRemarks: 'Kabir is enthusiastic, quick in mental math, and a disciplined karate trainee in the dojo.',
    principalRemark: 'Wonderful progress Kabir! Promoted to Class 6.',
    issueDate: 'March 20, 2025'
  }
];

// Seed Notification Logs
const SEED_NOTIFICATION_LOGS: NotificationLog[] = [
  {
    id: 'NOTIF-001',
    timestamp: '2025-03-24 10:31 AM',
    recipient: '+91 98250 14829 (Rajesh Dave)',
    channel: 'whatsapp',
    template: 'admission_inquiry_received',
    status: 'Delivered',
    previewText: 'Namaste Rajesh Dave! We have received your admission inquiry for Vivaan Dave (Grade 5) at Lakshaya International School.'
  },
  {
    id: 'NOTIF-002',
    timestamp: '2025-03-24 10:31 AM',
    recipient: 'rajesh.dave@gmail.com',
    channel: 'email',
    template: 'admission_prospectus_pack',
    status: 'Delivered',
    previewText: 'Lakshaya International School - Prospectus 2025-26 & Admission Procedure Guide.'
  },
  {
    id: 'NOTIF-003',
    timestamp: '2025-03-20 09:15 AM',
    recipient: '+91 98791 88320 (Bhavin Patel)',
    channel: 'whatsapp',
    template: 'admission_approved_welcome',
    status: 'Delivered',
    previewText: 'Congratulations! Admission for Shaurya Patel in Grade 8 has been approved by Principal Neha Agrawal.'
  },
  {
    id: 'NOTIF-004',
    timestamp: '2025-03-13 02:05 PM',
    recipient: '+91 99090 11223 (Harsh Agrawal)',
    channel: 'whatsapp',
    template: 'alumni_verification_approved',
    status: 'Delivered',
    previewText: 'Welcome to the Lakshaya Alumni Network! Your alumni membership has been verified by the school.'
  },
  {
    id: 'NOTIF-005',
    timestamp: '2025-03-24 04:00 PM',
    recipient: '+91 98250 99182 (Manoj Sharma)',
    channel: 'whatsapp',
    template: 'result_published_alert',
    status: 'Delivered',
    previewText: 'Annual Examination Result for Aryan Sharma (Roll LIS2025-X01) is now available for download.'
  }
];

// Seed Notification Config
const DEFAULT_CONFIG: NotificationConfig = {
  whatsappEnabled: true,
  whatsappApiKey: 'lk_live_meta_98f4b238a09e2',
  whatsappPhoneId: '108492049182049',
  emailEnabled: true,
  smtpHost: 'smtp.lakshayaschool.com',
  smtpPort: 587,
  smtpUser: 'admissions@lakshayaschool.com',
  senderEmail: 'admissions@lakshayaschool.com',
  senderName: 'Lakshaya International School',
  notifyOnInquiry: true,
  notifyOnInquiryApproval: true,
  notifyOnAlumniApproval: true,
  notifyOnResultPublish: true
};

// Storage helper with fallback to seeds
function loadFromStorage<T>(key: string, seed: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`LocalStorage failed for ${key}, using memory seed:`, err);
    return seed;
  }
}

function saveToStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`Failed to save ${key} to localStorage:`, err);
  }
}

export const DataService = {
  // Inquiries
  getInquiries: (): StudentInquiry[] => {
    return loadFromStorage(STORAGE_KEYS.INQUIRIES, SEED_INQUIRIES);
  },

  createInquiry: async (inquiryData: Omit<StudentInquiry, 'id' | 'createdAt' | 'status' | 'whatsappNotified' | 'emailNotified'>): Promise<StudentInquiry> => {
    const inquiries = DataService.getInquiries();
    const newId = `INQ-2025-${String(inquiries.length + 1).padStart(3, '0')}`;
    const newInquiry: StudentInquiry = {
      ...inquiryData,
      id: newId,
      createdAt: new Date().toISOString(),
      status: 'new',
      whatsappNotified: true,
      emailNotified: true
    };

    inquiries.unshift(newInquiry);
    saveToStorage(STORAGE_KEYS.INQUIRIES, inquiries);

    // Auto-record notifications in dispatch log
    DataService.recordNotification({
      recipient: `${newInquiry.phone} (${newInquiry.parentName})`,
      channel: 'whatsapp',
      template: 'admission_inquiry_received',
      status: 'Delivered',
      previewText: `Namaste ${newInquiry.parentName}! Inquiry #${newId} for ${newInquiry.studentName} (${newInquiry.grade}) received at Lakshaya International School. Counselor will contact within 24 hrs.`
    });

    DataService.recordNotification({
      recipient: newInquiry.email,
      channel: 'email',
      template: 'admission_prospectus_pack',
      status: 'Delivered',
      previewText: `Official Lakshaya International School Information Brochure & Admission Kit for ${newInquiry.studentName}.`
    });

    // Also attempt backend call asynchronously
    try {
      fetch(`${BACKEND_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInquiry)
      }).catch(() => { /* silent fallback */ });
    } catch {
      // fallback
    }

    return newInquiry;
  },

  updateInquiryStatus: (id: string, status: StudentInquiry['status'], adminNotes?: string): StudentInquiry | null => {
    const inquiries = DataService.getInquiries();
    const idx = inquiries.findIndex(i => i.id === id);
    if (idx === -1) return null;

    inquiries[idx].status = status;
    if (adminNotes !== undefined) {
      inquiries[idx].adminNotes = adminNotes;
    }
    saveToStorage(STORAGE_KEYS.INQUIRIES, inquiries);

    // If approved, trigger notification
    if (status === 'approved') {
      const inq = inquiries[idx];
      DataService.recordNotification({
        recipient: `${inq.phone} (${inq.parentName})`,
        channel: 'whatsapp',
        template: 'admission_approved_welcome',
        status: 'Delivered',
        previewText: `Congratulations ${inq.parentName}! Admission for ${inq.studentName} in ${inq.grade} has been approved by Lakshaya School Administration.`
      });
    }

    return inquiries[idx];
  },

  // Alumni
  getAlumni: (): AlumniMember[] => {
    return loadFromStorage(STORAGE_KEYS.ALUMNI, SEED_ALUMNI);
  },

  registerAlumni: async (alumniData: Omit<AlumniMember, 'id' | 'status' | 'submittedAt'>): Promise<AlumniMember> => {
    const alumniList = DataService.getAlumni();
    const newId = `ALM-${new Date().getFullYear().toString().slice(-2)}${String(alumniList.length + 1).padStart(2, '0')}`;
    const newAlumni: AlumniMember = {
      ...alumniData,
      id: newId,
      status: 'pending', // Requires Admin approval as required!
      submittedAt: new Date().toISOString()
    };

    alumniList.unshift(newAlumni);
    saveToStorage(STORAGE_KEYS.ALUMNI, alumniList);

    // Dispatch pending acknowledgment
    DataService.recordNotification({
      recipient: `${newAlumni.phone} (${newAlumni.fullName})`,
      channel: 'whatsapp',
      template: 'alumni_registration_ack',
      status: 'Delivered',
      previewText: `Hello ${newAlumni.fullName}! Thank you for registering with the Lakshaya Alumni Network (Batch of ${newAlumni.batchYear}). The school will verify your details shortly.`
    });

    return newAlumni;
  },

  approveAlumni: (id: string): AlumniMember | null => {
    const alumniList = DataService.getAlumni();
    const idx = alumniList.findIndex(a => a.id === id);
    if (idx === -1) return null;

    alumniList[idx].status = 'verified';
    alumniList[idx].verifiedAt = new Date().toISOString();
    saveToStorage(STORAGE_KEYS.ALUMNI, alumniList);

    const al = alumniList[idx];
    DataService.recordNotification({
      recipient: `${al.phone} (${al.fullName})`,
      channel: 'whatsapp',
      template: 'alumni_verification_approved',
      status: 'Delivered',
      previewText: `Great news ${al.fullName}! Your Lakshaya alumni profile is now verified and listed in the alumni directory.`
    });

    return alumniList[idx];
  },

  rejectAlumni: (id: string): AlumniMember | null => {
    const alumniList = DataService.getAlumni();
    const idx = alumniList.findIndex(a => a.id === id);
    if (idx === -1) return null;

    alumniList[idx].status = 'rejected';
    saveToStorage(STORAGE_KEYS.ALUMNI, alumniList);
    return alumniList[idx];
  },

  // Alumni Events
  getAlumniEvents: (): AlumniEvent[] => {
    return loadFromStorage(STORAGE_KEYS.EVENTS, SEED_EVENTS);
  },

  createAlumniEvent: (event: Omit<AlumniEvent, 'id' | 'rsvps'>): AlumniEvent => {
    const events = DataService.getAlumniEvents();
    const created: AlumniEvent = { ...event, id: `EVT-${Date.now().toString(36).toUpperCase()}`, rsvps: [] };
    events.push(created);
    events.sort((x, y) => x.date.localeCompare(y.date));
    saveToStorage(STORAGE_KEYS.EVENTS, events);
    return created;
  },

  deleteAlumniEvent: (eventId: string): void => {
    saveToStorage(STORAGE_KEYS.EVENTS, DataService.getAlumniEvents().filter(e => e.id !== eventId));
  },

  /** Records an RSVP; returns false when this email has already responded. */
  rsvpEvent: (eventId: string, rsvp: Omit<AlumniRsvp, 'at'>): boolean => {
    const events = DataService.getAlumniEvents();
    const ev = events.find(e => e.id === eventId);
    if (!ev) return false;
    const email = rsvp.email.trim().toLowerCase();
    if (ev.rsvps.some(r => r.email === email)) return false;
    ev.rsvps.push({ ...rsvp, email, at: new Date().toISOString() });
    saveToStorage(STORAGE_KEYS.EVENTS, events);
    return true;
  },

  // Student Results
  getResults: (): StudentResult[] => {
    return loadFromStorage(STORAGE_KEYS.RESULTS, SEED_RESULTS);
  },

  findResultByRoll: (rollNo: string, dob?: string): StudentResult | null => {
    const results = DataService.getResults();
    const cleanRoll = rollNo.trim().toUpperCase();
    return results.find(r => {
      const matchRoll = r.rollNo.toUpperCase() === cleanRoll;
      if (!matchRoll) return false;
      if (dob && dob.trim()) {
        return r.dob === dob.trim();
      }
      return true;
    }) || null;
  },

  saveResult: (result: StudentResult): void => {
    const results = DataService.getResults();
    const idx = results.findIndex(r => r.rollNo.toUpperCase() === result.rollNo.toUpperCase());
    if (idx !== -1) {
      results[idx] = result;
    } else {
      results.unshift(result);
    }
    saveToStorage(STORAGE_KEYS.RESULTS, results);
  },

  // Notifications
  getNotificationLogs: (): NotificationLog[] => {
    return loadFromStorage(STORAGE_KEYS.NOTIFICATIONS, SEED_NOTIFICATION_LOGS);
  },

  recordNotification: (log: Omit<NotificationLog, 'id' | 'timestamp'>): NotificationLog => {
    const logs = DataService.getNotificationLogs();
    const newLog: NotificationLog = {
      ...log,
      id: `NOTIF-${String(logs.length + 1).padStart(3, '0')}`,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };
    logs.unshift(newLog);
    saveToStorage(STORAGE_KEYS.NOTIFICATIONS, logs);
    return newLog;
  },

  getConfig: (): NotificationConfig => {
    return loadFromStorage(STORAGE_KEYS.CONFIG, DEFAULT_CONFIG);
  },

  saveConfig: (config: NotificationConfig): void => {
    saveToStorage(STORAGE_KEYS.CONFIG, config);
  }
};
