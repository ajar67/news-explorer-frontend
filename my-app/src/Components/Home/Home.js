import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Home = ({ openSigninModal, loggedIn }) => {
  return (
    <>
      <div className="container">
        <Header onCreateSignin={openSigninModal} loggedIn={loggedIn} />
        <Main />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
