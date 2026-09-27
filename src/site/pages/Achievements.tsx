import { useState } from 'react';
import { Award, Medal, Trophy } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { PhotoMasonry } from '../components/ui';
import { NEWS } from '../data/content';
import { PAGE_IMAGES } from '../data/generated';

const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function AchievementsPage() {
  const tags = ['All', ...Array.from(new Set(NEWS.map((n) => n.tag)))];
  const [tag, setTag] = useState('All');
  const list = NEWS.filter((n) => tag === 'All' || n.tag === tag);
  const years = Array.from(new Set(list.map((n) => n.date.slice(0, 4))));

  return (
    <PageShell group="Achievements" title="Achievements" lead="Trophies, medals and recognitions earned by Lakshaya’s students and teachers." path="/achievements">
      <div className="stack" style={{ ['--gap' as string]: 'clamp(56px,7vw,96px)' }}>
        <div className="stats" data-reveal>
          <div>
            <strong>
              <Medal size={30} color="var(--red)" style={{ display: 'inline', verticalAlign: '-4px' }} /> 16
            </strong>
            <span>Karate gold medals in 2019 (district, state & all-India)</span>
          </div>
          <div>
            <strong>51</strong>
            <span>Spell Bee national-level certificates</span>
          </div>
          <div>
            <strong>25</strong>
            <span>Wild Wisdom Quiz certificates (Discovery Channel) — 4 reached state level</span>
          </div>
          <div>
            <strong>
              <Award size={30} color="var(--red)" style={{ display: 'inline', verticalAlign: '-4px' }} /> 2
            </strong>
            <span>27th ECI Awards for Excellence in Education</span>
          </div>
        </div>

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Wall of fame</span>
              <h2>Achievements in pictures</h2>
            </div>
          </div>
          <PhotoMasonry images={PAGE_IMAGES.achievements} title="Achievements" />
        </section>

        <section>
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Latest news</span>
              <h2>Competitions & awards</h2>
            </div>
            <div className="seg" role="group" aria-label="Filter by category">
              {tags.map((t) => (
                <button key={t} type="button" className={tag === t ? 'on' : undefined} aria-pressed={tag === t} onClick={() => setTag(t)}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="stack" style={{ ['--gap' as string]: '36px' }}>
            {years.map((y) => (
              <div key={y} className="two-col" style={{ gridTemplateColumns: '120px minmax(0,1fr)' }}>
                <p className="display" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--red)' }}>
                  {y}
                </p>
                <ul className="timeline">
                  {list
                    .filter((n) => n.date.startsWith(y))
                    .map((n, i) => {
                      const d = new Date(n.date);
                      return (
                        <li key={i}>
                          <div className="date-block">
                            <strong>{d.getDate()}</strong>
                            <span>{MONTH[d.getMonth()]}</span>
                          </div>
                          <div>
                            <span className={`chip${n.tag === 'Award' ? ' gold' : ''}`}>
                              {n.tag === 'Award' ? <Trophy size={12} /> : null}
                              {n.tag}
                            </span>
                            <h4>{n.title}</h4>
                            <p>{n.detail}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
