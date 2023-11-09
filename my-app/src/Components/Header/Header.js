//this is header  for newsExplorer text, home button, sign in button
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoutWhite from "../../Images/logout-white.svg";
import menuWhite from "../../Images/menu-white.svg";
import closeButton from "../../Images/closeButton.svg";

const Header = ({
  onCreateSignin,
  loggedIn,
  windowWidth,
  name,
  onCreateMenu,
  isOpen,
  onClose,
}) => {
  return windowWidth < 400 ? (
    <header className={`header__section header__section_${name}`}>
      <Link to="/" className="header__links">
        <p className={isOpen ? `header__title-white` : `header__title header__title_${name}`}>NewsExplorer</p>
      </Link>
      <button
        className="header__menu"
        type="button"
        onClick={isOpen ? onClose : onCreateMenu}
      >
        <img
          src={isOpen ? closeButton : menuWhite}
          alt="menu"
          className="header__menu-pic"
        />
      </button>
    </header>
  ) : (
    <header className="header__section">
      <Link to="/" className="header__links">
        <p className="header__title">NewsExplorer</p>
      </Link>
      {loggedIn ? (
        <div className="header__options">
          <p className="header__home">Home</p>
          <Link to="/saved-articles" className="header__links">
            <p className="header__articles">Saved articles</p>
          </Link>
          <div className="header__profile">
            <p className="header__name">Name</p>
            <button className="header__pic">
              <img
                className="header__img"
                src={logoutWhite}
                alt="logout button"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="header__options">
          <p className="header__home">Home</p>
          <button className="header__button_signin" onClick={onCreateSignin}>
            Sign in
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
