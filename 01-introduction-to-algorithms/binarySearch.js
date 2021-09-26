function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

let myList = [1, 3, 5, 7, 9];

// console.log(binarySearch(myList, 3));
// console.log(binarySearch(myList, -1));

// Recursive binary search
function binarySearchRecursive(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  let guess = Math.floor((low + high) / 2);

  if (arr.length === 1) {
    if (arr[0] === item) {
      console.log(item + " found in array");
    } else {
      console.log(item + " not found in array");
    }
  } else {
    if (arr[guess] > item) {
      return binarySearchRecursive(arr.slice(0, guess), item);
    } else if (arr[guess] < item) {
      return binarySearchRecursive(arr.slice(guess + 1), item);
    } else if (arr[guess] === item) {
      console.log(item + " found in array");
    }
  }
}

// console.log(binarySearchRecursive([1, 2, 3, 4, 5], 2));

// Recursive binary search that return the index of the item we are looking for in the original array
// Solution from https://www.geeksforgeeks.org/binary-search/
function recursiveBinarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return recursiveBinarySearch(arr, l, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return recursiveBinarySearch(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}
