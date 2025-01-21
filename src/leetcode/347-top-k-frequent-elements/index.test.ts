import { test, expect } from "bun:test";
import { topKFrequent } from ".";

const testCases: [number[], number, number[]][] = [
  [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
  [[1], 1, [1]],
];

test.each(testCases)(
  "given the array %j the %d most frequent elements are: %j",
  (nums, k, result) => {
    expect(topKFrequent(nums, k)).toEqual(result);
  },
);
