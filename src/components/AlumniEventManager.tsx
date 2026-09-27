import { useState, type CSSProperties, type FormEvent } from 'react';
import { CalendarPlus, Trash2, Users } from 'lucide-react';
import { DataService } from '../services/dataService';
import type { AlumniEvent } from '../types';

const TYPES: AlumniEvent['type'][] = ['Reunion', 'Homecoming', 'Career Talk', 'Mentorship', 'Sports Meet'];

const input: CSSProperties = {
  width: '100%',
  backgroundColor: '#07152b',
  color: '#ffffff',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  padding: '0.55rem 0.7rem',
  fontSize: '0.85rem',
};
const label: CSSProperties = { display: 'grid', gap: '0.3rem', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 };

const EMPTY = { title: '', date: '', time: '', location: 'Lakshaya International School campus, Ahmedabad', type: 'Reunion' as AlumniEvent['type'], description: '' };

/** Admin tool for the alumni events shown on the public /alumni/events page. */
export function AlumniEventManager() {
  const [events, setEvents] = useState(() => DataService.getAlumniEvents());
  const [f, setF] = useState(EMPTY);
  const [error, setError] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.title.trim() || !f.date || !f.location.trim()) {
      setError('Title, date and location are required.');
      return;
    }
    DataService.createAlumniEvent({ ...f, title: f.title.trim(), time: f.time.trim() || undefined });
    setEvents(DataService.getAlumniEvents());
    setF(EMPTY);
    setError('');
  };

  const remove = (id: string) => {
    if (!window.confirm('Delete this event and its RSVPs?')) return;
    DataService.deleteAlumniEvent(id);
    setEvents(DataService.getAlumniEvents());
  };

  return (
    <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CalendarPlus size={18} /> Alumni Events
      </h3>
      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0.25rem 0 1rem' }}>Events added here appear on the public alumni events page, where alumni can RSVP.</p>

      <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', alignItems: 'end' }}>
        <label style={{ ...label, gridColumn: '1 / -1' }}>
          Title
          <input style={input} value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} placeholder="e.g. Alumni Homecoming 2027" />
        </label>
        <label style={label}>
          Date
          <input type="date" style={input} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} />
        </label>
        <label style={label}>
          Time
          <input style={input} value={f.time} onChange={(e) => setF({ ...f, time: e.target.value })} placeholder="e.g. 6:30 PM" />
        </label>
        <label style={label}>
          Type
          <select style={input} value={f.type} onChange={(e) => setF({ ...f, type: e.target.value as AlumniEvent['type'] })}>
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label style={{ ...label, gridColumn: '1 / -1' }}>
          Location
          <input style={input} value={f.location} onChange={(e) => setF({ ...f, location: e.target.value })} />
        </label>
        <label style={{ ...label, gridColumn: '1 / -1' }}>
          Description
          <textarea style={{ ...input, minHeight: 70 }} value={f.description} onChange={(e) => setF({ ...f, description: e.target.value })} />
        </label>
        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button type="submit" style={{ backgroundColor: '#22c55e', color: '#ffffff', border: 'none', padding: '0.55rem 1rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}>
            Add event
          </button>
          {error && <span style={{ color: '#fca5a5', fontSize: '0.8rem' }}>{error}</span>}
        </div>
      </form>

      <div style={{ display: 'grid', gap: '0.6rem', marginTop: '1.25rem' }}>
        {events.length === 0 && <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>No alumni events yet.</p>}
        {events.map((ev) => (
          <div key={ev.id} style={{ backgroundColor: '#07152b', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '0.8rem 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>{ev.title}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.76rem' }}>
                  {ev.date}
                  {ev.time ? ` · ${ev.time}` : ''} · {ev.type} · {ev.location}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setOpen(open === ev.id ? null : ev.id)}
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#e2e8f0', border: 'none', padding: '0.4rem 0.7rem', borderRadius: '8px', fontSize: '0.76rem', cursor: 'pointer', display: 'flex', gap: '0.3rem', alignItems: 'center' }}
                >
                  <Users size={13} /> {ev.rsvps.length} RSVPs
                </button>
                <button
                  type="button"
                  onClick={() => remove(ev.id)}
                  aria-label={`Delete ${ev.title}`}
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', border: 'none', padding: '0.4rem 0.6rem', borderRadius: '8px', cursor: 'pointer' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            {open === ev.id && (
              <ul style={{ margin: '0.6rem 0 0', paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.78rem' }}>
                {ev.rsvps.length ? ev.rsvps.map((r) => <li key={r.email}>{r.name} · Batch {r.batchYear} · {r.email}</li>) : <li>No RSVPs yet.</li>}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
