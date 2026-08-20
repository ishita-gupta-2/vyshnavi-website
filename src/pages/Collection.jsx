import ShirtCard from "../components/ShirtCard";
import { shirts } from "../data/shirts";

function Collection({ onSelectShirt }) {
  return (
    <section className="collection" id="collection">
      <div className="section-heading">
        <p className="eyebrow">THE CURRENT EDIT</p>

        <h2>A considered collection. Endless rotation.</h2>

        <p className="section-description">
          Thirty-one shirts presented as one focused catalogue. Select any
          style to enquire about sizes, colours and pricing.
        </p>
      </div>

      <div className="shirt-grid">
        {shirts.map((shirt, index) => (
          <ShirtCard
            key={shirt.id}
            shirt={shirt}
            eager={index < 4}
            onClick={() => onSelectShirt(shirt)}
          />
        ))}
      </div>
    </section>
  );
}

export default Collection;
