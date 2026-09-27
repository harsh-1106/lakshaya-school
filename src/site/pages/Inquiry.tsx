import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { ArrowLeft, CircleAlert, CircleCheck, Info } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { Link } from '../router';
import { Arrow } from '../components/ui';
import { NAV, SCHOOL } from '../data/content';
import { submitAdmissionInquiry, type AdmissionInquiry, type ParentDetails } from '../api';

const SIBLINGS = NAV.find((g) => g.label === 'Admissions')!.items!;

const STANDARDS = ['Nursery', 'Junior KG', 'Senior KG', '1', '2', '3', '4', '5', '6'];
const STATES = [
  'Andaman and Nicobar (AN)', 'Andhra Pradesh (AP)', 'Arunachal Pradesh (AR)', 'Assam (AS)', 'Bihar (BR)', 'Chandigarh (CH)', 'Chhattisgarh (CG)',
  'Dadra and Nagar Haveli (DN)', 'Daman and Diu (DD)', 'Delhi (DL)', 'Goa (GA)', 'Gujarat (GJ)', 'Haryana (HR)', 'Himachal Pradesh (HP)',
  'Jammu and Kashmir (JK)', 'Jharkhand (JH)', 'Karnataka (KA)', 'Kerala (KL)', 'Lakshdweep (LD)', 'Madhya Pradesh (MP)', 'Maharashtra (MH)',
  'Manipur (MN)', 'Meghalaya (ML)', 'Mizoram (MZ)', 'Nagaland (NL)', 'Odisha (OD)', 'Puducherry (PY)', 'Punjab (PB)', 'Rajasthan (RJ)',
  'Sikkim (SK)', 'Tamil Nadu (TN)', 'Tripura (TR)', 'Uttar Pradesh (UP)', 'Uttarakhand (UK)', 'West Bengal (WB)',
];
const SALUTATIONS = ['Mr', 'Mrs', 'Ms'];

const emptyParent = (): ParentDetails => ({
  salutation: '', firstname: '', middlename: '', lastname: '', email: '', mobile: '', educational: '', college: '', profession: '', income: '', position: '',
});

const initial = (): AdmissionInquiry => ({
  student_name: '', gender: '', session: SCHOOL.inquirySession, standard_year: '', dob: '', age_children: '', birth_certificate: '', birth_name: '',
  dise_no: '', address: '', area: '', pin_code: '', country: 'India', state: '', city: '', school_attending: '', distance: '', email: '',
  mother_tongue: '', currently_study: '', siblings: false, sibling_name: '', sibling_class: '', relation: '', relation_children: '',
  father: emptyParent(), mother: emptyParent(),
});

/** Age in years and months on the cut-off date used by the original form (31/03/2027). */
function ageOn(dob: string, on = SCHOOL.ageAsOn) {
  if (!dob) return '';
  const b = new Date(dob);
  const d = new Date(on);
  if (Number.isNaN(b.getTime()) || b > d) return '';
  let months = (d.getFullYear() - b.getFullYear()) * 12 + (d.getMonth() - b.getMonth());
  if (d.getDate() < b.getDate()) months -= 1;
  return `${Math.floor(months / 12)} years ${months % 12} months`;
}

const STEPS = ['Student', 'Address & background', 'Family', 'Review'];
const PARENT_ROWS: { key: keyof ParentDetails; label: string; required?: boolean; type?: string }[] = [
  { key: 'firstname', label: 'First name', required: true },
  { key: 'middlename', label: 'Middle name' },
  { key: 'lastname', label: 'Last name', required: true },
  { key: 'email', label: 'Email ID', type: 'email' },
  { key: 'mobile', label: 'Mobile no.', required: true, type: 'tel' },
  { key: 'educational', label: 'Highest educational qualification', required: true },
  { key: 'college', label: 'College / University / Institute name' },
  { key: 'profession', label: 'Profession', required: true },
  { key: 'income', label: 'Annual income', required: true },
  { key: 'position', label: 'Company name & position', required: true },
];

