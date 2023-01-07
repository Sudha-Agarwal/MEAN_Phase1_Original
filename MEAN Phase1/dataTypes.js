let x = 10;
x = "10";
//let name = "sudha";
let booleanVal = true;

//first way
let emp = {
    empid: 100,
    name:"sudha"
}

//let emp = new Object();

//second way
var emp1 = new Object();
emp1.empid = 100;

//third way
function Emp2(empid,name){
    this.empid = empid;

}

//using array literal
let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

//arr[0]  = undefined;

//index always starts from 0
//console.log(arr[3]);

for(let i = 0; i<arr.length; i++){
    //console.log(arr[i]);
}

arr.forEach(myFunction);

//or 
//anonymous function
arr.forEach(function (value, index, array){
    console.log(value);
});

function myFunction(value, index, array){
    console.log(value);
}
//without arrow and without anonymous
arr.map(mapFunction).forEach(myFunction);
//without arrow with anonymous
arr.map(function(value){return value*2}).forEach(function(value){console.log(value)});
//method chaining using arrow function
arr.map(value => parseInt(value)).forEach(value =>console.log(value));

 function mapFunction(value){
     return value*2;
 }

//array methods
//push, pop, shift, unshift

//console.log(arr);
//delete arr[1];
arr.shift();

//console.log(arr);

//console.log(typeof(arr));

let name = 10.01;
//console.log(typeof(Emp2));






function sum(num1, num2){
   num1();
}

function show(){
    //console.log("show function called");

}
function print(){
    //console.log("print function is called")
}

//num1 = show;
sum(show,2);