import React from "react";

import { Redirect, Route, RouteProps } from "react-router";

import { authService } from "~/services";

type Props = RouteProps & {
  onlyAdmin?: boolean;
};

export const PrivateRoute: React.FC<Props> = ({ onlyAdmin, ...props }) => {
  if (!authService.isLogged()) {
    return <Redirect to={"/"} />;
  }

  if (onlyAdmin) {
    return <Redirect to={"/"} />;
  }

  return <Route {...props} />;
};
