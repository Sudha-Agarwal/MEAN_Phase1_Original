//In JavaScript, a constructor function is used to create objects.

//Technically speaking, a constructor function is a regular function with the following convention:

//The name of a constructor function starts with a capital letter like Person, Document, etc.
//A constructor function should be called only with the new operator.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  
  let person = new Person("ABC", "XYZ", 20, "green");
  
  //object creation
  //one way
  let animal = {};
  
  animal.name = "Tiger";
  animal.sound = "Roar";
  
  animal.eat = function(){
      console.log(`${this.name} is eating`);
  }
  
  animal.eat();
  
  //second way
  let Tiger = {
      name:"Tiger",
      sound:"Roar",
      eat:function(){
          console.log(`${this.name} is eating`);
      }    
  }
  
  Tiger.eat();
  
  let Pig = {
      name:"Tiger",
      sound:"Grunt",
      eat:function(){
          console.log(`${this.name} is eating`);
      }    
  }
  
  
  //functional instantiation
  function Animal(){
      let animal = {};
  
      animal.name = "Tiger";
      animal.sound = "Roar";
  
      animal.eat = function(){
            console.log(`${this.name} is eating`);
      }
      return animal;
  
  }
  
  const tiger = Animal();
  tiger.eat();
  
  function Animal1(name, sound){
      this.name = name;
      this.sound = sound;
  
      this.eat = function(){
            console.log(`${this.name} is eating`);
      }
  
  }
  
  const Tiger1 = new Animal1("Tiger", "Roar");
  
  Tiger1.eat();