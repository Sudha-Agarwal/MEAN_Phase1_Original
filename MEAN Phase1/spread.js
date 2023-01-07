let arr1 = [1,2,3,4,5];

let arr2 = [4,5,6];

let arr3 = [... arr1]

//destructuring
let [one,two,...rest] = arr1;
console.log(rest);