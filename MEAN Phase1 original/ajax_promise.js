const myPromiseObj = new Promise(function(resolve, reject){
    resolve("I am resolved");
    reject("I m rejected");
})

const consumer1 = function(){
myPromiseObj.then(function(message){
   console.log(message);
})
.catch(function(message){
    console.log(message)
})

};

//consumer1();


function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
 const BAD_URL = 'https://pokeapi.co/api/v2/pokemon-bad/';

// We have discussed this function already!
let promise = getPromise(BAD_URL);

const consumer = () => {
    promise.then(
        (result) => {
            document.getElementById("demo").innerHTML = result;
            console.log(result); // Log the result of 50 Pokemons
        }).catch(function(error) {
           
            // As the URL is a valid one, this will not be called.
            document.getElementById("demo").innerHTML = error;
            console.log(error);
            console.log('We have encountered an Error!'); // Log an error
   
        })
}


consumer();