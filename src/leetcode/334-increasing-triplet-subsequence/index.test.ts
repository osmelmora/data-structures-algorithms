import { test, expect } from "bun:test";
import { increasingTriplet } from ".";

const testCases: [number[], boolean][] = [
  [[1, 2, 3, 4, 5], true],
  [[5, 4, 3, 2, 1], false],
  [[2, 1, 5, 0, 4, 6], true],
];

test.each(testCases)(
  "given %j the aswer of the existence of a triple of indices is %p",
  (list, doesExist) => {
    expect(increasingTriplet(list)).toEqual(doesExist);
  },
);
