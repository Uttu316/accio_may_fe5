function getUserData(username, onSuccess, onFailure) {
  setTimeout(() => {
    if (username === "abc") {
      const userData = {
        name: "BAC",
        id: 323232,
      };
      onSuccess(userData);
    } else {
      onFailure("Oops");
    }
  }, 3000);
}

function getPost(userId, onSuccess, onFailure) {
  setTimeout(() => {
    if (userId) {
      const post = {
        caption: "Traveling to Manali",
        id: 323232,
      };
      onSuccess(post);
    } else {
      onFailure("Oops");
    }
  }, 3000);
}
function getComment(postId, onSuccess, onFailure) {
  setTimeout(() => {
    if (postId) {
      const comment = {
        comment: "Safe travel",
        id: 6768678,
      };
      onSuccess(comment);
    } else {
      onFailure("Oops");
    }
  }, 3000);
}

console.time("start");
getUserData(
  "abc",
  (user) => {
    console.log(user);
    getPost(
      user.id,
      (post) => {
        console.log(post);
        getComment(
          post.id,
          (comment) => {
            console.log(comment);
            console.timeEnd("start");
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log("Error", err);
  },
);
