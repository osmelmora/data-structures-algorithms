export function search(nums: number[], target: number): number {
  function binarySearch(left: number, right: number): number {
    if (right < left) return -1;

    const pivot = Math.floor((right - left) / 2) + left;
    const current = nums[pivot];

    if (current === target) return pivot;

    if (current > target) return binarySearch(left, pivot - 1);

    return binarySearch(pivot + 1, right);
  }

  return binarySearch(0, nums.length - 1);
}
