import React from "react";
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Success = ({onCreateSuccess, buttonText, onClose, isOpen}) => {
    return(
        <PopupWithForm onCreateSuccess={onCreateSuccess} buttonText={buttonText} onClose={onClose} name='success'>
            <div className='success__button'>Sign in</div>
        </PopupWithForm>
    )
};

export default Success;
