<<<<<<< HEAD
// ths is Main... got some text heading maybe, little paragraph, search button form
=======
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
import "./Main.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";

const Main = ({ windowWidth, onSearch }) => {
  return (
<<<<<<< HEAD
    <div className="main__section">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__para">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div>
        <SearchForm windowWidth={windowWidth} onSearch={onSearch} />
=======
    <div className="main">
      <div className="main__section">
        <div className="main__content">
          <h1 className="main__title">What&apos;s going on in the world?</h1>
          <p className="main__para">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <div>
          <SearchForm windowWidth={windowWidth} onSearch={onSearch} />
        </div>
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
      </div>
    </div>
  );
};

export default Main;
