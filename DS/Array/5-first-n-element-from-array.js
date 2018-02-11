/*
Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.
*/

function firstNElementsFromArray(arr, n) {
  // check if the num 'n' passed is 0 or -ve 
  //OR 'n' is greater than arr.length
  // in that case return a msg 'Plz provide valid range'
  if (n <= 0 || n > arr.length) {
    return 'Plz provide valid range';
  } else {
    return arr.slice(0, n);
  }
}
var array = [1, 2, 3, 4, 5]
var result = firstNElementsFromArray(array, 3);
console.log(result);