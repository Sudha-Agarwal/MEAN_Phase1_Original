let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved")
    }, 2000)
})


async function f(){
    try{
    let result = await Promise.reject(("invalid"));
    }
    catch(error){
        console.log(error);
    }
   // console.log(result);    
    
}

f();

