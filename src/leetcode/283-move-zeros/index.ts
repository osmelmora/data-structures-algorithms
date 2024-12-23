export function moveZeroes(nums: number[]): void {
  let zeroCount = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      if (zeroCount > 0) {
        nums[i - zeroCount] = nums[i];
      }
    }
  }

  if (zeroCount > 0) {
    for (let i = length - zeroCount; i < length; i++) {
      nums[i] = 0;
    }
  }
}
