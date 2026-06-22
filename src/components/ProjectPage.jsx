import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import CTABanner from './CTABanner';
import useReveal from './useReveal';
import { siteMedia } from '../assets';
import '../SitePage.css';

const ARROW_RIGHT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ARROW_LEFT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function ProjectPage({
  site,
  heroImg,
  tag,
  title,
  loc,
  meta,
  brief,
  paragraphs,
  imageCount,
  largeImageIndex,
  videoNames,
  next,
  alt,
}) {
  const reelRef = useRef(null);
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!reelRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.25 },
    );
    reelRef.current.querySelectorAll('video').forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <header className="proj-hero">
        <div
          className="proj-hero-bg"
          style={{ backgroundImage: `url('${heroImg}')` }}
        />
        <div className="proj-hero-overlay" />
        <div className="container proj-hero-inner">
          <Link to="/#projects" className="back-link">
            {ARROW_LEFT} Back to projects
          </Link>
          <p className="proj-tag">{tag}</p>
          <h1>{title}</h1>
          <p className="proj-loc">{loc}</p>
        </div>
      </header>

      <section className="proj-meta">
        <div className="container proj-meta-grid">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="meta-label">{m.label}</p>
              <p className="meta-value">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proj-story">
        <div className="container proj-story-grid">
          <div>
            <p className="label">The Brief</p>
            <h2>{brief}</h2>
          </div>
          <div className="proj-story-text">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="proj-gallery">
        <div className="container">
          <div className="gallery-grid">
            {Array.from({ length: imageCount }).map((_, i) => {
              const n = i + 1;
              return (
                <img
                  key={n}
                  className={largeImageIndex === n ? 'span-2' : ''}
                  src={siteMedia(site, 'image', `img${n}`)}
                  alt={`${title} detail ${n}`}
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="proj-reel" ref={reelRef}>
        <div className="container">
          <div className="proj-reel-head">
            <div>
              <p className="label">Walkthroughs</p>
              <h2>Step inside</h2>
            </div>
          </div>
          <div className="reel-grid">
            {videoNames.map((v) => (
              <video
                key={v}
                src={siteMedia(site, 'video', v)}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                controls
              />
            ))}
          </div>
        </div>
      </section>

      <section className="proj-next">
        <div className="container proj-next-grid">
          <Link to={next.to} className="next-card">
            <p className="label">Next Project</p>
            <h3>{next.title}</h3>
            <div className="next-arrow">
              <span>View Project</span>
              {ARROW_RIGHT}
            </div>
          </Link>
          <Link to={alt.to} className="next-card">
            <p className="label">Or Explore</p>
            <h3>{alt.title}</h3>
            <div className="next-arrow">
              <span>View Project</span>
              {ARROW_RIGHT}
            </div>
          </Link>
        </div>
      </section>

      <CTABanner />

      <footer className="mini">
        <div className="container footer-mini">
          <p>
            © {new Date().getFullYear()} The White Canvas Living. All rights
            reserved.
          </p>
          <Link to="/">← Back to Home</Link>
        </div>
      </footer>
    </>
  );
}
