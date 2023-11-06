// the saved news component
// add card component to line #25 for the card section
import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../Footer/Footer";

const SavedNews = () => {
  return (
    <>
      <SavedNewsHeader />
      <div className="saved__section">
        <div className="saved__header">
          <p className="saved__articles">Saved articles</p>
          <h2 className="saved__note">Elise, you have 5 saved articles</h2>
          <p className="saved__keywords">
            By keywords:
            <span className="saved__span">
              Nature, Yellowstone, amd 2 other
            </span>
          </p>
        </div>
      </div>
      <div className="saved__cards">
        <NewsCard />
      </div>
      <Footer />
    </>
  );
};

export default SavedNews;
