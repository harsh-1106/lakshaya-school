import { useMemo, useState, type ReactElement } from 'react';
import { BookOpen, CalendarDays, Hourglass, LayoutGrid, MessagesSquare, Search, Users } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { Dialog } from '../components/Overlay';
import { Avatar, EmptyState, FeaturePhotos } from '../components/ui';
import { NAV } from '../data/content';
import { FACULTY, PAGE_IMAGES, type FacultyMember } from '../data/generated';

const SIBLINGS = NAV.find((g) => g.label === 'Our People')!.items!;

function Advisory() {
  return (
    <EmptyState icon={Hourglass} title="Coming soon">
      Details of the Lakshaya advisory board will be published here shortly.
    </EmptyState>
  );
}

const ROLE_FILTERS = ['All', 'PGT', 'TGT', 'PRT', 'PET', 'Other'] as const;

function roleOf(m: FacultyMember) {
  const s = m.standard.toUpperCase();
  return (['PGT', 'TGT', 'PRT', 'PET'] as const).find((r) => s === r) ?? 'Other';
}

/** "PRINCIPAL" → "Principal"; abbreviations such as "P.E." or "EVS" are left alone. */
function titleCase(s: string) {
  return s.length > 3 && s === s.toUpperCase() && !/[.,]/.test(s) && s !== 'EVS' ? s.charAt(0) + s.slice(1).toLowerCase() : s;
}

function roleLine(m: FacultyMember) {
  const known = (v: string) => v && v !== 'Other' && v.toUpperCase() !== 'OTHER' && v !== '-';
  const main = known(m.subject) ? titleCase(m.subject) : known(m.designation) ? titleCase(m.designation) : 'Staff';
  return known(m.standard) && m.standard.toUpperCase() !== m.designation.toUpperCase() ? `${main} · ${m.standard}` : main;
}

