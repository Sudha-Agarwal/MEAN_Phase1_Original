function myAsyncFunction(name){
    return new Promise(function(resolve, reject){

        if(name == "Sudha"){
            resolve("Promise Resolved");
        }
        else {
            reject("Promise rejected");
        }

    })

}

myAsyncFunction("Sudha1").then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);

})