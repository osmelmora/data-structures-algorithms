import { test, expect } from "bun:test";
import { moveZeroes } from ".";

const testCases: [number[], number[]][] = [
  [
    [0, 1, 0, 3, 12],
    [1, 3, 12, 0, 0],
  ],
  [[0], [0]],
];

test.each(testCases)(
  "given the array %j when we move the zeros to the right we should obtain %j",
  (original, zeroMoved) => {
    moveZeroes(original);
    expect(original).toEqual(zeroMoved);
  },
);
