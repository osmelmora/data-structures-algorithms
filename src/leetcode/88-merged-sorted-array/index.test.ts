import { test, expect } from "bun:test";
import { merge } from ".";

const testCases: [number[], number, number[], number, number[]][] = [
  [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
  [[1], 1, [], 0, [1]],
  [[0], 0, [1], 1, [1]],
];

test.each(testCases)(
  "should merge %j having %i length with %j having length %i resulting %j",
  (nums1, m, nums2, n, result) => {
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(result);
  }
);
