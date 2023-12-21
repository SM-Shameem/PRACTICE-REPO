console.log('JavaScript Review (scope | hoisting | strict | variable) .');
// -----------------------------------------------------------------------
function FuncJSP_101() {
    // 01. javascript has three types of scope - (local | global | block)
    // 02. (var) has (local | global) but (let | const) have (block) also
    // 03. (var | let | const) act just like same in (local | global)

    // 04. function (parameter) acts as (local) in its function scope 
    // 05. (var) belongs to (window) object but (let | const) does not   
    // 06. without declaration, only assigned variable act as (global) even in 
    //     function also 
    var localGlobalVar = 11;
    let localGlobalLet = 22;
    const localGlobalConst = 33;

    const localConst_exp = function(argOne, argTwo) {
        var localVar = argOne;
        let localLet = argTwo;
        const localConst = arguments[2];
        localGlobal_one = arguments[3];

        console.log('localVar - ' + localVar);
        console.log('localLet - ' + localLet);
        console.log('localConst - ' + localConst);
        console.log('localGlobal_one - ' + localGlobal_one);
    }

    for (let i = 0; i < 1; i++) {
        var scopeVar = localGlobalVar;
        let scopeLet = localGlobalLet;
        const scopeConst = localGlobalConst;
        scopeGlobal_one = undefined;    // localGlobal = is not executed

        console.log('scopeVar - ' + scopeVar);
        console.log('scopeLet - ' + scopeLet);
        console.log('scopeConst - ' + scopeConst);
        console.log('scopeGlobal_one - ' + scopeGlobal_one);
    }

    localConst_exp(10, 20, 30, 40);
    console.log('localGlobalVar - ' + localGlobalVar);
    console.log('localGlobalLet - ' + localGlobalLet);
    console.log('localGlobalConst - ' + localGlobalConst);

    // console.log('localVar - ' + localVar);
    // console.log('localLet - ' + localLet);
    // console.log('localConst - ' + localConst);
    console.log('localGlobal_one - ' + localGlobal_one);

    // console.log('argOne - ' + argOne);
    // console.log('argTwo - ' + argTwo);
    console.log('scopeVar - ' + scopeVar);
    // console.log('scopeLet - ' + scopeLet);
    // console.log('scopeConst - ' + scopeConst);
    console.log('scopeGlobal_one - ' + scopeGlobal_one);

    // console.log('window.localGlobalVar - ' + window.localGlobalVar);
    // console.log('window.localGlobalLet - ' + window.localGlobalLet);
    // console.log('window.localGlobalConst - ' + window.localGlobalConst);
    // console.log('window.localGlobal_one - ' + window.localGlobal_one);
    // console.log('window.scopeGlobal_one - ' + window.scopeGlobal_one);
}

