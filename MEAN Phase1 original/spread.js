const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);


const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//Check the result object in the console:
console.log(myUpdatedVehicle);

let arr = [1,2,3,4];

console.log(Math.min(...arr));

// 1. Spread in Arrays
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; 
console.log(moreNums); // [1, 2, 3, 4, 5]

// 2. Spread in Objects
const user = { name: "Alice", age: 25 };
const newUser = { ...user, city: "Delhi" };
console.log(newUser); // { name: "Alice", age: 25, city: "Delhi" }

// 3. Spread in Function Calls
function add(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];
console.log(add(...numbers)); // 60


const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 }
];

// Create a new array with updated age for user with id = 2
const updatedUsers = users.map(user =>
  user.id === 2
    ? { ...user, age: 35 }  // spread the object and update age
    : user                  // keep other users unchanged
);

console.log(updatedUsers);
/*
[
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 35 },
  { id: 3, name: "Charlie", age: 28 }
]
