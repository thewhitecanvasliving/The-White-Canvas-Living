import WorkInProgressCarousel from './WorkInProgressCarousel';

const STEPS = [
  {
    title: 'Discovery',
    desc: 'We listen. Understanding your lifestyle, needs, and aesthetic vision is the foundation of everything we do.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'Concept Design',
    desc: 'We develop mood boards, spatial layouts, and material palettes — translating your story into a visual language.',
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    title: 'Procurement',
    desc: 'We source furniture, fixtures, and materials — managing vendors, timelines, and quality checks on your behalf.',
    icon: (
      <>
        <line x1="22" y1="12" x2="2" y2="12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" y1="16" x2="6.01" y2="16" />
        <line x1="10" y1="16" x2="10.01" y2="16" />
      </>
    ),
  },
  {
    title: 'Handover',
    desc: 'Your space, complete. We walk you through every detail and ensure everything is exactly as you envisioned.',
    icon: <polyline points="20 6 9 17 4 12" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="process-header reveal">
          <p className="label">How We Work</p>
          <h2 className="section-title">Our Process</h2>
        </div>
        <div className="process-steps">
          {STEPS.map((s, i) => (
            <div
              className={`process-step reveal reveal-delay-${i + 1}`}
              key={s.title}
            >
              <div className="step-circle">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Remove the line below to take out the scrolling carousel */}
      <WorkInProgressCarousel />
    </section>
  );
}
