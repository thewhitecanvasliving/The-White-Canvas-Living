import { useEffect, useRef } from "react";
import Navbar from './components/Navbar'
import './SitePage.css'

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';

const Site1 = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        AOS.init({
            once: true,   // 👈 THIS is the key
        });
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // slower
        }
    }, []);

    const galleryItems = [
        { type: "video", src: "/images/site1/vid4.mp4" },
        { type: "image", src: "/images/site1/img2.jpeg" },
        { type: "video", src: "/images/site1/vid5.mp4" },
        { type: "image", src: "/images/site1/img1.jpeg" },
        { type: "video", src: "/images/site1/vid1.mp4" },
        { type: "video", src: "/images/site1/vid7.mp4" },
        { type: "video", src: "/images/site1/vid-A.mp4" },
        { type: "video", src: "/images/site1/vid3.mp4" },
        { type: "image", src: "/images/site1/img3.jpeg" },
        { type: "video", src: "/images/site1/vid6.mp4" },
        { type: "video", src: "/images/site1/vid2.mp4" }
    ];

    return (
        <div className='site-page'>
            <Navbar />
            <div className="site-page-title">Site 1</div>

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
                            >
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

export default Site1
