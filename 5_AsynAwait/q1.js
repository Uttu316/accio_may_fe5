console.log("A");
async function getData(x, y) {
  console.log("B");

  let o = x + y;
  return o;
}
console.log("C");

getData(2, 3)
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("D");
