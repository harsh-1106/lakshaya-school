import type { Announcement, StatItem, PentagonPillar, AcademicWing, CampusFacility, LifeEvent, AchievementItem, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: "Lakshaya International School",
  shortName: "Lakshaya",
  tagline: "Nurturing Global Minds, Grounded in Values",
  motto: "Knowledge is the Supreme Goal",
  sanskritMotto: "ज्ञानेन मुक्तिः — Knowledge is the Supreme Goal",
  meaningOfLakshaya: "The word 'Lakshaya' (लक्ष्य) in Sanskrit signifies the ultimate worthy aim or noble target. At our school, it symbolizes guiding each child toward their highest intellectual, moral, and creative destiny.",
  logoSymbolism: "The Lakshaya crest combines the sacred flame of enlightenment (ज्ञान दीप), the foundational open book of wisdom, and the rising sun of global readiness, bordered in royal blue and auspicious red.",
  established: "2015",
  boardAffiliation: "CBSE & International Progressive Pedagogy",
  location: "Ahmedabad, Gujarat, India",
  fullAddress: "Opp. Applewoods Township, Shantipura Cross Road, Sardar Patel Ring Road, Ahmedabad - 380058, Gujarat, India",
  phone: "+91 9712342222",
  email: "info@lakshayaschool.com",
  officeHours: "Monday – Saturday: 8:00 AM – 4:00 PM",
  studentTeacherRatio: "15:1",
  campusSafety: "100% Certified Earthquake-Resistant Structural Engineering",
  awardBadge: "Best Pre-Nursery & International School in Ahmedabad",
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    title: "Admissions Open for Academic Year 2025-26",
    category: "Admissions",
    date: "Active Now",
    badge: "Open Now",
    summary: "Registrations are open for Pre-Nursery through Grade XII. Book your personalized campus walkthrough today."
  },
  {
    id: "ann-2",
    title: "Discovery Channel Wild Wisdom State Finalists Celebrated",
    category: "Achievement",
    date: "Recent",
    badge: "National Honor",
    summary: "4 Lakshaya students advanced to the State Level Finals with 225+ students earning Discovery Channel certificates."
  },
  {
    id: "ann-3",
    title: "National Shito-Ryu Karate Championship: 22 Medals Haul",
    category: "Sports",
    date: "Recent",
    badge: "Sports Glory",
    summary: "Martial arts champions clinch 6 Gold, 7 Silver, and 9 Bronze medals at the All India Championship."
  },
  {
    id: "ann-4",
    title: "Experiential Agriculture & Ecology Trip to Shilaj Farm",
    category: "Student Life",
    date: "Upcoming",
    badge: "Field Trip",
    summary: "Hands-on biological exploration and organic farming immersion for primary & middle school wings."
  }
];

export const STATS: StatItem[] = [
  {
    value: "100%",
    label: "Holistic Development",
    subtext: "Balanced academic & character pedagogy",
    icon: "Target"
  },
  {
    value: "15:1",
    label: "Student-Teacher Ratio",
    subtext: "Personalized mentorship for every learner",
    icon: "Users"
  },
  {
    value: "250+",
    label: "Competition Laurels",
    subtext: "National, State & District level wins",
    icon: "Trophy"
  },
  {
    value: "100%",
    label: "Earthquake Resilient",
    subtext: "Certified safety-engineered smart campus",
    icon: "ShieldCheck"
  }
];

