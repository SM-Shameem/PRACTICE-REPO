let out = (arg = '\n') => console.log(arg);
// # ITERATOR | ERROR STATEMENTS ||||||||||||||||||||||||||||||||||||||||||||||
// 1. iterator statements (for | for .. in | for .. of)
// 2. error statements (try .. catch .. finally | throw)

// ============================================================================
// ----- 04. iterator-statement and (for) keyword -----------------------------
// ============================================================================
function example_four() {
    out('04. iterator-statement and (for) keywords .......');

    // ----------------------------------------------------
    // - the (for) statement creates a loop that consists of three optional 
    //   expressions, enclosed in parentheses and separated by semicolons, 
    //   followed by a statement (usually a block statement) to be executed 
    //   in the loop
    
    // - syntax 
    // - initialization (optional)
    // - condition (optional)
    // - afterthought (optional)
    // - statement 

    for(let i; i < 2; i++) out('value of i1 - ' + i);
    out ('i= undefined - statement .....');

    for(let i = 0; i < 2; i++) 
        out('value of i2 - ' + i);
        out('i=0 - statement .....');

    for(let i = null; i < 2; i++) {
        out('value of i3 - ' + i);
        out('i=null - statement .....');
    }

    // ----------------------------------------------------
    for(let i = null; i < 2; i++);
    // for(i; i < 2; i++);

    for(var x = null; x < 2; x++)
        out('value of x : ' + x);

    for(x; x < 4; x++)
        out('value of x - ' + x);

    let i = null;
    for(; i < 3; ) {
        out('value of i : ' + i);
        i++;
    }

    for(;;) {
        out('value of i - ' + i);
        i++;
        if(i < 3) break;
        else i = null;
    }

    for(let x = 0, y = 5; 
        x < y && x >= 0 && y <= 5; 
        x++, y-=1)
        out('value of x + y : ' + (x + y));
    
    // ----------------------------------------------------
    // for(let x = 'start' in window ? window.start : 0; x < 9; x++) 
    // parenthesize the whole initializer 
    // for(var x = ('start' in window ? window.start : 0); x < 9; x++) 
        // out('value of x -- ' + x);

    // parenthesize the (in) expression
    // for(x = ('start' in window) ? window.start : 0; x < 9; x++) 
        // out('value of x -- ' + x); 

    // ----------------------------------------------------
    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            out('value of i - ' + i);
        }, 1000);
    }

    for(i = 0; i < 3; i++) {
        setTimeout(() => {
            out('value of i : ' + i);
        }, 1000);
    }

    for(var j = 0; j < 4; j++) {
        setTimeout(() => {
            out('value of j - ' + j);
        }, 1000);
    }

    // ----------------------------------------------------
    for(let a = 0, get_a = () => a; a < 4; a++) 
        out('get_a - ' + get_a());

    for(let a = 0, get_a = () => a; a < 4; a++, get_a = () => a)
        out('get_a - ' + get_a());

    // for(let a = 0, get_a = a; get_a < 4; a++, get_a = () => a)
    for(let a = 0, get_a = () => a; get_a() < 4; a++, get_a = () => a)
        out('get_a : ' + get_a());  

    // ----------------------------------------------------
    for(
        let a = 0, get_a = () => a, in_a = () => a++; 
        get_a() < 4;
        in_a()
    ) {
        out('value of a : ' + a);
        out('get_a - ' + get_a());
        out('in_a -- ' + in_a());
    }
        
    for(
        let a = 0, get_a = () => a, in_a = () => ++a;
        get_a() < 4;
        in_a()
    ) {
        out('value of a:: ' + a);
        out('get_a - ' + get_a());
        out('in_a -- ' + in_a());
    }

    let arr = [1, 2, 3, 4, 5, 6];
    for(
        let i = 0, j = arr.length - 1; 
        i < j;
        i++, j--
    )
        out(arr[i] + ' - ' + arr[j]);

    // ----------------------------------------------------
    // function showOffsetPos(id) {
    //     let left = 0;
    //     let top = 0;
    //     for(
    //         let itNode = document.getElementById(id); // initialization 
    //         itNode; // condition 
    //         left += itNode.offsetLeft, 
    //         top += itNode.offsetTop,
    //         itNode += itNode.offsetParent   // afterthought
    //     );

    //     out(`Offset position of ${id} element: 
    //     left - ${left}px, 
    //     top - ${top}px
    //     `)
    // }

    // showOffsetPos();
}



