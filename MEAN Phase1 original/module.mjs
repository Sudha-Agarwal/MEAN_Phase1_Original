export function hello() {
    return "Hello";
  }

  export function var_scope(times){
    var greeter = "hey hi";
    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    return greeter; // "say Hello instead"
    }

    export function let_scope(times){
        var greeter = "hey hi";
        if (times > 3) {
            let greeter = "say Hello instead"; 
        }
        return greeter; // "say Hello instead"
        }