/*
How do you compare two Arrays

var a1 = [1,2,3];
var a2 = [1,2,3];
console.log(a1==a2);    // Returns false
*/

var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
console.log(JSON.stringify(a1) == JSON.stringify(a2)); // Returns true