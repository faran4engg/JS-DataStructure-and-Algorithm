/**
  Write a JavaScript function to check whether an `input` is an array or not.

  Test Data :
  console.log(checkIsArray('w3resource')); 
  console.log(checkIsArray([1, 2, 4, 0]));
  false
  true
 */

//  custom logic
function checkIsArray(input) {
  console.dir(input);
  console.log(toString.call(input));
  // for strings it will output as -> "[object String]"
  // for arrays it will output as -> "[object Array]"

  if (toString.call(input) === '[object Array]') {
    return 'Input passed is an Array'
  }
  return 'Input passed is not an Array'
}

console.log(checkIsArray('w3resource'));
console.log(checkIsArray([1, 2, 4, 0]));