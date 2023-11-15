import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import { apiKey } from "../../utils/constants";

const SearchForm = ({ windowWidth, onSearch }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    setStartDate(sevenDaysAgo.toISOString().split("T")[0]);
    setEndDate(currentDate.toISOString().split("T")[0]);
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setErrorMessage("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const validSearch = /[a-zA-Z]/.test(searchValue);
    if (validSearch) {
      onSearch({
        userInput: searchValue,
        apiKey: apiKey,
        fromDate: startDate,
        toDate: endDate,
        pageSize: 100,
      });
    } else {
      setErrorMessage("Please enter a keyword");
    }
  };

  return windowWidth < 500 ? (
    <div className="search">
      <form className="search__window">
        <input
          value={searchValue}
          className="search__window-input"
          type="text"
          placeholder="Enter topic"
          onChange={handleSearchChange}
        />
        <button
          type="button"
          onClick={handleSearchSubmit}
          className="search__window-button"
        >
          Search
        </button>
        <p className={errorMessage === "" ? "error__none" : "error"}>
          {errorMessage}
        </p>
      </form>
    </div>
  ) : (
    <form className="search">
      <input
        value={searchValue}
        className="search__input"
        type="text"
        placeholder="Enter topic"
        onChange={handleSearchChange}
      />
      <button
        type="button"
        className="search__button"
        onClick={handleSearchSubmit}
      >
        Search
      </button>
      <p className={errorMessage === "" ? "error__none" : "error"}>
        {errorMessage}
      </p>
    </form>
  );
};

export default SearchForm;
