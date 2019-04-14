let islegalDestEnemyOccupied = "";
let islegalMovePossible = false;
let legalsrcToDest = [];
let isSquareOccupied = false;
export default function Castlemovelegal(
  squares,
  playerturn,
  sourceSelection,
  destination
) {
  for (var j = 0; j < 64; j++) {
    // console.log("Kingmovelegal.js executed??");
    // console.log("playerturn:", playerturn);
    if (
      squares[j] !== null &&
      squares[j].player === 2 &&
      sourceSelection !== j &&
      playerturn === 1
    ) {
      //   console.log("whiteplayer: ", j);
      if (sourceSelection < destination) {
        for (var i = sourceSelection; i <= destination; i++) {
          islegalDestEnemyOccupied = squares[i] ? true : false;
          if (squares[j].piece === "Pawn") {
            islegalDestEnemyOccupied = true;
          }

          islegalMovePossible = squares[j].isMovePossible(
            j,
            i,
            islegalDestEnemyOccupied
          );
          if (islegalMovePossible === true) {
            legalsrcToDest = squares[j].getSrcToDestPath(j, i);
            isSquareOccupied = isMoveLegal(legalsrcToDest, squares);
            if (isSquareOccupied === true) {
              //   isPieceMoveLegal = false;
              return false;
            }
          }
        }
      } else if (sourceSelection > destination) {
        for (var i = sourceSelection; i >= destination; i--) {
          islegalDestEnemyOccupied = squares[i] ? true : false;
          if (squares[j].piece === "Pawn") {
            islegalDestEnemyOccupied = true;
          }

          islegalMovePossible = squares[j].isMovePossible(
            j,
            i,
            islegalDestEnemyOccupied
          );
          if (islegalMovePossible === true) {
            legalsrcToDest = squares[j].getSrcToDestPath(j, i);
            isSquareOccupied = isMoveLegal(legalsrcToDest, squares);
            if (isSquareOccupied === true) {
              //   isPieceMoveLegal = false;
              return false;
            }
          }
        }
      }
    } else if (
      squares[j] !== null &&
      squares[j].player === 1 &&
      sourceSelection !== j &&
      playerturn === 2
    ) {
      // console.log("whiteplayer: ", j);
      if (sourceSelection < destination) {
        for (var i = sourceSelection; i <= destination; i++) {
          islegalDestEnemyOccupied = squares[i] ? true : false;
          if (squares[j].piece === "Pawn") {
            islegalDestEnemyOccupied = true;
          }

          islegalMovePossible = squares[j].isMovePossible(
            j,
            i,
            islegalDestEnemyOccupied
          );
          if (islegalMovePossible === true) {
            legalsrcToDest = squares[j].getSrcToDestPath(j, i);
            isSquareOccupied = isMoveLegal(legalsrcToDest, squares);
            if (isSquareOccupied === true) {
              //   isPieceMoveLegal = false;
              return false;
            }
          }
        }
      } else if (sourceSelection > destination) {
        for (var i = sourceSelection; i >= destination; i--) {
          islegalDestEnemyOccupied = squares[i] ? true : false;
          if (squares[j].piece === "Pawn") {
            islegalDestEnemyOccupied = true;
          }

          islegalMovePossible = squares[j].isMovePossible(
            j,
            i,
            islegalDestEnemyOccupied
          );
          if (islegalMovePossible === true) {
            legalsrcToDest = squares[j].getSrcToDestPath(j, i);
            isSquareOccupied = isMoveLegal(legalsrcToDest, squares);
            if (isSquareOccupied === true) {
              //   isPieceMoveLegal = false;
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
function isMoveLegal(srcToDestPath, squares) {
  let isLegal = true;
  for (let i = 0; i < srcToDestPath.length; i++) {
    if (squares[srcToDestPath[i]] !== null) {
      isLegal = false;
    }
  }
  return isLegal;
}
