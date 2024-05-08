let out = (arg = '\n') => console.log(arg);
// 1. literal 
// 2. number | boolean | string 
// 3. null | undefine | empty 
// 4. array | typed-array | object | object-constructor
// 5. class | class-inheritance 
// 6. set | map | collection
// 6. typeof operator | boolean types
// 7. type conversion 
// 8. iterator
// 9. arguments | reference



// ----------------------------------------------------------------------------
out('array | string | map | set | generator ................................');

// const array = [1, 2, 3, 4, 5];
// const string = 'string';
const array = new Array([1, 2, 3, 4, 5]);
const string = new String('string');

const map = new Map([['1', 10], ['2', 20], [3, 30], [4, '40']]);
const set = new Set([11, '22', true]);
map.set(true, false);
set.add(map);

function func() {
    return 1;
}

function* generator () {
    yield 1;
    yield 2;
    yield 3; 
    yield 4;
    yield 5;
}

const iteratorOne = {
    [Symbol.iterator]() {
        let count = 0;
        return {
            next: function() {
                if(count < 5) return { value: count++, done: false };
                else { done: true };
            }
        };
    }
};

const iteratorTwo = {
    [Symbol.iterator]: function() {
        let array = [11, 22, 33, 44];
        let index = 0;
        return {
            next: function() {
                if(index < array.length)
                    return { value: array[index++], done: false };
                else return { done: true };
            }
        };
    }
};

const iteratorThree = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if(index < this.data.length) // arrow function required 
                    return { value: this.data[index++], done: false };
                else return { done: true };
            }
        };
    }
};

// const generatorIterator = new generator();
const generatorIterator = generator();
const nextValueOne = iteratorOne[Symbol.iterator]();
const nextValueTwo = iteratorTwo[Symbol.iterator]();
const nextValueThree = iteratorThree[Symbol.iterator]();

// ----------------------------------------------------------------------------
out('array - ' + array);
out('string - ' + string);
out('array[0] - ' + array[0]);
out('string[0] - ' + string[0]);

out('map - ' + map.get('1'));
out('map - ' + map.get(3));
out('map - ' + map.get(30));
out('map - ' + map.has('2'));
out('map - ' + map.has(20));
out('map - ' + map.delete(4));
out('map - ' + map.delete('40'));

out('set - ' + set.keys(22));
out('set - ' + set.keys(true));
out('set - ' + set.has(11));
out('set - ' + set.has('22'));
out('set - ' + set.delete(true));

out('function - ' + func());

out('generator - ' + generatorIterator.next().value);
out('generator - ' + generatorIterator.next().value);
out('generator - ' + generator());
out('generator - ' + generatorIterator);

out('iteratorOne - ' + nextValueOne.next().value);
out('iteratorOne - ' + nextValueOne.next().value);
out('iteratorOne - ' + nextValueOne.next().value);
out('iteratorTwo - ' + nextValueTwo.next().value);
out('iteratorTwo - ' + nextValueTwo.next().value);
out('iteratorTwo - ' + nextValueTwo.next().value);
out('iteratorThree - ' + nextValueThree.next().value);
out('iteratorThree - ' + nextValueThree.next().value);
out('iteratorThree - ' + nextValueThree.next().value);

// ----------------------------------------------------------------------------
const global = 11;
const iterator = {
    property: 111,
    method: function(arg) {
        let local = 100;
        return { 
            innerOne: () => { return { value: global }; },
            innerTwo: () => { return { value: this.property }; },
            innerThree: () => { return { value: arguments[0] }; },
            innerFour: () => { return { value: arg }; },
            innerFive: () => { return { value: local }; },
            innerSix: function() { return { value: global }; },
            innerSeven: function() { return { value: this.property }; },
            innerEight: function() { return { value: arguments[0] }; },
            innerNine: function() { return { value: local }; },
            innerTen: function() { return { value: arg }; },
            
        };
    }
};

out('iterator-innerOne -> ' + iterator.method(10).innerOne().value);
out('iterator-innerTwo -> ' + iterator.method(10).innerTwo().value);
out('iterator-innerThree -> ' + iterator.method(10).innerThree().value);
out('iterator-innerFour -> ' + iterator.method(10).innerFour().value);
out('iterator-innerFive -> ' + iterator.method(10).innerFive().value);
out('iterator-innerSix -> ' + iterator.method(10).innerSix().value);
out('iterator-innerSeven -> ' + iterator.method(10).innerSeven().value);
out('iterator-innerEight -> ' + iterator.method(10).innerEight().value);
out('iterator-innerNine -> ' + iterator.method(10).innerNine().value);
out('iterator-innerTen -> ' + iterator.method(10).innerTen().value);

const object = {
    data: [1, 2, 3, 4, 5],
    method: function() {
        return { 
            nextOne: () => {
                return { value: this.data.length };
            },
            nextTwo: function() {
                return { value: this.data.length };
            }
        };
    }
};

out(object.method().nextOne().value);
// out(object.method().nextTwo().value);

