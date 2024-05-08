const condition = false;
const promise_a = new Promise((resolve, reject) => {
    if (condition == true) 
        resolve('promise_a is resolved ...');
    else
        reject('promise a is rejected ....');
})

promise_a
.then((promiseReturn) => {
    console.log(promiseReturn);
}).catch((promiseReturn) => {
    console.log(promiseReturn);
});

async function promiseCall_a() {
    try {
        const promiseReturn_b = await promise_a;
        console.log(promiseReturn_b);
    } catch {
        console.log('promise_a : rejected ....');
    }    
}

// async function promiseCall_b() {
//     const promiseReturn_a = await promise_a;
//     console.log(promiseReturn_a);
// }

promiseCall_a();
// promiseCall_b();

console.log('promise_a .........');
console.log('\n');

