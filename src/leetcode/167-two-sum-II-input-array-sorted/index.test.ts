import { test, expect } from "bun:test";
import { twoSum } from ".";

const testCases: [number[], number, [number, number]][] = [
  [[2, 7, 11, 15], 9, [1, 2]],
  [[2, 3, 4], 6, [1, 3]],
  [[-1, 0], -1, [1, 2]],
];

test.each(testCases)(
  "given the array of numbers %j and the target %d the sum of the indexes of the two numbers that sum up to the target is: %d",
  (nums, target, output) => {
    twoSum(nums, target);
    expect(twoSum(nums, target)).toEqual(output);
  },
);
