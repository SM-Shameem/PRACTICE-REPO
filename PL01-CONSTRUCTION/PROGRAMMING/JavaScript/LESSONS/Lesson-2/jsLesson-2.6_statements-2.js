// ======================================================================
function statementOne_d() {
    // while | do .. while | with
    let condition = true;

    while (condition != false) {
        console.log('condition value - ' + condition);
        condition++;
        if (condition == 3) condition = false;
    }

    do {
        console.log('condition value - ' + condition);
        condition++;
        if (condition == 3) condition = false;
    } while (condition == true);

    const arrayCondition = [11, 22, 33];
    while(condition in arrayCondition) {
        console.log(`arrayCondition[${condition}] - ` + arrayCondition[condition]);
        condition--;
    }

    // --> it will work but not good practice (require - HTML Document)
    // const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
    // let currentNode;
    // while (currentNode = iterator.nextNode()) {
    //     console.log(currentNode.textContent.trim());
    // }

    // --> it is good practice (require - HTML Document)
    // const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
    // let currentNode;
    // while ((currentNode = iterator.nextNode()) !== null) {
    //     console.log(currentNode.textContent.trim());
    // }

    // -------------------------------------------------------------------
    // using the (with) statement
    let a, x, y;
    let r = 10;

    with (Math) {
        a = PI * r * r;
        x = r * cos(PI);
        y = r * sin(PI / 2);
    }

    console.log(`value of a - ${a}`);
    console.log(`value of x - ${x}`);
    console.log(`value of y - ${y}`);

    // avoiding (with) statement by destructuring properties into scope
    r = 20;
    block_a: {
        const { PI, cos, sin } = Math;
        a = PI * r * r;
        x = r * cos(PI);
        y = r * sin(PI / 2);
    }

    console.log(`value of a -- ${a}`);
    console.log(`value of x -- ${x}`);
    console.log(`value of y -- ${y}`);

    // using (with) statement 
    with ([1, 2, 3]) {
        console.log(toString());
        console.log();
    }

    // using (with) statement 
    function f(x, o) {
        with (o) {
            console.log(x);
            console.log(o);
        }
    }

    f(10, 20);
}

