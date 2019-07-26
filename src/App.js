import React, { Component } from "react";
import "./App.css";
import logo from "./img/logo.jpg";
import Form from "./components/Form";
import Restaurants from "./components/Restaurants";

import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="flex">
          <img className="logo" src={logo} alt="logo" />
          <Form />
          <Restaurants />
        </div>
      </Provider>
    );
  }
}
