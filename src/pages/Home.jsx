import Collection from "./Collection";
import ContactSection from "../components/ContactSection";
import heroShirt from "../assets/shirts/shirt-08.jpg";
import detailShirt from "../assets/shirts/shirt-02.jpg";

function Home({ onSelectShirt }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            A FOCUSED EDIT · CURATED MENSWEAR
          </p>

          <h1>
            Shirts for a life
            <em> well dressed.</em>
          </h1>

          <p className="hero-description">
            A focused collection of everyday shirts selected for comfort,
            character, and quiet confidence.
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

        <div className="hero-visual" aria-label="Featured Vyshnavi shirts">
          <div className="hero-image hero-image-main">
            <img
              src={heroShirt}
              alt="The Signature shirt from Vyshnavi Enterprises"
              width="1200"
              height="1600"
              decoding="async"
            />
          </div>
          <div className="hero-image hero-image-detail">
            <img
              src={detailShirt}
              alt="The Regent shirt from Vyshnavi Enterprises"
              width="1200"
              height="1600"
              decoding="async"
            />
          </div>
          <p className="hero-note">The 2026 Edit<br />01 — 08</p>
        </div>
      </section>

      <Collection onSelectShirt={onSelectShirt} />

      <section className="about" id="about">
        <div className="about-heading">
          <p className="eyebrow">OUR POINT OF VIEW</p>
          <h2>Less noise.<br /><em>Better choices.</em></h2>
        </div>

        <div className="about-copy">
          <p>
            Vyshnavi Enterprises brings together a concise collection of shirts
            with a focus on versatility, comfort, and enduring style.
          </p>
          <div className="about-principles">
            <span>01 / Curated selection</span>
            <span>02 / Personal assistance</span>
            <span>03 / Everyday versatility</span>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;
