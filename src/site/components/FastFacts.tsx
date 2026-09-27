import { Award, Baby, Building, GraduationCap, HeartHandshake, Landmark, MapPin, ShieldCheck, Sun, Users } from 'lucide-react';
import { Dialog } from './Overlay';
import { Link } from '../router';
import { SCHOOL } from '../data/content';
import { FACULTY } from '../data/generated';

const FACTS = [
  { icon: MapPin, label: 'Location', value: 'Shantipura Cross Road, S.P. Ring Road, Ahmedabad' },
  { icon: GraduationCap, label: 'Programmes', value: 'Nursery (3 yrs+) to Grade 11 — CBSE, Science & Commerce streams' },
  { icon: Building, label: 'Campus', value: 'Spread over 2 acres, earthquake resistant building, 8 exploratory labs' },
  { icon: Sun, label: 'Classrooms', value: 'Smart classrooms with sunlight and cross ventilation — a Non-AC school' },
  { icon: Users, label: 'Faculty', value: `${FACULTY.length} members of staff` },
  { icon: HeartHandshake, label: 'Houses & clubs', value: 'Nehru, Gandhi, Bose and Tagore houses · 8 clubs' },
  { icon: Baby, label: 'Admission', value: 'No formal test or interview for the child' },
  { icon: ShieldCheck, label: 'Safety', value: 'Secure drop-off zone, first-aid trained teachers, routine health check-ups' },
  { icon: Landmark, label: 'Founded by', value: 'An initiative of the Agrawal Group — a 35-year lineage' },
  { icon: Award, label: 'Recognition', value: `${SCHOOL.award} · 27th ECI Awards for Excellence in Education` },
];

export function FastFacts({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} label="Fast facts" wide>
      <div className="facts-head">
        <img src="/brand/crest-reversed.png" alt="" />
        <div>
          <span className="eyebrow light">At a glance</span>
          <h2 style={{ marginTop: 8 }}>Fast Facts</h2>
        </div>
      </div>
      <div className="facts">
        {FACTS.map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <Icon aria-hidden="true" />
            <div>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="facts-foot">
        <a className="btn ghost sm" href={SCHOOL.brochure} target="_blank" rel="noopener">
          Download E-Brochure
        </a>
        <Link className="btn red sm" to="/admissions/inquiry" onClick={onClose}>
          Admission inquiry
        </Link>
      </div>
    </Dialog>
  );
}
