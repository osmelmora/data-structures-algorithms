export function twoSum(nums: number[], target: number): [number, number] {
  const seen = new Map<number, number>();

  for (const [index, value] of nums.entries()) {
    if (seen.has(target - value)) {
      return [seen.get(target - value)!, index];
    }

    seen.set(value, index);
  }

  // given in the problem definition they state there is always one solution
  // it should't never reach this point
  return [0, 0];
}
