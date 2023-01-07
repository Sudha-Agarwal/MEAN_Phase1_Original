

function Person(name,age){
    let person = {};

    this.name = name;
    this.age = age;

    this.eat = function(){
        console.log(`${this.name} is eating`);
    }
    //return person;
}

const person1 = new Person("Sudha",30);

const person2 = new Person("Sudha1",35);
person1.eat();
person2.eat();

