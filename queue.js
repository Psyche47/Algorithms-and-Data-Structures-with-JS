class Queue {
  constructor() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
  }

  size() {
    return this._newestIndex - this._oldestIndex;
  }
}

Queue.prototype.enqueqe = function (data) {
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
};

Queue.prototype.dequeue = function () {
  let newestIndex = this._newestIndex,
    oldestIndex = this._oldestIndex,
    deletedData;

  if (oldestIndex !== newestIndex) {
    deletedData = this._storage[oldestIndex];
    delete this._storage[oldestIndex];
    this._oldestIndex++;
    return deletedData;
  }
};

let newQueue = new Queue();
newQueue.enqueqe(23);
console.log(newQueue.size());
console.log(newQueue.dequeue());
