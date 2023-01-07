
// var x = 10;
// var y = 20;
// var z= 30;

// x == y // true or false

// if(x==y || z!=30){
//     alert("equal");
// }

// function sum(num1, num2){
//     var num3 = num1 + num2;

//     return num3;

// }

// var result = sum(2,3);

// var sudha = {
//     fname:"Sudha",
//     lname:"Agarwal",
//     age:30,
//     address:"Delhi",
//     mobile1:6767676877,
//     mobile2:6565565656
// }

// sudha.fname;

// var abc = {
//     fname:"abc",
//     lname:"qwerty",
//     age:50,

// }

// function Person(fname, lname, age,address,mobile1, mobile2){
//     //var person = {};

//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     //return person;
// }

// var Sudha = new Person("Sudha", "Agarwal", 30, "Delhi", 8989898989, 23232323232);
// Sudha.fname;


//introdcued in ES6
class Person{

    constructor(fname, lname, age,address,mobile1, mobile2){
        this.fname = fname;
        this.lname = lname;
        this.age = age;

    }

    show(){
        //console.log(this.fname + "  " + this.lname)
        console.log(`${this.fname}  ${this.lname}`)
    }
}

var Sudha = new Person("Sudha", "Agarwal", 30, "Delhi", 8989898989, 23232323232);
Sudha.fname;


class Employee extends Person{
    constructor(fname, lname, age,address,mobile1, mobile2,empId, Dept){
        super(fname, lname, age,address,mobile1, mobile2);
        this.empId = empId;
        this.Dept = Dept;
    }

    print(){
        super.show();
        console.log(`${this.empId} ${this.Dept}`);

    }

}

var empSudha = new Employee("Sudha", "Agarwal", 30, "Delhi", 8989898989, 23232323232,001, "IT");
empSudha.print();


function var_scope(times){
    var message = "Hello World";   
    const x = 10;
   

    if(times==3){
        message = "hi instead";
    }
    console.log(message);

}

var_scope(3);


