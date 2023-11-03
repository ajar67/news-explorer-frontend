//this is header  for newsExplorer text, home button, sign in button
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../Images/logout.svg";

const Header = ({ onCreateSignin, loggedIn }) => {
  return (
    <header className="header__section">
      <Link to="/">
        <div className="header__options">
          <div className="header__title">NewsExplorer</div>
          <p className="header__home">Home</p>
        </div>
      </Link>
      {loggedIn ? (
        <div>
          <Link to="/saved-articles">
            <p>Saved articles</p>
          </Link>
          <div>
            <p>Name</p>
            <img src={logout} alt="logout button" />
          </div>
        </div>
      ) : (
          <button className="header__button_signin" onClick={onCreateSignin}>
            Sign in
          </button>
      )}
    </header>
  );
};

export default Header;
