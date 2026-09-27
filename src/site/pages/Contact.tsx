import { useState, type FormEvent } from 'react';
import { CircleAlert, CircleCheck, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SCHOOL } from '../data/content';
import { sendContactMessage, type ContactMessage } from '../api';
import { FacebookIcon, YoutubeIcon } from '../components/SocialIcons';

const EMPTY: ContactMessage = { name: '', email: '', mobile: '', subject: '' };

export function ContactPage() {
  const [f, setF] = useState<ContactMessage>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactMessage, string>>>({});
  const [status, setStatus] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (!f.name.trim()) err.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Please enter a valid email';
    if (!/^[\d\s+-]{10,15}$/.test(f.mobile.trim())) err.mobile = 'Please enter a valid mobile number';
    if (!f.subject.trim()) err.subject = 'Please write your message';
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus('busy');
    try {
      await sendContactMessage(f);
      setStatus('ok');
      setF(EMPTY);
    } catch {
      setStatus('err');
    }
  };

  const input = (k: keyof ContactMessage, label: string, type = 'text') => (
    <div className="field">
      <label htmlFor={`c-${k}`}>
        {label}
        <span className="req" aria-hidden="true">*</span>
      </label>
      {k === 'subject' ? (
        <textarea id={`c-${k}`} className={`input${errors[k] ? ' invalid' : ''}`} rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k] || undefined} />
      ) : (
        <input id={`c-${k}`} type={type} className={`input${errors[k] ? ' invalid' : ''}`} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k] || undefined} />
      )}
      {errors[k] && (
        <span className="err" role="alert">
          {errors[k]}
        </span>
      )}
    </div>
  );

  return (
    <PageShell group="Contact Us" title="Contact Us" lead="We invite you to visit our school — our team will be happy to answer your questions." path="/contact">
      <div className="stack" style={{ ['--gap' as string]: 'clamp(48px,6vw,80px)' }}>
        <div className="grid grid-3">
          <div className="card contact-card" data-reveal>
            <span className="icon-badge">
              <MapPin />
            </span>
            <div>
              <h4>School information</h4>
              <address style={{ fontStyle: 'normal', marginTop: 6, lineHeight: 1.7 }}>
                {SCHOOL.name}
                <br />
                {SCHOOL.addressLines.map((l) => (
                  <span key={l} style={{ display: 'block' }}>
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </div>
          <div className="card contact-card" data-reveal style={{ ['--d' as string]: '80ms' }}>
            <span className="icon-badge">
              <Phone />
            </span>
            <div>
              <h4>Phone</h4>
              {SCHOOL.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`} style={{ display: 'block', marginTop: 6, fontWeight: 600, color: 'var(--navy)' }}>
                  {p}
                </a>
              ))}
              <h4 style={{ marginTop: 16 }}>Email</h4>
              <a href={`mailto:${SCHOOL.email}`} style={{ display: 'block', marginTop: 6, fontWeight: 600, color: 'var(--navy)' }}>
                {SCHOOL.email}
              </a>
            </div>
          </div>
          <div className="card navy contact-card" data-reveal style={{ ['--d' as string]: '160ms' }}>
            <span className="icon-badge">
              <Mail />
            </span>
            <div>
              <h4>Follow on</h4>
              <div className="socials" style={{ marginTop: 12 }}>
                <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href={SCHOOL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="split" style={{ alignItems: 'start' }}>
          <div data-reveal>
            <span className="eyebrow">Find us</span>
            <h2 style={{ marginTop: 14, marginBottom: 24 }}>Opp. Applewoods Township</h2>
            <div className="map">
              <iframe src={SCHOOL.mapEmbed} title="Map to Lakshaya International School" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <a href={SCHOOL.mapLink} target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginTop: 18 }}>
              View larger map <ExternalLink />
            </a>
          </div>
          <form className="card" onSubmit={submit} noValidate data-reveal style={{ ['--d' as string]: '120ms', padding: 'clamp(24px,4vw,40px)' }}>
            <span className="eyebrow">Write to us</span>
            <h3 style={{ marginTop: 10, marginBottom: 22 }}>Contact form</h3>
            <div className="stack" style={{ ['--gap' as string]: '16px' }}>
              {input('name', 'Name')}
              {input('email', 'E-mail', 'email')}
              {input('mobile', 'Mobile', 'tel')}
              {input('subject', 'Subject')}
            </div>
            <div role="status" style={{ marginTop: 18 }}>
              {status === 'ok' && (
                <div className="alert ok">
                  <CircleCheck /> <span>Thank you — your message has been sent. We will get back to you soon.</span>
                </div>
              )}
              {status === 'err' && (
                <div className="alert bad">
                  <CircleAlert />
                  <span>
                    Your message could not be sent. Please try again or email <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
                  </span>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
              <button type="submit" className="btn red" disabled={status === 'busy'}>
                {status === 'busy' ? 'Sending…' : 'Submit'}
              </button>
              <button
                type="button"
                className="btn ghost"
                onClick={() => {
                  setF(EMPTY);
                  setErrors({});
                  setStatus('idle');
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
