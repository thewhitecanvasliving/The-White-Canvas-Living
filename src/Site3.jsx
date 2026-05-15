import { useEffect } from 'react'
import Navbar from './components/Navbar'
import './SitePage.css'
import Footer from './components/Footer';

const Site3 = () => {

    const galleryItems = [
        { type: "video", src: "/images/site3/vid6.mp4" },
        { type: "image", src: "/images/site3/img11.jpeg" },
        { type: "image", src: "/images/site3/img2.jpeg" },
        { type: "video", src: "/images/site3/vid5.mp4" },
        { type: "image", src: "/images/site3/img1.jpeg" },
        { type: "video", src: "/images/site3/vid4.mp4" },
        { type: "video", src: "/images/site3/vid1.mp4" },
        { type: "image", src: "/images/site3/img8.jpeg" },
        { type: "image", src: "/images/site3/img4.jpeg" },
        { type: "video", src: "/images/site3/vid3.mp4" },
        { type: "image", src: "/images/site3/img3.jpeg" },
        { type: "video", src: "/images/site3/vid2.mp4" },
        { type: "video", src: "/images/site3/vid7.mp4" }
    ];

    return (
        <div className='site-page'>
            <Navbar />
            <div className="back-btn" onClick={() => window.history.back()}>
                &lt; Back
            </div>
            <div className="site-page-title">Studio Apartment</div>

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

export default Site3
