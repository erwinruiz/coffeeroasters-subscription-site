import classes from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/create-your-plan">Create Your Plan</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
