function first(callback1){
    setTimeout(() =>{
        console.log(1);
        callback1();
    },
    5000);

    //code to get data from DB
    //console.log("after setTimeOut");
}

function second(){
    console.log(2)
}

//first(second);//function passed as an argument



//output? 1 2 or 2 1


//function assigned to a variable
const getTodo = (callback) =>{
    setTimeout(() =>
        //json data - format of data interchange
        //json - Java Script Object Notation 
        
        //server code
        callback({text: "data from server"})
    , 2000);
}
// function print(data){
//     console.log(data.text);
// }
//getTodo(print);

//anonymous function - functions not having any name
getTodo(data => console.log(data.text));
//console.log(data.text);

