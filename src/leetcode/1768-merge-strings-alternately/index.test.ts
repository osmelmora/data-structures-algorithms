import { test, expect } from "bun:test";
import { mergeAlternately } from ".";

const testCases: [string, string, string][] = [
  ["abc", "pqr", "apbqcr"],
  ["ab", "pqrs", "apbqrs"],
  ["abcd", "pq", "apbqcd"],
];

test.each(testCases)(
  "given the word %s and word %s it should return %s",
  (word1, word2, output) => {
    expect(mergeAlternately(word1, word2)).toEqual(output);
  },
);
