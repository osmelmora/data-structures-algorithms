export function compress(chars: string[]): number {
  if (chars.length <= 1) return chars.length;

  let currentChar = chars[0];
  let currentCharCount = 1;
  let compressed = "";

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== currentChar) {
      compressed +=
        currentCharCount === 1
          ? currentChar
          : `${currentChar}${currentCharCount}`;

      currentChar = chars[i];
      currentCharCount = 1;
    } else {
      currentCharCount++;
    }
  }

  compressed +=
    currentCharCount === 1 ? currentChar : `${currentChar}${currentCharCount}`;

  return compressed.length;
}
