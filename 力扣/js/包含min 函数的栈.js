var MinStack = function() {
  this.items = [];
};

MinStack.prototype.push = function(x) {
  this.items[this.items.length] = x;
};

MinStack.prototype.pop = function() {
  this.items.length -= 1;
};

MinStack.prototype.top = function() {
  if (this.items.length === 0) {
    return undefined;
  }
  return this.items[this.items.length - 1];
};

MinStack.prototype.min = function() {
  let min = this.items[0];

  for (var i = 1; i < this.items.length; i++) {
    if (min > this.items[i]) {
      min = this.items[i];
    }
  }
  return min;
};

var minStack = new MinStack();
