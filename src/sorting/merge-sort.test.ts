import { test, expect } from "bun:test";

import { mergeSort } from "./merge-sort";

test("Merge sort", () => {
  let sample: number[] = [5, 3, 8, 4, 2, 1];

  expect(mergeSort(sample)).toEqual([1, 2, 3, 4, 5, 8]);
});
