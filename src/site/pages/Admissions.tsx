import { ClipboardList, FileCheck2, Mail, MessageCircleOff, Send } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { Link } from '../router';
import { Arrow, VideoCard } from '../components/ui';
import { DISCLOSURE_DOCS, NAV, PROGRAMS, SCHOOL } from '../data/content';

const SIBLINGS = NAV.find((g) => g.label === 'Admissions')!.items!;

const STEPS = [
  { icon: ClipboardList, title: 'Fill the application form', text: 'Parents will be required to fill out an Application Form. It can be downloaded from the website or obtained from the Lakshaya International School office.' },
  { icon: Send, title: 'Submit it at the school office', text: 'The Application Form needs to be completed and submitted at the Lakshaya International School office.' },
  { icon: MessageCircleOff, title: 'No test, no interview', text: 'There will be no formal test or interviews conducted on the child.' },
  { icon: FileCheck2, title: 'Confirm & submit documents', text: 'Once the admission is confirmed, the parents will be required to submit the Student Health Form and the required documents.' },
];

export function AdmissionsPage() {
  const fee = DISCLOSURE_DOCS.find((d) => d.title === 'Fee Structure')!;
  return (
    <PageShell
      group="Admissions"
      title="Admissions"
      lead={`Admissions open for academic year ${SCHOOL.admissionsYear}.`}
      siblings={SIBLINGS}
      path="/admissions"
      noCta
    >
      <div className="stack" style={{ ['--gap' as string]: 'clamp(56px,7vw,96px)' }}>
        <div className="split">
          <div data-reveal>
            <span className="pill-live">
              <span className="dot" /> Admissions open · {SCHOOL.admissionsYear}
            </span>
            <h2 style={{ marginTop: 20 }}>Begin your child’s journey at Lakshaya</h2>
            <span className="rule" />
            <p className="lead" style={{ marginTop: 22 }}>
              Start with the online inquiry form — it takes a few minutes. For queries relating to admissions, write to us at{' '}
              <a href={`mailto:${SCHOOL.email}`} style={{ color: 'var(--royal)', fontWeight: 600 }}>
                {SCHOOL.email}
              </a>
              .
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <Link to="/admissions/inquiry" className="btn red">
                Inquiry form <Arrow />
              </Link>
              <a href={SCHOOL.brochure} target="_blank" rel="noopener" className="btn ghost">
                E-Brochure
              </a>
            </div>
          </div>
          <div data-reveal style={{ ['--d' as string]: '120ms' }}>
            <VideoCard poster="71442b74-1733-4193-b343-d1abd5446eef" label="Video of school" />
          </div>
        </div>

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Programs offered</span>
              <h2>Grades & age eligibility</h2>
              <p className="lead">The child should have minimum age completed as on 1st June of the respective academic year.</p>
            </div>
          </div>
          <div className="table-wrap" data-reveal>
            <table className="data">
              <thead>
                <tr>
                  <th scope="col">Programme</th>
                  <th scope="col">Grades</th>
                  <th scope="col">Age eligibility</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map((p) => (
                  <tr key={p.name}>
                    <td style={{ fontWeight: 700, color: 'var(--navy)' }}>{p.name}</td>
                    <td>{p.grade}</td>
                    <td>
                      <span className="chip red">{p.age}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Admission process</span>
              <h2>Four simple steps</h2>
            </div>
          </div>
          <div className="grid grid-4">
            {STEPS.map((s, i) => (
              <article key={s.title} className={`card hover${i === 2 ? ' navy' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="icon-badge">
                    <s.icon />
                  </span>
                  <span className="display" style={{ fontSize: '2rem', fontWeight: 800, opacity: 0.15 }}>
                    0{i + 1}
                  </span>
                </div>
                <h4 style={{ marginTop: 18 }}>{s.title}</h4>
                <p style={{ marginTop: 8, fontSize: '0.95rem' }}>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="grid grid-2">
          <div className="card" data-reveal>
            <h3>Fee structure</h3>
            <p style={{ marginTop: 8 }}>Please visit Lakshaya International School for further details regarding the fee structure.</p>
            <a href={fee.href} target="_blank" rel="noopener" className="text-link" style={{ marginTop: 16 }}>
              View fee structure (PDF) <Arrow />
            </a>
          </div>
          <div className="card red" data-reveal style={{ ['--d' as string]: '80ms' }}>
            <span className="icon-badge">
              <Mail />
            </span>
            <h3 style={{ marginTop: 14 }}>Admission queries</h3>
            <p style={{ marginTop: 6 }}>Write to us and our team will help you every step of the way.</p>
            <a href={`mailto:${SCHOOL.email}`} className="btn sm" style={{ marginTop: 16, ['--bg' as string]: '#fff', ['--fg' as string]: 'var(--red-deep)' }}>
              {SCHOOL.email}
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
