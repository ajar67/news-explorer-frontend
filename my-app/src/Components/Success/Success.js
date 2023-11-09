import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Success = ({ onCreateSuccess, buttonText, onClose, setModals }) => {
  return (
    <PopupWithForm
      title="Registration successfully completed!"
      onCreateSuccess={onCreateSuccess}
      buttonText={buttonText}
      onClose={onClose}
      name="success"
      setModals={setModals}
    >
      <div className="success__button">Sign in</div>
    </PopupWithForm>
  );
};

export default Success;
