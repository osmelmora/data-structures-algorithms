import { test, expect } from "bun:test";
import { maxProfit } from ".";

const testCases: [number[], number][] = [
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
];

test.each(testCases)(
  "given an array of prices %j the maximum profit is: %d",
  (nums, profit) => {
    expect(maxProfit(nums)).toEqual(profit);
  },
);
