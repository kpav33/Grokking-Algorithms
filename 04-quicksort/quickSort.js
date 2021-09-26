// With array method and spread operator
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let smaller = arr.filter((item) => item < pivot);
    let greater = arr.filter((item) => item > pivot);

    return [...quickSort(smaller), pivot, ...quickSort(greater)];
  }
}

// With a for loop and concat method
/*
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let smaller = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > pivot) {
        greater.push(arr[i]);
      } else if (arr[i] < pivot) {
        smaller.push(arr[i]);
      }
    }

    return quickSort(smaller).concat(pivot).concat(quickSort(greater));
  }
}
*/

console.log(quickSort([10, 5, 2, 3]));
