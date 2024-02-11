let out = (arg = '\n') => console.log(arg);
// # DECLARATION STATEMENTS |||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. declaration keywords (var | let | const) and undeclared variable 
// 2. declaration keywords (function | class)
// 3. identifiers (variable | function | class)
// 4. scope (variable | array | object | class | function)
// 5. hosting (variable | array | object | class | function)
// 6. strict mode (variable | array | object | class | function)



// ============================================================================
// ----- 01. variable-declaration-keywords ------------------------------------
// ============================================================================
function example_one() {
    out('variable declaration keyword .................');
    var localScopeOne = function () {
        // variable declaration keywords 
        // undeclared variable 
        var local_var;
        let local_let;
        const local_const = null;
        local_global = null;

        out('declare ..........');
        out('local_var    : ' + local_var);
        out('local_let    : ' + local_let);
        out('local_const  : ' + local_const);
        out('local_global : ' + local_global);

        // ------------------------------------------------------------
        local_var = 11; 
        var local_var;
        // let local_let; 
        // const local_const = 33;
        local_global = 44;

        out('re-declare ...........');
        out('local_var    : ' + local_var);
        out('local_let    : ' + local_let);
        out('local_const  : ' + local_const);
        out('local_global : ' + local_global);
        
        // ------------------------------------------------------------
        local_var = 10;
        local_let = 20;
        // local_const = 30;
        local_global = 40;

        out('re-assign ...........');
        out('local_var    : ' + local_var);
        out('local_let    : ' + local_let);
        out('local_const  : ' + local_const);
        out('local_global : ' + local_global);
    }

    var localScopeTwo = function () {
        
        // ------------------------------------------------------------
        var local_var;
        let local_let;

        out('re-declare ...........');
        out('local_var    : ' + local_var);
        out('local_let    : ' + local_let);
        // out('local_const  : ' + local_const);
        out('local_global : ' + local_global);

        // ------------------------------------------------------------
        const local_const = 300;
        local_global = 400;
        out('local_const  : ' + local_const);
        out('local_global : ' + local_global);
    }

    localScopeOne();
    localScopeTwo();
}



// ============================================================================
// ----- 02. scope-of-variable-declaration-keywords ---------------------------
// ============================================================================
function example_two() {
    out('scope of variable declaration keywords .................');
    var global_var = 1111;
    let global_let = 2222;
    const global_const = 3333;
    global = 4444; 

    // ------------------------------------------------------------
    let localScope = function () {
        {
            var scope_var;
            let scope_let;
            const scope_const = null;
            scope_global = null;

            out('declare ...........');
            out('scope_var    : ' + scope_var);
            out('scope_let    : ' + scope_let);
            out('scope_const  : ' + scope_const);
            out('scope_global : ' + scope_global);
            out('global_var--:: ' + global_var);

            scope_var = 111;
            scope_let = 222;
            // scope_const = 333;
            scope_global = 444;
        }

        // ------------------------------------------------------------
        if(null === null) {
            var scope_var;
            let scope_let;
            const scope_const = 333;

            out('re-declare ...........');
            out('scope_var    : ' + scope_var);
            out('scope_let    : ' + scope_let);
            out('scope_const  : ' + scope_const);
            out('scope_global : ' + scope_global);
            out('global_let---: ' + global_let);
        }

        // ------------------------------------------------------------
        do {
            var scope_var = 100;
            let scope_let = 200;
            const scope_const = 300;
            scope_global = 500;

            out('re-declare ...........');
            out('scope_var    : ' + scope_var);
            out('scope_let    : ' + scope_let);
            out('scope_const  : ' + scope_const);
            out('scope_global : ' + scope_global);
            out('global_const-: ' + global_const);
        } while(true == false);

        // ------------------------------------------------------------
        out('scope_var    : ' + scope_var);
        // out('scope_let    : ' + scope_let);
        // out('scope_const  : ' + scope_const);
        out('scope_global : ' + scope_global);
        out('global-------: ' + global);

        var global_var = null;
        // let global_let = null;
        // const global_const = null;
        global = null;

    }

    // ------------------------------------------------------------
    localScope();

    out('re-declare global in local ....');
    out('global_var--:: ' + global_var);
    out('global_let---: ' + global_let);
    out('global_const-: ' + global_const);
    out('global-------: ' + global);
}



