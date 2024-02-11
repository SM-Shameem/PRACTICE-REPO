// DOM Manipulation 
const titleOne = document.querySelector('#main-heading');
console.log(titleOne);

const titleOne_1 = document.querySelectorAll('#main-heading');
console.log(titleOne_1);

const titleOne_2 = document.querySelectorAll('.list-items');
console.log(titleOne_2);

// let codeOne = 1, codeTwo = 8;
// let colorCode;
let colorCode = [248, 284, 428, 482, 824, 842, 369, 396, 639, 693];

for (let x = 0; x < titleOne_2.length; x++) {
    // codeOne += 1;
    // codeTwo -= 1;
    // colorCode = '#2' + codeOne + codeTwo;
    // titleOne_2[x].style.backgroundColor = colorCode;
    titleOne_2[x].style.backgroundColor = ('#' + colorCode[x]);
}

// GetElementById
const titleTwo = document.getElementById('main-heading');
console.log(titleTwo);

// GetElementByClassName
const listItemOne = document.getElementsByClassName('list-items');
console.log(listItemOne);

// GetElementByTagName
const listItemTwo = document.getElementsByTagName('li');
console.log(listItemTwo);

// querySelector
const containerOne = document.querySelector('div');
console.log(containerOne);

// querySelectorAll
const containerTwo = document.querySelectorAll('div');
console.log(containerTwo);