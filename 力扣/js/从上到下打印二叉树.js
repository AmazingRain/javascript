/**
 * I
 */
var levelOrder1 = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root],
    result = [];

  while(queue.length !== 0) {
    let front = queue.shift();
    result.push(front.val);
    if (front.left) {
      queue.push(front.left);
    }
    if (front.right) {
      queue.push(front.right);
    }
  }
  return result;
};

/***
 * II
 */

var levelOrder2 = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root],
    result = [],
    level = 0;

  while (queue.length !== 0) {
    result[level] = [];
    let levelNum = queue.length;
    while (levelNum --) {
      const front = queue.shift();
      result[level].push(front.val);
      if (front.left) {
        queue.push(front.left);
      }
      if (front.right) {
        queue.push(front.right);
      }
    }
    level++;
  }

  return result;
};

/**
 * III
 */


var levelOrder3 = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root],
    result = [],
    level = 0;

  while (queue.length !== 0) {
    result[level] = [];
    let levelNum = queue.length;
    while (levelNum--) {
      const front = queue.shift();
      result[level].push(front.val);

      if (front.left) {
        queue.push(front.left);
      }
      if (front.right) {
        queue.push(front.right);
      }
    }
    if (level % 2 === 1) {
      result[level].reverse();
    }
    level++;
  }
  return result;
};