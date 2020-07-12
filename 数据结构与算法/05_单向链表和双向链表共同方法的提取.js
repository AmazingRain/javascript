// 类的定义
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 基础链表
class BaseLinkList {
  constructor() {
    this.length = 0;
    this.head = null;
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

  updateByPosition(position, newData) {
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
  isEmpty() {
    return this.length == 0;
  }
  size() {
    return this.length;
  }
  removeByData(data) {
    let position = this.indexOf(data);
    return this.removeByPosition(position);
  }
}

// 单向链表的实现
class LinkList extends BaseLinkList {
  constructor() {
    super();
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

  insert(data, position) {
    if (position < 0 || position > this.length) {
      return false;
    }
    const newNode = new Node(data);
    if (position == 0) {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    } else {
      const previous = this.getNode(position);
      const temp = previous.next;
      newNode.next = temp;
      previous.next = newNode;
    }
    this.length ++;
    return true;
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
}

// 双向链表的实现
class DoublyLinkedList extends BaseLinkList {
  constructor() {
    super();
    this.tail = null;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  insert(data, postion) {
    if (postion < 0 || postion > this.length) {
      return false;
    }
    let newNode = new Node(data);
    if (postion == 0) {
      // 为空
      if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (postion == this.length) { // 最后插入
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      const previous = this.getNode(postion - 1);
      newNode.prev = previous;
      newNode.next = previous.next;
      previous.next.prev = newNode;
      previous.next = newNode;
    }
    this.length ++;
    return true;
  }

  removeByPosition(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    if (position == 0) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head.next.prev = null;
        this.head = this.head.next;        
      } 
    } else if (position == this.length -1) { // 删除最后一个
      this.tail.prev.next = null;
      this.tail = this.tail.prev
    } else {
      let previous = this.getNode(position - 1);
      previous.next = previous.next.next;
      previous.next.prev = previous;
    }
    this.length --;
    return true;
  }
}