//primitive


//non-primitive
//objects
// There are 3 ways to create objects.

// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword)

emp = {
    id:001,
    name:"abc",
    sal:1000
}

var emp2 = new Object();
emp2.id = 001;
emp2.name = "ABC";
emp2.sal = 10000;


function Emp1(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new Emp1(103,"Vimal Jaiswal",30000);  



//array
var arr1= [1, 2, 3];

arr1[0] =4;
console.log(arr1) // This will return the array [4, 2, 3]
typeof (arr1) // will return the data type ‘object’.
//typeof
const name = 'ram';
typeof(name); // returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

const a = null;
typeof(a); // returns "object"

function a1(){}

console.log(typeof(a1));

