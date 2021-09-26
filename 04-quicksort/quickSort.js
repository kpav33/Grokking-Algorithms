// With array method and spread operator
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    // Performance of quicksort heavily depends on the pivot you choose (check book page 68)
    // With a good pivot the best-case scenario performance is O(n * log n)
    // Bad pivot can lead to worst-case scenario with performance O(n * n)
    // If you choose a random element in the array as pivot, on average quicksort will have best-case scenario performance
    // To avoid calculating random elements you could just pick the middle element as pivot by calculating array length divided with 2
    // let pivot = arr[Math.floor(arr.length / 2)];
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
