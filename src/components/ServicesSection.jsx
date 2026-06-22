const SERVICES = [
  {
    n: '01',
    name: 'Residential Design',
    desc: 'Complete home transformations — from living rooms and bedrooms to kitchens and bathrooms — crafted to feel like you.',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    n: '02',
    name: 'Commercial Spaces',
    desc: "Offices, retail spaces, and boutiques designed to reflect your brand's identity while maximising flow and function.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    n: '03',
    name: 'Retail & Boutiques',
    desc: 'Storefronts and boutique spaces designed to invite, delight, and convert — making every visit a tactile brand moment.',
    icon: (
      <>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  {
    n: '04',
    name: 'Bespoke Interiors',
    desc: 'Fully customised, one-of-a-kind interior solutions for clients who want something extraordinary and entirely their own.',
    icon: (
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    ),
  },
  {
    n: '05',
    name: 'Space Planning',
    desc: 'Considered layouts and zoning that maximise flow, light, and function — the structural backbone every great interior needs.',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-header reveal">
          <p className="label">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p>
            From concept to completion, we handle every detail of your interior
            transformation with care and precision.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              className={`service-card reveal reveal-delay-${i + 1}`}
              key={s.n}
            >
              <div className="service-number">{s.n}</div>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href="#contact" className="service-link">
                Inquire
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
