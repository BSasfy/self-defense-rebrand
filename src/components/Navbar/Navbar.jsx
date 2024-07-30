import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to="/classes/1">Classes</Link>
      </li>
      <li>
        <Link to="trial">Trial</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
      <li className="shop">
        <Link to="#shop">Shop</Link>
      </li>
    </ul>
  );
}
