/*Naive String Algorithm: Search a string to look for similar patterns.
  Time complexity: O(n * n)
*/
function naiveString(long, pattern) {
  let longLength = long.length;
  let patternLength = pattern.length;
  let count = 0;
  for (let i = 0; i < longLength; i++) {
    for (let j = 0; j < patternLength; j++) {
      if (pattern[j] !== long[i + j]) break;
      if (j === patternLength - 1) count++;
    }
  }
  return count;
}

console.log(naiveString("we live in a twilight world", "li")); // -> 2
console.log(naiveString("no friends at dawn", " ")); // -> 3
