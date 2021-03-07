/* Insertion Sort Algorithm:
   Average Time Complexity: O(n*n)
   Best Time Complexity: O(n)
   Works well if data is continously being added and needs to get sorted.
*/
function insertionSort(arr) {
  let arrLen = arr.length;
  for (let i = 1; i < arrLen; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([5, 3, 1, 2, 4])); // -> [ 1, 2, 3, 4, 5 ]
