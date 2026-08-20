import logo from "../assets/logo/vyshnavi-logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="brand">
        <img src={logo} alt="Vyshnavi Enterprises" />
      </a>

      <div className="nav-links">
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;