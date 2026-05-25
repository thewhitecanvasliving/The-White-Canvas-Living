import React, { useState } from 'react'
import './HeroSection.css'

const services = [
    'Residential',
    'Commercial',
    'Retail Spaces',
    'Boutiques',
    'Bespoke Interior'
]

const HeroSection = () => {

    const [showServices, setShowServices] = useState(false)

    return (
        <div className='hero-section'>
            <img src="/images/hero-section-img.jpeg" className='hero-image' alt="" />
            <div className="hero-img-cover">
                <div className="hero-content">
                    <div className="hero-section-title" data-aos="fade-up" data-aos-duration="1200">
                        Spaces that tell <span className="highlight">your story</span>
                    </div>

                    <div className="hero-section-subtitle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
                        Creating timeless interiors with warmth, elegance, and your unique story
                    </div>

                    <div className="hero-section-btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">

                        <a href='#featured-section' className="view-our-work-btn">
                            View Our Work
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right ml-2"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>

                        <button className="our-services-btn" onClick={() => setShowServices(true)}>
                            Our Services
                        </button>
                    </div>
                </div>
            </div>


            {showServices && (
                <div className="services-modal-overlay" onClick={() => setShowServices(false)}>
                    <div className="services-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setShowServices(false)}>
                            ✕
                        </button>
                        <div className="services-modal-title">
                            Our Services
                        </div>
                        <div className="services-list">
                            {services.map((service, index) => (
                                <div key={index} className="service-item">
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeroSection