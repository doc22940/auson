import React from "react";
import Layout from "../components/layout";
import PrivateRoute from "../components/PrivateRoute";
import { Router } from "@reach/router";

export default () => {
  return (
    <Layout>
      <Router basepath="/private">
        <PrivateRoute path="/*" component={Profile} />
        <Default path="/" />
      </Router>
    </Layout>
  );
};

function Profile() {
  return <p>private</p>;
}

function Default() {
  return <p>default</p>;
}
