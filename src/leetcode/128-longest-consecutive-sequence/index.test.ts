import { test, expect } from "bun:test";
import { longestConsecutive } from ".";

const testCases: [number[], number][] = [
  [[100, 4, 200, 1, 3, 2], 4],
  [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
];

test.each(testCases)(
  "given the numbers %j the longuest consecutive sequence is %d",
  (nums, output) => {
    expect(longestConsecutive(nums)).toEqual(output);
  },
);