type Errors = Record<string, string>;

function validate(step: number, f: AdmissionInquiry): Errors {
  const e: Errors = {};
  const need = (k: string, v: string, msg = 'This field is required') => !v.trim() && (e[k] = msg);
  if (step === 0) {
    need('student_name', f.student_name);
    need('gender', f.gender, 'Please choose an option');
    need('standard_year', f.standard_year, 'Please choose a standard');
    need('dob', f.dob);
    if (f.dob && !ageOn(f.dob)) e.dob = 'Please enter a valid birth date';
    if (f.standard_year && !['Nursery', 'Junior KG', 'Senior KG'].includes(f.standard_year)) need('dise_no', f.dise_no, 'UDISE number is required for Grade 1 onwards');
  }
  if (step === 1) {
    need('address', f.address);
    need('state', f.state, 'Please choose a state');
    if (f.pin_code && !/^\d{6}$/.test(f.pin_code)) e.pin_code = 'Enter a 6-digit PIN code';
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email';
    if (f.siblings) {
      need('sibling_name', f.sibling_name);
      need('sibling_class', f.sibling_class);
    }
    need('relation', f.relation, 'Please choose who is filling the form');
    if (f.relation === 'Guardian') need('relation_children', f.relation_children);
  }
  if (step === 2) {
    (['father', 'mother'] as const).forEach((p) => {
      PARENT_ROWS.forEach((r) => r.required && need(`${p}.${r.key}`, f[p][r.key]));
      const m = f[p].mobile.replace(/[\s+-]/g, '');
      if (m && !/^\d{10,12}$/.test(m)) e[`${p}.mobile`] = 'Enter a valid mobile number';
      if (f[p].email && !/^\S+@\S+\.\S+$/.test(f[p].email)) e[`${p}.email`] = 'Enter a valid email';
    });
  }
  return e;
}