var globalVar = 111;
let globalLet = 222;
const globalConst = 333;
global_one = 444;
// console.log('window.globalVar - ' + window.globalVar);
// console.log('window.globalLet - ' + window.globalLet);
// console.log('window.globalConst - ' + window.globalConst);
// console.log('window.global_one - ' + window.global_one);
// console.log('window.localGlobal_one - ' + window.localGlobal_one);
// console.log('window.scopeGlobal_one - ' + window.scopeGlobal_one);
// -----------------------------------------------------------------------
function FuncJSP_102() {
    // 07. only (var | function) have hoisting
    // 08. let | const | array | object | undeclared variable don't support hoisting
    // 09. function-expression | arrow-function do not support hoisting
    // 10. promise does not support hoisting

    // 11. for (var), only declaration hoisted but initialization is not
    // 12. in-case of (function), declaration and initialization are hoisted 
    // 13. if a (function) contain any (un-hoisted statement) then is not hoisted
    console.log('localGlobal_var - ' + localGlobal_var);
    // console.log('localGlobal_let - ' + localGlobal_let);
    // console.log('localGlobal_const - ' + localGlobal_const);
    // console.log('localGlobal_two - ' + localGlobal_two);
    // console.log('localGlobal_array - ' + localGlobal_array);
    // console.log('localGlobal_object - ' + localGlobal_object.method());
    // console.log('localGlobal_exp - ' + localGlobal_exp());
    // console.log('localGlobal_arrow - ' + localGlobal_arrow());
    console.log('localGlobal_funcOne - ' + localGlobal_funcOne(1));

    var localGlobal_var = 10;
    let localGlobal_let = 20;
    const localGlobal_const = 30;
    localGlobal_two = 40;
    const localGlobal_array = [11, 22, 33];
    const localGlobal_object = {
        propertyOne: 44,
        propertyTwo: 55,
        method: function() {
            return this.propertyOne + this.propertyTwo;
        }
    };
    const localGlobal_exp = function() {
        return localGlobal_var + localGlobal_let;
    }
    const localGlobal_arrow = () => localGlobal_array;

    function localGlobal_funcOne(arg) {
        if (arg == null)
            return localGlobal_array[0] + localGlobal_array[1];
        else 
            return 10 + 20;
    }
}
// -----------------------------------------------------------------------
function FuncJSP_103() {
    // 14. ('use strict') it just an (string expression) not a (statement)
    // --- and it changes previously accepted bad syntax into real error
    // 15. declaring at the beginning of a script is become (global) and 
    // --- inside a function is become (local)
    // 16. (strict) mode through an error in case of - 
    // --- non existing (variable | object | property)
    // --- on writable property | get only property
    // --- deleting un-deletable property 
    // --- duplicating parameter 
    // --- octal (literal | escape character)
    // --- (this) return (undefine) in case of strict mode for un-specified object 
    // --- (with) statement 
    // --- (eval) can not used to declare variable
    // --- (eval | arguments) as a name of an identifier 
    // --- (implements | interface | let | package) as a name of an identifier
    // --- (private | public | protected | static | yield) as an identifier 
    const localGlobal_exp_a = function() {
        'use strict';
        nestedFunc();

        function nestedFunc() {
            var localVar = 10;
            let localLet = 20;
            const localConst = 30;
            // local = 40;  
            console.log('localVar - ' + localVar);
            console.log('localLet - ' + localLet);
            console.log('localConst - ' + localConst);
            // console.log('local - ' + local);
        }
    }

    const localGlobal_exp_b = function() {
        var localVar = 11;
        let localLet = 22;
        const localConst = 33; 
        localGlobal_two = 44;
        nestedFunc();

        function nestedFunc() {
            'use strict';
            console.log('localVar - ' + localVar);
            console.log('localLet - ' + localLet);
            console.log('localConst - ' + localConst);
            console.log('localGlobal_two - ' + localGlobal_two);
        }
    }

    const localGlobal_exp_c = function() {
        'use strict';

        var localVar_Array = [11, 22, 33];
        let localLet_Array = [10, 20, 30];
        const localConst_Array = [1, 2, 3];
        // local_Array = [11.10, 22.20, 33.30];

        var localVar_Object = {
            propertyOne: 111,
            propertyTwo: 222,
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        }
        let localLet_Object = {
            propertyOne: 11.11,
            propertyTwo: 22.22,
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        }
        const localConst_Object = {
            propertyOne: 10.10,
            propertyTwo: 20.20,
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        }
        // local_Object = {
        //     propertyOne: null,
        //     propertyTwo: null,
        //     method: function() {
        //         return this.propertyOne + this.propertyTwo;
        //     }
        // }
        const local_Object_One = {
            propertyOne: 11,
            propertyTwo: 22,

            get getSet() {
                return this.propertyOne + this.propertyTwo;
            } 
        }

        console.log('localVar_Array - ' + localVar_Array);
        console.log('localLet_Array - ' + localLet_Array);
        console.log('localConst_Array - ' + localConst_Array);
        // console.log('local_Array - ' + local_Array);

        console.log('localVar_Object.method - ' + localVar_Object.method());
        console.log('localLet_Object.method - ' + localLet_Object.method());
        console.log('localConst_Object.method - ' + localConst_Object.method());
        // console.log('local_Object.method - ' + local_Object.method());
        // console.log('local_Object_One.method - ' + local_Object_One.method());
        console.log('local_Object_One.propertyThree - ' + local_Object_One.propertyThree);
        console.log('local_Object_One.getSet - ' + local_Object_One.getSet);
    }

    function localGlobal_exp_d() {
        'use strict';
        const LocalConst_Constructor = function() {
            this.propertyOne = null;
            this.propertyTwo = null;
            this.method = function(argOne, argTwo) {
                this.propertyOne = arguments[0];
                this.propertyTwo = arguments[1];
            };
            this.arrow = () => {
                this.getSet;
                console.log('sum - ' + this.getSet);
            }
        };

        Object.defineProperty(
            LocalConst_Constructor.prototype, 
            'propertyThree',
            { value: 123, writable: false }
        );
        Object.defineProperty(LocalConst_Constructor.prototype, 'getSet', {
            get() {
                console.log('get ----');
                return this.propertyOne + this.propertyTwo + this.propertyThree;
            }
        });

        const constObject = new LocalConst_Constructor();
        constObject.method(111, 222);
        constObject.arrow();

        // delete LocalConst_Constructor.prototype;
        // constObject.propertyThree = 123.123;
    }

    localGlobal_exp_a();
    localGlobal_exp_b();
    localGlobal_exp_c();
    localGlobal_exp_d();
}
// -----------------------------------------------------------------------
function FuncJSP_104() {
    // variables are container of data and js variables are dynamic
    // we can declare variable using (var | let | const | without keyword)
    // the (var) is used till (2015 or ES6) but now (let | const) are used
    // (var) has (local | global) scope but (let | const) have (block) scope also 
    // general rule to use (const) to declare variable and its data is fixed 
    // - but to change data in run-time should use (let)
    // but assigning value to variable without declaring it became (global)
    // - even in function also
    console.log('globalVar_two - ' + globalVar_two);
    // console.log('globalLet_two - ' + globalLet_two);
    // console.log('globalConst_two - ' + globalConst_two);
    // console.log('global_two - ' + global_two);
    console.log('global_funcOne - ' + global_funcOne());

    globalVar_two = 100;
    console.log('globalVar_two - ' + globalVar_two);

    // globalLet_two = 200;
    // console.log('globalLet_two - ' + globalLet_two);

    var globalVar_two = 10;
    let globalLet_two = 20;
    const globalConst_two = 30;
    global_two = 40;

    function global_funcOne() {
        return 10 + 20;
    }
}
// -----------------------------------------------------------------------
function FuncJSP_105() {
    // after declaring a variable without assigning value is (undefined)
    // (re-declaring) a variable is allowed for (var) but not for (let | const)
    // we can use same name of identifiers in different scope but not in same scope
    // we can decare more than one variable in one statement 
    // - and this declaration can span also
    // - in this case, after declaration keyword, all the identifiers will be
    // - separated using comma 
    // - we can assign value for all | specific | none with the declaration
    // for assigning value have to use (=) sign not (==) 
    // identifiers name is traditional, but the ($ and _) character can be used 
    // - but both of them has specific use in javascript also
    var localVar_three;
    let localLet_three;
    const localConst_three = undefined;

    console.log('localVar_three - ' + localVar_three);
    console.log('localLet_three - ' + localLet_three);
    console.log('localConst_three - ' + localConst_three);

    localVar_three = 11;
    localLet_three = 22;
    // localConst_three = 33;

    console.log('localVar_three - ' + localVar_three);
    console.log('localLet_three - ' + localLet_three);
    console.log('localConst_three - ' + localConst_three);

    var localVar_three = 10;
    // let localLet_three = 20; 
    // const localConst_three = 30;

    console.log('localVar_three - ' + localVar_three);
    console.log('localLet_three - ' + localLet_three);
    console.log('localConst_three - ' + localConst_three);

    function localFunc_one() {
        var localVar = 10.10;
        let localLet = 20.20;
        const localConst = 30.30;

        console.log('localVar - ' + localVar);
        console.log('localLet - ' + localLet);
        console.log('localConst - ' + localConst);
    }

    function localFunc_two() {
        var localVar = 11.11;
        let localLet = 22.22;
        const localConst = 33.33;

        console.log('localVar - ' + localVar);
        console.log('localLet - ' + localLet);
        console.log('localConst - ' + localConst);
    }

    localFunc_one();
    localFunc_two();

    var varOne, varTwo = 2, varThree;
    let letOne,
        letTwo,
        letThree = 3;
    const constOne = 1, constTwo = 2,
        constThree = 3;
}
// -----------------------------------------------------------------------
function FuncJSP_106() {
    // (let | const) have (local | global) scope but it protected its data
    // - at (block) scope also
    // (let | const) must have to declare before use 
    // (let | const) can not re-declare in the same scope 
    // (const) must have to assign at declare and can not re-assign later but 
    // - (let) can re-assign at any time and not necessary to assign at declaration
    // (const) (array | object | function-exp | RegExp) basically define constant 
    // - reference for a value
    // so, can not change any constant (value | object | array), but can change 
    // - (elements of an array | property of an object)
    // general rules, should use (const), but if necessary to change value use (let)
    let localGlobal_Let = 10;
    const localGlobal_Const = 20;

    function localGlobal_Func() {
        let local_Let = 11;
        const local_Const = 22;

        console.log('local_Let - ' + local_Let);
        console.log('local_Const - ' + local_Const);
    }

    {
        let block_Let = 100;
        const block_Const = 200;

        console.log('block_Let - ' + block_Let);
        console.log('block_Const - ' + block_Const);
    }

    localGlobal_Func();
    console.log('localGlobal_Let - ' + localGlobal_Let);
    console.log('localGlobal_Const - ' + localGlobal_Const);
    // console.log('local_Let - ' + local_Let);
    // console.log('local_Const - ' + local_Const);
    // console.log('block_Let - ' + block_Let);
    // console.log('block_Const - ' + block_Const);

    // ----------------------------------------------------

    // console.log('localGlobalLet - ' + localGlobalLet);
    // console.log('localGlobalConst - ' + localGlobalConst);

    let localGlobalLet;
    const localGlobalConst = null;

    console.log('localGlobalLet - ' + localGlobalLet);
    console.log('localGlobalConst - ' + localGlobalConst);

    localGlobalLet = 120;
    // localGlobalConst = 220;

    console.log('localGlobalLet - ' + localGlobalLet);
    console.log('localGlobalConst - ' + localGlobalConst);

    // let localGlobalLet = 111;
    // const localGlobalConst = 222;

    console.log('localGlobalLet - ' + localGlobalLet);
    console.log('localGlobalConst - ' + localGlobalConst);

    // -------------------------------------------------------------
    function localGlobalFunc() {
        const localConst = 11;
        const localConstArray = [22, 33];
        const localConstObject = {
            propertyOne: 44,
            propertyTwo: 55,
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        };
        const localConstFunc = function() {
            console.log('localConstObject.propertyOne - ' + localConstObject.propertyOne);
            console.log('localConstObject.propertyTwo - ' + localConstObject.propertyTwo);
        }

        console.log('localConst - ' + localConst);
        console.log('localConstArray - ' + localConstArray);
        console.log('localConstObject.method - ' + localConstObject.method());
        localConstFunc();

        // localConst = 10;
        // localConstArray = [20, 30];
        // localConstObject = {
        //     propertyThree: 40,
        //     propertyFour: 50, 
        //     method: function() {
        //         return this.propertyThree + this.propertyFour;
        //     }
        // };
        // localConstFunc = function() {
        //     console.log('localConstObject - ' + localConstObject.propertyOne);
        //     console.log('localConstObject - ' + localConstObject.propertyTwo);
        // }

        console.log('localConst - ' + localConst);
        console.log('localConstArray - ' + localConstArray);
        console.log('localConstObject - ' + localConstObject);
        localConstFunc();

        // ----------------------------------------------------
        localConstArray[0] = 20;
        localConstArray[1] = 30;
        localConstObject.propertyOne = 40;
        localConstObject.propertyTwo = 50;

        console.log('localConstArray - ' + localConstArray);
        console.log('localConstObject.method - ' + localConstObject.method());

        let localLet = 111;
        let localLetArray = [222, 333];
        let localLetObject = {
            propertyOne: 444, 
            propertyTwo: 555,
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        };
        let localLetFunc = function() {
            console.log('localLetObject.propertyOne - ' + localLetObject.propertyOne);
            console.log('localLetObject.propertyTwo - ' + localLetObject.propertyTwo);
        }

        console.log('localLet - ' + localLet);
        console.log('localLetArray - ' + localLetArray);
        console.log('localLetObject.method - ' + localLetObject.method());
        localLetFunc();

        localLet = 100;
        localLetArray = [200, 300];
        localLetObject = {
            propertyOne: 400,
            propertyTwo: 500,
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        };
        localLetFunc = function() {
            console.log('localLetObject - ' + localLetObject.propertyOne);
            console.log('localLetObject - ' + localLetObject.propertyTwo);
        }

        console.log('localLet - ' + localLet);
        console.log('localLetArray - ' + localLetArray);
        console.log('localLetObject.method - ' + localLetObject.method());
        localLetFunc();
    }

    localGlobalFunc();
}

console.log('\njavascript scope ----- '); FuncJSP_101();
console.log('\njavascript scope ----- '); FuncJSP_102();
console.log('\njavascript strict .....'); FuncJSP_103();
console.log('\njavascript variable .....'); FuncJSP_104();
console.log('\njavascript variable .....'); FuncJSP_105();
console.log('\njavascript variable .......'); FuncJSP_106();