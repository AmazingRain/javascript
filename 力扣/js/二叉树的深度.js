var maxDepth = function (root) {
  let lh = 0,
    rh = 0;

  if(!root) {
    return 0;
  }
  lh = maxDepth(root.left);
  rh = maxDepth(root.right);
  return lh > rh ? lh + 1 : rh + 1;
};