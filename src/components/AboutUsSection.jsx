import { ASSETS } from '../assets';

const VALUES = [
  {
    name: 'Layered Materials',
    desc: 'Natural textures that age beautifully',
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
  },
  {
    name: 'Light & Proportion',
    desc: 'Every room balanced and bright',
    icon: (
      <>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </>
    ),
  },
  {
    name: 'Personal Spaces',
    desc: 'Deeply tailored to your lifestyle',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    name: 'Timeless Quality',
    desc: 'Designs that endure beyond trends',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function AboutUsSection() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images reveal">
            <img
              className="about-img-main"
              src={ASSETS.aboutMain}
              alt="The White Canvas Living — completed project"
              loading="lazy"
            />
            {/* <img
              className="about-img-accent"
              src={ASSETS.aboutAccent}
              alt="Interior detail"
              loading="lazy"
            /> */}
          </div>

          <div className="about-content reveal reveal-delay-2">
            <p className="label">About the Studio</p>
            <h2 className="section-title">
              The White<br />Canvas Living
            </h2>
            <p className="about-text">
              We create spaces that feel{' '}
              <strong>calm, thoughtful, and effortlessly lived-in</strong>. We
              start with understanding how you move through your home, how you
              use your rooms, and what makes a space feel truly yours — because
              design should reflect life, not just look beautiful.
            </p>
            <p className="about-text">
              Our studio blends architectural precision with warmth and texture,
              emphasizing layered materials, light, and proportion to craft
              rooms that feel both balanced and personal.
            </p>
            <div className="about-divider" />
            <div className="about-values">
              {VALUES.map((v) => (
                <div className="value-item" key={v.name}>
                  <div className="value-icon">
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {v.icon}
                    </svg>
                  </div>
                  <p className="value-name">{v.name}</p>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
