// const out = document.createElement('div');
// document.body.appendChild(out);
// out.setAttribute('id', 'styleOne');

// out.innerHTML = 'JavaScript';

const condition = false;

const promiseOne = new Promise((resolve, reject) => {
    if (condition == true)
        resolve('promiseOne resolved ...');
    else 
        reject('promiseOne rejected ....');
});

promiseOne
    .then((resolved) => {
        console.log(resolved);
    })
    .catch((rejected) => {
        console.log(rejected);
    });

console.log('promiseOne - then');

async function promiseFunc() {
    try {
        const result = await promiseOne;
        console.log(result);
    } catch {
        console.log('catch : promiseOne rejected .....');
    }
}

promiseFunc();
console.log('promiseOne - async');
console.log('\n');

// ----------------------------------------------------------------------------
const promiseTwo = new Promise((resolve, reject) => {
    if (condition == true)
        resolve('promiseTwo resolved ........');
    else
        reject('promiseTwo rejected .........');
});

const promiseThree = new Promise((resolve, reject) => {
    if (condition == true)
        resolve('promiseThree resolved ......');
    else
        reject('promiseThree rejected .......');
});

Promise.all([promiseTwo, promiseThree])
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log('promise all - ');
        console.log(reject);
    });

Promise.race([promiseTwo, promiseThree])
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log('promise race - ');
        console.log(reject);
    });

console.log('promiseAll - then');
console.log('\n');

// ----------------------------------------------------------------------------
const promiseFour = new Promise((resolve, reject) => {
    if (condition == true) 
        resolve('promiseFour resolved ......');
    else
        reject('promiseFour rejected .......');
});

function promiseFive(arg) {
    return new Promise((resolve, reject) => {
        resolve(arg)
    });
}

async function promiseAction() {
    try {
        const promiseReturn = await promiseFour;
        const promiseResult = await promiseFive(promiseReturn);
        console.log(promiseResult);
    } catch {
        console.log(Error);
    }    
}

promiseAction();
console.log('promiseResult as an argument');
console.log('\n');