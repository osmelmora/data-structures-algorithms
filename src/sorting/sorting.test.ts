import { test, expect } from "bun:test";

import { insertionSort } from "./insertion-sort";
import { mergeSort } from "./merge-sort";
import { heapSort } from "./heap-sort";
import { quickSort } from "./quick-sort";

const sortingAlgorithms = {
  "Insertion Sort": insertionSort,
  "Merge Sort": mergeSort,
  "Heap Sort": heapSort,
  "Quick Sort": quickSort,
};

for (const [name, algorithm] of Object.entries(sortingAlgorithms)) {
  test(`${name}: should sort an empty array`, () => {
    const arr: number[] = [];
    const sortedArr = algorithm(arr);
    expect(sortedArr).toEqual([]);
  });

  test(`${name}: should sort an array with one element`, () => {
    const arr: number[] = [5];
    const sortedArr = algorithm(arr);
    expect(sortedArr).toEqual([5]);
  });

  test(`${name}: should sort an array with multiple elements`, () => {
    const arr: number[] = [5, 2, 8, 1, 9, 3];
    const sortedArr = algorithm(arr);
    expect(sortedArr).toEqual([1, 2, 3, 5, 8, 9]);
  });

  test(`${name}: should sort an array with duplicate elements`, () => {
    const arr: number[] = [5, 2, 8, 1, 9, 3, 5, 2];
    const sortedArr = algorithm(arr);
    expect(sortedArr).toEqual([1, 2, 2, 3, 5, 5, 8, 9]);
  });

  test(`${name}: should sort a large array`, () => {
    const arr: number[] = [];
    for (let i = 10000; i > 0; i--) {
      arr.push(i);
    }
    const sortedArr = algorithm(arr);
    expect(sortedArr).toEqual(Array.from({ length: 10000 }, (_, i) => i + 1));
  });
}
