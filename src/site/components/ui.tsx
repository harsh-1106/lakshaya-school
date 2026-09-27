import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Download, FileText, Play, type LucideIcon } from 'lucide-react';
import { Link } from '../router';
import { Lightbox } from './Overlay';
import { PhotoImg, thumb } from './media';
import { IMAGE_SIZES } from '../data/generated';

// ---------- Site-wide overlays (fast facts, school video) ----------

interface SiteUi {
  openFacts: () => void;
  openVideo: () => void;
}

export const SiteUiContext = createContext<SiteUi>({ openFacts: () => {}, openVideo: () => {} });
export const useSiteUi = () => useContext(SiteUiContext);

// ---------- Headings ----------

export function SectionHead({
  eyebrow,
  title,
  intro,
  action,
  light,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <span className={`eyebrow${light ? ' light' : ''}`}>{eyebrow}</span>
        <h2>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
      </div>
      {action}
    </div>
  );
}

export function Arrow() {
  return <ArrowRight className="arrow" aria-hidden="true" />;
}

// ---------- Photo galleries ----------

export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  return { index, setIndex, close };
}

/** Masonry gallery that opens a lightbox; every photo keeps its natural aspect ratio. */
export function PhotoMasonry({ images, title }: { images: string[]; title: string }) {
  const lb = useLightbox();
  return (
    <>
      <div className="masonry">
        {images.map((id, i) => (
          <button key={id} type="button" className="photo" onClick={() => lb.setIndex(i)} aria-label={`Open ${title} photo ${i + 1}`} data-reveal style={{ ['--d' as string]: `${(i % 6) * 60}ms` }}>
            <PhotoImg id={id} alt="" />
          </button>
        ))}
      </div>
      <Lightbox images={images} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} title={title} />
    </>
  );
}

/** Large lead photo with a strip of the rest — used by pages whose old version had an image slider. */
export function FeaturePhotos({ images, title }: { images: string[]; title: string }) {
  const lb = useLightbox();
  if (!images.length) return null;
  const [first, ...rest] = images;
  return (
    <>
      <div className="stack" style={{ ['--gap' as string]: '14px' }}>
        <button type="button" className="photo frame" onClick={() => lb.setIndex(0)} aria-label={`Open ${title} photo 1`} style={{ aspectRatio: '16 / 10', borderRadius: 'var(--r-xl)' }}>
          <PhotoImg id={first} size="full" alt={title} className="cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </button>
        {rest.length > 0 && (
          <div className="photo-row" style={rest.length < 4 ? { gridTemplateColumns: `repeat(${rest.length}, minmax(0, 1fr))` } : undefined}>
            {rest.slice(0, 4).map((id, i) => (
              <button key={id} type="button" className="photo cover" onClick={() => lb.setIndex(i + 1)} aria-label={`Open ${title} photo ${i + 2}`}>
                <PhotoImg id={id} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {i === 3 && rest.length > 4 && (
                  <span style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'grid', placeItems: 'center', background: 'rgba(7,29,73,.6)', color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
                    +{rest.length - 4}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <Lightbox images={images} index={lb.index} onClose={lb.close} onIndex={lb.setIndex} title={title} />
    </>
  );
}

// ---------- Video ----------

export function VideoCard({ poster, label = 'Watch the school video' }: { poster: string; label?: string }) {
  const { openVideo } = useSiteUi();
  const [w, h] = IMAGE_SIZES[poster] ?? [1200, 800];
  return (
    <button type="button" className="video-card" onClick={openVideo} aria-label={label}>
      <img src={thumb(poster)} width={w} height={h} alt="" loading="lazy" />
      <span className="play">
        <Play fill="currentColor" />
      </span>
      <span className="label">{label}</span>
    </button>
  );
}

// ---------- CTA band ----------

export function CtaBand({
  title = 'Admissions open for academic year 2027-28',
  text = 'There is no formal test or interview for your child. Fill in the inquiry form and our team will help you every step of the way.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="cta-band" data-reveal>
          <div>
            <span className="eyebrow light" style={{ color: 'var(--gold)' }}>
              Admissions
            </span>
            <h2 style={{ marginTop: 12 }}>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="actions">
            <Link to="/admissions/inquiry" className="btn">
              Inquiry form <Arrow />
            </Link>
            <Link to="/admissions" className="btn ghost-light">
              Admission process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Empty state ----------

export function EmptyState({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children?: ReactNode }) {
  return (
    <div className="empty" data-reveal>
      <span className="icon-badge">
        <Icon />
      </span>
      <h3>{title}</h3>
      {children && <p>{children}</p>}
    </div>
  );
}

// ---------- Document card ----------

export function DocCard({ title, href, meta }: { title: string; href: string; meta?: string }) {
  const file = href.split('/').pop();
  return (
    <div className="doc">
      <span className="icon-badge">
        <FileText />
      </span>
      <div>
        <strong>{title}</strong>
        {meta && <span className="muted" style={{ fontSize: '0.82rem' }}>{meta}</span>}
        <div className="doc-actions">
          <a href={href} target="_blank" rel="noopener">
            View <ArrowUpRight />
          </a>
          <a href={href} download={file}>
            Download <Download />
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------- Avatar ----------

const AVATAR_TONES = ['', 'red', 'royal', 'gold'];

export function initials(name: string) {
  const parts = name.replace(/^(Ms|Mr|Mrs|Dr)\.?\s*/i, '').split(/[\s.]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase();
}

export function Avatar({ name, i }: { name: string; i: number }) {
  return (
    <span className={`avatar ${AVATAR_TONES[i % AVATAR_TONES.length]}`} aria-hidden="true">
      {initials(name)}
    </span>
  );
}
