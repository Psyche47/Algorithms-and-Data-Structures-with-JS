/* Bubble Sort Algorithm:
   Best Case Complexity: O(n)
   Worst Case Complexity: O(n*n)
   Space Complexity: O(1)
*/
function bubbleSort(arr) {
  const arrLen = arr.length;
  for (let i = arrLen; i > 0; i--) {
    let noSwaps;
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log("Completed one pass.");
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([23, 1, 2, 3, 3, 4, 5])); // -> [ 1, 2, 3, 3, 4, 5, 23 ]
console.log(bubbleSort([23, 1, 2, 33, 43, 4, 5])); // -> [ 1, 2, 4, 5, 23, 33, 43 ]
