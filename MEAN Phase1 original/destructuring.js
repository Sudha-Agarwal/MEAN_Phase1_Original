//Basic Destructuring
const user = { id: 1, username: "john_doe", isAdmin: false };

const { id, username, isAdmin } = user;
console.log(username); // john_doe

//Function Parameter Destructuring
javascript
Copy
Edit
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

const person = { name: "Neha", age: 22 };
greet(person); // Hello Neha, age 22
