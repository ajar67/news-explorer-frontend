// this si the section where the cards are created

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import saveNormal from "../../Images/save-normal.svg";
import saveHover from "../../Images/save-hover.svg";
import saveMarked from "../../Images/save-marked.svg";
import trashNormal from "../../Images/trash-normal.svg";
import trashHover from "../../Images/trash-hover.svg";
//import { apiKey } from "../../utils/constants";

const NewsCard = ({
  date,
  title,
  description,
  author,
  image,
  onLikeCard,
  cardUrl,
  loggedIn,
}) => {
  const location = useLocation();
  const [saveSrc, setSaveSrc] = useState(saveNormal);
  const [trashSrc, setTrashSrc] = useState(trashNormal);
  const [buttonText, setButtonText] = useState("card__button-text_hidden");
  const handleMouseOver = () => {
    if (location.pathname === "/saved-articles") {
      setTrashSrc(trashHover);
      setButtonText("card__button-text");
    } else {
      setSaveSrc(saveHover);
      setButtonText("card__button-text");
    }
  };
  const handleMouseOut = () => {
    if (location.pathname === "/saved-articles") {
      setTrashSrc(trashNormal);
      setButtonText("card__button-text_hidden");
    } else {
      setSaveSrc(saveNormal);
      setButtonText("card__button-text_hidden");
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const [saveToggle, setSaveToggle] = useState(false);
  const handleSaveToggle = () => {
    if (loggedIn) {
      onLikeCard(this);
      setSaveToggle((prevSaveToggle) => !prevSaveToggle);
    } else {
      return;
    }
  };

  return (
    <li className="card">
      <img src={image} className="card__image" alt="card scenery" />
      <div className="card__picture-group">
        <p
          className={
            location.pathname === "/saved-articles"
              ? "card__category"
              : "card__category-none"
          }
        >
          Nature
        </p>
        <p className={buttonText}>
          {location.pathname === "/saved-articles"
            ? "Remove from saved"
            : "Sign in to save"}
        </p>
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="card__button"
          type="button"
          onClick={handleSaveToggle}
        >
          <img
            src={
              location.pathname === "/saved-articles"
                ? trashSrc
                : saveToggle
                ? saveMarked
                : saveSrc
            }
            className="card__button-image"
            alt="card button"
          />
        </button>
      </div>
      <div className="card__info">
        <p className="card__date">{formatDate(date)}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__author">{author}</p>
      </div>
    </li>
  );
};

export default NewsCard;
