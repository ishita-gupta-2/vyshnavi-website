import Collection from "./Collection";
import ContactSection from "../components/ContactSection";
import heroShirt from "../assets/hero-shirts.png";

function Home({ onSelectShirt }) {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">A FOCUSED EDIT · VYSHNAVI ENTERPRISES</p>
          <h1 id="hero-title">
            Shirts for a life
            <em> well dressed.</em>
          </h1>
          <p className="hero-description">
            A focused collection of everyday shirts for work, weekends and
            every occasion.
          </p>

          <div className="hero-actions">
            <a href="#collection" className="primary-button">
              Explore the edit
            </a>
            <a href="#contact" className="text-link">
              Speak with us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured Vyshnavi Enterprises shirt">
          <div className="hero-image hero-image-main">
            <img
              src={heroShirt}
              alt="Three neutral-toned shirts hanging on a minimalist clothing rail"
              width="626"
              height="417"
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero-image-label" aria-hidden="true">
              The everyday edit · 01
            </span>
          </div>
          <p className="hero-note">
            Considered colour<br />Everyday ease
          </p>
        </div>
      </section>

      <Collection onSelectShirt={onSelectShirt} />

      <ContactSection />
    </>
  );
}

export default Home;
