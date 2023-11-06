//this is header  for newsExplorer text, home button, sign in button
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoutWhite from "../../Images/logout-white.svg";

const Header = ({ onCreateSignin, loggedIn }) => {
  return (
    <header className="header__section">
      <Link to="/">
        <p className="header__title">NewsExplorer</p>
      </Link>
      {loggedIn ? (
        <div className="header__options">
          <Link to="/">
            <p className="header__home">Home</p>
          </Link>
          <Link to="/saved-articles">
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
