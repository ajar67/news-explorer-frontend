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
    // const validatePassword = (password) => {
    //   if (password.length > 0) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    // if (e.target.name === "password") {
    //   const isValidPassword = validatePassword(e.target.value);
    //   setFormErrors({
    //     ...formErrors,
    //     password: isValidPassword ? "" : "Must enter a password",
    //   });
    // }
  };
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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
    onCreateSuccess();
    //onSubmit({ email, password });
  }
  return (
    <PopupWithForm
      title="Sign up"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
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
      <div className="modal__bottom modal__bottom_signup">
        <p className="modal__or">or</p>
        <button
          className="modal__button_two"
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
