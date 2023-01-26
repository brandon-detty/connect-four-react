import { expect, it } from "vitest";

import newGameState from "./newGameState";
import isWinningMove from "./isWinningMove";
import { SquareState } from "../components/Square";

it("should return false for invalid moves", () => {
  const s = newGameState();
  expect(isWinningMove(SquareState.Red, -1, s)).toBe(false);
  expect(isWinningMove(SquareState.Red, s.length, s)).toBe(false);
});

it("should recognize a horizontal win in row 0", () => {
  const s = newGameState();
  for (let c = 1; c < 4; ++c) {
    s[c][0] = SquareState.Black;
  }
  expect(isWinningMove(SquareState.Black, 0, s)).toBe(true);
  expect(isWinningMove(SquareState.Black, 4, s)).toBe(true);
});

it("should not treat a 4th horizontal chip of a different color as a win", () => {
  const s = newGameState();
  for (let c = 1; c < 4; ++c) {
    s[c][0] = SquareState.Black;
  }
  expect(isWinningMove(SquareState.Red, 0, s)).toBe(false);
  expect(isWinningMove(SquareState.Red, 4, s)).toBe(false);
});

it("should detect an ascending diagonal win", () => {
  const s = newGameState();
  for (let c = 1; c < 4; ++c) {
    s[c].fill(SquareState.Black, 0, c + 1);
  }
  s[1][0] = SquareState.Red;
  expect(isWinningMove(SquareState.Black, 0, s)).toBe(true);
});

it("should detect a descending diagonal win", () => {
  const s = newGameState();
  for (let c = 0; c < 3; ++c) {
    s[c].fill(SquareState.Black, 0, 4 - c);
  }
  s[0][0] = SquareState.Red;
  expect(isWinningMove(SquareState.Black, 3, s)).toBe(true);
});
