import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import AddMovie from "./components/add-movie";
import Navbar from "./components/navbar";
import Movie from "./components/movie";
import About from "./components/about";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add-movie">
          <AddMovie />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>,

    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
