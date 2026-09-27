import { useState, type ReactElement } from 'react';
import { Bus, Clock, Library, Phone, Search, UserRound, Users } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { CLUBS, CODE_OF_CONDUCT, DISCIPLINE, GENERAL_POLICY, HOUSES, NAV, SCHOOL, TRANSPORT, UNIFORM, UNIFORM_RULES } from '../data/content';

const SIBLINGS = NAV.find((g) => g.label === 'Policies')!.items!;

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function PolicyBlock({ icon: Icon, title, children }: { icon: typeof Clock; title: string; children: ReactElement }) {
  return (
    <section className="card" data-reveal style={{ padding: 'clamp(24px,4vw,44px)' }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 22 }}>
        <span className="icon-badge">
          <Icon />
        </span>
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}

function General() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '24px' }}>
      <PolicyBlock icon={Clock} title="Late arrival & attendance">
        <Checklist items={GENERAL_POLICY.lateArrival} />
      </PolicyBlock>
      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        <PolicyBlock icon={Library} title="My school library services">
          <Checklist items={GENERAL_POLICY.library} />
        </PolicyBlock>
        <PolicyBlock icon={Library} title="Library rules and regulations">
          <Checklist items={GENERAL_POLICY.libraryRules} />
        </PolicyBlock>
      </div>
    </div>
  );
}

