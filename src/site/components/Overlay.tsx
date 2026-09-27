import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { full, thumb } from './media';
import { SCHOOL } from '../data/content';

/** Locks page scroll, closes on Escape, keeps Tab focus inside, and restores focus on close. */
function useModal(open: boolean, onClose: () => void, ref: React.RefObject<HTMLElement | null>) {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => ref.current?.querySelector<HTMLElement>('[data-autofocus], button, a, input')?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current();
      if (e.key !== 'Tab' || !ref.current) return;
      const items = ref.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [open, ref]);
}

export function Dialog({
  open,
  onClose,
  label,
  wide,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useModal(open, onClose, ref);
  if (!open) return null;
  return createPortal(
    <div className="lis lis-portal">
      <div className="lis-dialog-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <div ref={ref} className={`lis-dialog${wide ? ' wide' : ''}`} role="dialog" aria-modal="true" aria-label={label}>
          <button type="button" className="dialog-close" onClick={onClose} aria-label="Close">
            <X />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function VideoDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} label="Lakshaya International School video" wide>
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${SCHOOL.schoolVideoId}?autoplay=1&rel=0`}
          title="Lakshaya International School video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Dialog>
  );
}

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
  title,
}: {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const open = index !== null;
  useModal(open, onClose, ref);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onIndex((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + images.length) % images.length);
    };
    document.addEventListener('keydown', onKey);
    stripRef.current?.children[index]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    return () => document.removeEventListener('keydown', onKey);
  }, [index, images.length, onIndex]);

  if (index === null) return null;
  const many = images.length > 1;
  return createPortal(
    <div ref={ref} className="lis-lightbox" role="dialog" aria-modal="true" aria-label={title ?? 'Photo viewer'}>
      <div className="lb-top">
        <span>
          {title ? `${title} · ` : ''}
          {index + 1} / {images.length}
        </span>
        <button type="button" onClick={onClose} aria-label="Close photo viewer" data-autofocus>
          <X size={22} />
        </button>
      </div>
      <div className="lb-stage" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
        <img key={images[index]} src={full(images[index])} alt={`${title ?? 'Photo'} ${index + 1}`} />
        {many && (
          <>
            <button type="button" className="lb-prev" aria-label="Previous photo" onClick={() => onIndex((index - 1 + images.length) % images.length)}>
              <ChevronLeft />
            </button>
            <button type="button" className="lb-next" aria-label="Next photo" onClick={() => onIndex((index + 1) % images.length)}>
              <ChevronRight />
            </button>
          </>
        )}
      </div>
      {many && (
        <div className="lb-strip" ref={stripRef}>
          {images.map((id, i) => (
            <button key={id} type="button" className={i === index ? 'on' : ''} onClick={() => onIndex(i)} aria-label={`Show photo ${i + 1}`}>
              <img src={thumb(id)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}
