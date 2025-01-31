export function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
    const row = Math.floor((bottom + top) / 2);

    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else {
      break;
    }
  }

  if (top > bottom) {
    return false;
  }

  let left = 0;
  let right = cols - 1;
  const row = Math.floor((bottom + top) / 2);

  while (left <= right) {
    const column = Math.floor((left + right) / 2);

    if (target > matrix[row][column]) {
      left = column + 1;
    } else if (target < matrix[row][column]) {
      right = column - 1;
    } else {
      return true;
    }
  }

  return false;
}
