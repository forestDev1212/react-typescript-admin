import React from "react";
import App from "../App";
import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

export { routes };

export default createBrowserRouter(routes);