import { test, expect } from "bun:test";
import { reverseWords } from ".";

const testCases = [
  ["the sky is blue", "blue is sky the"],
  ["  hello world  ", "world hello"],
  ["a good   example", "example good a"],
];

test.each(testCases)("should reverse the words %s to %s", (words, reversed) => {
  expect(reverseWords(words)).toEqual(reversed);
});
