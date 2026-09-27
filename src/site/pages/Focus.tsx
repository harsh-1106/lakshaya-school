import type { ReactElement } from 'react';
import { Link } from '../router';
import { PageShell } from '../components/PageShell';
import { Arrow, FeaturePhotos } from '../components/ui';
import { ACTIVITIES, CAMPUS_FEATURES, FOCUS, PENTAGON, SPORTS } from '../data/content';
import { PAGE_IMAGES } from '../data/generated';

const SIBLINGS = FOCUS.map((f) => ({ label: f.title, to: `/focus/${f.slug}` }));

const BODIES: Record<string, () => ReactElement> = {
  'earthquake-resistant-campus': () => (
    <ul className="grid grid-2" style={{ gap: 12 }}>
      {CAMPUS_FEATURES.map((c) => (
        <li key={c} className="card" style={{ padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
          <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{c}</span>
        </li>
      ))}
    </ul>
  ),
  'curriculum-focus': () => (
    <div className="prose">
      <blockquote className="quote">“A well formed mind is better than just a well filled one.”</blockquote>
      <p className="lead">
        The program at “Lakshaya” is integrated from the best of international and contemporary practices. The curriculum focuses on igniting curiosity and
        nurturing the desire to inquire, inculcate and develop the craft of logical reasoning — in the process helping children retain for the rest of their
        lives their innate and congenital thirst for knowledge.
      </p>
      <Link to="/curriculum/objectives" className="text-link">
        Objectives & framework <Arrow />
      </Link>
    </div>
  ),
  'beyond-text-book': () => (
    <div className="prose">
      <p className="lead">
        Classroom teaching, though important at “Lakshaya”, is only part of the story. We support a kaleidoscope of extracurricular activities, community
        involvement programs and co-curricular events that support the holistic development of the children.
      </p>
      <Link to="/curriculum/learning-beyond-lessons" className="text-link">
        Learning beyond lessons <Arrow />
      </Link>
    </div>
  ),
  'developmental-pentagon': () => (
    <ol className="numbered">
      {PENTAGON.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ol>
  ),
  'field-trips': () => (
    <div className="prose">
      <p className="lead">Lakshaya School has organised a field trip to Shilaj Farm.</p>
      <Link to="/gallery/8" className="text-link">
        See the field trips album <Arrow />
      </Link>
    </div>
  ),
  festivals: () => (
    <div className="prose">
      <p className="lead">X’mas celebration with a PAJAMA party at Lakshaya International School.</p>
      <Link to="/gallery" className="text-link">
        Browse celebration albums <Arrow />
      </Link>
    </div>
  ),
  'art-exhibition': () => (
    <div className="prose">
      <p className="lead">ART Exhibition 2015 at the Lakshaya campus.</p>
      <Link to="/gallery" className="text-link">
        Browse the image gallery <Arrow />
      </Link>
    </div>
  ),
  'sports-activities': () => (
    <div className="stack" style={{ ['--gap' as string]: '28px' }}>
      <div>
        <span className="eyebrow">Sports</span>
        <div className="tag-cloud" style={{ marginTop: 14 }}>
          {SPORTS.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div>
        <span className="eyebrow">Other activities</span>
        <div className="tag-cloud" style={{ marginTop: 14 }}>
          {ACTIVITIES.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const FOCUS_PATHS = FOCUS.map((f) => `/focus/${f.slug}`);

export function FocusPage({ path }: { path: string }) {
  const f = FOCUS.find((x) => `/focus/${x.slug}` === path)!;
  const Body = BODIES[f.slug];
  return (
    <PageShell group="Focus On" title={f.title} lead={f.excerpt} siblings={SIBLINGS} path={path}>
      <div className="split" style={{ alignItems: 'start' }}>
        <div data-reveal>
          <FeaturePhotos images={PAGE_IMAGES[f.imageKey]} title={f.title} />
        </div>
        <div data-reveal style={{ ['--d' as string]: '120ms' }}>
          <Body />
        </div>
      </div>
    </PageShell>
  );
}
