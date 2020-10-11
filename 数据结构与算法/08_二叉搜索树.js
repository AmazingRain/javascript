class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  max() {
    let tempNode = this.root;
    let key = null;

    while (tempNode !== null) {
      key = tempNode.key;
      tempNode = tempNode.right;
    }

    return key;
  }

  min() {
    let tempNode = this.root;
    let key = null;

    while (tempNode !== null) {
      key = tempNode.key;
      tempNode = tempNode.left;
    }

    return key;
  }

  search(key) {
    let tempNode = this.root;
    while (tempNode !== null) {
      if (key < tempNode.key) {
        tempNode = tempNode.left;
      } else if (key > tempNode.key) {
        tempNode = tempNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   * 二叉树递归遍历
   * 
   * preOrderTraverse：先序遍历
   * midOrderTraverse：中序遍历
   * postorderTraverse：后序遍历
   * 
   * 二叉树非递归遍历
   * 
   * noPreOrderTraverse：先序遍历
   * noMidOrderTraverse：中序遍历
   * noPostorderTraverse：后序遍历
   */

  // 递归
  // 根（父）节点，左子树，右子树
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (!node) {
      return;
    }

    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  // 左子树，根（父）节点，右子树
  minOrderTraverse(callback) {
    this.minOrderTraverseNode(this.root, callback);
  }

  minOrderTraverseNode(node, callback) {
    if (!node) {
      return;
    }

    this.minOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.minOrderTraverseNode(node.right, callback);
  }

  // 左子树，右子树，根（父）节点
  postorderTraverse(callback) {
    this.postorderTraverseNode(this.root, callback);
  }

  postorderTraverseNode(node, callback) {
    if (!node) {
      return;
    }

    this.postorderTraverseNode(node.left, callback);
    this.postorderTraverseNode(node.right, callback);
    callback(node.key)
  }

  // 非递归
  noPreOrderTraverse() {
    if (!this.root) {
      return [];
    }

    let stack = [this.root],
      result = [];

    while (stack.length !== 0) {
      let top = stack.pop();
      result.push(top.key);
      if (top.right) {
        stack.push(top.right);
      }

      if (top.left) {
        stack.push(top.left);
      }
    }

    return result;
  }

  noMidOrderTraverse() {
    let rootNode = this.root;
    if (!rootNode) {
      return [];
    }

    let stack = [],
      result = [];
    while (stack.length !== 0 || rootNode) {
      while (rootNode) {
        stack.push(rootNode);
        rootNode = rootNode.left;
      }

      rootNode = stack.pop();
      result.push(rootNode.key);
      rootNode = rootNode.right;
    }
    return result;
  }

  noPostorderTraverse() {
    if (!this.root) {
      return [];
    }
    let stack = [this.root],
      result = [];
    while (stack.length !== 0) {
      let top = stack.pop();
      result.unshift(top.key);
      if (top.left) {
        stack.push(top.left);
      }
      if (top.right) {
        stack.push(top.right);
      }
    }
    return result;
  }

  // 层次遍历
  levelTraversal() {
    let result = [],
      queue = [this.root];
    if (!this.root) {
      return result;
    }

    while (queue.length !== 0) {
      let node = queue.shift();
      result.push(node.key);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }

  remove(key) {
    let current = this.root; //保存要删除的节点
    let parent = null; //保存 current 的父节点
    let isLeftChild = true; //记录 current 是在它父节点的左侧还是右侧

    //查找要删除的节点是否存在
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      //没有查找到要删除的节点
      if (!current) {
        return false;
      }
    }

    /**
     * 根据要删除的节点（current）是否有子节点分为三种情况
     * 1、要删除的节点（current）没有子节点
     *    1、要删除的节点（current）为根节点：this.root = null;
     *    2、要删除的节点（current）为左子节点：parent.left = null;
     *    3、要删除的节点（current）为右子节点：parent.right = null;
     * 2、要删除的节点（current）有一个子节点
     *    1、要删除的节点（current）为左子节点时（current = this.root）
     *        1、current 为根节点；this.root = current.left;
     *        2、current 为父节点（parent）的左子节点（isLeftChild = true）：parnet.left = current.left
     *        3、current 为父节点（parent）的右子节点（isLeftChild = false）：parent.right = current.left
     *    2、要删除的节点（current）为右子节点时
     *        1、current 为根节点：this.root = current.right
     *        2、current 为 parent 的左子节点（isLeftChild = true）：parent.left = current.right
     *        3、current 为 parent 的右子节点（isRightChild = false）：parent.right = current.right
     * 3、要删除的节点（current）有两个子节点
     *    如果要删除 current 的话，那么就需要找到合适的节点来替换 current，合适的节点是指：
     *      1、current 左子树中比 current 小一点点的节点，也就是 current 左子树中的最小值，这个节点也被称之为 current 的前驱
     *      2、current 右子树中比 current 大一点点的节点，也就是 current 右子树中的最大值，这个节点也被称之为 current 的后继
     *    
     *    如果想要使用 current 的前驱替换 current 时，那么只需要在 current 的左子树中一直向右遍历查找
     *    如果想要使用 current 的后继替换 current 时，那么只需要在 current 的右子树中一直向左遍历查找
     *    
     *    具体代码的实现使用的是后继节点，定义一个 getSuccessor() 方法用来获取后继节点 successor
     *        1、current 为根节点时：this.root = successor;
     *        2、current 为父节点 parent 的左子节点时（isLeftChild = true）：parent.left = successor;
     *        3、current 为父节点 parent 的右子节点时（isRightChild = false）：parent.right = successor;
     *    
     */


    // current 没有子节点
    if (current.left == null && current.right == null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.right == null) { // current 存在一个子节点，且这个子节点为左子节点
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left == null) { // current 存在一个子节点，且这个子节点为右子节点
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else { // current 存在两个子节点
      let successor = this.getSuccessor(current);

      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      // 将后继的左子节点改为被删除节点的左子节点
      successor.left = current.left;
    }
    return true;
  }

  getSuccessor(delNode) {
    //保存找到的后继
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    //循环查找current的右子树节点
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    //判断寻找到的后继节点是否直接就是删除节点的right节点
    if (successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }

  treeDepth() {
    return this.treeDepthNode(this.root);
  }

  treeDepthNode(node) {
    let ld = 0,
      rd = 0;
    if (!node) {
      return 0;
    } else {
      ld = this.treeDepthNode(node.left);
      rd = this.treeDepthNode(node.right);
      return (ld > rd ? ld : rd) + 1;
    }
  }
}