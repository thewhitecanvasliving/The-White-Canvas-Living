// PartnersCarousel.jsx
import "./Carousel.css";

const partners = [
  "Google",
  "Microsoft",
  "Netflix",
  "Spotify",
  "Amazon",
  "Adobe",
  "Meta",
  "Apple",
];

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {/* Original items */}
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            {partner}
          </div>
        ))}

        {/* Duplicate items for smooth infinite loop */}
        {partners.map((partner, index) => (
          <div className="partner-card" key={`duplicate-${index}`}>
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}