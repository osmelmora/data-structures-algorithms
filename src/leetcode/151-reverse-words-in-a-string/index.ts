export function reverseWords(s: string): string {
  const words = s.trim().replaceAll(/\s+/g, " ").split(" ");
  return words.reverse().join(" ");
}