// ============================================================================
// ----- 05. iterator-statement and for..in keyword ---------------------------
// ============================================================================
function example_five() {
    out('05. iterator-statement and for..in keywords .......');
    
    // --------------------------------------------------------
    // - the (for..in) statement iterates over all (enumerable string properties)
    //   of an object (ignoring properties keyed by - symbols), including 
    //   inherited enumerable properties.

    // - syntax 
    // - variable 
    // - receives a string property name on each iteration 
    // - may be either a declaration with (const | let | var)     
    //   or assignment target (declared variable | object-property)
    //   or assignment target (destructuring assignement pattern)

    // - (variable) part of (for..in) accepts anything or any valid identifier  
    //   that can come before (=) operator, like (key | name | sum | etc)
    // - variable declared with (var) is not local to the loop
    // - but (let | const) are local to the loop 
    // - in case of (const) declaration, you can not re-assigned in loop body
    //   it can change between iteration, because those are separate variables
    // - otherwise you can use (let)
    // - a (legacy syntax) allows (var) declaration to have an initializer 
    //   this throw a syntax-error in (strict) mode and ignored in no-strict 

    // - can use destructing to assign multiple local variable or 
    // - use a property accessor like - for(x.y in iterator)
    //   to assign the value to the object property
    
    // - object
    // - object whose non-symbol enumerable properties are iterated over 
    
    // - statement
    // - a statement to be executed on every iteration 
    // - may reference variable 
    // - can use a (block statement) to execute multiple statements 

    const objectOne = { a: 11, b: '22', 0: 0, 1: 33, 2: '44' }
    const arrayOne = [ 10, '20', 30, '40' ];

    Object.defineProperty(objectOne, 0, { enumerable: false });
    Object.defineProperty(arrayOne, '3', { enumerable: false});

    for(const property in objectOne) 
        out(property + ' - ' + typeof(property) + 
        ' : ' + objectOne[property] + ' - ' + typeof(objectOne[property]));
    for(const index in arrayOne) 
        out(index + ' - ' + typeof(index) + 
        ' : ' + arrayOne[index] + ' - ' + typeof(arrayOne[index]));

    // -------------------------------------------------------
    // destructuring assignement pattern
    let array_dap = [11, 22, 33];
    let [A, B, C] = array_dap ;
    out('array_dap (A) - ' + A);
    out('array_dap (B) - ' + B);
    out('array_dap (C) - ' + C);

    let object_dap = { a: 10, b: 20, c: 30 };
    let { a, x, c } = object_dap;
    out('object_dap (a) - ' + a);
    out('object_dap (x) - ' + x);
    out('object_dap (c) - ' + c);

    let index = 'a';
    for(object_dap[index] in array_dap) {
        out('index - ' + index);
        out('object_dap[index] - ' + object_dap[index]);
        out('array_dap[object_dap[index]] - ' + array_dap[object_dap[index]]);
        
        if(index == 'a') index = 'b';
        // else if(index == 'b') index = 'c';
    }

    out('array_dap (A) - ' + A);
    out('array_dap (B) - ' + B);
    out('array_dap (C) - ' + C);
    out('object_dap (a) - ' + a);
    out('object_dap (x) - ' + x);
    out('object_dap (c) - ' + c);
    out('array_dap[0] - ' + array_dap[0]);
    out('array_dap[1] - ' + array_dap[1]);
    out('array_dap[2] - ' + array_dap[2]);
    out('object_dap.a - ' + object_dap.a);
    out('object_dap.b - ' + object_dap.b);
    out('object_dap.c - ' + object_dap.c);

    out('a - ' + a);
    for(a in array_dap) 
        out(a + ' - ' + array_dap[a]);

    out('A - ' + A);
    for(A in object_dap) 
        out(A + ' - ' + object_dap[A]);

    // for([A, B] in object_dap)
    //     out(A + ' : ' + B);

    // -------------------------------------------------------
    // const | let | var effect inside for..in loop
    for(const indexC in array_dap) {
        out(indexC + ' - ' + array_dap[indexC]);
        // indexC = 2;
        out('indexC - ' + indexC + ' : ' + array_dap[indexC]);
    }

    for(let indexL in array_dap) {
        out(indexL + ' - ' + array_dap[indexL]);
        indexL = 20;
        out('indexL - ' + indexL + ' : ' + array_dap[indexL]);
    }

    for(var indexV in array_dap) {
        out(indexV + ' - ' + array_dap[indexV]);
        indexV = 22;
        out('indexV - ' + indexV + ' : ' + array_dap[indexV]);
    }

    // out('indexC - ' + indexC);
    // out('indexL - ' + indexL);
    out('indexV - ' + indexV);

    // -------------------------------------------------------
    // - the loop will iterate over all properties of the object itself
    //   and those the object inherits from its prototype chain 
    // - properties of nearer prototypes take precedency over those further
    //   away from the object in its prototype chain
    // - object created from built-in constructors (like Array or Object)
    //   have inherited non-enumerable properties (from Array.prototype or Object.prototype) 
    //   (such as Array's indexOf() or Object's toString() methods) 
    //   which will not be visited in (for..in) loop
    // - the traversal order is well-defined and consistent across implementation
    // - within each component of the prototype chain, 
    //   all non-negative integer keys will be traversed first in ascending order by value
    //   then other string keys in ascending chronological order of property creation 
    // - keys (those that can be array index)      
    
    const objectTwo = { a: 11, b: 22, c: 33 };
    const inheritObj = { A: objectTwo, B: 44 };
    for(const property in inheritObj) 
        out(property + ' - ' + inheritObj[property]);
    for(const property in objectTwo) 
        out(property + ' - ' + objectTwo[property]);

    const objectThree = { A: 10, B: 20 };
    objectThree.C = 30;
    objectThree.D = 40;
    for(const property in objectThree) 
        out(property + ' = ' + objectThree[property]);

    const arrayTwo = [1, 2, 3];
    const inheritArray = [arrayTwo, 4, 5];
    for(const index in inheritArray) 
        out(index + ' - ' + inheritArray[index]);
    for(const index in arrayTwo) 
        out(index + ' - ' + arrayTwo[index]);

    const arrayThree = [ 1, 2, 3 ];
    arrayThree[3] = 4;
    arrayThree[4] = 5;
    for(const index in arrayThree) 
        out(index + ' = ' + arrayThree[index]);

    const objectFour = new Object({ x: 111, y: 222, z: 333});
    const arrayFour = new Array(1, 2, 3);
    for(const property in objectFour)
        out(property + ' :- ' + objectFour[property]);
    for(const index in arrayFour) 
        out(index + ' = ' + arrayFour[index]); 
        
    // for(const property in Object.prototype) 
    //     out('Object - ' + property);

    out();

    // -------------------------------------------------------
    // - Delete | Add | Modify Properties 
    // - for..in visits property keys in the following fashion 
    // - it first gets all own string keys of the current object, 
    //   in a fashion very similar to - Object.getOwnPropertyNames()
    // - for each key, if no string with the same value has ever been visited, 
    //   the (property descriptor is retrieved) and the property is only 
    //   visited if it is enumerable
    // - however, this property string will be marked as visited even if it's 
    //   not enumerable 
    // - then, the current object is replaced with its prototype, and the 
    //   process is repeated 

    const object_a = { a: 11, one: '22', 10: 33, 20: '44' };
    for(const property in object_a)
        out(typeof(property) + ' : ' + property + ' - ' + 
        typeof(object_a[property]) + ': ' + object_a[property]);

    out('object_a - ' + Object.getOwnPropertyNames(object_a));

    // - this means 
    // - any property added to the current visited object during iteration 
    //   will not be visited, because all own properties of the current object
    //   have already been saved beforehand 
    // - if multiple objects in the prototype chain have a property with the 
    //   same name, only the first one will be considered, and it is only 
    //   visited if it's enumerable. 
    // --if it is non-enumerable, no other properties with same name further up
    //   the prototype chain will be visited, even if they are enumerable 

    const object_b = { a: 10, b: 20, c: 30 };
    object_b.d = 40;
    
    for(const property in object_b) {
        object_b.a = 11;
        delete(object_b.b);
        object_b.e = 50;   
        out(property + ' - ' + object_b[property]);     
    }

    const Constructor_c = function () {
        this.a = 10;
        this.b = 20;
        this.c = 30;
    };

    const object_c = new Constructor_c();
    object_c.b = 22;
    delete(object_c.c);
    Constructor_c.prototype.d = 40;
    object_c.e = 50;
    
    for(const property in object_c) {
        // delete(Constructor_c.prototype.a);
        delete(object_c.a);
        object_c.b = 33;
        Constructor_c.prototype.f = 60;
        object_c.g = 70;
        out('constructor - ' + property + ' - ' + object_c[property]);
    }

    // -------------------------------------------------------
    // class inheritance and for..in loop
    class base {
        constructor() {
            this.aa = 11;
            this.bb = 22;
        }
    }

    class drive extends base {
        constructor() {
            super();
            this.bb = 33;
            this.cc = 44;
        }
    }

    class next extends drive {
        constructor() {
            super();
            this.cc = 55;
            this.dd = 66;
        }
    }

    const object_d = new drive();
    // const object_d = new base();
    for(const property in object_d) {
        out('inheritance - ' + property + ' - ' + object_d[property]);
    }
    
    const object_e = new next();
    for(const property in object_e)
        out('inheritance - ' + property + ' - ' + object_e[property]);

    // - in general, it is best not to add, modify, or remove properties from 
    //   object during iteration, other than, property currently being visited
    // - the specexplicitly allows the implementation to not follow the 
    //   algorithm above in one of the following cases - 
    // - the object's prototype chain is modified during iteration 
    // - property is deleted from object or its prototype chain during iteration
    // - a property is added to the object's prototype chain during iteration 
    // - a property's enumerability is changed during iteration 
    // - in this cases, implementation may behave differently from what you may 
    //   expect, or even from each other 

    // -------------------------------------------------------
    // object-constructor with define-property and for..in loop
    const Constructor_a = function() {
        this.aaa = 111;
        this.bbb = 222;
    }

    const object_f = new Constructor_a();
    for(const property in object_f)
        out(property + ' - ' + object_f[property]);

    Object.defineProperty(Constructor_a.prototype, 'aaa', {value: 333});
    delete(Constructor_a.prototype.bbb);
    // Object.defineProperty(Constructor_a.prototype, 'ccc', {value: 444});

    for(const property in object_f) {
        delete(Constructor_a.prototype.aaa);
        Object.defineProperty(Constructor_a.prototype, 'ccc', {value: 666});
        out(property + ' - ' + object_f[property]);
    }

    class base_a {
        constructor() {
            this.aaaa = 1111;
            this.bbbb = 2222;
        }
    }

    class drive_a extends base_a {
        constructor() {
            super();
            this.cccc = 3333;
            this.dddd = 4444;
            this.aaaa = 5555;
        }
    }

    class next_a extends drive_a {
        constructor() {
            super();
            this.eeee = 6666;
            this.aaaa = 7777;
            this.bbbb = 8888;
        }
    }

    const instance_a = new next_a();

    // Object.defineProperty(next_a, 'eeee', { enumerable: false });
    // Object.defineProperty(next_a.prototype, 'eeee', { enumerable: false });
    Object.defineProperty(instance_a, 'eeee', { enumerable: false });

    for(const property in instance_a) {
        // Object.defineProperty(next_a, 'eeee', { enumerable: false }); 
        // Object.defineProperty(instance_a, 'eeee', { enumerable: false });  
        // Object.defineProperty(next_a.prototype, 'eeee', { enumerable: false });     
        out('inherit-define-pro - ' + property + ' - ' + instance_a[property]);
    }    
}



