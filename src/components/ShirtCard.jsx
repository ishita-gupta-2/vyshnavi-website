function ShirtCard({ shirt, onClick }) {
  return (
    <article className="shirt-card">
      <a
        className="shirt-card-link"
        href={`?product=${shirt.id}`}
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
        aria-label={`View ${shirt.name}`}
      >
      <div className="shirt-image">
        <img
          src={shirt.image}
          alt={shirt.name}
          width="1200"
          height="1600"
          loading="lazy"
          decoding="async"
        />
        <span className="shirt-code">{shirt.code}</span>
      </div>

      <div className="shirt-card-info">
        <div>
          <p>{shirt.category}</p>
          <h3>{shirt.name}</h3>
        </div>
        <span aria-hidden="true">View</span>
      </div>
      </a>
    </article>
  );
}

export default ShirtCard;
