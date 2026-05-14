console.log("A");
function sayHello(a, callback) {
  console.log("B");
  let x = 2;

  let p = callback(x + a, a * x) + callback(x * a, a + x);

  console.log("C");
  return p;
}
console.log("E");
function concat(p, q) {
  console.log("D");
  return p + " " + q;
}
console.log("F");

let ans = sayHello(4, concat);
console.log("ans", ans);
