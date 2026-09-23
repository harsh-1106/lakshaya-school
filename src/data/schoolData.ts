import type { Announcement, StatItem, PentagonPillar, AcademicWing, CampusFacility, LifeEvent, AchievementItem, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: "Lakshaya International School",
  shortName: "Lakshaya",
  affiliationText: "New Age Co-Educational School • Pre-Nursery to Senior Secondary",
  tagline: "Nurturing Global Minds, Grounded in Timeless Values",
  motto: "Knowledge is the supreme goal",
  mottoHindi: "ज्ञानेन मुक्तिः",
  behindTheName: "Behind the name : AIM HIGH",
  mottoExplanation: "The School’s motto is a Sanskrit phrase meaning “Knowledge is the Supreme Goal.” The motto signifies the school’s quest to be an institution where knowledge is revered. Knowledge Empowers, Liberates and Awakes us. Knowledge forms the basis for all imagination, realization and action that helps us to progress and move forward. Both the teachers and students at Lakshaya will strive continuously to acquire new knowledge and expand their horizons and internalize the zeal for life-long learning.",
  
  vision: "To offer an exceptional educational environment that is conducive to development of compassionate, ethical global citizens, ready and well armed to achieve their fullest in education, work and life.",
  
  mission: "To prepare students for a dynamic, fast changing, tech-savy world. To give them the necessary pedagogy, and instill in them a passion for lifelong learning and a spirit of enquiry that sharpens their practical senses and intellectual prowess.",
  
  coreCredo: "\"A well formed mind is better than just a well filled one\"",
  childFirstCredo: "PUTTING CHILDREN FIRST and we will give our children the best.",
  
  meaningOfLakshaya: "“Lakshaya” is originally a Sanskrit word meaning ‘aim’ or ‘objective’. The origin of Lakshaya International School lies in the guiding aim of the founders to become an active partner in providing the highest quality of education to our young and future generations and positively impacting our children, society and community. At Lakshaya we envision that the passion for aiming high should also be integral to each one of our students. Each one of our students should have ever-expanding goals for personal and social development and strive to reach and exceed them.",
  
  logoPhilosophy: "Our logo epitomizes our aim to provide a nurturing environment for our children to enable them to reach their full potential. At Lakshaya we assure that the understandings of the heart are addressed as well as the understandings of the head. The school provides the right platform for the child to scale the heights of success. The bright and happy colours of our logo are a powerful, distinguishing feature of our identity. Red is a strong dynamic colour which represents our energy, activity and strength. Blue is the cool calming color of creativity, intelligence and wisdom. These vibrant and lustrous colours represent how we help our children to paint their future bright.",
  
  founderAndGroup: {
    groupName: "Agrawal Group of Companies",
    lineageYears: "35 Years Lineage",
    initiatives: [
      "Real Estate Development in Ahmedabad",
      "Entertainment: City Gold Multiplexes",
      "Health Care: Medilink Hospital (Satellite, Ahmedabad)",
      "Philanthropy: Trusteeship of Rajasthan Hospital",
      "Education: Maharaja Agrasen Vidhyalaya & Lakshaya International School"
    ],
    campusSize: "Spread over 2 acres of land",
    overview: "Lakshaya International School is new age co-educational school, an Educational initiative of 'Agrawal Group of Companies' engaged in Real Estate, Entertainment (City Gold Multiplexes), Health Care (Medilink Hospital). The group has a rich lineage of 35 years and has evolved in cultural and social responsibilities as a trustee of Rajasthan Hospital and Maharaja Agrasen Vidhyalaya and 'Lakshaya' is the major thrust area through which it aims at making a positive and real contribution to the society. Spread over 2 acres of land the school has etched a name for itself not only as an abode of learning but as a center of wisdom."
  },

  welcomeAddress: {
    title: "Welcome Address by Leadership",
    principalName: "Ms. Neha Agrawal",
    principalAward: "Awarded Best Pre-School Principal (27th ECI Awards for Excellence In Education)",
    content: "Thank you for considering Lakshaya International School for your child’s education. I understand how important this decision is for you as a parent when you look for the best way to open new doors and windows to your child’s world. Lakshaya promises to provide the best education experience with an emphasis on stimulating the all-round development of the children in a fun, loving and active learning environment. At Lakshaya our caring teachers will nurture and support the children’s natural love for learning at their own pace and inspire them to play, discover, learn and understand with wonder and confidence. At Lakshaya, each child will feel safe, secure, respected and loved in a “home away from home” environment. In such an environment children become confident, creative, calm, purposeful, independent and above all HAPPY. We want our children to love to come to school. We invite you to visit our school. Our team of dedicated and friendly staff will help you every step of the way and they will be able to answer any concerns or questions you may have. We look forward to welcoming you at our school and sharing our passion for giving our precious children the best education in their ‘golden age’ of learning."
  },

  ourBeliefs: [
    {
      title: "Every child is born potentially gifted",
      description: "Every child is gifted and possesses inherent potential of different types. With scientific nurturing in a caring child-centric environment we will help our children unwrap their natural gifts, discover and embrace their potentials and enhance their whole personality."
    },
    {
      title: "Each child is a unique individual",
      description: "Each child is unique with his/her method of learning and they learn at individual paces. We believe in providing a positive developmentally-appropriate curriculum with a variety of learning styles, making children in the process competent, confident and self-sufficient individuals."
    },
    {
      title: "Fostering curiosity makes the child an eager and active learner",
      description: "The child’s natural curiosity and sense of wonder is the building block for learning and the development of high-order thinking skills. We will create an atmosphere that sparks curiosity and encourages children to explore, discover, create, and question."
    },
    {
      title: "Children learn best when they are happy",
      description: "The best Preschool experience comes from providing a happy learning environment. We will make learning fun and enjoyable for the child so that the child enjoys the process of learning and develops a love for learning."
    },
    {
      title: "PUTTING CHILDREN FIRST",
      description: "We believe unconditionally in putting children first, and we will give our children the best in care, safety, and foundational values."
    }
  ],

  location: "Ahmedabad, Gujarat, India",
  fullAddress: "Opp. Applewoods Township, Shantipura Cross Road, Sardar Patel Ring Road, Ahmedabad - 380058, Gujarat, India",
  phone: "+91 9712342222",
  email: "info@lakshayaschool.com",
  officeHours: "Monday – Saturday: 8:00 AM – 4:00 PM",
  studentTeacherRatio: "15:1",
  campusSafety: "Certified Earthquake-Resistant Building with Sunlit Cross-Ventilated Classrooms",
  awardBadge: "Awarded Best Pre-Nursery International School Ahmedabad & 27th ECI National Education Award",
};

