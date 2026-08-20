import { useEffect, useState } from "react";

import logo from "../assets/logo/vyshnavi-logo.jpg";

const navigationItems = [
  { label: "Collection", section: "collection" },
  { label: "Contact", section: "contact" },
];

function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navigate = (event, section) => {
    event.preventDefault();
    setIsMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="/" className="brand" onClick={(event) => navigate(event, "top")}>
          <img
            src={logo}
            alt="Vyshnavi Enterprises"
            width="1254"
            height="1254"
          />
        </a>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <a
              href={`#${item.section}`}
              key={item.section}
              onClick={(event) => navigate(event, item.section)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-links">
          {navigationItems.map((item, index) => (
            <a
              href={`#${item.section}`}
              key={item.section}
              onClick={(event) => navigate(event, item.section)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
        <p>Thirty-one shirts. One considered collection.</p>
      </div>
    </header>
  );
}

export default Navbar;
