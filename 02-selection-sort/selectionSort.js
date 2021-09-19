function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  // Make sure to store the start length of the arr in a variable, because it will be spliced in the loop
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));

/*
Selection sort implementation in a single function
https://dev.to/seanwelshbrown/implementing-a-selection-sort-algorithm-in-javascript-9of

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {

    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }     
    }
    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }
  return array;
}
*/
