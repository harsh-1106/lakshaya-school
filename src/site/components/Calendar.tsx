import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HIGHLIGHT_EVENTS } from '../data/content';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

/** Month view (Monday first, like the original site) with highlight events marked. */
export function Calendar() {
  const today = new Date();
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const y = cursor.getFullYear();
  const m = cursor.getMonth();
  const lead = (new Date(y, m, 1).getDay() + 6) % 7;
  const start = new Date(y, m, 1 - lead);
  const days = Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
  const eventOn = (d: Date) => HIGHLIGHT_EVENTS.find((e) => e.month === d.getMonth() + 1 && e.day === d.getDate());

  return (
    <div>
      <div className="calendar-head">
        <button type="button" onClick={() => setCursor(new Date(y, m - 1, 1))} aria-label="Previous month">
          <ChevronLeft />
        </button>
        <strong aria-live="polite">
          {MONTHS[m]} {y}
        </strong>
        <button type="button" onClick={() => setCursor(new Date(y, m + 1, 1))} aria-label="Next month">
          <ChevronRight />
        </button>
      </div>
      <div className="cal-grid" role="grid" aria-label={`${MONTHS[m]} ${y}`}>
        {DOW.map((d, i) => (
          <span key={i} className="dow" aria-hidden="true">
            {d}
          </span>
        ))}
        {days.map((d) => {
          const ev = d.getMonth() === m ? eventOn(d) : undefined;
          const isToday = d.toDateString() === today.toDateString();
          const cls = ['day', d.getMonth() !== m && 'out', isToday && 'today', ev && 'event'].filter(Boolean).join(' ');
          return (
            <span key={d.toISOString()} className={cls} title={ev?.title} role="gridcell" aria-label={`${d.getDate()} ${MONTHS[d.getMonth()]}${ev ? ` — ${ev.title}` : ''}`}>
              {d.getDate()}
            </span>
          );
        })}
      </div>
    </div>
  );
}
