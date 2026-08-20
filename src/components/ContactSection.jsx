const contactOptions = [
  { label: "Instagram", note: "Details coming soon" },
  { label: "Email", note: "Details coming soon" },
  { label: "LinkedIn", note: "Details coming soon" },
];

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p className="eyebrow">ENQUIRIES</p>
        <h2>Interested in<br />our collection?</h2>
      </div>

      <div className="contact-content">
        <p className="contact-description">
          Contact us for sizes, colours, pricing and availability.
        </p>

        <a
          className="whatsapp-button"
          href="https://wa.me/919930148112?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20Vyshnavi%20Enterprises%20shirt%20collection."
          target="_blank"
          rel="noreferrer"
        >
          <span>WhatsApp</span>
          <strong>Enquire on WhatsApp <span aria-hidden="true">→</span></strong>
        </a>

        <div className="contact-options" aria-label="Additional contact options">
          {contactOptions.map((option) => (
            <div className="contact-option" key={option.label}>
              <span>{option.label}</span>
              <small>{option.note}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
