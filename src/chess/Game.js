import React from "react";
import axios from "axios";

import "../Game.css";
import Board from "./Board.js";
import CapturedPieces from "./CapturedPieces.js";
import initialiseChessBoard from "./Utilities/initialiseChessBoard.js";
import chessbackground from "../chessbackground.jpg";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initialiseChessBoard(),
      whiteCapturedPieces: [],
      blackCapturedPieces: [],
      player: 1,
      sourceSelection: -1,
      status: "",
      turn: "white",
      m8n2array: [],
      ply1kinglocation: 60,
      ply2kinglocation: 4
    };
  }

  componentDidMount() {
    // axios
    //   .get(
    //     `${"https://cors-anywhere.herokuapp.com/"}http://wtharvey.com/m8n2.txt`
    //     // ,
    //     // {
    //     //   headers: {
    //     //     "Access-Control-Allow-Origin": "*",
    //     //     "Access-Control-Allow-Headers":
    //     //       "Origin, X-Requested-With, Content-Type, Accept"
    //     //   }
    //     // }
    //   )
    //   .then(res => {
    //     console.log(res);
    //     // console.log(res.data);
    //     let m8n2data = res.data.replace(
    //       "Here's a collection of mate in 2's with citation, FEN and solution.  The \r\nsolution is 'almost unique', ie, the winner has only a single move that must \r\nbe made to fulfill the mate - ideal for creating an interactive puzzle where \r\nyou might want to rate the puzzle and the solver.  \r\n\r\nBill Harvey \r\n\r\n",
    //       ""
    //     );
    //     m8n2data = m8n2data.replace(/White Mates in 2./g, "");
    //     m8n2data = m8n2data.replace(/Black Mates in 2./g, "");
    //     let m8n2array = m8n2data.split("\r\n\r\n\r\n");
    //     console.log(m8n2data);
    //     for (var i = 0; i < m8n2array.length; i++) {
    //       m8n2array[i] = m8n2array[i].split("\r\n");
    //     }
    //     console.log(m8n2array);
    //     this.setState({ m8n2array: m8n2array });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     console.log(err.response);
    //   });
    // fetch("http://wtharvey.com/m8n2.txt", {
    //   mode: "cors",
    //   method: "GET"
    // })
    //   .then(function(response) {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(JSON.stringify(myJson));
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    // fetch("https://chessblunders.org/api/blunder/get", {
    //   method: "GET",
    //   mode: "cors",
    //   headers: {
    //     type: "explore",
    //     crossdomain: true
    //   }
    // })
    //   .then(function(response) {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(JSON.stringify(myJson));
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    // console.log(localStorage.getItem("api-token"));
    // axios
    //   .post(
    //     `${"https://cors-anywhere.herokuapp.com/"}https://chessblunders.org/api/mobile/blunder/info`,
    //     {
    //       // Authorization:
    //       //   "Bearer " + "dfc6f619422020262e95cc2bfdda31b841551312457",
    //       blunder_id: "557ae090e13823b818db76b6",
    //       token: "dfc6f619422020262e95cc2bfdda31b841551312457"
    //       // "api-token": "dfc6f619422020262e95cc2bfdda31b841551312457"
    //     },
    //     {
    //       headers: {
    //         // Authorization:
    //         //   "Bearer " + "dfc6f619422020262e95cc2bfdda31b841551312457",
    //         // "api-token": "dfc6f619422020262e95cc2bfdda31b841551312457",
    //         // token: "dfc6f619422020262e95cc2bfdda31b841551312457",
    //         type: "explore",
    //         crossdomain: true
    //       }
    //     }
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     console.log(err.response);
    //   });
    // axios
    //   .get("https://chesspuzzle.net/Daily/Api/")
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data.Link);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  handleClick(i) {
    let ply1kinglocation = this.state.ply1kinglocation;
    let ply2kinglocation = this.state.ply2kinglocation;
    const squares = this.state.squares.slice();
    console.log(squares[i]);
    console.log("i: ", i);
    console.log("sourceSelection: ", this.state.sourceSelection);
    if (this.state.sourceSelection === -1) {
      if (!squares[i] || squares[i].player !== this.state.player) {
        this.setState({
          status:
            "Wrong selection. Choose player " + this.state.player + " pieces."
        });
        //testing with this line
        // if (squares[i] !== null) {
        //   delete squares[i].style.backgroundColor;
        // }
        // squares[i] ? delete squares[i].style.backgroundColor : null;
      } else {
        squares[i].style = {
          ...squares[i].style
          // backgroundColor: "RGB(111,143,114)"
        }; // Emerald from http://omgchess.blogspot.com/2015/09/chess-board-color-schemes.html
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: i
        });
      }
    } else if (this.state.sourceSelection > -1) {
      // console.log(this.state.sourceSelection);
      // console.log(squares[this.state.sourceSelection]);
      // var index = this.state.sourceSelection;
      // let initpos = squares[this.state.sourceSelection].initialPositions;
      // let backgroundImage =
      //   squares[this.state.sourceSelection].style.backgroundImage;
      // squares[this.state.sourceSelection] = {
      //   initialPositions: initpos,
      //   style: {
      //     backgroundImage: backgroundImage
      //   }
      // // };
      // console.log(squares);
      // console.log(squares[this.state.sourceSelection]);
      //// delete squares[this.state.sourceSelection].style.backgroundColor;
      //// squares[index].style.backgroundColor = "";
      if (squares[i] && squares[i].player === this.state.player) {
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1
        });
      } else {
        const squares = this.state.squares.slice();
        const whiteCapturedPieces = this.state.whiteCapturedPieces.slice();
        const blackCapturedPieces = this.state.blackCapturedPieces.slice();
        const isDestEnemyOccupied = squares[i] ? true : false;
        const isMovePossible = squares[
          this.state.sourceSelection
        ].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
        const srcToDestPath = squares[
          this.state.sourceSelection
        ].getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath, this.state.squares);

        //First four conditions here are for castling
        if (
          squares[this.state.sourceSelection].piece === "King" &&
          i == 62 &&
          (squares[61] ? true : false) === false &&
          this.state.player === 1 &&
          squares[63].state.whiteRightmoved === false &&
          squares[this.state.sourceSelection].whitekingmoved === false
        ) {
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          squares[61] = squares[63];
          squares[61].state.whiteRightmoved = true;
          squares[i].whitekingmoved = true;
          squares[63] = null;
          ply1kinglocation = i;
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === "white" ? "black" : "white";
          this.setState({
            sourceSelection: -1,
            squares: squares,
            player: player,
            status: "",
            turn: turn
          });
        } else if (
          squares[this.state.sourceSelection].piece === "King" &&
          i == 58 &&
          (squares[59] ? true : false) === false &&
          this.state.player === 1 &&
          (squares[57] ? true : false) === false &&
          squares[56].state.whiteLeftmoved === false &&
          squares[this.state.sourceSelection].whitekingmoved === false
        ) {
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          squares[59] = squares[56];
          squares[59].state.whiteLeftmoved = true;
          squares[i].whitekingmoved = true;
          squares[56] = null;
          ply1kinglocation = i;
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === "white" ? "black" : "white";
          this.setState({
            sourceSelection: -1,
            squares: squares,
            player: player,
            status: "",
            turn: turn
          });
        } else if (
          squares[this.state.sourceSelection].piece === "King" &&
          i == 6 &&
          (squares[5] ? true : false) === false &&
          this.state.player === 2 &&
          squares[7].state.blackRightmoved === false &&
          squares[this.state.sourceSelection].blackkingmoved === false
        ) {
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          squares[5] = squares[7];
          squares[5].state.blackRightmoved = true;
          squares[i].blackkingmoved = true;
          squares[7] = null;
          ply2kinglocation = i;
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === "white" ? "black" : "white";
          this.setState({
            sourceSelection: -1,
            squares: squares,
            player: player,
            status: "",
            turn: turn
          });
        } else if (
          squares[this.state.sourceSelection].piece === "King" &&
          i == 2 &&
          (squares[1] ? true : false) === false &&
          (squares[2] ? true : false) === false &&
          this.state.player === 2 &&
          squares[0].state.blackRightmoved === false &&
          squares[this.state.sourceSelection].blackkingmoved === false
        ) {
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          squares[3] = squares[0];
          squares[3].state.blackRightmoved = true;
          squares[i].blackkingmoved = true;
          squares[0] = null;
          ply2kinglocation = i;
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === "white" ? "black" : "white";
          this.setState({
            sourceSelection: -1,
            squares: squares,
            player: player,
            status: "",
            turn: turn
          });
        } else if (isMovePossible && isMoveLegal) {
          console.log(ply1kinglocation);
          console.log(ply2kinglocation);
          if (squares[i] !== null) {
            if (squares[i].player === 1) {
              whiteCapturedPieces.push(squares[i]);
            } else {
              blackCapturedPieces.push(squares[i]);
            }
          }
          if (squares[this.state.sourceSelection].piece === "King") {
            let isKingMoveLegal = true;

            squares[i] = squares[this.state.sourceSelection];
            squares[this.state.sourceSelection] = null;
            for (var j = 0; j < 64; j++) {
              if (
                squares[j] !== null &&
                squares[j].player === 2 &&
                this.state.sourceSelection !== j &&
                squares[i].player === 1
              ) {
                // console.log("whiteplayer: ", j);
                let islegalDestEnemyOccupied = squares[i] ? true : false;
                if (squares[j].piece === "Pawn") {
                  islegalDestEnemyOccupied = true;
                }
                console.log("king's destination: ,", i);
                let islegalMovePossible = squares[j].isMovePossible(
                  j,
                  i,
                  islegalDestEnemyOccupied
                );
                if (islegalMovePossible === true) {
                  let legalsrcToDest = squares[j].getSrcToDestPath(j, i);
                  let isSquareOccupied = this.isMoveLegal(
                    legalsrcToDest,
                    squares
                  );
                  console.log("move possible: ", j, isSquareOccupied);
                  if (isSquareOccupied === true) {
                    isKingMoveLegal = false;
                    this.setState({
                      status: "Illegal move, exposing the king to check.",
                      sourceSelection: -1
                    });
                  }
                }
                ply1kinglocation = i;
              } else if (
                squares[j] !== null &&
                squares[j].player === 1 &&
                this.state.sourceSelection !== j &&
                squares[i].player === 2
              ) {
                // console.log("whiteplayer: ", j);
                let islegalDestEnemyOccupied = squares[i] ? true : false;
                if (squares[j].piece === "Pawn") {
                  islegalDestEnemyOccupied = true;
                }

                let islegalMovePossible = squares[j].isMovePossible(
                  j,
                  i,
                  islegalDestEnemyOccupied
                );
                if (islegalMovePossible === true) {
                  let legalsrcToDest = squares[j].getSrcToDestPath(j, i);
                  let isSquareOccupied = this.isMoveLegal(
                    legalsrcToDest,
                    squares
                  );
                  console.log("move possible: ", j, isSquareOccupied);
                  if (isSquareOccupied === true) {
                    isKingMoveLegal = false;
                    this.setState({
                      status: "Illegal move, exposing the king to check.",
                      sourceSelection: -1
                    });
                  }
                }
                ply2kinglocation = i;
              }
            }
            if (isKingMoveLegal === true) {
              let player = this.state.player === 1 ? 2 : 1;
              let turn = this.state.turn === "white" ? "black" : "white";
              this.setState({
                sourceSelection: -1,
                squares: squares,
                whiteCapturedPieces: whiteCapturedPieces,
                blackCapturedPieces: blackCapturedPieces,
                player: player,
                status: "",
                turn: turn,
                ply1kinglocation: ply1kinglocation,
                ply2kinglocation: ply2kinglocation
              });
            }
          } else {
            // console.log("whiteCapturedPieces", whiteCapturedPieces);
            // console.log("blackCapturedPieces", blackCapturedPieces);
            let isPieceMoveLegal = true;
            let playerturn = squares[this.state.sourceSelection].player;
            // let tempPieceLocation = squares[this.state.sourceSelection];
            // squares[this.state.sourceSelection] = null;
            squares[i] = squares[this.state.sourceSelection];
            squares[this.state.sourceSelection] = null;
            for (var j = 0; j < 64; j++) {
              if (
                squares[j] !== null &&
                squares[j].player === 2 &&
                this.state.sourceSelection !== j &&
                playerturn === 1
              ) {
                // console.log("whiteplayer: ", j);
                let islegalDestEnemyOccupied = squares[ply1kinglocation]
                  ? true
                  : false;
                if (squares[j].piece === "Pawn") {
                  islegalDestEnemyOccupied = true;
                }

                let islegalMovePossible = squares[j].isMovePossible(
                  j,
                  ply1kinglocation,
                  islegalDestEnemyOccupied
                );
                if (islegalMovePossible === true) {
                  let legalsrcToDest = squares[j].getSrcToDestPath(
                    j,
                    ply1kinglocation
                  );
                  console.log("legalsrctodest: ", legalsrcToDest);
                  let isSquareOccupied = this.isMoveLegal(
                    legalsrcToDest,
                    squares
                  );
                  console.log("move possible: ", j, isSquareOccupied);
                  if (isSquareOccupied === true) {
                    isPieceMoveLegal = false;
                    this.setState({
                      status: "Illegal move, exposing the king to check.",
                      sourceSelection: -1
                    });
                  }
                }
              } else if (
                squares[j] !== null &&
                squares[j].player === 1 &&
                this.state.sourceSelection !== j &&
                playerturn === 2
              ) {
                // console.log("whiteplayer: ", j);
                let islegalDestEnemyOccupied = squares[ply2kinglocation]
                  ? true
                  : false;
                if (squares[j].piece === "Pawn") {
                  islegalDestEnemyOccupied = true;
                }

                let islegalMovePossible = squares[j].isMovePossible(
                  j,
                  ply2kinglocation,
                  islegalDestEnemyOccupied
                );
                if (islegalMovePossible === true) {
                  let tempPieceLocation = squares[this.state.sourceSelection];
                  squares[this.state.sourceSelection] = null;
                  let legalsrcToDest = squares[j].getSrcToDestPath(
                    j,
                    ply2kinglocation
                  );
                  let isSquareOccupied = this.isMoveLegal(
                    legalsrcToDest,
                    squares
                  );
                  squares[this.state.sourceSelection] = tempPieceLocation;
                  console.log("move possible: ", j, isSquareOccupied);
                  if (isSquareOccupied === true) {
                    isPieceMoveLegal = false;
                    this.setState({
                      status: "Illegal move, exposing the king to check.",
                      sourceSelection: -1
                    });
                  }
                }
              }
            }
            // squares[this.state.sourceSelection] = tempPieceLocation;
            if (isPieceMoveLegal === true) {
              let player = this.state.player === 1 ? 2 : 1;
              let turn = this.state.turn === "white" ? "black" : "white";
              this.setState({
                sourceSelection: -1,
                squares: squares,
                whiteCapturedPieces: whiteCapturedPieces,
                blackCapturedPieces: blackCapturedPieces,
                player: player,
                status: "",
                turn: turn
              });
            }
          }
        } else {
          this.setState({
            status:
              "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1
          });
        }
      }
    }
  }

  /**
   * Check all path indices are null. For one steps move of pawn/others or jumping moves of knight array is empty, so  move is legal.
   * @param  {[type]}  srcToDestPath [array of board indices comprising path between src and dest ]
   * @return {Boolean}
   */
  isMoveLegal(srcToDestPath, squares) {
    let isLegal = true;
    for (let i = 0; i < srcToDestPath.length; i++) {
      if (squares[srcToDestPath[i]] !== null) {
        isLegal = false;
      }
    }
    return isLegal;
  }

  render() {
    return (
      <div className="margin-game">
        <img src={chessbackground} alt="background-image" class="app-image" />
        <div className="game">
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <h3>Turn</h3>
            <div
              id="player-turn-box"
              style={{ backgroundColor: this.state.turn }}
            />
            <div className="game-status">{this.state.status}</div>

            <div className="fallen-soldier-block">
              {
                <CapturedPieces
                  whiteCapturedPieces={this.state.whiteCapturedPieces}
                  blackCapturedPieces={this.state.blackCapturedPieces}
                />
              }
            </div>
          </div>
        </div>

        {/* <div className="icons-attribution">
          <div>
            {" "}
            <small>
              {" "}
              Chess Icons And Favicon (extracted) By en:User:Cburnett [
              <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>,{" "}
              <a href="http://creativecommons.org/licenses/by-sa/3.0/">
                CC-BY-SA-3.0
              </a>
              , <a href="http://opensource.org/licenses/bsd-license.php">BSD</a>{" "}
              or <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>],{" "}
              <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">
                via Wikimedia Commons
              </a>{" "}
            </small>
          </div>
        </div> */}
      </div>
    );
  }
}
