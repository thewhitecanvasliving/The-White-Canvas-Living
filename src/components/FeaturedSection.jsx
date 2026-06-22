import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';

const PROJECTS = [
  {
    to: '/site-2',
    img: ASSETS.featured1,
    tag: 'Residential Interior',
    name: 'Residence',
    loc: 'Dum Dum, Kolkata',
    badge: 'Featured',
    large: true,
  },
  {
    to: '/site-3',
    img: ASSETS.featured2,
    tag: 'Studio Apartment',
    name: 'Urban Studio',
    loc: 'Naktala, Kolkata',
  },
  {
    to: '/site-1',
    img: ASSETS.featured3,
    tag: 'Residential Interior',
    name: 'Residence',
    loc: 'Dum Dum, Kolkata',
  },
];

export default function FeaturedSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="featured-header reveal">
          <div className="featured-header-left">
            <p className="label">Our Work</p>
            <h2 className="section-title">
              Spaces Designed.<br />Stories Inspired.
            </h2>
            <p className="featured-desc">
              Discover our latest transformations that blend functionality with
              timeless beauty.
            </p>
          </div>
          <a href="#contact" className="view-all">
            All Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.to}
              to={p.to}
              className={`project-card reveal${p.large ? ' large' : ''}${
                i > 0 ? ` reveal-delay-${i}` : ''
              }`}
            >
              {p.badge && <span className="project-badge">{p.badge}</span>}
              <img src={p.img} alt={`${p.name} — ${p.loc}`} loading="lazy" />
              <div className="project-overlay">
                <div className="project-info">
                  <p className="project-tag">{p.tag}</p>
                  <p className="project-name">{p.name}</p>
                  <p className="project-loc">{p.loc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
