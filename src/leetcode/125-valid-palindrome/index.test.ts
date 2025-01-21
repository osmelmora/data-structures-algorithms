import { test, expect } from "bun:test";
import { isPalindrome } from ".";

const testCases: [string, boolean][] = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  [" ", true],
];

test.each(testCases)("the phrase %s is palindrome: %p", (phrase, result) => {
  expect(isPalindrome(phrase)).toEqual(result);
});
