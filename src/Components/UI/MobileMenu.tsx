import classes from "./MobileMenu.module.css";

function MobileMenu() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Create your plan</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
