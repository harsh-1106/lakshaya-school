import { useState, type FormEvent } from 'react';
import { CircleAlert, Check, Send } from 'lucide-react';
import { Link } from '../router';
import { NAV, QUICK_LINKS, SCHOOL } from '../data/content';
import { subscribeNewsletter } from '../api';
import { FacebookIcon, YoutubeIcon } from './SocialIcons';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setState('busy');
    try {
      await subscribeNewsletter(email.trim());
      setState('ok');
      setEmail('');
    } catch {
      setState('err');
    }
  };

  return (
    <div>
      <h4>Newsletter</h4>
      <p>Subscribe to our newsletter — get academic updates and stay tuned.</p>
      <form className="newsletter" onSubmit={submit}>
        <label htmlFor="nl-email" className="visually-hidden">
          Email address
        </label>
        <input id="nl-email" type="email" required className="input" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="btn gold sm" disabled={state === 'busy'} aria-label="Subscribe">
          <Send />
        </button>
      </form>
      <p role="status" style={{ marginTop: 10, fontSize: '0.82rem', display: 'flex', gap: 6, alignItems: 'center' }}>
        {state === 'ok' && (
          <>
            <Check size={16} color="var(--gold)" /> Thank you — you are subscribed.
          </>
        )}
        {state === 'err' && (
          <>
            <CircleAlert size={16} color="var(--gold)" /> Could not subscribe right now. Please write to {SCHOOL.email}.
          </>
        )}
      </p>
      <div className="award">
        <img src="/media/clubs/awordimg.webp" alt="Worldwide Achievers" width={200} height={81} loading="lazy" />
        <div>
          <small>Award</small>
          <span>{SCHOOL.award}</span>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const explore = NAV.filter((g) => g.label !== 'Contact');
  return (
    <footer className="footer">
      <div className="footer-bar" />
      <div className="wrap footer-top">
        <div className="footer-brand">
          <img src="/brand/crest-reversed.png" alt="Lakshaya International School crest" width={298} height={285} loading="lazy" />
          <span className="deva">{SCHOOL.mottoSanskrit}</span>
          <p>{SCHOOL.mottoEnglish}.</p>
          <address style={{ fontStyle: 'normal', marginTop: 18, lineHeight: 1.7 }}>
            {SCHOOL.name}
            <br />
            {SCHOOL.addressLines.join(', ')}
          </address>
          <div className="socials">
            <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={SCHOOL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {explore.map((g) => (
              <li key={g.label}>
                <Link to={g.to}>{g.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((q) => (
              <li key={q.to}>
                <Link to={q.to}>{q.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            {SCHOOL.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
            </li>
            <li>
              <Link to="/contact">Find us on the map</Link>
            </li>
            <li>
              <Link to="/alumni">Alumni</Link>
            </li>
            <li>
              <a href="#results">Result Portal</a>
            </li>
          </ul>
        </div>
        <Newsletter />
      </div>
      <div className="footer-bottom">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
          </span>
          <nav aria-label="Footer">
            <Link to="/mandatory-public-disclosure">Mandatory Public Disclosure</Link>
            <a href={SCHOOL.brochure} target="_blank" rel="noopener">
              E-Brochure
            </a>
            <a href="#admin">Staff login</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
