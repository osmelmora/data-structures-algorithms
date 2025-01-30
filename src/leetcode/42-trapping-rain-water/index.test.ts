import { test, expect } from "bun:test";
import { trap } from ".";

const testCases: [number[], number][] = [
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
];

test.each(testCases)(
  "given the array of elevations %j the amount of water we can trap is: %d",
  (elevations, water) => {
    expect(trap(elevations)).toEqual(water);
  },
);
