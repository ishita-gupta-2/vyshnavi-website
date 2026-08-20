function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-intro">
        <p className="eyebrow">PERSONAL ASSISTANCE</p>
        <h2>Find your next<br /><em>favourite shirt.</em></h2>
      </div>

      <div className="contact-card">
        <p>
          Tell us which piece caught your eye. We’ll help with current sizes,
          colours, availability, and pricing.
        </p>

        <div className="contact-links">
          <a
            className="primary-button"
            href="https://wa.me/919930148112?text=Hi%2C%20I%27d%20like%20help%20choosing%20a%20shirt%20from%20your%20collection."
            target="_blank"
            rel="noreferrer"
          >
            Start on WhatsApp <span aria-hidden="true">↗</span>
          </a>

          <a className="text-link" href="tel:+919930148112">
            Call +91 99301 48112
          </a>
        </div>

        <p className="contact-note">Direct, personal assistance. No forms or waiting lists.</p>
      </div>
    </section>
  );
}

export default ContactSection;
