import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import SavedNews from "../SavedNews/SavedNews";
import Success from "../Success/Success";
import {
  deleteCard,
  getCards,
  saveCard,
  searchCards,
} from "../../utils/NewsApi";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import MenuModal from "../Menumodal/MenuModal";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const history = useHistory("");
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
    closeModal("success");
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
    searchCards({ userInput, apiKey, fromDate, toDate, pageSize })
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

  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearchKeyword = (value) => {
    setSearchKeyword(value);
  };

  //////////Signing up and Logging up//////////////

  const [loginValidation, setLoginValidation] = useState("");

  function handleLogin({ email, password }) {
    handleLoading();
    auth
      .authorize(email, password)
      .then((res) => {
        if (res) {
          console.log("handleLogin function:", res);
          localStorage.setItem("jwt", res.token);
          setLoginValidation("");
          auth
            .checkToken(res.token)
            .then((data) => {
              console.log("handleLogin function:", data);
              setCurrentUser(data.data);
              setLoggedIn(true);
            })
            .catch((err) => {
              console.error(err);
              console.log("Token failure: ", err);
            });
        }
        closeModal("signin");
      })
      .catch((err) => {
        console.log("Login failed: ", err);
        setLoginValidation("Login failed!");
      })
      .finally(handleLoading);
  }

  const [signupValidation, setSignupValidation] = useState("");

  function handleRegistration({ email, password, name }) {
    handleLoading();
    auth
      .register(email, password, name)
      .then((res) => {
        console.log("handleRegistration function: ", res);
        setSignupValidation("");
        closeModal("signup");
      })
      .catch((err) => {
        console.log("Registration failed: ", err);
        setSignupValidation("This email is not available");
      })
      .finally(handleLoading);
  }

  ////////////taking care of the saving button toggle////////////////////////

  const [savedCards, setSavedCards] = useState([]);
  const handleSavingCard = (token, cardData, image) => {
    console.log(token);
    saveCard(token, cardData)
      .then((res) => {
        const savedCard = {
          keyword: res.date.keyword,
          title: res.date.title,
          text: res.date.text,
          date: res.date.date,
          source: res.date.source,
          author: res.date.author,
          image: res.date.image,
          link: res.date.link,
          owner: res.date._id,
        };
        setSavedCards((prevSavedCards) => [...prevSavedCards, savedCard]);
        return res;
      })
      .catch((err) => console.error(err, "didnt save card"));
  };

  const handleDeletingCard = (id, token) => {
    handleLoading();
    deleteCard(id, token)
      .then((res) => {
        console.log("deletecard: ", res);
        setSavedCards((prevCards) => prevCards.filter((x) => id !== x._id));
        return res;
      })
      .catch((err) => console.error(err))
      .finally(handleLoading);
  };

  //////////////////////////////////////////////////logout function //////////////////////////////

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  };

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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          setCurrentUser(res.data);
          setLoggedIn(true);
          getCards(jwt).then((res) => {
            setSavedCards(res.data);
          });
        })
        .catch((err) => {
          console.error("Token failed: ", err);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
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
                setLoggedIn={setLoggedIn}
                logout={logout}
              />
              <Main
                windowWidth={windowWidth}
                onSearch={handleSearchResults}
                onSearchKeyword={handleSearchKeyword}
              />
            </div>
            <div className={isLoading ? "preloader" : "preloader-hidden"}>
              <Preloader />
            </div>
            <div
              className={
                cardsData.length === 0 && searchFocus === true
                  ? "app__nothing"
                  : "app__nothing_hidden"
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
                onLikeCard={handleSavingCard}
                loggedIn={loggedIn}
                searchKeyword={searchKeyword}
                onCreateSignup={openSignupModal}
              />
            </div>
            <About />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/saved-articles"
            loggedIn={loggedIn}
            component={(props) => (
              <SavedNews
                {...props}
                loggedIn={loggedIn}
                windowWidth={windowWidth}
                onCreateMenu={openMenuModal}
                savedCards={savedCards}
                logout={logout}
                searchKeyword={searchKeyword}
                onDeleteCard={handleDeletingCard}
              />
            )}
          />
        </Switch>
        {modals.signin && (
          <Signin
            onCreateSignup={openSignupModal}
            buttonText="Sign in"
            onClose={() => closeModal("signin")}
            isOpen={modals.signin === true}
            setModals={setModals}
            onSubmit={handleLogin}
            loginValidation={loginValidation}
            setLoginValidation={setLoginValidation}
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
            onSubmit={handleRegistration}
            signupValidation={signupValidation}
            setSignupValidation={setSignupValidation}
          />
        )}
        {modals.success && (
          <Success
            onCreateSuccess={openSuccessModal}
            onClose={() => closeModal("success")}
            isOpen={modals.success === true}
            setModals={setModals}
            onCreateSignin={openSigninModal}
          />
        )}
        {modals.menu && (
          <MenuModal
            onCreateMenu={openMenuModal}
            onCreateSignin={openSigninModal}
            onClose={() => closeModal("menu")}
            isOpen={modals.menu === true}
            setModals={setModals}
            loggedIn={loggedIn}
            logout={logout}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
