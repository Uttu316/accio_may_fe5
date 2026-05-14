console.log("A");

setTimeout(() => {
  console.log("B");
}, 3000);

setTimeout(() => {
  console.log("C");
}, 2000);

setTimeout(() => {
  console.log("D");
}, 1000);
setTimeout(() => {
  console.log("E");
}, 0);
setTimeout(() => {
  console.log("F");
});
console.log("G");
