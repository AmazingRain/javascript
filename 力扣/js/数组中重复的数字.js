var findRepeatNumber = function (nums) {
  const obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[num[i]]) {
      obj[num[i]] = true;
    } else {
      return num[i];
    }
  }
};