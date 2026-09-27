import { useMemo } from 'react';
import { ArrowUpRight, CalendarDays, Download, Eye, Flag, Play, Target } from 'lucide-react';
import { Link } from '../router';
import { DISCLOSURE_DOCS, FOCUS, HIGHLIGHT_EVENTS, MISSION, NEWS, PROGRAMS, SCHOOL, VISION } from '../data/content';
import { ALBUMS, FACULTY, PAGE_IMAGES } from '../data/generated';
import { PhotoImg } from '../components/media';
import { Lightbox } from '../components/Overlay';
import { Calendar } from '../components/Calendar';
import { Arrow, CtaBand, SectionHead, VideoCard, useLightbox, useSiteUi } from '../components/ui';
import { usePageTitle } from '../components/PageShell';

const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Hero() {
  const { openVideo } = useSiteUi();
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div data-reveal>
            <Link to="/admissions" className="pill-live">
              <span className="dot" /> Admissions open for academic year {SCHOOL.admissionsYear}
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <h1 data-reveal style={{ ['--d' as string]: '80ms' }}>
            Where every child learns to <em>aim high.</em>
          </h1>
          <div className="hero-motto" data-reveal style={{ ['--d' as string]: '140ms' }}>
            <span className="deva" lang="sa">
              {SCHOOL.mottoSanskrit}
            </span>
            <small>“{SCHOOL.mottoEnglish}”</small>
          </div>
          <p className="lead" data-reveal style={{ ['--d' as string]: '200ms' }}>
            Lakshaya International School is a new age co-educational school in Ahmedabad — integrating the best hi-tech education with relevant value
            systems, so that each child can lead a happy, fulfilling life.
          </p>
          <div className="hero-actions" data-reveal style={{ ['--d' as string]: '260ms' }}>
            <Link to="/admissions/inquiry" className="btn red">
              Admission inquiry <Arrow />
            </Link>
            <button type="button" className="btn ghost" onClick={openVideo}>
              <Play /> Watch school video
            </button>
          </div>
          <div className="hero-facts" data-reveal style={{ ['--d' as string]: '320ms' }}>
            <div>
              <strong>2 acres</strong>
              <span>Earthquake resistant campus</span>
            </div>
            <div>
              <strong>Nursery–11</strong>
              <span>CBSE · Science & Commerce</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Exploratory labs</span>
            </div>
          </div>
        </div>

        <div data-reveal style={{ ['--d' as string]: '150ms', position: 'relative' }}>
          {/* Dedicated 2x crops of the sharpest campus photos (see public/media/hero) — the gallery originals are too small for this size. */}
          <div className="collage">
            <figure>
              <img src="/media/hero/hoops-on-the-lawn.webp" width={668} height={1152} alt="Nehru House girls playing with hoops on the school lawn" fetchPriority="high" />
            </figure>
            <figure>
              <img src="/media/hero/christmas-party.webp" width={600} height={631} alt="Children at the Christmas pajama party" />
            </figure>
            <figure>
              <img src="/media/hero/hurdle-race.webp" width={600} height={631} alt="A hurdle race on the lawn" />
            </figure>
          </div>
          <div className="crest-badge">
            <img src="/brand/crest.png" alt="" />
            <div>
              <strong>Award</strong>
              <span>{SCHOOL.award}</span>
            </div>
          </div>
          <div className="motto-badge" aria-hidden="true">
            <svg viewBox="0 0 112 112">
              <defs>
                <path id="ring" d="M56,56 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
              </defs>
              <text fill="currentColor" fontSize="9.5" fontWeight="700" letterSpacing="2.9" fontFamily="Inter, sans-serif">
                <textPath href="#ring">AIM HIGH · GHYAN PARAMAM DHYEYAM ·</textPath>
              </text>
            </svg>
            <img src="/brand/crest-reversed.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoRibbon() {
  const images = PAGE_IMAGES.home;
  const lb = useLightbox();
  return (
    <section aria-label="Campus life photos" style={{ paddingBottom: 'clamp(40px,6vw,72px)' }}>
      <div className="ribbon">
        <div className="ribbon-track">
          {[...images, ...images].map((id, i) => (
            <button
              key={`${id}-${i}`}
              type="button"
              onClick={() => lb.setIndex(i % images.length)}
              aria-label={`Open campus photo ${(i % images.length) + 1}`}
              tabIndex={i >= images.length ? -1 : 0}
              aria-hidden={i >= images.length || undefined}
            >
              <PhotoImg id={id} alt="" />
            </button>
          ))}
        </div>
      </div>
      <Lightbox images={images} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} title="Campus life" />
    </section>
  );
}

