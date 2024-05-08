console.log('JAVASCRIPT - VAR | LET | CONST ..........');

// VAR | LET | CONST -----------------------------------------------------
function func_eaa() {
    var localVar_one = 11;
    let localLet_one = 22;
    const localConst_one = 33;

    console.log('localVar_one - ' + localVar_one);
    console.log('localLet_one - ' + localLet_one);
    console.log('localConst_one - ' + localConst_one);

    console.log('localVar_two - ' + localVar_two);
    // console.log('localLet_two - ' + localLet_two);
    // console.log('localConst_two - ' + localConst_two);

    var localVar_one;
    // let localLet_one;
    // const localConst_one;

    var localVar_two = 44;
    let localLet_two = 55;
    const localConst_two = 66;
}

function func_eab() {
    {
        var blockVar_one = 10;
        let blockLet_one = 20;
        const blockConst_one = 30;

        console.log('blockVar_one - ' + blockVar_one);
        console.log('blockLet_one - ' + blockLet_one);
        console.log('blockConst_one - ' + blockConst_one);

        console.log('blockVar_two - ' + blockVar_two);
        // console.log('blockLet_two - ' + blockLet_two);
        // console.log('blockConst_two - ' + blockConst_two);

        var blockVar_one;
        // let blockLet_one;
        // const blockConst_one;

        var blockVar_two = 10;
        // let blockLet_two = 20;
        const blockConst_two = 30;
    }

    console.log('blockVar_one - ' + blockVar_one);
    // console.log('blockLet_one - ' + blockLet_one);
    // console.log('blockConst_one - ' + blockConst_one);

    {
        let blockLet_one = 20;
        const blockConst_one = 30;
        console.log('blockLet_one - ' + blockLet_one);
        console.log('blockConst_one - ' + blockConst_one);
    }

    if (null == null) {
        let blockLet_one = 40;
        const blockConst_one = 50;
        console.log('blockLet_one - ' + blockLet_one);
        console.log('blockConst_one - ' + blockConst_one);
    }

    // console.log('blockLet_one - ' + blockLet_one);
    // console.log('blockConst_one - ' + blockConst_one);
}

function func_eac() {
    const localConst_one = 10;
    const localConst_array = [20, 30, 40];
    const localConst_object = {
        propertyOne: 50,
        propertyTwo: 60,
        propertyThree: 70,
        method: function() {
            return this.propertyOne + this.propertyTwo + this.propertyThree;
        }
    };

    const localConst_func = function() {
        console.log('localConst_one - ' + localConst_one);
        console.log('localConst_array[0] - ' + localConst_array[0]);
        console.log('localConst_array[1] - ' + localConst_array[1]);
        console.log('localConst_array[2] - ' + localConst_array[2]);
    };

    console.log('localConst_object - ' + localConst_object.method());
    localConst_func();
}

function func_ead() {
    var localVar_array = [10, 20, 30];
    const localConst_array = [40, 50, 60];
    var localVar_object = {
        propertyOne: 11,
        propertyTwo: 22,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };
    const localConst_object = {
        propertyOne: 33,
        propertyTwo: 44,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    console.log('localVar_array - ' + localVar_array);
    console.log('localVar_object - ' + localVar_object.method());
    console.log('localConst_array - ' + localConst_array);
    console.log('localConst_object - ' + localConst_object.method());

    // (var) - (re-declare | re-assign) on (array | object)
    var localVar_array = [123, 234];
    var localVar_object = {
        propertyOne: 321,
        propertyTwo: 432,
        method: function() {
            console.log('propertyOne - ' + this.propertyOne);
            console.log('propertyTwo - ' + this.propertyTwo);
        }
    };

    console.log('localVar_array - ' + localVar_array);
    localVar_object.method();

    // var localConst_array;
    // var localConst_object;

    // localConst_array = [111, 222, 333];
    // localConst_object = {
    //     propertyOne: 100,
    //     propertyTwo: 200,
    //     method: function() {
    //         console.log('propertyOne : ' + this.propertyOne);
    //         console.log('propertyTwo : ' + this.propertyTwo);
    //     }
    // };

    // (const) - not (re-declare | re-assign) on (array | object) 
    // (const) - (re-assign) on element and create (new-element) on (array | object) 
    localConst_array[0] = 111;
    localConst_array[1] = 222;
    localConst_array[2] = 333;
    localConst_array[3] = 444;
    localConst_object.propertyOne = 100;
    localConst_object.propertyTwo = 200;
    localConst_object.propertyThree = 300;

    console.log('localConst_array - ' + localConst_array);
    console.log('localConst_object - ' + localConst_object.method());

    localConst_object.method = function() {
        return this.propertyOne - this.propertyTwo * this.propertyThree;
    };

    console.log('localConst_object - ' + localConst_object.method());
}

console.log('\nfunc_eaa ...........'); func_eaa();
console.log('\nfunc_eab ...........'); func_eab();
console.log('\nfunc_eac ...........'); func_eac();
console.log('\nfunc_ead ...........'); func_ead();

// ---------------------------------------------------------------------------
// JavaScript Variables (let Keyword)
// ---------------------------------------------------------------------------
// 01 the (let | const) keyword was introduced in ES6 (2015)
// -- these two keywords are designed to declare variable for (block) scope
// -- variable declare using (let) in (block) scope is protected in its
//    (block), as like (var) in (local or function) scope
// 02 variables defined with (let | const) must be declared before use
// 03 variables defined with (let | const) cannot be re-declared in same scope
//    but in different scope we can re-declare it
// 04 variables defined with (let | const) are also hoisted in its block
//    but not initialized, so in this state using it causes (referenceError)

// 05 variable defines with (const) must be assigned at declaration
// -- variable defines with (const) can not re-assign at later

// 06 as a general rule, always declare a variable with (const) unless you
//    know that the value will change
// -- use (const) when you declare a new (array | object | function | RegExp)
// 07 const (object | array)
// -- the keyword (const) is a little misleading
// -- it does not define a constant value, it defines a constant reference
//    to a value.
// -- because of this you can not
//    - re-assign a const value
//    - re-assign a const array
//    - re-assign a const object
// -- but you can
//    - change the elements of a const array
//    - change the properties of const object

// -----------------------------------------------------------------------
// 08 compare (var | let | const)
// -> the (let | const) have the same (local | global) scope like (var)
// -- (var) has only (global | local) scope but has no (block) scope
// -> (var) can use before declare so it hoisted at its (local | global) scope
// -- (let | const) can not use before declare at it (local | global | block)
// -> (var) can (re-declare | re-assign) at any time
// -- (let | const) can not (re-declare) in the same scope but in different
//    scope is allowed
// -> (let) can (re-assign) like (var) and not necessary to assign at declaration
// -- (const) can not (re-assign) at later and have to assign at declaration
// 09 general rule, use the (const) the declare variable you know that the
//    value will change, else should use (let)
// -----------------------------------------------------------------------