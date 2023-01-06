console.log('JAVASCRIPT VARIABLE ...........');

// VARIABLE --------------------------------------------------------------
// console.log('localGlobal_one - ' + localGlobal_one);
console.log('\n'); func_daa();
console.log('localGlobal_one - ' + localGlobal_one);

function func_daa() {    
    var localVar_one = 10;
    let localLet_one = 20;
    const localConst_one = 30;
    localGlobal_one = 40;

    console.log('localVar_one - ' + localVar_one);
    console.log('localLet_one - ' + localLet_one);
    console.log('localConst_one - ' + localConst_one);
    console.log('localGlobal_one - ' + localGlobal_one);
}

console.log('localGlobal_one - ' + localGlobal_one);

function func_dab() {
    var localVar_one = 10;
    var localVar_two = 10.50;
    var localVar_three = 'string-one';
    var localVar_four = true;
    let localLet_one = false;
    let localLet_two = 'string-two'
    const localConst_one = 111;
    const localConst_two = 'string-three';

    console.log('localVar_one - ' + localVar_one);
    console.log('localVar_two - ' + localVar_two);
    console.log('localVar_three - ' + localVar_three);
    console.log('localVar_four - ' + localVar_four);
    console.log('localLet_one - ' + localLet_one);
    console.log('localLet_two - ' + localLet_two);
    console.log('localConst_one - ' + localConst_one);
    console.log('localConst_two - ' + localConst_two);

    localVar_one = 'string-one';
    localLet_one = 10;
    // localConst_one = true;

    console.log('localVar_one - ' + localVar_one);
    console.log('localLet_one - ' + localLet_one);
    console.log('localConst_one - ' + localConst_one);

    localVar_one = localLet_two;
    localLet_one = localConst_two;
    // localConst_one = localVar_two;

    console.log('localVar_one - ' + localVar_one);
    console.log('localLet_one - ' + localLet_one);
    console.log('localConst_one - ' + localConst_one);
}

function func_dac() {
    // const i;
    const x = 10;
    let sum = x;
    let division = x / 5;
    var string_variable = 'string';
    var numericVariable = 10.4;
    const _valueOne = 5;
    let $valueTwo = 10;
    var value$three;

    // _valueOne = 5.5;
    $valueTwo = 10.20;
    value$three = true;

    // console.log('i - ' + i);
    console.log('x - ' + x);
    console.log('sum - ' + sum);
    console.log('division - ' + division);
    console.log('string_variable - ' + string_variable);
    console.log('numericVariable - ' + numericVariable);
    console.log('_valueOne - ' + _valueOne);
    console.log('$valueTwo - ' + $valueTwo);
    console.log('value$three - ' + value$three);
}

function func_dad() {
    const localConst_one = 1, localConst_two = 2, localConst_three = 3;
    let localLet_one,
        localLet_two,
        localLet_three;
    var localVar_one, localVar_two,
        localVar_three = 300,
        localVar_four;

        console.log('localConst_one - ' + localConst_one);
        console.log('localConst_two - ' + localConst_two);
        console.log('localConst_three - ' + localConst_three);
        console.log('localLet_one - ' + localLet_one);
        console.log('localLet_two - ' + localLet_two);
        console.log('localLet_three - ' + localLet_three);
        console.log('localVar_one - ' + localVar_one);
        console.log('localVar_two - ' + localVar_two);
        console.log('localVar_three - ' + localVar_three);
        console.log('localVar_four - ' + localVar_four);

        localLet_one = true;
        localLet_two = 'string';
        localLet_three = 3.3;
        localVar_four = localLet_one + localLet_three;

        console.log('localLet_one - ' + localLet_one);
        console.log('localLet_two - ' + localLet_two);
        console.log('localLet_three - ' + localLet_three);
        console.log('localVar_four - ' + localVar_four);
}

function func_dae() {
    var localVar_one = 10;
    let localLet_one = 20;
    const localConst_one = 30;
    localGlobal_two = 40;

    console.log('localVar_one - ' + localVar_one);
    console.log('localLet_one - ' + localLet_one);
    console.log('localConst_one - ' + localConst_one);
    console.log('localGlobal_two - ' + localGlobal_two);

    var localVar_one;
    // let localLet_one;
    // const localConst_one;
    localGlobal_two = 50;

    console.log('localVar_one - ' + localVar_one);
    console.log('localLet_one - ' + localLet_one);
    console.log('localConst_one - ' + localConst_one);
    console.log('localGlobal_two - ' + localGlobal_two);
}

console.log('\nfunc_daa ..........'); func_daa();
console.log('\nfunc_dab ..........'); func_dab();
console.log('\nfunc_dac ..........'); func_dac();
console.log('\nfunc_dad ..........'); func_dad();
console.log('\nfunc_dae ..........'); func_dae();

// -----------------------------------------------------------------------
// JavaScript Variables (keyword)
// -----------------------------------------------------------------------
// 01 variables are containers for storing data (storing data values)
// -- javascript variables are dynamic, that means it does not specify any
//    datatype, you can assign any type of data to a variable and can change
// -- there are 4 ways to declare a javascript variable
//     - using (var)
//     - using (let)
//     - using (const)
//     - only assigning value to an identifier without declaring it

