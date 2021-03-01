/*Binary Search Algorithm:
  Prerequisite: The given array must be sorted.
  Best case complexity: O(1)
  Worst case complexity: O(logn)
*/
function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== value && start <= end) {
    if (array[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 2, 4, 5, 6, 5], 5)); // -> 3
console.log(binarySearch([1, 2, 4, 5, 6, 5], 23)); // -> -1
