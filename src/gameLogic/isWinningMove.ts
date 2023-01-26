import { SquareState } from "../components/Square";
import canAddToColumn from "./canAddToColumn";
import { GameState } from "./newGameState";

// tuples of x, y offsets for checking horizontally, vertically, and diagonally for wins
const vectors = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
];

const isWinningMove = (
  color: SquareState,
  moveCol: number,
  s: GameState
): boolean => {
  const moveRow = canAddToColumn(moveCol, s);
  if (moveRow === false) {
    console.error("illegal move; column is full");
    return false;
  }

  let isWin = false;
  vectors.every(([xInc, yInc]) => {
    let len = 1;

    // move both directions on path so long as a color match is found
    [1, -1].forEach((direction) => {
      let r = moveRow;
      let c = moveCol;
      while (true) {
        r += yInc * direction;
        c += xInc * direction;
        if (s[c] === undefined || s[c][r] === undefined || s[c][r] !== color) {
          break;
        }
        ++len;
      }
    });

    if (len >= 4) {
      isWin = true;
      // stop every()
      return false;
    }
    return true;
  });

  return isWin;
};

export default isWinningMove;
