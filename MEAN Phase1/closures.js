//var newval = "new value";

function greeting(value){
     let newval = "new value";
     newval = "modified";

     var balance;
        
     
     return{
        print: function (){        
        console.log("print called with value "  + newval)
    },
    withdraw: function(){
        balance--;
    },
    deposit: function(){
        balance++;
    }
     }
    //print();
    
}

//console.log(newval);
var result = greeting("argument");
result.deposit();
result.withdraw();

    