console.log("A");
function getUserData(username, onSuccess, onFailure) {
  console.log("B");
  setTimeout(() => {
    console.log("C");
    if (username === "abc") {
      onSuccess({
        name: "BAC",
        id: "112121",
      });
    } else {
      onFailure("oops");
    }
    console.log("D");
  }, 3000);
  console.log("E");
}
getUserData(
  "abc",
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log("Error", err);
  },
);
console.log("F");
