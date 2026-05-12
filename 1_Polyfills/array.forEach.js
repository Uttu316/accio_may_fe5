const array = ["A", "B", "C", "D", "E"];

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  };
}

array.forEach((item, index, currArray) => {
  console.log(item, index, currArray);
});
