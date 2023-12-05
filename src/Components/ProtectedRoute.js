import React from "react";
import { Route, Redirect } from "react-router-dom";
import Signin from "./Signin/Signin";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props);
  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to="/" />
            <Signin
              onCreateSignup={props.onCreateSignup}
              buttonText={props.buttonText}
              onClose={props.onClose}
              isOpen={props.isOpen}
              setModals={props.setModals}
              onSubmit={props.onSubmit}
              loginValidation={props.loginValidation}
              setLoginValidation={props.setLoginValidation}
            />
          </>
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
