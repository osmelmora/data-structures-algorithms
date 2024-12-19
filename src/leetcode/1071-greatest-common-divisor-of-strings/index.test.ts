import { test, expect } from "bun:test";
import { gcdOfStrings } from ".";

const testCases: [string, string, string][] = [
  ["ABCABC", "ABC", "ABC"],
  ["ABABAB", "ABAB", "AB"],
  ["LEET", "CODE", ""],
];

test.each(testCases)(
  "given the word %s and word %s the greates common divisor is %s",
  (word1, word2, output) => {
    expect(gcdOfStrings(word1, word2)).toEqual(output);
  },
);
