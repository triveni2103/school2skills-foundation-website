import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from '../../assets/logo.png';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
  <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">

        {/* BRAND */}
        <span
          className={`navbar-brand ${styles.brand}`}
          role="button"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="" />
        </span>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Programs", path: "/programs" },
              { label: "Impact", path: "/impact" },
              { label: "Get Involved", path: "/get-involved" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li className="nav-item" key={path}>
                <span
                  role="button"
                  onClick={() => navigate(path)}
                  className={`nav-link ${styles.link} ${
                    isActive(path) ? styles.active : ""
                  }`}
                >
                  {label}
                </span>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}
