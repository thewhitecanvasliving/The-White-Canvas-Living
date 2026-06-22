export default function CTABanner() {
  return (
    <section className="cta-banner" id="contact">
      <div className="container reveal">
        <p className="label">Ready to Begin?</p>
        <h2>
          Let's design a space<br />that's truly yours
        </h2>
        <p>
          Tell us about your project and we'll be in touch within 48 hours to
          arrange a consultation.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfayyvPWI5fNuZy47GvOC4lYD8I5qo21fwk9nmmtanSD3__AA/viewform"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start a Conversation
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