// 100% Authentic news & announcements directly from lakshayaschool.com
export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    title: "Admissions Open for Academic Year 2025-26",
    category: "Admissions",
    date: "Session 2025-26",
    badge: "Active Now",
    summary: "Registrations open for Pre-Nursery through Senior Secondary. 2-Acre Earthquake-Resistant Campus on S.P. Ring Road."
  },
  {
    id: "ann-2",
    title: "Wild Wisdom Quiz State Level Competition: Discovery Channel Honors",
    category: "Academic",
    date: "01-10-2019",
    badge: "State Finalists",
    summary: "4 Children's Reached State Level Certificate and 225+ Children's Won Certificates by Discovery Channel."
  },
  {
    id: "ann-3",
    title: "2nd All India Level Shito-Ryu Karate Championship: 22 Medals Haul",
    category: "Sports",
    date: "25-08-2019",
    badge: "National Laurels",
    summary: "6 Children's Won Gold Medal, 7 Children's Won Silver Medal, 9 Children's Won Bronze Medal, 4 Children's Won Certificate."
  },
  {
    id: "ann-4",
    title: "SpellBee National Level Competition: 51 Certificates",
    category: "Academic",
    date: "24-03-2019",
    badge: "National Honor",
    summary: "51 Lakshaya Children's Won Certificate in the prestigious National Level SpellBee Competition."
  },
  {
    id: "ann-5",
    title: "Khel Maha Kumbh Karate District Level: Gold Medal",
    category: "Sports",
    date: "13-09-2019",
    badge: "Gold Medal",
    summary: "Lakshaya student clinched the Gold Medal at District Level Khel Maha Kumbh."
  },
  {
    id: "ann-6",
    title: "27th ECI Awards for Excellence In Education",
    category: "Awards",
    date: "04-09-2015",
    badge: "National Award",
    summary: "Best Pre School Principal Ms. Neha Agrawal & Best Pre School Lakshaya Preschool Ahmedabad."
  },
  {
    id: "ann-7",
    title: "Field Trip to Shilaj Farm Organised",
    category: "Field Trip",
    date: "Annual Tradition",
    badge: "Eco Learning",
    summary: "Hands-on agriculture, botany, and nature immersion trip for student development."
  }
];

// Stats matching real facts from lakshayaschool.com
export const STATS: StatItem[] = [
  {
    value: "2 Acres",
    label: "Lush Campus Area",
    subtext: "Opp. Applewoods Township, S.P. Ring Road",
    icon: "Target"
  },
  {
    value: "15:1",
    label: "Student-Teacher Ratio",
    subtext: "Personalized mentorship and care",
    icon: "Users"
  },
  {
    value: "250+",
    label: "Competition Honors",
    subtext: "Discovery Quiz, Karate, SpellBee, Skating",
    icon: "Trophy"
  },
  {
    value: "100%",
    label: "Earthquake Resilient",
    subtext: "Certified seismic-engineered architecture",
    icon: "ShieldCheck"
  }
];

