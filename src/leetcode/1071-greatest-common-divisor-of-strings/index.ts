export function gcdOfStrings(str1: string, str2: string): string {
  const greatestCommonDivisor = gcd(str1.length, str2.length);
  const gcdString = str1.substring(0, greatestCommonDivisor);

  const isGcdForStrings =
    gcdString.repeat(str1.length / greatestCommonDivisor) === str1 &&
    gcdString.repeat(str2.length / greatestCommonDivisor) === str2;

  return isGcdForStrings ? gcdString : "";
}

function gcd(num1: number, num2: number): number {
  let cursor = Math.min(num1, num2);

  while (cursor > 0) {
    if (num1 % cursor === 0 && num2 % cursor === 0) {
      break;
    }

    cursor--;
  }

  return cursor;
}
