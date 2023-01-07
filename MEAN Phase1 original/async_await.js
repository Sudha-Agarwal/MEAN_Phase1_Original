
//https://www.programiz.com/javascript/async-await

//https://www.javascripttutorial.net/es-next/javascript-async-await/
// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});



//without arrow
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();
//with arrow
let promise1 = new Promise((resolve, reject) =>
    setTimeout( () => resolve('Promise resolved'), 4000)
);

// async function
async function asyncFunc1() {

    // wait until the promise resolves 
    let result =  await promise1; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc1();