# Merge sort

Merge sort is a popular sorting algorithm that follows the divide and conquer strategy. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

## Algorithm

1. Divide the unsorted array into two halves.
2. Recursively divide the array into subarrays until each subarray contains only one element.
3. Merge the subarrays to produce new sorted subarrays until only one subarray remains.

## Pseudocode

```
function mergeSort(arr)
    if arr.length <= 1
        return arr
    mid = arr.length / 2
    left = mergeSort(arr[0...mid])
    right = mergeSort(arr[mid...])
    return merge(left, right)
    
function merge(left, right)
    result = []
    while left.length and right.length
        if left[0] <= right[0]
            result.push(left.shift())
        else
            result.push(right.shift())
    return result + left + right
```

## Complexity

- Time complexity: O(n log n) in all cases.
- Space complexity: O(n) due to the auxiliary space used for merging.

## References

- [Wikipedia - Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
- [GeeksforGeeks - Merge sort](https://www.geeksforgeeks.org/merge-sort/)
- [Khan Academy - Merge sort](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/analysis-of-merge-sort)
- [Brilliant - Merge sort](https://brilliant.org/wiki/merge-sort/)

