import { useState } from 'react'
import './TestimonialsSection.css'
import { useEffect } from 'react'
import { Quote } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
        text: `Working with them was an absolute pleasure. They are truly talented, coming up with amazing, unique design ideas that far exceeded my expectations. Communication was fantastic throughout the whole process, and they always respected my budget and met deadlines. I highly recommend them for any interior design work.`,
        author: "Sankhadeep Das",
    },
    {
        text: `We feel great pleasure to communicate that we are very satisfied with the interior work done for my flat in Newtown by Arunima & her concern.
Their commitment to work schedule, finishing of work in pre-fixed time is very praiseworthy.`,
        author: "Runu Banerjee",
    },
    // {
    //     text: `Vivamus ultricies pretium tortor non condimentum.
    // Duis sit amet magna vitae lorem tempus blandit.`,
    //     author: "Arjun Das",
    // },
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        AOS.init({
            once: true,   // 👈 THIS is the key
        });
    }, []);


    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const next = () => {
        setCurrent((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="testimonials-section">
            <div className="section-pre-title">TESTIMONIALS</div>
            <div className="section-title testimonials">
                Kind words from our clients
            </div>
            <div className="section-subtitle" data-aos='fade-up'>Don't just take our word for it - hear from those who've experienced the transformation</div>

            <div className="testimonial-wrapper">
                <button className="arrow" onClick={prev}>&lt;</button>

                {/* testimonial slider */}
                <div className="testimonial-slider">
                    <div
                        className="testimonial-track"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial-card" key={index} data-aos='fade-up' data-aos-delay='100'>
                                <div className="quote-icon">
                                    <Quote size={60} strokeWidth={1.5} />
                                </div>
                                <div className="testimonial-text">{testimonial.text}</div>
                                {testimonial.author && (<div className="testimonial-author">~ {testimonial.author}</div>)}
                            </div>
                        ))}
                    </div>
                </div>

                <button className="arrow" onClick={next}>&gt;</button>
            </div>

            {/* dots */}
            <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection
