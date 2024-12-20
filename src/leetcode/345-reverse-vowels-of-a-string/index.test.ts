import { test, expect } from "bun:test";
import { reverseVowels } from ".";

const testCases = [
  ["IceCreAm", "AceCreIm"],
  ["leetcode", "leotcede"],
];

test.each(testCases)(
  "given the word %s when we reverse the vowels we should obtain %s",
  (original, sorted) => {
    expect(reverseVowels(original)).toEqual(sorted);
  },
);
