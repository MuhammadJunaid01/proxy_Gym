import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "./../hooks/useAuth/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
