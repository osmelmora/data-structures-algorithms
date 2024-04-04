import { expect, test } from "bun:test";

import { insertionSort } from "./insertion-sort";

test("Insertion sort", () => {
  let sample: number[] = [5, 3, 8, 4, 2, 1];

  expect(insertionSort(sample)).toEqual([1, 2, 3, 4, 5, 8]);
});
