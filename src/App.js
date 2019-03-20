import React, { Component } from "react";
// import "./App.css";
import Game from "./chess/Game";
import { Helmet } from "react-helmet";
import mainbackground from "./mountain-clouds2.jpg";
import githublogo from "./Octocat.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={mainbackground} alt="background-image" class="app-image" />
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
            build websites. Playable chess puzzles are under development.
          </p>
          <p>Come back to challenge them soon!</p>
          <p>nabilspann@gmail.com</p>
          <p>
            The code for this website is on GitHub.{" "}
            <a href="https://github.com/nabilspann/my-website">
              <img
                src={githublogo}
                alt="Logo"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
