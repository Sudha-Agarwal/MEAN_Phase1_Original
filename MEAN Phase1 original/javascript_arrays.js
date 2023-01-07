//The JavaScript method toString() converts an array to a 
//string of (comma separated) array values.

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.toString();

//The pop() method removes the last element from an array:
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

//The push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

//The shift() method removes the first array element and "shifts" 
//all other elements to a lower index.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//The unshift() method adds a new element to an array (at the beginning), 
//and "unshifts" older elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

