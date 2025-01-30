export function trap(height: number[]): number {
  let waterTrapped = 0;

  // I want to for every height I need its maximum height to the left and right
  // this way for every height I can calculate the water trapped by finding the minimun
  // of the right and left maximum respective to the current height and substract
  // the current height
  const maxLeft: number[] = new Array(height.length).fill(0);
  const maxRight: number[] = new Array(height.length).fill(0);

  let maxL = 0;
  for (const [index, value] of height.entries()) {
    maxL = Math.max(value, maxL);
    maxLeft[index] = maxL;
  }

  let maxR = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxR = Math.max(height[i], maxR);
    maxRight[i] = maxR;
  }

  for (let i = 0; i < height.length; i++) {
    const current = Math.min(maxLeft[i], maxRight[i]) - height[i];
    waterTrapped += Math.max(0, current);
  }

  return waterTrapped;
}
