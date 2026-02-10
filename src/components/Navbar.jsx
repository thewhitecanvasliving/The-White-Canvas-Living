import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // change value if your hero height differs
            if (window.scrollY > window.innerHeight - 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar-section ${scrolled ? 'scrolled' : ''}`}>
            <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <a className="nav-items-left" href="/">
                <span className="company-name">The White Canvas Living</span>
                {/* <img src="/images/navbar-logo.png" className='navbar-logo' alt="" /> */}
            </a>

            <div className={'nav-items-right' + (menuOpen ? ' open' : '')}>
                <a className="nav-link-items home" href="/" onClick={() => setMenuOpen(false)}>Home</a>
                <a className="nav-link-items portfolio" href="#featured-section" onClick={() => setMenuOpen(false)}>Portfolio</a>
                <a className="nav-link-items about" href="#aboutus" onClick={() => setMenuOpen(false)}>About</a>
                <a className="nav-link-items contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </div>
    )
}

export default Navbar
