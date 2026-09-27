import { useState, type ReactElement } from 'react';
import { Brain, Hand, Layers, Plus, Sparkles } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { PhotoMasonry } from '../components/ui';
import { INTELLIGENCES, NAV, RESEARCHED } from '../data/content';
import { PAGE_IMAGES } from '../data/generated';

const SIBLINGS = NAV.find((g) => g.label === 'Curriculum')!.items!;

function Objectives() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '48px' }}>
      <blockquote className="quote" data-reveal style={{ fontSize: 'clamp(1.3rem,2.6vw,1.8rem)', fontFamily: 'var(--display)', fontWeight: 700 }}>
        “A well formed mind is better than just a well filled one.”
      </blockquote>
      <div className="split" style={{ alignItems: 'start' }}>
        <div className="prose" data-reveal>
          <p className="lead">The “Lakshaya programme” is developmentally focused, and at its core is the developmental stage and need of every child.</p>
          <p>The programme at “Lakshaya” is integrated from the best of international and contemporary practices.</p>
          <p>
            The curriculum focuses on igniting curiosity and nurturing the desire to inquire, inculcate, and develop the craft of logical reasoning — in the
            process, helping children retain for the rest of their lives their innate and congenital thirst for knowledge.
          </p>
        </div>
        <div className="stack" data-reveal style={{ ['--d' as string]: '120ms' }}>
          <div className="card navy">
            <span className="eyebrow light">The objectives</span>
            <p style={{ marginTop: 10 }}>The following are the broad objectives of the Lakshaya Programme:</p>
            <ul className="checklist" style={{ marginTop: 18 }}>
              <li>A focus on holistic development through activities facilitating cognitive, emotional, social and physical development.</li>
              <li>Emphasis on hands-on experience for children along with field trips, special days, culminating activities and learning through exploration.</li>
            </ul>
          </div>
          <div className="card">
            <span className="eyebrow">Curriculum framework</span>
            <p style={{ marginTop: 10 }}>
              The curriculum for each year is divided into themes. Each curriculum theme offers a wonderful spectrum of lesson plans, activities and
              worksheets for the teacher to implement in the class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const RESEARCH_ICONS = [Hand, Brain, Layers, Sparkles];

