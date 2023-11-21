import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about__section">
        <img
          className="about__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfa3VA1mQkS_KEMdnX_ULK72TdzpuMGGGCg&usqp=CAU"
          alt="Author Image"
        />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <div className="about__para">
            <p className="about__para-text">
              This block describes the project author. Here you should indicate
              your name, what you do, and which developmenttehnologies you know.
            </p>
            <p className="about__para-text">
              you can also talk about your experience with practicum what you
              learned there and how you can help potential customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
