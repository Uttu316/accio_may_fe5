// async keyword return promise object
async function getData() {
  return "A"; // return resolved promise with value A
  // throw "B" // rejected promise with reason B
}

const p = getData();

p.then((v) => {
  console.log(v);
}).catch((err) => {
  console.log("Error", err);
});
