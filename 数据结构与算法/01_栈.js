// 基于数组栈的实现
class Stack {
  constructor() {
    this.items = [];
  }
  push(ele) {
    this.items.push(ele);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items(this.items.length);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join('');
  }
}

// 10进制数转二进制数
function decimalToBinary(decNum) {
  let stack = new Stack();

  while (decNum > 0) {
    stack.push(decNum % 2);
    decNum = Math.floor(decNum / 2);
  }
  return +stack.items.reverse().join('');
}