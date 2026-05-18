console.log("A");

function api() {
  return new Promise((res, rej) => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      res("hello");
      console.log("D");
    }, 3000);
  });
}

async function getData() {
  console.log("E");
  const res = await api();
  console.log("F");
  return res;
}
console.log("G");
const out = getData();
console.log(out);
console.log("H");
