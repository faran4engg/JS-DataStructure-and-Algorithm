/*
How would you add a number in an Array without using push method

*/

// Note: we can use splice to add at any position :)

var array = ['item1', 'item2', 'item3']

function addInArrayWithoutPush(element) {

  // removing nothing
  // but adding the element from array.length [from the ending position]
  array.splice(array.length, 0, element);
  return array;
}

console.log(addInArrayWithoutPush('addThis'));