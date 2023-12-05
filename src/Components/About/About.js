import "./About.css";
import React from "react";
import authorPic from "../../Images/authorPic.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__section">
        <img className="about__image" src={authorPic} alt="Author Image" />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <div className="about__para">
            <p className="about__para-text">
              Hi, my name is Anthony Ranieri. I created this website and am a
              full stack software engineer and I am in love with it. I know a
              lot of computer languages but I am best with React applications
              and Express for backend.
            </p>
            <p className="about__para-text">
              I learned everything I know from Triple Tens softare engineer
              bootcamp. I learned so much and owe it all to them. Joining the
              program was the best academic decision that I could have made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
