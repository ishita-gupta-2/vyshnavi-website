function ShirtCard({ shirt, onClick, eager = false }) {
  return (
    <article className="shirt-card">
      <a
        className="shirt-card-link"
        href={`?product=${shirt.id}`}
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
        aria-label={`View details for ${shirt.name}`}
      >
        <div className="shirt-image">
          <img
            src={shirt.image}
            alt={`Vyshnavi Enterprises ${shirt.name}`}
            width="1200"
            height="1600"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
          />
        </div>

        <div className="shirt-card-info">
          <h3>{shirt.name}</h3>
          <span>View details <span aria-hidden="true">→</span></span>
        </div>
      </a>
    </article>
  );
}

export default ShirtCard;
