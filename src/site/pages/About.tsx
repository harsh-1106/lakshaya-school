import type { ReactElement } from 'react';
import { Heart, Lightbulb, Sparkles, UserRound } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { PhotoImg } from '../components/media';
import { Link } from '../router';
import { Arrow } from '../components/ui';
import { BELIEFS, NAV, SCHOOL } from '../data/content';

const SIBLINGS = NAV.find((g) => g.label === 'Lakshaya')!.items!;

function Overview() {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <div className="prose" data-reveal>
        <span className="eyebrow">About Lakshaya School</span>
        <h2>Lakshaya International School</h2>
        <p className="lead">
          Lakshaya International School is a new age co-educational school, an educational initiative of the “Agrawal Group of Companies” engaged in Real
          Estate, Entertainment (City Gold Multiplexes) and Health Care (Medilink Hospital).
        </p>
        <p>
          The group has a rich lineage of 35 years and has evolved in cultural and social responsibilities as a trustee of Rajasthan Hospital and Maharaja
          Agrasen Vidhyalaya, and “Lakshaya” is the major thrust area through which it aims at making a positive and real contribution to society.
        </p>
        <p>
          Spread over 2 acres of land, the school has etched a name for itself not only as an abode of learning but as a centre of wisdom. At Lakshaya, we
          believe that it is vital to nourish the intelligences of each child so that they can lead a happy, fulfilling life.
        </p>
        <p>
          The foundation of learning at “Lakshaya” is its unique holistic approach, integrating the best hi-tech education with relevant value systems to
          become an ideal centre of learning.
        </p>
      </div>
      <div className="stack" data-reveal style={{ ['--d' as string]: '120ms' }}>
        <div className="frame" style={{ aspectRatio: '4/3' }}>
          <PhotoImg id="5621d972-338f-4f5b-891f-03043ffb62bb" size="full" alt="Students gathered for an assembly at Lakshaya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="grid grid-2">
          <div className="card">
            <strong className="display" style={{ fontSize: '2.2rem', fontWeight: 800 }}>2 acres</strong>
            <p className="muted">of campus</p>
          </div>
          <div className="card navy">
            <strong className="display" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold)' }}>35 years</strong>
            <p>of group lineage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Welcome() {
  return (
    <div className="two-col">
      <article className="card" style={{ padding: 'clamp(28px,5vw,56px)' }} data-reveal>
        <span className="eyebrow">Welcome to Lakshaya</span>
        <div className="prose" style={{ marginTop: 22 }}>
          <p className="lead" style={{ color: 'var(--navy)', fontWeight: 600 }}>
            Dear Parent,
          </p>
          <p>Thank you for considering Lakshaya International School for your child’s education.</p>
          <p>
            I understand how important this decision is for you as a parent when you look for the best way to open new doors and windows to your child’s
            world.
          </p>
          <p>
            Lakshaya promises to provide the best education experience with an emphasis on stimulating the all-round development of the children in a fun,
            loving and active learning environment. At Lakshaya our caring teachers will nurture and support the children’s natural love for learning at
            their own pace and inspire them to play, discover, learn and understand with wonder and confidence.
          </p>
          <p>
            At Lakshaya, each child will feel safe, secure, respected and loved in a “home away from home” environment. In such an environment children
            become confident, creative, calm, purposeful, independent and above all HAPPY. We want our children to love to come to school.
          </p>
          <p>
            We invite you to visit our school. Our team of dedicated and friendly staff will help you every step of the way and they will be able to answer
            any concerns or questions you may have.
          </p>
          <p>
            We look forward to welcoming you at our school and sharing our passion for giving our precious children the best education in their ‘golden age’
            of learning.
          </p>
        </div>
        <div className="signature">
          <span className="muted">Very sincerely,</span>
          <strong>Lakshaya Team</strong>
        </div>
      </article>
      <aside className="sticky-aside stack" data-reveal style={{ ['--d' as string]: '120ms' }}>
        <div className="frame" style={{ aspectRatio: '4/5' }}>
          <PhotoImg id="24b9e493-9643-417a-8689-df278db6bf0f" size="full" alt="A happy Lakshaya preschooler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="card navy">
          <h4>Visit our school</h4>
          <p style={{ marginTop: 8, fontSize: '0.95rem' }}>Our team will answer any questions you may have.</p>
          <Link to="/contact" className="btn gold sm" style={{ marginTop: 16 }}>
            Plan a visit <Arrow />
          </Link>
        </div>
      </aside>
    </div>
  );
}

