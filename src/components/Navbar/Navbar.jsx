import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classes/1"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="trial"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Trial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
        <li className={styles.shop}>
          <NavLink to="#shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
}
