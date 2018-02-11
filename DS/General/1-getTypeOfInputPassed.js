var getTypeOfInput = function (object) {
  return Object.prototype.toString.call(object).slice(8, -1);
};

console.log(getTypeOfInput('w3resource')); // String
console.log(getTypeOfInput([1, 2, 4, 0])); // Array

var f = function () {}
console.log(getTypeOfInput(f)); // Function
console.log(getTypeOfInput(1231231)); // Number
console.log(getTypeOfInput(null)); // Null
console.log(getTypeOfInput(undefined)); // Undefined