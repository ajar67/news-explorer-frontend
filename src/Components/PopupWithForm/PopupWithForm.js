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
  //have to define all props
  const handleOuterClick = (evt) => {
    if (evt.target.classList.contains("modal__section")) {
      setModals({ signin: false, signup: false, success: false, menu: false });
    }
  };
  return (
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
          >
            <img src={closeImage} alt="close button" className="modal__close" />
          </button>
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
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupWithForm;
