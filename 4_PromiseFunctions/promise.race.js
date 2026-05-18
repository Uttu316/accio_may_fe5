const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); // 3sec resolve A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 2500);
}); // 2.5sec resolve B

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("C");
  }, 1000);
}); // 1sec reject C

const p = Promise.race([p1, p2, p3]);

p.then((values) => {
  console.log(values);
}).catch((err) => {
  console.log("Error", err);
});