export const PENTAGON_PILLARS: PentagonPillar[] = [
  {
    id: "intellectual",
    title: "Intellectual Rigor",
    sanskritName: "धीः (Dhi - Intellect)",
    shortDesc: "Inquiry-based STEM and humanities fostering analytical depth over rote memorization.",
    fullDesc: "\"A well formed mind is better than just a well filled one.\" Our curriculum sharpens scientific enquiry, logical reasoning, and linguistic excellence through hands-on discovery and digital learning.",
    color: "#2563eb",
    icon: "Brain",
    highlights: ["Inquiry-Based Learning Modules", "Smart Sunlit Tech-Enabled Classrooms", "Math & Robotics Experimentation", "Language Mastery & SpellBee Labs"]
  },
  {
    id: "ethical",
    title: "Ethical Leadership",
    sanskritName: "धर्मः (Dharma - Integrity)",
    shortDesc: "Rooted in timeless Indian values, empathy, universal brotherhood, and civic responsibility.",
    fullDesc: "Instilling deep moral conviction, respect, compassion, and ethical decision-making to build global citizens who contribute constructively to modern society.",
    color: "#059669",
    icon: "Compass",
    highlights: ["Value Education & Moral Science", "Community Service Initiatives", "Environmental Stewardship", "Peer Mentorship Programs"]
  },
  {
    id: "creative",
    title: "Creative Expression",
    sanskritName: "कला (Kala - Aesthetic Arts)",
    shortDesc: "Unlocking artistic innovation through annual exhibitions, theater, music, and design.",
    fullDesc: "We support a kaleidoscope of extracurricular pursuits. Our Annual Art Exhibition and creative studios give children platforms to express original thoughts and visual artistry.",
    color: "#d97706",
    icon: "Palette",
    highlights: ["Annual Lakshaya Art Exhibition", "Visual Arts & Pottery Studio", "Music, Dance & Theatrical Drama", "Creative Writing & Oratory"]
  },
  {
    id: "physical",
    title: "Physical Prowess",
    sanskritName: "बलम् (Balam - Strength & Agility)",
    shortDesc: "Championship-grade athletic training in Karate, Skating, Cricket, Basketball, and Aerobics.",
    fullDesc: "Sports form the backbone of physical vitality and teamwork at Lakshaya. Our students consistently bring home Gold medals from Khel Mahakumbh, State and All-India Karate championships.",
    color: "#dc2626",
    icon: "Medal",
    highlights: ["Shito-Ryu Karate Dojo (State & National Winners)", "Dedicated Skating Rink", "Cricket & Football Fields", "Table Tennis, Chess & Aerobics Arena"]
  },
  {
    id: "environmental",
    title: "Eco-Consciousness",
    sanskritName: "प्रकृतिः (Prakriti - Harmony with Nature)",
    shortDesc: "Experiential learning at Shilaj Farm and green campus lifestyle nurturing environmental care.",
    fullDesc: "Education transcends 4 walls. Through regular experiential field trips to Shilaj Farm and campus botanical initiatives, students understand ecology, sustainability, and harmony with nature.",
    color: "#0d9488",
    icon: "Leaf",
    highlights: ["Shilaj Farm Ecological Immersion", "Campus Organic Garden & Solar Awareness", "Zero-Waste & Recycling Projects", "Field-Based Botanical Research"]
  }
];

export interface LegacyFocusItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  originalText: string;
  expandedDesc: string;
  image: string;
  category: string;
  badge: string;
}

