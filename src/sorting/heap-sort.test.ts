import { expect, test } from "bun:test";

import { heapSort } from "./heap-sort";

test("Heap Sort", () => {
  const arr = [3, 0, 2, 5, -1, 4, 1];
  heapSort(arr);
  expect(arr).toEqual([-1, 0, 1, 2, 3, 4, 5]);
});
