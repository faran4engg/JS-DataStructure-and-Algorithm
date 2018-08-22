
function decimalToBinary(decimalNum) {
  let remainderStack = new Stack();
  let remainder;
  let binaryOutput = '';

  while (decimalNum > 0) {
    remainder = Math.floor(decimalNum % 2);
    remainderStack.push(remainder);
    decimalNum = Math.floor(decimalNum / 2);
  }

  while (!remainderStack.isEmpty()) {
    binaryOutput += remainderStack.pop().toString();
  }

  return binaryOutput;
}


console.log(decimalToBinary(10));