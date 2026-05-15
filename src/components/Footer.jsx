import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content-wrapper">
                <img src="/images/about-us-img1.jpg" alt="" className="footer-logo" />
                <div className="footer-section pages">
                    <div className="footer-section-title">SITEMAP</div>
                    <a href='/' className="footer-section-items">Home</a>
                    <a href='#aboutus' className="footer-section-items">About Us</a>
                    <a href='#featured-section' className="footer-section-items">Featured Projects</a>
                    <a href='#footer' className="footer-section-items">Contact</a>
                </div>

                <div className="footer-section services">
                    <div className="footer-section-title">SERVICES</div>
                    <span className="footer-section-items">Residential</span>
                    <span className="footer-section-items">Commercial</span>
                    <span className="footer-section-items">Retail Spaces</span>
                    <span className="footer-section-items">Boutiques</span>
                    <span className="footer-section-items">Bespoke interior</span>
                </div>

                <div className="footer-section contact" id='contact'>
                    <div className="footer-section-title">CONTACT</div>
                    <a href='mailto:thewhitecanvasliving@gmail.com' className="footer-section-items">thewhitecanvasliving@gmail.com</a>
                    <span className="footer-section-items">+91 82405 26335  |  +91 70034 37512</span>
                    <a href='https://www.instagram.com/thewhitecanvasliving' target='_blank' className="footer-section-items" style={{gap:'6px'}}>
                        <i class="fa-brands fa-instagram fa-2x"></i> thewhitecanvasliving
                    </a>
                    <a href="https://forms.gle/XVbNJMV6rvTpJ37m7" target='_blank' className="contact-form-btn">
                        Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom-text">
                © {`${new Date().getFullYear()} The White Canvas Living. All rights reserved.`}
            </div>
        </div>
    )
}

export default Footer
