// popup with form will use this in all forms
import "./PopupWithForm.css";
import React from "react";
import closeImage from "../../Images/closeButton.svg";

const PopupWithForm = ({
  title,
  onClose,
  onSubmit,
  name,
  children,
  isSubmitDisabled,
  buttonText,
}) => {
  //have to define all props
  console.log(isSubmitDisabled);
  return (
    <div className="modal__section">
      <div className={`modal__content modal__content_${name}`}>
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src={closeImage} alt="close button" className="modal__close" />
        </button>
        <h3 className={`modal__title modal__title_${name}`}>{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            className={`modal__button-submit modal__button-submit_${name}`}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
