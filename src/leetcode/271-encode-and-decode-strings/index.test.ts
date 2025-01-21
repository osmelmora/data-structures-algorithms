import { test, expect } from "bun:test";
import { Solution } from ".";

const testCases: [string[]][] = [
  [["neet", "code", "love", "you"]],
  [["we", "say", ":", "yes"]],
];

test.each(testCases)(
  "given the array of words %j when can encode and decode and obtain the same array: %j",
  (strs) => {
    const encoder = new Solution();
    const encodedStr = encoder.encode(strs);
    expect(encoder.decode(encodedStr)).toEqual(strs);
  },
);
