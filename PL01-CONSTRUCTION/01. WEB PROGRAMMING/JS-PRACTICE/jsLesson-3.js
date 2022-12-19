const condition = false;
const condition_2 = true;
const promise_ab = new Promise((resolve, reject) => {
    if (condition == true) 
        resolve(1);
    else
        reject(0);
})
// .then((promiseReturn) => {
//     console.log(promiseReturn);
// }).catch((promiseReturn) => {
//     console.log(promiseReturn);
// });

// promise_ab
//     .then((promiseReturn) => {
//         console.log(promiseReturn);
//     }).catch((promiseReturn) => {
//         console.log(promiseReturn);
//     });

function promiseFunc(promiseArg) {
    return new Promise((resolve, reject) => {
        if (promiseArg == true)
            resolve('promise_ab - func is resolved ...');
        else 
            reject('promise_ab - func is rejected ....');
    });
}

async function promiseCall() {
    try {
        const promiseAction = await promise_ab;
        const promiseResult = await promiseFunc(promiseAction);
        console.log(promiseResult);
    } catch {
        console.log(Error);
    }    
}

promiseCall();
console.log('promise_ab func start .........');

try {
    if (condition_2 == true) {
        console.log('try solved ........');
    }
} catch {
    console.log(Error);
}