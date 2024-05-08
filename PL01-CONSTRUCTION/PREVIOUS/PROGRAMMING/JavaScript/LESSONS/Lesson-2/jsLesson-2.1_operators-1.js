console.log('JAVASCRIPT OPERATORS 1 ................');

function func_faa() {
    // basic arithmetic operators 
    let localLet_one = 10;
    let localLet_two = 20;

    console.log('localLet_one + localLet_two : ' + (localLet_one + localLet_two));
    console.log('localLet_one - localLet_two : ' + (localLet_one - localLet_two));
    console.log('localLet_one * localLet_two : ' + (localLet_one * localLet_two));
    console.log('localLet_one / localLet_two : ' + (localLet_one / localLet_two));
    console.log('localLet_one % localLet_two : ' + (localLet_one % localLet_two));
    console.log('5 + 10 : ' + (5 + 10));
    console.log('10 - 5.5 : ' + (10 - 5.5));
    console.log('4 * 3.2 : ' + (4 * 3.2));
    console.log('localLet_one / 4.7 : ' + (localLet_one / 4.7));
}

function func_fab() {
    // advance arithmetic operators 
    let localLet_one = 3;

    console.log('localLet_one : ' + localLet_one);
    console.log('localLet_one++ : ' + localLet_one++);
    console.log('localLet_one-- : ' + localLet_one--);
    console.log('++localLet_one : ' + ++localLet_one);
    console.log('--localLet_one : ' + --localLet_one);
    console.log('10**localLet_one : ' + 10 ** localLet_one);
}

function func_fac() {
    // basic assignment operators 
    let localLet_one; console.log('localLet_one - ' + localLet_one);
    localLet_one = 10; console.log('localLet_one = 10 - ' + localLet_one);
    localLet_one += 10; console.log('localLet_one += 10 - ' + localLet_one);
    localLet_one -= 10; console.log('localLet_one -= 10 - ' + localLet_one);
    localLet_one *= 10; console.log('localLet_one *= 10 - ' + localLet_one);
    localLet_one /= 10; console.log('localLet_one /= 10 - ' + localLet_one);
    localLet_one %= 10; console.log('localLet_one %= 10 - ' + localLet_one);
}

function func_fad() {
    // advance assignment operators
    let localLet_one; console.log('localLet_one - ' + localLet_one);
    localLet_one = 10; console.log('localLet_one = 10 - ' + localLet_one);
    localLet_one **= 2; console.log('localLet_one **= 2 - ' + localLet_one);
}

function func_fae() {
    // basic comparison operators 
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    if (localLet_one == localLet_two) console.log('values are equal');
    else if (localLet_one < localLet_two) console.log('one is less-than two');
    else if (localLet_one > localLet_two) console.log('one ie greater-than two');

    if (localLet_one <= localLet_two) {
        if (localLet_one == localLet_two) console.log('values are equal');
        else if (localLet_one < localLet_two) console.log('one is less-than two');
    } else if (localLet_one >= localLet_two) {
        if (localLet_one == localLet_two) console.log('values are equal');
        else if (localLet_one > localLet_two) console.log('one is greater-than two');
    }
}

function func_faf() {
    // advance comparison operators 
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    if (localLet_one == localLet_two) console.log('only values are equal');
    else if (localLet_one != localLet_two) console.log('only values are not equal');

    if (localLet_one === localLet_two) console.log('values and types are equal');
    else if (localLet_one !== localLet_two) {
        if (localLet_one == localLet_two) console.log('types are not equal');
        else if (localLet_one != localLet_two) console.log('values are not equal');
    }
}

function func_fag() {
    // basic logical operators 
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    if (typeof(localLet_one) == 'string' && typeof(localLet_two) == 'string') {
        console.log('type - ' + typeof(localLet_one));
        console.log('type - ' + typeof(localLet_two));
    } else if (typeof(localLet_one) == 'number' && typeof(localLet_two) == 'number') {
        console.log('type - ' + typeof(localLet_one));
        console.log('type - ' + typeof(localLet_two));
    } else if (typeof(localLet_one) == 'string' || typeof(localLet_one) == 'number'
            && typeof(localLet_two) == 'string' || typeof(localLet_two) == 'number') {
        console.log('type - ' + typeof(localLet_one));
        console.log('type - ' + typeof(localLet_two));
    }

    if (typeof(localLet_one) == 'string')
        console.log('type - ' + typeof(localLet_one));
    else if (!(typeof(localLet_one) == 'string'))
        console.log('type - ' + typeof(localLet_one));
}

function func_fah() {
    // advance logical-assignment operators
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    if (localLet_one && localLet_two) {
        console.log('localLet_one -: ' + localLet_one);
        console.log('localLet_two -: ' + localLet_two);
    } else if (localLet_one || localLet_two) {
        console.log('localLet_one -> ' + localLet_one);
        console.log('localLEt_two -> ' + localLet_two);
    }

    if (localLet_one &&= localLet_two)  // (&&=) has no significant use or effect
        console.log('localLet_one :- ' + localLet_one);
    else if (localLet_one ||= localLet_two) 
        console.log('localLet_one >- ' + localLet_one);
}

console.log('\nfunc_faa : arithmetic operators ..........'); func_faa();
console.log('\nfunc_fab : arithmetic operators ..........'); func_fab();
console.log('\nfunc_fac : assignment operators ..........'); func_fac();
console.log('\nfunc_fad : assignment operators ..........'); func_fad();
console.log('\nfunc_fae : comparison operators ..........'); func_fae(10, 20);
console.log('\nfunc_faf : comparison operators ..........'); func_faf(10, '20');
console.log('\nfunc_fag : conditional operators .........'); func_fag(10, 20);
console.log('\nfunc_fah : conditional operators .........'); func_fah(undefined, 20);

