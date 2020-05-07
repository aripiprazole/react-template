import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { HomeMainPage } from "~/pages/Home";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={HomeMainPage} />
      </Switch>
    </Router>
  );
};
