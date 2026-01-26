import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar-section'>
            <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            <a className="nav-items-left" href="/">
                {/* <img src="wclLogo.png" className='navbar-logo' alt="" /> */}
                <span className="company-name">The White Canvas Living</span>
            </a>
            <div className={'nav-items-right' + (menuOpen ? ' open' : '')}>
                <a className="nav-link-items home" href="#navbar-section" onClick={() => { setMenuOpen(false) }}>Home</a>
                <a className="nav-link-items portfolio" href="#featured-section" onClick={() => { setMenuOpen(false) }}>Portfolio</a>
                <a className="nav-link-items about" href="#aboutus" onClick={() => { setMenuOpen(false) }}>About</a>
                <a className="nav-link-items contact" href="#contact" onClick={() => { setMenuOpen(false) }}>Contact</a>
            </div>
        </div>
    )
}

export default Navbar
