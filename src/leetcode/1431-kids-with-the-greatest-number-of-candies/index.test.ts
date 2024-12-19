import { test, expect } from "bun:test";
import { kidsWithCandies } from ".";

const testCases: [number[], number, boolean[]][] = [
  [[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
  [[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
  [[12, 1, 12], 10, [true, false, true]],
];

test.each(testCases)(
  "given the candies per kids %j and extra candies %d it should return the kids that have more canides if extra is assign to them %j",
  (word1, word2, output) => {
    expect(kidsWithCandies(word1, word2)).toEqual(output);
  },
);
