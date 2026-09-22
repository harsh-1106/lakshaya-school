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
  category: 'All' | 'Art & Creativity' | 'Experiential Learning' | 'Sports' | 'Celebrations';
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
  category: 'All' | 'Academic & Quiz' | 'Karate & Martial Arts' | 'Sports' | 'National';
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
