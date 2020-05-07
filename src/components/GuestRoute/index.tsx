import React from "react";

import { Redirect, Route, RouteProps } from "react-router-dom";

import { authService } from "~/services";

export const GuestRoute: React.FC<RouteProps> = ({ ...props }) => {
  if (authService.isLogged()) {
    return <Redirect to={"/"} />;
  }

  return <Route {...props} />;
};
