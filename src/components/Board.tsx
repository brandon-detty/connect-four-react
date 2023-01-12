import { ReactNode } from "react";
import Square, { SquareState } from "./Square";

const emptyCol = new Array<number>(6).fill(SquareState.Red);
const cols = new Array<Array<number>>(7).fill([...emptyCol]);

const Board = () => {
  const squareElements = cols.reduce((squares, col, colIndex) => {
    col.forEach((squareState, rowIndex) => {
      squares.push(
        <Square key={`${rowIndex}${colIndex}`} state={squareState} />
      );
    });
    return squares;
  }, new Array<ReactNode>());

  return <div className="w-196 flex flex-wrap-reverse">{squareElements}</div>;
};

export default Board;
