/* 
Write a JavaScript function to clone an array.

Believe it or not, there are reasons we use JavaScript frameworks outside of 
animations and those sexy accordions that people can't do without. 
The further you get into high-powered JavaScript applications 
(assuming you're creating true web applications, not websites), 
the more the need for basic JavaScript functionalities; 
i.e. JavaScript utilities that have nothing to do with DOM. 
One of those basic utilities is the ability to clone an array. 
Quite often I see developers iterating over array items to create their clone; 
in reality, cloning an array can be as easy as a slice!
*/

/*
To clone the contents of a given array, all you need to do is call slice, providing 0 as the first argument:

var clone = myArray.slice(0);

The code above creates clone of the original array; keep in mind that if objects exist in your array, 
the references are kept; i.e. the code above does not do a "deep" clone of the array contents. 
To add clone as a native method to arrays, you'd do something like this:

Array.prototype.clone = function() {
	return this.slice(0);
};
*/


/*
There are at least 5 ways to clone an array:
slice
Array.from()
concat
spread operator, etc. (so slow, forget it for now)
loop
*/

function cloneArray(arr) {
  var returnClone;
  // arr.slice(); // slower than below
  // arr.slice(0); // faster than above, but slower than below
  // arr.slice(0, arr.length); // fastest among all
  returnClone = arr.slice(0, arr.length);
  return returnClone;
}
var array = [1, 2, 3];
var cloneArr = cloneArray(array);
console.log(cloneArr);