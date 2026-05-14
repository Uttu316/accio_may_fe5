console.log("A");

function getUserData(username) {
  console.log("B");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "abc") {
        resolve("Saketh");
      } else {
        reject("Rao");
      }
      console.log("D");
    }, 3000);
    console.log("E");
  });
}

getUserData("abc")
  .then((v) => {
    console.log(v);
    return v + "A";
  })
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
    throw v + "B";
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("C");
