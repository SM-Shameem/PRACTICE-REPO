// USING WHILE - THREAD WILL BLOCKED TILL COMPLETE THE TASK ///////////////////
const processOrderOne = (customer) => {
    console.log('processing order for customer 1');
    // out.innerHTML += '<br >processing order for customer 1';

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log('order processed for customer 1');
    // out.innerHTML += '<br >order processed for customer 1';
};

console.log('take order for customer 1');
// out.innerHTML += '<br >take order for customer 1';
processOrderOne();
console.log('completed order for customer 1');
console.log('\n');
// out.innerHTML += '<br >completed order for customer 1';

// USING BUILT-IN ASYNCHRONOUS FUNCTION - THREAD WILL NOT BLOCKED /////////////
const processOrderTwo = (customer) => {
    console.log('processing order for customer 2');

    // Built-in Asynchronous Function
    setTimeout(() => {
        console.log('cooking completed - for customer 2');
    }, 3000);
    
    console.log('order processed for customer 2');
};

console.log('take order for customer 2');
processOrderTwo();
console.log('completed order for customer 2');
console.log('\n');

// 1. javascript engine - convert the js-code to machine code inside (call stack)
// 2. javascript engine - the main thread of javascript is (call stack)
// -- all javascript code stored in (call stack) one by one 
// -- first statement is (main()), then one upon one according as script
// -- sequence of execution of (call stack), first in - last out

// 3. Asynchronous Function - (WEB API)
// -- basically handle the (Web API) component of (Browser Engine)
// -- any asynchronous function of JavaScript will pass through 
// -- the (javascript engine) to the (Web API) of (Browser Engine) 
// -- (Browser Engine) is a (Run Time Environment)

// 4. Callback Queue and Event Loop
// -- the (Web API) process the (Asynchronous Function)
// -- after complete the task the (Web API) pass the result to the (Callback Queue)
// -- (queue) is the opposite of (stack), so here, first in - first out
// 5. the (Event Loop) pass the task of (callback queue) to the (call stack)
// -- if (call stack) is empty but (callback queue) has task then (event loop)
// -- start working, here first queue execute first

// NB: 
// -- first program is Synchronous System, 
// -- that can block the browser till finishing the task
// -- second program is Asynchronous System,
// -- it will not block the browser 
// though javascript is single threaded language but it has some 
// -- assistants in Run-Time Environment like (Web API and Callback Queue)
// -- and any (asynchronous task) are handled by this assistants 
// -- so the main thread (call stack) of javascript get free to do 
// -- other task, and in this way javascript can perform multiple 
// -- task like multiple threaded language  

// synchronous function definitions 
const takeOrder = (customer, callback) => {
    console.log('take order for ' + customer);
    callback(customer);
};

// asynchronous function definition
const processOrder = (customer, callback) => {
    console.log('processing order for ' + customer);

    setTimeout(() => {
        console.log('cooking completed - for ' + customer);
        console.log('order processed for ' + customer);
        callback(customer);
    }, 3000);
};

// synchronous function definition
const completeOrder = (customer) => {
    console.log('completed order for ' + customer);
};

// call functions - callback can create callback hell
takeOrder("customer 3", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

console.log('next after - asynchronous function')