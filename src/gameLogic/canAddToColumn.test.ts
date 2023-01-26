import { expect, it } from "vitest";

import newGameState from "./newGameState";
import canAddToColumn from "./canAddToColumn";
import { SquareState } from "../components/Square";

it("should reject negative column indices", () => {
  const s = newGameState();
  expect(canAddToColumn(-1, s)).toBe(false);
});

it("should reject column indices that are too large", () => {
  const s = newGameState();
  expect(canAddToColumn(s.length, s)).toBe(false);
});

it("should accept a move in an empty column", () => {
  const s = newGameState();
  expect(canAddToColumn(0, s)).toBe(0);
});

it("should reject a move in a full column", () => {
  const s = newGameState();
  s[0].fill(SquareState.Red);
  expect(canAddToColumn(0, s)).toBe(false);
});

it("should return 1 for the second move into a column", () => {
  const s = newGameState();
  s[1][0] = SquareState.Red;
  expect(canAddToColumn(1, s)).toBe(1);
});