// The 5 Dimensions of the Developmental Pentagon (Authentic Pedagogy)
export const PENTAGON_PILLARS: PentagonPillar[] = [
  {
    id: "intellectual",
    title: "Intellectual Rigor",
    sanskritName: "धीः (Dhi - Intellect)",
    shortDesc: "Inquiry-based STEM and humanities fostering analytical depth over rote memorization.",
    fullDesc: "\"A well formed mind is better than just a well filled one.\" The program at Lakshaya is inquiry-based and child-centric, sharpening practical senses and intellectual prowess through experiential modules.",
    color: "#2563eb",
    icon: "Brain",
    highlights: ["Inquiry-Based Learning Modules", "Smart Sunlit Tech-Enabled Classrooms", "Discovery Science & Robotics Labs", "Language Mastery & National SpellBee"]
  },
  {
    id: "ethical",
    title: "Ethical Leadership",
    sanskritName: "धर्मः (Dharma - Integrity)",
    shortDesc: "Rooted in timeless Indian values, empathy, universal brotherhood, and civic responsibility.",
    fullDesc: "Instilling deep moral conviction, respect, compassion, and ethical decision-making to build global citizens who contribute constructively to modern society.",
    color: "#059669",
    icon: "Compass",
    highlights: ["Value Education & Moral Science", "Universal Brotherhood & Empathy", "House & Club Civic Projects", "Character & Leadership Building"]
  },
  {
    id: "creative",
    title: "Creative Expression",
    sanskritName: "कला (Kala - Aesthetic Arts)",
    shortDesc: "Unlocking artistic innovation through annual exhibitions, theater, music, and design.",
    fullDesc: "We support a kaleidoscope of extracurricular pursuits. Our Annual Art Exhibition and creative studios give children platforms to express original thoughts and visual artistry.",
    color: "#d97706",
    icon: "Palette",
    highlights: ["Annual Lakshaya Art Exhibition", "Visual Arts & Pottery Studio", "Festive Celebrations with Pajama Parties", "Creative Writing & Oratory"]
  },
  {
    id: "physical",
    title: "Physical Prowess",
    sanskritName: "बलम् (Balam - Strength & Agility)",
    shortDesc: "Championship-grade athletic training in Karate, Skating, Cricket, Basketball, and Aerobics.",
    fullDesc: "SPORTS :: Cricket - Athletics - Aerobics - Table Tennis - Chess - Basketball - Football - Carrom - Skating - Karate. Our students consistently bring home Gold medals from Khel Mahakumbh, State and All-India Karate championships.",
    color: "#dc2626",
    icon: "Medal",
    highlights: ["Shito-Ryu Karate Dojo (All-India Winners)", "Dedicated Skating Championship Rink", "Cricket & Football Fields", "Chess, Table Tennis & Aerobics Arena"]
  },
  {
    id: "environmental",
    title: "Eco-Consciousness",
    sanskritName: "प्रकृतिः (Prakriti - Harmony with Nature)",
    shortDesc: "Experiential learning at Shilaj Farm and green campus lifestyle nurturing environmental care.",
    fullDesc: "Education transcends 4 walls. Through regular experiential field trips to Shilaj Farm and campus botanical initiatives, students understand ecology, sustainability, and harmony with nature.",
    color: "#0d9488",
    icon: "Leaf",
    highlights: ["Shilaj Farm Ecological Excursions", "Campus Organic Green Lifestyle", "Sunlit Classrooms with Cross-Ventilation", "Field-Based Botanical Research"]
  }
];

