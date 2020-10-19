var reversePrint = function (head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result.reverse();
};