export function isPalindrome(s: string): boolean {
  if (s.length < 2) return true;

  const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let leftCursor = 0;
  let rightCursor = cleanedStr.length - 1;

  while (leftCursor < rightCursor) {
    if (cleanedStr[leftCursor] !== cleanedStr[rightCursor]) {
      return false;
    }

    leftCursor++;
    rightCursor--;
  }

  return true;
}
