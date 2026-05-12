const array = ["A", "B", "C", "D", "E"];

Array.prototype.myIncludes = function (value) {
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === value.toLowerCase()) {
      return true;
    }
  }
  return false;
};

const isPresent = array.includes("c");

const isExists = array.myIncludes("c");

console.log(isPresent, isExists);
