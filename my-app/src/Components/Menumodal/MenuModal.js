//320 px for the menu modal
import "./MenuModal.css";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const MenuModal = ({ onCreateSignin, isOpen, onClose, setModals }) => {
  return (
    <PopupWithForm
      name="menu"
      buttonText="Sign in"
      onSubmit={onCreateSignin}
      setModals={setModals}
    >
      <Header windowWidth={320} name="menu" isOpen={isOpen} onClose={onClose} />
      <Link to="/" className="menu__links">
        <p className="menu__home" onClick={onClose}>Home</p>
      </Link>
    </PopupWithForm>
  );
};

export default MenuModal;
