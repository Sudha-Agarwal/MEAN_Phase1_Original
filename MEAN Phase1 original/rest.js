// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
//["CodeSweetly", "Web Developer", "Male"]


// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
  return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);

// The invocation above will return:
//“Oluwatobi Sofela runs CodeSweetly”

const array1 = [1,2,3];

const[first, ...restOfEl] = array1;

console.log(first, restOfEl);


const person1 = {fName:'ABC', lName:'XYZ', age:30};
const {age, ...restOfElements} = person1;

console.log(age, restOfElements);