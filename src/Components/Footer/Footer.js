// regular footer ...  look at figma
import "./Footer.css";
import React from "react";
import facebook from "../../Images/fb.svg";
import github from "../../Images/github.svg";

const Footer = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
