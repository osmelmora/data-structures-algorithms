export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letters = new Map<string, number>();

  for (const char of s) {
    letters.set(char, (letters.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!letters.has(char)) {
      return false;
    }

    letters.set(char, letters.get(char)! - 1);

    if (letters.get(char)! < 0) {
      return false;
    }
  }

  return true;
}
