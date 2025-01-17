import { test, expect } from "bun:test";
import { groupAnagrams } from ".";

const testCases: [string[], string[][]][] = [
  [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
  ],
  [[""], [[""]]],
  [["a"], [["a"]]],
];

test.each(testCases)(
  "given an array of string %j we should return the anagrams grouped : %j",
  (strs, output) => {
    expect(groupAnagrams(strs)).toEqual(output);
  },
);
