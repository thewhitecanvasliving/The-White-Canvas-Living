import { useEffect } from 'react'
import Navbar from './components/Navbar'
import './SitePage.css'

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';

const Site2 = () => {

    useEffect(() => {
        AOS.init({
            once: true,   // 👈 THIS is the key
        });
    }, []);

    const galleryItems = [
        { type: "video", src: "/images/site2/vid4.mp4" },
        { type: "image", src: "/images/site2/img2.jpeg" },
        { type: "video", src: "/images/site2/vid5.mp4" },
        { type: "image", src: "/images/site2/img1.jpeg" },
        { type: "video", src: "/images/site2/vid1.mp4" },
        { type: "image", src: "/images/site2/img3.jpeg" },
        { type: "video", src: "/images/site2/vid-A.mp4" },
        { type: "image", src: "/images/site2/img4.jpeg" },
        { type: "video", src: "/images/site2/vid3.mp4" },
        { type: "image", src: "/images/site2/img5.jpeg" },
        { type: "video", src: "/images/site2/vid2.mp4" },
        { type: "image", src: "/images/site2/img6.jpeg" },
    ];

    return (
        <div className='site-page'>
            <Navbar />
            <div className="site-page-title">Site 2</div>

            <div className="gallery">
                {galleryItems.map((item, index) => (
                    <div className="gallery-item" key={index}>
                        {item.type === "image" ? (
                            <img src={item.src} alt={`gallery-${index}`} />
                        ) : (
                            <video
                                autoPlay
                                controls
                                loop
                                muted
                                playsInline
                                onLoadedMetadata={(e) => {
                                    e.currentTarget.playbackRate = 0.5; // hardcoded speed
                                }}
                            >s
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        )}
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default Site2
