import React from "react";
import { Provider } from "react-redux";
import { createStore as reduxCreateStore } from "redux";
import app from "./app";

const createStore = () => reduxCreateStore(app);

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
