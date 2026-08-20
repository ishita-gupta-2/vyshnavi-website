import ShirtCard from "../components/ShirtCard";
import { shirts } from "../data/shirts";

function Collection({ onSelectShirt }) {
  return (
    <section className="collection" id="collection">
      <div className="section-heading">
        <p className="eyebrow">OUR COLLECTION</p>

        <h2>Made for every occasion.</h2>

        <p className="section-description">
          Explore our collection of shirts.
        </p>
      </div>

      <div className="shirt-grid">
        {shirts.map((shirt) => (
          <ShirtCard
            key={shirt.id}
            shirt={shirt}
            onClick={() => onSelectShirt(shirt)}
          />
        ))}
      </div>
    </section>
  );
}

export default Collection;