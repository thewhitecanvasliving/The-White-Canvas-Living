import { useState } from 'react'
import './TestimonialsSection.css'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque vel metus lorem. Quisque ac iaculis odio, a faucibus nunc.
    Cras a vulputate lorem. Fusce cursus erat velit, eget porta lectus gravida sit amet. Quisque ac iaculis odio, a faucibus nunc.
    Cras a vulputate lorem. Fusce cursus erat velit, eget porta lectus gravida sit amet. `,
        author: "Naru Kundu",
    },
    {
        text: `Sed non lacus vel nulla pharetra varius. Nam laoreet odio ligula.
    Duis ornare, neque efficitur imperdiet sollicitudin, nisi est posuere nisi.`,
        author: "Riya Sen",
    },
    {
        text: `Vivamus ultricies pretium tortor non condimentum.
    Duis sit amet magna vitae lorem tempus blandit.`,
        author: "Arjun Das",
    },
    {
        text: `Sed non lacus vel nulla pharetra varius. Nam laoreet odio ligula.
    Duis ornare, neque efficitur imperdiet sollicitudin, nisi est posuere nisi.`,
        author: "Riya Sen",
    },
    {
        text: `Vivamus ultricies pretium tortor non condimentum.
    Duis sit amet magna vitae lorem tempus blandit.`,
        author: "Arjun Das",
    },
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
            <div className="section-title testimonials">
                Testimonials
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
                                <div className="testimonial-text">{testimonial.text}</div>
                                <div className="testimonial-author">~ {testimonial.author}</div>
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
