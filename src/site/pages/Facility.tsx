import type { ReactElement } from 'react';
import { Apple, BookOpen, HeartPulse, School } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { FeaturePhotos, PhotoMasonry } from '../components/ui';
import { NAV } from '../data/content';
import { PAGE_IMAGES } from '../data/generated';

const SIBLINGS = NAV.find((g) => g.label === 'Facility')!.items!;

function Environment() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '48px' }}>
      <div className="split" style={{ alignItems: 'start' }}>
        <div className="prose" data-reveal>
          <blockquote className="quote">
            “The most effective kind of education is that a child should play amongst lovely things.”
            <cite>— Plato</cite>
          </blockquote>
          <p className="lead">At Lakshaya we take pride in the fact that a friendly, eye catching and imagination inspiring environment greets all of our children.</p>
          <p>
            Lakshaya provides a comforting, child-friendly, safe and hygienic environment to our Preschool children. Our classrooms are spacious, airy, bright
            and cheerful. The furniture is child-friendly and ergonomic. The interiors are vibrant, well-organized and attractive and the ambience colourful
            and joyous.
          </p>
          <p>
            The classrooms are well-equipped with best in class specialist play equipment, Montessori apparatus and child-appropriate learning aids. These
            are displayed on low level shelving so that children can readily access them. Each classroom has its own separate garden providing an integrated
            indoor-outdoor learning space.
          </p>
          <p>
            The physical environment has been carefully designed to encourage exploration, discovery and experiential learning in a fun-filled and enjoyable
            manner.
          </p>
        </div>
        <div data-reveal style={{ ['--d' as string]: '120ms' }}>
          <FeaturePhotos images={PAGE_IMAGES.environment.slice(0, 5)} title="Environment" />
        </div>
      </div>
      <div>
        <h3 data-reveal style={{ marginBottom: 20 }}>
          Around the campus
        </h3>
        <PhotoMasonry images={PAGE_IMAGES.environment} title="Environment" />
      </div>
    </div>
  );
}