function Field({ id, label, required, error, hint, children, full }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: ReactNode; full?: boolean }) {
  return (
    <div className={`field${full ? ' full' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <span className="hint" id={`${id}-hint`}>{hint}</span>}
      {error && (
        <span className="err" id={`${id}-err`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function InquiryPage() {
  const [f, setF] = useState<AdmissionInquiry>(initial);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ kind: 'idle' | 'busy' | 'ok' | 'err'; id?: string }>({ kind: 'idle' });
  const age = useMemo(() => ageOn(f.dob), [f.dob]);

  const set = <K extends keyof AdmissionInquiry>(k: K, v: AdmissionInquiry[K]) => setF((s) => ({ ...s, [k]: v }));
  const setParent = (p: 'father' | 'mother', k: keyof ParentDetails, v: string) => setF((s) => ({ ...s, [p]: { ...s[p], [k]: v } }));
  const bind = (k: keyof AdmissionInquiry) => ({
    id: `f-${k}`,
    value: f[k] as string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => set(k, e.target.value as never),
    className: `input${errors[k] ? ' invalid' : ''}`,
    'aria-invalid': !!errors[k] || undefined,
    'aria-describedby': errors[k] ? `f-${k}-err` : undefined,
  });

  const go = (to: number) => {
    if (to > step) {
      for (let s = step; s < to; s++) {
        const e = validate(s, f);
        if (Object.keys(e).length) {
          setErrors(e);
          setStep(s);
          requestAnimationFrame(() => document.querySelector<HTMLElement>('.input.invalid, [aria-invalid="true"]')?.focus());
          return;
        }
      }
    }
    setErrors({});
    setStep(to);
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return set('birth_certificate', '');
    if (file.size > 5 * 1024 * 1024) {
      setErrors((x) => ({ ...x, birth_certificate: 'Please choose a file smaller than 5 MB' }));
      e.target.value = '';
      return;
    }
    setErrors(({ birth_certificate: _, ...rest }) => rest);
    set('birth_certificate', file.name);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) return go(step + 1);
    setStatus({ kind: 'busy' });
    try {
      const id = await submitAdmissionInquiry({ ...f, age_children: age });
      setStatus({ kind: 'ok', id });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setStatus({ kind: 'err' });
    }
  };

  if (status.kind === 'ok') {
    return (
      <PageShell group="Admissions" title="Inquiry Form" siblings={SIBLINGS} path="/admissions/inquiry" noCta>
        <div className="empty" style={{ maxWidth: 720, margin: '0 auto' }}>
          <span className="icon-badge" style={{ background: '#eaf5ee', color: '#1d5e36' }}>
            <CircleCheck />
          </span>
          <h2>Thank you!</h2>
          <p>
            Your admission inquiry for <strong>{f.student_name}</strong> ({f.standard_year}, session {f.session}) has been received. Reference:{' '}
            <strong>{status.id}</strong>. Our admissions team will get in touch with you.
          </p>
          {f.birth_certificate && <p>Please bring the birth certificate ({f.birth_certificate}) to the school office.</p>}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
            <Link to="/" className="btn">
              Back to home
            </Link>
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setF(initial());
                setStep(0);
                setStatus({ kind: 'idle' });
              }}
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </PageShell>
    );
  }

  const review: [string, string][] = [
    ['Student', f.student_name],
    ['Gender', f.gender],
    ['Session', f.session],
    ['Standard', f.standard_year],
    ['Birth date', f.dob],
    ['Age as on 31/03/2027', age],
    ['Name as per birth certificate', f.birth_name],
    ['Birth certificate', f.birth_certificate ?? ''],
    ['UDISE number', f.dise_no],
    ['Address', [f.address, f.area, f.city, f.state, f.pin_code, f.country].filter(Boolean).join(', ')],
    ['Previous school', f.school_attending],
    ['Currently studying in', f.currently_study],
    ['Distance from school', f.distance],
    ['Email', f.email],
    ['Mother tongue', f.mother_tongue],
    ['Sibling at Lakshaya', f.siblings ? `${f.sibling_name} (${f.sibling_class})` : 'No'],
    ['Form filled by', f.relation + (f.relation === 'Guardian' && f.relation_children ? ` — ${f.relation_children}` : '')],
    ['Father', [f.father.salutation, f.father.firstname, f.father.middlename, f.father.lastname].filter(Boolean).join(' ') + ` · ${f.father.mobile}`],
    ['Mother', [f.mother.salutation, f.mother.firstname, f.mother.middlename, f.mother.lastname].filter(Boolean).join(' ') + ` · ${f.mother.mobile}`],
  ];

  return (
    <PageShell
      group="Admissions"
      title="Admission Inquiry Form"
      lead={`Session ${SCHOOL.inquirySession}. Fields marked * are required.`}
      siblings={SIBLINGS}
      path="/admissions/inquiry"
      noCta
    >
      <div className="two-col" id="inquiry-form" style={{ scrollMarginTop: 160 }}>
        <form className="card" onSubmit={submit} noValidate style={{ padding: 'clamp(22px,4vw,44px)' }}>
          <div className="stepper" role="list">
            {STEPS.map((s, i) => (
              <button key={s} type="button" role="listitem" className={i === step ? 'on' : i < step ? 'done' : undefined} disabled={i > step} onClick={() => go(i)} aria-current={i === step ? 'step' : undefined}>
                <span>
                  {i + 1}. {s}
                </span>
              </button>
            ))}
          </div>

          {step === 0 && (
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="visually-hidden">Student information</legend>
              <h3 style={{ marginBottom: 22 }}>Student information</h3>
              <div className="form-grid">
                <Field id="f-student_name" label="Full name" required error={errors.student_name} full>
                  <input {...bind('student_name')} autoComplete="off" />
                </Field>
                <div className="field">
                  <span className="label">
                    Gender<span className="req" style={{ color: 'var(--red)' }}>*</span>
                  </span>
                  <div className="choice-row" role="radiogroup" aria-label="Gender">
                    {['Male', 'Female'].map((g) => (
                      <label key={g} className="choice">
                        <input type="radio" name="gender" value={g} checked={f.gender === g} onChange={() => set('gender', g)} />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                  {errors.gender && <span className="err" role="alert">{errors.gender}</span>}
                </div>
                <Field id="f-session" label="Session">
                  <input {...bind('session')} readOnly />
                </Field>
                <Field id="f-standard_year" label="Standard in which applicant seeks admission" required error={errors.standard_year}>
                  <select {...bind('standard_year')}>
                    <option value="">Choose option</option>
                    {STANDARDS.map((s) => (
                      <option key={s} value={s}>
                        {/^\d/.test(s) ? `Grade ${s}` : s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="f-dob" label="Birth date" required error={errors.dob}>
                  <input {...bind('dob')} type="date" max={new Date().toISOString().slice(0, 10)} />
                </Field>
                <Field id="f-age" label="Age as on (31/03/2027)" hint="Calculated from the birth date">
                  <input id="f-age" className="input" value={age} readOnly placeholder="—" />
                </Field>
                <Field id="f-birth_name" label="Name as per birth certificate">
                  <input {...bind('birth_name')} />
                </Field>
                <Field id="f-birth_certificate" label="Birth certificate" error={errors.birth_certificate} hint="PDF or image, up to 5 MB">
                  <input id="f-birth_certificate" type="file" className="input" accept=".pdf,image/*" onChange={onFile} />
                </Field>
                <Field id="f-dise_no" label="UDISE number (required for Grade 1 onwards)" error={errors.dise_no} full>
                  <input {...bind('dise_no')} />
                </Field>
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="visually-hidden">Address and background</legend>
              <h3 style={{ marginBottom: 22 }}>Address & background</h3>
              <div className="form-grid">
                <Field id="f-address" label="Address" required error={errors.address} full>
                  <textarea {...bind('address')} rows={3} />
                </Field>
                <Field id="f-area" label="Area">
                  <input {...bind('area')} />
                </Field>
                <Field id="f-city" label="City">
                  <input {...bind('city')} />
                </Field>
                <Field id="f-state" label="State" required error={errors.state}>
                  <select {...bind('state')}>
                    <option value="">Choose option</option>
                    {STATES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field id="f-pin_code" label="PIN code" error={errors.pin_code}>
                  <input {...bind('pin_code')} inputMode="numeric" maxLength={6} />
                </Field>
                <Field id="f-country" label="Country">
                  <input {...bind('country')} />
                </Field>
                <Field id="f-email" label="Email ID" error={errors.email}>
                  <input {...bind('email')} type="email" />
                </Field>
                <Field id="f-school_attending" label="Name of the previous school attended">
                  <input {...bind('school_attending')} />
                </Field>
                <Field id="f-currently_study" label="Student currently studying in class">
                  <input {...bind('currently_study')} />
                </Field>
                <Field id="f-distance" label="Approximate distance from Lakshaya International School">
                  <input {...bind('distance')} placeholder="e.g. 5 km" />
                </Field>
                <Field id="f-mother_tongue" label="Mother tongue">
                  <input {...bind('mother_tongue')} />
                </Field>
                <div className="field full">
                  <label className="toggle">
                    <input type="checkbox" checked={f.siblings} onChange={(e) => set('siblings', e.target.checked)} />
                    Any siblings studying at Lakshaya International School?
                  </label>
                </div>
                {f.siblings && (
                  <>
                    <Field id="f-sibling_name" label="Sibling’s full name" required error={errors.sibling_name}>
                      <input {...bind('sibling_name')} />
                    </Field>
                    <Field id="f-sibling_class" label="Sibling’s class" required error={errors.sibling_class}>
                      <input {...bind('sibling_class')} />
                    </Field>
                  </>
                )}
                <div className="field full">
                  <span className="label">
                    Form filled by<span style={{ color: 'var(--red)' }}>*</span>
                  </span>
                  <div className="choice-row" role="radiogroup" aria-label="Form filled by">
                    {['Mother', 'Father', 'Guardian'].map((r) => (
                      <label key={r} className="choice">
                        <input type="radio" name="relation" value={r} checked={f.relation === r} onChange={() => set('relation', r)} />
                        <span>{r}</span>
                      </label>
                    ))}
                  </div>
                  {errors.relation && <span className="err" role="alert">{errors.relation}</span>}
                </div>
                {f.relation === 'Guardian' && (
                  <Field id="f-relation_children" label="Relation with child" required error={errors.relation_children} full>
                    <input {...bind('relation_children')} />
                  </Field>
                )}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend className="visually-hidden">Family information</legend>
              <h3 style={{ marginBottom: 22 }}>Family information</h3>
              <div className="grid grid-2" style={{ gap: 28 }}>
                {(['father', 'mother'] as const).map((p) => (
                  <div key={p} className="stack" style={{ ['--gap' as string]: '16px' }}>
                    <h4 style={{ paddingBottom: 10, borderBottom: '2px solid var(--red)' }}>{p === 'father' ? 'Father details' : 'Mother details'}</h4>
                    <Field id={`f-${p}-salutation`} label="Salutation">
                      <select id={`f-${p}-salutation`} className="input" value={f[p].salutation} onChange={(e) => setParent(p, 'salutation', e.target.value)}>
                        <option value="">Choose option</option>
                        {SALUTATIONS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    {PARENT_ROWS.map((r) => {
                      const k = `${p}.${r.key}`;
                      return (
                        <Field key={r.key} id={`f-${p}-${r.key}`} label={r.label} required={r.required} error={errors[k]}>
                          <input
                            id={`f-${p}-${r.key}`}
                            type={r.type ?? 'text'}
                            className={`input${errors[k] ? ' invalid' : ''}`}
                            aria-invalid={!!errors[k] || undefined}
                            aria-describedby={errors[k] ? `f-${p}-${r.key}-err` : undefined}
                            value={f[p][r.key]}
                            onChange={(e) => setParent(p, r.key, e.target.value)}
                          />
                        </Field>
                      );
                    })}
                  </div>
                ))}
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <div>
              <h3 style={{ marginBottom: 18 }}>Review your inquiry</h3>
              <dl className="dl">
                {review
                  .filter(([, v]) => v && v.trim() && v.trim() !== '·')
                  .map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
              </dl>
              {status.kind === 'err' && (
                <div className="alert bad" role="alert" style={{ marginTop: 20 }}>
                  <CircleAlert />
                  <span>
                    We could not submit your inquiry. Please try again, or email the details to <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
                  </span>
                </div>
              )}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            {step > 0 ? (
              <button type="button" className="btn ghost" onClick={() => go(step - 1)}>
                <ArrowLeft /> Back
              </button>
            ) : (
              <span />
            )}
            <button type="submit" className="btn red" disabled={status.kind === 'busy'}>
              {step < 3 ? (
                <>
                  Continue <Arrow />
                </>
              ) : status.kind === 'busy' ? (
                'Submitting…'
              ) : (
                'Submit inquiry'
              )}
            </button>
          </div>
        </form>

        <aside className="sticky-aside stack">
          <div className="card navy">
            <img src="/brand/crest-reversed.png" alt="" style={{ width: 72 }} />
            <h4 style={{ marginTop: 14 }}>Admissions {SCHOOL.admissionsYear}</h4>
            <p style={{ marginTop: 8, fontSize: '0.95rem' }}>There will be no formal test or interviews conducted on the child.</p>
          </div>
          <div className="alert info">
            <Info />
            <span>
              Questions? Call <a href={`tel:${SCHOOL.phones[0].replace(/\s/g, '')}`}>{SCHOOL.phones[0]}</a> or email{' '}
              <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
            </span>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
