import { ASSETS } from '../assets';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={ASSETS.logo} alt="The White Canvas Living" />
            <p className="footer-tagline">
              Crafting interiors that feel calm, thoughtful, and effortlessly
              lived-in.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/thewhitecanvasliving"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#projects">Featured Projects</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Services</p>
            <ul className="footer-links">
              <li><a href="/#services">Residential Design</a></li>
              <li><a href="/#services">Commercial Spaces</a></li>
              <li><a href="/#services">Retail & Boutiques</a></li>
              <li><a href="/#services">Bespoke Interiors</a></li>
              <li><a href="/#services">Space Planning</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:thewhitecanvasliving@gmail.com">
                thewhitecanvasliving@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 82405 26335<br />+91 70034 37512</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} The White Canvas Living. All rights
            reserved.
          </p>
          <p className="footer-credit">
            Kolkata, India · Website by{' '}
            <a
              href="https://www.rupamdhar.in/"
              className="footer-credit-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rupam
              <svg
                className="footer__credit-link-icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 2h5v5" />
                <path d="M14 2L7 9" />
                <path d="M12 9v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
