import { test, expect } from "bun:test";
import { frequencySort } from ".";

const testCases = [
  ["tree", "eetr"],
  ["cccaaa", "cccaaa"],
  ["Aabb", "bbAa"],
  ["loveleetcode", "eeeelloovtcd"],
];

test.each(testCases)("should sort %s to %s correctly", (original, sorted) => {
  expect(frequencySort(original)).toEqual(sorted);
});
