// this si the section where the cards are created

import React from "react";
import "./NewsCard.css";

const NewsCard = () => {
  return (
    <div className="card">
      <div className="card__picture">
        <img src="" className="card__image" alt="card image" />
        <button className="card__button_save">
          <img src="" className="card__button_image" alt="card save button" />
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
