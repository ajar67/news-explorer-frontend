import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Signin = ({ onClose, buttonText, isOpen, onCreateSignup }) => {
  // props for open opposite modal {onCreateSignupModal}, onSubmit for the form
  const [formErrors, setFormErrors] = useState({
    email: "Enter a valid email",
    password: "Enter a password",
  });

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const validateEmail = (email) => {
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(email);
    };
    if (e.target.name === "email") {
      const isValidEmail = validateEmail(e.target.value);
      setFormErrors({
        ...formErrors,
        email: isValidEmail ? "" : "Invalid email address",
      });
    }
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isSubmitDisabled = Object.values(formErrors).some(
    (error) => error !== ""
  );

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    //onSubmit({ email, password });
  }
  return (
    <PopupWithForm
      title="Sign in"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      buttonText={buttonText}
      name="signin"
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
      <div className="modal__bottom modal__bottom_signin">
        <p className="modal__or">or</p>
        <button
          className="modal__button_two"
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