// ============================================================================
// ----- 03. hosting-of-variable-declaration-keywords -------------------------
// ============================================================================
function example_three() {
        out('hosting of variable declaration keywords .................');
        out('local_var   : ' + local_var);
        // out('local_let   : ' + local_let);
        // out('local_const : ' + local_const);
        // out('local       : ' + local);

        var local_var = null;
        let local_let = null;
        const local_const = null;
        local = null;

        out('local_var   : ' + local_var);
        out('local_let   : ' + local_let);
        out('local_const : ' + local_const);
        out('local       : ' + local);
}



// ============================================================================
// ----- 04. function & class-declaration-keywords ----------------------------
// ============================================================================
function example_four() {
    out('function & class keywords .................');
    function localFunc() {
        out('func-1');
        return 'localFunc ...';
    }

    // ------------------------------------------------------------
    class localClass {
        constructor() {
            this.proOne = arguments[0];
        }
        method() {
            return this.proOne;
        }
    }

    // ------------------------------------------------------------
    var localObject = new localClass('localClass ...');
    out('localFunc   : ' + localFunc());
    out('localObject : ' + localObject.method());

    // ------------------------------------------------------------
    // -- not acts like polymorphism and 
    // -- works as last declared like (var)
    // -- (function) has hosting for that above call work as below declaration
    function localFunc(arg) { out('func-2'); return arg; }
    function localFunc(argOne, argTwo) { out('func-3'); return argOne + argTwo; }
    // class localClass { }

    out('localFunc : ' + localFunc());
    out('localFunc : ' + localFunc('FuncLocal ...'));
    out('localFunc : ' + localFunc(10 + 20));
}



// ============================================================================
// ----- 05. scope and hosting of function & class-declaration-keywords -------
// ============================================================================
function example_five() {
    out('scope and hosting of function and class keyword .................');
    // function 
    // class 
    // function-expression (using var | let)
    // arrow-function 
    // constructor

    var localFunc = function() {
        // var objectTwo = new classOne();
        out('funcOne : ' + funcOne());

        // var objectThree = new constructor();
        // out('funcTwo : ' + funcTwo());
        // out('funcThree : ' + funcThree());
        // out('objectTwo : ' + objectTwo);
        // out('objectTwo : ' + objectTwo());
        // out('objectTwo : ' + objectTwo.method());
        // out('objectTwo : ' + constructor());

        out('local      : ' + local);
        // out('localPro   : ' + localPro);
    
        // ------------------------------------------------------------
        function funcOne() {
            return 'funcOne ..';
        }

        class classOne {
            method() {
                return 'classOne-method ..';
            }
        }

        // ------------------------------------------------------------
        var funcTwo = function() {
            var localVar = 10;
            let localLet = 20;
            const localConst = 30;
            local = 40;

            return localVar + localLet + localConst + local;
        }

        let funcThree = () => {
            var localVar = 11;
            let localLet = 22;
            const localConst = 33;
            local = 44;

            return localVar + localLet + localConst + local;
        }

        // ------------------------------------------------------------
        var constructor = function() {
            var localVar = 1;
            let localLet = 2;
            const localConst = 3;
            local = 4;
            this.localPro = 5;

            this.method = function () {
                return this.localPro;
            }

            return localVar + localLet + localConst + local + this.localPro;
        }

        // ------------------------------------------------------------
        var objectOne = new classOne();
        out('funcOne : ' + funcOne());
        out('objectOne.method : ' + objectOne.method());

        var objectTwo = new constructor();
        out('funcTwo : ' + funcTwo());
        out('funcThree : ' + funcThree());
        out('objectTwo : ' + objectTwo);
        // out('objectTwo : ' + objectTwo());
        out('objectTwo : ' + objectTwo.method());
        out('objectTwo : ' + constructor());

        // out('localVar   : ' + localVar);
        // out('localLet   : ' + localLet);
        // out('localConst : ' + localConst);
        out('local      : ' + local);
        out('localPro   : ' + localPro);
    }

    // ------------------------------------------------------------
    localFunc();
    
    // out('funcOne : ' + funcOne());
    // out('objectOne.method : ' + objectOne.method());
    // var objectTwo = new classOne();
}



