// popup with form will use this in all forms
import React from "react";

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
  return (
    <div className={`modal__section modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-reset" type="button" onClick={onClose}>
          <img src="" alt="close button" className="modal__close" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            className="modal__button-submit"
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
