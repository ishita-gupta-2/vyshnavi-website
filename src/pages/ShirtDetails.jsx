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
        type="button"
      >
        <span aria-hidden="true">←</span> Back to the edit
      </button>

      <div className="shirt-details-content">
        <div className="shirt-details-image">
          <img
            src={shirt.image}
            alt={shirt.name}
            width="1200"
            height="1600"
            decoding="async"
          />
          <span className="details-code">{shirt.code}</span>
        </div>

        <div className="shirt-details-info">
          <p className="eyebrow">
            {shirt.occasion} · {shirt.category} · {shirt.code}
          </p>

          <h1>{shirt.name}</h1>

          <p>{shirt.description}</p>

          <ul className="product-details">
            {shirt.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>

          <a
            href={`https://wa.me/919930148112?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Enquire on WhatsApp <span aria-hidden="true">↗</span>
          </a>

          <p className="enquiry-note">Pricing, colours, and current availability are confirmed personally.</p>
        </div>
      </div>
    </section>
  );
}

export default ShirtDetails;
