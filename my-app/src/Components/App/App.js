//import logo from '../../Images/logo.svg';
import "./App.css";
import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [searchFocus, setSearchFocus] = useState(true);
  const location = useLocation();
  ////////////////////////////////////// handling all modals ////////////////////////////////////////
  const [modals, setModals] = useState({
    signin: false,
    signup: false,
    success: false,
  });
  const openModal = (modal) => {
    setModals({ ...modals, [modal]: true });
  };
  const closeModal = (modal) => {
    setModals({ ...modals, [modal]: false });
  };

  ////////////////////////////////////// function for when pressing on signin or signup buttons ////////////////////////////////////////
  const closeSignupModal = () => {
    closeModal("signup");
  };

  const openSigninModal = () => {
    closeModal("signup");
    openModal("signin");
  };

  const closeSigninModal = () => {
    closeModal("signin");
  };

  const openSignupModal = () => {
    closeModal("signin");
    openModal("signup");
  };

  /////////////////////////////////////////////////// useEffets in APP /////////////////////////////////////
  /*useEffect(() => {
    //if (!modals) return;
    const closeModalDocClick = (e) => {
      if (
        Object.values(modals).some((isOpen) => isOpen) &&
        !e.target.closest(".modal__section")
      ) {
        Object.keys(modals).forEach((modal) => {
          if (modals[modal]) {
            setModals({ ...modals, [modal]: false });
          }
        });
      }
    };
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        Object.keys(modals).forEach((modal) => {
          if (modals[modal]) {
            setModals({ ...modals, [modal]: false });
          }
        });
      }
    };

    document.addEventListener("click", closeModalDocClick);
    document.addEventListener("keydown", closeByEscape);

    return () => {
      document.removeEventListener("click", closeModalDocClick);
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [modals]);
  */

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div
            className={
              location.pathname === "/saved-articles"
                ? "container__saved"
                : "container__home"
            }
          >
            <Header onCreateSignin={openSigninModal} loggedIn={loggedIn} />
            <Main />
          </div>
          <div className={searchFocus ? "app__cards" : "app__cards_hidden"}>
            <SearchResults />
          </div>
          <About />
          <Footer />
        </Route>
        <Route path="/saved-articles">
          <SavedNews />
        </Route>
      </Switch>
      {modals.signin && (
        <Signin
          onCreateSignup={openSignupModal}
          buttonText="Sign in"
          onClose={closeSigninModal}
          isOpen={modals.signin === true}
        />
      )}
      {modals.signup && (
        <Signup
          onCreateSignin={openSigninModal}
          buttonText="Sign up"
          onClose={closeSignupModal}
          isOpen={modals.signup === true}
        />
      )}
    </div>
  );
}

export default App;
