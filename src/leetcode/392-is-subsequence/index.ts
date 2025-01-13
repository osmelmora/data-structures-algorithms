export function isSubsequence(s: string, t: string): boolean {
  if (s === "") return true; // this one is only to make codeleet test cases to pass because the case is not described
  if (s === t) return true;
  if (s.length > t.length) return false;

  let sPointer = 0;

  for (let char of t) {
    if (char === s[sPointer]) {
      sPointer++;

      if (sPointer === s.length) {
        return true;
      }
    }
  }

  return false;
}
