var minArray = function (numbers) {
  var temp = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (temp > numbers[i]) {
      temp = numbers[i];
      break;
    }
  }
  return temp;
};