function Motto() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '40px' }}>
      <div className="card" style={{ textAlign: 'center', padding: 'clamp(36px,6vw,72px) 24px', background: 'var(--white)' }} data-reveal>
        <span className="eyebrow">Behind the name: Aim High</span>
        <p className="deva" lang="sa" style={{ fontSize: 'clamp(2.6rem,7vw,5rem)', color: 'var(--red)', lineHeight: 1.25, marginTop: 20 }}>
          “{SCHOOL.mottoSanskrit}”
        </p>
        <p style={{ marginTop: 10, fontWeight: 600, color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          {SCHOOL.mottoTransliteration}
        </p>
        <p className="display" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, marginTop: 16 }}>
          Knowledge is the Supreme Goal.
        </p>
      </div>
      <div className="split" style={{ alignItems: 'start' }}>
        <div className="prose" data-reveal>
          <p className="lead">The School’s motto is a Sanskrit phrase meaning “Knowledge is the Supreme Goal.”</p>
          <p>
            The motto signifies the school’s quest to be an institution where knowledge is revered. Knowledge empowers, liberates and awakes us. Knowledge
            forms the basis for all imagination, realization and action that helps us to progress and move forward.
          </p>
          <p>
            Both the teachers and students at Lakshaya will strive continuously to acquire new knowledge and expand their horizons and internalize the zeal
            for life-long learning.
          </p>
        </div>
        <div className="grid grid-3" data-reveal style={{ ['--d' as string]: '120ms' }}>
          {['Empowers', 'Liberates', 'Awakes'].map((w, i) => (
            <div key={w} className={`card ${i === 1 ? 'red' : 'navy'}`} style={{ textAlign: 'center', padding: '28px 12px' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.8 }}>Knowledge</p>
              <h3 style={{ marginTop: 8, fontFamily: 'var(--display)' }}>{w}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const BELIEF_ICONS = [Sparkles, UserRound, Lightbulb, Heart];

function Beliefs() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '36px' }}>
      <div data-reveal>
        <span className="eyebrow">We believe…</span>
        <h2 style={{ marginTop: 14 }}>Putting children first</h2>
        <span className="rule" />
      </div>
      <div className="grid grid-2">
        {BELIEFS.map((b, i) => {
          const Icon = BELIEF_ICONS[i];
          return (
            <article key={b.title} className={`card hover${i === 0 ? ' navy' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
              <span className="icon-badge">
                <Icon />
              </span>
              <h3 style={{ marginTop: 18 }}>{b.title}</h3>
              <p style={{ marginTop: 10 }}>{b.text}</p>
            </article>
          );
        })}
      </div>
      <p className="display" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 800, textAlign: 'center' }} data-reveal>
        We believe in <span style={{ color: 'var(--red)' }}>putting children first</span> and we will give our children the best.
      </p>
    </div>
  );
}

function Meaning() {
  return (
    <div className="split">
      <div data-reveal>
        <p className="deva" lang="sa" style={{ fontSize: 'clamp(4rem,12vw,8rem)', color: 'var(--navy)', lineHeight: 1 }}>
          लक्ष्य
        </p>
        <p className="display" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: 14 }}>
          Lakshaya <span style={{ color: 'var(--red)' }}>/ aim · objective /</span>
        </p>
      </div>
      <div className="prose" data-reveal style={{ ['--d' as string]: '120ms' }}>
        <span className="eyebrow">The founding of Lakshaya</span>
        <p className="lead">“Lakshaya” is originally a Sanskrit word meaning “aim” or “objective”.</p>
        <p>
          The origin of Lakshaya International School lies in the guiding aim of the founders to become an active partner in providing the highest quality
          of education to our young and future generations and positively impacting our children, society and community.
        </p>
        <p>
          At Lakshaya we envision that the passion for aiming high should also be integral to each one of our students. Each one of our students should
          have ever-expanding goals for personal and social development and strive to reach and exceed them.
        </p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '40px' }}>
      <div className="split">
        <div className="card" style={{ display: 'grid', placeItems: 'center', padding: 'clamp(32px,6vw,64px)' }} data-reveal>
          <img src="/brand/crest.png" alt="The Lakshaya International School crest" width={298} height={285} style={{ width: 'min(280px, 70%)' }} />
        </div>
        <div className="prose" data-reveal style={{ ['--d' as string]: '120ms' }}>
          <p className="lead">
            Our logo epitomizes our aim to provide a nurturing environment for our children to enable them to reach their full potential.
          </p>
          <p>
            At Lakshaya we assure that the understandings of the heart are addressed as well as the understandings of the head. The school provides the
            right platform for the child to scale the heights of success.
          </p>
          <p>
            The bright and happy colours of our logo are a powerful, distinguishing feature of our identity. These vibrant and lustrous colours represent how
            we help our children to paint their future bright.
          </p>
        </div>
      </div>
      <div className="color-swatches">
        <div className="swatch" style={{ background: 'var(--red)' }} data-reveal>
          <h3>Red</h3>
          <p>A strong dynamic colour which represents our energy, activity and strength.</p>
        </div>
        <div className="swatch" style={{ background: 'var(--navy)', ['--d' as string]: '80ms' }} data-reveal>
          <h3>Blue</h3>
          <p>The cool calming colour of creativity, intelligence and wisdom.</p>
        </div>
      </div>
    </div>
  );
}

function Founder() {
  return (
    <div className="split" style={{ alignItems: 'start' }}>
      <div className="prose" data-reveal>
        <p className="lead">
          Lakshaya International School is an initiative of the “Agrawal Group” based at Ahmedabad. The group is a well known Realty Developer Group and has
          completed a number of successful commercial and residential projects in the city.
        </p>
        <p>
          The group is also in the entertainment business running “City Gold” multiplexes which provide all the facilities of a perfect entertainment
          destination. The group is also running a health care project, “Medilink Hospital” at Satellite, Ahmedabad, to render healthcare services to
          society.
        </p>
        <p>
          The “Agrawal Group” has a rich lineage of 35 years and has evolved over the years an encompassing culture of social responsibility with many
          philanthropic efforts. The trusteeship of Rajasthan Hospital and Maharaja Agrasen Vidhyalaya are initiatives in that direction.
        </p>
        <p>
          Education is a major thrust area through which the founders aim to make a positive and real contribution to our society and the founding of
          “Lakshaya” takes forward that dream.
        </p>
      </div>
      <div className="grid grid-2" data-reveal style={{ ['--d' as string]: '120ms' }}>
        {[
          ['Real Estate', 'Commercial & residential projects'],
          ['Entertainment', 'City Gold Multiplexes'],
          ['Health Care', 'Medilink Hospital, Satellite'],
          ['Philanthropy', 'Rajasthan Hospital · Maharaja Agrasen Vidhyalaya'],
        ].map(([t, d], i) => (
          <div key={t} className={`card${i === 3 ? ' red' : i === 0 ? ' navy' : ''}`}>
            <h4>{t}</h4>
            <p style={{ marginTop: 6, fontSize: '0.92rem' }}>{d}</p>
          </div>
        ))}
        <div className="card" style={{ gridColumn: '1 / -1', background: 'var(--parchment-2)' }}>
          <p className="display" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
            Education — <span style={{ color: 'var(--red)' }}>the major thrust area.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const PAGES: Record<string, { title: string; lead?: string; hero?: string; body: () => ReactElement }> = {
  '/about': { title: 'Overview', lead: 'A new age co-educational school in Ahmedabad — an abode of learning and a centre of wisdom.', body: Overview },
  '/about/welcome': { title: 'Welcome Address', lead: 'A note to every parent considering Lakshaya for their child.', body: Welcome },
  '/about/motto': { title: 'Our Motto', lead: 'Jnanam Paramam Dhyeyam — Knowledge is the supreme goal.', body: Motto },
  '/about/beliefs': { title: 'Our Beliefs', lead: 'Every child is born potentially gifted.', body: Beliefs, hero: '97b46efd-8faf-4242-856e-ce3304128cf8' },
  '/about/meaning': { title: "Meaning of 'Lakshaya'", lead: 'A Sanskrit word meaning “aim” or “objective”.', body: Meaning },
  '/about/logo': { title: 'Our Logo', lead: 'The understandings of the heart, as well as the understandings of the head.', body: Logo },
  '/about/founder': { title: 'Founder', lead: 'An initiative of the Agrawal Group, Ahmedabad.', body: Founder },
};

export const ABOUT_PATHS = Object.keys(PAGES);

export function AboutPage({ path }: { path: string }) {
  const page = PAGES[path];
  const Body = page.body;
  return (
    <PageShell group="Lakshaya" title={page.title} lead={page.lead} siblings={SIBLINGS} path={path} heroImage={page.hero}>
      <Body />
    </PageShell>
  );
}
