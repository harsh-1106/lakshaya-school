// All copy below is taken from lakshayaschool.com (encoding and obvious spelling slips fixed only).

export const SCHOOL = {
  name: 'Lakshaya International School',
  mottoSanskrit: 'ज्ञानं परमं ध्येयम्',
  mottoTransliteration: 'Jnanam Paramam Dhyeyam',
  mottoEnglish: 'Knowledge is the supreme goal',
  email: 'info@lakshayaschool.com',
  phones: ['+91 9099785000', '+91 9712342222'],
  addressLines: ['Opp. Applewoods Township', 'Shantipura Cross Road', 'Sardar Patel Ring Road', 'Ahmedabad - 380058', 'Gujarat, India'],
  facebook: 'https://www.facebook.com/lakshayainternationalschool',
  youtube: 'https://www.youtube.com/channel/UCcfFBTsQd0iXQAGyU3ZZ3zw',
  schoolVideo: 'https://youtu.be/YtnopignoKI',
  schoolVideoId: 'YtnopignoKI',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1067.0093434466057!2d72.47667378138394!3d22.991863091797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slakshya+international+school+opp+applewoods+township+shantipura+cross+road+sp+ring+road+ahmedabad!5e1!3m2!1sen!2sin!4v1454061906527',
  mapLink: 'https://www.google.com/maps/d/edit?mid=zZ_QacQUmYAk.kWHr6wpmhF5g&usp=sharing',
  brochure: '/docs/lakshaya-e-brochure.pdf',
  award: 'Best Pre Nursery International School Ahmedabad',
  admissionsYear: '2027-28',
  inquirySession: '2027-2028',
  ageAsOn: '2027-03-31',
};

export interface NavItem {
  label: string;
  to: string;
  blurb?: string;
}

export interface NavGroup {
  label: string;
  to: string;
  items?: NavItem[];
}

export const NAV: NavGroup[] = [
  {
    label: 'Lakshaya',
    to: '/about',
    items: [
      { label: 'Overview', to: '/about', blurb: 'A new-age co-educational school in Ahmedabad' },
      { label: 'Welcome Address', to: '/about/welcome', blurb: 'A note to parents from the Lakshaya team' },
      { label: 'Our Motto', to: '/about/motto', blurb: 'Knowledge is the supreme goal' },
      { label: 'Our Beliefs', to: '/about/beliefs', blurb: 'Putting children first' },
      { label: "Meaning of 'Lakshaya'", to: '/about/meaning', blurb: 'Aim — the founding idea' },
      { label: 'Our Logo', to: '/about/logo', blurb: 'What our colours stand for' },
      { label: 'Founder', to: '/about/founder', blurb: 'An initiative of the Agrawal Group' },
    ],
  },
  {
    label: 'Curriculum',
    to: '/curriculum/objectives',
    items: [
      { label: 'Objectives & Framework', to: '/curriculum/objectives', blurb: 'A well formed mind over a well filled one' },
      { label: 'Researched Curriculum', to: '/curriculum/researched-curriculum', blurb: 'The scientific Lakshaya Programme' },
      { label: 'Areas of Development', to: '/curriculum/areas-of-development', blurb: 'The whole constellation of intelligences' },
      { label: 'Learning Beyond Lessons', to: '/curriculum/learning-beyond-lessons', blurb: 'Learning outside the classroom' },
    ],
  },
  {
    label: 'Our People',
    to: '/people/faculty',
    items: [
      { label: 'Advisory', to: '/people/advisory', blurb: 'Our advisory board' },
      { label: 'Faculty', to: '/people/faculty', blurb: 'Meet our teachers' },
      { label: 'Parent-Teacher Interactions', to: '/people/parent-teacher-interactions', blurb: 'Feedback and the Learning Journal' },
      { label: 'Parent Events', to: '/people/parent-events', blurb: 'Share school life with your child' },
      { label: 'Parent Workshops', to: '/people/parent-workshops', blurb: 'The art of parenting, with experts' },
      { label: 'Parent Portal', to: '/people/parent-portal', blurb: 'Everything in one place' },
      { label: 'Alumni', to: '/alumni', blurb: 'Our former students, verified by the school' },
    ],
  },
  {
    label: 'Facility',
    to: '/facility/environment',
    items: [
      { label: 'Environment', to: '/facility/environment', blurb: 'Bright, safe, child-friendly spaces' },
      { label: 'Counselling', to: '/facility/counselling', blurb: 'Support for students and parents' },
      { label: 'Amenities', to: '/facility/amenities', blurb: 'Library, nutrition and healthcare' },
    ],
  },
  {
    label: 'Policies',
    to: '/policies/general',
    items: [
      { label: 'General Policy', to: '/policies/general', blurb: 'Attendance and library services' },
      { label: 'Transport Rule', to: '/policies/transport', blurb: 'Bus and van rules' },
      { label: 'Discipline Policy', to: '/policies/discipline', blurb: 'Conduct and corrective measures' },
      { label: 'House and Club Details', to: '/policies/houses-and-clubs', blurb: 'Four houses, eight clubs' },
      { label: 'Code of Conduct', to: '/policies/code-of-conduct', blurb: 'The norms of my school' },
      { label: 'Uniform Details', to: '/policies/uniform', blurb: 'Pre-primary and primary uniform' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    items: [
      { label: 'Admissions', to: '/admissions', blurb: 'Admissions open for 2027-28' },
      { label: 'Inquiry Form', to: '/admissions/inquiry', blurb: 'Apply online in a few minutes' },
    ],
  },
  { label: 'Achievements', to: '/achievements' },
  {
    label: 'Gallery',
    to: '/gallery',
    items: [
      { label: 'Image Gallery', to: '/gallery', blurb: 'Albums from campus life' },
      { label: 'Video Gallery', to: 'https://www.youtube.com/channel/UCcfFBTsQd0iXQAGyU3ZZ3zw', blurb: 'Our YouTube channel' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];

export const QUICK_LINKS: NavItem[] = [
  { label: 'Activity Schedule', to: '/updates/activity-schedule' },
  { label: 'Circulars', to: '/updates/circulars' },
  { label: 'Careers', to: '/updates/careers' },
  { label: 'Results', to: '/updates/results' },
  { label: 'Food Menu', to: '/updates/food-menu' },
  { label: 'Leaving Certificate', to: '/updates/leaving-certificate' },
  { label: 'Mandatory Public Disclosure', to: '/mandatory-public-disclosure' },
];

export const FOCUS: { slug: string; title: string; excerpt: string; imageKey: FocusImageKey }[] = [
  { slug: 'earthquake-resistant-campus', title: 'Earthquake Resistant Campus', excerpt: 'Earthquake resistant building and smart classrooms that enjoy the benefit of sunlight and cross ventilation.', imageKey: 'campus' },
  { slug: 'curriculum-focus', title: 'Curriculum Focus', excerpt: '“A well formed mind is better than just a well filled one.”', imageKey: 'curriculumFocus' },
  { slug: 'beyond-text-book', title: 'Beyond Text Book', excerpt: 'A kaleidoscope of extracurricular activities, community involvement programs and co-curricular events.', imageKey: 'beyondTextbook' },
  { slug: 'developmental-pentagon', title: 'Developmental Pentagon', excerpt: 'A holistic and progressive curriculum that brings out the best from Indian as well as international practices.', imageKey: 'pentagon' },
  { slug: 'field-trips', title: 'Field Trips', excerpt: 'Lakshaya School has organised a field trip to Shilaj Farm.', imageKey: 'fieldTrips' },
  { slug: 'festivals', title: 'Festivals', excerpt: "X'mas celebration with a PAJAMA party at Lakshaya International School.", imageKey: 'festivals' },
  { slug: 'art-exhibition', title: 'Art Exhibition', excerpt: 'ART Exhibition 2015 at the Lakshaya campus.', imageKey: 'artExhibition' },
  { slug: 'sports-activities', title: 'Sports / Activities', excerpt: 'Cricket, athletics, aerobics, table tennis, chess, basketball, football, carrom, skating and more.', imageKey: 'sports' },
];

export type FocusImageKey = 'campus' | 'curriculumFocus' | 'beyondTextbook' | 'pentagon' | 'fieldTrips' | 'festivals' | 'artExhibition' | 'sports';

export const VISION =
  'To offer an exceptional educational environment that is conducive to development of compassionate, ethical global citizens, ready and well armed to achieve their fullest in education, work and life.';
export const MISSION =
  'To prepare students for a dynamic, fast changing, tech-savvy world. To give them the necessary pedagogy, and instill in them a passion for lifelong learning and a spirit of enquiry that sharpens their practical senses and intellectual prowess.';

export const PROGRAMS = [
  { name: 'Foundation', grade: 'Nursery', age: '3 Yrs+' },
  { name: 'Stepping Stones', grade: 'Junior KG', age: '4 Yrs+' },
  { name: 'Springboard', grade: 'Senior KG', age: '5 Yrs+' },
  { name: 'Grades 1 – 11', grade: 'CBSE Board (Science and Commerce streams)', age: '6 Yrs+ (for Grade 1 and so on for respective classes)' },
];

export const NEWS = [
  { title: 'Wild Wisdom Quiz State Level Competition 2019', date: '2019-10-01', detail: "4 children reached state level — certificate by Discovery Channel", tag: 'Quiz' },
  { title: 'Wild Wisdom Quiz Competition 2019', date: '2019-09-25', detail: '25 children won certificates by Discovery Channel', tag: 'Quiz' },
  { title: 'Khel Maha Kumbh 2019 (Karate District Level)', date: '2019-09-13', detail: '1 child won a gold medal', tag: 'Karate' },
  { title: '2nd All India Level Shito-Ryu Karate Championship', date: '2019-08-25', detail: '6 children won gold, 7 won silver, 9 won bronze medals and 4 won certificates', tag: 'Karate' },
  { title: 'Golf Competition 2019', date: '2019-07-21', detail: '1 child won a trophy & certificate', tag: 'Golf' },
  { title: "A'bad District Level Shito-Ryu Karate Championship", date: '2019-04-28', detail: '4 children won gold, 7 won silver, 13 won bronze medals and 6 won certificates', tag: 'Karate' },
  { title: 'State Level Shito-Ryu Karate Championship 2019', date: '2019-04-28', detail: '5 children won gold, 2 won silver, 10 won bronze medals and 2 won certificates', tag: 'Karate' },
  { title: 'Spell Bee National Level Competition 2019', date: '2019-03-24', detail: '51 children won certificates', tag: 'Spell Bee' },
  { title: 'Lakshaya Wins — Inter School Skating Competition', date: '2016-02-28', detail: 'Lakshaya wins 1 silver and 2 bronze medals at Inter School Skating Competition', tag: 'Skating' },
  { title: 'Lakshaya Wins — Karate District Level Competition', date: '2016-02-21', detail: 'Lakshaya wins 4 gold, 2 silver and 2 bronze medals at district level karate competition', tag: 'Karate' },
  { title: '27th ECI Awards — For the Excellence in Education', date: '2015-09-04', detail: 'Best Pre School Principal — Ms. Neha Agrawal', tag: 'Award' },
  { title: '27th ECI Awards — For the Excellence in Education', date: '2015-09-04', detail: 'Best Pre School — Lakshaya Preschool, Ahmedabad', tag: 'Award' },
];

export const HIGHLIGHT_EVENTS = [{ month: 3, day: 14, title: 'Class Photo' }];

export const DISCLOSURE_DOCS = [
  'Grant Letter of Affiliation',
  'Registration Certificate',
  'NOC',
  'Recognition Certificate under RTE Act, 2009',
  'Building Safety Certificate',
  'Fire Safety Certificate',
  'DEO Certificate',
  'Health and Sanitation Certificates',
  'Fee Structure',
  'Academic Calendar',
  'School Management Committee',
  'List of Parents Teachers Association',
  'Result of the Board Examination',
  'Appendix - IX (Mandatory Public Disclosure)',
  'Self Certification',
  'Water Examination Report',
].map((title, i) => ({
  title,
  href: `/docs/disclosure/${String(i + 1).padStart(2, '0')}-${
    [
      'grant-letter-of-affiliation',
      'registration-certificate',
      'noc',
      'recognition-certificate-rte-act-2009',
      'building-safety-certificate',
      'fire-safety-certificate',
      'deo-certificate',
      'health-and-sanitation-certificates',
      'fee-structure',
      'academic-calendar',
      'school-management-committee',
      'parents-teachers-association',
      'board-examination-result',
      'appendix-ix-mandatory-public-disclosure',
      'self-certification',
      'water-examination-report',
    ][i]
  }.pdf`,
}));

export const LEAVING_CERTIFICATES = [
  { name: 'Aarav Thakkar', standard: 'Class 5 (2021-22)', href: '/docs/leaving-certificates/aarav-thakkar-class-5-2021-22.pdf' },
  { name: 'Happy Patel', standard: 'Class 10 (2023-24)', href: '/docs/leaving-certificates/happy-patel-class-10-2023-24.pdf' },
  { name: 'Shalaakaa Jani', standard: 'Class 5 (2024-25)', href: '/docs/leaving-certificates/shalaakaa-jani-class-5-2024-25.pdf' },
  { name: 'Yug Anand', standard: 'Class 10 (2024-25)', href: '/docs/leaving-certificates/yug-anand-class-10-2024-25.pdf' },
];

export const HOUSES = [
  {
    name: 'Nehru House',
    colour: 'Red',
    hex: '#D7271E',
    about: 'Pandit Jawaharlal Nehru was the first Prime Minister of Independent India. His vision was to give us the India we live in today.',
    values: ['Fearless', 'Integrity', 'Intellectual', 'Caring', 'Moralistic', 'Courageous', 'Perseverance', 'Inspirational', 'Unbiased', 'Love for Children'],
  },
  {
    name: 'Gandhi House',
    colour: 'Blue',
    hex: '#1E4FA1',
    about: "Mohandas Karamchand Gandhi has been a statement in modern history; the spirit of modern India even years after him is guided by Mahatma Gandhi's ideals.",
    values: ['Faith in self', 'Resistance & Persistence', 'Forgiveness', 'Learning from mistakes', 'Truthfulness', 'Non violence'],
  },
  {
    name: 'Bose House',
    colour: 'Yellow',
    hex: '#E3B91E',
    about: 'Netaji Subhash Chandra Bose was a prominent leader of the Indian National Congress. He later formed the Indian National Army which attempted to end British rule. He continues to be one of the most revered historic figures.',
    values: ['Great visionary', 'Leadership', 'Pragmatic (Realistic)', 'Liberal', 'Rational', 'Democratic'],
  },
  {
    name: 'Tagore House',
    colour: 'Green',
    hex: '#2E8B57',
    about: 'Gurudev Rabindranath Tagore was a Nobel Laureate and one of the most influential writers of modern India. Tagore endowed Gandhiji with the title Mahatma.',
    values: ['Contemporary thinker', 'Seeker of perfection', 'Imaginator', 'Linguistic', 'Spiritual', 'Versatile', 'Optimistic'],
  },
];

export const CLUBS = [
  { name: 'UTR — Unity Through Rhythm', kind: 'Music Club', img: 'music_utr', text: 'This club is about learning different instruments of their choice.' },
  { name: 'SARGAM', kind: 'Vocal Singing', img: '2sargam_clubs', text: 'The central notion of this club is that of melodic Raga, sung to a rhythmic tal.' },
  { name: 'SPORT Club', kind: 'Sports', img: '3sports_clubs', text: 'Gold medals are not really made of gold. They are made of sweat, determination and a hard to find alloy called guts.' },
  { name: "DANCE N' BEATS", kind: 'Dance Club', img: '4dance_clubs', text: 'Dance means to be new, to be fresh at every moment as though one had just issued from the hand of God.' },
  { name: 'BINGO Club', kind: 'Books Inspire New Growth Opportunities', img: '5bingo_clubs', text: 'This club is to inculcate the reading habit from a young age, as books are considered the best friend & guide of a child.' },
  { name: 'SEWA Club', kind: 'Social Empowerment through Work and Action', img: '6sewa_club', text: 'A generous heart, kind speech and a life of service and compassion are the things which renew humanity.' },
  { name: 'AIMS Club', kind: 'Activities Integrating Maths and Science', img: '7aims_clubs', text: 'A child loves to wonder, and that is the seed of science.' },
  { name: 'EARTH Club', kind: 'Every Act of Recycling Trash Helps', img: '8earth_clubs', text: 'Just as we cannot blame others for destroying the environment, so we cannot look to others to protect the environment; responsibility for both begins at home.' },
];

export const DISCIPLINE = [
  ['Coming late to school', 'Will be sent back home'],
  ['Abusive language', 'Written Confession & Red Alert'],
  ['Damaging school property', 'Written Confession + Fine + Red Alert'],
  ['Not wearing proper school uniform', 'Almanac note to parents. Red Alert to be given in case of repetition.'],
  ['Public nuisance', 'Written Confession (if repeated 3 times then Red Alert)'],
  ['Disrespect to teacher', 'Yellow Card'],
  ['Physical violence', 'Yellow Card'],
  ['Physical violence in bus/van', 'Withdrawal of bus/van facility for 3-7 working days'],
  ['Carrying mobiles, iPods and electronic gadgets, valuable things like jewellery, expensive pens, cash, etc.', 'Items to be confiscated and returned to the parent only at the end of the academic session'],
  ['Malpractices/cheating during examinations/unfair means', 'Paper will not be evaluated and zero will be awarded + Red Alert'],
  ['Carrying/bursting of crackers or playing with colours', 'Yellow Card'],
  ['Writing of graffiti in school premises', 'Yellow Card'],
  ['Indiscipline during school trips', 'Yellow Card. Will not be considered for any other trip thereafter.'],
  ['Bunking school', 'Yellow Card'],
];

export const UNIFORM = {
  prePrimary: [
    {
      group: 'Nursery',
      boys: ['Red T-shirt with blue denim shorts', 'White socks with blue band', 'Black Velcro shoes', 'White vest'],
      girls: ['Red T-shirt with blue denim skirt', 'White socks and blue band', 'Black hair/rubber band', 'White slip', 'Black Velcro shoes'],
    },
    {
      group: 'Junior & Senior KG',
      boys: ['Green T-shirt with blue denim shorts', 'White socks with blue band', 'Black Velcro shoes', 'White vest'],
      girls: ['Green T-shirt with blue denim skirt', 'White socks and blue band', 'Black hair/rubber band', 'White slip', 'Black Velcro shoes'],
    },
  ],
  primary: {
    group: 'Primary',
    boys: ['White shirt with grey lining', 'Grey pant', 'White socks with blue band', 'Black Velcro shoes', 'White vest', 'Black tie'],
    girls: ['White shirt with grey lining', 'Grey skirt', 'White socks with blue band', 'Black hair/rubber band', 'White slip', 'Black Velcro shoes', 'Black tie'],
  },
};

export const CODE_OF_CONDUCT = [
  'Each student should carry the Almanac to school with her/his photograph and identification information complete and signed by the parents.',
  'Students who come to school on their own should arrive at school 10 minutes before the bell rings. In case of delay they should report to the school office.',
  'Students should present themselves in their uniform, neatly dressed. Personal cleanliness and hygiene are greatly recommended to all. The school uniform is to be worn every day and for all school functions unless instructed.',
  'Students must respect school property and the property of others. No student should damage any school furniture, write or draw anything on the walls or in any way damage things belonging to others. Damage done even by accident should be reported at once to the class teacher or the Principal. Any damage done will be made good by the one who causes it.',
  'The school is not responsible for goods lost. It is not advisable to bring valuable articles (fountain pens or mobiles) to school.',
  'Students shall bring only vegetarian lunch with them. Consumption of non-vegetarian food is prohibited within the campus.',
  'Boys shall ensure that their hair is trimmed short at regular intervals. Girls shall plait their hair neatly into two halves with a black coloured ribbon or rubber band. Finger and toe nails shall be trimmed.',
  'Students should be polite with everyone. They should always remember that the school is judged by their conduct. They should greet their teachers whenever and wherever they meet them.',
  'Students must refrain from bullying and using foul language.',
  'The School reserves the right to take disciplinary action against a student whose diligence or progress in studies is constantly unsatisfactory or whose conduct is objectionable.',
  'Parents and Guardians are not allowed to visit their wards or teachers in the classroom without the permission of the authorities.',
  'In case of emergency, parents should personally come and pick up their wards after submission of a written request note.',
  "The observance of rules of discipline of the school and good behaviour is an essential condition for a student's continuance in the school. In case a student violates the school rules or indulges in any form of indiscipline, strict action will be taken by the school authorities.",
  'Observance of school rules, decent conduct and behaviour is also expected from the parents or guardians of the children. Misconduct or indecent behaviour on the part of parents and guardians with the school staff shall not be tolerated. In any such case the school reserves the right to take strict action.',
];

export const UNIFORM_RULES = [
  'Parents are expected to make sure that their wards are in proper uniform.',
  'The school i-card is to be worn every day.',
  'It is mandatory to wear prescribed black shoes. (No other shoes allowed)',
  'It is compulsory for the boys to wear white vests and the girls to wear white slips.',
  'It is suggested that students wear a white cap during the games period.',
  "Non-Sikh boys' hair should be short & girls should tie their hair neatly in plaits if long.",
  'It is mandatory to attach name labels to all items of uniform such as caps, blazers etc. to prevent loss.',
  'If the student is not in proper uniform, or if hair is not cut short, parents will be asked to come to school and take the child home.',
  'Students are not permitted to wear fancy colourful earrings, friendship bands etc., paint nails, or sport a fancy hair style to school.',
  'Chewing gum is not allowed in the school premises.',
];

export const GENERAL_POLICY = {
  lateArrival: [
    'The school gate will close 10 minutes after the first bell rings.',
    'Late arrivals to school will not be appreciated. In case of three late comings to the school the child will be asked to return home.',
    'In case of missing the school bus/van, parents are requested to drop the child to the school on their own.',
    'Students who have missed school for medical reasons should bring a medical certificate from their doctor on rejoining the school.',
    'Parents should fill up the "Record for Non Attendance" for each day the student is absent from school stating the reasons for the absence.',
    'No one who has been absent on the previous day will be admitted to the class without a letter from the parent, addressed to the class teacher, stating the reason for the absence.',
    'In case of absence prior permission from the Principal has to be attained.',
    "A student returning to school after suffering from a contagious disease should produce a doctor's certificate permitting her/him to attend the school.",
    'Repeated absence without leave or unexplained absence for more than three months renders the student liable to have her/his name struck off the rolls and the caution money deposit will be transferred to the school fund.',
    'It is compulsory for students to maintain 80% attendance during the course of the academic session, to enable them to appear for the final examination. A special certificate will be given to the students with 100% attendance. The percentage, however, could be relaxed on medical grounds, but such students will not be eligible to sign the Roll of Honour or receive any prizes/awards.',
  ],
  library: [
    'The School Library has a large collection of books, audio-video materials, multimedia CDs, maps, charts, etc. We subscribe to magazines, periodicals and newspapers.',
    'The Library follows the Open Access System.',
    'Students are advised to take good care of Library books. (Library Orientation Program — to ensure effective use of Library Services, orientation programs for all students are organized every year.)',
    'The Library issues books to students according to the allotted time table.',
    'Students can avail Library Services on all working days.',
  ],
  libraryRules: [
    'The students will be issued one book per week.',
    'Classified books (Question Bank, Sample Papers, Lab Manual, Computer and Project books) will be issued only for three days.',
    'Reference books and current issues of Magazines/Periodicals will not be issued.',
    'After the due date, a fine of Rs. 2/- per day, per book will be charged as overdue charges.',
    'In case of damage to or loss of books, charges will have to be borne by the student.',
  ],
};

export const TRANSPORT = {
  intro:
    'Students can avail the school transport subject to the availability of seats. The routes of the school buses/vans are drawn and the parents should consult the school transport in-charge for necessary details. Bus/van facility is not mandatory.',
  parents: [
    'Transport Service for Lakshaya International School is outsourced to an Agency.',
    'Door to door pick up/drop is neither offered nor assured.',
    'No changes in the routes or stops shall be made once selected during the course of an academic session.',
    'For any change in stop/route due to change of residence, an application will have to be made by the parent to the transporter requesting a stop on the desired new route. Subject to availability of seats this may be granted and intimation will be sent thereof. The process shall take a minimum of two weeks and till such time the student shall use the route that has been allocated to him/her originally.',
    'Parents should reach the allocated bus/van stop 5 minutes prior to the time indicated in the route list.',
    'All children will be allowed to board/get down from the bus/van only at their designated stops.',
    'Parents and Guardians must be present at the stops with an authorised Identity Card to hand over/receive the children. No child will be handed over to any person without an authorised Identity Card. In all such cases the child shall be brought back to the school and the parents shall make their own arrangement to pick up their ward from the school.',
    'In the event of a child missing the school bus/van from the designated stop, the parent shall drop the child directly at the school campus. Trying to board the school bus/van from any other stop is not allowed as this affects the attendance at that stop.',
    'No person other than school staff is allowed to enter the school bus/van. In case any unauthorised person tries to enter the bus/van, strict preventive measures may be taken as deemed fit in the interest of security.',
    'Behaviour of all children in the school bus/van must be proper and disciplined. In case of any deviation from acceptable behaviour, the school may withdraw the service provided to such a student temporarily or permanently, as deemed fit.',
    'Bus/van routes and stops are fixed and final. In case of any clarification the transporter or school administration can be approached during normal working hours.',
    'Parents & Guardians are requested to maintain decent behaviour & etiquette with all school staff members; any indecent behaviour shall be dealt with strict action.',
    'Application to discontinue transport facility should be submitted to the transport department one month in advance.',
    'Any complaints regarding drivers and conductors for their misbehaviour should be brought to the notice of the transport department/Principal.',
    'Permission will not be granted to change the bus/van route for a short period.',
    'In case a student misses the bus/van while going home, his/her parents will have to come and pick him/her up.',
    'No parent/driver is permitted to chase/intercept/overtake the school bus/van to make a forcible boarding.',
  ],
  students: [
    'The buses/vans will not wait for late comers.',
    'Children should stay away from the main road until the bus/van arrives.',
    'No student should board a moving bus/van.',
    'All students must occupy vacant seats immediately after boarding their buses/vans.',
    'When the bus/van is in motion students must not move around and no part of their body should be outside the bus/van. Objects of any kind must not be discarded inside or thrown out of the bus/van.',
    'Students will be held responsible for any damage to the bus/van caused by vandalism. Students will be fined if their bus/van is found damaged. Unruly behaviour like shrieking and shouting is strictly prohibited. Courteous behaviour is expected at all times.',
    "The driver's attention must not be distracted for any reason.",
  ],
};

export const CAMPUS_FEATURES = [
  'Earthquake resistant building',
  'Smart classrooms that enjoy the benefit of sunlight and cross ventilation',
  'Secure drop off zone for children',
  'Large parking areas',
  'A playground for sports and outdoor activities',
  'Individual library and resource centre for primary and secondary sections',
  'A sprawling indoor stadia for sports',
  'An atrium equipped to teach sculpture, ceramic art and design',
  'A splash pool for the kindergarten',
  "Children's traffic park",
  'An amphitheatre surrounded by lush green spaces',
  'A Yoga/Gym room for the kindergarten',
  '8 Exploratory labs',
];

export const SPORTS = ['Cricket', 'Athletics', 'Aerobics', 'Table Tennis', 'Chess', 'Basketball', 'Football', 'Carrom', 'Skating'];
export const ACTIVITIES = ['Fine Art', 'Dance', 'Music', 'Drama', 'Public Speaking', 'Pottery', 'Sculpture', 'Robotics'];

export const PENTAGON = [
  'A holistic and progressive curriculum that brings out the best from the Indian as well as the international practices',
  'A continuous comprehensive assessment to motivate children to aim higher',
  'Students are educated to learn, think and to make decisions independently',
  'Teachers are respected not only for their authority but also for their abilities to facilitate learning',
  'At “Lakshaya”, we view the parents as an invaluable ally. Together we shall build on the philosophy and vision of the school.',
];

export const BELIEFS = [
  {
    title: 'Every child is born potentially gifted',
    text: 'Every child is gifted and possesses inherent potential of different types. With scientific nurturing in a caring child-centric environment we will help our children unwrap their natural gifts, discover and embrace their potentials and enhance their whole personality.',
  },
  {
    title: 'Each child is a unique individual',
    text: 'Each child is unique with his/her method of learning and they learn at individual paces. We believe in providing a positive developmentally-appropriate curriculum with a variety of learning styles, making children in the process competent, confident and self-sufficient individuals.',
  },
  {
    title: 'Fostering curiosity makes the child an eager and active learner',
    text: "The child’s natural curiosity and sense of wonder is the building block for learning and the development of high-order thinking skills. We will create an atmosphere that sparks curiosity and encourages children to explore, discover, create, and question.",
  },
  {
    title: 'Children learn best when they are happy',
    text: 'The best Preschool experience comes from providing a happy learning environment. We will make learning fun and enjoyable for the child so that the child enjoys the process of learning and develops a love for learning.',
  },
];

export const INTELLIGENCES = [
  {
    title: 'Bodily - Kinesthetic Intelligence',
    text: [
      'Preschool has an important role to play in the development of a child’s gross and fine motor skills, physical co-ordination and balance. At Lakshaya we fully understand and appreciate that early childhood is a crucial time for their development. Gross motor skills are the abilities required in order to control the large muscles of the body for walking, running, sitting, crawling, and other activities. Gross motor skills include balance, major muscle co-ordination, hand-eye coordination and strength. Fine motor skills are smaller actions, such as grasping an object between the thumb and a finger. With fine motor development the child is able to use his/her hands not only to eat and dress but also to draw, play, write, cut, paste, trace, tie, fasten and be creative.',
      'Gross Motor Development — At Lakshaya, children develop their larger muscles, co-ordination, balance and strength through many opportunities for gross motor development: use of child body-gym, climbing, sliding, swinging, playing with balls and hoops, running, jumping, yoga, dance, etc. as well as other practical activities that include elements of balance, agility, coordination and endurance.',
      'Fine Motor Development — At Lakshaya, our fine motor development activities focus on developing hand and eye coordination with a focus applied on strengthening and fine tuning arms, wrists and fingers in our children. Fine-motor development is enhanced through activities that children will enjoy, including playing with blocks and other child friendly construction materials including use of manipulative materials, puzzles, blocks, grading boards, use of creative art media, cooking, handling utensils, sand and water play.',
    ],
  },
  {
    title: 'Linguistic-Verbal Intelligence',
    text: [
      'We develop English language skills, active listening, speaking, conversational abilities, reading and writing skills among the children through a language-rich environment in our classrooms and targeted Language Lab. Language lessons are provided using interactive teaching aids, books, poems, songs, storytelling and many other literacy activities. Children will learn pronunciation, inflection, grammar and vocabulary from interacting with the individuals around them. There is a strong emphasis on phonics. Our children will delight in the acquisition of spoken and written language and thrive in Lakshaya’s vocabulary-rich environment.',
    ],
  },
  {
    title: 'Logical-Mathematical Intelligence',
    text: [
      'Our curriculum gives children a strong foundation in logical-mathematical skills. Children are encouraged to master numbers and basic computer skills, recognize patterns and relationships, and develop the ability to solve different kinds of problems through logic and reasoning. Well-designed Montessori materials like counting rods, spindles, cards, beads, cubes and counters will provide the sensorial child a concrete representation which leads to abstract understanding of mathematical concepts. Number rhymes, classifying and sequencing activities, playing number and logic games, and solving various kinds of puzzles are some of the fun-filled ways by which our children will imbibe mathematical and logical skills.',
    ],
  },
  {
    title: 'Visual-Spatial Intelligence',
    text: [
      'Visual-spatial thinking is the hallmark of creativity. Children with high visual-spatial intelligence are the artists among us. These children think in pictures and images, are keen observers of the world around them and have an excellent awareness of space. Our program nurtures visual-spatial intelligence in our children by encouraging artistic self-expression through drawing, colouring, crafting, two-dimensional and three-dimensional modelling; through fine tuning of observation skills, playing with puzzles, solving mazes and other spatial tasks, and exercises in imagery and active imagination.',
    ],
  },
  {
    title: 'Musical Intelligence',
    text: [
      'Our children will be encouraged to understand and express themselves through music, rhythmic movements and dance. The program offers many opportunities to develop this intelligence through rhythmic games and activities, singing, dancing and the playing of various musical instruments. This not only is a source of great fun but is also healthy and promotes our children to stay fit and nimble.',
    ],
  },
  {
    title: 'Naturalist Intelligence',
    text: [
      'At Lakshaya, we believe that children should connect with nature outside and not hibernate indoors. Children are given a daily dose of play, exploration and discovery outdoors in the garden and playground. Children’s awareness, understanding and appreciation of nature is further fostered through environmental themes like plants, animals, seasons, wildlife conservation, etc. in the curriculum and through activities like recycling, gardening, observation of plant and aquatic/animal life, bird-watching, listening to the sounds of nature, and through field trips and nature walks.',
    ],
  },
  {
    title: 'Inter-personal Intelligence',
    text: [
      'We will develop inter-personal skills among our children by encouraging the habits of relating to others, developing positive friendships, learning to share, taking turns, respecting the rights and properties of others and teaming with others through guidance in graces and courtesies, cooperative games, group projects and interactions, multicultural books and materials, and dramatic activities or role-playing.',
    ],
  },
  {
    title: 'Intrapersonal Intelligence',
    text: [
      'The program fosters self-concept in our children and inculcates in them the skills of self-management, independence and the spirit of enterprise by providing many self-help activities, by free play, unstructured, open-ended activities, by displaying the child’s personal artwork, stories and family photographs, by representing the child’s culture and language in the environment and activities, and by creating an individually appropriate and success oriented classroom.',
    ],
  },
  {
    title: 'Moral Intelligence',
    text: [
      'Lakshaya is an effective partner for parents in striving to raise moral kids and teaching them to do the right thing. Vision and Values education is an important part of the school curriculum. The school seeks to ingrain in students principles and values such as honesty, goodness, courage, friendliness, compassion, caring and sharing. Some of the ways in which the school tries to achieve this is through moral stories, poems, plays, art, as well as by using teachable moments, by encouraging reflection, and reinforcing moral behaviours in children by appreciation.',
    ],
  },
  {
    title: 'Cultural Intelligence',
    text: [
      'India being a land of many rich and different cultures and with the world becoming a global village, we feel it is important that children understand, accept, and celebrate the diversity of people, cultures and customs. The school celebrates different festivals and multi-culturism and believes in Rabindranath Tagore’s ideal of “World together in one nest”.',
    ],
  },
];

export const RESEARCHED = [
  {
    title: 'Multi-Sensorial Learning',
    text: 'Children live in a world of senses. Through sight, touch, sound, taste, and smell, the children are able to clarify, classify, and comprehend their world. Lakshaya Program is a multisensory program that provides the all-absorbent sensorial child inspiring learning using all five senses.',
  },
  {
    title: 'Multiple Intelligences',
    text: 'The Lakshaya Program uses the “Theory of Multiple Intelligences” as a curriculum framework. The theory propounded by Dr. Howard Gardner says that human beings have different intelligences that include verbal/linguistic, logical-mathematical, visual/spatial, bodily/kinesthetic, musical, interpersonal, naturalist and intrapersonal intelligences. This is why children learn in different ways and at different paces. Our curriculum program makes use of a range of learning and teaching styles that helps children have their particular learning needs met and also encourages them to explore and exercise all of their intelligences. Students who have these kinds of experiences know many ways to learn almost anything!',
  },
  {
    title: 'Theme Based Learning',
    text: 'The curriculum for each year is divided into themes designed to help children understand concepts across different learning areas. Each curriculum theme offers a wonderful spectrum of lesson plans, worksheets, hands-on activities, songs, stories, games, multimedia recordings, interactions with others and field trips. Multi-modal learning through rich auditory, visual and kinesthetic experiences at Lakshaya allows each child to achieve his/her maximum potential.',
  },
  {
    title: 'Learning by Doing',
    text: "At Lakshaya, learning is experiential with hands-on, minds-on activities coupled with whole-body integrative movements. We believe that learning should be the outcome of the child's own experiences, interactions and thinking. We help create rich experiences and exposures through activities and a stimulating environment. Children are seen as active participants, problem-solvers and learners guided by teachers who are facilitators.",
  },
];