function Transport() {
  return (
    <div className="two-col">
      <div className="stack" style={{ ['--gap' as string]: '24px' }}>
        <p className="lead" data-reveal>
          {TRANSPORT.intro}
        </p>
        <PolicyBlock icon={Users} title="For parents & guardians">
          <Checklist items={TRANSPORT.parents} />
        </PolicyBlock>
        <PolicyBlock icon={Bus} title="For students on the bus/van">
          <Checklist items={TRANSPORT.students} />
        </PolicyBlock>
      </div>
      <aside className="sticky-aside" data-reveal>
        <div className="card navy">
          <span className="icon-badge">
            <Phone />
          </span>
          <h4 style={{ marginTop: 14 }}>In case of any emergency</h4>
          <p style={{ marginTop: 6, fontSize: '0.95rem' }}>The school administration may be contacted on:</p>
          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            {SCHOOL.phones.map((p) => (
              <a key={p} className="btn gold sm" href={`tel:${p.replace(/\s/g, '')}`}>
                {p}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function Discipline() {
  const [q, setQ] = useState('');
  const rows = DISCIPLINE.map((r, i) => ({ r, i })).filter(({ r }) => r.join(' ').toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <div className="stack" style={{ ['--gap' as string]: '24px' }}>
      <div className="toolbar" style={{ marginBottom: 0 }}>
        <div className="search">
          <Search aria-hidden="true" />
          <label htmlFor="disc-q" className="visually-hidden">
            Search the discipline policy
          </label>
          <input id="disc-q" className="input" type="search" placeholder="Search acts or measures" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className="chip gold">Yellow Card</span>
          <span className="chip red">Red Alert</span>
        </div>
      </div>
      <div className="table-wrap" data-reveal>
        <table className="data">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Act of indiscipline</th>
              <th scope="col">Corrective measures</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ r: [act, measure], i }) => (
              <tr key={act}>
                <td className="num">{String(i + 1).padStart(2, '0')}</td>
                <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{act}</td>
                <td>{measure}</td>
              </tr>
            ))}
            {!rows.length && (
              <tr>
                <td colSpan={3} className="muted">
                  No matching entries.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Houses() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '64px' }}>
      <section>
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Houses details</span>
            <h2>Four houses, four ideals</h2>
          </div>
        </div>
        <div className="grid grid-2">
          {HOUSES.map((h, i) => (
            <article key={h.name} className="card house" style={{ ['--house' as string]: h.hex, ['--d' as string]: `${i * 70}ms` }} data-reveal>
              <span className="house-dot">{h.colour}</span>
              <h3>{h.name}</h3>
              <p>{h.about}</p>
              <div className="values" aria-label="Values">
                {h.values.map((v) => (
                  <span key={v} className="chip">
                    {v}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Clubs details</span>
            <h2>Activities done in the clubs</h2>
            <p className="lead">
              Clubs provide the perfect opportunity to get pupils excited about the possibilities of these subjects beyond the constraints of time tables and
              tests.
            </p>
          </div>
        </div>
        <div className="grid grid-4">
          {CLUBS.map((c, i) => (
            <article key={c.name} className="card hover club" data-reveal style={{ ['--d' as string]: `${(i % 4) * 60}ms` }}>
              <img src={`/media/clubs/${c.img}.webp`} alt={c.name} loading="lazy" />
              <div>
                <small>
                  {String(i + 1).padStart(2, '0')} · {c.kind}
                </small>
                <h4>{c.name}</h4>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 16, fontSize: '0.9rem' }}>
          Students choose either UTR (Music Club) or SARGAM (Vocal Singing).
        </p>
      </section>
    </div>
  );
}

function Conduct() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '24px' }}>
      <section className="card" data-reveal style={{ padding: 'clamp(24px,4vw,44px)' }}>
        <span className="eyebrow">The norms of my school</span>
        <ol className="numbered" style={{ marginTop: 16 }}>
          {CODE_OF_CONDUCT.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </section>
      <section className="card navy" data-reveal style={{ padding: 'clamp(24px,4vw,44px)' }}>
        <span className="eyebrow light">Rules</span>
        <ul className="checklist" style={{ marginTop: 18 }}>
          {UNIFORM_RULES.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function UniformCard({ group, boys, girls, tone }: { group: string; boys: string[]; girls: string[]; tone: string }) {
  return (
    <article className="card" data-reveal style={{ borderTop: `6px solid ${tone}` }}>
      <h3>{group}</h3>
      <div className="gender-cols" style={{ marginTop: 18 }}>
        {(
          [
            ['Boys', boys],
            ['Girls', girls],
          ] as const
        ).map(([label, list]) => (
          <div key={label} style={{ background: 'var(--parchment)', borderRadius: 14, padding: 18 }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <UserRound size={18} color="var(--red)" /> {label}
            </h4>
            <ol style={{ listStyle: 'decimal', paddingLeft: 20, marginTop: 10, display: 'grid', gap: 6, fontSize: '0.95rem' }}>
              {list.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </article>
  );
}

function Uniform() {
  const tones = ['#D7271E', '#2E8B57'];
  return (
    <div className="stack" style={{ ['--gap' as string]: '40px' }}>
      <section>
        <span className="eyebrow" data-reveal>
          Pre primary
        </span>
        <div className="grid grid-2" style={{ marginTop: 18 }}>
          {UNIFORM.prePrimary.map((u, i) => (
            <UniformCard key={u.group} {...u} tone={tones[i]} />
          ))}
        </div>
      </section>
      <section>
        <span className="eyebrow" data-reveal>
          Primary
        </span>
        <div style={{ marginTop: 18 }}>
          <UniformCard {...UNIFORM.primary} tone="var(--navy)" />
        </div>
      </section>
    </div>
  );
}

const PAGES: Record<string, { title: string; lead: string; body: () => ReactElement }> = {
  '/policies/general': { title: 'General Policy', lead: 'Late arrival, attendance and library services.', body: General },
  '/policies/transport': { title: 'Transport Rule', lead: 'Transport service rules & regulations.', body: Transport },
  '/policies/discipline': { title: 'Discipline Policy', lead: 'Acts of indiscipline and the corrective measures that follow.', body: Discipline },
  '/policies/houses-and-clubs': { title: 'House and Club Details', lead: 'Nehru, Gandhi, Bose and Tagore houses — and eight clubs.', body: Houses },
  '/policies/code-of-conduct': { title: 'Code of Conduct', lead: 'The school is judged by the conduct of its students.', body: Conduct },
  '/policies/uniform': { title: 'Uniform Details', lead: 'Pre-primary and primary uniform.', body: Uniform },
};

export const POLICY_PATHS = Object.keys(PAGES);

export function PolicyPage({ path }: { path: string }) {
  const page = PAGES[path];
  const Body = page.body;
  return (
    <PageShell group="Policies" title={page.title} lead={page.lead} siblings={SIBLINGS} path={path}>
      <Body />
    </PageShell>
  );
}
