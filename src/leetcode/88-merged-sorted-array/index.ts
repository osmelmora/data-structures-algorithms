export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let current = n + m - 1;
  let nums1Pointer = m - 1;
  let nums2Pointer = n - 1;

  while (nums1Pointer >= 0 && nums2Pointer >= 0) {
    if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
      nums1[current] = nums1[nums1Pointer];
      nums1Pointer--;
    } else {
      nums1[current] = nums2[nums2Pointer];
      nums2Pointer--;
    }

    current--;
  }

  while (nums1[nums1Pointer] >= 0) {
    nums1[current] = nums1[nums1Pointer];
    nums1Pointer--;
    current--;
  }

  while (nums2[nums2Pointer] >= 0) {
    nums1[current] = nums2[nums2Pointer];
    nums2Pointer--;
    current--;
  }
}