// ======================================================================
function statementOne_e() {
    // simple iterator statements 
    // complex iterator statements 
    // blank iterator statements 
    // nul execution 

    // for loop 
    // for-in loop 
    // for-of loop 

    // initializer of iterator (inner | global) - incase of (setTimeout)
    // initializer as (var | let) of iterator (inner | global) - incase of (setTimeout)
    // iteration on (array | object | string | map | set | arguments | DOM)
    // iteration on (user-defined iterator | user-defined generator iterator) 

    // for | for .. of | for .. in
    for (let i = 0; i < 2; i++) 
        console.log(`value of i = ${i}`);
    
    for (
        let i = 0, j = 9; 
        i != j && (i != 9 || j != 0); 
        i++, j--) {
        console.log(`value of i[${i}] = ${i}`);
        console.log(`value of j[${i}] = ${j}`);
    }

    let i = 0;
    for (; i < 2; ) {
        console.log('value of i is : ' + i);
        i++
    }

    i = 0;
    for (; ;) {
        if (i > 2) break;
        else i++;
        console.log('value of i is : ' + i);
    }

    for (let i = 0; i < 2; i++);
    console.log('\n');
    
    // ------------------------------------------ concept not clear
    for (let j = 0; j < 3; j++) 
        setTimeout(() => {
            console.log('value of j -> ' + j);
        }, 1000);

    for (var k = 0; k < 3; k++) 
        setTimeout(() => {
            console.log('value of k -> ' + k);
        }, 1000);

    for (; k < 6; k++)
        setTimeout(() => {
            console.log('value of k -> ' + k);
        }, 1000); 

    for (
        let i = 0, getI = () => i; 
        i < 3; 
        i++)
        console.log('value of getI - ' + getI());

    for (
        let i = 0, getI = () => i; 
        i < 3; 
        i++, getI = () => i)
        console.log('value of getI > ' + getI());    

    console.log('\n');

    // -------------------------------------------------------------
    let array_a = [11, 22, 33, 44];
    let object_a = { a: 1, b: 2, c: 3, d: 4 };

    for (const x in array_a) {
        console.log(`value of array_a[${x}] - ${array_a[x]}`);
        console.log(`value of array_a[${x}] - ${array_a.x}`);
    }

    for (const x in object_a) {
        console.log(`value of object_a.${x} - ${object_a.x}`);
        console.log(`value of object_a[${x}] - ${object_a[x]}`);
    }

    for (let x in object_a) 
        console.log(`value of object_a.${x} - ` + object_a.x);

    for (object_a.a in array_a)
        console.log('value of object_a.a - ' + array_a[object_a.a]);

    // 'use strict';
    // for (var x in array_a) 
    //     console.log(`value of array_a[${x}] - ${array_a[x]}`);

    // ----------------------------------
    const triangle = { a: 1, b: 2, c: 3 };

    function ColoredTriangle() {
        this.color = "red";
    }

    ColoredTriangle.prototype = triangle;

    const obj = new ColoredTriangle();

    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            console.log(`obj.${prop} = ${obj[prop]}`);
        } else console.log(`obj.${prop} => ${obj[prop]}`);
    }

    // ----------------------------------
    const object_b = { proOne: 11, proTwo: 22 };
    for (const x in object_b) {
        object_b[x] = 10;
        console.log('object_b.' + x + ' - ' + object_b[x]);
    }

    // ------------------------------------
    console.log('\narray iteration --');
    const array_b = [11, 22, 33];
    array_b['a'] = 44;
    array_b['b'] = 55;
    for (const x in array_b) 
        console.log('for-in > value of array_b[' + x + '] - ' + array_b[x]);
    for (const x of array_b) 
        console.log('for-of > value of array_b[' + x + '] - ' + array_b[x]);
    

    console.log('\nobject iteration --');
    const object_c = { proOne: 111, proTwo: 222 };
    for (const x in object_c) 
        console.log('for-in > value of object_c.' + x + ' - ' + object_c[x]);
    // for (const x of object_c) 
    //     console.log('for-of > value of object_c.' + x + ' - ' + object_c[x]);
    
    console.log('\nstring iteration --');
    const const_a = 'string';
    for (const x in const_a) console.log('for-in > const_a - ' + x + ' : ' + const_a[x]);
    for (const x of const_a) console.log('for-of > const_a - ' + x);
    
    console.log('\narray iteration --');
    const const_b = new Uint8Array([0x00, 0xff]);
    for (const x in const_b) console.log('for-in > const_b[' + x + '] - ' + const_b[x]);
    for (const x of const_b) console.log('for-of > const_b - ' + x);
    
    console.log('\nmap iteration --');
    const const_c = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]);
    for (const x in const_c) {
        console.log('for-in > const_c - ' + x);
        console.log('for-in > const_c - ' + const_c[x]);
    }
    for (const x of const_c) console.log('for-of > const_c - ' + x);
    for (const [x, y] of const_c) 
        console.log('for-of const_c - ' + x + ' > ' + y);
    
    console.log('\nset iteration --');
    const const_d = new Set([1, 1, 2, 2, 3, 3]);
    for (const x in const_d) console.log('for-in > const_d - ' + x);
    for (const x of const_d) console.log('for-of > const_d - ' + x); 
    
    console.log('\narguments iteration --');
    function foo() {
        for (const value in arguments) {
            console.log('for-in - arguments[' + value + '] - ' + arguments[value]);
        }
        for (const value of arguments) {
            console.log('for-of - ' + value);
        }
    }
    
    foo(11, 22, 33);

    // const articleParagraphs = document.querySelectorAll("article > p");
    // for (const paragraph of articleParagraphs) {
    //     paragraph.classList.add("read");
    // }
}

// ======================================================================
function statementOne_f() {
    // try | catch

    
}

// ======================================================================
console.log('javascript conditional statement .....'); statementOne_d();
console.log('javascript conditional statement .....'); statementOne_e();
console.log('javascript conditional statement .....'); statementOne_f();