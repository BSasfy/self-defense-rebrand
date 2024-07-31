import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div style={{ maxWidth: "1920px" }}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes/1"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trial"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Trial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.shop}>
            <NavLink to="#shop">Shop</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}
