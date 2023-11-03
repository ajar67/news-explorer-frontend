// the saved news component

import React from "react";
import './SavedNews.css';
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";

const SavedNews = () => {
  return (
    <div className="saved__section">
      <SavedNewsHeader />
      <div className="saved__header">
        <p className="saved__articles">Saved articles</p>
        <h2 className="saved__note">Elise, you have 5 saved articles</h2>
        <p className="saved__keywords">
          By keywords:{" "}
          <span className="saved__span">Nature, Yellowstone, amd 2 other</span>{" "}
        </p>
      </div>
      <div className="saved__cards">cards section</div>
      <Footer />
    </div>
  );
};

export default SavedNews;
