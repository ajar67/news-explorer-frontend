// preloader
import React from "react";
import "./Preloader.css";

const PreLoader = () => {
  return (
    <div className="preloader__section">
      <div className="circle-preloader"></div>
      <p className="preloader__info">Searching for news...</p>
    </div>
  );
};

export default PreLoader;
