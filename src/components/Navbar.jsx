import logo from "../assets/logo/vyshnavi-logo.jpg";

function Navbar({ onNavigate }) {
  const navigate = (event, section) => {
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="/" className="brand" onClick={(event) => navigate(event, "top")}>
        <img
          src={logo}
          alt="Vyshnavi Enterprises"
          width="1254"
          height="1254"
          decoding="async"
        />
        <span>Vyshnavi<br />Enterprises</span>
      </a>

      <div className="nav-links">
        <a href="#collection" onClick={(event) => navigate(event, "collection")}>Collection</a>
        <a href="#about" onClick={(event) => navigate(event, "about")}>Approach</a>
        <a className="nav-enquire" href="#contact" onClick={(event) => navigate(event, "contact")}>Enquire</a>
      </div>
    </nav>
  );
}

export default Navbar;
