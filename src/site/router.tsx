import { useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from 'react';

// Minimal History-API router. Paths mirror the site map in data/content.ts;
// legacy lakshayaschool.com *.aspx URLs are redirected so old links and bookmarks keep working.

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', notify);
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const getPath = () => normalise(window.location.pathname);

function normalise(path: string) {
  const p = path.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, () => '/');
}

export function navigate(to: string, opts: { replace?: boolean } = {}) {
  const url = new URL(to, window.location.origin);
  if (opts.replace) window.history.replaceState(null, '', url);
  else window.history.pushState(null, '', url);
  notify();
  if (url.hash) {
    requestAnimationFrame(() => document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }));
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const external = /^(https?:|mailto:|tel:|#)/.test(to) || /\.(pdf)$/i.test(to);
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || external) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== '_self') return;
    e.preventDefault();
    navigate(to);
  };
  const extra = /^https?:/.test(to) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={to} onClick={handle} {...extra} {...rest}>
      {children}
    </a>
  );
}

/** Old ASP.NET page names (lower-cased) → new routes. */
const LEGACY: Record<string, string> = {
  'default.aspx': '/',
  'about.aspx': '/about',
  'trustees.aspx': '/about/welcome',
  'infrastructure.aspx': '/about/motto',
  'clasrooms.aspx': '/about/beliefs',
  'library.aspx': '/about/meaning',
  'computerlab.aspx': '/about/logo',
  'sciencelab.aspx': '/about/founder',
  'generalpolicy.aspx': '/policies/general',
  'transportrule.aspx': '/policies/transport',
  'disciplinepolicy.aspx': '/policies/discipline',
  'houseandclubdetails.aspx': '/policies/houses-and-clubs',
  'codeofconduct.aspx': '/policies/code-of-conduct',
  'uniformdetails.aspx': '/policies/uniform',
  'innovation.aspx': '/curriculum/objectives',
  'kidssky.aspx': '/curriculum/researched-curriculum',
  'teachingpattern.aspx': '/curriculum/areas-of-development',
  'evaluationsystem.aspx': '/curriculum/learning-beyond-lessons',
  'co-curricular.aspx': '/people/advisory',
  'indoor.aspx': '/people/faculty',
  'eligibility.aspx': '/people/parent-teacher-interactions',
  'onlineenquiry.aspx': '/people/parent-events',
  'feestructure.aspx': '/people/parent-workshops',
  'neptune.aspx': '/people/parent-portal',
  'jupiter.aspx': '/facility/environment',
  'mathsquare.aspx': '/facility/counselling',
  'sciencecircle.aspx': '/facility/amenities',
  'canteen.aspx': '/admissions',
  'achievements.aspx': '/achievements',
  'albumgallery.aspx': '/gallery',
  'mandatorypublicdisclosure.aspx': '/mandatory-public-disclosure',
  'contact.aspx': '/contact',
  'viewachievement.aspx': '/updates/activity-schedule',
  'viewrules.aspx': '/updates/circulars',
  'viewcareers.aspx': '/updates/careers',
  'viewresults.aspx': '/updates/results',
  'viewfoodmenu.aspx': '/updates/food-menu',
  'leavingcertificate.aspx': '/updates/leaving-certificate',
  'assembly.aspx': '/focus/earthquake-resistant-campus',
  'weeklyperformance.aspx': '/focus/curriculum-focus',
  'festivals.aspx': '/focus/beyond-text-book',
  'spandan.aspx': '/focus/developmental-pentagon',
  'urhonour.aspx': '/focus/field-trips',
  'permanentprojects.aspx': '/focus/festivals',
  'toursexcursion.aspx': '/focus/art-exhibition',
  'socialconcern.aspx': '/focus/sports-activities',
};

/** Returns the new path for a legacy URL, or null when the path is not a legacy one. */
export function legacyRedirect(pathname: string, search: string): string | null {
  const last = pathname.split('/').pop()?.toLowerCase() ?? '';
  if (last === 'photogallery.aspx') {
    const id = new URLSearchParams(search).get('AlbumID');
    return id ? `/gallery/${id}` : '/gallery';
  }
  if (pathname.toLowerCase().includes('/admission/index.php/inquiryform')) return '/admissions/inquiry';
  return LEGACY[last] ?? null;
}