function FacultyDirectory() {
  const [q, setQ] = useState('');
  const [role, setRole] = useState<(typeof ROLE_FILTERS)[number]>('All');
  const [picked, setPicked] = useState<FacultyMember | null>(null);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return FACULTY.map((m, i) => ({ m, i })).filter(({ m }) => {
      if (role !== 'All' && roleOf(m) !== role) return false;
      if (!needle) return true;
      return [m.name, m.subject, m.qualification, m.designation].some((v) => v.toLowerCase().includes(needle));
    });
  }, [q, role]);

  return (
    <div className="stack" style={{ ['--gap' as string]: '56px' }}>
      <div className="split" style={{ alignItems: 'start' }}>
        <div className="prose" data-reveal>
          <p className="lead">
            High-quality school education depends on effective, high-quality teachers. Our teachers are highly qualified, well-trained and most importantly
            have a love for children, a deep rooted passion for teaching and the desire to bring out the best in the children they teach and care for.
          </p>
          <p>
            Our teachers go through an intensive in-house training program and have an expert knowledge of child-psychology as well as a scientific
            understanding of the conditions which best promote learning.
          </p>
        </div>
        <div className="prose" data-reveal style={{ ['--d' as string]: '100ms' }}>
          <p>
            At Lakshaya, our teachers create learning environments based on a deep understanding of children’s needs and development. They use a wide array
            of effective educational practices that reach a variety of learning styles effectively.
          </p>
          <p>
            The teachers have positive, sensitive and responsive interactions with children that build the children’s confidence, make learning fun for them
            whilst providing a strong foundation for their future intellectual, physical, and social development.
          </p>
          <blockquote className="quote">At Lakshaya, early childhood education is not just a career for our faculty but life’s calling.</blockquote>
        </div>
      </div>

      <section aria-labelledby="dir-title">
        <div className="section-head" style={{ marginBottom: 24 }}>
          <div>
            <span className="eyebrow">Directory</span>
            <h2 id="dir-title">Our faculty</h2>
          </div>
        </div>
        <div className="toolbar">
          <div className="search">
            <Search aria-hidden="true" />
            <label htmlFor="fac-q" className="visually-hidden">
              Search faculty
            </label>
            <input id="fac-q" className="input" type="search" placeholder="Search by name, subject or qualification" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="seg" role="group" aria-label="Filter by role">
            {ROLE_FILTERS.map((r) => (
              <button key={r} type="button" className={role === r ? 'on' : undefined} aria-pressed={role === r} onClick={() => setRole(r)}>
                {r}
              </button>
            ))}
          </div>
        </div>
        <p className="result-count" aria-live="polite" style={{ marginBottom: 16 }}>
          Showing {list.length} of {FACULTY.length}
        </p>
        {list.length ? (
          <div className="people">
            {list.map(({ m, i }) => (
              <button key={m.name + i} type="button" className="person" onClick={() => setPicked(m)} aria-haspopup="dialog">
                <Avatar name={m.name} i={i} />
                <span>
                  <strong>{m.name}</strong>
                  <span>{roleLine(m)}</span>
                  {m.designation.toUpperCase() === 'PRINCIPAL' || m.designation === 'Co-Ordinator' ? (
                    <span className="chip red">{titleCase(m.designation)}</span>
                  ) : (
                    <span className="chip">{m.qualification}</span>
                  )}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <EmptyState icon={Users} title="No matches">
            Try a different name or subject, or clear the filters.
          </EmptyState>
        )}
      </section>

      <Dialog open={!!picked} onClose={() => setPicked(null)} label="Faculty details">
        {picked && (
          <div style={{ padding: 'clamp(24px,4vw,36px)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', paddingRight: 40 }}>
              <Avatar name={picked.name} i={FACULTY.indexOf(picked)} />
              <div>
                <span className="eyebrow">Faculty details</span>
                <h3 style={{ marginTop: 6 }}>{picked.name}</h3>
              </div>
            </div>
            <dl className="dl" style={{ marginTop: 24 }}>
              {(
                [
                  ['Designation', titleCase(picked.designation)],
                  ['Standard', picked.standard],
                  ['Subject', titleCase(picked.subject)],
                  ['Qualification', picked.qualification],
                  ['Section', picked.section],
                  ['Joining date', picked.joined],
                  ['Batch', picked.batch],
                  ['Medium', picked.medium],
                  ['Experience', picked.experience],
                ] as const
              )
                .filter(([, v]) => v && v !== '-')
                .map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}
      </Dialog>
    </div>
  );
}

function TextWithPhotos({ text, images, title, icon: Icon }: { text: string[]; images: string[]; title: string; icon: typeof BookOpen }) {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <div className="stack" data-reveal>
        <span className="icon-badge">
          <Icon />
        </span>
        <div className="prose">
          {text.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
        </div>
      </div>
      <div data-reveal style={{ ['--d' as string]: '120ms' }}>
        {images.length ? (
          <FeaturePhotos images={images} title={title} />
        ) : (
          <div className="card navy" style={{ padding: 'clamp(28px,5vw,48px)' }}>
            <img src="/brand/crest-reversed.png" alt="" style={{ width: 120 }} />
            <p className="display" style={{ color: 'var(--white)', fontSize: '1.6rem', fontWeight: 800, marginTop: 20 }}>
              Mutual respect — and a deep respect for the child.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const PTI = () => (
  <TextWithPhotos
    title="Parent-Teacher Interactions"
    icon={MessagesSquare}
    images={[]}
    text={[
      "Regular parent-teacher interactions are an integral feature of our program in which the teachers provide an assessment and feedback on the child's progress.",
      "Each child has a Learning Journal which will be a record of your child's interests, significant achievements and development throughout their time with us. Parents are free to share details of their child with the teacher.",
      'The ultimate aim is to understand the child from all perspectives and help him/her to improve in all realms of life. Every interaction with you is premised on mutual respect as well as a deep respect for the child.',
    ]}
  />
);

const Events = () => (
  <TextWithPhotos
    title="Parent Events"
    icon={CalendarDays}
    images={PAGE_IMAGES.parentEvents}
    text={[
      'Many parent functions will take place during the year and we look forward to your participation at these events.',
      'We also have structured programmes tailored around developing parents’ understanding of Lakshaya’s programs, activities and philosophies. This facilitates parents having a greater involvement with their child’s learning and creates a greater opportunity for parents and children alike to share school life.',
    ]}
  />
);

const Workshops = () => (
  <TextWithPhotos
    title="Parent Workshops"
    icon={BookOpen}
    images={PAGE_IMAGES.parentWorkshops}
    text={[
      'We organize various interactive parenting workshops with eminent professionals from time to time to discuss various attributes of effective parenting and child development.',
      'We feel that such workshops will provide parents with valuable inputs in the art of parenting and also help them address any prevalent concerns.',
    ]}
  />
);

function Portal() {
  const items = ['Announcements & notices', 'Calendars', 'Weekly menus', 'Upcoming events & workshops', 'Field trips & special dates', 'Photos & student artwork', 'Home learning projects', 'Art & craft activities', 'Resources & videos'];
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <div className="prose" data-reveal>
        <p className="lead">
          At Lakshaya, we want to make things easy and convenient for you. Lakshaya’s parent portal will provide parents easy, online access to information
          about their child’s group and the preschool routine and other logistical information.
        </p>
        <p>
          The school’s announcements, notices, calendars, weekly menus, upcoming events and workshops, field trips, special dates and any additional
          information will be made available to parents in one central online location which they can access anywhere, anytime.
        </p>
        <p>
          The school will use it to provide important information about curriculum activities, post photos of the children and display student artwork so
          that parents can keep in touch with key events and feel connected to what their children are doing in class. Further, there will be instructions
          for home learning projects, activities for art and craft projects as well as useful resources and videos for parents and children, making it a
          treasure-trove of useful resources.
        </p>
      </div>
      <div className="card navy" data-reveal style={{ ['--d' as string]: '120ms' }}>
        <span className="icon-badge">
          <LayoutGrid />
        </span>
        <h3 style={{ marginTop: 16 }}>Everything in one place</h3>
        <ul className="checklist" style={{ marginTop: 20 }}>
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const PAGES: Record<string, { title: string; lead: string; body: () => ReactElement }> = {
  '/people/advisory': { title: 'Advisory', lead: 'The people who guide Lakshaya’s vision.', body: Advisory },
  '/people/faculty': { title: 'Faculty', lead: 'Highly qualified, well-trained — and with a love for children.', body: FacultyDirectory },
  '/people/parent-teacher-interactions': { title: 'Parent-Teacher Interactions', lead: 'Understanding the child from all perspectives.', body: PTI },
  '/people/parent-events': { title: 'Parent Events', lead: 'Share school life with your child.', body: Events },
  '/people/parent-workshops': { title: 'Parent Workshops', lead: 'The art of parenting, with eminent professionals.', body: Workshops },
  '/people/parent-portal': { title: 'Parent Portal', lead: 'Easy online access — anywhere, anytime.', body: Portal },
};

export const PEOPLE_PATHS = Object.keys(PAGES);

export function PeoplePage({ path }: { path: string }) {
  const page = PAGES[path];
  const Body = page.body;
  return (
    <PageShell group="Our People" title={page.title} lead={page.lead} siblings={SIBLINGS} path={path}>
      <Body />
    </PageShell>
  );
}
