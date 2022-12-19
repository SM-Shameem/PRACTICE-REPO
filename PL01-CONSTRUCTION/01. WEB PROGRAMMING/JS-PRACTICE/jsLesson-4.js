// basic javascript ......................................................
console.log('javascript basic ..........');

// static variable and function 
var varOne = 11;
let letOne = true;
const constOne = 'stringOne';
function funcOne() {
    console.log('varOne - ' + varOne);
    console.log('letOne - ' + letOne);
    console.log('constOne - ' + constOne);
}

funcOne();

// dynamic variable and loop
let letTwo = [10, true, 'stringTwo'];
for(var i = 0; i < letTwo.length; i++)
    console.log('letTwo[' + i + '] - ' + letTwo[i]);

// object, class, construction
const constTwo = {
    proOne: 11,
    proTwo: false,
    proThree: 'stringThree',
    method: function() {
        console.log('proOne - ' + this.proOne);
        console.log('proTwo - ' + this.proTwo);
        console.log('proThree - ' + this.proThree);
    }
};

constTwo.method();

// class
class ClassOne {
    proOne = 10;
    proTwo = 20;
    method = function() {
        return this.proOne + this.proTwo;
    };
};

class ClassTwo extends ClassOne {
    method = function() {
        return this.proOne - this.proTwo;
    };
};

const constThree_a = new ClassOne();
const constThree_b = new ClassTwo();
console.log('classOne.method - ' + constThree_a.method());
console.log('classTwo.method - ' + constThree_b.method());

// constructor
const ConstFour = function() {
    this.proOne = 11;
    this.proTwo = 22;
    this.method = function() {
        return this.proOne + this.proTwo;
    };
};

const constFour = new ConstFour();
console.log('constFour.method - ' + constFour.method());
console.log('\n');

// first-class function ..................................................
console.log('first-class function ...........');

function funcTwo(arg, methodOne, methodTwo, methodThree) {
    console.log('value - ' + arg);
    console.log('methodOne - ' + methodOne(111));
    console.log('methodTwo - ' + methodTwo(100));
    console.log('methodThree - ' + methodThree(10));
}

function methodOne(arg) {
    return arg;
}

funcTwo(11, methodOne, (arg) => arg, function(arg) {
    return arg;
});

console.log('\n');

// asynchronous programming ..............................................
console.log('asynchronous programming ...........');

// promise 1 .........................................
const promiseOne = new Promise((response, reject) => {
    response('promiseOne respond');
}).then((res) => {
    console.log(res);
});

console.log('promiseOne ..........');

// promise 2 .........................................
const condition_a = false;
const promiseTwo = new Promise((response, reject) => {
    if (condition_a == true)
        response('promiseTwo respond');
    else
        reject('promiseTwo rejected');
});

promiseTwo
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

console.log('promiseTwo ..........');

// promise 3 .........................................
const condition_b = true;
const promiseThree = new Promise((response, reject) => {
    if(condition_b == true) 
        response('promiseThree respond');
    else
        reject('promiseThree rejected');
});

async function callPromise() {
    try {
        const promiseReturn = await promiseThree;
        console.log(promiseReturn);
    } catch {
        console.log(Error);
    }    
}

callPromise();
console.log('promiseThree ...........');

// promise 4 .........................................
const promiseFour = Promise.resolve('promiseFour respond').then((res) => {
    console.log(res);
});

console.log('promiseFour ............');

// promise 5 .........................................
const promiseFive = Promise.resolve('promiseFive respond');
promiseFive.then((res) => {
    console.log(res);
});

console.log('promiseFive ............');

// promise 6 .........................................
const condition_c = true;
const promiseSix_a = new Promise((resolve, reject) => {
    if(condition_c == true)
        resolve('promiseSix_a resolved');
    else
        reject('promiseSix_a rejected');
});

const promiseSix_b = Promise.resolve('promiseSix_b resolved');

Promise.all([promiseSix_a, promiseSix_b]).then((resolve) => {
    console.log(resolve);
});

Promise.race([promiseSix_a, promiseSix_b]).then((resolve) => {
    console.log(resolve);
});

console.log('promiseSix ..............');

// promise 7 .........................................
const condition_d = true;
const promiseSeven_a = new Promise((resolve, reject) => {
    if (condition_d == true) 
        resolve('promiseSeven_a resolve');
    else
        reject('promiseSeven_a reject');
});

const promiseSeven_b = Promise.resolve('promiseSeven_b resolve');

const promiseSevenAll = Promise.all([promiseSeven_a, promiseSeven_b]);
const promiseSevenRace = Promise.race([promiseSeven_a, promiseSeven_b]);

// promiseSevenAll.then((response) => {
//     console.log(response);
// });

// promiseSevenRace.then((response) => {
//     console.log(response);
// });

async function promiseCall() {
    const promiseAll = await promiseSevenAll;
    const promiseRace = await promiseSevenRace;
    console.log(promiseAll);
    console.log(promiseRace);
}

promiseCall();
console.log('promiseSeven .............');