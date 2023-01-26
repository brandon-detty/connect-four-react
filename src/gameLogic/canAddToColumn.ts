import { SquareState } from "../components/Square";
import { GameState } from "./newGameState";

type AvailableRow = number;

/** returns false for invalid moves, or the index of the row to be used otherwise */
const canAddToColumn = (i: number, s: GameState): false | AvailableRow => {
  if (s[i] === undefined) {
    console.log(`invalid move; column ${i} is out of bounds`);
    return false;
  }
  const emptyRow = s[i].indexOf(SquareState.Empty);
  return emptyRow !== -1 ? emptyRow : false;
};

export default canAddToColumn;
