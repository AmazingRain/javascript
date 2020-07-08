// 普通队列基于数组
class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join('');
  }

  clear() {
    this.items = [];
  }
}

// 双端对列基于数组
class Deque {
  constructor() {
    this.items = [];
  }

  addFront(item) {
    this.items.unshift(item);
  }

  addRear(item) {
    this.items.push(item);
  }

  removeFront() {
    return this.items.shift();
  }

  removeRear() {
    return this.items.pop();
  }

  peekFront() {
    return this.items[0];
  }

  peekRear() {
    return this.items[this.items.length];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join('');
  }

  clear() {
    this.items = [];
  }
}


// 优先队列基于数组
// 保存值和优先级
class Item {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.items = []
  }
  enqueue(item, priority) {
    let newItem = new Item(item, priority);
    let isAdd = false; // 用于判断遍历时是否添加成功

    if (this.items.length == 0) {
      this.items.push(newItem);
      return true;
    }

    for (let prop of this.items) {
      console.log(prop);
      if (newItem.priority > prop.priority) {
        this.items.splice(prop, 0, newItem);
        isAdd = true;
        break;
      }
    }
    if (!isAdd) {
      this.items.push(newItem);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    let str = '';
    this.items.forEach((ele) => {
      str += `值:${ele.item},优先级:${ele.priority};`
    })
    return str;
  }

  clear() {
    this.items = [];
  }
}