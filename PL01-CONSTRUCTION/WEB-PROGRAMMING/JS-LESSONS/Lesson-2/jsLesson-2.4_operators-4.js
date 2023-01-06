console.log('JAVASCRIPT OPERATOR 4 ................. ');

function func_iaa(numOne, numTwo) {
    // different number system representation
    console.log('decimal[10]               : ' + (numOne).toString(10));
    console.log('decimal > octal[8]        : ' + (numOne).toString(8));
    console.log('decimal > hex-decimal[16] : ' + (numOne).toString(16));
    console.log('decimal > binary[2]       : ' + (numOne).toString(2));
    console.log('\n');
    console.log('decimal[10]               : ' + (numTwo).toString(10));
    console.log('decimal > octal[8]        : ' + (numTwo).toString(8));
    console.log('decimal > hex-decimal[16] : ' + (numTwo).toString(16));
    console.log('decimal > binary[2]       : ' + (numTwo).toString(2));
}

function func_iab(numOne, numTwo) {
    // bitwise AND
    // bitwise OR
    // bitwise XOR
    console.log(
        'AND - ' + numOne + ' & ' + numTwo + ' (' +
        (numOne).toString(2) + ' & ' + (numTwo).toString(2) + ') : ' +
        (numOne & numTwo).toString(2) + ' > ' +
        (numOne & numTwo).toString(10)
    );

    console.log(
        'OR  - ' + numOne + ' | ' + numTwo + ' (' +
        (numOne).toString(2) + ' | ' + (numTwo).toString(2) + ') : ' +
        (numOne | numTwo).toString(2) + ' > ' +
        (numOne | numTwo).toString(10)
    );

    console.log(
        'XOR - ' + numOne + ' ^ ' + numTwo + ' (' +
        (numOne).toString(2) + ' ^ ' + (numTwo).toString(2) + ') : ' +
        (numOne ^ numTwo).toString(2) + ' > ' +
        (numOne ^ numTwo).toString(10)
    );
}

function func_iac(numOne, numTwo) {
    // bitwise NOT
    // bitwise 
    // bitwise
    // bitwise
    console.log(
        'NOT - ' + '~' + (numOne) + ' (~' +
        (numOne).toString(2) + ' ) : ' + (~numOne) + ' > ' +
        (~numOne).toString(2)
    );
}

const valueOne = 1;
const valueTwo = 1;
console.log('\nfunc_iaa : bitwise operator .....'); func_iaa(valueOne, valueTwo);
console.log('\nfunc_iab : bitwise operator .....'); func_iab(valueOne, valueTwo);
console.log('\nfunc_iac : bitwise operator .....'); func_iac(valueOne, valueTwo);

// -------------------------------------------------------------------------------
// Bitwise Operator
// -------------------------------------------------------------------------------
// 07 bitwise-operators are used to bit-operation
// -- in JavaScript there are 7 (seven) bitwise-operators
// -- 1. (&)   - AND
// -- 2. (|)   - OR
// -- 3. (^)   - XOR
// -- 4. (~)   - NOT
// -- 5. (<<)  - left-shift (ZERO-fill)
// -- 6. (>>>) - unsigned right-shift (ZERO-fill)
// -- 7. (>>)  - signed right-shift

// 08 bitwise-logical assignment operators
// -- this are bitwise logical assignment operators
// -- 1. (&=)    - x &= y     - x = x & y    - this operator ANDs a value
// -- 2. (|=)    - x |= y     - x = x | y    - this operator ORs a value
// -- 3. (^=)    - x ^= y     - x = x ^ y    - this operator XORx a value
// -- bitwise-shift Assignment operators
// -- this are bitwise shift assignment operators
// -- 4. (<<=)   - x <<= y    - x = x << y    - first (left shifts) then assign value
// -- 5. (>>=)   - x >>= y    - x = x >> y    - first (right shifts) then assign value (signed)
// -- 6. (>>>=)  - x >>>= y   - x = x >>> y   - first (right shifts) then assign value (unsigned)

// -------------------------------------------------------------------------------
// JavaScript Bit-field
// -------------------------------------------------------------------------------
// 01 in JavaScript, the (bit operators) works on 32 bit-numbers
// -- any numeric operand in the operation is converted into a 32 bit-numbers
// -- the result is converted back to a JavaScript numbers

// 02 JavaScript use (32 bit signed) numbers
// -- (~ 5) is a (4 bit unsigned) number (bit operation using NOT operator)
// -- the (~) NOT-operator (invert) all the bits of an operation

// 03 in case of (4 bit) number bit (NOT) operation -> (~5) = 10
// 0000 - 0
// 0001 - 1 | 0110 - 6
// 0010 - 2 | 0111 - 7
// 0011 - 3 | 1000 - 8
// 0100 - 4 | 1001 - 9
// 0101 - 5 | 1010 - 10

// 04 automatic sig converted operation
// 1011 - 11
// 1100 - 12
// 1101 - 13
// 1110 - 14
// 1111 - 15

// 05 bit addition (review the bit operation)
// 0001 - 1 | 1111 - 15
// 0010 - 2 | 0001 - 1
// ---------  ----------
// 0011 - 3 | 1110 - (-14)

// 06 but the above operation in JavaScript will return (-6)
// 0000 0000 0000 0000 0000 0000 0000 0000 - 0
// 0000 0000 0000 0000 0000 0000 0000 0001 - 1
// 0000 0000 0000 0000 0000 0000 0000 0010 - 2
// 0000 0000 0000 0000 0000 0000 0000 0011 - 3
// 0000 0000 0000 0000 0000 0000 0000 0100 - 4
// 0000 0000 0000 0000 0000 0000 0000 0101 - 5

// - (~5) operation -
// 1111 1111 1111 1111 1111 1111 1111 1010 - (-6)

// -------------------------------------------------------------------------------
// Binary Numbers and Conversion
// -------------------------------------------------------------------------------
// 09 binary numbers
// 10 converting decimal to binary | binary to decimal