// ----------------------------------------------------------------------------




// // -------------------------------------------------------
// out('example (using for | for..in | for..of | forEach() ..................');
// for(let nextValue = 0; nextValue < arrayOne.length; nextValue++)
//     out('arrayOne - ' + nextValue + ' > ' + arrayOne[nextValue]);

// for(let nextValue in arrayOne) 
//     out('arrayOne : ' + nextValue + ' > ' +  arrayOne[nextValue]);

// for(let nextValue of arrayOne)
//     out('arrayOne > ' + nextValue);

// const nextIndex = arrayOne[Symbol.iterator]();
// out('nextIndex - ' + nextIndex.next().value);
// out('nextIndex - ' + nextIndex.next().value);
// out('nextIndex - ' + nextIndex.next().value);

// mapOne.forEach((value, key) => {
//     out(`mapOne : ${key} - ${value}`);
// });

// setOne.forEach((value) => {
//     if(value != '[object Map]')
//         out('setOne : ' + value);
//     else 
//         value.forEach((value, key) => {
//             out('setOne-getOne : ' + value);
//         });
// });

// // -------------------------------------------------------
// // for(let [key, value] in mapOne) 
// //     out('mapOne - ' + key + ' : ' + value);

// for(let [key, value] of mapOne) 
//     out('mapOne - ' + key + ' : ' + value);

// let nextValue = mapOne[Symbol.iterator]();
// out('mapOne : ' + nextValue.next().value);
// out('mapOne : ' + nextValue.next().value);

// for(let next in nextValue.next())
//     out('mapOne > ' + next);

// // -------------------------------------------------------
// // for(let value in setOne) 
// //     out('setOne > ' + value);

// for(let value of setOne)
//     out('setOne - ' + value);

// nextValue = setOne[Symbol.iterator]();
// out('setOne : ' + nextValue.next().value);
// out('setOne : ' + nextValue.next().value); 

// // -------------------------------------------------------
// out('example (using iterator method and for loop)........................');
// let arrayIterator = arrayOne[Symbol.iterator]();

// out('arrayIterator : ' + arrayIterator.next().value);
// out('arrayIterator : ' + arrayIterator.next().value);

// for(let nextValue = arrayIterator.next(); 
//     !nextValue.done; 
//     nextValue = arrayIterator.next())
//     out('arrayIterator - ' + nextValue.value);

// // for(let nextValue = arrayOne[Symbol.iterator]().next();
// //     !nextValue.done;
// //     nextValue = arrayOne[Symbol.iterator]().next())
// //     out('arrayIterator -> ' + nextValue.value);

// // -------------------------------------------------------
// out('example (using iterator method and for..in loop)........................');
// arrayIterator = arrayOne[Symbol.iterator]();
// for(let nextValue in arrayIterator.next()) {
//     out('arrayIterator < ' + nextValue);
//     out('arrayIterator < ' + arrayIterator.next()[nextValue]);
// }

// for(let nextValue in arrayOne[Symbol.iterator]())
//     out('arrayIterator = ' + nextValue);

// // -------------------------------------------------------
// out('example (using iterator method and for..of loop)........................');
// arrayIterator = arrayOne[Symbol.iterator]();
// for(let nextValue of arrayIterator)
//     out('arrayIterator > ' + nextValue);

// for(let nextValue of arrayOne[Symbol.iterator]())
//     out('arrayIterator = ' + nextValue);

// // -------------------------------------------------------
// // user define iterator
// out('example (user-define-iterator)........................');
// const iterator_four = {
//     // [Symbol.iterator]: function () {
//     [Symbol.iterator]() {
//         let count = 0;
//         return {
//             next: () => {
//             // nextValue() {
//             return count < 5 ? { value: count++, done: false } : { done: true };
//             }
//         };
//     },

//     // get value() {

//     // },

//     // set value(arg) {

//     // }
// };
    
// const nextIterator = iterator_four[Symbol.iterator]();

// // out('iterator_four - ' + nextIterator.nextValue().value);
// // out('iterator_four - ' + nextIterator.nextValue().value);
// // out('iterator_four - ' + nextIterator.nextValue().value);
// // out('iterator_four - ' + nextIterator.nextValue().value);

// // Using the iterator with a for...of loop
// for (const item of iterator_four) {
//     console.log('iterator_four : ' + item); 
// }

// // -------------------------------------------------------
// // Define an iterable object
// out('example ........................');
// let iterator_three = {
//     data: [11, 22, 33, 44, 55],
//     [Symbol.iterator]: function() {
//         let index = 2;
//         return {
//             next: () => {
//                 if (index < this.data.length) {
//                     return { value: this.data[index++] * 2, done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// // Using the iterator to iterate over the data
// // let iterator = iterator_three[Symbol.iterator]();
// // let result = iterator.next();
// // while (!result.done) {
// //     console.log(result.value);
// //     result = iterator.next();
// // }

// for(const item of iterator_three)
//     out('iterator_three - ' + item);
