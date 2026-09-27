import { Link } from '../router';
import { usePageTitle } from '../components/PageShell';
import { QUICK_LINKS } from '../data/content';

export function NotFoundPage() {
  usePageTitle('Page not found');
  return (
    <section className="wrap notfound">
      <p className="big" aria-hidden="true">
        4<span>0</span>4
      </p>
      <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>This page could not be found</h1>
      <p className="lead">The page may have moved in our new website. Try one of these instead:</p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/admissions" className="btn red">
          Admissions
        </Link>
        {QUICK_LINKS.slice(0, 3).map((q) => (
          <Link key={q.to} to={q.to} className="btn ghost">
            {q.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
