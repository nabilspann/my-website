import Piece from "./Piece.js";

export default class Rook extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
    );
    this.state = {
      whiteRightmoved: false,
      whiteLeftmoved: false,
      blackRightmoved: false,
      blackLeftmoved: false
    };
    this.initialpositions = {
      1: [59, 63],
      2: [0, 7]
    };
  }

  isMovePossible(src, dest) {
    let mod = src % 8;
    let diff = 8 - mod;
    return (
      Math.abs(src - dest) % 8 === 0 || (dest >= src - mod && dest < src + diff)
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
    } else {
      incrementBy = 1;
      pathStart += 1;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      path.push(i);
    }
    console.log(this.player);
    if (src === 63 && this.player === 1) {
      this.state.whiteRightmoved = true;
    } else if (src === 56 && this.player === 1) {
      this.state.whiteLeftmoved = true;
    } else if (src === 0 && this.player === 2) {
      this.state.blackLeftmoved = true;
    } else if (src === 7 && this.player === 2) {
      this.state.blackRightmoved = true;
    }
    return path;
  }
}