// ============================================================================
// ----- 06. scope and hosting of array & object ------------------------------
// ============================================================================
function example_six() {
    var localFunc = function() {
        out('varArray      : ' + varArray);
        // out('letArray      : ' + letArray);
        // out('constArray    : ' + constArray);
        // out('localArray    : ' + localArray);
        out('varObject     : ' + varObject);
        // out('letObject     : ' + letObject);
        // out('constObject   : ' + constObject);
        // out('localObject   : ' + localObject);

        // out('varArray[0]     : ' + varArray[0]);
        // out('letArray[0]     : ' + letArray[0]);
        // out('constArray[0]   : ' + constArray[0]);
        // out('localArray[0]   : ' + localArray[0]);
        // out('varObject.pro   : ' + varObject.pro);
        // out('letObject.pro   : ' + letObject.pro);
        // out('constObject.pro : ' + constObject.pro);
        // out('localObject.pro : ' + localObject.pro);    

        // ------------------------------------------------------------
        {
            out('varArray      : ' + varArray);
            // out('letArray      : ' + letArray);
            // out('constArray    : ' + constArray);
            // out('localArray    : ' + localArray);
            out('varObject     : ' + varObject);
            // out('letObject     : ' + letObject);
            // out('constObject   : ' + constObject);
            // out('localObject   : ' + localObject);

            // out('varArray[0]   : ' + varArray[0]);
            // out('letArray[0]   : ' + letArray[0]);
            // out('constArray[0] : ' + constArray[0]);
            // out('localArray[0] : ' + localArray[0]);
            // out('varObject.pro   : ' + varObject.pro);
            // out('letObject.pro   : ' + letObject.pro);
            // out('constObject.pro : ' + constObject.pro);
            // out('localObject.pro : ' + localObject.pro);
        
            // ------------------------------------------------------------
            var varArray = [];
            let letArray = [];
            const constArray = [];
            localArray = [];
        
            var varObject = { };
            let letObject = { };
            const constObject = { };
            localObject = { };
        
            // ------------------------------------------------------------
            varArray[0]     = 11;
            letArray[0]     = 22;
            constArray[0]   = 33;
            localArray[0]   = 44;
            varObject.pro   = 55;
            letObject.pro   = 66;
            constObject.pro = 77; 
            localObject.pro = 88;
        
            out('varArray[0]     : ' + varArray[0]);
            out('letArray[0]     : ' + letArray[0]);
            out('constArray[0]   : ' + constArray[0]);
            out('localArray[0]   : ' + localArray[0]);
            out('varObject.pro   : ' + varObject.pro);
            out('letObject.pro   : ' + letObject.pro);
            out('constObject.pro : ' + constObject.pro);
            out('localObject.pro : ' + localObject.pro);
        }

        // ------------------------------------------------------------
        out('varArray      : ' + varArray);
        // out('letArray      : ' + letArray);
        // out('constArray    : ' + constArray);
        out('localArray    : ' + localArray);
        out('varObject     : ' + varObject);
        // out('letObject     : ' + letObject);
        // out('constObject   : ' + constObject);
        out('localObject   : ' + localObject);

        out('varArray[0]     : ' + varArray[0]);
        // out('letArray[0]     : ' + letArray[0]);
        // out('constArray[0]   : ' + constArray[0]);
        out('localArray[0]   : ' + localArray[0]);
        out('varObject.pro   : ' + varObject.pro);
        // out('letObject.pro   : ' + letObject.pro);
        // out('constObject.pro : ' + constObject.pro);
        out('localObject.pro : ' + localObject.pro);        
    }

    // ------------------------------------------------------------
    localFunc();

    // out('varArray      : ' + varArray);
    // out('letArray      : ' + letArray);
    // out('constArray    : ' + constArray);
    out('localArray    : ' + localArray);
    // out('varObject     : ' + varObject);
    // out('letObject     : ' + letObject);
    // out('constObject   : ' + constObject);
    out('localObject   : ' + localObject);
    
    // out('varArray[0]     : ' + varArray[0]);
    // out('letArray[0]     : ' + letArray[0]);
    // out('constArray[0]   : ' + constArray[0]);
    out('localArray[0]   : ' + localArray[0]);
    // out('varObject.pro   : ' + varObject.pro);
    // out('letObject.pro   : ' + letObject.pro);
    // out('constObject.pro : ' + constObject.pro);
    out('localObject.pro : ' + localObject.pro);
}



