import React, { Component } from "react";
// import "./App.css";
import Game from "./chess/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div>
          <p className="welcome-statement">
            Welcome to my website. I'm Nabil Spann, a developer using ReactJS to
            build websites. Currently I am making playable chess puzzles on my
            website. Please check them out!
          </p>
        </div>
        {/* <Game /> */}
      </div>
    );
  }
}

export default App;
