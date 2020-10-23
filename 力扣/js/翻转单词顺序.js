var reverseWords = function(s) {
  const strArr = s.trim().split(' ');
  const resultArr = [];
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] != '') {
      resultArr.unshift(strArr[i]);
    }
  }
  return resultArr.join(' ');
};