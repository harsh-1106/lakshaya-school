import { Fragment, useEffect, useLayoutEffect, useMemo, useState, type ReactElement } from 'react';
import { ArrowUp } from 'lucide-react';
import './site.css';
import { Link, legacyRedirect, navigate, usePath } from './router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FastFacts } from './components/FastFacts';
import { VideoDialog } from './components/Overlay';
import { SiteUiContext } from './components/ui';
import { HomePage } from './pages/Home';
import { ABOUT_PATHS, AboutPage } from './pages/About';
import { CURRICULUM_PATHS, CurriculumPage } from './pages/Curriculum';
import { PEOPLE_PATHS, PeoplePage } from './pages/People';
import { FACILITY_PATHS, FacilityPage } from './pages/Facility';
import { POLICY_PATHS, PolicyPage } from './pages/Policies';
import { AdmissionsPage } from './pages/Admissions';
import { InquiryPage } from './pages/Inquiry';
import { AchievementsPage } from './pages/Achievements';
import { AlbumPage, GalleryPage, albumExists } from './pages/Gallery';
import { DisclosurePage } from './pages/Disclosure';
import { ContactPage } from './pages/Contact';
import { UPDATE_PATHS, UpdatesPage } from './pages/Updates';
import { FOCUS_PATHS, FocusPage } from './pages/Focus';
import { NotFoundPage } from './pages/NotFound';
import { ALUMNI_PATHS, AlumniPage } from './pages/Alumni';

function route(path: string): ReactElement {
  if (path === '/') return <HomePage />;
  if (ABOUT_PATHS.includes(path)) return <AboutPage path={path} />;
  if (CURRICULUM_PATHS.includes(path)) return <CurriculumPage path={path} />;
  if (PEOPLE_PATHS.includes(path)) return <PeoplePage path={path} />;
  if (FACILITY_PATHS.includes(path)) return <FacilityPage path={path} />;
  if (POLICY_PATHS.includes(path)) return <PolicyPage path={path} />;
  if (UPDATE_PATHS.includes(path)) return <UpdatesPage path={path} />;
  if (FOCUS_PATHS.includes(path)) return <FocusPage path={path} />;
  if (ALUMNI_PATHS.includes(path)) return <AlumniPage path={path} />;
  switch (path) {
    case '/admissions':
      return <AdmissionsPage />;
    case '/admissions/inquiry':
      return <InquiryPage />;
    case '/achievements':
      return <AchievementsPage />;
    case '/gallery':
      return <GalleryPage />;
    case '/mandatory-public-disclosure':
      return <DisclosurePage />;
    case '/contact':
      return <ContactPage />;
  }
  const album = path.match(/^\/gallery\/(\d+)$/);
  if (album && albumExists(Number(album[1]))) return <AlbumPage id={Number(album[1])} />;
  return <NotFoundPage />;
}

/** Fades sections in as they scroll into view; re-scans whenever the route changes. */
function useReveal(key: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.lis [data-reveal]:not(.in)');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    // Content added later on the same route (tabs, filters, accordions) is revealed immediately.
    const mo = new MutationObserver(() => document.querySelectorAll<HTMLElement>('.lis [data-reveal]:not(.in)').forEach((el) => io.observe(el)));
    mo.observe(document.querySelector('.lis main') ?? document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [key]);
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className="fab">
      <button type="button" className={`to-top${show ? '' : ' hidden'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" tabIndex={show ? 0 : -1}>
        <ArrowUp />
      </button>
      <Link to="/admissions/inquiry" className="btn red sm inquire-fab">
        Admission inquiry
      </Link>
    </div>
  );
}

export function SiteApp() {
  const path = usePath();
  const [facts, setFacts] = useState(false);
  const [video, setVideo] = useState(false);
  const ui = useMemo(() => ({ openFacts: () => setFacts(true), openVideo: () => setVideo(true) }), []);

  // Old lakshayaschool.com URLs (e.g. /About.aspx) land on their new pages.
  useLayoutEffect(() => {
    const to = legacyRedirect(window.location.pathname, window.location.search);
    if (to) navigate(to, { replace: true });
  }, [path]);

  useReveal(path);

  return (
    <SiteUiContext.Provider value={ui}>
      <div className="lis">
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
          <Fragment key={path}>{route(path)}</Fragment>
        </main>
        <Footer />
        <BackToTop />
        <FastFacts open={facts} onClose={() => setFacts(false)} />
        <VideoDialog open={video} onClose={() => setVideo(false)} />
      </div>
    </SiteUiContext.Provider>
  );
}
