function Stack() {
  this.items = [];
}
Stack.prototype.push = function (val) {
  this.items.push(val);
};
Stack.prototype.pop = function (val) {
  return this.items.pop();
};
Stack.prototype.peek = function (val) {
  return this.items[this.items.length - 1];
};
Stack.prototype.isEmpty = function (val) {
  return (this.items.length === 0);
};
Stack.prototype.clear = function (val) {
  this.items = [];
};
Stack.prototype.size = function (val) {
  return this.items.length;
};
Stack.prototype.print = function () {
  console.log(this.items.toString());
};