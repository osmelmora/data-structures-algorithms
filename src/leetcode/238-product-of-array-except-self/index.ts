export function productExceptSelf(nums: number[]): number[] {
  const output: number[] = new Array(nums.length).fill(0);
  let zeroCount: number = 0;
  let zeroIndex: number = -1;
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // when in the list there is more than one zero then all products will be 0
      if (++zeroCount > 1) return output;
      zeroIndex = i;
    } else {
      product *= nums[i];
    }
  }

  if (zeroCount === 1) {
    output[zeroIndex] = product;
  } else {
    for (let i = 0; i < nums.length; i++) {
      output[i] = product / nums[i];
    }
  }

  return output;
}
