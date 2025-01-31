import { test, expect } from "bun:test";
import { search } from ".";

const testCases: [number[], number, number][] = [
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[-1, 0, 3, 5, 9, 12], 2, -1],
];

test.each(testCases)(
  "given the array of numbers %j and the target %d the index of the target is: %d",
  (nums, target, output) => {
    expect(search(nums, target)).toEqual(output);
  },
);
