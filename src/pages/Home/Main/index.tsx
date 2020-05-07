import React from "react";

import { Switch, Route } from "react-router";

import { HomePage } from "~/pages/Home";

import { NotFoundErrorPage } from "~/pages/Errors";

export const HomeMainPage: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={HomePage} />

      <Route path={"*"} component={NotFoundErrorPage} />
    </Switch>
  );
};