// 02 when to use javascript (var | let | const)
// -- always declare javascript variables with (var | let | const) keyword
// -- the (var) keyword is used in all javascript code from 1995 to 2015
// -- the (let and const) keywords are added to javascript in 2015
// -- NB: if you want your code to run in older browser, you must use (var)

// 03 when to use javascript (var | let | const)
// -- if you want a general rule: always declare variables with (const)
// -- if you think the value of the variable can change, ust (let)
// -- value of (const) variable cannot be changed
// -- in a block, (let | const) are used in (block) scope to protect data
//    in its block but does not (var) do it

// 04 declaring variable without keyword (var | let | const)
// -- you can declare a variable without declaration keyword but then must
//    have to assign the value to that identifier, else it will creates error
// -- here, this identifier works as like the variable defined with (var)
// -- in this case, this identifier can not hoisted and it become global
//    even in function also, but the function have to call first,
//    and from here the variable will appear as global

// -----------------------------------------------------------------------
// JavaScript Variables (Identifiers)
// -----------------------------------------------------------------------
// 06 declaring a javascript variable
// -- creating a variable in javascript is called declaring a variable
// -- you declare a javascript variable with the (var | let | const) keyword
// -- after declaration, variable has no value, technically it is (undefined)

// 07 one statement, many variable
// -- you can declare many variables in one statement
// -- start with (var | let | const) and separate variable-names by comma
// -- you can also assign value to all or none or specific variable
// -- this statement or declaration can span multiple lines

// 08 re-declaring variable
// -- if you re-declare a javascript variable declared with (var),
//    it will not lose its value
// -- you cannot re-declare a variable declared with (let | const)

// -----------------------------------------------------------------------
// JavaScript Variables (Naming Convention)
// -----------------------------------------------------------------------
// 09 javascript identifiers
// -- all javascript variables must be identified with unique names
// -- these unique names are called identifiers
// -- identifiers can be short names or more descriptive names
// -- general rules for constructing names for (unique identifiers) are -
//     - names can contain (letters | digits | underscores | dollar signs)
//     - names must begin with a letter
//     - names can also begin with ($ and _)
//     - names are case-sensitive
//     - reserved words (keywords) cannot be used as names

// 10 javascript dollar sign ($)
// -- since javascript treats a dollar sign as a letter, identifiers containing
//    ($) are valid variable names
// -- using the dollar sign is not very common in javascript, but professional
//    programmers often use it as an alias for the main function in a JS library
// -- in the JS library jQuery, for instance, the main function ($)
//    is used to select HTML elements.
// -- in jQuery $('p'); means, select all (p) elements

// 11 javascript underscore (_)
// -- since javascript treats underscore as a letter,
//    identifiers containing _ are valid variable names
// -- using the underscore is not very common in javascript, but a convention
//    among professional programmers is to use it as an alias for,
//    private (hidden) variable

// -----------------------------------------------------------------------
// JavaScript Variables (Assigning Value)
// -----------------------------------------------------------------------
// 12 assigning value to variable
// -- to assign a value to the variable, use the equal (=) sign
// -- you can also assign a value to the variable when you declare it
// -- it's a good practice to declare all variables at the beginning of script

// 13 the assignment operator
// -- the equal sign (=) is an assignment operator, not an equal-to operator
// -- the equal-to operator is written like (==) in javascript

// 14 value = undefined
// -- in computer programs, variables are often declared without a value
// -- the value can be something that has to be calculated, or something that
//    will be provided later, like user input
// -- a variable declared without a value will have the value (undefined)

// 15 javascript data-types
// -- javascript variables can hold numbers and text values
// -- in programming, text values are called text string
// -- js can handle may types of data, but for now,
//    just think of numbers and strings
// -- strings are written inside double or single quotes,
// -- numbers are written without quotes
// -- if you put a number in quotes, it will be treated as a text string

// -----------------------------------------------------------------------
// 01 javascript variables are dynamic types
// 02 variables can be declare using any of these three (var | let | const)
// 03 the (var) is traditional and is not (block) level keyword
// -- after ES6 2015 (let | const) are used to declare variable, these two
//    keywords are basically (block) level keyword
// -- the (var) can be hoisted but (let | const) are not hoisted
// -- any old browser before 2015 can not recognize (let | const)
// -- but now you should generally use (const) to declare variable if
//    values are constant else should use (let)
// 04 we can create variable without declaring it by assigning value to
//    an identifier, in this case it works like global as (var)
// -- if we create variable such this way inside a function till
//    it acts like global
// -- though initialization has no hoisting such this variable can't hoisted

// 05 naming convention of a variable is as same as identifier
// -- though ($ and _) can be used as first letter but both of these two
// -- character have different purpose of use in javascript also
// 06 we can assign value to a variable at the time of declaration it or
//    later, by using the (=) sign but not (==) sign
// -- without assigning value the declared variable have value (undefine)

// 07 we can declare more than one variables in one statement, the
//    procedure is - first any ot these keywords (var | let | const)
//    then (variableNames) separated by (,) comma
// -- this declaration can be span in multi-line
// -- can assign value to all or none or specific variables at declaration
// -----------------------------------------------------------------------