import { test, expect } from "bun:test";
import { productExceptSelf } from ".";

const testCases: [number[], number[]][] = [
  [
    [1, 2, 3, 4],
    [24, 12, 8, 6],
  ],
  [
    [-1, 1, 0, -3, 3],
    [0, 0, 9, 0, 0],
  ],
  [
    [2, 0, 4, 5, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ],
];

test.each(testCases)(
  "given %j the product of array except self is %j",
  (original, product) => {
    expect(productExceptSelf(original)).toEqual(product);
  },
);
