export function isValidSudoku(board: string[][]): boolean {
  const seenColumns = new Map<number, Set<string>>();
  const seenRows = new Map<number, Set<string>>();
  const seenSquares = new Map<`${number}, ${number}`, Set<string>>();

  for (const row of board.keys()) {
    for (const column of board[0].keys()) {
      const value = board[row][column];

      if (value === ".") continue;

      const squareKey: `${number}, ${number}` = `${Math.floor(row / 3)}, ${Math.floor(column / 3)}`;

      if (!seenColumns.has(column)) seenColumns.set(column, new Set());
      if (!seenRows.has(row)) seenRows.set(row, new Set());
      if (!seenSquares.has(squareKey)) seenSquares.set(squareKey, new Set());

      if (
        seenColumns.get(column)!.has(value) ||
        seenRows.get(row)!.has(value) ||
        seenSquares.get(squareKey)!.has(value)
      ) {
        return false;
      }

      seenColumns.get(column)!.add(value);
      seenRows.get(row)!.add(value);
      seenSquares.get(squareKey)!.add(value);
    }
  }

  return true;
}
