import { ReactNode } from "react";
import Square from "./Square";

const emptyCol = new Array<number>(6).fill(0);
const cols = new Array<Array<number>>(7).fill([...emptyCol]);

const Board = () => {
  const squareElements = cols.reduce((squares, col, colIndex) => {
    col.forEach((square, rowIndex) => {
      squares.push(<Square key={`${rowIndex}${colIndex}`} />);
    });
    return squares;
  }, new Array<ReactNode>());

  return <div className="w-196 flex flex-wrap-reverse">{squareElements}</div>;
};

export default Board;
