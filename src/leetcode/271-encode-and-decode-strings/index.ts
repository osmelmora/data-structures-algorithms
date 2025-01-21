const DELIMITER = "#";

export class Solution {
  encode(strs: string[]): string {
    let encodedStr = "";

    for (const word of strs) {
      encodedStr += word.length + DELIMITER + word;
    }

    return encodedStr;
  }

  decode(str: string): string[] {
    // "2#we3#say1#:3#yes"
    const output: string[] = [];
    let cursor = 0;

    while (cursor < str.length) {
      let j = cursor;

      while (str[j] !== DELIMITER) {
        j++;
      }

      const length = +str.substring(cursor, j);
      cursor = j + 1;
      j = cursor + length;

      output.push(str.substring(cursor, j));

      cursor = j;
    }

    return output;
  }
}
