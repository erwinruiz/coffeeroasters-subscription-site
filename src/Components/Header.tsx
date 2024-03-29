import classes from "./Header.module.css";
import { useState, Fragment } from "react";
import MobileMenu from "./UI/MobileMenu";
import Backdrop from "./UI/Backdrop";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  let navigate = useNavigate();

  const menuHandler = () => {
    setMobileMenuIsOpen((state) => !state);
  };

  const logoHandler = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <img
          src="./assets/shared/desktop/logo.svg"
          alt="logo"
          className={classes.logo}
          onClick={logoHandler}
        />
        {!mobileMenuIsOpen && (
          <svg
            onClick={menuHandler}
            className={classes["icon-hamburger"]}
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
              fill="#333D4B"
              fillRule="evenodd"
            />
          </svg>
        )}
        {mobileMenuIsOpen && (
          <svg
            onClick={menuHandler}
            className={classes["icon-close"]}
            width="14"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z"
              fill="#333D4B"
              fillRule="evenodd"
            />
          </svg>
        )}
        {/* nav menu */}
        <nav>
          <ul>
            <li>
              <Link to="/" aria-label="Home page">Home</Link>
            </li>
            <li>
              <Link to="/about-us" aria-label="About us page">About us</Link>
            </li>
            <li>
              <Link to="/subscribe" aria-label="Subscribe page">Create your plan</Link>
            </li>
          </ul>
        </nav>
      </header>
      {mobileMenuIsOpen && <MobileMenu closeMenu={menuHandler} />}
      {mobileMenuIsOpen && <Backdrop onClick={menuHandler} />}
    </Fragment>
  );
}

export default Header;
