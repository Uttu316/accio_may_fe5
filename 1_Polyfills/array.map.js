//step1 : create a mymap function which takes a callback as parameter
//step2 : create an output array in mymap
//step3:  access the current array
//step4: loop the current array
//step5: call the callback on every iteration
//step6: pass current item, index, current array in callback as arguments
//step7: store the return value of callback in an output array
//step8: after the loop return the output array

const array = ["A", "B", "C", "D", "E"];

if (!Array.prototype.mymap) {
  Array.prototype.mymap = function (callback) {
    let arr = this;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      let res = callback(arr[i], i, arr);
      output.push(res);
    }
    return output;
  };
}

let x = array.mymap((item, index, currArray) => {
  console.log(item, index, currArray);
  return item + index;
});
console.log(x);
