// window.addEventListener('click', function() {
//     console.log('window');
// }, true);

// document.addEventListener('click', function() {
//     console.log('document');
// }, true);

// document.querySelector('.div-2').addEventListener('click', function(arg) {
//     arg.stopPropagation();
//     console.log('Div 2');
// }, true);

// document.querySelector('.div-1').addEventListener('click', function() {
//     console.log('Div 1');
// }, true);

// document.querySelector('#btn').addEventListener('click', function(arg) {
//     console.log(arg.target.innerHTML = 'Submit');
// }, true);

// ------------------------------

window.addEventListener('click', function() {
    console.log('window');
}, false);

document.addEventListener('click', function() {
    console.log('document');
}, false);

document.querySelector('.div-2').addEventListener('click', function(arg) {
    // arg.stopPropagation();
    console.log('Div 2');
}, {once: true});

document.querySelector('.div-1').addEventListener('click', function(arg) {
    console.log('Div 1 - ' + arg);
}, false);

// document.querySelector('#btn').addEventListener('click', function(arg) {
//     console.log(arg.target.innerHTML = 'Submit');
// }, false);

document.querySelector('.hLink').addEventListener('click', function(arg) {
    // arg.preventDefault();
    arg.target.innerHTML = 'Submit';
    console.log(arg);
}, false);