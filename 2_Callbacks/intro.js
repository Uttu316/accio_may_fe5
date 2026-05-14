function print(v) {
  console.log(v);
}

function sum(a, b, callback) {
  let o = a + b;
  callback(o);
}
function mul(a, b, callback) {
  let o = a * b;
  callback(o);
}
sum(2, 3, print);
mul(2, 3, print);
