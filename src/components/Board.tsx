import { ReactNode } from "react";

import newGameState from "../gameLogic/newGameState";

import Square from "./Square";

const Board = () => {
  const cols = newGameState();
  const squareElements = cols.reduce((squares, col, colIndex) => {
    col.forEach((squareState, rowIndex) => {
      squares.push(
        <Square key={`${rowIndex}${colIndex}`} state={squareState} />
      );
    });
    return squares;
  }, new Array<ReactNode>());

  return (
    <div className="w-196 h-168 flex flex-wrap flex-col-reverse">
      {squareElements}
    </div>
  );
};

export default Board;
