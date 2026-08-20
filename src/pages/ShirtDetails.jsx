function ShirtDetails({ shirt, onBack }) {
  if (!shirt) {
    return null;
  }

  const shirtImageUrl = new URL(shirt.image, window.location.origin).href;
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ${shirt.name}. Could you share the available sizes, colours and pricing?\n\nShirt image: ${shirtImageUrl}`
  );

  return (
    <section className="shirt-details" aria-labelledby="shirt-detail-title">
      <button className="back-button" onClick={onBack} type="button">
        <span aria-hidden="true">←</span> Back to collection
      </button>

      <div className="shirt-details-content">
        <div className="shirt-details-image">
          <img
            src={shirt.image}
            alt={`Vyshnavi Enterprises ${shirt.name}`}
            width="1200"
            height="1600"
            decoding="async"
          />
        </div>

        <div className="shirt-details-info">
          <p className="eyebrow">VYSHNAVI ENTERPRISES</p>
          <h1 id="shirt-detail-title">{shirt.name}</h1>
          <p className="detail-message">
            Contact us for available sizes, colours and pricing.
          </p>

          <a
            href={`https://wa.me/919930148112?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Enquire on WhatsApp <span aria-hidden="true">→</span>
          </a>

          <p className="enquiry-note">
            Availability is confirmed personally by the Vyshnavi Enterprises team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ShirtDetails;
