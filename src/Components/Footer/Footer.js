<<<<<<< HEAD
// regular footer ...  look at figma
import "./Footer.css";
import React from "react";
=======
import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
import facebook from "../../Images/fb.svg";
import github from "../../Images/github.svg";

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="footer__section">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__content">
        <div className="footer__names">
          <p className="footer__name">Home</p>
          <p className="footer__name">Practicum</p>
        </div>
        <div className="footer__icons">
          <img className="footer__icon" src={github} alt="github icon" />
          <img className="footer__icon" src={facebook} alt="facebook icon" />
=======
    <div className="footer">
      <div className="footer__section">
        <p className="footer__copyright">
          © 2020 Supersite, Powered by News API
        </p>
        <div className="footer__content">
          <div className="footer__names">
            <Link to="/" className="footer__link">
              <p className="footer__name">Home</p>
            </Link>
            <a
              href="https://tripleten.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__name footer__link"
            >
              Practicum
            </a>
          </div>
          <div className="footer__icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={github} alt="github icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={facebook}
                alt="facebook icon"
              />
            </a>
          </div>
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
        </div>
      </div>
    </div>
  );
};

export default Footer;
