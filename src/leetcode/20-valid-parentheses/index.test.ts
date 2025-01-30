import { test, expect } from "bun:test";
import { isValid } from ".";

const testCases: [string, boolean][] = [
  ["()", true],
  ["()[]{}", true],
  ["(]", false],
  ["([])", true],
];

test.each(testCases)(
  "given the symbols string %s is valid: %p",
  (str, result) => {
    expect(isValid(str)).toEqual(result);
  },
);
