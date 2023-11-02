//this is header  for newsExplorer text, home button, sign in button
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onCreateSignin }) => {
  return (
    <header className="header__section">
      <div className="header__title">NewsExplorer</div>
      <div className="header__options">
        <p className="header__home">Home</p>
        <button className="header__button_signin" onClick={onCreateSignin}>
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
