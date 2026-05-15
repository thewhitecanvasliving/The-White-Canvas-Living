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
            <div className="section-pre-title">FEATURED PROJECTS</div>
            <div className="section-title featured">
                Spaces Designed. Stories Inspired.
            </div>
            <div className="section-subtitle" data-aos='fade-up'>Discover our latest transformations that blend functionality with timeless beauty</div>

            <div className="featured-images-wrapper">
                {/* card 1 */}
                <a href="/site-2" className="featured-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="card-gradient">
                        <div className="card-info">
                            <h2 className="project-title">Residence</h2>
                            <div className="project-subtitle">DUM DUM, KOLKATA</div>
                        </div>
                    </div>
                    <img src="/images/featured2.JPG" className="featured-image" alt="Featured Project 2" />
                </a>
                {/* card 2 */}
                <a href="/site-3" className="featured-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-gradient">
                        <div className="card-info">
                            <h2 className="project-title">Studio<br />Apartment</h2>
                            <div className="project-subtitle">NAKTALA, KOLKATA</div>
                        </div>
                    </div>
                    <img src="/images/featured3-1.png" className="featured-image" alt="Featured Project 1" />
                </a>
                {/* card 3 */}
                <a href='/site-1' className="featured-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="card-gradient">
                        <div className="card-info">
                            <h2 className="project-title">Residence</h2>
                            <div className="project-subtitle">DUM DUM, KOLKATA</div>
                        </div>
                    </div>
                    <img src="/images/featured3.jpeg" className="featured-image" alt="Featured Project 3" />
                </a>
            </div>

            {/* <div className="projects-dropdown">
                <button className="see-all-projects-btn">
                    SEE ALL PROJECTS ▾
                </button>

                <div className="projects-dropdown-menu">
                    <a href="/site-1" target="_blank">Site 1</a>
                    <a href="/site-2" target="_blank">Site 2</a>
                </div>
            </div> */}

        </div>
    )
}

export default FeaturedSection
