document.querySelector('#sports').addEventListener('click', function(arg) {
    console.log(arg.target.getAttribute('id'));
    if(arg.target.matches('li'))
        arg.target.style.color = 'black';
});

document.querySelector('#football').addEventListener('click', function(arg) {
    console.log('clicked football');
    if(arg.target.matches('li')) 
        arg.target.style.background = '#DDD';
});

document.querySelector('#basketball').addEventListener('click', function(arg) {
    console.log('clicked basketball');
    if(arg.target.matches('li')) 
        arg.target.style.background = '#DDD';
});

document.querySelector('#boxing').addEventListener('click', function(arg) {
    console.log('clicked boxing');
    if(arg.target.matches('li')) 
        arg.target.style.background = '#DDD';
});

document.querySelector('#tennis').addEventListener('click', function(arg) {
    console.log('clicked tennis');
    if(arg.target.matches('li')) 
        arg.target.style.background = '#DDD';
});

document.querySelector('#golf').addEventListener('click', function(arg) {
    console.log('clicked golf');
    if(arg.target.matches('li')) 
        arg.target.style.background = '#DDD';
});

const sports = document.querySelector('#sports');
const newSports = document.createElement('li');
newSports.setAttribute('id', 'rugby');
newSports.innerText = 'rugby';
sports.appendChild(newSports);