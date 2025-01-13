import { test, expect } from "bun:test";
import { maxArea } from ".";

const testCases: [number[], number][] = [
  [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
  [[1, 1], 1],
];

test.each(testCases)(
  "given the height list %j the max amount of water a container an store is: %d",
  (heightList, amount) => {
    expect(maxArea(heightList)).toEqual(amount);
  },
);
