import { useState } from 'react';
import { FileSearch, Search } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { DocCard, EmptyState } from '../components/ui';
import { DISCLOSURE_DOCS, QUICK_LINKS } from '../data/content';

export function DisclosurePage() {
  const [q, setQ] = useState('');
  const list = DISCLOSURE_DOCS.map((d, i) => ({ ...d, n: i + 1 })).filter((d) => d.title.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <PageShell
      group="Quick Links"
      title="Mandatory Public Disclosure"
      lead="Affiliation, safety certificates, fee structure, academic calendar and other statutory documents."
      siblings={QUICK_LINKS}
      path="/mandatory-public-disclosure"
    >
      <div className="toolbar">
        <div className="search">
          <Search aria-hidden="true" />
          <label htmlFor="doc-q" className="visually-hidden">
            Search documents
          </label>
          <input id="doc-q" className="input" type="search" placeholder="Search documents" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <span className="result-count">{DISCLOSURE_DOCS.length} documents · PDF</span>
      </div>
      {list.length ? (
        <div className="docs">
          {list.map((d) => (
            <DocCard key={d.href} title={d.title} href={d.href} meta={`Document ${String(d.n).padStart(2, '0')}`} />
          ))}
        </div>
      ) : (
        <EmptyState icon={FileSearch} title="No documents match your search" />
      )}
    </PageShell>
  );
}