// -----------------------------------------------------------------------
// JavaScript Operators
// -----------------------------------------------------------------------
// 01 operators are used to assigning value to variable, comparing value to
//    variable or lateral, compute to variable or literal and so on

// 02 operator and operands
// -- the values (in an operation) are called (operands)
// -- operation (performed between two operands) is defined by an (operator)
// -- operands can be (literal | variable | expression)
// -- like > x = (100 + 11) * a;
//     -- here (x, 100, 11, a) are operands
//     -- and ()=, +, *) are operators

// 03 in javascript there are mainly 5 (five) types of operators -
//     1. arithmetic
//     2. assignment
//     3. comparison
//     4. logical
//     5. bitwise
//     6. additional operators

// 04 javascript additional regular operators 
// -- ES2016 introduced 2 (two) new operators, these are below -
//      1. **   - exponentiation
//      2. **=  - exponent then assign
// -- additional regular operators
//      1. ===  - type equal (with value)
//      2. !==  - type not equal (with value)
// -- additional logical-assignment operators
//      1. &&=  - if first true then assign second (single operand)
//      2. ||=  - if first false then assign second (single operand)

// -----------------------------------------------------------------------
// Arithmetic Operators
// -----------------------------------------------------------------------
// -- arithmetic operators perform arithmetic on numbers (literal | variable)
// -- a typical arithmetic operation operates on two numbers
//     -- this two numbers can be literals > x = 4 + 2;
//     -- this two numbers can be variables > x = a + b;
//     -- expressions > x = (100 + 40) * a;
// -- there are 8 (eight) arithmetic operators -
//  1. (+)  - addition, add numbers > x = 10 + 20
//  2. (-)  - subtraction, subtract numbers > x = 20 - 10
//  3. (*)  - multiplication, multiplies numbers > x = 10 * 5
//  4. (/)  - division, divides numbers > x = 10 / 5
//  5. (%)  - modulus (remainder) > x = 10 % 5
//  6. (++) - increment, this operator increments numbers
//  7. (--) - decrement, this operator decrements numbers
//  8. (**) - exponentiation (ES2016),
//          - first operand to the power of second operand
//          - (x ** y) produces the same result as (Math.pow(x, y))

// -----------------------------------------------------------------------
// Assignment Operators
// -----------------------------------------------------------------------
// -- assignment operators assign values to javascript variables
// -- in JavaScript there are 8 (eight) assignment-operators
// -- 1. (=)   - x = y    - x = y       - assign a value to a variable
// -- 2. (+=)  - x += y   - x = x + y   - adds then assign result to variable
// -- 3. (-=)  - x -= y   - x = x - y   - subtracts then assign result to variable
// -- 4. (*=)  - x *= y   - x = x * y   - multiplies then assign result to variable
// -- 5. (/=)  - x /= y   - x = x / y   - divides then assign result to variable
// -- 6. (%=)  - x %= y   - x = x % y   - assign remainder to variable
// -- 7. (**=) - x **= y  - x = x ** y  - exponent then assign (ES2016)
// -- 8. (:)   - x : y    - x = y       - assign a value to an object property

// -----------------------------------------------------------------------
// Comparison Operators
// -----------------------------------------------------------------------
// -- these operators are used to compare two values, result (true | false)
// -- these operators are used in logical statements to determine equality
// -- in JavaScript there are 8 (eight) comparison operators
// -- 1. (==)  - equal-to, only value              - 8 == 8    (true)
//                                                 - 5 == 8    (false)
//                                                 - 5 == '5'  (true)
// -- 2. (===) - equal-to, value and type          - 8 === 8   (true) datatype
//                                                 - 5 === 8   (false)
//                                                 - 5 === '5' (false)
// -- 3. (!=)  - not-equal-to, only value          - 8 != 8    (false)
//                                                 - 5 != 8    (true)
//                                                 - 5 != '5'  (false)
// -- 4. (!==) - not-equal-to, value and type      - 8 !== 8   (false) datatype
//                                                 - 5 !== 8   (true)
//                                                 - 5 !== '5' (true)
// -- 5. (>)   - greater-than, only value          - 5 < 8     (true)
//                                                 - 8 < 5     (false)
// -- 6. (>=)  - greater-than equal-to, only value - 5 >= 8    (false)
//                                                 - 8 >= 5    (true)
//                                                 - 5 >= 5    (true) equal
// -- 7. (<)   - less-than, only value             - 5 > 8     (false)
//                                                 - 8 > 5     (true)
// -- 8. (<=)  - less-than equal-to, only value    - 5 <= 8    (true)
//                                                 - 8 <= 5    (false)
//                                                 - 8 <= 8    (true) equal

// -----------------------------------------------------------------------
// Conditional Operators
// -----------------------------------------------------------------------
// -- these operators are used to logical statement check
// -- in JavaScript there are 5 (five) logical-operators
// -- 1. (&&)  - logical AND               - both expressions or values would be true
// -- 2. (||)  - logical OR                - any one expressions or values would be true
// -- 3. (!)   - logical NOT               - reverse the expression or value condition
// -- 4. (&&=) - logical AND assignment    - if first value is true assign the second one to first
// -- 5. (||=) - logical OR assignment     - if first value is false assign the second one to first