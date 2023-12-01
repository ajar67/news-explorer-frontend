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
import { getCards, saveCard } from "../../utils/NewsApi";
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

  function handleRegistration({ email, password, name }) {
    handleLoading();
    console.log(email, password, name);
    auth
      .register(email, password, name)
      .then((res) => {
        console.log("handleRegistration function: ", res);
        closeModal("signup");
      })
      .catch((err) => {
        console.log("Registration failed: ", err);
      })
      .finally(handleLoading);
  }

  ////////////taking care of the saving button toggle////////////////////////

  const [savedCards, setSavedCards] = useState([]);
  const handleSavingToggle = (token, cardData) => {
    console.log({ cardData });
    saveCard(token, cardData)
      .then((res) => {
        console.log({ res });
        const savedCard = {
          keyword: res.keyword,
          title: res.title,
          text: res.text,
          date: res.date,
          source: res.source,
          author: res.author,
          image: res.image,
          link: res.link,
          cardOwner: res.cardOwner,
        };
        setSavedCards((prevSavedCards) => [...prevSavedCards, savedCard]);
      })
      .catch((err) => console.error(err, "didnt save card"));
  };
  console.log({ savedCards });

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
    console.log("jwt in effect: ", jwt);
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          console.log("checktoken in effect: ", res);
          setCurrentUser(res.data);
          setLoggedIn(true);
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
                onLikeCard={handleSavingToggle}
                loggedIn={loggedIn}
                searchKeyword={searchKeyword}
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
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
