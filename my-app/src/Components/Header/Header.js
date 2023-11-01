//this is header  for newsExplorer text, home button, sign in button
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__section">
      <div className="header__title">NewsExplorer</div>
      <div className="header__options">
        <button className="header__button_home">Home</button>
        <button className="header__button_signin">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
