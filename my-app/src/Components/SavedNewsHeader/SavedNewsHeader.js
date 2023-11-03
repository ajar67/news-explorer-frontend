//saved news header
import React from "react";
//import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  return (
    <header className="header__section_saved">
      <div className="header__title_saved">NewsExplorer</div>
      <div className="header__options_saved">
        <p className="header__home_saved">Home</p>
        <button className="header__button_saved" type="button">
          Saved articles
        </button>
        <button className="header__button_signin" type="button">
          Name of user
        </button>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
