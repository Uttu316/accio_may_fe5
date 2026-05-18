function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 3000);
  });
}

async function getData() {
  console.log("Start");
  const res = await api();
  console.log(res);
}

getData();