// The 8 Core Focus Areas directly from lakshayaschool.com "Focus On"
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
    originalText: ":: Earthquake resistance building. Smart Classrooms, that enjoy the benefit of sunlight and cross-ventilation.",
    expandedDesc: "Spread over 2 acres on Sardar Patel Ring Road, Ahmedabad, our campus architecture is certified to withstand seismic activity, ensuring complete safety. Smart classrooms enjoy abundant natural daylight and natural cross-ventilation.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure",
    badge: "Seismic Certified"
  },
  {
    id: "focus-2",
    number: "02",
    title: "Curriculum Focus",
    tagline: "\"A well formed mind is better than just a well filled one\"",
    originalText: "\"A well formed mind is better than just a well filled one\". :: The program at \"Lakshaya\" is inquiry-based and child-centric.",
    expandedDesc: "We emphasize high-order thinking skills, discovery, and questioning over rote memorization. The researched curriculum blends the best of Indian heritage with progressive global educational benchmarks.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    category: "Academic",
    badge: "Inquiry Pedagogy"
  },
  {
    id: "focus-3",
    number: "03",
    title: "Beyond Text Book",
    tagline: "A Kaleidoscope of Extracurricular Pursuits",
    originalText: "Classroom teaching though important at \"Lakshaya\" - We support a kaleidoscope of extracurricular activities.",
    expandedDesc: "From music and pottery to debate, chess, and robotics, we ensure children discover their multi-faceted creative abilities alongside standard textbook subjects.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    category: "Activities",
    badge: "Holistic Arts"
  },
  {
    id: "focus-4",
    number: "04",
    title: "Developmental Pentagon",
    tagline: "Indian Heritage Meets International Excellence",
    originalText: ":: A Holistic and Progressive Curriculum, that brings out the best from the Indian as well as the International standards.",
    expandedDesc: "The signature Developmental Pentagon coordinates Cognitive, Social, Emotional, Physical, and Ethical dimensions to develop confident, calm, purposeful, and happy students.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    category: "Pedagogy",
    badge: "Signature Model"
  },
  {
    id: "focus-5",
    number: "05",
    title: "Field Trips (Shilaj Farm)",
    tagline: "Hands-on Agricultural & Ecological Immersion",
    originalText: "Lakshaya School has organised field trip to Shilaj Farm for experiential learning.",
    expandedDesc: "Regular excursions to Shilaj Farm allow children to touch the soil, observe organic crops, understand bio-diversity, and bond with nature in an open ecological setting.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    category: "Experiential",
    badge: "Shilaj Farm"
  },
  {
    id: "focus-6",
    number: "06",
    title: "Festivals & Celebrations",
    tagline: "Joyous Cross-Cultural Celebrations",
    originalText: "X'mas celebration with PAJAMA party at LAKSHAYA INTERNATIONAL SCHOOL...",
    expandedDesc: "Our celebrated annual traditions—including our famous X'mas Pajama Party, Diwali galas, Navratri garba, and cultural days—bring warmth, joyful bonding, and school spirit.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80",
    category: "Culture",
    badge: "Festive Joy"
  },
  {
    id: "focus-7",
    number: "07",
    title: "Art Exhibition",
    tagline: "Annual Showcase of Student Creativity",
    originalText: "ART Exhibition 2015 at Lakshaya Campus showcasing paintings, installations, and pottery.",
    expandedDesc: "A dedicated annual showcase where students display canvas paintings, paper crafts, clay sculptures, and innovative mixed-media art installations before parents and art educators.",
    image: "https://images.unsplash.com/photo-1460518451282-474b1500244a?auto=format&fit=crop&w=800&q=80",
    category: "Arts",
    badge: "Annual Exhibit"
  },
  {
    id: "focus-8",
    number: "08",
    title: "Sports / Activities",
    tagline: "Cricket, Karate, Skating, Aerobics, Table Tennis & More",
    originalText: "SPORTS :: Cricket - Athletics - Aerobics - Table Tennis - Chess - Basketball - Football - Carrom - Skating - Karate.",
    expandedDesc: "Comprehensive athletic curriculum with full facilities for martial arts, skating rink, indoor arenas for chess and table tennis, and outdoor grounds for cricket and football.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    category: "Athletics",
    badge: "Championship Sports"
  }
];

