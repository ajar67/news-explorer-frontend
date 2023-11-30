import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Signin = ({
  onClose,
  buttonText,
  isOpen,
  onCreateSignup,
  setModals,
  onSubmit,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const validEmail = emailRegex.test(email);
  const validPassword = password.length > 0;
  const isFormValid = validEmail && validPassword;

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isFormValid) {
      console.log(email, password);
      onSubmit({ email, password });
    } else {
      setErrorMessage("Innvalid email address");
    }
  }
  return (
    <PopupWithForm
      title="Sign in"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isFormValid}
      buttonText={buttonText}
      name="signin"
      setModals={setModals}
    >
      <label className="modal__info">
        Email
        <input
          value={email}
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Enter email"
          onChange={handleEmailChange}
          required
        />
        <p
          className={errorMessage === "" ? "modal__error-none" : "modal__error"}
        >
          {errorMessage}
        </p>
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
      <div className="modal__bottom modal__bottom-signin">
        <p className="modal__or">or</p>
        <button
          className="modal__button-two"
          type="button"
          onClick={onCreateSignup}
        >
          Sign up
        </button>
      </div>
    </PopupWithForm>
  );
};

export default Signin;
