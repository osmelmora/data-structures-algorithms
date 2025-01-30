export function isValid(str: string): boolean {
  const stack: string[] = [];
  const matchSymbol: Map<string, string> = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (const char of str) {
    if (matchSymbol.has(char)) {
      stack.push(matchSymbol.get(char)!);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
