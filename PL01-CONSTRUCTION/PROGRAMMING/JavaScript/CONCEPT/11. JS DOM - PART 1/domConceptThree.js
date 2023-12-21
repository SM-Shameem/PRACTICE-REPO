// 1. traverse the DOM
// 2. parent node traversal 
// 3. child node traversal
// 4. sibling node traversal

const ul201 = document.querySelector('ul');

console.log('parent node');
console.log(ul201.parentNode);
console.log(ul201.parentElement);

console.log('traverse parent')
console.log(ul201.parentNode.parentNode);
console.log(ul201.parentElement.parentElement);

console.log('traverse child nodes')
console.log(ul201.childNodes);
console.log(ul201.firstChild);
console.log(ul201.lastChild);

console.log('traverse children')
console.log(ul201.children);
console.log(ul201.firstElementChild);
console.log(ul201.lastElementChild);

console.log('use child node')
// ul201.firstChild.style.color = 'green';
ul201.childNodes[1].style.color = 'red';
// ul201.childNodes[2].style.color = 'red';
// ul201.lastChild.style.color = 'green';

console.log('sibling');
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);


