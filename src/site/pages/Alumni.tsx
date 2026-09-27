import { useMemo, useState, type FormEvent, type ReactElement, type ReactNode } from 'react';
import {
  BadgeCheck,
  CalendarDays,
  CircleAlert,
  CircleCheck,
  ClipboardPen,
  GraduationCap,
  HandHeart,
  Mail,
  MapPin,
  Mic,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { Dialog } from '../components/Overlay';
import { Arrow, Avatar, EmptyState } from '../components/ui';
import { Link } from '../router';
import { LinkedinIcon } from '../components/SocialIcons';
import { HOUSES, SCHOOL } from '../data/content';
import { DataService } from '../../services/dataService';
import type { AlumniEvent, AlumniMember, LakshayaHouse } from '../../types';

export const ALUMNI_NAV = [
  { label: 'Overview', to: '/alumni' },
  { label: 'Directory', to: '/alumni/directory' },
  { label: 'Register', to: '/alumni/register' },
  { label: 'Events', to: '/alumni/events' },
];

const FIRST_BATCH = 2015;
const THIS_YEAR = new Date().getFullYear();
const BATCHES = Array.from({ length: THIS_YEAR - FIRST_BATCH + 1 }, (_, i) => THIS_YEAR - i);
const CLASSES = ['Nursery', 'Junior KG', 'Senior KG', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];
const HOUSE_NAMES = HOUSES.map((h) => h.name.replace(' House', '')) as LakshayaHouse[];
const houseHex = (h: string) => HOUSES.find((x) => x.name.startsWith(h))?.hex ?? 'var(--navy)';

const verifiedAlumni = () => DataService.getAlumni().filter((a) => a.status === 'verified');
const today = () => new Date().toISOString().slice(0, 10);
const fmtDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });

function Shell({ path, title, heading, lead, children }: { path: string; title: string; heading?: ReactElement; lead: string; children: ReactNode }) {
  return (
    <PageShell group="Alumni" title={title} heading={heading} lead={lead} siblings={ALUMNI_NAV} path={path} noCta>
      {children}
    </PageShell>
  );
}

// ---------- Overview ----------

