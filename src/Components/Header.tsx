import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img
        src="./assets/shared/desktop/logo.svg"
        alt="logo"
        className={classes.logo}
      />
      <svg
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
    </header>
  );
}

export default Header;
