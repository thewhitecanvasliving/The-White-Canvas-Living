const STAR = (
  <svg className="star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const REVIEWS = [
  {
    initials: 'SD',
    name: 'Sankhadeep Das',
    role: 'Residential Client',
    text:
      'Working with them was an absolute pleasure. They are truly talented — they understood exactly what we wanted and delivered a space that exceeded our expectations in every way. Our home feels transformed.',
  },
  {
    initials: 'RB',
    name: 'Runu Banerjee',
    role: 'Residential Client',
    text:
      "We feel great pleasure to communicate that we are very satisfied with the outcome. The team's attention to detail, their warmth, and their commitment to our vision made the entire process seamless and enjoyable.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <p className="label">Client Stories</p>
          <h2 className="section-title">What They Say</h2>
        </div>
        <div className="testimonials-grid">
          {REVIEWS.map((r, i) => (
            <div
              className={`testimonial-card reveal reveal-delay-${i + 1}`}
              key={r.name}
            >
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>{STAR}</span>
                ))}
              </div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{r.initials}</div>
                <div>
                  <p className="author-name">{r.name}</p>
                  <p className="author-role">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
