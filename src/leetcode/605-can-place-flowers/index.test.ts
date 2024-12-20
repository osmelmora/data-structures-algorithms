import { test, expect } from "bun:test";
import { canPlaceFlowers } from ".";

const testCases: [number[], number, boolean][] = [
  [[1, 0, 0, 0, 1], 1, true],
  [[1, 0, 0, 0, 1], 2, false],
];

test.each(testCases)(
  "given the flowerbed %j and amount of flowers to plant %d can it be done: %p",
  (word1, word2, output) => {
    expect(canPlaceFlowers(word1, word2)).toEqual(output);
  },
);
