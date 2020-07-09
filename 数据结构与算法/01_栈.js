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

// 10进制转2 到36进制中的一种
function baseChange(decNum, base) {
  const stack = new Stack();
  // 先将其保存，随后根据栈中的值进行预期对应，转换为对应进制
  const digist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  let rem;
  if (base < 2 || base > 36) {
    return '进制输入不和法';
  }

  while (decNum > 0) {
    rem = Math.floor(decNum % base);
    stack.push(rem);
    decNum = Math.floor(decNum / base);
  }

  while (stack.items.length != 0) {
    str += digist[stack.pop()];
  }

  return str;s
}

console.log(baseChange(10, 2));  //1010


