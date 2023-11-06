//this is the component on the home page showing the results from the search

import React from "react";
import "./SearchResults.css";
import NewsCardsList from "../NewsCardsList/NewsCardsList";

const SearchResults = () => {
  return (
    <div className="results">
      <h2 className="results__title">Search results</h2>
      <NewsCardsList />
      <div className="results__button">
        <button type="button" className="results__button_text">
          Show more
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
