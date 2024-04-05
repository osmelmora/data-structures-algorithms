# Insertion sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Algorithm

1. Start from the second element of the array and compare it with the previous element.
2. If the current element is smaller than the previous element, compare it with the elements before. Move the greater elements one position up to make space for the current element.
3. Repeat step 2 until the current element is greater than the previous element or the current element is at the beginning of the array.
4. Move to the next element and repeat steps 2 and 3 until all elements are sorted.

## Pseudocode

```
for i = 1 to n-1
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key
        arr[j + 1] = arr[j]
        j = j - 1
    arr[j + 1] = key
```

## Complexity

- Time complexity: O(n^2) in the worst case, O(n) in the best case (when the array is already sorted).

## References

- [Wikipedia - Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
- [GeeksforGeeks - Insertion sort](https://www.geeksforgeeks.org/insertion-sort/)
- [Khan Academy - Insertion sort](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)
- [Brilliant - Insertion sort](https://brilliant.org/wiki/insertion-sort/)
