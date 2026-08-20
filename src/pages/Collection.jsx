import ShirtCard from "../components/ShirtCard";
import { shirts } from "../data/shirts";

function Collection({ onSelectShirt }) {
  return (
    <section className="collection" id="collection">
      <div className="section-heading">
        <p className="eyebrow">THE CURRENT EDIT</p>

        <h2>A considered collection. Endless rotation.</h2>

        <p className="section-description">
          A focused selection of versatile shirts, chosen for comfort, character,
          and repeat wear.
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
