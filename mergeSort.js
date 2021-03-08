/* Merge Sort:
   Timecomplexity: O(nlogn)
   Space Complexity: O(n)
*/
function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
}

console.log(mergeSort([23, 35, 1, 55, 24, 25, 30]));
// -> [ 1, 23, 24, 25, 30, 35, 55 ]
