import './FeaturedSection.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedSection = () => {

    useEffect(() => {
        AOS.init({
            once: true,   // 👈 THIS is the key
        });
    }, []);

    return (
        <div className='featured-section' id='featured-section'>
            <div className="section-title featured">
                Featured Projects
            </div>
            <div className="section-subtitle" data-aos='fade-up'>Discover our latest transformations that blend functionality with timeless beauty</div>

            <div className="featured-images-wrapper">
                <div className="featured-card" data-aos="fade-up" data-aos-delay="200">
                    <img src="/images/featured2.JPG" className="featured-image" alt="Featured Project 2" />
                </div>
                <div className="featured-card" data-aos="fade-up" data-aos-delay="100">
                    <img src="/images/featured1.JPG" className="featured-image" alt="Featured Project 1" />
                </div>
                <div className="featured-card" data-aos="fade-up" data-aos-delay="200">
                    <img src="/images/featured3.jpeg" className="featured-image" alt="Featured Project 3" />
                </div>
            </div>

            <div className="projects-dropdown">
                <button className="see-all-projects-btn">
                    SEE ALL PROJECTS ▾
                </button>

                <div className="projects-dropdown-menu">
                    <a href="/site-1" target="_blank">Site 1</a>
                    <a href="/site-2" target="_blank">Site 2</a>
                </div>
            </div>

        </div>
    )
}

export default FeaturedSection
