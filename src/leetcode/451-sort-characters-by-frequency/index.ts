export function frequencySort(s: string): string {
  const frequencyMap = new Map<string, number>();

  // count char ocurrences
  for (const char of s) {
    const count = (frequencyMap.get(char) ?? 0) + 1;
    frequencyMap.set(char, count);
  }

  let output = "";
  let charsByCount: string[] = [];

  // assign the chars to the position in the array matching the count
  for (const [char, count] of frequencyMap.entries()) {
    charsByCount[count] = (charsByCount[count] ?? "") + char.repeat(count);
  }

  // join the string starting from the end of the array given we want first
  // the chars with more ocurrencies
  for (let i = charsByCount.length - 1; i > 0; i--) {
    if (charsByCount[i]) {
      output += charsByCount[i];
    }
  }

  return output;
}
