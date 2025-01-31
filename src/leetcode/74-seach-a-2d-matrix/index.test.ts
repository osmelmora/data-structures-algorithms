import { test, expect } from "bun:test";
import { searchMatrix } from ".";

const testCases: [number[][], number, boolean][] = [
  [
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
    true,
  ],
  [
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
    false,
  ],
];

test.each(testCases)(
  "given the matrix %j and the target %d the target is in the matrix: %p",
  (nums, target, output) => {
    expect(searchMatrix(nums, target)).toEqual(output);
  },
);
