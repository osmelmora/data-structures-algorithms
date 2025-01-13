export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    let currentArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(currentArea, area);

    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }

  return area;
}