// Complete 100% authentic achievements list from lakshayaschool.com
export const ALL_AUTHENTIC_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    date: "01-10-2019",
    title: "WILD WISDOM QUIZ STATE LEVEL COMPETITION 2019",
    category: "Academic & Quiz",
    level: "State Level",
    result: "4 Children's Reached State Level Certificate by Discovery Channel",
    detail: "Prestigious nationwide wildlife and biodiversity quiz organized by Discovery Channel and WWF.",
    medalType: "trophy"
  },
  {
    id: "ach-2",
    date: "25-09-2019",
    title: "WILD WISDOM QUIZ COMPETITION 2019",
    category: "Academic & Quiz",
    level: "Inter-School Level",
    result: "225 Children's Won Certificate by Discovery Channel",
    detail: "Over two hundred Lakshaya pupils earned nationwide honors for environmental intelligence.",
    medalType: "gold"
  },
  {
    id: "ach-3",
    date: "13-09-2019",
    title: "KHEL MAHA KUMBH 2019 (KARATE DISTRICT LEVEL)",
    category: "Karate & Martial Arts",
    level: "District Level",
    result: "1 Children Won Gold Medal",
    detail: "Official Gujarat State sports festival championship.",
    medalType: "gold"
  },
  {
    id: "ach-4",
    date: "25-08-2019",
    title: "2ND ALL INDIA LEVEL SHITO-RYU KARATE CHAMPIONSHIP",
    category: "Karate & Martial Arts",
    level: "National Level",
    result: "6 Gold, 7 Silver, 9 Bronze Medals & 4 Certificates",
    detail: "Outstanding team haul across kata and kumite martial arts categories.",
    medalType: "gold"
  },
  {
    id: "ach-5",
    date: "21-07-2019",
    title: "GOLF COMPETITION 2019",
    category: "Sports",
    level: "State Level",
    result: "1 Children Won Trophy & Certificate",
    detail: "Precision sports achievement recognized with winner's trophy.",
    medalType: "trophy"
  },
  {
    id: "ach-6",
    date: "28-04-2019",
    title: "A'BAD DISTRICT LEVEL SHITO-RYU KARATE CHAMPIONSHIP",
    category: "Karate & Martial Arts",
    level: "District Level",
    result: "4 Gold, 7 Silver, 13 Bronze Medals & 6 Certificates",
    detail: "Dominant martial arts showcase across junior and senior divisions in Ahmedabad.",
    medalType: "silver"
  },
  {
    id: "ach-7",
    date: "28-04-2019",
    title: "STATE LEVEL SHITO-RYU KARATE CHAMPIONSHIP 2019",
    category: "Karate & Martial Arts",
    level: "State Level",
    result: "5 Gold, 2 Silver, 10 Bronze Medals & 2 Certificates",
    detail: "Gujarat state championship honors awarded to Lakshaya athletes.",
    medalType: "gold"
  },
  {
    id: "ach-8",
    date: "24-03-2019",
    title: "SPELLBEE NATIONAL LEVEL COMPETITION 2019",
    category: "Academic & Quiz",
    level: "National Level",
    result: "51 Children's Won Certificate",
    detail: "Demonstrating superior vocabulary, spelling, and English linguistic proficiency.",
    medalType: "gold"
  },
  {
    id: "ach-9",
    date: "28-02-2016",
    title: "LAKSHAYA WINS - INTER SCHOOL SKATING COMPETITION",
    category: "Sports",
    level: "Inter-School Level",
    result: "1 Silver and 2 Bronze Medals",
    detail: "Speed and agility laurels won on the competitive skating rink.",
    medalType: "silver"
  },
  {
    id: "ach-10",
    date: "21-02-2016",
    title: "LAKSHAYA WINS - KARATE DISTRICT LEVEL COMPETITION",
    category: "Karate & Martial Arts",
    level: "District Level",
    result: "4 Gold, 2 Silver and 2 Bronze Medals",
    detail: "Continuous district martial arts dominance.",
    medalType: "gold"
  },
  {
    id: "ach-11",
    date: "04-09-2015",
    title: "27th ECI Awards – For Excellence In Education",
    category: "Awards & Accreditation",
    level: "National Level",
    result: "Best Pre School Principal: Ms. Neha Agrawal",
    detail: "Prestigious national recognition for pedagogical innovation and child-centric leadership.",
    medalType: "trophy"
  },
  {
    id: "ach-12",
    date: "04-09-2015",
    title: "27th ECI Awards – For Excellence In Education",
    category: "Awards & Accreditation",
    level: "National Level",
    result: "Best Pre School: Lakshaya Preschool, Ahmedabad",
    detail: "Honored among India's top early childhood and foundational educational institutions.",
    medalType: "trophy"
  }
];

// Institutional Policies from lakshayaschool.com
export const SCHOOL_POLICIES = {
  generalPolicy: {
    title: "General Policy & Attendance Rules",
    rules: [
      "The school gate will close 10 minutes after the first bell rings.",
      "Late arrivals to school will not be appreciated. In case of three late comings to the school, the child will be asked to return home.",
      "In case of missing the school bus/van, parents are requested to drop the child to the school on their own.",
      "Students who have missed school for medical reasons should bring a medical certificate from their doctor on rejoining.",
      "Parents should fill up the 'Record for Non-Attendance' for each day the student is absent from school stating the reasons.",
      "No one who has been absent on the previous day will be admitted to class without a letter from the parent addressed to the class teacher.",
      "In case of absence, prior permission from the Principal has to be obtained.",
      "A student returning to school after suffering from a contagious disease should produce a doctor's certificate permitting attendance.",
      "Repeated absence without leave or unexplained absence for more than three months renders the student liable to have his/her name struck off the rolls.",
      "It is compulsory for students to maintain 80% attendance during the academic session to appear for final examinations. A special certificate will be given to students with 100% attendance."
    ]
  },
  libraryServices: {
    title: "School Library Services & Rules",
    services: [
      "The School Library has a large collection of books, audio-video materials, multimedia CDs, maps, charts, magazines, and newspapers.",
      "The Library follows the Open Access System.",
      "Students are advised to take good care of Library books (Library Orientation Programs are organized annually).",
      "Students can avail Library Services on all working days."
    ],
    regulations: [
      "The students will be issued one book per week.",
      "Classified books (Question Banks, Sample Papers, Lab Manuals, Computer and Project books) will be issued for three days.",
      "Reference books and current issues of Magazines/Periodicals will not be issued.",
      "After the due date, an overdue fine of Rs. 2/- per day per book will be charged.",
      "In case of damage to a book or loss of books, charges will have to be borne by the student."
    ]
  },
  transportRules: {
    title: "Transport Service Rules & Regulations",
    summary: "Students can avail the school transport subject to availability of seats. The routes of the school buses/vans are planned with verified drivers, conductors, and GPS tracking. Bus/van facility is not mandatory."
  },
  houseAndClubs: {
    title: "House and Club Details",
    summary: "To inculcate healthy competitive spirit and esprit de corps, the school is divided into four distinct houses fostering sportsmanship, cultural participation, and leadership."
  }
};

