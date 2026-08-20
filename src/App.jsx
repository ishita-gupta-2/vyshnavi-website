import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShirtDetails from "./pages/ShirtDetails";
import { shirts } from "./data/shirts";

import "./App.css";

function getProductFromUrl() {
  const productId = new URLSearchParams(window.location.search).get("product");
  return shirts.find((shirt) => shirt.id === productId) ?? null;
}

function App() {
  const [selectedShirt, setSelectedShirt] = useState(getProductFromUrl);

  useEffect(() => {
    const handlePopState = () => setSelectedShirt(getProductFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = selectedShirt
      ? `${selectedShirt.name} | Vyshnavi Enterprises`
      : "Vyshnavi Enterprises | Curated Shirts";
  }, [selectedShirt]);

  const selectShirt = (shirt) => {
    window.history.pushState({}, "", `?product=${shirt.id}`);
    setSelectedShirt(shirt);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = (section = "top") => {
    window.history.pushState({}, "", section === "top" ? "/" : `/#${section}`);
    setSelectedShirt(null);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar onNavigate={navigateHome} />

      <main id="main-content">
        {selectedShirt ? (
          <ShirtDetails
            shirt={selectedShirt}
            onBack={() => navigateHome("collection")}
          />
        ) : (
          <Home onSelectShirt={selectShirt} />
        )}
      </main>

      <Footer />

      <a
        className="floating-enquiry"
        href="https://wa.me/919930148112?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20Vyshnavi%20collection."
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire about the collection on WhatsApp"
      >
        <span>Enquire</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      </a>
    </div>
  );
}

export default App;
