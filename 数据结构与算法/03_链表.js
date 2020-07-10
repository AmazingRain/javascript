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

}