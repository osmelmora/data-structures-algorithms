export function findSubstring(s: string, words: string[]): number[] {
  let start = 0;
  let end = words[0].length * words.length;
  const output: number[] = [];

  const ocurrences = new Map<string, number>();
  for (const word of words) {
    if (!ocurrences.has(word)) {
      ocurrences.set(word, 0);
    }
    ocurrences.set(word, ocurrences.get(word)! + 1);
  }

  while (end <= s.length) {
    if (isPermutation(s.slice(start, end), new Map(ocurrences.entries()))) {
      output.push(start);
    }

    start++;
    end++;
  }

  return output;

  function isPermutation(
    str: string,
    wordOcurrencies: Map<string, number>,
  ): boolean {
    let current = 0;

    while (current < words.length) {
      const start = current * words[0].length;
      const end = start + words[0].length;
      const currentWord = str.slice(start, end);

      if (!wordOcurrencies.has(currentWord)) {
        return false;
      }

      wordOcurrencies.set(currentWord, wordOcurrencies.get(currentWord)! - 1);
      if (wordOcurrencies.get(currentWord) === 0) {
        wordOcurrencies.delete(currentWord);
      } else if (wordOcurrencies.get(currentWord)! < 0) {
        return false;
      }

      current++;
    }

    return wordOcurrencies.size === 0;
  }
}
