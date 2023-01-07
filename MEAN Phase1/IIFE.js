//function statement

function statement(){
    console.log("function statement");
}

//function expression
var expression = function(){
    var x;
    return "from IIFE"

}()

console.log(expression);
var x



(function(){
    var x;
    function sum(a,b){
        return a + b;
    }

    console.log(sum(1,2));
})();
