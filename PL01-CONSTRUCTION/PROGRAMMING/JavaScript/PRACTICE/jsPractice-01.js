// -----------------------------------------------------------------------
// JAVASCRIPT SCOPE
// -----------------------------------------------------------------------
// 01 in javascript (objects | functions) are also variable
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

// ------------------------------------------------------------------------------
var global_var_a = 10;
let global_let_a = 20;
const global_const_a = 30;

function func_a() {
    var local_var_a = 11;
    let local_let_a = 22; 
    const local_const_a = 33;

    console.log('local_var_a : ' + local_var_a);
    console.log('local_let_a : ' + local_let_a);
    console.log('local_const_a : ' + local_const_a);
}

{
    var block_var_a = 100;
    let block_let_a = 200;
    const block_const_a = 300;

    console.log('block_var_a : ' + block_var_a);
    console.log('block_let_a : ' + block_let_a);
    console.log('block_const_a : ' + block_const_a);
}

if (1) {
    var if_var_a = 111;
    let if_let_a = 222;
    const if_const_a = 333;

    console.log('if_var_a : ' + if_var_a);
    console.log('if_let_a : ' + if_let_a);
    console.log('if_const_a : ' + if_const_a);
}

for (let i=0; i<1; i++) {
    var for_var_a = 101;
    let for_let_a = 202;
    const for_const_a = 303;

    console.log('for_var_a : ' + for_var_a);
    console.log('for_let_a : ' + for_let_a);
    console.log('for_const_a : ' + for_const_a);
}

console.log('global_var_a : ' + global_var_a);
console.log('global_let_a : ' + global_let_a);
console.log('global_const_a : ' + global_const_a);
// console.log('local_var_a : ' + local_var_a);
// console.log('local_let_a : ' + local_let_a);
// console.log('local_const_a : ' + local_const_a);
console.log('block_var_a : ' + block_var_a);
// console.log('block_let_a : ' + block_let_a);
// console.log('block_const_a : ' + block_const_a);
console.log('if_var_a : ' + if_var_a);
// console.log('if_let_a : ' + if_let_a);
// console.log('if_const_a : ' + if_const_a);
console.log('for_var_a : ' + for_var_a);
// console.log('for_let_a : ' + for_let_a);
// console.log('for_const_a : ' + for_const_a);
func_a();

// ------------------------------------------------------------------------------