// ============================================================================
// ----- 07. user-define identifier conventions & declaration span ------------
// ============================================================================
function example_seven() {
    var x;
    var xyz;
    var sum;
    var result;
    var firstName;
    var last_name;
    var MiddleName;
    var _max_value;
    var min_value_;
    var _;
    var $avgValue;
    var $;

    let x1, y1, z1;
    let a=10, b, c;
    let a1, b1 = 10, c1;
    let a2 = 11, b2 = 22, c2 = 33; 
    
    let xa, xb, xc,
        ya, yb, yc = 11,
        za, zb = 22, zc;

    out('1. identifier can contain (character, number, underscore, dollar sign)');
    out('2. can not start with (number)');
    out('3. underscore and dollar sign - recommended to not use');
    out('4. can single character or mining full word(s)');
    out('5. can not use blank-space but use underscore or camel-case to separate words');

    out('# you can declare more than one variable in one statement by using comma to separate each of them');
    out('# this declaration can span in multiple lines also');
    out('# you can assign value to all or specific one or some variables');  
}



// ============================================================================
// ----- 08. using (strict) mode-1 --------------------------------------------
// ============================================================================
function example_eight() {
    // -- using a variable without declaring it, is not allowed
    // -- using an object without declaring it, is not allowed
    // -- writing to a read-only property is not allowed
    // -- writing to a get-only property is not allowed
    // -- deleting an undetectable property is not allowed
    // -- deleting variable and object is not allowed
    // -- deleting function is not allowed
    // -- duplicating parameter name is not allowed

    let funcOne = function() {
        'use strict'
        // localVar = null;
        localObject = {
            proOne: 11,
            method: function() {
                return this.proOne;
            }
        }

        // ------------------------------------------------------------
        // localConstructor = function() {
        //     this.proOne = arguments[0];
        //     this.method = function() {
        //         return this.proOne;
        //     }
        //     return this.proOne;
        // }

        // var localObjectTwo = new localConstructor(1);

        // ------------------------------------------------------------
        // out('localVar : ' + localVar);
        out('localObject.method : ' + localObject.method());
        // out('localObjectTwo.method : ' + localObjectTwo.method());
    }

    // ------------------------------------------------------------
    funcOne();
    // out('localVar : ' + localVar);
    out('localObject.method : ' + localObject.method());
    // out('localObjectTwo.method : ' + localObjectTwo.method());
    // out('localConstructor : ' + localConstructor(22)); 
}



// ============================================================================
// ----- 09. using (strict) mode-2 --------------------------------------------
// ============================================================================
function example_nine() {
    // -- octal numeric literals are not allowed
    // -- octal escape characters are not allowed
    // -- the (this) keyword in function behave differently -
    //    the (this) keyword refers to the object that called the function
    //    if the object is not specified, function will return (undefine)
    //    but in normal mode function will return global object (window)
}



// ============================================================================
// ----- 10. using (strict) mode-3 --------------------------------------------
// ============================================================================
function example_ten() {
    // -- the (eval) cannot be used as a variable
    // -- word (arguments) cannot be used as a variable
    // -- keywords for future javascript version can not be used as variable
    //    implements | interface | let | package
    //    private | public | protected | static | yield

    // -- the (with) statement is not allowed
    // -- the (eval()) is not allowed to create variable in the calling scope
    // -- the (eval()) can not declare a variable using the (var) keyword
    // -- the (eval()) can not declare a variable using the (let) keyword  
}



// ============================================================================
// ----- examples -------------------------------------------------------------
// ============================================================================
out(); example_one();
out(); example_two();
out(); example_three();
out(); example_four();
out(); example_five();
out(); example_six();
out(); example_seven();
out(); example_eight();
out(); example_nine();
out(); example_ten();