const p = new Promise((resolve, reject) => {
  //sync function
  const value = parseInt(prompt("Enter a number"));
  setTimeout(() => {
    if (value % 2 === 0) {
      resolve("even");
    } else {
      reject("odd");
    }
  }, 3000);
});

p.finally(() => {
  console.log("done");
})
  .then((output) => {
    console.log(output);
  })
  .catch((err) => {
    console.log("Error", err);
  });
