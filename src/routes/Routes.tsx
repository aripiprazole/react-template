import React from "react";

import { Switch, Router, Route } from "react-router";

import { historyService } from "~/services";

import { HomeMainPage } from "~/pages/Home";

export const Routes: React.FC = () => {
  return (
    <Router history={historyService}>
      <Switch>
        <Route path={"/"} component={HomeMainPage} />
      </Switch>
    </Router>
  );
};
