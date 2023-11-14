//import logo from '../../Images/logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import SavedNews from "../SavedNews/SavedNews";
import Success from "../Success/Success";
import { getCards, saveCard } from "../../utils/NewsApi";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import MenuModal from "../Menumodal/MenuModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  ////////////////////////////////////// handling all modals ////////////////////////////////////////
  const [modals, setModals] = useState({
    signin: false,
    signup: false,
    success: false,
    menu: false,
  });
  const openModal = (modal) => {
    setModals((prevModals) => ({ ...prevModals, [modal]: true }));
  };
  const closeModal = (modal) => {
    setModals((prevModals) => ({ ...prevModals, [modal]: false }));
  };

  ////////////////////////////////////// function for when pressing on signin or signup buttons ////////////////////////////////////////
  const openMenuModal = () => {
    openModal("menu");
  };

  const openSigninModal = () => {
    closeModal("menu");
    closeModal("signup");
    openModal("signin");
  };

  const openSignupModal = () => {
    closeModal("signin");
    openModal("signup");
  };

  const openSuccessModal = () => {
    closeModal("signup");
    openModal("success");
  };

  const handleLoading = () => {
    setIsLoading((state) => !state);
  };

  ///////////////////////////////////////////////////  API functions  /////////////////////////////////////////////

  ////////////getting the cards////////////////////////

  const [cardsData, setCardsData] = useState([]);
  const handleSearchResults = ({
    userInput,
    apiKey,
    fromDate,
    toDate,
    pageSize,
  }) => {
    handleLoading();
    getCards({ userInput, apiKey, fromDate, toDate, pageSize })
      .then((res) => {
        console.log(res.articles);
        setIsLoading(false);
        setSearchFocus(true);
        setCardsData(res.articles);
      })
      .catch((err) => {
        console.error(err.message, "cant get cards!");
      });
  };

  ////////////taking care of the saving button toggle////////////////////////

  const [savedCards, setSavedCards] = useState([]);
  const handleSavingToggle = (cardData) => {
    saveCard(cardData)
      .then((res) => {
        console.log({ res });
        // setCardsData((card) => (card.url === url ? res : card));
        const savedCard = { ...res };
        console.log({ savedCard });
        setSavedCards([savedCard, ...savedCards]);
      })
      .catch((err) => console.error(err, "didnt save card"));
  };
  console.log(savedCards);

  /////////////////////////////////////////////////// useEffets in APP /////////////////////////////////////

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setModals({
          signin: false,
          signup: false,
          success: false,
          menu: false,
        });
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [modals]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log({ windowWidth });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div
            className={
              location.pathname === "/saved-articles"
                ? "app__saved"
                : "app__home"
            }
          >
            <Header
              onCreateSignin={openSigninModal}
              onCreateMenu={openMenuModal}
              loggedIn={loggedIn}
              windowWidth={windowWidth}
            />
            <Main windowWidth={windowWidth} onSearch={handleSearchResults} />
          </div>
          <div className={isLoading ? "preloader" : "preloader_hidden"}>
            <Preloader />
          </div>
          <div
            className={
              cardsData.length === 0 && searchFocus === true
                ? "nothing__section"
                : "nothing__section_hidden"
            }
          >
            <NothingFound />
          </div>
          <div
            className={
              cardsData.length > 0 ? "app__cards" : "app__cards_hidden"
            }
          >
            <SearchResults
              cardsData={cardsData}
              onLikeCard={handleSavingToggle}
              loggedIn={loggedIn}
            />
          </div>
          <About />
          <Footer />
        </Route>
        <Route path="/saved-articles">
          <SavedNews
            loggedIn={loggedIn}
            windowWidth={windowWidth}
            onCreateMenu={openMenuModal}
            savedCards={savedCards}
          />
        </Route>
      </Switch>
      {modals.signin && (
        <Signin
          onCreateSignup={openSignupModal}
          buttonText="Sign in"
          onClose={() => closeModal("signin")}
          isOpen={modals.signin === true}
          setModals={setModals}
        />
      )}
      {modals.signup && (
        <Signup
          onCreateSignin={openSigninModal}
          onCreateSuccess={openSuccessModal}
          buttonText="Sign up"
          onClose={() => closeModal("signup")}
          isOpen={modals.signup === true}
          setModals={setModals}
        />
      )}
      {modals.success && (
        <Success
          onCreateSuccess={openSuccessModal}
          onClose={() => closeModal("success")}
          isOpen={modals.success === true}
          setModals={setModals}
        />
      )}
      {modals.menu && (
        <MenuModal
          onCreateMenu={openMenuModal}
          onCreateSignin={openSigninModal}
          onClose={() => closeModal("menu")}
          isOpen={modals.menu === true}
          setModals={setModals}
        />
      )}
    </div>
  );
}

export default App;
