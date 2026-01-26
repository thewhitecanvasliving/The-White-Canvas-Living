import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <img src="/images/hero-section-img.jpeg" className='hero-image' alt="" />
            <div className="hero-img-cover">
                <div className="hero-content">
                    <div className="hero-section-title" data-aos="fade-up" data-aos-duration="1200">Spaces that tell <br /> your story</div>
                    <div className="hero-section-subtitle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">Creating timeless interiors with warmth, elegance, and your unique story</div>
                    <div className="hero-section-btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        <a href='#featured-section' className="view-our-work-btn">
                            View Our Work 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                        <button className="our-services-btn">Our Services</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
