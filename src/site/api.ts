import { DataService } from '../services/dataService';

// Form submissions for the public site. Requests go to the same-origin /api (proxied to the
// FastAPI backend by Vite in development). Failures are surfaced to the visitor, never faked.

async function post(path: string, body: unknown) {
  const res = await fetch(`/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json().catch(() => ({}));
}

export interface ContactMessage {
  name: string;
  email: string;
  mobile: string;
  subject: string;
}

export const sendContactMessage = (msg: ContactMessage) => post('/contact', msg);

export const subscribeNewsletter = (email: string) => post('/newsletter', { email });

export interface AdmissionInquiry {
  student_name: string;
  gender: string;
  session: string;
  standard_year: string;
  dob: string;
  age_children: string;
  birth_certificate?: string;
  birth_name: string;
  dise_no: string;
  address: string;
  area: string;
  pin_code: string;
  country: string;
  state: string;
  city: string;
  school_attending: string;
  distance: string;
  email: string;
  mother_tongue: string;
  currently_study: string;
  siblings: boolean;
  sibling_name: string;
  sibling_class: string;
  relation: string;
  relation_children: string;
  father: ParentDetails;
  mother: ParentDetails;
}

export interface ParentDetails {
  salutation: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  mobile: string;
  educational: string;
  college: string;
  profession: string;
  income: string;
  position: string;
}

const fullName = (p: ParentDetails) => [p.salutation, p.firstname, p.middlename, p.lastname].filter(Boolean).join(' ');

/**
 * Records the inquiry through the existing DataService (so it appears in the Admin panel) with every
 * form field preserved in the notes, and returns the generated inquiry id.
 */
export async function submitAdmissionInquiry(f: AdmissionInquiry) {
  const primary = f.relation === 'Mother' ? f.mother : f.father;
  const lines = [
    `Gender: ${f.gender}`,
    `Date of birth: ${f.dob} (age as on 31/03/2027: ${f.age_children})`,
    f.birth_name && `Name as per birth certificate: ${f.birth_name}`,
    f.birth_certificate && `Birth certificate file: ${f.birth_certificate}`,
    f.dise_no && `UDISE number: ${f.dise_no}`,
    `Address: ${[f.address, f.area, f.city, f.state, f.pin_code, f.country].filter(Boolean).join(', ')}`,
    f.school_attending && `Previous school: ${f.school_attending}`,
    f.currently_study && `Currently studying in: ${f.currently_study}`,
    f.distance && `Distance from school: ${f.distance}`,
    f.mother_tongue && `Mother tongue: ${f.mother_tongue}`,
    f.email && `Student email: ${f.email}`,
    f.siblings && `Sibling at Lakshaya: ${f.sibling_name} (${f.sibling_class})`,
    `Form filled by: ${f.relation}${f.relation === 'Guardian' && f.relation_children ? ` (${f.relation_children})` : ''}`,
    ...(['father', 'mother'] as const).map((k) => {
      const p = f[k];
      return `${k === 'father' ? 'Father' : 'Mother'}: ${fullName(p)} · ${p.mobile}${p.email ? ` · ${p.email}` : ''} · ${p.educational}${p.college ? `, ${p.college}` : ''} · ${p.profession} · ${p.position} · income ${p.income}`;
    }),
  ].filter(Boolean);

  const record = await DataService.createInquiry({
    studentName: f.student_name,
    parentName: fullName(primary) || fullName(f.father),
    email: primary.email || f.father.email || f.mother.email || f.email,
    phone: primary.mobile || f.father.mobile,
    grade: f.standard_year,
    academicYear: f.session,
    notes: lines.join('\n'),
  });
  return record.id;
}
