function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("hello");
    }, 3000);
  });
}

async function getData() {
  try {
    const user = await api("user");

    const post = await api("post", user);

    const comment = await api("comment", post);
  } catch (e) {
    console.log("Error", e);
  }
}

getData();
