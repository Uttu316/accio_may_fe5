const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ("A" < "B") {
      resolve("Hello");
    } else {
      reject("Bye");
    }
  }, 3000);
});
p.then((v) => {
  console.log(v);
  return v + "A"; // resolved value
  //throw "A" // rejected value
})
  .then((v) => {
    console.log(v);
    throw v + "B";
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("Done");
  });
