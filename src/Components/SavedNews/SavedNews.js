import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import Footer from "../Footer/Footer";

const SavedNews = ({ windowWidth, onCreateMenu, savedCards, logout }) => {
  const numberOfCards = savedCards.length;
  console.log(numberOfCards);
  return (
    <div className="saved">
      <SavedNewsHeader
        windowWidth={windowWidth}
        onCreateMenu={onCreateMenu}
        logout={logout}
      />
      <div className="saved__section">
        <div className="saved__header">
          <p className="saved__articles">Saved articles</p>
          <h2 className="saved__note">{`Elise, you have ${numberOfCards} saved articles`}</h2>
          <p className="saved__keywords">
            By keywords:
            <span className="saved__span">
              Nature, Yellowstone, amd 2 other
            </span>
          </p>
        </div>
      </div>
      <div className="saved__cards">
        <NewsCardsList cardsData={savedCards} />
      </div>
      <Footer />
    </div>
  );
};

export default SavedNews;
