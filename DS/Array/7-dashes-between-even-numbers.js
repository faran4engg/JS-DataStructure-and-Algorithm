/*Write a JavaScript program which accept a number as input 
and insert dashes (-) between each two even numbers. 
For example if you accept 82546 the output should be 8-254-6
*/

function dashBetweenEvenNumbers(arg) {
  // step 1. make a result array
  var result = [];
  // step 2. Check if the arg passed is number or not
  // refer example 3_checkIfInputIsAnArray.js for details :)

  if (toString.call(arg) === '[object Number]') {
    console.log('Its a Number');
    // now covert it to string and split the string into Array
    // so that we can iterate over each single digit num to check if they are even
    var numArr = arg.toString().split("");

    for (var i = 0; i < numArr.length; i++) {

      if (numArr[i] % 2 === 0 && numArr[i + 1] % 2 === 0) {

        result.push(numArr[i], "-", numArr[i + 1]);

        /* below is traditional way :D

        result.push(numArr[i]);
        result.push("-");
        result.push(numArr[i + 1]);
        */
        i++;

        // instead of push we can also use splice


      } else {
        result.push(numArr[i]);

      }

    }


    return result.join("");
  } else {
    return "Not a Number";
  }
}




console.log(dashBetweenEvenNumbers("adad")); // passing as string
console.log(dashBetweenEvenNumbers(82546)); // passing as Number