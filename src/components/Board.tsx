import { ReactNode, useCallback, useState } from "react";
import canAddToColumn from "../gameLogic/canAddToColumn";
import isWinningMove from "../gameLogic/isWinningMove";

import newGameState from "../gameLogic/newGameState";

import Square, { chipColorMap, SquareState } from "./Square";

const Board = () => {
  const [gameState, setGameState] = useState(newGameState());
  const [isRedTurn, setIsRedTurn] = useState(true);

  const makeMove = (c: number) => {
    const r = canAddToColumn(c, gameState);
    if (r === false) {
      console.warn(`invalid move; col ${c} may be full`);
      return;
    }
    const color = isRedTurn ? SquareState.Red : SquareState.Black;
    if (isWinningMove(color, c, gameState)) {
      alert(`${color} wins!`);
      setGameState(newGameState());
      setIsRedTurn(true);
    } else {
      gameState[c] = [...gameState[c]];
      gameState[c][r] = color;
      setGameState([...gameState]);
      setIsRedTurn(!isRedTurn);
    }
  };

  const buttons = [...new Array(gameState.length).keys()].map((i) => {
    return (
      <button
        key={`b${i}`}
        onClick={() => makeMove(i)}
        className={
          chipColorMap[isRedTurn ? SquareState.Red : SquareState.Black]
        }
      ></button>
    );
  });

  const squareElements = gameState.reduce((squares, col, colIndex) => {
    col.forEach((squareState, rowIndex) => {
      squares.push(
        <Square key={`${rowIndex}${colIndex}`} state={squareState} />
      );
    });
    return squares;
  }, new Array<ReactNode>());

  return (
    <>
      <div className="w-196 flex justify-around">{buttons}</div>
      <div className="w-196 h-168 flex flex-wrap flex-col-reverse">
        {squareElements}
      </div>
    </>
  );
};

export default Board;
