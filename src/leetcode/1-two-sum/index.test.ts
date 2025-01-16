import { test, expect } from "bun:test";
import { twoSum } from ".";

const testCases: [number[], number, [number, number]][] = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
];

test.each(testCases)(
  "given an array of integer %j and a target %d the indexes of the sum are: %j",
  (nums, target, result) => {
    expect(twoSum(nums, target)).toEqual(result);
  },
);