export const LEGACY_FOCUS_ITEMS: LegacyFocusItem[] = [
  {
    id: "focus-1",
    number: "01",
    title: "Earthquake Resistance Campus",
    tagline: "Certified Structural Safety & Sunlit Classrooms",
    originalText: "Earthquake resistance building. Smart Classrooms that enjoy the benefit of sunlight and cross-ventilation.",
    expandedDesc: "Our campus architecture is rigorously certified to withstand seismic activity, ensuring your child's complete safety. Spacious, bright rooms eliminate eye strain and foster energetic learning.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    badge: "Safety Engineered"
  },
  {
    id: "focus-2",
    number: "02",
    title: "Curriculum Focus",
    tagline: "A Well-Formed Mind Over Just a Well-Filled One",
    originalText: "\"A well formed mind is better than just a well filled one.\" The program at Lakshaya is inquiry-based.",
    expandedDesc: "Rather than burdening young minds with rote learning, we prioritize analytical questioning, curiosity, conceptual clarity, and independent thinking.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    category: "Pedagogy",
    badge: "Inquiry Driven"
  },
  {
    id: "focus-3",
    number: "03",
    title: "Beyond Text Book",
    tagline: "Kaleidoscope of Extracurricular Pursuits",
    originalText: "Classroom teaching though important at Lakshaya, we support a kaleidoscope of extracurricular activities.",
    expandedDesc: "Artistic passions, public speaking, drama, scientific experimentation, and community care unlock students' diverse talents outside standard books.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    category: "Holistic",
    badge: "Kaleidoscope"
  },
  {
    id: "focus-4",
    number: "04",
    title: "Developmental Pentagon",
    tagline: "Holistic & Progressive Indian-Global Curriculum",
    originalText: "A Holistic and Progressive Curriculum that brings out the best from the Indian as well as international systems.",
    expandedDesc: "The 5-vertex synthesis of Intellectual, Ethical, Creative, Physical, and Environmental dimensions nurtures well-rounded future global citizens.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    category: "Core Model",
    badge: "Signature Framework"
  },
  {
    id: "focus-5",
    number: "05",
    title: "Field Trips (Shilaj Farm)",
    tagline: "Experiential Agriculture & Botany in Nature",
    originalText: "Lakshaya School has organized field trips to Shilaj Farm for hands-on nature discovery.",
    expandedDesc: "Students interact directly with farmers, observe crop life cycles, study organic soil nutrients, and discover the wonder of sustainable nature.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    category: "Outdoor",
    badge: "Nature Hub"
  },
  {
    id: "focus-6",
    number: "06",
    title: "Festivals & Celebrations",
    tagline: "Joyous Traditions & Famous X'mas Pajama Party",
    originalText: "X'mas celebration with PAJAMA party at LAKSHAYA INTERNATIONAL SCHOOL and vibrant Indian cultural fests.",
    expandedDesc: "Fostering camaraderie, joy, and cross-cultural appreciation through beloved traditions like our annual Christmas pajama fest, Diwali gala, and National Days.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80",
    category: "Culture",
    badge: "Festive Spirit"
  },
  {
    id: "focus-7",
    number: "07",
    title: "Annual Art Exhibition",
    tagline: "Canvas of Imagination at Lakshaya Campus",
    originalText: "ART Exhibition at Lakshaya Campus featuring hundreds of creative works by students.",
    expandedDesc: "Our campus atrium transforms into a vibrant gallery showcasing paintings, clay sculptures, ceramics, and mixed-media masterpieces created by young artists.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    category: "Creativity",
    badge: "Arts & Canvas"
  },
  {
    id: "focus-8",
    number: "08",
    title: "Sports & Martial Arts",
    tagline: "Home to National & State Karate Champions",
    originalText: "SPORTS :: Cricket - Athletics - Aerobics - Table Tennis - Chess - Basketball - Football - Carrom - Skating - Karate.",
    expandedDesc: "Under professional coaches, students master balance, defensive agility, stamina, and sportsmanship. Winners of 22 medals at All-India Karate championships.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    category: "Athletics",
    badge: "Championship"
  }
];

