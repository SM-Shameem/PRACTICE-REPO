console.log('JAVASCRIPT SCOPE ...........');
console.log('\n');

// GLOBAL SCOPE 1 --------------------------------------------------------
var var_aaa = 10;
let let_aab = 20;
const const_aac = 30;

const const_aad = {
    propertyOne: null,
    propertyTwo: null,
    method: function(argOne, argTwo) {
        this.propertyOne = argOne;
        this.propertyTwo = argTwo;
        return this.propertyOne + this.propertyTwo;
    }
};

const const_aae = function(argOne, argTwo) {
    var localVar_One = argOne;
    let localLet_One = argTwo;
    return localVar_One + localLet_One;
};

console.log('var_aaa - ' + var_aaa);
console.log('let_aab - ' + let_aab);
console.log('const_aac - ' + const_aac);
console.log('const_aad.method - ' + const_aad.method(var_aaa, let_aab));
console.log('const_aae - ' + const_aae(const_aac, 10));
console.log('const_aad - ' + const_aad);
console.log('const_aae - ' + const_aae);
console.log('\n');

// GLOBAL SCOPE 2 --------------------------------------------------------
function func_aba() {
    var localVar_One = 10;
    localGlobal_One = 20;

    console.log('localVar_One - ' + localVar_One);
    console.log('localGlobal_One - ' + localGlobal_One);
}

func_aba();
// console.log('localVar_One - ' + localVar_One);
console.log('localGlobal_One - ' + localGlobal_One);

// global variable and window object 
var var_abb = 11;
let let_abc = 22;
const const_abd = 33;

console.log('var_abb - ' + var_abb);
console.log('let_abc - ' + let_abc);
console.log('const_abd - ' + const_abd);
console.log('window.var_abb - ' + window.var_abb);
console.log('window.let_abc - ' + window.let_abc);
console.log('window.const_abd - ' + window.const_abd);
console.log('\n');

// BLOCK SCOPE 1 ---------------------------------------------------------
{
    var blockVar_aca = 11;
    let blockLet_acb = 22;
    const blockConst_acc = 33;    
    var blockVar_acd = {
        propertyOne: null,
        propertyTwo: null,
        method: function() {
            this.propertyOne = arguments[0];
            this.propertyTwo = arguments[1];
            return this.propertyOne - this.propertyTwo;
        }
    };

    var blockVar_ace = function() {
        var localVar_One = arguments[0];
        let localLet_One = arguments[1];
        return localVar_One + localLet_One;
    };

    const blockConst_acf = {
        propertyOne: null,
        propertyTwo: null,
        method: function() {
            this.propertyOne = arguments[0];
            this.propertyTwo = arguments[1];
            return this.propertyOne + this.propertyTwo;
        }
    };

    const blockConst_acg = function() {
        var localVar_One = arguments[0];
        let localLet_One = arguments[1];
        return localVar_One + localLet_One;
    };

    console.log('blockVar_aca - ' + blockVar_aca);
    console.log('blockLet_acb - ' + blockLet_acb);
    console.log('blockConst_acc - ' + blockConst_acc);
    console.log('blockVar_acd.method - ' + blockVar_acd.method(blockVar_aca, blockLet_acb));
    console.log('blockVar_ace - ' + blockVar_ace(blockConst_acc, 200));
    console.log('blockConst_acf.method - ' + blockConst_acf.method(blockVar_aca, blockLet_acb));
    console.log('blockConst_acg - ' + blockConst_acg(blockConst_acc, 200));
}

console.log('blockVar_aca - ' + blockVar_aca);
// console.log('blockLet_acb - ' + blockLet_acb);
// console.log('blockConst_acc - ' + blockConst_acc);
console.log('blockVar_acd.method - ' + blockVar_acd.method(blockVar_aca, 20));
console.log('blockVar_ace - ' + blockVar_ace(blockVar_aca, 10));
// console.log('blockConst_acd.method - ' + blockConst_acd.method(blockVar_aca, 20));
// console.log('blockConst_ace - ' + blockConst_ace(blockVar_aca, 10));
console.log('\n');

// BLOCK SCOPE 2 ---------------------------------------------------------
if (null == null) {
    var blockVar_ada = 1;
    let blockLet_adb = 2;
    const blockConst_adc = 3;

    console.log('blockVar_ada - ' + blockVar_ada);
    console.log('blockLet_adb - ' + blockLet_adb);
    console.log('blockConst_adc - ' + blockConst_adc);
}

for (let i = 1; i < 2; i++) {
    var blockVar_add = 11;
    let blockLet_ade = 22;
    const blockConst_adf = 33;

    console.log('i - ' + i);
    console.log('blockVar_add - ' + blockVar_add);
    console.log('blockLet_ade - ' + blockLet_ade);
    console.log('blockConst_adf - ' + blockConst_adf);
}

do {
    var blockVar_adg = 10;
    let blockLet_adh = 20;
    const blockConst_adi = 30;

    console.log('blockVar_adg - ' + blockVar_adg);
    console.log('blockLet_adh - ' + blockLet_adh);
    console.log('blockConst_adi - ' + blockConst_adi);
    blockVar_add++;
} while (blockVar_add == 11);

