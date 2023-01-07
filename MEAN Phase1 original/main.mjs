import { hello, var_scope, let_scope } from './module.mjs';
let val = hello();  // val is "Hello";

console.log(val)

let greeter = var_scope(3);
console.log(greeter);

let greeter1 = let_scope(4);
console.log(greeter1);