function Researched() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '48px' }}>
      <div className="split" style={{ alignItems: 'start' }}>
        <div data-reveal>
          <span className="eyebrow">Our scientific curriculum</span>
          <h2 style={{ marginTop: 14 }}>A solid foundation for lifelong learning</h2>
          <span className="rule" />
        </div>
        <div className="prose" data-reveal style={{ ['--d' as string]: '100ms' }}>
          <p className="lead">
            At Lakshaya we have developed a unique, new age scientific curriculum called the “Lakshaya Programme” for children aged 3 years and above. It
            provides our children with a solid foundation for learning and helps them realize their full potential as intelligent, creative and whole
            persons.
          </p>
          <p>
            It has been carefully designed by a highly experienced and qualified research team of early childhood professionals and is based on the use of
            scientific research on early brain development and learning, child psychology as well as extensive research into the best preschool practices
            around the world. The curriculum is an evolving one apart from being developmentally-appropriate. It will be constantly updated as well as
            moulded to suit the specific requirements of our children.
          </p>
        </div>
      </div>
      <div data-reveal>
        <h3>Philosophies and approaches we follow</h3>
        <div className="tag-cloud" style={{ marginTop: 16 }}>
          {[
            'Dr. Howard Gardner’s Theory of Multiple Intelligences',
            'Maria Montessori’s Montessori Method',
            'Friedrich Froebel’s Play Way Method',
            'The Reggio Emilia Approach',
            'Rudolf Steiner’s Head-Heart-Hands Approach',
            'Theme-Based Model',
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-2">
        {RESEARCHED.map((r, i) => {
          const Icon = RESEARCH_ICONS[i];
          return (
            <article key={r.title} className="card hover" data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
              <span className="icon-badge">
                <Icon />
              </span>
              <h3 style={{ marginTop: 18 }}>{r.title}</h3>
              <p style={{ marginTop: 10 }}>{r.text}</p>
            </article>
          );
        })}
      </div>
      <div className="card navy" style={{ padding: 'clamp(28px,5vw,56px)' }} data-reveal>
        <div className="split">
          <div>
            <span className="eyebrow light">“Larger brain use culture”</span>
            <p className="display" style={{ color: 'var(--white)', fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, marginTop: 14 }}>
              100 billion+
            </p>
            <p style={{ marginTop: 6 }}>brain cells, or neurons, a child is born with.</p>
          </div>
          <div className="prose">
            <p>Learning occurs as more and stronger connections are made between the neurons.</p>
            <p>
              The early years are a crucial period in which connections or linkages are made between the neurons and the neural networks are forged. These
              connections or pathways are formed by the experiences and thoughts that we give to our children. A stimulated brain develops a rich network of
              neural pathways to permit complex thinking while an unstimulated brain has fewer pathways to develop thought.
            </p>
            <p>
              At Lakshaya, combining multi-sensory experiences with multi-modal teaching approaches provides powerful stimuli to the brain, enhancing the
              child’s capacity to learn and expanding the child’s future proficiencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Areas() {
  const [open, setOpen] = useState(0);
  return (
    <div className="two-col">
      <div>
        <div data-reveal>
          <span className="eyebrow">Areas of development</span>
          <h2 style={{ marginTop: 14 }}>Enhancing the whole constellation of intelligences</h2>
          <span className="rule" />
        </div>
        <div className="accordion" style={{ marginTop: 32 }}>
          {INTELLIGENCES.map((it, i) => (
            <div key={it.title} className={`acc${open === i ? ' open' : ''}`} data-reveal>
              <button type="button" aria-expanded={open === i} aria-controls={`acc-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <strong>{it.title}</strong>
                <Plus aria-hidden="true" />
              </button>
              <div className="acc-body" id={`acc-${i}`} role="region">
                <div>
                  <div className="prose">
                    {it.text.map((p, j) => {
                      const [head, ...rest] = p.split(' — ');
                      return rest.length ? (
                        <p key={j}>
                          <strong>{head}</strong> — {rest.join(' — ')}
                        </p>
                      ) : (
                        <p key={j}>{p}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="sticky-aside" data-reveal style={{ ['--d' as string]: '120ms' }}>
        <div className="card red">
          <span className="eyebrow light" style={{ color: 'var(--white)' }}>
            A tailored approach
          </span>
          <p style={{ marginTop: 14 }}>
            At Lakshaya, we recognize that not all children are the same. To this extent we will apply a focus on seeking out areas where any of our
            individual children require additional learning assistance or conversely show particular talent in any given area.
          </p>
          <p style={{ marginTop: 12 }}>
            Encouragement and further individually tailored plans will ensure our children are provided with optimal conditions to be the stars they
            undoubtedly have the natural birthright to be.
          </p>
        </div>
      </aside>
    </div>
  );
}

function BeyondLessons() {
  return (
    <div className="stack" style={{ ['--gap' as string]: '32px' }}>
      <p className="lead" data-reveal>
        Hands-on experiences, field trips, special days and culminating activities — learning at Lakshaya happens well beyond the classroom.
      </p>
      <PhotoMasonry images={PAGE_IMAGES.beyondLessons} title="Learning Beyond Lessons" />
    </div>
  );
}

const PAGES: Record<string, { title: string; lead: string; body: () => ReactElement; hero?: string }> = {
  '/curriculum/objectives': { title: 'Objectives & Framework', lead: 'Developmentally focused — the developmental stage and need of every child at its core.', body: Objectives, hero: '33ba0271-a370-4576-b7cc-f5d6fd06d5fd' },
  '/curriculum/researched-curriculum': { title: 'Researched Curriculum', lead: 'The Lakshaya Programme — built on research into early brain development.', body: Researched },
  '/curriculum/areas-of-development': { title: 'Areas of Development', lead: 'Nurturing every kind of intelligence a child is born with.', body: Areas },
  '/curriculum/learning-beyond-lessons': { title: 'Learning Beyond Lessons', lead: 'Explore, discover and learn by doing.', body: BeyondLessons },
};

export const CURRICULUM_PATHS = Object.keys(PAGES);

export function CurriculumPage({ path }: { path: string }) {
  const page = PAGES[path];
  const Body = page.body;
  return (
    <PageShell group="Curriculum" title={page.title} lead={page.lead} siblings={SIBLINGS} path={path} heroImage={page.hero}>
      <Body />
    </PageShell>
  );
}

