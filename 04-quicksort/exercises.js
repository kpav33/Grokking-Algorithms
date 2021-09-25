// Find sum of array with loop
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Find sum of array recursively
function sumRecursive(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let subArray = arr.slice(1);
    return arr[0] + sumRecursive(subArray);
  }
}

// Count number of items in an array recursively
function countRecursive(arr) {
  if (arr.length === 1) {
    return 1;
  } else {
    return 1 + countRecursive(arr.slice(1));
  }
}

// Find greatest number in an array recursively
function maxRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr[0], maxRecursive(arr.slice(1)));
  }
}

// console.log(sum([1, 2, 3, 4]));
// console.log(sumRecursive([1, 2, 3, 4]));
// console.log(countRecursive([1, 2, 3, 4, 5]));
// console.log(maxRecursive([1, 2, 3, 4, 5, 33]));
