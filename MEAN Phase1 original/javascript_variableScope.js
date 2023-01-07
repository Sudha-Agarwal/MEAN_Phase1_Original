//https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

function var_scope(times){
var greeter = "hey hi";
if (times > 3) {
    var greeter = "say Hello instead"; 
}
console.log(greeter) // "say Hello instead"
}

var_scope(3);