// Fast Facts from lakshayaschool.com
export const FAST_FACTS = [
  { label: "Campus Size", value: "Spread over 2 Acres of Land" },
  { label: "Architecture", value: "Certified Earthquake-Resistant Structural Engineering" },
  { label: "Classrooms", value: "Naturally Sunlit with Cross-Ventilation" },
  { label: "Parent Group", value: "Agrawal Group of Companies (35 Years Lineage)" },
  { label: "Key Sister Initiatives", value: "City Gold Multiplexes, Medilink Hospital, Rajasthan Hospital" },
  { label: "Student-Teacher Ratio", value: "1:15 Personalized Mentorship" },
  { label: "Motto", value: "Knowledge is the Supreme Goal (ज्ञानेन मुक्तिः)" },
  { label: "Award", value: "Best Pre-Nursery International School Ahmedabad" },
  { label: "Principal", value: "Ms. Neha Agrawal (27th ECI National Awardee)" },
  { label: "Eco Hub", value: "Hands-on Field Trips to Shilaj Organic Farm" },
  { label: "Martial Arts", value: "All-India Shito-Ryu Karate Championship Laurels" }
];

// QuickLinks from lakshayaschool.com
export const QUICK_LINKS = [
  { label: "Activity Schedule", href: "#activities", desc: "Annual academic & extracurricular calendar" },
  { label: "Circulars & Notices", href: "#bulletin", desc: "Latest school notices and official circulars" },
  { label: "Mandatory Public Disclosure", href: "#disclosure", desc: "Official institutional and affiliation compliance" },
  { label: "Careers", href: "#careers", desc: "Join our dedicated teaching faculty & staff" },
  { label: "Food Menu", href: "#amenities", desc: "Nutritious, hygienic child-friendly campus meals" },
  { label: "Results & Laurels", href: "#achievements", desc: "100% Board results & national sports honors" }
];

// Academic Wings
export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "early-years",
    name: "Early Years (Foundational)",
    grades: "Pre-Nursery, Nursery, Jr. & Sr. KG",
    tagline: "Awarded Best Pre-Nursery International School in Ahmedabad",
    description: "Nurturing curiosity, sensory development, social bonding, and foundational literacy in a cheerful, secure, sunlight-drenched atmosphere with play-way methodology.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Montessori-Inspired Playway",
      "Sensory & Motor Skill Mastery",
      "Phonics, Rhymes & Language Play",
      "Creative Expression & Puppet Theater"
    ],
    highlights: ["1:8 Mentorship Ratio", "Child-Safe Ergonomic Furniture", "Sensory Sand & Splash Activity", "Dedicated Pre-School Principal"]
  },
  {
    id: "primary",
    name: "Primary Wing",
    grades: "Grade I to Grade V",
    tagline: "Experiential Inquiry & Conceptual Foundations",
    description: "Fostering empirical observation, mathematical logic, linguistic fluency, and eco-awareness. Includes regular experiential field trips to Shilaj Farm.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "STEM Inquiry & Hands-on Science",
      "Mathematical Thinking & Puzzles",
      "Bilingual Fluency & Creative Writing",
      "Shilaj Farm Ecological Field Trips"
    ],
    highlights: ["Sunlit Cross-Ventilated Classrooms", "Smart Interactive Digital Boards", "Annual Art Exhibition Participation", "Martial Arts & Skating Training"]
  },
  {
    id: "middle",
    name: "Middle Wing",
    grades: "Grade VI to Grade VIII",
    tagline: "Analytical Rigor & Competitive Preparation",
    description: "Channeling growing independence through specialized subject faculty, competitive aptitude (Discovery Quiz, SpellBee), and team sports.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Advanced Physics, Chemistry & Biology Labs",
      "Robotics, ICT & Coding Foundations",
      "Wild Wisdom Environmental Quiz Mastery",
      "All-India Shito-Ryu Karate Training"
    ],
    highlights: ["State & National Level Finalists", "Specialized Subject Laboratories", "Leadership & House System", "Inter-School Skating Competitions"]
  },
  {
    id: "secondary",
    name: "Senior Secondary Wing",
    grades: "Grade IX to Grade XII",
    tagline: "Scholastic Excellence & Global Future Readiness",
    description: "Rigorous CBSE academic preparation with intensive guidance, career counseling, and holistic personality development.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    focusAreas: [
      "Board Examination Mentorship",
      "Higher Order Problem-Solving",
      "Comprehensive Library Research Access",
      "Career & Higher Education Guidance"
    ],
    highlights: ["100% Board Examination Pass Track", "Personalized Counseling Desk", "State-of-the-Art Science Labs", "Certified Seismic Safe Study Blocks"]
  }
];

