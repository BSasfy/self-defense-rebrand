import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
      console.log("true");
    } else {
      setScrolling(false);
      console.log("false");
    }
  };

  return (
    <nav>
      <ul className={scrolling ? styles.navScroll : styles.navbar}>
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