function Counselling() {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <div className="prose" data-reveal>
        <blockquote className="quote">
          “Children need systems that are inclusive and driven by them, systems that will enable them to respond to their feelings and needs at any time.”
          <cite>— Jeroo Billimoria</cite>
        </blockquote>
        <p className="lead">
          Lakshaya offers students and parents a complete range of Counselling Services with the purpose to enhance healthy social, emotional and educational
          growth in our children.
        </p>
        <p>
          Counselling services include cognitive-dynamic assessment of children and the design of programs which will assist and enable children in becoming
          better learners.
        </p>
        <p>
          Parenting is a huge responsibility and at times parents may seek guidance or advice in addressing any developmental or behavioural issues. At
          Lakshaya counselling services will be made available should parents wish to synergize development at school with development in the home.
        </p>
      </div>
      <div className="grid" data-reveal style={{ ['--d' as string]: '120ms' }}>
        {[
          ['For students', 'Cognitive-dynamic assessment and programs that help children become better learners.'],
          ['For parents', 'Guidance on developmental or behavioural questions — so growth at school and at home go hand in hand.'],
          ['Social & emotional', 'Healthy social, emotional and educational growth for every child.'],
        ].map(([t, d], i) => (
          <div key={t} className={`card${i === 0 ? ' navy' : i === 1 ? ' red' : ''}`}>
            <h4>{t}</h4>
            <p style={{ marginTop: 6 }}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Amenities() {
  const blocks: { icon: typeof BookOpen; title: string; quote?: [string, string]; text: string[] }[] = [
    {
      icon: BookOpen,
      title: 'Library',
      quote: ['At the moment that we persuade a child, any child, to cross that threshold, that magic threshold into a library, we change their lives forever, for the better.', 'Barack Obama'],
      text: [
        'The best way to create the readers of the future is to develop an innate love for books. At Lakshaya, we aim to help our children discover the joy of reading, and with it the appreciation and power of the printed word with a wonderful and huge collection of books that children will enjoy.',
        'The library has a rich collection of brightly coloured picture books including board books, pull-tabs, flaps, pop-ups, books made from cloth and plastic, concept picture books, easy readers and transition books which will enthral the young readers and excite their imagination.',
      ],
    },
    {
      icon: Apple,
      title: 'Nutrition — no lunch boxes required!',
      text: [
        'Why? Because we take the responsibility of providing nutritious and wholesome food for all our children during Preschool hours. We have a nutritionist who plans nutritious and balanced meals for children and also advises parents on healthy diets for our children.',
        'The food is farm fresh, looks good and tastes great. Menus and recipes are made available to the parents so that they can read and identify the ingredients used. On occasion or by request we will even issue recipe cards, so that you can make our meals at home.',
        'Snack time at Lakshaya encourages positive eating behaviour in children, fosters valuable interpersonal and social skills besides giving them an enjoyable experience at mealtimes. The Lakshaya School setting is a great place for beginning a long life of healthy nutritional habits.',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Healthcare',
      quote: ['The greatest wealth is health.', 'Virgil'],
      text: [
        'Health and hygiene are important to our school. We place strong emphasis on the well-being and wellness of our students. The children start their day with prayers, yoga and meditation. Yoga is a great physical workout for children that develops their body awareness and also helps to develop their observation skills and increases focus.',
        'Further, health and fitness is in-built in our curriculum with plenty of indoor and outdoor activities, games, music and physical exercise. The school also provides routine health screenings and medical check-ups for children. Teachers are fully trained in the use of first-aid and safety kits.',
        'We place strong values and importance on child-friendly hygiene and sanitation facilities in our school with sterilization of toys, disinfection of surfaces and bathrooms, etc. Lakshaya has quality control systems in place to ensure the highest standard of hygiene and sanitation in all areas. We like to be a “Health Smart” Preschool.',
      ],
    },
  ];
  return (
    <div className="stack" style={{ ['--gap' as string]: '56px' }}>
      <FeaturePhotos images={PAGE_IMAGES.amenities} title="Amenities" />
      <div className="grid" style={{ gap: 20 }}>
        {blocks.map((b, i) => (
          <article key={b.title} className="card" data-reveal style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 18, padding: 'clamp(24px,4vw,44px)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <span className="icon-badge" style={i === 1 ? { background: 'var(--red)', color: '#fff' } : undefined}>
                <b.icon />
              </span>
              <h3>{b.title}</h3>
            </div>
            {b.quote && (
              <blockquote className="quote" style={{ boxShadow: 'none', background: 'var(--parchment)' }}>
                “{b.quote[0]}”<cite>— {b.quote[1]}</cite>
              </blockquote>
            )}
            <div className="prose" style={{ maxWidth: 'none' }}>
              {b.text.map((t, j) => (
                <p key={j}>{t}</p>
              ))}
            </div>
          </article>
        ))}
        <article className="card navy" data-reveal style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <span className="icon-badge">
            <School />
          </span>
          <div>
            <h3>School</h3>
            <p style={{ marginTop: 4 }}>Lakshaya is a Non-AC school. In future also it will be Non-AC.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

const PAGES: Record<string, { title: string; lead: string; body: () => ReactElement; hero?: string }> = {
  '/facility/environment': { title: 'Environment', lead: 'Friendly, eye catching and imagination inspiring.', body: Environment },
  '/facility/counselling': { title: 'Counselling', lead: 'Healthy social, emotional and educational growth.', body: Counselling, hero: '6072b67e-fa0c-4339-a52f-358b08b79236' },
  '/facility/amenities': { title: 'Amenities', lead: 'Library, nutrition and healthcare — designed around children.', body: Amenities },
};

export const FACILITY_PATHS = Object.keys(PAGES);

export function FacilityPage({ path }: { path: string }) {
  const page = PAGES[path];
  const Body = page.body;
  return (
    <PageShell group="Facility" title={page.title} lead={page.lead} siblings={SIBLINGS} path={path} heroImage={page.hero}>
      <Body />
    </PageShell>
  );
}
