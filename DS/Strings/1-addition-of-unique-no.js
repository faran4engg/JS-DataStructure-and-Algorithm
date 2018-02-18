/*
Write a function to give addition of unique numbers from a string

Test Data:

"1,2,2,3,4,4,5,5,5,6,6,7,8,9,9"

output should be the addition of:
1,2,3,4,5,6,7,8,9

i.e. remove dublicates and then add those numbers

*/

function removeDublicateAndAdd(str) {
  var numArr = str.split(",");
  // this will give: ["1", "2", "2", "3", "4", "4", "5", "5", "5", "6", "6", "7", "8", "9", "9"]

  // creating a variable to store sum
  var sum = 0;


  // creating Array to store unique elements 
  var uniqueNumArr = [];

  for (var i = 0; i < numArr.length; i++) {
    // parsing the stringified num value into Integer
    var num = parseInt(numArr[i])

    // checking if the unique Array already includes any of the number 
    /*
    NOTE: 
    We can also make use of indexOf method in unique Array
    as .includes() returns true and false,
    if we've used .indexOf(), then we need to check for -1 index
    this -1 index indicates that the element is not present in the array
    */
    if (!uniqueNumArr.includes(num)) {
      uniqueNumArr.push(num);
      sum = sum + num;
    }
  }

  // testing:
  // console.log(uniqueNumArr);
  // console.log(sum);

  return sum;
}

var numString = "1,2,2,3,4,4,5,5,5,6,6,7,8,9,9";

console.log(removeDublicateAndAdd(numString));