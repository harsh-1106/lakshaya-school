export interface Announcement {
  id: string;
  title: string;
  category: string;
  date: string;
  badge?: string;
  summary: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export interface PentagonPillar {
  id: string;
  title: string;
  sanskritName: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  icon: string;
  highlights: string[];
}

export interface AcademicWing {
  id: string;
  name: string;
  grades: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  image: string;
  highlights: string[];
}

export interface CampusFacility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface LifeEvent {
  id: string;
  title: string;
  category: 'All' | 'Art & Creativity' | 'Experiential Learning' | 'Sports' | 'Celebrations' | 'Academic & Quiz';
  dateText: string;
  description: string;
  image: string;
  location: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  level: string;
  date: string;
  category: 'All' | 'Academic & Quiz' | 'Karate & Martial Arts' | 'Sports' | 'National' | 'Awards & Accreditation';
  result: string;
  detail: string;
  medalType: 'gold' | 'silver' | 'bronze' | 'certificate' | 'trophy';
}

export interface Testimonial {
  id: string;
  quote: string;
  parentName: string;
  studentGrade: string;
  awardOrRole?: string;
  rating: number;
}

export interface StudentInquiry {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  grade: string;
  academicYear: string;
  visitDate?: string;
  notes?: string;
  status: 'new' | 'contacted' | 'review' | 'approved' | 'rejected';
  createdAt: string;
  whatsappNotified: boolean;
  emailNotified: boolean;
  adminNotes?: string;
}

export type LakshayaHouse = 'Nehru' | 'Gandhi' | 'Bose' | 'Tagore';

/** A former student of Lakshaya International School (single-school alumni network). */
export interface AlumniMember {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  /** Year the student left Lakshaya. */
  batchYear: number;
  /** Last class studied at Lakshaya, e.g. "Grade 10". */
  lastClass: string;
  house: LakshayaHouse;
  currentRole: string;
  company: string;
  higherEducation: string;
  city: string;
  country: string;
  linkedIn?: string;
  willingToMentor: boolean;
  /** Show the email address in the public alumni directory. */
  shareContact: boolean;
  bio: string;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt: string;
  verifiedAt?: string;
}

export interface AlumniRsvp {
  name: string;
  email: string;
  batchYear: number;
  at: string;
}

/** An alumni event hosted by the school. */
export interface AlumniEvent {
  id: string;
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  time?: string;
  location: string;
  type: 'Reunion' | 'Homecoming' | 'Career Talk' | 'Mentorship' | 'Sports Meet';
  description: string;
  rsvps: AlumniRsvp[];
}

export interface SubjectScore {
  name: string;
  theoryMarks: number;
  maxTheory: number;
  practicalMarks: number;
  maxPractical: number;
  total: number;
  maxMarks: number;
  grade: string;
  gradePoint: number;
}

export interface StudentResult {
  id: string;
  rollNo: string;
  studentName: string;
  admissionNo: string;
  classGrade: string;
  section: string;
  dob: string; // YYYY-MM-DD
  academicYear: string;
  term: string;
  fatherName: string;
  motherName: string;
  attendancePercent: number;
  subjects: SubjectScore[];
  totalMarksObtained: number;
  maxTotalMarks: number;
  percentage: number;
  cgpa: number;
  overallGrade: string;
  resultStatus: 'PASSED WITH DISTINCTION' | 'FIRST DIVISION' | 'PROMOTED' | 'NEEDS IMPROVEMENT';
  teacherRemarks: string;
  principalRemark: string;
  issueDate: string;
}

export interface NotificationLog {
  id: string;
  timestamp: string;
  recipient: string;
  channel: 'whatsapp' | 'email';
  template: string;
  status: 'Delivered' | 'Sent' | 'Simulated' | 'Failed';
  previewText: string;
}

export interface NotificationConfig {
  whatsappEnabled: boolean;
  whatsappApiKey: string;
  whatsappPhoneId: string;
  emailEnabled: boolean;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  senderEmail: string;
  senderName: string;
  notifyOnInquiry: boolean;
  notifyOnInquiryApproval: boolean;
  notifyOnAlumniApproval: boolean;
  notifyOnResultPublish: boolean;
}

