const numbers = new Map([
    ["one",1],
    ["two",2],
    ["three",3]
]);

console.log(numbers.get("three"));

numbers.set("three", 4);

console.log(numbers.get("three"));

