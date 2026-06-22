import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo" onClick={close} aria-label="The White Canvas Living — Home">
        <span className="nav-logo-wordmark">The White Canvas Living</span>
        <span className="nav-logo-text">The White Canvas Living</span>
      </Link>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="/#projects" onClick={close}>Projects</a></li>
        <li><a href="/#about" onClick={close}>About</a></li>
        <li><a href="/#services" onClick={close}>Services</a></li>
        <li><a href="/#testimonials" onClick={close}>Testimonials</a></li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfayyvPWI5fNuZy47GvOC4lYD8I5qo21fwk9nmmtanSD3__AA/viewform" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={close}>Get in Touch</a>
      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
