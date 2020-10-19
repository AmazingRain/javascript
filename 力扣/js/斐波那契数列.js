var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  let a = 1, b = 1, c = 0;
  for (let i = 0; i < n; i++) {
    a = b;
    b = c;
    c = (a + b) % 1000000007;
  }
  return c;
};