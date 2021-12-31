import classes from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  closeMenu: () => void;
};

function MobileMenu({ closeMenu }: MobileMenuProps) {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link onClick={closeMenu} to="/" aria-label="Home page">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/about-us" aria-label="About us page">
            About Us
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="/subscribe" aria-label="Subscribe page">
            Create Your Plan
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
