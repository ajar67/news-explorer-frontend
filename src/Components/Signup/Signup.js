import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Signup = ({
  onClose,
  buttonText,
  isOpen,
  onCreateSignin,
  onCreateSuccess,
  setModals,
}) => {
  const [errorMessage, setErrorMessage] = useState();

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const validEmail = emailRegex.test(email);
  const validPassword = password.length > 0;
  const validUserName = username.length > 0;
  const isFormValid = validEmail && validPassword && validUserName;

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isFormValid) {
      onCreateSuccess();
      //onSubmit({ email, password });
    } else {
      setErrorMessage("This email is not available");
    }
  }
  return (
    <PopupWithForm
      title="Sign up"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isFormValid}
      buttonText={buttonText}
      name="signup"
      setModals={setModals}
    >
      <label className="modal__info">
        Email
        <input
          value={email}
          className="modal__input"
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Enter email"
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__info">
        Password
        <input
          value={password}
          className="modal__input"
          type="password"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label className="modal__info">
        Username
        <input
          value={username}
          className="modal__input"
          type="text"
          name="username"
          minLength="1"
          maxLength="30"
          placeholder="Enter your username"
          onChange={handleUsernameChange}
          required
        />
      </label>
      <div className="modal__bottom modal__bottom-signup">
        <p className="modal__or">or</p>
        <button
          className="modal__button-two"
          type="button"
          onClick={onCreateSignin}
        >
          Sign in
        </button>
      </div>
    </PopupWithForm>
  );
};

export default Signup;
