var firstUniqChar = function (s) {
  if (s.length === 0) {
    return ' ';
  }
  let obj = {};
  for (var i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] = obj[s[i]] + 1;
    }
  }
  for (var item in obj) {
    if (obj[item] == 1) {
      return item;
    }
  }
  return ' ';
};