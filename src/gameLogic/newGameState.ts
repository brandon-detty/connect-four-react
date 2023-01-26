import { SquareState } from "../components/Square";

export type GameCol = SquareState[];
export type GameState = GameCol[];

const boardDims = {
  x: 7,
  y: 6,
};

const newGameState = (): GameState => {
  return Array.from(
    { length: boardDims.x },
    (): GameCol => new Array(boardDims.y).fill(SquareState.Empty)
  );
};

export default newGameState;
