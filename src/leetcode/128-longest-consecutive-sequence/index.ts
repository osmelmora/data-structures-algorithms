export function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  let maxSequenceLength = 0;
  const visited = new Set(nums);

  for (const num of visited) {
    if (visited.has(num - 1)) continue;

    let length = 1;

    while (visited.has(num + length)) {
      length++;
    }

    maxSequenceLength = Math.max(maxSequenceLength, length);
  }

  return maxSequenceLength;
}