// ============================================================================
// ----- 06. iterator-statement and for..of keyword ---------------------------
// ============================================================================
function example_six() {
    out('05. iterator-statement and for..of keywords .......');

    // -------------------------------------------------------
    // - the (for..of) statement executes a loop that operates no a sequence 
    //   of values sourced from an (iterable object)
    // - iterable objects include instances of built-ins such as -
    //   (Array | String | Typed Array | Map | Set),
    //   NodeList and other DOM collections, 
    //   as well as the (arguments) object, 
    //   (generators) produced by (generator function), 
    //   and user-defined iterables

    // - syntax 
    // - variable 
    // - iterable 
    // - statement 

    // - difference between (for..of | for..in)
    // - both (for..of | for..in) statements iterate over something.
    //   the main difference between them is in what they iterate over 
    // - the (for..in) statement iterate over the (enumerable string properties)
    //   of an object, which the (for..of) statement iterates over value that the
    //   (iterable object) defines to be iterated over 
    // - the following shows the difference between (for..in | for..of) loop
    //   when used with an array

    // -------------------------------------------------------
    // accessing (object | index | prototype-chain) - using (for..in | for..of)
    Object.prototype.objCustom = function() {}
    Object.prototype.arrayCustom = function() { return [0, 1]; }
    Object.prototype.customObj = { a: 11, b: 22 };
    Object.prototype.customArray = [ 10, 20 ];

    const iterableCustom = [ 2, 4, 6, 8 ];
    iterableCustom.foo = 'hello';

    for(const i in iterableCustom)
        out('custom-in - ' + i);
        
    for(const i in iterableCustom)
        if(Object.hasOwn(iterableCustom, i))
            out(i + ' - ' + iterableCustom[i]);

    for(const i of iterableCustom)
        out('custom-of - ' + i);

    // const object_a = { a: 11, b: 22, c: 33 };
    // for(const property of object_a)
    //     out(property);

    // -------------------------------------------------------
    // accessing object - using (for..in | for..of)
    const customIterable = { A: 111, B: 222, C: 333 };
    customIterable.D = 444;

    for(const i in customIterable)
        out('in-custom - ' + i);

    for(const i in customIterable)
        if(Object.hasOwn(customIterable, i))
            out(i + ' - ' + customIterable[i]);

    // for(const i of customIterable) 
    //     out('of-custom - ' + i);

    // -------------------------------------------------------
    // accessing (string | array | typed-array) - using (for..in | for..of)
    const string_a = 'string';
    for(const index of string_a)
        out('string_a - ' + index);

    const array_a = ['a', 'b', 'c'];
    for(const index of array_a)
        out('array_a - ' + index);

    const byteEight = new Int8Array(3);
    const byteUSixteen = new Uint16Array([11, 22, 33, 44]);
    byteEight[0] = 10;
    byteEight[1] = -20;
    byteEight[2] = 30;
    for(const index of byteEight) 
        out('byteEight - ' + index);
    for(const index of byteUSixteen)
        out('byteUSixteen - ' + index);

    // -------------------------------------------------------
    // accessing (set and map) - using (for..in | for..of)
    const mapOne = new Map();
    mapOne.set('a', 10);
    mapOne.set('b', -20);
    mapOne.set('c', 30.11);
    mapOne.set('d', 'foo');
    
    mapOne.set('e', 'string');
    mapOne.set('e', 10);
    mapOne.set(1, 111);

    out('mapOne - ' + mapOne.get('a'));
    out('mapOne - ' + mapOne.has('b'));
    out('mapOne - ' + mapOne.delete('d'));

    for(const [key, value] of mapOne)
        out('mapOne - ' + key + ' : ' + value);

    const setOne = new Set();
    setOne.add(11);
    setOne.add(-22);
    setOne.add(33.10);
    setOne.add('foo');
    
    setOne.add('string');
    setOne.add('string');

    out('setOne - ' + setOne.has(11));
    out('setOne - ' + setOne.delete('foo'));

    for(const value of setOne)
        out('setOne - ' + value);

    // -------------------------------------------------------
    // accessing (node-list) - on browser console - using (for..in | for..of)

    // const listOne = document.querySelectorAll('li');
    // for(const item of listOne) {
    //     out('item - ' + item.innerHTML);
    //     item.style.color = 'pink';
    // }

    // const listTwo = document.querySelector('div').getElementsByClassName('p');
    // for(const item of listTwo) {
    //     out('item - ' + item.textContent);
    //     item.style.color = 'brown';
    // }

    // const listThree = document.getElementById('d').attributes;
    // for(const item of listThree)
    //     out(item.name + ' - ' + item.value);

    // -------------------------------------------------------
    // accessing (arguments) of function - using (for..in | for..of)
    const objectOne = function () {
        for(const arg of arguments)
            out('arg ' + arg + ' - ' + arguments[arg]);
    }

    objectOne(1, 2, 3, 4);

    // -------------------------------------------------------
    // accessing (generator) - using (for..in | for..of)
    function* generatorFunc() {
        yield 1;
        yield 2;
        yield 3;
    }

    let generator = generatorFunc();
    out('generator - ' + generator.next().value);
    out('generator - ' + generator.next().value);
    out('generator - ' + generator.next().value);

    generator = generatorFunc();
    for(const item of generator)
        out('generator : ' + item);

    // -------------------------------------------------------
    // accessing (user-defined-iterator) - using (for..in | for..of)
    
    // collection
    // - in javascript, collections are data structures used to store 
    //   and manage multiple values. some common types of collections 
    //   in javascript include (arrays | objects | maps | sets | WeakMaps)
    // - array: arrays are ordered collections of (values), where each value 
    //   is identified by an (index) 
    // - object: objects are collections of (key-value) pairs where (key) are
    //   (string) and (value) can be any (data-type)
    // - map: maps are collections of (key-value) pairs where (keys) can be of
    //   any (data-type), providing better performance and additional 
    //   functionalities over regular objects
    // - set: sets are collections of (unique values), where each value may 
    //   occur only once 
    // - WeakMap: WeakMap are similar to maps but with some difference in
    //   behavior, particularly regarding memory management 
    // - WeakSet: 

    // iterator 
    // - in javascript, iterators are objects that provide a way to iterate 
    //   over the elements of a collection sequentially.
    // - they follow the iterator protocol, which requires the presence of a 
    //   (next()) method that returns an object with properties (value) 
    //   - the next value in the iterator - and (done) - a boolean indicating 
    //   whether the iteration has finished 
    // - there are several built-in iterator objects in javascript, such as 
    //   (arrays | strings | maps | sets) 

    // const array_one = [ 1, 2, 3, 4, 5 ];
    const array_one = 'string';
    const iterator_one = array_one[Symbol.iterator]();

    // out('array-iterator - ' + iterator_one.next().value);
    // out('array-iterator - ' + iterator_one.next().value);
    // out('array-iterator - ' + iterator_one.next().value);
    // out('array-iterator - ' + iterator_one.next().value);
    // out('array-iterator - ' + iterator_one.next().value);

    // while(!iterator_one.next().done) 
    //     out('array-iterator - ' + iterator_one.next().value);

    let nextValue = iterator_one.next();
    while(!nextValue.done) {
        out('array-iterator - ' + nextValue.value);
        nextValue = iterator_one.next();
    }

    // const object_one = { a: 11, b: 22, c: 33 };
    // const iterator_two = object_one[Symbol.iterator]();
    // out('object-iterator - ' + iterator_two.next().value);

    // -------------------------------------------------------

}



// ============================================================================
// ----- 07. iterator-statement and try..catch..finally keyword ---------------
// ============================================================================
function example_seven() {
    // 1. try..catch..finally
    // 2. syntax (tryStatement | catchStatement | finallyStatement)
    // 3. description 
    // -> catch binding 
    // -> the finally block
    // 4. examples 
    // -> unconditional catch block 
    // -> conditional catch blocks
    // -> nested try blocks 
    // -> returning from a finally block
}



// ============================================================================
// ----- 08. iterator-statement and throw keyword -----------------------------
// ============================================================================
function example_eight() {
    // 1. throw
    // 2. syntax (expression)
    // 3. description 
    // -> automatic semicolon insertion 
    // 4. examples 
    // -> throwing a user-defined error 
    // -> throwing an existing object 
}



// ============================================================================
// ----- examples -------------------------------------------------------------
// ============================================================================
out(); example_four();
out(); example_five();
out(); example_six();
out(); example_seven();
out(); example_eight();