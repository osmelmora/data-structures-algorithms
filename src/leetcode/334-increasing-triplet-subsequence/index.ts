export function increasingTriplet(nums: number[]): boolean {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      // it means the current value is greater than the first and second
      // considering they start off as Number.MAX_VALUE then we found third index
      return true;
    }
  }

  return false;
}
