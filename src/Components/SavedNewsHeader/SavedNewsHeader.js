//saved news header
import React from "react";
import { Link } from "react-router-dom";
import "./SavedNewsHeader.css";
import logoutBlack from "../../Images/logout-black.svg";
import menuBlack from "../../Images/menu-black.svg";

const SavedNewsHeader = ({ windowWidth, onCreateMenu }) => {
<<<<<<< HEAD
  return windowWidth < 400 ? (
    <header className="header__section">
      <Link to="/" className="header__links">
        <p className="header__title">NewsExplorer</p>
      </Link>
      <button className="header__menu" type="button" onClick={onCreateMenu}>
        <img src={menuBlack} alt="menu" className="header__menu-pic" />
      </button>
    </header>
  ) : (
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
=======
  return windowWidth < 550 ? (
    <div className="header">
      <header className="header__section-saved">
        <Link to="/" className="header__links">
          <p className="header__title-saved">NewsExplorer</p>
        </Link>
        <button
          className="header__menu-saved"
          type="button"
          onClick={onCreateMenu}
        >
          <img src={menuBlack} alt="menu" className="header__menu-pic" />
        </button>
      </header>
    </div>
  ) : (
    <div className="header">
      <header className="header__section-saved">
        <Link to="/" className="header__links-saved">
          <p className="header__title-saved">NewsExplorer</p>
        </Link>
        <div className="header__options-saved">
          <Link to="/" className="header__links-saved">
            <p className="header__home-saved">Home</p>
          </Link>
          <p className="header__articles-saved">Saved articles</p>
          <div className="header__profile-saved">
            <p className="header__name-saved">Name</p>
            <button className="header__pic-saved">
              <img
                className="header__img-saved"
                src={logoutBlack}
                alt="logout button"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
  );
};

export default SavedNewsHeader;
