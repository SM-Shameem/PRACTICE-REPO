// ==== single promise with (then-catch and async-await) ======================
const condition = true;

const promiseOne = new Promise((resolve, reject) => {
    if(condition == true) 
        resolve('statement resolved ...');
    else
        reject('statement rejected ...');
});

promiseOne
    .then((resolved) => {
        console.log(resolved);
    })
    .catch((error) => {
        console.log(error);
    });

async function promiseFunc() {
    const promiseReturn = await promiseOne;
    console.log(promiseReturn);
}

promiseFunc();

// ==== multiple promise with (then-catch and async-await) ====================