export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "early-years",
    name: "Early Years (Foundational)",
    grades: "Pre-Nursery, Nursery, Jr. & Sr. KG",
    tagline: "Awarded Best Pre-Nursery International School in Ahmedabad",
    description: "Nurturing curiosity, sensory development, social bonding, and foundational literacy in a cheerful, secure, sunlight-drenched atmosphere with play-way methodology.",
    focusAreas: ["Montessori-Inspired Playway", "Sensory & Motor Skill Mastery", "Phonics & Storytelling", "Socialization & Joyful Discovery"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    highlights: ["1:10 Child-Caregiver Ratio", "Safe Child-Proof Facilities", "Pajama Parties & Fun Festivals", "Nutritious Food Habits"]
  },
  {
    id: "primary-wing",
    name: "Primary Wing",
    grades: "Grade I to Grade V",
    tagline: "Building Strong Fundamentals & Exploratory Habits",
    description: "Bridging foundational play with structured conceptual understanding in mathematics, sciences, languages, and environmental studies through experiential learning.",
    focusAreas: ["Conceptual Math & Logic", "Experiential Science Discovery", "Bilingual Proficiency", "Arts & Physical Education"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    highlights: ["Smart Interactive Classrooms", "Discovery Channel Quiz Prep", "Field Trips to Shilaj Farm", "Karate & Skating Training"]
  },
  {
    id: "middle-wing",
    name: "Middle Wing",
    grades: "Grade VI to Grade VIII",
    tagline: "Critical Thinking, Scientific Enquiry & Leadership",
    description: "Encouraging independent research, analytical labs, debate, sports championships, and inter-school academic competitions like Discovery Wild Wisdom and SpellBee.",
    focusAreas: ["STEM & Advanced Labs", "Robotics & Computational Thinking", "Debating & Public Speaking", "Competitive Sports Training"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    highlights: ["Well-equipped Science & Computer Labs", "Khel Mahakumbh Preparation", "National SpellBee Training", "Creative Design Workshops"]
  },
  {
    id: "senior-secondary",
    name: "Senior Secondary Wing",
    grades: "Grade IX to Grade XII",
    tagline: "Academic Mastery, Career Counseling & Global Vision",
    description: "Preparing students for board examinations, entrance competitions, and university admissions worldwide with rigorous scholarship and ethical mentorship.",
    focusAreas: ["Holistic Curriculum Delivery", "Career Guidance & Counseling", "Board Exam Excellence", "National Level Tournaments"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    highlights: ["1-on-1 Academic Mentorship", "Career & College Pathway Seminars", "Leadership & Student Council", "Distinguished Alumni Network"]
  }
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: "earthquake-safe",
    title: "Earthquake-Resistant Campus",
    subtitle: "Built with Top Safety Engineering Standards",
    description: "Architecturally engineered with seismic resistance compliance to provide an uncompromisingly secure learning sanctuary for your precious children.",
    features: ["Seismic-Engineered Structural Safety", "Multiple Safe Evacuation Corridors", "Certified Safety Standards", "24/7 Monitored Secure Perimeter"],
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    badge: "Safety Certified"
  },
  {
    id: "smart-classes",
    title: "Sunlit Smart Classrooms",
    subtitle: "Natural Daylight & Cross-Ventilation",
    description: "Ergonomically designed classrooms flooded with healthy natural sunlight and cross-ventilation, integrated with digital interactive displays and modern teaching aids.",
    features: ["Maximized Natural Sunlight Architecture", "Fresh Cross-Ventilation Design", "Interactive Smart Boards", "Ergonomic Student Furniture"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    badge: "Eco-Design"
  },
  {
    id: "sports-complex",
    title: "Multi-Discipline Sports Arena",
    subtitle: "Karate Dojo, Skating, Cricket & Basketball",
    description: "Comprehensive athletic facilities training champions. Home to our award-winning Shito-Ryu Karate team, dedicated skating rink, cricket practice nets, and indoor games.",
    features: ["Official Shito-Ryu Karate Dojo", "Smooth Professional Skating Rink", "Cricket & Football Fields", "Table Tennis, Carrom & Chess Arena"],
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
    badge: "Champions Arena"
  },
  {
    id: "shilaj-farm",
    title: "Shilaj Farm Eco-Learning Hub",
    subtitle: "Experiential Botany & Rural Ecology",
    description: "Our dedicated outdoor nature farm at Shilaj gives children regular access to real-world organic farming, flora and fauna observation, and hands-on environmental science.",
    features: ["Hands-on Organic Farming", "Ecology & Soil Science Study", "Nature Trails & Bird Watching", "Outdoor Adventure Teamwork"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    badge: "Hands-on Learning"
  },
  {
    id: "knowledge-center",
    title: "Resourceful Central Library",
    subtitle: "A Well-Stocked Haven for Curious Minds",
    description: "Extensive repository of age-appropriate literature, encyclopedias, international periodicals, and digital knowledge resources igniting lifelong reading passion.",
    features: ["Thousands of Curated Books", "Quiet Reading Sanctuaries", "Digital Learning Terminals", "Storytelling & Reading Clubs"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    badge: "Knowledge Oasis"
  },
  {
    id: "science-labs",
    title: "Discovery Science & Tech Labs",
    subtitle: "Empirical Learning & Computer Science",
    description: "Modern physics, chemistry, biology and computer workstations equipped for hands-on experimentation, coding, and problem solving under expert faculty supervision.",
    features: ["State-of-the-Art Experiment Kits", "Modern Computer & Coding Lab", "Stringent Safety Protocols", "Interactive Demonstration Stations"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    badge: "Innovation Hub"
  }
];

export const STUDENT_LIFE_EVENTS: LifeEvent[] = [
  {
    id: "art-exhibition",
    title: "Annual Lakshaya Art Exhibition",
    category: "Art & Creativity",
    dateText: "Annual Campus Showcase",
    description: "Students from Kindergarten to Senior grades display hundreds of original paintings, clay sculptures, installations, and crafts for parents and art critics.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    location: "Lakshaya Campus Atrium"
  },
  {
    id: "shilaj-trip",
    title: "Field Trip to Shilaj Eco Farm",
    category: "Experiential Learning",
    dateText: "Term 1 & Term 2 Excursion",
    description: "Students learn soil aeration, organic sowing, crop cycles, and ecosystem balance firsthand from agricultural specialists at Shilaj Farm.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    location: "Shilaj Farm, Ahmedabad"
  },
  {
    id: "karate-championship",
    title: "All-India Shito-Ryu Karate Championship",
    category: "Sports",
    dateText: "State & National Events",
    description: "Lakshaya martial arts contingent wins 22 medals (6 Gold, 7 Silver, 9 Bronze), proving agility, discipline, and defensive mastery.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    location: "Ahmedabad Sports Complex"
  },
  {
    id: "pajama-party",
    title: "X'mas Pajama Party & Cultural Fest",
    category: "Celebrations",
    dateText: "December Festivities",
    description: "A joyful annual celebration with cozy winter pajama themes, carols, gift sharing, puppet theater, and creative bonding for young learners.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80",
    location: "Lakshaya Auditorium"
  },
  {
    id: "wild-wisdom",
    title: "Discovery Wild Wisdom Quiz State Round",
    category: "Experiential Learning",
    dateText: "National Environment Quiz",
    description: "4 Lakshaya students advanced to the prestigious State Level with 225 peers earning official Discovery Channel certificates of environmental merit.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    location: "State Academic Hall"
  },
  {
    id: "skating-championship",
    title: "Inter-School Skating Tournament",
    category: "Sports",
    dateText: "District Championship",
    description: "Speed and balance on wheels! Lakshaya speed skaters bag 1 Silver and 2 Bronze medals in fierce inter-school competition.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    location: "District Rink"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Discovery Channel Wild Wisdom Quiz",
    level: "State & National Level",
    date: "Official Discovery Competition",
    category: "Academic & Quiz",
    result: "4 State Level Finalists & 225 Certified",
    detail: "4 children reached State Finals; 225 children awarded Certificates of Honor by Discovery Channel.",
    medalType: "trophy"
  },
  {
    id: "ach-2",
    title: "2nd All India Level Shito-Ryu Karate Championship",
    level: "All India Level",
    date: "National Tournament",
    category: "Karate & Martial Arts",
    result: "6 Gold, 7 Silver, 9 Bronze Medals",
    detail: "Remarkable medal tally with 6 Gold, 7 Silver, 9 Bronze medals and 4 Certificates of Distinction.",
    medalType: "gold"
  },
  {
    id: "ach-3",
    title: "Khel Maha Kumbh Karate Championship",
    level: "District Level",
    date: "Gujarat State Initiative",
    category: "Karate & Martial Arts",
    result: "1 Gold Medal Winner",
    detail: "Gold medal distinction at Gujarat's highest recognized district-level sporting extravaganza.",
    medalType: "gold"
  },
  {
    id: "ach-4",
    title: "Ahmedabad District Shito-Ryu Karate Championship",
    level: "District Level",
    date: "District Tournament",
    category: "Karate & Martial Arts",
    result: "4 Gold, 7 Silver, 13 Bronze Medals",
    detail: "30 students won podium honors including 4 Gold, 7 Silver, 13 Bronze, and 6 Merit Certificates.",
    medalType: "silver"
  },
  {
    id: "ach-5",
    title: "State Level Shito-Ryu Karate Championship",
    level: "Gujarat State Level",
    date: "State Championship",
    category: "Karate & Martial Arts",
    result: "5 Gold, 2 Silver, 10 Bronze Medals",
    detail: "5 Gold, 2 Silver, and 10 Bronze medalists honoring Lakshaya across Gujarat.",
    medalType: "gold"
  },
  {
    id: "ach-6",
    title: "SpellBee International / National Level",
    level: "National Level",
    date: "National English Championship",
    category: "Academic & Quiz",
    result: "51 Students Won National Certificates",
    detail: "Exceptional vocabulary and linguistic proficiency demonstrated by 51 certified winners.",
    medalType: "certificate"
  },
  {
    id: "ach-7",
    title: "Inter-School Skating Competition",
    level: "Inter-School Level",
    date: "Ahmedabad Championship",
    category: "Sports",
    result: "1 Silver & 2 Bronze Medals",
    detail: "Speed, agility, and sportsmanship on display at the prestigious Inter-School Skating meet.",
    medalType: "bronze"
  },
  {
    id: "ach-8",
    title: "District Golf Tournament",
    level: "District Level",
    date: "District Golf Cup",
    category: "Sports",
    result: "1 Trophy & Certificate Winner",
    detail: "Excellence in precision golf championship, bagging top honors and trophy.",
    medalType: "trophy"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Lakshaya has transformed my daughter's confidence. The balance between academic discipline and activities like Karate, Art, and Shilaj Farm visits is rare to find. Teachers truly know every single child.",
    parentName: "Pooja & Rajesh Mehta",
    studentGrade: "Parents of Ananya (Grade 4)",
    awardOrRole: "Parent Association Member",
    rating: 5
  },
  {
    id: "test-2",
    quote: "The earthquake-safe campus with sunlit, well-ventilated classrooms gave us tremendous peace of mind. Principal Neha Agrawal and her faculty bring warmth, ethics, and world-class vision.",
    parentName: "Dr. Kirit & Smita Patel",
    studentGrade: "Parents of Aarav (Pre-School Wing)",
    awardOrRole: "Medical Practitioners, Ahmedabad",
    rating: 5
  },
  {
    id: "test-3",
    quote: "Winning medals at the All India Karate championship while excelling in the Discovery Wild Wisdom quiz proved to us that Lakshaya's 'Developmental Pentagon' is not just words, but a living reality.",
    parentName: "Vikram & Shilpa Shah",
    studentGrade: "Parents of Dhruv (Grade 7)",
    awardOrRole: "Entrepreneur, Ahmedabad",
    rating: 5
  }
];

export const INSTITUTIONAL_AWARDS = [
  {
    title: "Best Pre-Nursery International School",
    location: "Ahmedabad, Gujarat",
    organization: "Education Excellence Recognition",
    year: "Honored",
    badge: "Ranked #1"
  },
  {
    title: "27th ECI Award for Excellence in Education",
    location: "Best Pre-School Principal",
    recipient: "Ms. Neha Agrawal",
    organization: "Educational Community of India",
    year: "Awardee"
  },
  {
    title: "27th ECI Award for Best Pre-School",
    location: "Lakshaya Preschool, Ahmedabad",
    organization: "ECI National Education Jury",
    year: "Gold Standard"
  }
];
