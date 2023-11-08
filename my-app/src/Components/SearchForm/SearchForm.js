//this is SearchForm where you searh for topics
import "./SearchForm.css";
import React from "react";

const SearchForm = ({ windowWidth }) => {
  return windowWidth < 400 ? (
    <div className="search__window">
      <input
        className="search__window_input"
        type="text"
        placeholder="Enter topic"
      />
      <button className="search__window_button">Search</button>
    </div>
  ) : (
    <div className="search">
      <input className="search__input" type="text" placeholder="Enter topic" />
      <button className="search__button">Search</button>
    </div>
  );
};

export default SearchForm;
