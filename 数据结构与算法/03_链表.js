// 定义每个数据结点的信息
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  
  // 向链表末尾添加数据
  push(data) {
    const newNode = new Node(data);
    let current = this.head;
    // 判断第一个结点是否为空
    if (this.length === 0) {
      this.head = newNode;
    } else {
      // 第二个结点不为空，则找到最后一个结点
      while (current.next) {
        current = current.next;
      }
      // 找到后将next 指向新的结点
      current.next = newNode;
    }
    this.length++;
  }

  toString(separator = ' ') {
    // separator：分割符，数据之间以什么符号进行分割，默认空格
    let str = '';
    let temp = this.head;
    while (temp) {
      str += temp.data;
      if (temp.next) {
        str += separator
      }
      temp = temp.next;
    }
    return str;
  }

  insert(data, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(data);
    if (index == 0) {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    } else {
      const previous = this.getNode(index);
      const temp = previous.next;
      newNode.next = temp;
      previous.next = newNode;
    }
    this.length ++;
  }
  // 根据位置返回指定的元素
  getNode(position) {
    // 越界处理
    if (position < 0 || position > this.length) {
      return null;
    }
    let temp = this.head;
    let index = 0;
    while (index < position) {
      temp = temp.next;
      index ++;
    }
    return temp;
  }
  indexOf(data) {
    let temp = this.head;
    let index = 0;
    while (temp) {
      if (temp.data == data) {
        return index;
      }
      temp = temp.next;
      index ++;
    }
    return -1;
  }
  
  updateByData(data, newData) {
    let temp = this.head;
    while (temp) {
      if (temp.data == data) {
        temp.data = newData;
        return temp;
      }
      temp = temp.next;
    }
    return false;
  }

  updateByPositios(position, newData) {
    if (position < 0 || position > this.length) {
      return false;
    }
    let index = 0;
    let temp = this.head;
    while (index < position) {
      temp = temp.next;
      index ++;
    }
    temp.data = newData;
    return temp;
  }

  removeByPosition(position) {
    if (position < 0 || position > this.length) {
      return false;
    }

    if (position == 0) {
      this.head = this.head.next;
    } else {
      let previous = this.getNode(position - 1);
      previous.next = previous.next.next;
    }
    this.length --;
    return true;
  }
  
  removeByData(data) {
    let position = this.indexOf(data);
    return this.removeByPosition(position);
  }
  isEmpty() {
    return this.length == 0;
  }
  size() {
    return this.length;
  }
}