// if .. else
// switch
// break
// continue
// label

// ======================================================================
function statementOne_a() {
    if (10 < 20) console.log('1st is less-than 2nd');

    let x;
    if (x != undefined) console.log('x is not undefined');
    else console.log('x is undefined');

    let y = true;
    if (x == y) console.log('x is equal-to y');
    else if (x !== y) console.log('x is not equal-type y');
    else console.log('x and y are equal in type and value');

    x = 11, y = 12; let z = '11';
    if (x == z) {
        if (x === z) console.log('values and types are equal');
        else console.log('only values are equal');
    } else {
        console.log('values are not equal');
        console.log('value of y is ' + y);
    }

    if (x) console.log('value of x is - ' + x);
    else if (y) console.log('value of y is - ' + y);
    else console.log('value of z is - ' + z);

    let a = 10, b = 10;
    let c = 30, d = 40;
    if (!(b < c && b == a)) console.log('1st condition is true');
    else if (b < c && b > a && b != d) console.log('2nd condition is true');
    else if ((b < c && b > a) || (b == c && b != d)) console.log('3rd condition is true');

    if (a == 100 || 20 || 30) console.log('4th condition is true');
    if (a != 30 && 20) console.log('5th condition is true');
    if (a != 10 && 20) console.log('6th condition is true');
    if ((a == 100 && 10) && (c == 30 || 40)) console.log('7th condition is true');
    if ((a == 100 && 10) || (c == 30 || 40)) console.log('8th condition is true');
}

// ======================================================================
function statementOne_b() {
    // switch | case | break | default
    let day;
    console.log('to-day is : ' + new Date().getDate());
    switch(new Date().getDay()) {
        case 1: day = 'sunday'; break;
        case 2: day = 'monday'; break;
        case 3: day = 'tuesday'; break;
        case 4: day = 'wednesday'; break;
        case 5: day = 'thursday'; break;
        case 6: day = 'friday'; break;
        case 7: day = 'saturday'; break;
    }
    console.log('to-day is : ' + day);

    let option;
    switch(option) {
        case 1: console.log('option no - ' + option); break;
        case 2: console.log('option no - ' + option); 
        case 3: console.log('option no - ' + option);
        case 4: console.log('option on - ' + option); break;
        case 5: console.log('option no - ' + option); break;
        case 6: console.log('option no - ' + option);
        case 7: console.log('option no - ' + option); break;
        case 8: console.log('option on - ' + option); 
        case 9: console.log('option no - ' + option); 
        case 0: console.log('option no - ' + option);
    }

    switch(option) {
        case 1: 
        case 2:
        case 3: 
        console.log('option [1, 2, 3]');
        break;
        case 4: case 5: console.log('option [4, 5]'); break;
        case 6: case 7: 
        case 8: console.log('option [6, 7, 8]');
        case 9: console.log('option [9]'); break;
        case 0: default: console.log('option [0, default]');
    }

    let value = 6;
    switch(value) {
        case 1: value += 10; break;
        case 2: let result = 20; break; 
        case 3: console.log('single statement'); break;
        case 4: 
            function funcOne() {
                console.log('this is a function');
            }
            funcOne();
            break;
        case 5: 
            let array = [30, 40];
            console.log('array[0] - ' + array[0]);
            break;
        case 6: 
            let object = {
                proOne: 50,
                proTwo: 60,
                method: function() {
                    return this.proOne + this.proTwo;
                }
            }
            console.log('object.method - ' + object.method());
    }

    console.log('value is - ' + value);
    // console.log('result is - ' + result);
    // console.log('funcOne - ' + funcOne());
    // console.log('object.method - ' + object.method());

    let result = 4;
    switch(result) {
        default: console.log('no case is match'); 
        case 1: console.log('case 1 is numeric'); break;
        case 2: console.log('case 2 is numeric'); break;
        case 3: console.log('case 3 is numeric'); break;
        case 4: console.log('case 4 is numeric'); break;
        case 4: console.log('case 5 is numeric'); break;
    }

    result = '1';
    switch(result) {
        case 1: console.log('case 1 is numeric');
        case 2: console.log('case 2 is numeric'); break;
        case 3: console.log('case 3 is numeric'); break;
        case 4: console.log('case 4 is numeric'); break;
    }
}

