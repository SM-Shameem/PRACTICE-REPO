// const out = document.createElement('div');
// document.body.appendChild(out);
// out.setAttribute('id', 'styleOne');

// out.innerHTML = 'JavaScript';

const condition = true;
const promiseOne = new Promise((resolve, reject) => {
    if (condition == true)
        resolve('request resolved ...');
    else 
        reject('request rejected ....');
});

promiseOne
    .then((resolved) => {
        console.log(resolved);
    })
    .catch((rejected) => {
        console.log(rejected);
    });

console.log('promise - then');

async function promiseFunc() {
    const result = await promiseOne;
    console.log(result);
}

promiseFunc();
console.log('promise - async');