// =======================================================================
// statements
// =======================================================================
// 1. block
// 2. level
// 3. empty
// 4. expression
// 5. import 
// 6. export
// 7. debugger
// 8. with

// =======================================================================
const statement_ac1 = function () {
    // -> empty statement 
    // -> an empty statement is used to provide no statement, 
    // -- although the javascript syntax would expect one 
    // -> NB (syntax): (;)
    
    // -> NB: 
    // -> the empty statement is a semicolon (;) indicating that no 
    // -- statement will be executed, even if javascript syntax requires one
    // -> the opposite behavior, where you want multiple statements, 
    // -- but javascript only allows a single one, is possible using a 
    // -- (block statement), which combines several statements into single one

    const arr = [1, 2, 3];
    // assign all array values to 0 
    // this (for) is an empty statement
    for (let i = 0; i < arr.length; arr[i++] = 0);
    console.log(arr);

    if (condition); // this (if) does nothing 
        statement;  // so this always gets executed
}

// =======================================================================
const statement_ac2 = function () {
    // -> block statement 
    // -> a block statement is used to group zero or more statements 
    // -> the block is delimited by a pair of braces (curly brackets) and 
    // -- contains a list of zero or more statements and declaration 
    // -> NB (Syntax) 
    // -> statements and declarations grouped within the block statement 

    // -> NB 
    // -> the block statement is often called the compound statement in 
    // -> it allows to use multiple statements where javascript expects 
    // -- only one statements 
    // -> combining statements into blocks is a common practice in javascript,
    // -- especially when used in association with control flow statements 
    // -- like (if .. else | for) 
    // -> the opposite behavior is possible using an (empty statement), when 
    // -- you provide no statement, although one is required 

    // -> in addition, combined with block-scoped declarations 
    // -- like (let | const and class), blocks can prevent temporary variables
    // -- from polluting the global namespace, just like (IIFEs) do

    // -> NB (block-scope rules with (var) or (function) declaration (non-strict))
    // -> variable declared with (var) or created by (function declaration) in
    // -- non-strict mode do not have block scope 
    // -> variable introduced within a block are scoped to the containing 
    // -- function or script, and the effects of setting them persist beyond 
    // -- the block itself 
    // -> in non-strict mode, function declarations inside blocks behave 
    // -- strangely, so should not use them 

    // -> NB (block-scope rules with (let | const | class | function) declaration (strict))
    // -> by contrast, identifier declared with (let | const | class) do have 
    // -- block scope
    // -> note that the block-scoped (const) does not throw a (syntaxError) 
    // -- because it can be declared uniquely within the block 
    // -> in (strict) mode, function declarations inside blocks are scoped 
    // -- to that block and are hoisted 

    // -> NB (example) 
    // -> a (if | for | while) loop accepts a single statement as the body 
    // -> if you want to use more than one statement in the loop body, you 
    // -- can group them into one block statement 
    // -> (let | const) declaration are scoped to the containing block
    // -- this allows you to hide data from the global scope without 
    // -- wrapping it in a function
}

// =======================================================================
const statement_ac3 = function () {
    // -> expression 
    // -> an expression statement is an expression used in a place where a
    // -- statement is executed 
    // -> the expression is evaluated and its result is discarded - therefore,
    // -- it makes sense only for expression that have side effect, such as 
    // -- executing a function or updating a variable 
    // -> NB (syntax)
    // -> expression - an arbitrary expression to be evaluated. 
    // -- there are (certain expression) that may be ambiguous with other 
    // -- statement and are thus forbidden 

    // -> NB
    // -> apart from the (dedicated statement syntaxes), you can also use 
    // -- almost any (expression) as a statement on its own.
    // -> 
    // -> NB (forbidden expression)
    // -> NB (avoiding control-flow statements)
}

// =======================================================================
const statement_ac4 = function () {
    
}

// =======================================================================
const statement_ac5 = function () {
    
}

// =======================================================================
const statement_ac6 = function () {
    
}

// =======================================================================
const statement_ac7 = function () {
    
}

// =======================================================================
console.log('statement (empty) ....................'); statement_ac1();
console.log('statement (block) ....................'); statement_ac2();
console.log('statement (label) ....................'); statement_ac3();
console.log('statement (expression) ...............'); statement_ac4();
console.log('statement (export) ...................'); statement_ac5();
console.log('statement (import) ...................'); statement_ac6();
console.log('statement (debugger) .................'); statement_ac7();