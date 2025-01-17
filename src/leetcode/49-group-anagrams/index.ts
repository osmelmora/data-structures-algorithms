const A_CHAR_CODE = "a".charCodeAt(0);
const ALPHABET_SIZE = 26;

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of strs) {
    const letters = new Array<number>(ALPHABET_SIZE).fill(0);

    for (const char of word) {
      letters[char.charCodeAt(0) - A_CHAR_CODE]++;
    }

    const groupKey = letters.join(",");

    if (!groups.has(groupKey)) {
      groups.set(groupKey, []);
    }

    groups.get(groupKey)!.push(word);
  }

  return Array.from(groups.values());
}