// Campus Facilities from lakshayaschool.com
export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: "earthquake-safe",
    title: "Earthquake-Resistant Campus",
    subtitle: "Certified Seismic Safety Across 2 Acres",
    description: "Specially engineered structural safety with certified earthquake-resistant architecture, ensuring absolute peace of mind for parents.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    features: ["Seismic-Engineered Pillars", "Emergency Assembly Grounds", "Wide Safety Staircases & Ramps", "Certified Structural Blueprints"],
    badge: "Seismic Certified"
  },
  {
    id: "smart-classes",
    title: "Sunlit Smart Classrooms",
    subtitle: "Natural Daylight & Cross-Ventilation",
    description: "Architected to maximize natural ambient sunlight and healthy air circulation, paired with modern interactive audio-visual learning displays.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    features: ["Zero Eye-Strain Ambient Daylight", "Continuous Cross-Ventilation", "Interactive Smart Boards", "Ergonomic Child-Safe Furniture"],
    badge: "Daylight Architecture"
  },
  {
    id: "shilaj-farm",
    title: "Shilaj Farm Eco-Learning Hub",
    subtitle: "Experiential Agriculture & Nature Immersion",
    description: "Exclusive field trips to Shilaj Farm provide hands-on experiences in farming, botanical observation, and environmental responsibility.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    features: ["Organic Farming Activities", "Soil & Botany Observation", "Open-Air Learning Spaces", "Nature Stewardship Workshops"],
    badge: "Eco Field Trips"
  },
  {
    id: "sports-complex",
    title: "Sports Arena & Karate Dojo",
    subtitle: "Home of District & National Champions",
    description: "SPORTS :: Cricket - Athletics - Aerobics - Table Tennis - Chess - Basketball - Football - Carrom - Skating - Karate.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    features: ["Shito-Ryu Karate Training Dojo", "Dedicated Skating Championship Rink", "Full Cricket & Football Field", "Indoor Chess & Table Tennis Arena"],
    badge: "State Champions"
  },
  {
    id: "science-labs",
    title: "Discovery Science & Computer Labs",
    subtitle: "Hands-on Experimentation & Digital Literacy",
    description: "Well-equipped empirical apparatus for Physics, Chemistry, Biology, and modern computer labs with high-speed internet access.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    features: ["Physics, Chemistry & Biology Apparatus", "Computer Lab with Open Access", "Hands-on Practical Demonstrations", "Strict Laboratory Safety Protocol"],
    badge: "Empirical STEM"
  },
  {
    id: "knowledge-center",
    title: "School Library & Media Center",
    subtitle: "Open Access Reading & Research Center",
    description: "A rich collection of books, audio-video materials, multimedia CDs, maps, charts, magazines, and newspapers with an open access system.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    features: ["Extensive Curated Books Collection", "Open Access System", "Annual Library Orientation Program", "Quiet Study & Research Desks"],
    badge: "Open Access Library"
  }
];

// Student Life Events directly from lakshayaschool.com
export const STUDENT_LIFE_EVENTS: LifeEvent[] = [
  {
    id: "evt-1",
    title: "Annual Lakshaya Art Exhibition",
    category: "Art & Creativity",
    dateText: "Annual Campus Tradition",
    description: "Hundreds of student paintings, pottery sculptures, and mixed-media installations displayed at our campus for parents and art critics.",
    image: "/images/art_exhibition.jpg",
    location: "Lakshaya Campus Atrium"
  },
  {
    id: "evt-2",
    title: "Experiential Field Trip to Shilaj Farm",
    category: "Experiential Learning",
    dateText: "Regular Outdoor Excursion",
    description: "Students spend an immersive day at Shilaj Farm learning organic agriculture, bio-diversity, botany, and ecological care.",
    image: "/images/shilaj_farm.jpg",
    location: "Shilaj Organic Farm"
  },
  {
    id: "evt-3",
    title: "X'mas Celebration with PAJAMA Party",
    category: "Celebrations",
    dateText: "December Festive Gala",
    description: "A beloved Lakshaya annual tradition fostering warmth, joyous cross-cultural celebration, games, bonding, and holiday cheer.",
    image: "/images/pajama_celebration.jpg",
    location: "Campus Amphitheater"
  },
  {
    id: "evt-4",
    title: "All-India Shito-Ryu Karate Championship",
    category: "Sports",
    dateText: "National Competition",
    description: "Lakshaya champions clinched 6 Gold, 7 Silver, and 9 Bronze medals demonstrating martial discipline, focus, and athletic prowess.",
    image: "/images/karate_championship.jpg",
    location: "National Sports Arena"
  },
  {
    id: "evt-5",
    title: "Discovery Channel Wild Wisdom Quiz",
    category: "Academic & Quiz",
    dateText: "State Finalists Event",
    description: "4 students advanced to state level finals and 225+ earned Discovery Channel certificates in environmental science knowledge.",
    image: "/images/science_quiz.jpg",
    location: "State Academic Auditorium"
  },
  {
    id: "evt-6",
    title: "Inter-School Skating Competitions",
    category: "Sports",
    dateText: "Annual Rink Tournament",
    description: "Skating students train on our smooth championship rink and have brought home Silver and Bronze medals across district competitions.",
    image: "/images/skating_championship.jpg",
    location: "Lakshaya Skating Rink"
  }
];

