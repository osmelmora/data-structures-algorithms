const TARGET = 0;
export function threeSum(nums: number[]): [number, number, number][] {
  const output: [number, number, number][] = [];

  nums.sort((a, b) => a - b);

  for (const first of nums.keys()) {
    // when consecutive numbers are equal we can skip
    if (nums[first] === nums[first - 1]) continue;

    let [second, third] = [first + 1, nums.length - 1];

    while (second < third) {
      const sum = nums[first] + nums[second] + nums[third];

      if (sum === TARGET) {
        // and edge case is repeated numbers so we want to have unique tuples
        while (second < third && nums[second] === nums[second + 1]) second++;
        while (second < third && nums[third] === nums[third - 1]) third--;

        output.push([nums[first], nums[second], nums[third]]);
        second++;
        third--;
      } else if (sum < TARGET) {
        second++;
      } else {
        third--;
      }
    }
  }

  return output;
}
