import './FeaturedSection.css'
import {useEffect} from 'react'
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
                <div className="featured-card" data-aos="fade-up">
                    <img src="/images/featured1.JPG" className="featured-image" alt="Featured Project 1" />
                </div>
                <div className="featured-card" data-aos="fade-up" data-aos-delay="200">
                    <img src="/images/featured3.JPG" className="featured-image" alt="Featured Project 3" />
                </div>
            </div>

            {/* <div className="see-all-projects-btn">
                SEE ALL PROJECTS
            </div> */}
        </div>
    )
}

export default FeaturedSection
