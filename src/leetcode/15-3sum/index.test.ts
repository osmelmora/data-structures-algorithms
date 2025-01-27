import { test, expect } from "bun:test";
import { threeSum } from ".";

const testCases: [number[], [number, number, number][]][] = [
  [
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  ],
  [[0, 1, 1], []],
  [[0, 0, 0], [[0, 0, 0]]],
];

test.each(testCases)(
  "given the array of numbers %j the list of triplets that sum up to 0 in ascending order is %j",
  (nums, output) => {
    expect(threeSum(nums)).toEqual(output);
  },
);
