//320 px for the menu modal
import "./MenuModal.css";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const MenuModal = ({
  onCreateSignin,
  isOpen,
  onClose,
  setModals,
  loggedIn,
}) => {
  return (
    <PopupWithForm name="menu" onSubmit={onCreateSignin} setModals={setModals}>
      <Header windowWidth={320} name="menu" isOpen={isOpen} onClose={onClose} />
      <div className="menu">
        <Link to="/" className="menu__links">
          <p className="menu__home" onClick={onClose}>
            Home
          </p>
        </Link>
        <button type="button" className="menu__button" onClick={onCreateSignin}>
          {loggedIn ? "Sign out" : "Sign in"}
        </button>
      </div>
    </PopupWithForm>
  );
};

export default MenuModal;
