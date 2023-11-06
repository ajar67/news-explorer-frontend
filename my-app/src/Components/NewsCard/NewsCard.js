// this si the section where the cards are created

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import saveNormal from "../../Images/save-normal.svg";
import saveHover from "../../Images/save-hover.svg";
//import saveMarked from "../../Images/save-marked.svg";
import trashNormal from "../../Images/trash-normal.svg";
import trashHover from "../../Images/trash-hover.svg";

const NewsCard = () => {
  const location = useLocation();
  const [saveSrc, setSaveSrc] = useState(saveNormal);
  const [trashSrc, setTrashSrc] = useState(trashNormal);
  const [buttonText, setButtonText] = useState("card__button_text-hidden");
  const handleMouseOver = () => {
    if (location.pathname === "/saved-articles") {
      setTrashSrc(trashHover);
      setButtonText("card__button_text");
    } else {
      setSaveSrc(saveHover);
      setButtonText("card__button_text");
    }
  };
  const handleMouseOut = () => {
    if (location.pathname === "/saved-articles") {
      setTrashSrc(trashNormal);
      setButtonText("card__button_text-hidden");
    } else {
      setSaveSrc(saveNormal);
      setButtonText("card__button_text-hidden");
    }
  };
  return (
    <div className="card">
      <img
        src="https://media.glamourmagazine.co.uk/photos/647615867c99445ff389fce6/16:9/w_2580,c_limit/GREECE%20300523%20main.jpg"
        className="card__image"
        alt="card image"
      />
      <div className="card__picture_group">
        <p
          className={
            location.pathname === "/saved-articles"
              ? "card__category"
              : "card__category_none"
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
        >
          <img
            src={location.pathname === "/saved-articles" ? trashSrc : saveSrc}
            className="card__button_image"
            alt="card button"
          />
        </button>
      </div>
      <div className="card__info">
        <p className="card__date">September 7, 2020</p>
        <h2 className="card__title">card title</h2>
        <p className="card__description">
          this is where the card description of the image will go
        </p>
        <p className="card__author">treehugger</p>
      </div>
    </div>
  );
};

export default NewsCard;
