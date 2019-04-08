import Piece from "./Piece.js";

export default class King extends Piece {
  constructor(player) {
    super(
      player,
      player === 1
        ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
    );
    this.whitekingmoved = false;
    this.blackkingmoved = false;
    this.piece = "King";
  }

  isMovePossible(src, dest) {
    return (
      src - 9 === dest ||
      src - 8 === dest ||
      src - 7 === dest ||
      src + 1 === dest ||
      src + 9 === dest ||
      src + 8 === dest ||
      src + 7 === dest ||
      src - 1 === dest
    );
  }

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest) {
    if (!(dest === 62 || dest === 58) && this.player === 1) {
      this.whitekingmoved = true;
    } else if (!(dest === 6 || dest === 2) && this.player === 2) {
      this.blackkingmoved = true;
    }
    return [];
  }
}
