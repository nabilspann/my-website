import Piece from "./Piece.js";

export default class Queen extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
    );
    this.leftedgelist = [0, 8, 16, 24, 32, 40, 48, 56];
    this.rightedgelist = [7, 15, 23, 31, 39, 47, 55, 63];
  }

  isMovePossible(src, dest) {
    let mod = src % 8;
    let diff = 8 - mod;
    if (Math.abs(src - dest) % 7 === 0) {
      if (this.leftedgelist.indexOf(src) !== -1 && dest === src + 7) {
        return true;
      }
      if (this.rightedgelist.indexOf(src) !== -1 && dest === src - 7) {
        return true;
      }
      if (src < dest) {
        for (var i = src; i < dest; i = i + 7) {
          if (this.leftedgelist.indexOf(i) !== -1 && dest > i) {
            return false;
          }
        }
      }
      if (src > dest) {
        for (var i = src; i > dest; i = i - 7) {
          if (this.rightedgelist.indexOf(i) !== -1 && dest < i) {
            return false;
          }
        }
      }
    }
    if (Math.abs(src - dest) % 9 === 0) {
      if (src < dest) {
        for (var i = src; i < dest; i = i + 9) {
          if (this.rightedgelist.indexOf(i) !== -1 && dest > i) {
            return false;
          }
        }
      }
      if (src > dest) {
        for (var i = src; i > dest; i = i - 9) {
          if (this.leftedgelist.indexOf(i) !== -1 && dest < i) {
            return false;
          }
        }
      }
    }
    return (
      Math.abs(src - dest) % 9 === 0 ||
      Math.abs(src - dest) % 7 === 0 ||
      (Math.abs(src - dest) % 8 === 0 ||
        (dest >= src - mod && dest < src + diff))
    );
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
    if (Math.abs(src - dest) % 8 === 0) {
      incrementBy = 8;
      pathStart += 8;
    } else if (Math.abs(src - dest) % 9 === 0) {
      incrementBy = 9;
      pathStart += 9;
    } else if (Math.abs(src - dest) % 7 === 0) {
      incrementBy = 7;
      pathStart += 7;
    } else {
      incrementBy = 1;
      pathStart += 1;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      path.push(i);
    }
    return path;
  }
}
