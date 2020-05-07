import React from "react";

import { useLocation } from "react-router";

export const NotFoundErrorPage: React.FC = () => {
  const location = useLocation();

  return <div>Not found path: {location.pathname}</div>;
};
