export function mergeAlternately(word1: string, word2: string): string {
  let merged = "";
  let maxLength = Math.max(word1.length, word2.length);
  let cursor = 0;

  while (cursor < maxLength) {
    if (cursor < word1.length) {
      merged += word1[cursor];
    }

    if (cursor < word2.length) {
      merged += word2[cursor];
    }

    cursor++;
  }

  return merged;
}
