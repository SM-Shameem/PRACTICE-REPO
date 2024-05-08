let out = (arg = '\n') => console.log(arg);
// # BUILT-IN : OBJECT | METHODS | PROPERTIES 
// # PROTOTYPES | CONSTRUCTOR



// const object = { a: 11, b: 22, c: 33 };
// for(const property in object) 
//     out(property + ' : ' + object[property]);

// object.d = 44;
// object.e = 55;
// for(const property in object) 
//     out(property + ' : ' + object[property]);

// // ----------------------------------------------------
// const array = [10, 20, 30];
// for(const index in array) 
//     out(index + ' : ' + array[index]);

// array[3] = 40;
// array[array.length] = 50;
// array.push(60);
// for(const index in array) 
//     out(index + ' : ' + array[index]);

// const arrayConst = new Array(100, 200, 300);
// for(const index in arrayConst) 
//     out(index + ' : ' + arrayConst[index]);

// arrayConst[3] = 400;
// arrayConst[arrayConst.length] = 500;
// arrayConst[arrayConst.length] = 600;
// arrayConst.push(700);
// for(const index in arrayConst) 
//     out(index + ' : ' + arrayConst[index]);

// // ----------------------------------------------------
// let string = 'string';
// for(const index in string)
//     out(index + ' : ' + string[index]);

// // string = 'add';
// string += 'add';
// // string[6] = 'a';
// // string[string.length] = 'd';
// // string.push('d');
// for(const index in string) 
//     out(index + ' : ' + string[index]);

// // ----------------------------------------------------
// const objectInst = new Object({ a: 1, b: 2, c: 3 });
// const arrayInst = new Array( 1, 2, 3 );

// for(const property in objectInst)
//     out(property + ' : ' + objectInst[property]);
// for(var index in arrayInst)
//     out(index + ' : ' + arrayInst[index]);

// out('objectInst : ' + Object.getOwnPropertyNames(objectInst));
// out('arrayInst : ' + Object.getOwnPropertyNames(arrayInst));

// for(const property in objectInst)
//     out('objectInst : ' + property);
// for(const index in arrayInst)
//     out('arrayInst : ' + index);

// // ----------------------------------------------------
// const triangle = { a: 1, b: 2, c: 3 };
// const coloredTriangle = function () {
//     this.color = 'red';
// };

// coloredTriangle.prototype = triangle;
// coloredTriangle.prototype.colorTwo = 'yellow';
// const instance = new coloredTriangle();
// instance.colorThree = 'green';

// for(const property in instance) {
//     if(Object.hasOwn(instance, property))
//         out(`own - instance.${property} = ${instance[property]}`);

//     out(`inherited - instance.${property} = ${instance[property]}`);
// }

// // ----------------------------------------------------
// const obj = { a: 1, b: 2 };
// for(const property in obj) { 
//     out(property + ' = ' + obj[property]);
//     obj.c = 3;
// }

// const proto = { a: 11, b: 22 };
// const objTwo = { __proto__: proto, a: 10, c: 30 };
// for(const property in objTwo) 
//     out('1st - ' + property + ' = ' + objTwo[property]);

// Object.defineProperty(objTwo, 'a', { enumerable: false });
// // Object.defineProperty(objTwo, '__proto__', { enumerablee: false });
// for(const property in objTwo) 
//     out('2nd - '     + property + ' = ' + objTwo[property]);

//     Object.defineProperty(objTwo, 'a', { enumerable: false });
// Object.defineProperty(proto, 'a', { enumerable: true });
// for(const property in objTwo) 
//     out('3rd - '     + property + ' = ' + objTwo[property]);