function Overview() {
  const alumni = useMemo(verifiedAlumni, []);
  const events = useMemo(() => DataService.getAlumniEvents().filter((e) => e.date >= today()).slice(0, 2), []);
  const stats = [
    { value: alumni.length, label: 'Verified alumni' },
    { value: new Set(alumni.map((a) => a.batchYear)).size, label: 'Batches represented' },
    { value: alumni.filter((a) => a.willingToMentor).length, label: 'Alumni mentors' },
    { value: new Set(alumni.map((a) => `${a.city}|${a.country}`)).size, label: 'Cities' },
  ];

  return (
    <Shell
      path="/alumni"
      title="Alumni"
      heading={
        <>
          Where Lakshaya roots flourish <span style={{ color: 'var(--gold)' }}>across the globe.</span>
        </>
      }
      lead="The official alumni network of Lakshaya International School, Ahmedabad — for every student who once walked our campus, from Nursery to Grade 12."
    >
      <div className="stack" style={{ ['--gap' as string]: 'clamp(64px,8vw,104px)' }}>
        {alumni.length ? (
          <div className="stats" data-reveal>
            {stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="card navy" data-reveal style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between', padding: 'clamp(24px,4vw,40px)' }}>
            <div style={{ maxWidth: 620 }}>
              <span className="eyebrow light">Now open</span>
              <h3 style={{ marginTop: 10, fontSize: 'clamp(1.3rem,2.4vw,1.7rem)' }}>Be the first from your batch to join.</h3>
              <p style={{ marginTop: 8 }}>Register once, the school verifies your details, and you appear in the alumni directory.</p>
            </div>
            <Link to="/alumni/register" className="btn gold">
              Register as alumni <Arrow />
            </Link>
          </div>
        )}

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">How it works</span>
              <h2>One school. One network. Verified by us.</h2>
              <p className="lead">
                This network belongs to Lakshaya alone — every profile is checked by the school office against our records before it is published.
              </p>
            </div>
          </div>
          <div className="grid grid-3">
            {[
              { icon: ClipboardPen, title: 'Register', text: 'Tell us the year you left, your last class and your house — and what you are doing now.' },
              { icon: ShieldCheck, title: 'School verifies', text: 'The school office confirms you studied at Lakshaya. Nothing is published before that.' },
              { icon: Users, title: 'Stay connected', text: 'Find batchmates in the directory, hear about reunions and give back to current students.' },
            ].map((s, i) => (
              <article key={s.title} className={`card hover${i === 1 ? ' navy' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="icon-badge">
                    <s.icon />
                  </span>
                  <span className="display" style={{ fontSize: '2rem', fontWeight: 800, opacity: 0.15 }}>
                    0{i + 1}
                  </span>
                </div>
                <h3 style={{ marginTop: 18 }}>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split" style={{ alignItems: 'start' }}>
          <div data-reveal>
            <span className="eyebrow">Give back</span>
            <h2 style={{ marginTop: 14 }}>Help the next Lakshayans aim high</h2>
            <span className="rule" />
            <p className="lead" style={{ marginTop: 22 }}>
              Our motto — <span className="deva" lang="sa">{SCHOOL.mottoSanskrit}</span>, knowledge is the supreme goal — does not end at the school gate.
            </p>
          </div>
          <div className="grid grid-2" data-reveal style={{ ['--d' as string]: '120ms' }}>
            {[
              { icon: HandHeart, title: 'Mentor students', text: 'Guide senior students on streams, careers and higher studies.' },
              { icon: Mic, title: 'Career talks', text: 'Share your journey with students at school events.' },
              { icon: CalendarDays, title: 'Reunions', text: 'Come home to campus for alumni meets and homecomings.' },
              { icon: GraduationCap, title: 'Your story', text: 'Inspire your juniors with what you have achieved since.' },
            ].map((w, i) => (
              <div key={w.title} className={`card${i === 0 ? ' red' : ''}`}>
                <span className="icon-badge">
                  <w.icon />
                </span>
                <h4 style={{ marginTop: 14 }}>{w.title}</h4>
                <p style={{ marginTop: 6, fontSize: '0.95rem' }}>{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Our houses</span>
              <h2>Once a house, always a house</h2>
            </div>
          </div>
          <div className="grid grid-4">
            {HOUSES.map((h, i) => {
              const n = alumni.filter((a) => h.name.startsWith(a.house)).length;
              return (
                <Link key={h.name} to={`/alumni/directory?house=${h.name.split(' ')[0]}`} className="card hover house" style={{ ['--house' as string]: h.hex, ['--d' as string]: `${i * 60}ms` }} data-reveal>
                  <span className="house-dot">{h.colour}</span>
                  <h3>{h.name}</h3>
                  <p className="muted">{n ? `${n} verified member${n === 1 ? '' : 's'}` : 'No alumni listed yet'}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Upcoming</span>
              <h2>Alumni events</h2>
            </div>
            <Link to="/alumni/events" className="text-link">
              All events <Arrow />
            </Link>
          </div>
          {events.length ? (
            <div className="grid grid-2">
              {events.map((e) => (
                <EventCard key={e.id} event={e} compact />
              ))}
            </div>
          ) : (
            <EmptyState icon={CalendarDays} title="No alumni events scheduled right now">
              Registered alumni will hear about the next reunion first.
            </EmptyState>
          )}
        </section>
      </div>
    </Shell>
  );
}

// ---------- Directory ----------

function Directory() {
  const alumni = useMemo(() => verifiedAlumni().sort((a, b) => b.batchYear - a.batchYear || a.fullName.localeCompare(b.fullName)), []);
  const initialHouse = new URLSearchParams(window.location.search).get('house') ?? 'All';
  const [q, setQ] = useState('');
  const [batch, setBatch] = useState('All');
  const [house, setHouse] = useState(HOUSE_NAMES.includes(initialHouse as LakshayaHouse) ? initialHouse : 'All');
  const [mentorsOnly, setMentorsOnly] = useState(false);
  const [picked, setPicked] = useState<AlumniMember | null>(null);

  const list = alumni.filter((a) => {
    if (batch !== 'All' && String(a.batchYear) !== batch) return false;
    if (house !== 'All' && a.house !== house) return false;
    if (mentorsOnly && !a.willingToMentor) return false;
    const n = q.trim().toLowerCase();
    return !n || [a.fullName, a.currentRole, a.company, a.higherEducation, a.city, a.country].some((v) => v.toLowerCase().includes(n));
  });
  const batchesPresent = Array.from(new Set(alumni.map((a) => a.batchYear))).sort((a, b) => b - a);

  return (
    <Shell path="/alumni/directory" title="Alumni Directory" lead="Find your batchmates. Only alumni verified by the school are listed.">
      {alumni.length ? (
        <div>
          <div className="toolbar">
            <div className="search">
              <Search aria-hidden="true" />
              <label htmlFor="al-q" className="visually-hidden">
                Search alumni
              </label>
              <input id="al-q" className="input" type="search" placeholder="Search by name, work, study or city" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <label htmlFor="al-batch" className="visually-hidden">
              Batch
            </label>
            <select id="al-batch" className="input" style={{ width: 'auto', borderRadius: 999 }} value={batch} onChange={(e) => setBatch(e.target.value)}>
              <option value="All">All batches</option>
              {batchesPresent.map((b) => (
                <option key={b} value={b}>
                  Batch {b}
                </option>
              ))}
            </select>
            <div className="seg" role="group" aria-label="Filter by house">
              {['All', ...HOUSE_NAMES].map((h) => (
                <button key={h} type="button" className={house === h ? 'on' : undefined} aria-pressed={house === h} onClick={() => setHouse(h)}>
                  {h}
                </button>
              ))}
            </div>
            <label className="toggle">
              <input type="checkbox" checked={mentorsOnly} onChange={(e) => setMentorsOnly(e.target.checked)} /> Mentors only
            </label>
          </div>
          <p className="result-count" aria-live="polite" style={{ marginBottom: 16 }}>
            Showing {list.length} of {alumni.length}
          </p>
          {list.length ? (
            <div className="people">
              {list.map((a, i) => (
                <button key={a.id} type="button" className="person" onClick={() => setPicked(a)} aria-haspopup="dialog">
                  <Avatar name={a.fullName} i={i} />
                  <span>
                    <strong>{a.fullName}</strong>
                    <span>
                      Batch {a.batchYear} · {a.house} House
                    </span>
                    <span>{[a.currentRole, a.company].filter(Boolean).join(' at ')}</span>
                    {a.willingToMentor ? <span className="chip red">Mentor</span> : <span className="chip">{a.city}</span>}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <EmptyState icon={Users} title="No alumni match these filters">
              Try another batch or house, or clear the search.
            </EmptyState>
          )}
        </div>
      ) : (
        <EmptyState icon={Users} title="The directory is just getting started">
          <>
            Verified alumni will appear here. <Link to="/alumni/register" style={{ color: 'var(--royal)', fontWeight: 600 }}>Register now</Link> to be among the first.
          </>
        </EmptyState>
      )}

      <Dialog open={!!picked} onClose={() => setPicked(null)} label="Alumni profile">
        {picked && (
          <div style={{ padding: 'clamp(24px,4vw,36px)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', paddingRight: 40 }}>
              <Avatar name={picked.fullName} i={alumni.indexOf(picked)} />
              <div>
                <span className="eyebrow">
                  <BadgeCheck size={14} /> Verified alumni
                </span>
                <h3 style={{ marginTop: 6 }}>{picked.fullName}</h3>
              </div>
            </div>
            {picked.bio && (
              <blockquote className="quote" style={{ marginTop: 20, fontSize: '1rem' }}>
                {picked.bio}
              </blockquote>
            )}
            <dl className="dl" style={{ marginTop: 20 }}>
              {(
                [
                  ['Batch', String(picked.batchYear)],
                  ['Last class at Lakshaya', picked.lastClass],
                  ['House', `${picked.house} House`],
                  ['Currently', [picked.currentRole, picked.company].filter(Boolean).join(' at ')],
                  ['Higher education', picked.higherEducation],
                  ['Based in', [picked.city, picked.country].filter(Boolean).join(', ')],
                ] as const
              )
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd style={k === 'House' ? { color: houseHex(picked.house) } : undefined}>{v}</dd>
                  </div>
                ))}
            </dl>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 }}>
              {picked.linkedIn && (
                <a className="btn sm" href={picked.linkedIn} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon /> LinkedIn
                </a>
              )}
              {picked.shareContact && (
                <a className="btn ghost sm" href={`mailto:${picked.email}`}>
                  <Mail /> {picked.email}
                </a>
              )}
              {picked.willingToMentor && <span className="chip red">Happy to mentor students</span>}
            </div>
          </div>
        )}
      </Dialog>
    </Shell>
  );
}

// ---------- Register ----------

type RegForm = Omit<AlumniMember, 'id' | 'status' | 'submittedAt' | 'verifiedAt' | 'batchYear' | 'house'> & { batchYear: string; house: string; consent: boolean };

const EMPTY_REG: RegForm = {
  fullName: '', email: '', phone: '', batchYear: '', lastClass: '', house: '', currentRole: '', company: '', higherEducation: '',
  city: '', country: 'India', linkedIn: '', willingToMentor: false, shareContact: false, bio: '', consent: false,
};

function Register() {
  const [f, setF] = useState<RegForm>(EMPTY_REG);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'dup' | 'err'>('idle');
  const set = <K extends keyof RegForm>(k: K, v: RegForm[K]) => setF((s) => ({ ...s, [k]: v }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!f.fullName.trim()) err.fullName = 'Please enter your full name';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Please enter a valid email';
    if (!/^[\d\s+-]{10,16}$/.test(f.phone.trim())) err.phone = 'Please enter a valid phone number';
    if (!f.batchYear) err.batchYear = 'Please choose the year you left';
    if (!f.lastClass) err.lastClass = 'Please choose your last class';
    if (!f.house) err.house = 'Please choose your house';
    if (!f.city.trim()) err.city = 'Please enter your city';
    if (f.linkedIn && !/^https?:\/\/(www\.)?linkedin\.com\//i.test(f.linkedIn.trim())) err.linkedIn = 'Please paste your full LinkedIn profile link';
    if (!f.consent) err.consent = 'Please confirm to continue';
    setErrors(err);
    if (Object.keys(err).length) {
      requestAnimationFrame(() => document.querySelector<HTMLElement>('.input.invalid, [aria-invalid="true"]')?.focus());
      return;
    }
    const email = f.email.trim().toLowerCase();
    if (DataService.getAlumni().some((a) => a.email.toLowerCase() === email && a.status !== 'rejected')) {
      setState('dup');
      return;
    }
    setState('busy');
    try {
      const { consent: _consent, ...data } = f;
      await DataService.registerAlumni({
        ...data,
        email,
        fullName: f.fullName.trim(),
        batchYear: Number(f.batchYear),
        house: f.house as LakshayaHouse,
        linkedIn: f.linkedIn?.trim() || undefined,
      });
      setState('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setState('err');
    }
  };

  const field = (k: keyof RegForm, label: string, opts: { required?: boolean; type?: string; full?: boolean; placeholder?: string } = {}) => (
    <div className={`field${opts.full ? ' full' : ''}`}>
      <label htmlFor={`ar-${k}`}>
        {label}
        {opts.required && <span className="req" aria-hidden="true">*</span>}
      </label>
      <input
        id={`ar-${k}`}
        type={opts.type ?? 'text'}
        placeholder={opts.placeholder}
        className={`input${errors[k] ? ' invalid' : ''}`}
        aria-invalid={!!errors[k] || undefined}
        value={f[k] as string}
        onChange={(e) => set(k, e.target.value as never)}
      />
      {errors[k] && (
        <span className="err" role="alert">
          {errors[k]}
        </span>
      )}
    </div>
  );

  if (state === 'done') {
    return (
      <Shell path="/alumni/register" title="Alumni Registration" lead="Welcome back to Lakshaya.">
        <div className="empty" style={{ maxWidth: 720, margin: '0 auto' }}>
          <span className="icon-badge" style={{ background: '#eaf5ee', color: '#1d5e36' }}>
            <CircleCheck />
          </span>
          <h2>Thank you, {f.fullName.split(' ')[0]}!</h2>
          <p>
            Your registration (Batch {f.batchYear}, {f.house} House) has been sent to the school for verification. Once confirmed, your profile will appear in the
            alumni directory.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/alumni" className="btn">
              Back to alumni
            </Link>
            <Link to="/alumni/events" className="btn ghost">
              See alumni events
            </Link>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell path="/alumni/register" title="Alumni Registration" lead="Studied at Lakshaya? Register to join the alumni network. Fields marked * are required.">
      <div className="two-col">
        <form className="card" onSubmit={submit} noValidate style={{ padding: 'clamp(22px,4vw,44px)' }}>
          <h3>Your time at Lakshaya</h3>
          <div className="form-grid" style={{ marginTop: 20 }}>
            {field('fullName', 'Full name (as in school records)', { required: true, full: true })}
            <div className="field">
              <label htmlFor="ar-batchYear">
                Year you left Lakshaya<span className="req" aria-hidden="true">*</span>
              </label>
              <select id="ar-batchYear" className={`input${errors.batchYear ? ' invalid' : ''}`} value={f.batchYear} onChange={(e) => set('batchYear', e.target.value)} aria-invalid={!!errors.batchYear || undefined}>
                <option value="">Choose year</option>
                {BATCHES.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              {errors.batchYear && <span className="err" role="alert">{errors.batchYear}</span>}
            </div>
            <div className="field">
              <label htmlFor="ar-lastClass">
                Last class at Lakshaya<span className="req" aria-hidden="true">*</span>
              </label>
              <select id="ar-lastClass" className={`input${errors.lastClass ? ' invalid' : ''}`} value={f.lastClass} onChange={(e) => set('lastClass', e.target.value)} aria-invalid={!!errors.lastClass || undefined}>
                <option value="">Choose class</option>
                {CLASSES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors.lastClass && <span className="err" role="alert">{errors.lastClass}</span>}
            </div>
            <div className="field full">
              <span className="label">
                House<span style={{ color: 'var(--red)' }}>*</span>
              </span>
              <div className="choice-row" role="radiogroup" aria-label="House">
                {HOUSE_NAMES.map((h) => (
                  <label key={h} className="choice">
                    <input type="radio" name="house" value={h} checked={f.house === h} onChange={() => set('house', h)} />
                    <span style={{ gap: 8 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: houseHex(h), display: 'inline-block' }} /> {h}
                    </span>
                  </label>
                ))}
              </div>
              {errors.house && <span className="err" role="alert">{errors.house}</span>}
            </div>
          </div>

          <h3 style={{ marginTop: 36 }}>Where you are now</h3>
          <div className="form-grid" style={{ marginTop: 20 }}>
            {field('higherEducation', 'Higher education', { full: true, placeholder: 'e.g. B.Com, Gujarat University' })}
            {field('currentRole', 'Current role', { placeholder: 'e.g. Student, Engineer' })}
            {field('company', 'Organisation / college')}
            {field('city', 'City', { required: true })}
            {field('country', 'Country')}
            <div className="field full">
              <label htmlFor="ar-bio">A line about you</label>
              <textarea id="ar-bio" className="input" rows={3} maxLength={300} value={f.bio} onChange={(e) => set('bio', e.target.value)} placeholder="What you are doing now, or a favourite Lakshaya memory" />
              <span className="hint">{300 - f.bio.length} characters left</span>
            </div>
          </div>

          <h3 style={{ marginTop: 36 }}>Contact</h3>
          <div className="form-grid" style={{ marginTop: 20 }}>
            {field('email', 'Email', { required: true, type: 'email' })}
            {field('phone', 'Mobile', { required: true, type: 'tel' })}
            {field('linkedIn', 'LinkedIn profile', { full: true, type: 'url', placeholder: 'https://www.linkedin.com/in/…' })}
            <div className="field full" style={{ gap: 12 }}>
              <label className="toggle">
                <input type="checkbox" checked={f.willingToMentor} onChange={(e) => set('willingToMentor', e.target.checked)} /> I am happy to mentor current students
              </label>
              <label className="toggle">
                <input type="checkbox" checked={f.shareContact} onChange={(e) => set('shareContact', e.target.checked)} /> Show my email address in the alumni directory
              </label>
              <label className="toggle">
                <input type="checkbox" checked={f.consent} onChange={(e) => set('consent', e.target.checked)} aria-invalid={!!errors.consent || undefined} /> I confirm I studied at Lakshaya
                International School and agree to the school verifying these details.<span style={{ color: 'var(--red)' }}>*</span>
              </label>
              {errors.consent && <span className="err" role="alert">{errors.consent}</span>}
            </div>
          </div>

          <div role="status" style={{ marginTop: 18 }}>
            {state === 'dup' && (
              <div className="alert info">
                <CircleAlert />
                <span>
                  This email is already registered. If you need to update your details, write to <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
                </span>
              </div>
            )}
            {state === 'err' && (
              <div className="alert bad">
                <CircleAlert />
                <span>
                  Your registration could not be saved. Please try again or write to <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
                </span>
              </div>
            )}
          </div>
          <button type="submit" className="btn red" style={{ marginTop: 20 }} disabled={state === 'busy'}>
            {state === 'busy' ? 'Submitting…' : 'Submit for verification'}
          </button>
        </form>
        <aside className="sticky-aside stack">
          <div className="card navy">
            <span className="icon-badge">
              <ShieldCheck />
            </span>
            <h4 style={{ marginTop: 14 }}>Your privacy</h4>
            <p style={{ marginTop: 8, fontSize: '0.95rem' }}>
              Your phone number is never shown publicly. Your email is shown only if you choose. Nothing is published until the school verifies you.
            </p>
          </div>
          <div className="alert info">
            <MapPin />
            <span>
              Visiting Ahmedabad? Alumni are always welcome at the campus — call <a href={`tel:${SCHOOL.phones[0].replace(/\s/g, '')}`}>{SCHOOL.phones[0]}</a> first.
            </span>
          </div>
        </aside>
      </div>
    </Shell>
  );
}

// ---------- Events ----------

function EventCard({ event, compact, onRsvp }: { event: AlumniEvent; compact?: boolean; onRsvp?: () => void }) {
  const d = new Date(`${event.date}T00:00:00`);
  const past = event.date < today();
  return (
    <article className="card hover" style={{ display: 'grid', gridTemplateColumns: '84px minmax(0,1fr)', gap: 20, opacity: past ? 0.75 : 1 }}>
      <div className="date-block">
        <strong>{d.getDate()}</strong>
        <span>{d.toLocaleDateString('en-IN', { month: 'short' })}</span>
        <span style={{ color: 'var(--muted)' }}>{d.getFullYear()}</span>
      </div>
      <div>
        <span className={`chip${event.type === 'Homecoming' || event.type === 'Reunion' ? ' red' : ''}`}>{event.type}</span>
        <h3 style={{ marginTop: 10, fontSize: '1.15rem' }}>{event.title}</h3>
        <p className="muted" style={{ marginTop: 6, fontSize: '0.9rem' }}>
          {fmtDate(event.date)}
          {event.time ? ` · ${event.time}` : ''} · {event.location}
        </p>
        {!compact && event.description && <p style={{ marginTop: 10 }}>{event.description}</p>}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 14, flexWrap: 'wrap' }}>
          {compact ? (
            <Link to="/alumni/events" className="text-link">
              Details & RSVP <Arrow />
            </Link>
          ) : past ? (
            <span className="chip">Past event</span>
          ) : (
            <button type="button" className="btn red sm" onClick={onRsvp}>
              RSVP
            </button>
          )}
          {event.rsvps.length > 0 && <span className="muted" style={{ fontSize: '0.85rem' }}>{event.rsvps.length} attending</span>}
        </div>
      </div>
    </article>
  );
}

function Events() {
  const [events, setEvents] = useState(() => DataService.getAlumniEvents());
  const [rsvpFor, setRsvpFor] = useState<AlumniEvent | null>(null);
  const [r, setR] = useState({ name: '', email: '', batchYear: '' });
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const upcoming = events.filter((e) => e.date >= today());
  const past = events.filter((e) => e.date < today()).reverse();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!rsvpFor) return;
    if (!r.name.trim() || !/^\S+@\S+\.\S+$/.test(r.email) || !r.batchYear) {
      setMsg({ ok: false, text: 'Please fill in your name, email and batch.' });
      return;
    }
    const ok = DataService.rsvpEvent(rsvpFor.id, { name: r.name.trim(), email: r.email, batchYear: Number(r.batchYear) });
    setMsg(ok ? { ok: true, text: 'You are on the list — see you there!' } : { ok: false, text: 'This email has already responded to this event.' });
    if (ok) setEvents(DataService.getAlumniEvents());
  };

  return (
    <Shell path="/alumni/events" title="Alumni Events" lead="Reunions, homecomings and career talks hosted by the school.">
      <div className="stack" style={{ ['--gap' as string]: '48px' }}>
        {upcoming.length ? (
          <div className="grid" style={{ gap: 16 }}>
            {upcoming.map((e) => (
              <EventCard
                key={e.id}
                event={e}
                onRsvp={() => {
                  setRsvpFor(e);
                  setMsg(null);
                }}
              />
            ))}
          </div>
        ) : (
          <EmptyState icon={CalendarDays} title="No upcoming alumni events">
            <>
              New events will be announced here. <Link to="/alumni/register" style={{ color: 'var(--royal)', fontWeight: 600 }}>Register</Link> so the school can reach you.
            </>
          </EmptyState>
        )}
        {past.length > 0 && (
          <section>
            <h3 style={{ marginBottom: 16 }}>Past events</h3>
            <div className="grid" style={{ gap: 16 }}>
              {past.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Dialog open={!!rsvpFor} onClose={() => setRsvpFor(null)} label="RSVP">
        {rsvpFor && (
          <form onSubmit={submit} style={{ padding: 'clamp(24px,4vw,36px)' }} noValidate>
            <span className="eyebrow">RSVP</span>
            <h3 style={{ marginTop: 8, paddingRight: 40 }}>{rsvpFor.title}</h3>
            <p className="muted" style={{ marginTop: 6 }}>
              {fmtDate(rsvpFor.date)}
              {rsvpFor.time ? ` · ${rsvpFor.time}` : ''}
            </p>
            <div className="stack" style={{ ['--gap' as string]: '14px', marginTop: 20 }}>
              <div className="field">
                <label htmlFor="rv-name">Full name</label>
                <input id="rv-name" className="input" value={r.name} onChange={(e) => setR({ ...r, name: e.target.value })} data-autofocus />
              </div>
              <div className="field">
                <label htmlFor="rv-email">Email</label>
                <input id="rv-email" type="email" className="input" value={r.email} onChange={(e) => setR({ ...r, email: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="rv-batch">Batch (year you left)</label>
                <select id="rv-batch" className="input" value={r.batchYear} onChange={(e) => setR({ ...r, batchYear: e.target.value })}>
                  <option value="">Choose year</option>
                  {BATCHES.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            {msg && (
              <div className={`alert ${msg.ok ? 'ok' : 'bad'}`} role="status" style={{ marginTop: 16 }}>
                {msg.ok ? <CircleCheck /> : <CircleAlert />} <span>{msg.text}</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {msg?.ok ? (
                <button type="button" className="btn" onClick={() => setRsvpFor(null)}>
                  Done
                </button>
              ) : (
                <button type="submit" className="btn red">
                  Confirm RSVP
                </button>
              )}
            </div>
          </form>
        )}
      </Dialog>
    </Shell>
  );
}

const PAGES: Record<string, () => ReactElement> = {
  '/alumni': Overview,
  '/alumni/directory': Directory,
  '/alumni/register': Register,
  '/alumni/events': Events,
};

export const ALUMNI_PATHS = Object.keys(PAGES);

export function AlumniPage({ path }: { path: string }) {
  const Page = PAGES[path];
  return <Page />;
}

