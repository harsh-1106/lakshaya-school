import { useMemo, useState } from 'react';
import { ArrowLeft, Images, Search } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { PhotoImg } from '../components/media';
import { EmptyState, PhotoMasonry } from '../components/ui';
import { Link } from '../router';
import { NAV, SCHOOL } from '../data/content';
import { ALBUMS } from '../data/generated';
import { YoutubeIcon } from '../components/SocialIcons';

const SIBLINGS = NAV.find((g) => g.label === 'Gallery')!.items!;
// Newest albums first (album ids increase over time on the original site).
const SORTED = [...ALBUMS].sort((a, b) => b.id - a.id);

export function GalleryPage() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    return n ? SORTED.filter((a) => `${a.title} ${a.description}`.toLowerCase().includes(n)) : SORTED;
  }, [q]);
  const total = ALBUMS.reduce((s, a) => s + a.images.length, 0);

  return (
    <PageShell group="Gallery" title="Image Gallery" lead={`${ALBUMS.length} albums · ${total} photos from life at Lakshaya.`} siblings={SIBLINGS} path="/gallery">
      <div className="toolbar">
        <div className="search">
          <Search aria-hidden="true" />
          <label htmlFor="alb-q" className="visually-hidden">
            Search albums
          </label>
          <input id="alb-q" className="input" type="search" placeholder="Search albums" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <a className="btn red" href={SCHOOL.youtube} target="_blank" rel="noopener noreferrer">
          <YoutubeIcon /> Video gallery
        </a>
      </div>
      {list.length ? (
        <div className="albums">
          {list.map((a, i) => (
            <Link key={a.id} to={`/gallery/${a.id}`} className="album" data-reveal style={{ ['--d' as string]: `${(i % 4) * 60}ms` }}>
              <div className="album-cover">
                <PhotoImg id={a.cover} alt="" />
                <span className="count">
                  <Images /> {a.images.length}
                </span>
              </div>
              <div className="album-body">
                <strong>{a.title}</strong>
                <span>{a.description}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState icon={Images} title="No albums found">
          Try another search term.
        </EmptyState>
      )}
    </PageShell>
  );
}

export function AlbumPage({ id }: { id: number }) {
  const i = SORTED.findIndex((a) => a.id === id);
  const album = SORTED[i];
  const prev = SORTED[i - 1];
  const next = SORTED[i + 1];
  return (
    <PageShell
      group="Gallery"
      title={album.title}
      lead={`${album.description} · ${album.images.length} photo${album.images.length === 1 ? '' : 's'}`}
      path={`/gallery/${id}`}
      heroImage={album.cover}
    >
      <div className="stack" style={{ ['--gap' as string]: '32px' }}>
        <Link to="/gallery" className="text-link">
          <ArrowLeft /> All albums
        </Link>
        <PhotoMasonry images={album.images} title={album.title} />
        <nav className="pager" aria-label="Other albums">
          {prev && (
            <Link to={`/gallery/${prev.id}`}>
              <small>Newer album</small>
              <strong>{prev.title}</strong>
            </Link>
          )}
          {next && (
            <Link to={`/gallery/${next.id}`} className="next">
              <small>Older album</small>
              <strong>{next.title}</strong>
            </Link>
          )}
        </nav>
      </div>
    </PageShell>
  );
}

export const albumExists = (id: number) => ALBUMS.some((a) => a.id === id);