console.log('blockVar_ada - ' + blockVar_ada);
// console.log('blockLet_adb - ' + blockLet_adb);
// console.log('blockConst_adc - ' + blockConst_adc);
// console.log('i - ' + i); 
console.log('blockVar_add - ' + blockVar_add);
// console.log('blockLet_ade - ' + blockLet_ade);
// console.log('blockConst_adf - ' + blockConst_adf);
console.log('blockVar_adg - ' + blockVar_adg);
// console.log('blockLet_adh - ' + blockLet_adh);
// console.log('blockConst_adi - ' + blockConst_adi);

if (null == null) 
    var blockVar_adj = 111;

// if (null == null) 
//     let blockLet_adk = 222;

// if (null == null)
//     const blockConst_adl = 333;

for (var i = 0; i < 1; i++)
    var blockVar_adm = i;

for (i = 0; i < 1; i++);
    let blockLet_adn = i;

for (i = 0; i < 1; i++);
    const blockConst_ado = i;

// while (i == 1)   ---- accepted but is infinitive
    var blockVar_adp = 1;     

// while (i == 1) 
//     let blockLet_adq = 2;

// while (i == 1) 
//     const blockConst_adr = 3;

console.log('blockVar_adj - ' + blockVar_adj);
console.log('i - ' + i);
console.log('blockVar_adm - ' + blockVar_adm);
console.log('blockLet_adn - ' + blockLet_adn);
console.log('blockConst_ado - ' + blockConst_ado);
console.log('blockVar_adp - ' + blockVar_adp);
console.log('object definition does not accept keyword - var | let | const');
console.log('\n');

// LOCAL SCOPE | PARAMETER -----------------------------------------------
function func_aea(argOne, argTwo, argThree) {
    var localVar_One = 11;
    let localLet_One = 22;
    const localConst_One = 33;
    const localConst_Two = {
        propertyOne: localVar_One,
        propertyTwo: localLet_One,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    const localFunc_One = function() {
        console.log('argOne - ' + argOne);
        console.log('argTwo - ' + argTwo);
        console.log('argThree - ' + argThree);
        console.log('localVar_One - ' + localVar_One);
        console.log('localLet_One - ' + localLet_One);
        console.log('localConst_One - ' + localConst_One);
        console.log('localConst_Two.method - ' + localConst_Two.method());
    };

    localFunc_One();
}

const func_aeb = function() {
    var localVar_One = 11;
    let localLet_One = 22;
    const localConst_One = 33;

    const localConst_Two = {
        propertyOne: localVar_One,
        propertyTwo: localLet_One,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    const localFunc_One = function() {
        console.log('argOne - ' + arguments[0]);
        console.log('argTwo - ' + arguments[1]);
        console.log('argThree - ' + arguments[2]);
        console.log('localVar_One - ' + localVar_One);
        console.log('localLet_One - ' + localLet_One);
        console.log('localConst_One - ' + localConst_One);
        console.log('localConst_Two.method - ' + localConst_Two.method());
    };

    localFunc_One();
}

func_aea(10, 20, 30);
// localFunc_One();
// console.log('argOne - ' + argOne);
// console.log('argTwo - ' + argTwo);
// console.log('argThree - ' + argThree);
// console.log('localVar_One - ' + localVar_One);
// console.log('localLet_One - ' + localLet_One);
// console.log('localConst_One - ' + localConst_One);
// console.log('localConst_Two.method - ' + localConst_Two.method());

func_aeb(100, 200, 300);
console.log('\n');

// -----------------------------------------------------------------------
// JAVASCRIPT SCOPE
// -----------------------------------------------------------------------
// 01 in javascript (object | function) are also variable
// -- scope determine the accessibility of variable
// -- there are 3 (three) scopes in javascript - (GLOBAL | LOCAL | BLOCK)
// -- life time of a (global) variable - from opening web page till closing
// -- life time of a (local) variable - from calling its function till ending
// -- life time of a (block) variable - inside its block only
//    blocks are ({ } | if { } | for { } | while { }) but not (function)

// 02 we can define variable with (var | let | const) keyword
// -- before ES6 (2015), there has only two scope (GLOBAL | LOCAL)
//    and only the keyword (var) is used to declare variable
// -- after ES6 (2015) there has two additional keywords (let | const)
//    these keywords used to specify the (BLOCK) scope

// 03 in (GLOBAL | LOCAL) scope (var | let | const) acts just like same
// -- (let | const) variables are not accessible outside its block but
//    (var) variable can does, so (var) has no (BLOCK) scope

// 04 if we assign value to an identifier without specify its declaration
//    it will automatically become (GLOBAL) even inside function also
// -- as if it is only initialize not declared this can not hoisted

// 05 in javascript, (GLOBAL) scope is the javascript environment
// -- in HTML, (GLOBAL) scope is the (browser object)
// -- (GLOBAL) variable using (var) belong to the (window object)
// -- (GLOBAL) variable using (let | const) do not belong to (window object)

// 06 (local variable | parameter) both are local of its function scope
// -- we can use (same name) of (local variable | parameter) of different
//    function because each function creates its own scope