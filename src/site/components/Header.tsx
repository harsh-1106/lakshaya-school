import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, FileText, GraduationCap, LayoutGrid, Mail, MapPin, Menu, Phone, Sparkles, Trophy, X } from 'lucide-react';
import { Link, usePath } from '../router';
import { NAV, QUICK_LINKS, SCHOOL, type NavGroup } from '../data/content';
import { Arrow, useSiteUi } from './ui';

const isActive = (group: NavGroup, path: string) =>
  group.to === path || (group.items ?? []).some((i) => i.to === path || (i.to.length > 1 && path.startsWith(i.to + '/'))) || (group.to !== '/' && path.startsWith(group.to.split('/').slice(0, 2).join('/') + '/'));

type DockPanel = 'links' | 'contact' | null;

/** Quick-access dock on the right edge (desktop): E-Brochure, Fast Facts, Quick Links and Contact. */
function QuickDock() {
  const { openFacts } = useSiteUi();
  const [panel, setPanel] = useState<DockPanel>(null);
  const ref = useRef<HTMLDivElement>(null);
  const path = usePath();

  useEffect(() => setPanel(null), [path]);
  useEffect(() => {
    if (!panel) return;
    const off = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setPanel(null);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setPanel(null);
    document.addEventListener('mousedown', off);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', off);
      document.removeEventListener('keydown', esc);
    };
  }, [panel]);

  const toggle = (p: DockPanel) => setPanel((cur) => (cur === p ? null : p));

  return (
    <div className="dock" ref={ref} aria-label="Quick access">
      <a href={SCHOOL.brochure} target="_blank" rel="noopener" className="dock-btn red">
        <FileText aria-hidden="true" /> <span>E-Brochure</span>
      </a>
      <button type="button" className="dock-btn" onClick={openFacts}>
        <Sparkles aria-hidden="true" /> <span>Fast Facts</span>
      </button>
      <button type="button" className={`dock-btn${panel === 'links' ? ' open' : ''}`} aria-expanded={panel === 'links'} aria-haspopup="true" onClick={() => toggle('links')}>
        <LayoutGrid aria-hidden="true" /> <span>Quick Links</span>
      </button>
      <button type="button" className={`dock-btn${panel === 'contact' ? ' open' : ''}`} aria-expanded={panel === 'contact'} aria-haspopup="true" onClick={() => toggle('contact')}>
        <Phone aria-hidden="true" /> <span>Contact</span>
      </button>

      {panel === 'links' && (
        <div className="dock-pop" role="menu">
          <strong>Quick Links</strong>
          {QUICK_LINKS.map((q) => (
            <Link key={q.to} to={q.to} role="menuitem">
              {q.label}
            </Link>
          ))}
          <hr />
          <Link to="/alumni" role="menuitem">
            <GraduationCap size={16} /> Alumni
          </Link>
          <a href="#results" role="menuitem">
            <Trophy size={16} /> Result Portal
          </a>
        </div>
      )}
      {panel === 'contact' && (
        <div className="dock-pop">
          <strong>Contact us</strong>
          {SCHOOL.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
              <Phone size={16} /> {p}
            </a>
          ))}
          <a href={`mailto:${SCHOOL.email}`}>
            <Mail size={16} /> {SCHOOL.email}
          </a>
          <Link to="/contact">
            <MapPin size={16} /> Find us on the map
          </Link>
        </div>
      )}
    </div>
  );
}

