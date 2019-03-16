import "./styles/NavBar.css";
import "./index.css";
import "./styles/App.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Grid from "@material-ui/core/Grid";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Game from "./chess/Game";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";
library.add(faChess);

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route exact path="/chesspuzzle" component={Game} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