function Statements() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <SectionHead eyebrow="Who we are" title="Vision, mission and motto" />
        <div className="grid grid-3">
          <article className="card navy statement" data-reveal>
            <img className="watermark" src="/brand/crest-reversed.png" alt="" />
            <span className="icon-badge">
              <Eye />
            </span>
            <h3>Vision</h3>
            <p>{VISION}</p>
          </article>
          <article className="card red statement" data-reveal style={{ ['--d' as string]: '80ms' }}>
            <span className="icon-badge">
              <Flag />
            </span>
            <h3>Mission</h3>
            <p>{MISSION}</p>
          </article>
          <article className="card statement motto" data-reveal style={{ ['--d' as string]: '160ms' }}>
            <span className="icon-badge">
              <Target />
            </span>
            <h3>Motto</h3>
            <span className="deva" lang="sa">
              {SCHOOL.mottoSanskrit}
            </span>
            <p>
              A Sanskrit phrase meaning <strong style={{ color: 'var(--navy)' }}>“Knowledge is the supreme goal.”</strong>
            </p>
            <Link to="/about/motto" className="text-link" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
              Behind the name: Aim High <Arrow />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <div className="wrap split">
        <div data-reveal>
          <span className="eyebrow">About Lakshaya</span>
          <h2 style={{ marginTop: 14 }}>An abode of learning — and a centre of wisdom</h2>
          <span className="rule" />
          <div className="prose" style={{ marginTop: 26 }}>
            <p>
              Lakshaya International School is an educational initiative of the <strong>Agrawal Group of Companies</strong>, engaged in Real Estate,
              Entertainment (City Gold Multiplexes) and Health Care (Medilink Hospital). The group has a rich lineage of 35 years and “Lakshaya” is the
              major thrust area through which it aims at making a positive and real contribution to society.
            </p>
            <p>
              The foundation of learning at Lakshaya is its unique holistic approach — integrating the best hi-tech education with relevant value systems
              to become an ideal centre of learning.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
            <Link to="/about" className="btn">
              Read the overview <Arrow />
            </Link>
            <Link to="/about/welcome" className="btn ghost">
              Welcome address
            </Link>
          </div>
        </div>
        <div className="frame-stack" data-reveal style={{ ['--d' as string]: '120ms' }}>
          <div className="frame">
            <PhotoImg id="5621d972-338f-4f5b-891f-03043ffb62bb" size="full" alt="Students gathered for an assembly at Lakshaya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 'clamp(48px,6vw,80px)' }}>
        <div className="stats" data-reveal>
          <div>
            <strong>
              2<sup>acres</sup>
            </strong>
            <span>Green, secure campus on S.P. Ring Road</span>
          </div>
          <div>
            <strong>
              35<sup>yrs</sup>
            </strong>
            <span>Lineage of the Agrawal Group</span>
          </div>
          <div>
            <strong>{FACULTY.length}</strong>
            <span>Qualified faculty & staff</span>
          </div>
          <div>
            <strong>
              4<sup>+8</sup>
            </strong>
            <span>Houses and clubs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="section bg-parchment-2">
      <div className="wrap">
        <SectionHead
          eyebrow="Programs offered"
          title="From the first steps to Grade 11"
          intro="The child should have the minimum age completed as on 1st June of the respective academic year."
          action={
            <Link to="/admissions" className="text-link">
              Admission details <Arrow />
            </Link>
          }
        />
        <div className="grid grid-4">
          {PROGRAMS.map((p, i) => (
            <article key={p.name} className={`card hover program${i === 3 ? ' featured' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
              <span className="step">0{i + 1}</span>
              <span className={`chip${i === 3 ? ' gold' : ''}`} style={{ alignSelf: 'flex-start' }}>
                {i === 3 ? 'CBSE' : 'Pre-primary'}
              </span>
              <h3>{p.name}</h3>
              <p style={{ fontSize: '0.95rem' }}>{p.grade}</p>
              <div className="age">
                <strong>{p.age.split(' (')[0]}</strong>
                <span>{i === 3 ? 'for Grade 1, and so on' : 'minimum age'}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusOn() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow="Focus on" title="Life at Lakshaya" intro="Classroom teaching, though important, is only the beginning." />
        <div className="bento">
          {FOCUS.map((f, i) => {
            const img = PAGE_IMAGES[f.imageKey];
            return (
              <Link key={f.slug} to={`/focus/${f.slug}`} className="tile" data-reveal style={{ ['--d' as string]: `${(i % 4) * 60}ms` }}>
                <PhotoImg id={img[0]} size={i === 0 || i === 7 ? 'full' : 'thumb'} alt="" />
                <span className="arrow-circle" aria-hidden="true">
                  <ArrowUpRight />
                </span>
                <h3>{f.title}</h3>
                <p>{f.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewsAndCalendar() {
  const calendarPdf = DISCLOSURE_DOCS.find((d) => d.title === 'Academic Calendar')!;
  return (
    <section className="section bg-white">
      <div className="wrap two-col">
        <div>
          <SectionHead
            eyebrow="Latest news"
            title="Proud moments"
            action={
              <Link to="/achievements" className="text-link">
                All achievements <Arrow />
              </Link>
            }
          />
          <ul className="timeline scroll-box" data-reveal tabIndex={0} aria-label="Latest news">
            {NEWS.map((n, i) => {
              const d = new Date(n.date);
              return (
                <li key={i}>
                  <div className="date-block">
                    <strong>{d.getDate()}</strong>
                    <span>
                      {MONTH[d.getMonth()]} {d.getFullYear()}
                    </span>
                  </div>
                  <div>
                    <span className={`chip${n.tag === 'Award' ? ' gold' : ''}`}>{n.tag}</span>
                    <h4>{n.title}</h4>
                    <p>{n.detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <aside className="sticky-aside stack" data-reveal style={{ ['--d' as string]: '120ms' }}>
          <div className="card">
            <span className="eyebrow">Academic calendar</span>
            <div style={{ marginTop: 18 }}>
              <Calendar />
            </div>
            <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--line)' }}>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Highlight events</h4>
              {HIGHLIGHT_EVENTS.map((e) => (
                <div key={e.title} style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 12 }}>
                  <div className="date-block" style={{ width: 60 }}>
                    <strong style={{ fontSize: '1.2rem' }}>{e.day}</strong>
                    <span>{MONTH[e.month - 1]}</span>
                  </div>
                  <strong style={{ color: 'var(--navy)' }}>{e.title}</strong>
                </div>
              ))}
            </div>
            <a href={calendarPdf.href} target="_blank" rel="noopener" className="btn ghost sm" style={{ marginTop: 20, width: '100%' }}>
              <CalendarDays /> View all events
            </a>
          </div>
          <a className="card hover" href={SCHOOL.brochure} target="_blank" rel="noopener" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <span className="icon-badge">
              <Download />
            </span>
            <span>
              <strong style={{ display: 'block', color: 'var(--navy)' }}>E-Brochure</strong>
              <span className="muted" style={{ fontSize: '0.88rem' }}>
                Download the school brochure (PDF)
              </span>
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}

function LatestAlbum() {
  const latest = useMemo(() => [...ALBUMS].sort((a, b) => b.id - a.id).slice(0, 4), []);
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="Latest albums"
          title="Moments from campus"
          action={
            <Link to="/gallery" className="btn ghost">
              View gallery <Arrow />
            </Link>
          }
        />
        <div className="albums">
          {latest.map((a, i) => (
            <Link key={a.id} to={`/gallery/${a.id}`} className="album" data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
              <div className="album-cover">
                <PhotoImg id={a.cover} alt="" />
                <span className="count">{a.images.length} photo{a.images.length === 1 ? '' : 's'}</span>
              </div>
              <div className="album-body">
                <strong>{a.title}</strong>
                <span>{a.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="section bg-navy on-dark">
      <div className="wrap split">
        <div data-reveal>
          <span className="eyebrow light">Take a look</span>
          <h2 style={{ marginTop: 14 }}>See Lakshaya in motion</h2>
          <p className="lead" style={{ marginTop: 18, color: 'rgba(255,255,255,.78)' }}>
            “The most effective kind of education is that a child should play amongst lovely things.” — Plato. At Lakshaya we take pride in the friendly,
            eye catching and imagination inspiring environment that greets all of our children.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to="/facility/environment" className="btn gold">
              Explore our environment <Arrow />
            </Link>
            <a href={SCHOOL.youtube} className="btn ghost-light" target="_blank" rel="noopener noreferrer">
              Video gallery
            </a>
          </div>
        </div>
        <div data-reveal style={{ ['--d' as string]: '120ms' }}>
          <VideoCard poster="ba12e338-1ce9-40b4-b8e0-bd0630a13277" />
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  usePageTitle('Home');
  return (
    <>
      <Hero />
      <PhotoRibbon />
      <Statements />
      <About />
      <Programs />
      <FocusOn />
      <VideoSection />
      <NewsAndCalendar />
      <LatestAlbum />
      <CtaBand />
    </>
  );
}