// Testimonials reflecting real community feedback
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Sanjay & Meena Patel",
    studentGrade: "Parents of Ananya (Primary Wing)",
    quote: "Lakshaya's child-centric focus and the caring attitude of Ms. Neha Agrawal and the teachers made our daughter fall in love with learning. The farm trips to Shilaj and the sunlit classrooms are truly exceptional.",
    rating: 5,
    awardOrRole: "Parent Association Member"
  },
  {
    id: "test-2",
    parentName: "Rajesh K. Shah",
    studentGrade: "Parent of Dev (Middle Wing, Karate Champion)",
    quote: "Finding a school that equally prioritizes academic rigor and competitive sports like Karate and Skating was our priority. With 22 medals at the All-India Karate Championship, Lakshaya proves its dedication to the Developmental Pentagon.",
    rating: 5,
    awardOrRole: "National Karate Medalist Parent"
  },
  {
    id: "test-3",
    parentName: "Dr. Aarti Joshi",
    studentGrade: "Parent of Kabir (Early Years Foundational)",
    quote: "As a doctor, the certified earthquake-resistant infrastructure and the open, hygienic, sunlight-drenched campus gave me total peace of mind. Lakshaya is truly a 'home away from home' for young children.",
    rating: 5,
    awardOrRole: "Medical Professional"
  }
];

// Institutional Awards & Formal Recognitions
export const INSTITUTIONAL_AWARDS = [
  {
    organization: "27th ECI National Education Awards",
    title: "Best Pre-School Principal Award",
    badge: "Conferred to Ms. Neha Agrawal",
    location: "National Education Summit"
  },
  {
    organization: "27th ECI National Education Awards",
    title: "Best Pre-School in Ahmedabad",
    badge: "Awarded to Lakshaya International School",
    location: "Ahmedabad, Gujarat"
  },
  {
    organization: "Shito-Ryu Karate Federation",
    title: "22 Medals Record Laurels",
    badge: "6 Gold, 7 Silver, 9 Bronze & 4 Certificates",
    location: "2nd All India Karate Championship"
  },
  {
    organization: "Discovery Channel & WWF-India",
    title: "Wild Wisdom Quiz State Finals",
    badge: "4 State Finalists & 225+ Achiever Certificates",
    location: "Gujarat State Finals"
  }
];

// Authentic dated achievements matching lakshayaschool.com
export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Wild Wisdom Quiz State Finals",
    level: "State Level",
    date: "01-10-2019",
    category: "Academic & Quiz",
    result: "4 State Finalists & 225+ Certificates",
    detail: "Organized by Discovery Channel & WWF-India. 4 Lakshaya students advanced to state finals, with 225+ receiving certificates.",
    medalType: "trophy"
  },
  {
    id: "ach-2",
    title: "Khel Maha Kumbh Karate Tournament",
    level: "State / District Level",
    date: "13-09-2019",
    category: "Karate & Martial Arts",
    result: "1 Gold Medal",
    detail: "Championship gold medal won in government-recognized state athletic tournament.",
    medalType: "gold"
  },
  {
    id: "ach-3",
    title: "2nd All India Level Shito-Ryu Karate Championship",
    level: "National Level",
    date: "25-08-2019",
    category: "Karate & Martial Arts",
    result: "22 Medals (6 Gold, 7 Silver, 9 Bronze)",
    detail: "Remarkable demonstration of martial arts discipline with 22 podium medals and 4 certificates of merit.",
    medalType: "gold"
  },
  {
    id: "ach-4",
    title: "Inter-School Junior Golf Championship",
    level: "State Level",
    date: "21-07-2019",
    category: "Sports",
    result: "1 Trophy & Certificate of Excellence",
    detail: "Individual excellence in junior competitive golf tournament.",
    medalType: "trophy"
  },
  {
    id: "ach-5",
    title: "SpellBee National Level Examination",
    level: "National Level",
    date: "24-03-2019",
    category: "Academic & Quiz",
    result: "51 National Level Certificates",
    detail: "Fifty-one Lakshaya students achieved prestigious national ranking in linguistic and vocabulary mastery.",
    medalType: "certificate"
  },
  {
    id: "ach-6",
    title: "27th ECI National Education Awards",
    level: "National Level",
    date: "04-09-2015",
    category: "Academic & Quiz",
    result: "Best Pre-School & Best Principal Award",
    detail: "Awarded Best Pre School in Ahmedabad and Ms. Neha Agrawal honoured with Best Pre School Principal Award.",
    medalType: "trophy"
  }
];

