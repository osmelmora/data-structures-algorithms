export function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  const frequency = new Array<number[]>(nums.length + 1).fill([]);

  for (const current of nums) {
    if (!count.has(current)) {
      count.set(current, 0);
    }

    count.set(current, count.get(current)! + 1);
  }

  for (const current of count.keys()) {
    frequency[count.get(current)!].push(current);
  }

  const top: number[] = [];

  for (let i = frequency.length - 1; i > 0; i--) {
    for (const n of frequency[i]) {
      top.push(n);

      if (top.length === k) {
        return top;
      }
    }
  }

  throw new Error(
    "there is always a solution given the problem definition so it should't go here",
  );
}
