//import logo from '../../Images/logo.svg';
import "./App.css";
import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

function App() {
  ////////////////////////////////////// handling all modals ////////////////////////////////////////
  const [modals, setModals] = useState({ signin: false, signup: false, success: false });
  const openModal = (modal) => {
    setModals({ ...modals, [modal]: true });
  };
  const closeModal = (modal) => {
    setModals({ ...modals, [modal]: false });
  };

  ////////////////////////////////////// dhdhdhdhhdhdhhdhd ////////////////////////////////////////

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main />
      </div>
      <About />
      <Footer />

      {modals.signin && (
        <Signin/>
      )}
      {modals.signup && (
        <Signup/>
      )}
    </div>
  );
}

export default App;