function DesktopNav({ path }: { path: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const timer = useRef<number>(0);

  useEffect(() => setOpen(null), [path]);

  const enter = (label: string) => {
    window.clearTimeout(timer.current);
    setOpen(label);
  };
  const leave = () => {
    timer.current = window.setTimeout(() => setOpen(null), 140);
  };

  return (
    <nav className="nav" aria-label="Main">
      {NAV.map((g) => {
        const active = isActive(g, path);
        if (!g.items) {
          return (
            <div className="nav-item" key={g.label}>
              <Link to={g.to} className={`nav-trigger${active ? ' active' : ''}`} aria-current={g.to === path ? 'page' : undefined}>
                {g.label}
              </Link>
            </div>
          );
        }
        const isOpen = open === g.label;
        return (
          <div
            key={g.label}
            className={`nav-item${isOpen ? ' open' : ''}`}
            onMouseEnter={() => enter(g.label)}
            onMouseLeave={leave}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setOpen(null)}
            onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}
          >
            <button type="button" className={`nav-trigger${active ? ' active' : ''}`} aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : g.label)}>
              {g.label} <ChevronDown aria-hidden="true" />
            </button>
            <div className={`mega${g.items.length < 4 ? ' single' : ''}`}>
              {g.items.map((item) => (
                <Link key={item.to} to={item.to} className={item.to === path ? 'active' : undefined} tabIndex={isOpen ? 0 : -1}>
                  <strong>
                    {item.label}
                    {item.to.startsWith('http') && <ArrowUpRight size={14} />}
                  </strong>
                  {item.blurb && <span>{item.blurb}</span>}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

function Drawer({ path, onClose }: { path: string; onClose: () => void }) {
  const current = NAV.find((g) => isActive(g, path))?.label ?? null;
  const [open, setOpen] = useState<string | null>(current);
  const { openFacts } = useSiteUi();

  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', esc);
    };
  }, [onClose]);

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer-head">
          <Link to="/" className="brand" onClick={onClose}>
            <img src="/brand/crest.png" alt="" width={40} height={38} style={{ width: 40 }} />
            <span className="brand-text">
              <strong>LAKSHAYA</strong>
              <span>International School</span>
            </span>
          </Link>
          <button type="button" className="burger" style={{ display: 'grid' }} onClick={onClose} aria-label="Close menu" autoFocus>
            <X />
          </button>
        </div>
        <div className="drawer-body">
          {NAV.map((g) =>
            g.items ? (
              <div key={g.label} className={`drawer-group${open === g.label ? ' open' : ''}`}>
                <button type="button" aria-expanded={open === g.label} onClick={() => setOpen(open === g.label ? null : g.label)}>
                  {g.label} <ChevronDown />
                </button>
                {open === g.label && (
                  <div className="drawer-sub">
                    {g.items.map((i) => (
                      <Link key={i.to} to={i.to} onClick={onClose} className={i.to === path ? 'active' : undefined}>
                        {i.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={g.label} className="drawer-group">
                <Link to={g.to} onClick={onClose}>
                  {g.label}
                </Link>
              </div>
            ),
          )}
          <div className={`drawer-group${open === 'Quick Links' ? ' open' : ''}`}>
            <button type="button" aria-expanded={open === 'Quick Links'} onClick={() => setOpen(open === 'Quick Links' ? null : 'Quick Links')}>
              Quick Links <ChevronDown />
            </button>
            {open === 'Quick Links' && (
              <div className="drawer-sub">
                {QUICK_LINKS.map((i) => (
                  <Link key={i.to} to={i.to} onClick={onClose} className={i.to === path ? 'active' : undefined}>
                    {i.label}
                  </Link>
                ))}
                <Link to="/alumni" onClick={onClose}>
                  Alumni
                </Link>
                <a href="#results" onClick={onClose}>
                  Result Portal
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-foot">
          <div className="drawer-contact">
            <a href={`tel:${SCHOOL.phones[0].replace(/\s/g, '')}`}>
              <Phone size={16} /> {SCHOOL.phones[0]}
            </a>
            <a href={`mailto:${SCHOOL.email}`}>
              <Mail size={16} /> {SCHOOL.email}
            </a>
          </div>
          <Link to="/admissions/inquiry" className="btn red" onClick={onClose}>
            Admission inquiry <Arrow />
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <a href={SCHOOL.brochure} target="_blank" rel="noopener" className="btn ghost sm">
              E-Brochure
            </a>
            <button
              type="button"
              className="btn ghost sm"
              onClick={() => {
                onClose();
                openFacts();
              }}
            >
              Fast Facts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Header() {
  const path = usePath();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setDrawer(false), [path]);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Link to="/" className="brand" aria-label="Lakshaya International School — home">
            <img className="brand-crest" src="/brand/crest-sticker.png" alt="" width={324} height={298} />
            <span className="brand-text">
              <strong>LAKSHAYA</strong>
              <span>International School</span>
            </span>
          </Link>
          <DesktopNav path={path} />
          <Link to="/admissions/inquiry" className="btn red sm header-cta">
            Apply now
          </Link>
          <button type="button" className="burger" onClick={() => setDrawer(true)} aria-label="Open menu" aria-expanded={drawer}>
            <Menu />
          </button>
        </div>
      </header>
      <QuickDock />
      {drawer && <Drawer path={path} onClose={() => setDrawer(false)} />}
    </>
  );
}
