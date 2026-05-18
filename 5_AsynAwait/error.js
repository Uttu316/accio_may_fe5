console.log("A");

function api() {
  return new Promise((res, rej) => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      rej("hello");
      console.log("D");
    }, 3000);
  });
}

async function getData() {
  try {
    console.log("E");
    const res = await api();
    console.log("F");
    return res;
  } catch (e) {
    console.log("Error", e);
  }
}
console.log("G");
const out = getData();
console.log("H");
