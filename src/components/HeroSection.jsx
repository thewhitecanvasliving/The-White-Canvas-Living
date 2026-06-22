import { useEffect, useRef, useState } from 'react';
import { ASSETS } from '../assets';

const SERVICES = [
  'Residential Design',
  'Commercial Spaces',
  'Retail & Boutiques',
  'Bespoke Interiors',
  'Space Planning',
];

export default function HeroSection() {
  const bgRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = ASSETS.hero;
    img.onload = () => {
      if (bgRef.current) {
        bgRef.current.style.backgroundImage = `url('${img.src}')`;
        setTimeout(() => bgRef.current?.classList.add('loaded'), 50);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        ref={bgRef}
        style={{ backgroundImage: `url('${ASSETS.hero}')` }}
      />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <p className="hero-label">The White Canvas Living</p>
          <h1>
            Spaces that<br />tell <em>your story</em>
          </h1>
          <p className="hero-sub">
            We craft interiors that feel calm, thoughtful, and effortlessly
            lived-in — designed around how you live, not just how things look.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Our Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => setOpen(true)}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>

      {open && (
        <div
          className="services-modal-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Our services"
        >
          <div
            className="services-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="services-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <p className="label">What We Offer</p>
            <h3>Our Services</h3>
            <ul className="services-modal-list">
              {SERVICES.map((s, i) => (
                <li key={s}>
                  <span className="services-modal-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: '1.75rem' }}
            >
              Explore Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
