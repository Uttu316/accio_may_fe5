console.log("A");

const p = new Promise((res, rej) => {
  console.log("B");
  setTimeout(() => {
    console.log("C");
    if (2 > 4) {
      res("Yes");
    } else {
      rej("No");
    }
    console.log("D");
  }, 3000);
  console.log("E");
});
console.log("F");

p.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log("Error", e);
});
console.log("G");
