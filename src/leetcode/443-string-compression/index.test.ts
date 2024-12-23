import { test, expect } from "bun:test";
import { compress } from ".";

const testCases: [string[], number][] = [
  [["a", "a", "b", "b", "c", "c", "c"], 6],
  [["a"], 1],
  [["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"], 4],
];

test.each(testCases)(
  "given the chars %j the compressed chars length is: %d",
  (chars, compressedLength) => {
    expect(compress(chars)).toEqual(compressedLength);
  },
);
