export function mergeSort(arr: number[]): number[] {
  return mergeSortHelper(arr, 0, arr.length - 1);
}

function mergeSortHelper(arr: number[], left: number, right: number): number[] {
  if (left >= right) {
    return arr;
  }

  let middle = Math.floor((left + right) / 2);

  mergeSortHelper(arr, left, middle);
  mergeSortHelper(arr, middle + 1, right);
  merge(arr, left, middle, right);

  return arr;
}

function merge(
  arr: number[],
  left: number,
  middle: number,
  right: number
): void {
  let leftArr = arr.slice(left, middle + 1);
  let rightArr = arr.slice(middle + 1, right + 1);
  
  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}
