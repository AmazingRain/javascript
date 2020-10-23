var reverseLeftWords = function (s, n) {
  const temp1Arr = [];
  const temp2Arr = [];
  const sArr = s.split('');
  for (var i = 0; i < sArr.length; i++) {
    if (i < n) {
      temp1Arr.push(sArr[i]);
    } else {
      temp2Arr.push(sArr[i]);
    }
  }
  const result = temp2Arr.concat(temp1Arr);
  return result.join('');
};