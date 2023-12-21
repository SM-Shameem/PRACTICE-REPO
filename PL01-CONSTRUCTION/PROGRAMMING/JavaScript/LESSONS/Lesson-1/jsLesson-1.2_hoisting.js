console.log('JAVASCRIPT HOISTING ...........');
console.log('\n');

// GLOBAL HOISTING -------------------------------------------------------
console.log('var_baa - ' + var_baa);
console.log('var_bab - ' + var_bab);
// console.log('let_bac - ' + let_bac);
// console.log('const_bad - ' + const_bad);
// console.log('global_bae - ' + global_bae);

var var_baa;
var var_bab = 11;

let let_bac = 100;
const const_bad = 200;
global_bae = 300;

console.log('var_bab - ' + var_bab);
console.log('let_bac - ' + let_bac);
console.log('const_bad - ' + const_bad);
console.log('global_bae - ' + global_bae);
console.log('\n');

// BLOCK HOISTING --------------------------------------------------------
console.log('blockVar_bba - ' + blockVar_bba);
// console.log('blockLet_bbb - ' + blockLet_bbb);
// console.log('blockConst_bbc - ' + blockConst_bbc);
// console.log('blockGlobal_bbd - ' + blockGlobal_bbd);

for (let i = 0; i < 3; i++) {
    console.log('blockVar_bba - ' + blockVar_bba);
    // console.log('blockLet_bbb - ' + blockLet_bbb);
    // console.log('blockConst_bbc - ' + blockConst_bbc);
    // console.log('blockGlobal_bbd - ' + blockGlobal_bbd);

    var blockVar_bba = 10;

    let blockLet_bbb = 20;
    const blockConst_bbc = 30;
    blockVar_bba = i;
    blockLet_bbb = i + 10;
    blockGlobal_bbd = 40;
}

console.log('blockGlobal_bbd - ' + blockGlobal_bbd);

console.log('blockVar_bbe - ' + blockVar_bbe);
// console.log('blockLet_bbf - ' + blockLet_bbf);
// console.log('blockConst_bbg - ' + blockConst_bbg);
// console.log('blockGlobal_bbh - ' + blockGlobal_bbh);

{
    console.log('blockVar_bbe - ' + blockVar_bbe);
    // console.log('blockLet_bbf - ' + blockLet_bbf);
    // console.log('blockConst_bbg - ' + blockConst_bbg);
    // console.log('blockGlobal_bbh - ' + blockGlobal_bbh);

    var blockVar_bbe = 11;

    let blockLet_bbf = 22;
    const blockConst_bbg = 33;
    blockGlobal_bbh = 111;

    console.log('blockLet_bbf - ' + blockLet_bbf);
    console.log('blockConst_bbg - ' + blockConst_bbg);
    console.log('blockGlobal_bbh - ' + blockGlobal_bbh);
}

console.log('blockGlobal_bbh - ' + blockGlobal_bbh);
console.log('\n');

// LOCAL HOISTING --------------------------------------------------------
// console.log('localVar_One - ' + localVar_One);
// console.log('localVar_Two - ' + localVar_Two);
// console.log('localLet_Three - ' + localLet_Three);
// console.log('localConst_Four - ' + localConst_Four);
// console.log('local_Five - ' + local_Five);

function func_bca() {
    localVar_One = 11;

    console.log('localVar_One - ' + localVar_One);
    console.log('localVar_Two - ' + localVar_Two);
    // console.log('localLet_Three - ' + localLet_Three);
    // console.log('localConst_Four - ' + localConst_Four);
    // console.log('localGlobal_Two - ' + localGlobal_Two);

    var localVar_One;
    var localVar_Two = 22;
    let localLet_Three = 33;
    const localConst_Four = 44;
    localGlobal_Two = 55;
}

func_bca();

// console.log('localVar_One - ' + localVar_One);
// console.log('localVar_Two - ' + localVar_Two);
// console.log('localLet_Three - ' + localLet_Three);
// console.log('localConst_Four - ' + localConst_Four);
console.log('localGlobal_Two - ' + localGlobal_Two);  // its become global after assign
console.log('\n');

// JAVASCRIPT HOISTING ---------------------------------------------------
function func_bda() {
    console.log('localVar_One - ' + localVar_One);
    // console.log('localLet_Two - ' + localLet_Two);
    // console.log('localConst_Three - ' + localConst_Three);
    // console.log('localGlobal_Three - ' + localGlobal_Three);
    // console.log('localVarArray[0] - ' + localVarArray[0]);
    // console.log('localVarObject.method - ' + localVarObject.method());
    console.log('localFunc_Five - ' + localFunc_Five());
    console.log('localFunc_Six - ' + localFunc_Six(11, () => 22));
    // console.log('localFunc_Seven - ' + localFunc_Seven());
    // console.log('localFunc_Eight - ' + localFunc_Eight());
    // localPromise.then((res) => { console.log(res); });
    
    var localVar_One = 1;
    let localLet_Two = 2;
    const localConst_Three = 3;
    localGlobal_Three = 4;

    var localVarArray = [ 5, 6, 7 ];
    var localVarObject = {
        propertyOne: 8,
        propertyTwo: 9,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    function localFunc_Five() {
        console.log('localFunc_Five ....');
        return localVar_One + 10; // localLet_Two;
    }

    function localFunc_Six(argOne, argTwo) {
        console.log('localFunc_Six ....');
        return argOne + argTwo();
    }

    var localFunc_Seven = function() {
        return 11 + 22; // localConst_Three + localVarArray[0];
    }

    var localFunc_Eight = () => {
        return 10 + 20;
    }

    var localPromise = Promise.resolve('promise resolved .......');
    localPromise.then((res) => { console.log(res); });
}

func_bda();
console.log('\n');

// -----------------------------------------------------------------------
// JAVASCRIPT HOISTING
// -----------------------------------------------------------------------
// 01 hoisting is javascript's default behavior of moving declaration to the
//    top of the current (script | block | function)
// -- in javascript, variables can be used before it has been declared or
//    without declaration by assigning value to it

// 02 hoisting is an unknown or overlooked behavior of many js developer
// -- if a developer doesn't understand hoisting, program may contain bugs
// -- to avoid bugs, declare all variables at the beginning of every scope

// 03 javascript hoists declaration, not hoists initialization
// -- so, only initialized variable is not hoisted also
// -- variable declared with (var) is hoisted to the top of (script | function)
// -- variable declared with (let | const) is hoisted to the top of (block)
// -- using (let) before it is declared will result in a (referenceError)
//    the variable is in a (temporal dead zone) from the start of the block
// -- using (const) before it is declared will result in a (syntax error)
//    so the code will simply not run

// -------------------------------------
// only (var | function) have hoisting
// let | const | array | object | undeclared variable don't support hoisting
// function-expression | arrow-function do not support hoisting
// promise does not support hoisting

// declaration has only hoisted
// initialization has no hoisting so function return not hoisted

// if a (function) contain un-hoisted statement 
// -- then that (function) can't hoisted
// --------------------------------------
