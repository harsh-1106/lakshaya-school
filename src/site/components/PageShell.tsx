import { useEffect, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from '../router';
import type { NavItem } from '../data/content';
import { PhotoImg } from './media';
import { CtaBand } from './ui';

export interface PageMeta {
  group: string;
  title: string;
  /** Optional display headline; defaults to the title (which is still used for breadcrumbs and the tab title). */
  heading?: ReactNode;
  lead?: ReactNode;
  /** Sibling pages shown as tabs and used for previous/next links. */
  siblings?: NavItem[];
  path: string;
  heroImage?: string;
  /** Hide the admissions call-to-action band (e.g. on the admissions pages themselves). */
  noCta?: boolean;
  children: ReactNode;
}

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title === 'Home' ? 'Lakshaya International School, Ahmedabad' : `${title} | Lakshaya International School`;
  }, [title]);
}

export function PageShell({ group, title, heading, lead, siblings, path, heroImage, noCta, children }: PageMeta) {
  usePageTitle(title);
  const internal = siblings?.filter((s) => s.to.startsWith('/')) ?? [];
  const at = internal.findIndex((s) => s.to === path);
  const prev = at > 0 ? internal[at - 1] : null;
  const next = at >= 0 && at < internal.length - 1 ? internal[at + 1] : null;

  return (
    <>
      <header className="page-hero">
        <img className="crest-watermark" src="/brand/crest-reversed.png" alt="" aria-hidden="true" />
        <div className="wrap">
          <div className={heroImage ? 'page-hero-split' : undefined}>
            <div>
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <ChevronRight aria-hidden="true" />
                <span>{group}</span>
                {group !== title && (
                  <>
                    <ChevronRight aria-hidden="true" />
                    <span aria-current="page">{title}</span>
                  </>
                )}
              </nav>
              <span className="eyebrow light">{group}</span>
              <h1>{heading ?? title}</h1>
              {lead && <p className="lead">{lead}</p>}
            </div>
            {heroImage && (
              <div className="frame">
                <PhotoImg id={heroImage} size="full" alt="" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>
        </div>
      </header>

      {internal.length > 1 && (
        <nav className="subnav" aria-label={`${group} pages`}>
          <div className="wrap">
            {internal.map((s) => (
              <Link key={s.to} to={s.to} className={s.to === path ? 'active' : undefined} aria-current={s.to === path ? 'page' : undefined}>
                {s.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className="section">
        <div className="wrap">{children}</div>
      </div>

      {(prev || next) && (
        <div className="wrap" style={{ paddingBottom: 24 }}>
          <nav className="pager" aria-label="Previous and next page">
            {prev && (
              <Link to={prev.to}>
                <small>
                  <ArrowLeft /> Previous
                </small>
                <strong>{prev.label}</strong>
              </Link>
            )}
            {next && (
              <Link to={next.to} className="next">
                <small>
                  Next <ArrowRight />
                </small>
                <strong>{next.label}</strong>
              </Link>
            )}
          </nav>
        </div>
      )}

      {!noCta && <CtaBand />}
    </>
  );
}
