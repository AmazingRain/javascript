var mirrorTree = function (root) {

  // 递归
  // if (!root) {
  //   return root;
  // }
  // let temp = root.left;
  // root.left = root.right;
  // root.right = temp;
  // mirrorTree(root.left);
  // mirrorTree(root.right);
  // return root;


  // 非递归
  if (!root) {
    return root;
  }
  const stack = [root];
  while (stack.length !== 0) {
    let node = stack.pop();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return root;
};
