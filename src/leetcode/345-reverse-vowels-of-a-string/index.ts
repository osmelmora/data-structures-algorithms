export function reverseVowels(s: string): string {
  let leftCursor = 0;
  let rightCursor = s.length - 1;
  const chars = s.split("");

  while (leftCursor < rightCursor) {
    const isLeftVowel = isVowel(chars[leftCursor]);
    const isRightVowel = isVowel(chars[rightCursor]);

    if (isLeftVowel && isRightVowel) {
      swap(chars, leftCursor, rightCursor);
      leftCursor++;
      rightCursor--;

      continue;
    }

    if (!isLeftVowel) {
      leftCursor++;
    }

    if (!isRightVowel) {
      rightCursor--;
    }
  }

  return chars.join("");
}

function isVowel(char: string) {
  return !!char.match(/[aeiou]/i);
}

function swap(chars: string[], positionA: number, positionB: number) {
  let temporal = chars[positionA];
  chars[positionA] = chars[positionB];
  chars[positionB] = temporal;

  return chars;
}
