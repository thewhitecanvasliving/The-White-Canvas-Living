import React from 'react'
import './AboutUsSection.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsSection = () => {

    useEffect(() => {
        AOS.init({
            once: true,   // 👈 THIS is the key
        });
    }, []);

    return (
        <div className='about-us-section' id='aboutus'>
            <img src="interior1.JPG" className='about-us-image' alt="" data-aos='fade-up' />

            <div className="about-section">
                <div className="section-title about-us">
                    About The White Canvas Living
                </div>
                <div className="about-us-desc" data-aos='fade-up'>
                    At The White Canvas Living, we create spaces that feel calm, thoughtful, and effortlessly lived-in. We start with understanding how you move through your home, how you use your rooms, and what makes a space feel truly yours—because design should reflect life, not just look beautiful.
                    <br /><br />We combine clean, architectural thinking with warmth and texture, carefully layering materials, light, and proportion to bring each room to life. Every project is a collaboration, and we focus on details that matter, so your home feels balanced, personal, and timeless—designed to be both seen and lived in.
                </div>
                <div className="about-us-stats">
                    <div className="projects-stat">
                        <div className="stat-number" data-aos='fade-up' data-aos-delay='100'>10+</div>
                        <div className="stat-label" data-aos='fade-up' data-aos-delay='200'>Projects</div>
                    </div>
                    <div className="tenure-stat">
                        <div className="stat-number" data-aos='fade-up' data-aos-delay='100'>2+</div>
                        <div className="stat-label" data-aos='fade-up' data-aos-delay='200'>Years</div>
                    </div>
                    <div className="clients-stat">
                        <div className="stat-number" data-aos='fade-up' data-aos-delay='100'>10</div>
                        <div className="stat-label" data-aos='fade-up' data-aos-delay='200'>Clients</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection
