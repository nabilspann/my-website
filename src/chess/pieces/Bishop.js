import Piece from "./Piece.js";

export default class Bishop extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
    );
  }

  isMovePossible(src, dest) {
    //Ban When src - dest =
    //42,
    let leftedgelist = [0, 8, 16, 24, 32, 40, 48, 56];
    let rightedgelist = [7, 15, 23, 31, 39, 47, 55, 63];
    if (Math.abs(src - dest) % 7 === 0) {
      if (src < dest) {
        for (var i = src; i < dest; i = i + 7) {
          if (leftedgelist.indexOf(i) !== -1 && dest > i) {
            return false;
          }
        }
      }
      if (src > dest) {
        for (var i = src; i > dest; i = i - 7) {
          if (rightedgelist.indexOf(i) !== -1 && dest < i) {
            return false;
          }
        }
      }
    }
    if (Math.abs(src - dest) % 9 === 0) {
      if (src < dest) {
        for (var i = src; i < dest; i = i + 9) {
          if (rightedgelist.indexOf(i) !== -1 && dest > i) {
            return false;
          }
        }
      }
      if (src > dest) {
        for (var i = src; i > dest; i = i - 9) {
          if (leftedgelist.indexOf(i) !== -1 && dest < i) {
            return false;
          }
        }
      }
    }
    return Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0;
  }

  /**
   * get path between src and dest (src and dest exclusive)
   * @param  {num} src
   * @param  {num} dest
   * @return {[array]}
   */
  getSrcToDestPath(src, dest) {
    let path = [],
      pathStart,
      pathEnd,
      incrementBy;
    if (src > dest) {
      pathStart = dest;
      pathEnd = src;
    } else {
      pathStart = src;
      pathEnd = dest;
    }
    if (Math.abs(src - dest) % 9 === 0) {
      incrementBy = 9;
      pathStart += 9;
    } else {
      incrementBy = 7;
      pathStart += 7;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      path.push(i);
    }
    return path;
  }
}
