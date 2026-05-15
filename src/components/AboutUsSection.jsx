import React from 'react'
import './AboutUsSection.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Home, Clock, Users } from "lucide-react";

const AboutUsSection = () => {

    useEffect(() => {
        AOS.init({
            once: true,   // 👈 THIS is the key
        });
    }, []);

    return (
        <div className='about-us-section' id='aboutus'>
            <img src="/images/about-us-img2.png" className='about-us-image' alt="" />

            <div className="about-section">
                <div className="section-pre-title">ABOUT US</div>
                <div className="section-title about-us">
                    About The White Canvas Living
                </div>
                <div className="about-us-desc" data-aos='fade-up'>
                    At The White Canvas Living, we create spaces that feel calm, thoughtful, and effortlessly lived-in. We start with understanding how you move through your home, how you use your rooms, and what makes a space feel truly yours—because design should reflect life, not just look beautiful.
                    <br /><br />We combine clean, architectural thinking with warmth and texture, carefully layering materials, light, and proportion to bring each room to life. Every project is a collaboration, and we focus on details that matter, so your home feels balanced, personal, and timeless—designed to be both seen and lived in.
                </div>
                {/* stat space */}
                <a href="/#contact" className="contact-us-btn">
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
            </div>

            {/* <div className="separator"></div> */}

            <div className="about-us-stats">
                <div className="stat projects-stat">
                    <div className="stat-icon">
                        <Home size={40} strokeWidth={1.5} />
                    </div>
                    <div className="stat-content">
                        <div className="stat-number" data-aos='fade-up' data-aos-delay='100'>15+</div>
                        <div className="stat-label" data-aos='fade-up' data-aos-delay='200'>Projects</div>
                    </div>
                </div>

                <div className="stat tenure-stat">
                    <div className="stat-icon">
                        <Clock size={40} strokeWidth={1.5} />
                    </div>
                    <div className="stat-content">
                        <div className="stat-number" data-aos='fade-up' data-aos-delay='100'>2+</div>
                        <div className="stat-label" data-aos='fade-up' data-aos-delay='200'>Years</div>
                    </div>
                </div>

                <div className="stat clients-stat">
                    <div className="stat-icon">
                        <Users size={40} strokeWidth={1.5} />
                    </div>
                    <div className="stat-content">
                        <div className="stat-number" data-aos='fade-up' data-aos-delay='100'>13+</div>
                        <div className="stat-label" data-aos='fade-up' data-aos-delay='200'>Happy<br/>Clients</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection
