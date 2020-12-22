function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

Stack.prototype.push = function (value) {
  this.array.push(value);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.peek());
