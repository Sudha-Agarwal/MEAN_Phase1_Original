function myAsyncFunction(name){
    return new Promise(function(resolve, reject){
         if(name == "Sudha"){
              resolve("Here is Sudha")
        }
        else{
             reject("Oops! This is not Sudha")
       }

    })
}


myAsyncFunction("Sudha1")
.then(function(val){
     // Logic after success
     console.log(val)     // output -  ‘Here is Sudha
})
.catch(function(val){
   //Logic after failure
    console.log(val)     // output - ‘Oops! This is not Sudha
})