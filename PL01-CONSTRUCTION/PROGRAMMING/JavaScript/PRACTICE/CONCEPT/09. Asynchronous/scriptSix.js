// --> javascript is a (single threaded) language 
// --> for (synchronous) system, javascript acts like multi threated language

// 01. synchronous and asynchronous function and programming 
// 02. asynchronous (Promise) is a callback function 
// --> it has to arguments (resolve and reject)
// --> here, (resolve and reject) are two functions
// --> second part of promise has two function (then and catch)
// --> if (Promise) return (resolve) then the (then) works on it
// --> if (Promise) return (reject) then the (catch) works on it

// 03. to works with multiple (Promise) at a time, can use (all or race) 
// 04. we can use one (Promise) return to another (Promise or Function) also
// --> then can get the return (inside then or catch) statement 

// 05. the (async function with await) can use instate of (then) 
// --> and to catch (reject) can use (try .. catch)

// example 1 : synchronous -----------------------------------------
const processJob_1 = function() {
    console.log('start processing');
    let currentDate = new Date().getTime();
    while (currentDate + 3000 >= new Date().getTime());
    console.log('end processing');
}

console.log('calling for job - 1');
processJob_1();
console.log('delivering job - 1');
console.log('\n');

// example 2 : asynchronous ----------------------------------------
// here, (setTimeout) is a built-in (asynchronous) method
const processJob_2 = function() {
    console.log('start processing');
    setTimeout(() => {
        console.log('end processing');
    }, 3000);
}

console.log('calling for job - 2');
processJob_2();
console.log('delivering job - 2');
console.log('\n');

// example 3 : asynchronous with callback -------------------------
// here, (setTimeout) is a built-in (asynchronous) method
// functions are calling in the process of (callback) system
// - which is possible for (first-class) function 
// - here, 2nd (argument) of calling function is also a function
// - and 2nd (parameter) of called function used as a function-name
const processJob = function(job, callback) {
    console.log('start processing - ' + job);
    setTimeout(() => {
        console.log('end processing - ' + job);
        callback(job);
    }, 3000);
}

const orderJob = function(job, callback) {
    console.log('calling for job - ' + job);
    callback(job);
}

const deliverJob = function(job) {
    console.log('delivering job - ' + job);
}

orderJob(3, (job) => {
    processJob(job, (job) => {
        deliverJob(job);
    });
});

console.log('next statement - before finishing job');