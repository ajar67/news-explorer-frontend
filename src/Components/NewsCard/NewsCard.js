import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import saveNormal from "../../Images/save-normal.svg";
import saveHover from "../../Images/save-hover.svg";
import saveMarked from "../../Images/save-marked.svg";
import trashNormal from "../../Images/trash-normal.svg";
import trashHover from "../../Images/trash-hover.svg";

const NewsCard = ({
  date,
  title,
  text,
  author,
  source,
  image,
  onLikeCard,
  link,
  loggedIn,
  searchKeyword,
  id,
  onDeleteCard,
}) => {
  const location = useLocation();
  const [saveSrc, setSaveSrc] = useState(saveNormal);
  const [trashSrc, setTrashSrc] = useState(trashNormal);
  const [buttonText, setButtonText] = useState("card__button-text_hidden");
  const token = localStorage.getItem("jwt");
  const cardInfo = {
    keyword: searchKeyword,
    title: title,
    text: text,
    date: date,
    source: source?.name,
    author: author,
    link: link,
    image: image,
  };
  const handleMouseOver = () => {
    if (location.pathname === "/saved-articles") {
      setTrashSrc(trashHover);
      setButtonText("card__button-text");
    } else {
      setSaveSrc(saveHover);
      if (!loggedIn) {
        setButtonText("card__button-text");
      }
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

  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const [saved, setIsSaved] = useState(false);

  const handleSaveCard = () => {
    if (loggedIn && !saved) {
      onLikeCard(token, cardInfo);
      if (!saved) {
        setIsSaved((prevSaved) => !prevSaved);
      }
    }
  };

  const handleDeleteCard = () => {
    onDeleteCard(id, token);
    setIsSaved((prevSaved) => !prevSaved);
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
          {searchKeyword}
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
          onClick={
            location.pathname === "/" ? handleSaveCard : handleDeleteCard
          }
        >
          <img
            src={
              location.pathname === "/saved-articles"
                ? trashSrc
                : saved
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
        <p className="card__description">{text}</p>
        <p className="card__author">{author}</p>
      </div>
    </li>
  );
};

export default NewsCard;
