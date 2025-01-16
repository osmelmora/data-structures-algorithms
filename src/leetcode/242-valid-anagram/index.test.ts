import { test, expect } from "bun:test";
import { isAnagram } from ".";

const testCases: [string, string, boolean][] = [
  ["anagram", "nagaram", true],
  ["rat", "car", false],
];

test.each(testCases)(
  "given the 2 strings %s and %s, they are an anagram: %p",
  (s, t, result) => {
    expect(isAnagram(s, t)).toEqual(result);
  },
);
