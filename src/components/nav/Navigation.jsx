import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.png";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Impact", path: "/impact" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // close on route change (good UX for mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg ${styles.navbar}`}
    >
      <div className="container-fluid">

        {/* Brand */}
        <button
          className={`navbar-brand ${styles.brand} btn btn-link p-0`}
          onClick={() => handleNavClick("/")}
        >
          <img src={logo} alt="Logo" />
        </button>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            {LINKS.map(({ label, path }) => (
              <li className="nav-item" key={path}>
                <button
                  className={`nav-link btn btn-link ${styles.link} ${
                    isActive(path) ? styles.active : ""
                  }`}
                  onClick={() => handleNavClick(path)}
                >
                  {label}
                </button>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}
