import { test, expect } from "bun:test";
import { findSubstring } from ".";

const testCases: [string, string[], number[]][] = [
  ["barfoothefoobarman", ["foo", "bar"], [0, 9]],
  ["wordgoodgoodgoodbestword", ["word", "good", "best", "word"], []],
  ["barfoofoobarthefoobarman", ["bar", "foo", "the"], [6, 9, 12]],
  ["wordgoodgoodgoodbestword", ["word","good","best","good"], [8]],
];

test.each(testCases)(
  "given the string %s and words %j it shoudl return the substring starting positions of permutations",
  (str, words, output) => {
    expect(findSubstring(str, words)).toEqual(output);
  }
);
