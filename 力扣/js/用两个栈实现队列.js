var CQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value);
};

CQueue.prototype.deleteHead = function() {
  if (this.stack1.length === 0) {
    return -1;
  } else if (this.stack1.length === 1) {
    return this.stack1.pop();
  } else {
    while(this.stack1.length !== 1) {
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
    let result = this.stack1.pop();
    
    while(this.stack2.length !== 0) {
      let temp = this.stack2.pop();
      this.stack1.push(temp);
    }
    return result;
  }
};