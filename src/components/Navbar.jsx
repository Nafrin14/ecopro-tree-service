import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo1.webp";

const LEFT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
];

const RIGHT_LINKS = [
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const allLinks = [...LEFT_LINKS, ...RIGHT_LINKS];
  useEffect(() => {

  const sections = document.querySelectorAll("section[id]");


  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if(entry.isIntersecting){

          setActiveSection(entry.target.id);

        }

      });

    },
    {
      threshold:0.2,
    }
  );


  sections.forEach((section)=>{
    observer.observe(section);
  });


  return () => observer.disconnect();


}, []);

 const isActive = (href) => {

  if(href === "/"){
    return activeSection === "home";
  }

  return href === `#${activeSection}`;

};

  return (
    <header className="navbar-wrapper">
      {/* Desktop */}
      <nav className="navbar-inner navbar-desktop">

        <ul className="nav-links nav-links--left">
          {LEFT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${
                  isActive(link.href) ? " nav-link--active" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="nav-divider"></span>

        {/* Logo */}
        <a href="/" className="navbar-logo">
          <span className="navbar-logo__word">ECO</span>

          <span className="navbar-logo__icon-wrap">
            <img
              src={logo}
              alt="EcoPro Tree Service"
              className="navbar-logo__image"
            />
          </span>

          <span className="navbar-logo__word">PRO</span>
        </a>

        <span className="nav-divider"></span>

        <ul className="nav-links nav-links--right">
          {RIGHT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${
                  isActive(link.href) ? " nav-link--active" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>

      {/* Mobile */}
      <div className="navbar-mobile-row">
        <a href="/" className="navbar-logo navbar-logo--mobile">

          <span className="navbar-logo__word">ECO</span>

          <img
            src={logo}
            alt="EcoPro Tree Service"
            className="navbar-logo__image"
          />

          <span className="navbar-logo__word">PRO</span>

        </a>

        <button
          className={`navbar-hamburger${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <ul className="nav-mobile-menu">
          {allLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${
                  isActive(link.href) ? " nav-link--active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}