function ShirtDetails({ shirt, onBack }) {
  if (!shirt) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ${shirt.name}. Could you please share more details?`
  );

  return (
    <section className="shirt-details">
      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back to collection
      </button>

      <div className="shirt-details-content">
        <div className="shirt-details-image">
          <img
            src={shirt.image}
            alt={shirt.name}
          />
        </div>

        <div className="shirt-details-info">
          <p className="eyebrow">
            VYSHNAVI ENTERPRISES
          </p>

          <h1>{shirt.name}</h1>

          <p>
            Contact us for available sizes,
            colours and pricing.
          </p>

          <a
            href={`https://wa.me/919930148112?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="hero-button"
          >
            Enquire on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ShirtDetails;