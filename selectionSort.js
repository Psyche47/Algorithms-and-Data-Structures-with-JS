/* Selection Sort Algorithm:
   Time Complexity: O(n*n)
*/
function selectionSort(arr) {
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let min = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([33, 2, 44, 23, 22])); // -> [ 2, 22, 23, 33, 44 ]
console.log(selectionSort([1, 2, 20, 23, 22])); // -> [ 1, 2, 20, 22, 23 ]
