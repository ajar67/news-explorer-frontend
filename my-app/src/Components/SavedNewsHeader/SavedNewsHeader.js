//saved news header
import React from "react";
import { Link } from "react-router-dom";
import "./SavedNewsHeader.css";
import logoutBlack from "../../Images/logout-black.svg";

const SavedNewsHeader = () => {
  return (
    <header className="header__section_saved">
      <Link to="/" className="header__links_saved">
        <p className="header__title_saved">NewsExplorer</p>
      </Link>
      <div className="header__options_saved">
        <Link to="/" className="header__links_saved">
          <p className="header__home_saved">Home</p>
        </Link>
        <p className="header__articles_saved">Saved articles</p>
        <div className="header__profile_saved">
          <p className="header__name_saved">Name</p>
          <button className="header__pic_saved">
            <img
              className="header__img"
              src={logoutBlack}
              alt="logout button"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
