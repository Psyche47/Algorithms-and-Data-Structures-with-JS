class Stack {
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  size() {
    return this._size;
  }

  peek() {
    // Returns the last item added to the stack.
    return this._storage[this._size];
  }
}

Stack.prototype.push = function (data) {
  let size = ++this._size;
  this._storage[size] = data;
};

Stack.prototype.pop = function () {
  let size = this._size;
  let deletedData;
  if (size) {
    deletedData = this._storage[size];
    delete this._storage[size];
    this._size--;
    return deletedData;
  }
};

let newStack = new Stack();
newStack.push(5);
newStack.push(6);
newStack.push(7);
console.log(newStack.pop());
console.log(newStack.size());
console.log(newStack.peek());
console.log(newStack.pop());
