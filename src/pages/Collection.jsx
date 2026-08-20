import { useState } from "react";

import ShirtCard from "../components/ShirtCard";
import { shirtOccasions, shirts } from "../data/shirts";

function Collection({ onSelectShirt }) {
  const [activeOccasion, setActiveOccasion] = useState("all");
  const visibleOccasions = shirtOccasions.filter(
    (occasion) =>
      activeOccasion === "all" || occasion.id === activeOccasion
  );

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

      <div className="occasion-filter" aria-label="Filter shirts by occasion">
        {[{ id: "all", label: "All shirts" }, ...shirtOccasions].map(
          (occasion) => (
            <button
              className={activeOccasion === occasion.id ? "is-active" : ""}
              key={occasion.id}
              onClick={() => setActiveOccasion(occasion.id)}
              type="button"
              aria-pressed={activeOccasion === occasion.id}
            >
              {occasion.label}
              <span>
                {occasion.id === "all"
                  ? shirts.length
                  : shirts.filter((shirt) => shirt.occasion === occasion.id).length}
              </span>
            </button>
          )
        )}
      </div>

      <div className="occasion-groups" aria-live="polite">
        {visibleOccasions.map((occasion) => {
          const occasionShirts = shirts.filter(
            (shirt) => shirt.occasion === occasion.id
          );

          if (!occasionShirts.length) {
            return null;
          }

          return (
            <section className="occasion-group" key={occasion.id}>
              <div className="occasion-heading">
                <div>
                  <p className="eyebrow">DRESSING MODE</p>
                  <h3>{occasion.label}</h3>
                </div>
                <p>{occasion.description}</p>
                <span>{String(occasionShirts.length).padStart(2, "0")}</span>
              </div>

              <div className="shirt-grid">
                {occasionShirts.map((shirt) => (
                  <ShirtCard
                    key={shirt.id}
                    shirt={shirt}
                    onClick={() => onSelectShirt(shirt)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Collection;
