import { test, expect } from "bun:test";
import { isSubsequence } from ".";

const testCases: [string, string, boolean][] = [
  ["abc", "ahbgdc", true],
  ["axc", "ahbgdc", false],
];

test.each(testCases)(
  "given the string s  with value %s and string t with value %s, s is a subsequence of t: %p",
  (s, t, result) => {
    expect(isSubsequence(s, t)).toEqual(result);
  },
);
