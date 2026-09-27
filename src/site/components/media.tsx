import type { ImgHTMLAttributes } from 'react';
import { IMAGE_SIZES } from '../data/generated';

export const full = (id: string) => `/media/g/${id}.webp`;
export const thumb = (id: string) => `/media/t/${id}.webp`;

type PhotoImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  id: string;
  size?: 'thumb' | 'full';
};

/** <img> for a gallery photo with intrinsic dimensions (no layout shift) and lazy loading by default. */
export function PhotoImg({ id, size = 'thumb', alt = '', loading = 'lazy', ...rest }: PhotoImgProps) {
  const [w, h] = IMAGE_SIZES[id] ?? [1200, 800];
  const scale = size === 'thumb' ? Math.min(1, 640 / Math.max(w, h)) : 1;
  return (
    <img
      src={size === 'thumb' ? thumb(id) : full(id)}
      width={Math.round(w * scale)}
      height={Math.round(h * scale)}
      alt={alt}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
}
