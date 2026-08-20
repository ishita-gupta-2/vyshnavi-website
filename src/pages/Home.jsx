import Collection from "./Collection";
import ContactSection from "../components/ContactSection";

function Home({ onSelectShirt }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            VYSHNAVI ENTERPRISES
          </p>

          <h1>
            Timeless style.
            <br />
            Made to be worn.
          </h1>

          <p className="hero-description">
            Discover our collection of thoughtfully selected
            shirts, designed for everyday elegance.
          </p>

          <a href="#collection" className="hero-button">
            Explore Collection →
          </a>
        </div>
      </section>

      <Collection onSelectShirt={onSelectShirt} />

      <section className="about" id="about">
        <p className="eyebrow">
          ABOUT VYSHNAVI
        </p>

        <h2>
          Quality garments.
          <br />
          Thoughtfully selected.
        </h2>

        <p>
          VYSHNAVI ENTERPRISES brings together a curated
          collection of garments with a focus on quality,
          comfort and timeless style.
        </p>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;