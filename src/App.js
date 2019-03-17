import React, { Component } from "react";
// import "./App.css";
import Game from "./chess/Game";
import { Helmet } from "react-helmet";
import image from "./astronomy-image.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={image} alt="background-image" class="app-image" />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="welcome-statement">
          <p>
            Welcome to my website. I'm Nabil Spann, a developer using ReactJS to
            build websites. Playable chess puzzles are under development. Come
            back to challenge them soon!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
