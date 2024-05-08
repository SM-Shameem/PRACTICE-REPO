console.log('JAVASCRIPT STRICT MODE ...........');
console.log('\n');

// VARIABLE STRICT MODE --------------------------------------------------
function func_caa() {
    // in strict mode, must have to declare variable 
    // and does not support non-existing variable
    // using variable without declaring it
    'use strict';

    var localVar_One = 11;
    // localGlobal_Four = 22;

    console.log('localVar_One - ' + localVar_One);
    // console.log('localGlobal_Four - ' + localGlobal_Four);
    console.log('localVar_Three - ' + localVar_Three);
    // console.log('localGlobal_Five - ' + localGlobal_Five);

    var localVar_Three = 33;
    // localGlobal_Five = 44;
}

// LOCAL STRICT MODE -----------------------------------------------------
function func_cab() {
    // in strict mode, must have to declare object
    // and does not support non-existing object
    // using object without declaring it
    'use strict';

    const localConst_One = {
        propertyOne: 11,
        propertyTwo: 22,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    // localGlobal_Two = { };
    // localGlobal_Two.propertyOne = 10;

    console.log('localConst_One.method - ' + localConst_One.method());
    // console.log('localVar_Three.method - ' + localVar_Three.method());

    var localVar_Three = {
        propertyOne: 100,
        propertyTwo: 200,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    console.log('localVar_Three.method - ' + localVar_Three.method());
}

function func_cac() {
    // non-writable property | write to a read-only property
    // getter-only property | write to a get-only property
    'use strict';

    const localConst_One = {
        propertyOne: 11,
        propertyTwo: 22,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };

    Object.defineProperty(localConst_One, 'propertyThree', {
        value: 33,
        Writable: false
    });

    Object.defineProperty(localConst_One, 'getSet', {
        get: function() {
            return this.propertyOne;
        },
        // set: function(arg) {
        //     this.propertyOne = arg;
        // }
    });

    // localConst_One.propertyThree = 44; // will show error | else default value
    
    console.log('localConst_One.method - ' + localConst_One.method());
    console.log('localConst_One.propertyThree - ' + localConst_One.propertyThree);

    // localConst_One.getSet = 222; // will show error | else default value (for write to get-only property)
    console.log('localConst_One.getSet - ' + localConst_One.getSet);
}

function func_cad() {
    // deleting a variable -----------
    // deleting a object -------------
    // deleting a function -----------

    // deleting a property 
    'use strict';

    var localVar_One = 10;
    let localLet_Two = 20;
    const localConst_Three = 30;
    const localConst_Four = {
        propertyOne: 40,
        propertyTwo: 50,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };
    const localConst_Five = [ 60, 70 ];
    const localConst_Six = function() {
        return localVar_One + localLet_Two;
    };

    function localFunc_One() {
        return localConst_Three;
    }

    // delete localVar_One;
    // delete localLet_Two;
    // delete localConst_Three;
    // delete localConst_Four;
    // delete localConst_Five();
    // delete localConst_Six();
    // delete localFunc_One();
    // delete localConst_Four.propertyOne;
    // delete localConst_Four.method();
    // delete Object.prototype;

    console.log('localVar_One - ' + localVar_One);
    console.log('localLet_Two - ' + localLet_Two);
    console.log('localConst_Three - ' + localConst_Three);
    console.log('localConst_Four - ' + localConst_Four);
    console.log('localConst_Five - ' + localConst_Five);
    console.log('localConst_Six - ' + localConst_Six());
    console.log('localFunc_One - ' + localFunc_One());
    console.log('localConst_Four.propertyOne - ' + localConst_Four.propertyOne);
    console.log('localConst_Four.method - ' + localConst_Four.method());
}

function func_cae() {
    // the (with) statement is not allowed 
    // duplicating parameter name 
    // the (this) in function behave differently 
    'use strict';

    // with([1, 2, 3])
    //     console.log(toString());

    // with (Math) {
    //     console.log('value - ' + cos(2));
    // };

    // function localFunc_One(argOne, argOne) {
    //     console.log('argOne - ' + argOne);
    //     console.log('argTwo - ' + argOne);
    // }

    // const localConst_One = function(argOne, argOne) {
    //     console.log('argOne - ' + argOne);
    //     console.log('argTwo - ' + argOne);
    // };

    // localFunc_One(10, 20);
    // localConst_One(30, 40);

    function localFunc_Two() {
        console.log('value of this - ' + this);
    }

    localFunc_Two();
}

function func_caf() {
    // the (eval()) is not allowed to create variable
    // the (eval()) can not use (var) to declare variable
    // the (eval()) can not use (let) to declare variable
    'use strict';

    // eval(local_One = 10);
    // eval('local_Two = 10.5');
    eval('var localVar_Three = 20.5');  // does not creating any variable
    eval('let localLet_Four = 30.5');   // does not creating any variable

    // console.log('local_One - ' + local_One);
    // console.log('local_Two - ' + local_Two);
    // console.log('localVar_Three - ' + localVar_Three);
    // console.log('localVar_Four - ' + localLet_Four);
}

function func_cag() {
    // the word (arguments) does not used as variable name 
    // the word (eval) does not used as variable name
    // some keywords do not used as variable name 
    // implements | interface | let | package
    // private | public | protected | static | yield
    'use strict';

    // var arguments = 1;
    // var eval = 2;
    // var implements = 3;
    // var interface = 4;
    // var package = 5;
    // var private = 6;
    // var public = 7;
    // var protected = 8;
    // var static = 9;
    // var yield = 0;

    console.log('arguments - ' + arguments);
    console.log('eval - ' + eval);
    // console.log('implements - ' + implements);
    // console.log('interface - ' + interface);
    // console.log('package - ' + package);
    // console.log('private - ' + private);
    // console.log('public - ' + public);
    // console.log('protected - ' + protected);
    // console.log('static - ' + static);
    // console.log('yield - ' + yield);
}

function func_cah() {
    // octal number does not support 
    // octal escape character does not support
    'use strict';

    var localVar_One;
    var localVar_Two;
    // localVar_One = 010;
    // localVar_Two = "\014";

    console.log('localVar_One - ' + localVar_One);
    console.log('localVar_Two - ' + localVar_Two);
}

console.log('\n'); func_caa();
console.log('\n'); func_cab();
console.log('\n'); func_cac();
console.log('\n'); func_cad(); // -> not clear
console.log('\n'); func_cae();
console.log('\n'); func_caf();
console.log('\n'); func_cag();
console.log('\n'); func_cah();

// -----------------------------------------------------------------------
// JAVASCRIPT STRICT
// -----------------------------------------------------------------------
// 01 the ('use strict') directive was new in ECMAScript5
// -- ('use strict') defines that js code should be executed in strict mode
// -- strict mode makes it easier to write secure and clean javascript code
// -- strict mode changes previously accepted (bad syntax) into real error

// 02 strict mode syntax, was designed to be compatible with older js-version
// -- it is not a statement, but a literal expression,
// -- compiling numeric literal or a string literal in javascript program
//    has no side effect. ('use strict') is just like a string and it only
//    matter to new compiler that understand the meaning of it
// -- ('use strict') is just a string, so IE9 will not through an error
//    even if it does not understand it

// 03 you can use ('use strict') in all your program
// -- to declare strict mode, just add ('use strict') at the beginning
// -- declared at the beginning of a script, it has (global scope)
// -- declare inside of a function, it has (local scope)
// -- strict mode supports js-hoisting

// 04 in strict mode, it will through an error to any assignment below -
// - a non-existing variable | a non-existing object
// - a non-existing property | a non-writable property
// - a getter-only property

// 05 using a variable without declaring it, is not allowed
// -- using an object without declaring it, is not allowed
// -- writing to a read-only property is not allowed
// -- writing to a get-only property is not allowed
// -- deleting an undetectable property is not allowed
// -- duplicating parameter name is not allowed

// -- the (with) statement is not allowed
// -- the (this) keyword in function behave differently -
//    the (this) keyword refers to the object that called the function
//    if the object is not specified, function will return (undefine)
//    but in normal mode function will return global object (window)

// -- octal numeric literals are not allowed
// -- octal escape characters are not allowed
// -- the (eval()) is not allowed to create variable in the calling scope
// -- the (eval()) can not declare a variable using the (var) keyword
// -- the (eval()) can not declare a variable using the (let) keyword

// -- the (eval) cannot be used as a variable
// -- word (arguments) cannot be used as a variable
// -- keywords for future javascript version can not be used as variable
//    implements | interface | let | package
//    private | public | protected | static | yield

// -- deleting variable and object is not allowed
// -- deleting function is not allowed