# Heap sort

Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.

Heap sort is an in-place algorithm. Its typical implementation is not stable, but can be made stable (See this).

## Algorithm

1. Build a max heap from the input data.
2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of the heap by 1.
3. Heapify the root of the tree.
4. Repeat step 2 while the size of the heap is greater than 1.


## Psuedocode

```
function heapSort(arr)
    n = arr.length
    for i from n / 2 - 1 to 0
        heapify(arr, n, i)
    for i from n - 1 to 0
        swap(arr[0], arr[i])
        heapify(arr, i, 0)

function heapify(arr, n, i)
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] > arr[largest]
        largest = left
    if right < n and arr[right] > arr[largest]
        largest = right
    if largest != i
        swap(arr[i], arr[largest])
        heapify(arr, n, largest)
```

## Complexity
- Time complexity: O(n log n)
- Space complexity: O(1)

## References

- [Wikipedia - Heap sort](https://en.wikipedia.org/wiki/Heapsort)
- [GeeksforGeeks - Heap sort](https://www.geeksforgeeks.org/heap-sort/)
- [Khan Academy - Heap sort](https://www.khanacademy.org/computing/computer-science/algorithms/heap-sort/a/heap-sort-analysis)
- [Brilliant - Heap sort](https://brilliant.org/wiki/heap-sort/)
- [YouTube - Heap sort](https://www.youtube.com/watch?v=MtQL_ll5KhQ)
- [Programiz - Heap sort](https://www.programiz.com/dsa/heap-sort)
- [Tutorialspoint - Heap sort](https://www.tutorialspoint.com/data_structures_algorithms/heap_sort.htm)
- [Studytonight - Heap sort](https://www.studytonight.com/data-structures/heap-sort)
- [HackerEarth - Heap sort](https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/)
- [HackerRank - Heap sort](https://www.hackerrank.com/topics/heap-sort)
- [Data Structure and Algorithms - Heap sort](https://www.tutorialspoint.com/data_structures_algorithms/heap_sort.htm)

