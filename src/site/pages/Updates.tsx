import { useState, type ReactElement } from 'react';
import { Briefcase, FileText, Megaphone, Search, Trophy, Utensils } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { DocCard, EmptyState, FeaturePhotos } from '../components/ui';
import { LEAVING_CERTIFICATES, QUICK_LINKS, SCHOOL } from '../data/content';
import { PAGE_IMAGES } from '../data/generated';

function ActivitySchedule() {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <div data-reveal>
        <FeaturePhotos images={PAGE_IMAGES.activitySchedule} title="Activity Schedule 2016-2017" />
      </div>
      <div className="stack" data-reveal style={{ ['--d' as string]: '120ms' }}>
        <blockquote className="quote">
          “Our achievements speak for themselves. What we have to keep track of are our failures, discouragements and doubts. We tend to forget the past
          difficulties, the many false starts, and the painful groping. We see our past achievements as the end results of…”
          <cite>— Eric Hoffer</cite>
        </blockquote>
        <EmptyState icon={FileText} title="No schedule published yet">
          The current activity schedule will appear here once it is released.
        </EmptyState>
      </div>
    </div>
  );
}

const empty = (icon: typeof FileText, title: string, text: ReactElement | string) => () => (
  <EmptyState icon={icon} title={title}>
    {text}
  </EmptyState>
);

const Circulars = empty(Megaphone, 'No circulars right now', 'New circulars from the school will be listed here.');
const Careers = empty(
  Briefcase,
  'No openings listed right now',
  <>
    Current openings will be listed here. You can also write to <a href={`mailto:${SCHOOL.email}`} style={{ color: 'var(--royal)', fontWeight: 600 }}>{SCHOOL.email}</a>.
  </>,
);
const Results = empty(
  Trophy,
  'No results published here yet',
  <>
    Students can also check results in the <a href="#results" style={{ color: 'var(--royal)', fontWeight: 600 }}>Result Portal</a>.
  </>,
);
const FoodMenu = empty(Utensils, 'No food menu published yet', 'The weekly food menu will appear here once it is released.');

function LeavingCertificate() {
  const [by, setBy] = useState<'Name' | 'Standard'>('Name');
  const [q, setQ] = useState('');
  const n = q.trim().toLowerCase();
  const list = LEAVING_CERTIFICATES.filter((c) => !n || (by === 'Name' ? c.name : c.standard).toLowerCase().includes(n));
  return (
    <div>
      <div className="toolbar">
        <div className="seg" role="group" aria-label="Search by">
          {(['Name', 'Standard'] as const).map((b) => (
            <button key={b} type="button" className={by === b ? 'on' : undefined} aria-pressed={by === b} onClick={() => setBy(b)}>
              {b}
            </button>
          ))}
        </div>
        <div className="search">
          <Search aria-hidden="true" />
          <label htmlFor="lc-q" className="visually-hidden">
            Search by {by.toLowerCase()}
          </label>
          <input id="lc-q" className="input" type="search" placeholder={`Search by ${by.toLowerCase()}`} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>
      {list.length ? (
        <div className="docs">
          {list.map((c) => (
            <DocCard key={c.href} title={c.name} meta={c.standard} href={c.href} />
          ))}
        </div>
      ) : (
        <EmptyState icon={FileText} title="No record found" />
      )}
    </div>
  );
}

const PAGES: Record<string, { title: string; lead: string; body: () => ReactElement }> = {
  '/updates/activity-schedule': { title: 'Activity Schedule', lead: 'Activity Schedule 2016-2017 and upcoming schedules.', body: ActivitySchedule },
  '/updates/circulars': { title: 'Circulars', lead: 'Notices and circulars from the school.', body: Circulars },
  '/updates/careers': { title: 'Career With Us', lead: 'Join a team for whom teaching is life’s calling.', body: Careers },
  '/updates/results': { title: 'Results', lead: 'Examination results.', body: Results },
  '/updates/food-menu': { title: 'Food Menu', lead: 'Nutritious, balanced and farm fresh.', body: FoodMenu },
  '/updates/leaving-certificate': { title: 'Leaving Certificate', lead: 'Search and download issued leaving certificates.', body: LeavingCertificate },
};

export const UPDATE_PATHS = Object.keys(PAGES);

export function UpdatesPage({ path }: { path: string }) {
  const page = PAGES[path];
  const Body = page.body;
  return (
    <PageShell group="Quick Links" title={page.title} lead={page.lead} siblings={QUICK_LINKS} path={path}>
      <Body />
    </PageShell>
  );
}
