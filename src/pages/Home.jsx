import Collection from "./Collection";
import ContactSection from "../components/ContactSection";
import heroShirt from "../assets/shirts/shirt-08.jpg";
import detailShirt from "../assets/shirts/shirt-02.jpg";

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

        <div className="hero-visual" aria-label="Featured Vyshnavi Enterprises shirts">
          <div className="hero-image hero-image-main">
            <img
              src={heroShirt}
              alt="Vyshnavi Enterprises SHIRT-08"
              width="1200"
              height="1600"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-image hero-image-detail">
            <img
              src={detailShirt}
              alt="Vyshnavi Enterprises SHIRT-02"
              width="1200"
              height="1600"
              decoding="async"
            />
          </div>
          <p className="hero-note">
            The complete edit<br />Thirty-one shirts
          </p>
        </div>
      </section>

      <Collection onSelectShirt={onSelectShirt} />

      <ContactSection />
    </>
  );
}

export default Home;
