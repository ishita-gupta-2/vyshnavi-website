function ShirtCard({ shirt, onClick }) {
  return (
    <article className="shirt-card" onClick={onClick}>
      <div className="shirt-image">
        <img src={shirt.image} alt={shirt.name} />
      </div>

      <div className="shirt-card-info">
        <h3>{shirt.name}</h3>
        <span>View details →</span>
      </div>
    </article>
  );
}

export default ShirtCard;