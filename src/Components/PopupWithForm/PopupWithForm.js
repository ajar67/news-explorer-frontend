<<<<<<< HEAD
// popup with form will use this in all forms
=======
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
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
  setModals,
}) => {
<<<<<<< HEAD
  //have to define all props
=======
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
  const handleOuterClick = (evt) => {
    if (evt.target.classList.contains("modal__section")) {
      setModals({ signin: false, signup: false, success: false, menu: false });
    }
  };
  return (
<<<<<<< HEAD
    <div
      className={`modal__section modal__section_${name}`}
      onClick={handleOuterClick}
    >
      <div className={`modal__content modal__content_${name}`}>
        <button
          className={`modal__button-reset modal__button-reset_${name}`}
          type="button"
          onClick={onClose}
        >
          <img src={closeImage} alt="close button" className="modal__close" />
        </button>
        <h3 className={`modal__title modal__title_${name}`}>{title}</h3>
        <form onSubmit={onSubmit} className={`modal__form modal__form_${name}`}>
          {children}
          <button
            className={`modal__button-submit modal__button-submit_${name}`}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
=======
    <div className="modal">
      <div
        className={`modal__section modal__section_${name}`}
        onClick={handleOuterClick}
      >
        <div className={`modal__content modal__content_${name}`}>
          <button
            className={`modal__button-reset modal__button-reset_${name}`}
            type="button"
            onClick={onClose}
          ></button>
          <h3 className={`modal__title modal__title_${name}`}>{title}</h3>
          <form
            onSubmit={onSubmit}
            className={`modal__form modal__form_${name}`}
          >
            {children}
            <button
              className={`modal__button-submit modal__button-submit_${name}`}
              type="submit"
              disabled={!isSubmitDisabled}
              tabIndex="0"
            >
              {buttonText}
            </button>
          </form>
        </div>
>>>>>>> 37e25d12806acaf9d8194c37fe24ed41d3486a95
      </div>
    </div>
  );
};

export default PopupWithForm;
