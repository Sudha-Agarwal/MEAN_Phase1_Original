//array iteration

//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
let i = "";
let a = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + " ";
  i += index + " ";
  //a += array + " ";

  //console.log(value);
}

//console.log(txt);
//console.log(i);
//console.log(array);

//or
const numbers1 = [45, 4, 9, 16, 25];
//numbers1.forEach(value => console.log(`${value}`));

//console.log(txt);


//const numbers1 = [45, 4, 9, 16, 25];
const numbers2map = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

console.log(numbers2map);
const numbers2 =  [45, 4, 9, 16, 25];
console.log(numbers2.map(result =>result * 2).reverse());
numbers2.map(result =>result * 2).reverse().forEach(result => console.log(result))
//or 
//console.log(numbers2.forEach(result => result * 2).reverse());