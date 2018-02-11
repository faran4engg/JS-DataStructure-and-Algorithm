/*
Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.
*/

function lastNElementsFromArray(arr, n) {
  // check if the num 'n' passed is 0 or -ve 
  //OR 'n' is greater than arr.length
  // in that case return a msg 'Plz provide valid range'
  if (n <= 0 || n > arr.length) {
    return 'Plz provide valid range';
  } else {
    // if arr.length-n will start trimming array from that desired position
    // that will eventually help us get the 'n' last elements from array 
    return arr.slice(arr.length - n);

  }
}
var array = [1, 2, 3, 4, 5]
var result = lastNElementsFromArray(array, 3);
console.log(result);