// ## querySelector
// ## querySelectorAll
// 1. create element and append or appendChild
// 2. remove element
// 3. set attribute 
// 4. remove attribute 
// 5. classList (add | remove | contains)
// 6. innerHTML | innerText | textContains

// const ul = document.querySelector('ul');
const ul = document.querySelectorAll('ul');
console.log(ul);

const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');
const liFour = document.createElement('li');
console.log(liOne);
console.log(liTwo);
console.log(liThree);
console.log(liFour);

ul[0].appendChild(liOne);
ul[0].appendChild(liTwo);
ul[0].append(liThree);
ul[0].append(liFour);

// ul[1].appendChild(liOne);
// ul[1].appendChild(liTwo);
// ul[1].append(liThree);
// ul[1].append(liFour);

liOne.setAttribute('class', 'list-items');
liTwo.setAttribute('class', 'list-items');
liThree.setAttribute('class', 'list-items');
liFour.setAttribute('id', 'main-heading');

liFour.removeAttribute('id');
const li = document.querySelector('li');
console.log(li.getAttribute('class'));
liFour.classList.add('list-items');
liFour.classList.remove('list-items');
console.log(liFour.classList.contains('list-items'));

liFour.remove();

liOne.innerHTML = 'list-item 01';
liTwo.innerText = 'list-item 02';
liThree.textContent = 'list-item 03';
liFour.textContent = 'list-item 04';

const span = document.createElement('span');
liOne.append(span);
span.innerText = 'new';

// liOne.innerHTML = 'list-item 01';
// liTwo.innerText = 'list-item 02';
// liThree.textContent = 'list-item 03';

console.log(liOne.innerHTML);
console.log(liOne.innerText);
console.log(liOne.textContent);