// ======================================================================
function statementOne_c() {
    // break | continue | level
    // The continue statement (with or without a label reference) 
    // -- can only be used to skip one loop iteration.
    // The break statement, without a label reference, can only be used to 
    // -- jump out of a loop or a switch.
    // With a label reference, the break statement can be used to jump out 
    // -- of any code block:

    for (let i = 0; i < 5; i++) {
        if (i == 3) 
            break;      //  jump out of a loop or a switch (without level)
        console.log('value of i is - ' + i);
    }

    for (let i = 0; i < 5; i++) {
        if (i == 3) 
            continue;   // skip one loop iteration (with or without level)
        console.log('value of i is - ' + i);
    }

    // -------------------------------------------------------
    const funcOne = function() {
        // break in while loop 
        function localFunc_A() {
            let i = 0;
            while (i < 5) {
                if (i == 3) break;
                i++; 
            }

            return i;
        }

        console.log('localFunc - ' + localFunc_A());

        // break in labeled blocks        
        outerBlock: {
            innerBlock_A: {
                console.log('innerBlock_A');
                break innerBlock_A;
                console.log(':-(');
            }
            console.log('outerBlock');

            innerBlock_B: {
                console.log('innerBlock_B');
                break outerBlock;
                console.log(':-)');
            }
            console.log('outerBlock');
        }

        // break in labeled blocks that throw 
        block_1: {
            console.log('1');
            // break block_2;  // syntax Error - label not found
        }

        block_2: {
            console.log('1');
            // break block_1;  // syntax Error - label not found
        }

        // break within functions 
        function localFunc_B() {
            let i = 0;
            while (i < 5) {
                // if (i === 4) (function() { break; })();
                i++;
            }

            return i;
        }

        console.log('localFunc_B - ' + localFunc_B());

        blockLabel: {
            console.log('1');
            // (function () { break blockLabel; })();  // syntax Error - undefined label
        }
    }

    // -------------------------------------------------------
    const funcTwo = function() {
        // using continue with while
        let x = 0, y = 0;
        while (x < 5) {
            x++;
            if (x == 3) break;
            y += x;
        }

        console.log('value of y - ' + y);

        // using continue with a label
        let i = 0, j = 8;
        checkLoop_A: while (i < 4) {
            console.log(`value of i - ${i}`);
            i += 1;

            checkLoop_B: while (j > 2) {
                console.log(`value of j - ${j}`);
                j -= 1;
                if (j % 2 === 0) continue checkLoop_B;
                console.log(`${j} is odd`);
            }

            console.log(`i - ${i}`);
            console.log(`j - ${j}`);
        }
    }

    // -------------------------------------------------------
    const funcThree = function() {
        // using a labeled continue with for loop 
        let i, j;
        loop_a: for (i = 0; i < 3; i++) {
            loop_b: for (j = 0; j < 3; j++) {
                if (i === 1 && j === 1) continue loop_a;
                console.log(`i = ${i} > j ${j}`);
            }
        }

        // using a labeled continue statement 
        let itemsPassed = 0;
        top: for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) 
                if (j == i) continue top;
            itemsPassed++;
        }
        console.log(`itemsPassed - ${itemsPassed}`);

        // using a labeled break with for loop 
        loop_a: for (i = 0; i < 3; i++) {
            loop_b: for (j = 0; j < 3; j++) {
                if (i === 1 && j === 1) break loop_a;
                console.log(`i = ${i} > j ${j}`);
            }
        }

        // using a labeled break statement 
        let allPassed = true;
        top: for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; i++) 
                if (j == i) {
                    allPassed = false;
                    break top;
                }
        }
        console.log(`allPassed - ${allPassed}`);

        // using a labeled block with break 
        foo_a: {
            console.log('face');
            break foo_a;
            console.log('this statement will not executed');
        }
        console.log('swap');

        // using a labeled block with continue 
        foo_b: {
            console.log('face');
            // continue foo_b;
            console.log('this statement will not executed');
        }
        console.log('swap');

        // using a labeled function declaration 
        // label can used with statement not declaration
        label_a: function func() {
            let x = 0;
            // if (x == 2) break label_a;
            x++;

            return x;
        }

        'use strict'
        // label_b: function* funcGen() {
        //     yield 0;
        // }
    }

    funcOne();
    funcTwo();
    funcThree();
}

// ======================================================================
function statementOne_d() {
    block_a: {
        let count = 0;
        console.log('block_a');

        nestedBlock_a: {
            console.log('nestedBlock_a - ' + count);
            count++;
            if (count < 0) {
                // continue nestedBlock_a;
                // continue block_a;
                // continue
                // continue nestedBlock_b;
                break nestedBlock_a;
                break block_a;
                // break;
                // break nestedBlock_b;
            }
            console.log('this statement will not execute ')
        }

        nestedBlock_b: {
            console.log('nestedBlock_b - ' + count);
            break block_a;
            // if (count == 3) continue nestedBlock_1;
            console.log('this statement will not execute');
        }        

        console.log('this statement will not execute');
    }

    block_b: {
        loop_a: for (let i = 0; i < 4; i++) {
            console.log('value of i - ' + i);
            if (i == 2) continue;
            else if (i == 3) continue loop_a;
            // else if (i == 3) continue block_b;
            // else if (i == 3) continue loop_b;
            else if (i == 4) break;
            else if (i == 4) break loop_a;
            else if (i == 4) break block_b;
            // else if (i == 4) break loop_b;  
        }

        loop_b: for (let i = 0; i < 4; i++) {
            console.log('value of j - ' + i);
            if (i == 2) break loop_b;
            else if (i == 3) 
                // break loop_a; 
                // continue block_b;
                // continue loop_a;
                continue loop_b;
        }
    }
}

// ======================================================================
function statementOne_e() {
    labelOne:
    console.log('start labelOne ....');
    console.log('statement one ......');
    console.log('statement one ......');
    console.log('statement one ......');
    // continue labelOne;
    
    console.log('statement two ......');
    console.log('statement two ......');
    console.log('statement two ......');
    // break labelOne;

    function funcOne(arg) {
        // break;
        // continue;
        // if (local == 1) break;
        // else continue;

        return arg;
    }

    labelSwitch: switch(funcOne(3)) {
        case 1: console.log('case 1'); 
        case 2: console.log('case 2'); break;
        case 3: console.log('case 3'); break labelSwitch;
        // case 4: console.log('case 4'); continue labelSwitch;
    }
}

// ======================================================================
console.log('javascript conditional statement .....'); statementOne_a();
console.log('javascript conditional statement .....'); statementOne_b();
console.log('javascript conditional statement .....'); statementOne_c();
console.log('javascript conditional statement .....'); statementOne_d();
console.log('javascript conditional statement .....'); statementOne_e();