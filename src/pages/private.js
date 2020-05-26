import React from "react";
import { Router } from "@reach/router";

import PrivateRoute from "../components/PrivateRoute";
import { navigate } from "gatsby";

export default () => {
  return (
    <Router basepath="/private">
      <PrivateRoute path="/*" />
      <Default path="/" />
    </Router>
  );
};

function Default() {
  if (typeof window !== "undefined") {
    navigate("/#for-us");
  }
  return null;
}
