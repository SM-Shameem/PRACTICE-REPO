console.log('JAVASCRIPT OPERATORS 2 ................');

function func_gaa() {
    // ?:   - ternary operator (like - if..else)
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    if (localLet_one < localLet_two)
        console.log('localLet_one is less-than localLet_two');
    else if (localLet_one > localLet_two)
        console.log('localLet_one is greater-than localLet_two');
    else console.log('localLet_one is equal localLet_two');

    (localLet_one == localLet_two)
        ? console.log('localLet_one is equal localLet_two')
        : console.log('localLet_one is not equal localLet_two');
}

function func_gab() {
    // ??   - nullish operator (compare between - null or undefined with value)
    // ??=  - nullish assignment operator (assign to null with value)
    let localLet_01 = arguments[0];
    let localLet_02 = arguments[1];
    let localLet_03 = arguments[2];
    let localLet_04 = arguments[3];
    let localLet_05 = arguments[4];
    let localLet_06 = arguments[5];

    let local_01 = null;
    let local_02 = null;
    let local_03 = null;
    let local_04 = null;
    let local_05 = null;
    let local_06 = null;
    let local_07 = undefined;
    let local_08;

    local_01 = local_01 ?? localLet_01;
    console.log('local_01 - ' + local_01);
    console.log('localLet - ' + local_02 ?? localLet_02);
    console.log('localLet - ' + (local_03 ?? localLet_03));

    local_04 = localLet_04 ?? local_04;
    console.log('local_04 - ' + local_04);
    console.log('localLet - ' + localLet_05 ?? local_05);
    console.log('localLet - ' + (localLet_06 ?? local_06));

    console.log('localLet - ' + (local_01 ?? local_04));
    console.log('localLet - ' + (local_04 ?? local_01));
    console.log('localLet - ' + (local_05 ?? local_06));

    console.log('localLet - ' + (local_06 ?? local_07));
    console.log('localLet - ' + (local_07 ?? local_06));
    console.log('localLet - ' + (local_06 ?? local_08));
    console.log('localLet - ' + (local_08 ?? local_06));
    console.log('localLet - ' + (local_07 ?? local_08));

    local_02 ??= localLet_02;
    console.log('local ---- ' + local_02);
    console.log('local ---- ' + (local_03 ??= localLet_03));

    localLet_05 ??= local_05;
    console.log('local ---- ' + localLet_05);
    console.log('local ---- ' + (localLet_06 ??= local_06));

    console.log('local ---- ' + (local_01 ??= local_04));
    console.log('local ---- ' + (local_03 ??= local_02));

    local_06 ??= local_07; 
    console.log('local ---- ' + local_06);
    console.log('local ---- ' + (local_07 ??= local_05));
}

function func_gac() {
    // .
    // ?.
    // ...
    const localConst_one = {
        propertyOne: 11,
    };

    const LocalConst_two = function() {
        this.propertyOne = arguments[0];
        this.propertyTwo = 22;
        this.method = function() {
            return this.propertyOne + this.propertyTwo;
        }
    }

    const localConst_Ob1 = new LocalConst_two(11);

    console.log('localConst_one.propertyOne - ' + localConst_one.propertyOne);
    console.log('localConst_one.propertyTwo - ' + localConst_one.propertyTwo);
    console.log('localConst_one?.propertyOne - ' + localConst_one?.propertyOne);
    console.log('localConst_one?.propertyThree - ' + localConst_one?.propertyThree);
    console.log('localConst_Ob1?.propertyThree - ' + localConst_Ob1?.propertyThree);

    // --------------------------------------------------------------
    const localConst_array = [1, 2, 3, 4, 5];

    function localFunc_one() {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    }

    function localFunc_two() {
        let returnValue = 0;
        for (let i = 0; i < localConst_array.length; i++) {
            returnValue += arguments[i];
        }
        return returnValue;
    }
    console.log('localFunc_one(...localConst_array) - ' + localFunc_one(...localConst_array));
    console.log('localFunc_two(...localConst_array) - ' + localFunc_two(...localConst_array));
}

function func_gad() {
    // + string addition
    // += string addition
    arguments[0] += (arguments[1] + arguments[2]);
    console.log('value is - ' + arguments[0]);
}

function func_gae() {
    // new
    // typeof
    // instanceof
    const localConst_array = [];
    function local_func() {
        return 0;
    }

    const localConst_one = {
        propertyOne: 11,
        propertyTwo: 22, 
        method: function () {
            return this.propertyOne + this.propertyTwo;
        }
    };

    const LocalConst_two = function() {
        this.propertyOne = arguments[0];
        this.propertyTwo = 22;
        this.method = function() {
            return this.propertyOne + this.propertyTwo;
        }
    };
    class LocalClass {
        constructor() {
            this.propertyOne = arguments[0];
            this.propertyTwo = 20;
        }
        method() {
            return this.propertyOne + this.propertyTwo;
        }
    }

    const localConst_Ob1 = new LocalConst_two(11);
    const localConst_Ob2 = LocalConst_two(10);
    const local_Ob1 = new LocalClass(10);
    // const local_Ob2 = LocalClass(11);

    console.log('localConst_one.method - ' + localConst_one.method());
    console.log('localConst_Ob1.method - ' + localConst_Ob1.method());
    // console.log('localConst_Ob2.method - ' + localConst_Ob2.method());
    console.log('local_Ob1.method - ' + local_Ob1.method());
    // console.log('local_Ob2.method - ' + local_Ob2.method());

    console.log('localConst_one - ' + (localConst_one instanceof LocalConst_two));
    console.log('localConst_Ob1 - ' + (localConst_Ob1 instanceof LocalConst_two));
    console.log('localConst_Ob2 - ' + (localConst_Ob2 instanceof LocalClass));
    console.log('local_Ob1 ------ ' + (local_Ob1 instanceof LocalClass));
    // console.log('local_Ob2 ------ ' + (local_Ob2 instanceof LocalConst_two));

    console.log('localConst_one - ' + (typeof localConst_one));
    console.log('LocalConst_two - ' + (typeof LocalConst_two));
    console.log('localConst_Ob1 - ' + (typeof localConst_Ob1));
    console.log('LocalClass ----- ' + (typeof LocalClass));
    console.log('local_Ob1 ------ ' + (typeof local_Ob1));
    console.log('localConst_one.propertyOne - ' + typeof localConst_one.propertyOne);
    console.log('LocalConst_two.prototype - ' + typeof LocalConst_two.prototype);
    console.log('LocalConst_two.prototype.propertyOne - ' + typeof LocalConst_two.prototype.propertyOne);
    console.log('localConst_Ob1.propertyTwo - ' + typeof localConst_Ob1.propertyTwo);
    console.log('LocalClass.prototype - ' + typeof LocalClass.prototype);
    console.log('LocalClass.prototype.propertyOne - ' + typeof LocalClass.prototype.propertyOne);
    console.log('local_Ob1.prototypeTwo - ' + typeof local_Ob1.propertyTwo);
    console.log('localConst_array - ' + typeof localConst_array);
    console.log('local_func - ' + typeof local_func());
    console.log('local_func - ' + typeof local_func);
}

function func_gaf() {
    // in
    // ... separator
    // delete
    const localConst_array = [11, 22, 33, '44'];
    let localLet_array_1 = [10, 20, 30, 40];
    let localLet_array_2 = [];
    const localConst_one = {
        propertyOne: 1,
        propertyTwo: 2,
        propertyThree: 3,
        method: function () {
            return this.propertyOne + this.propertyTwo + this.propertyThree;
        }
    };

    const LocalConst = function () {
        this.propertyOne = 11;
        this.propertyTwo = 22;
        // static propertyThree
        this.method = function () {
            return this.propertyOne + this.propertyTwo;
        };
    };

    LocalConst.prototype.propertyThree = 33;

    class LocalClass {
        static propertyOne;
        static propertyTwo;

        constructor() {
            LocalClass.propertyOne = arguments[0];
            LocalClass.propertyTwo = arguments[1];
            this.propertyThree = LocalClass.propertyOne;
            this.propertyFour = LocalClass.propertyTwo;
        }
        method() {
            return LocalClass.propertyOne + this.propertyFour;
        }
    }

    const localConst_two = new LocalConst();
    const local_Ob = new LocalClass(11, 22);
    console.log('local_Ob.method - ' + local_Ob.method());

    // --------------------------------------------------------------
    for (let x in localConst_one)
        console.log('localConst_one.' + x + ' - ' + localConst_one[x]);

    for (let x in localConst_two) {
        console.log('localConst_two.' + x + ' - ' + localConst_two.x);
        console.log('localConst_two.' + x + ' - ' + localConst_two[x]);
    }

    for (let x in local_Ob) {
        console.log('local_Ob.' + x + ' - ' + local_Ob.x);
        console.log('local_Ob.' + x + ' - ' + local_Ob[x]);
    }

    for (let x in LocalConst) {
        console.log('LocalConst. ' + x + ' - ' + LocalConst[x]);
    }

    for (let x in LocalClass) {
        console.log('LocalClass.' + x + ' - ' + LocalClass[x]);
    }

    for (let x in localConst_array) 
        console.log('localConst_array[' + x + '] - ' + localConst_array[x]);

    // ----------------------------------------------------------
    function localFunc_one() {
        console.log('localConst_array[] - ' + localConst_array);
        console.log('localConst_array[0] - ' + arguments[0]);
        console.log('localConst_array[1] - ' + arguments[1]);
        console.log('localConst_array[2] - ' + arguments[2]);
        console.log('localConst_array[3] - ' + arguments[3]);
        console.log('localConst_array[4] - ' + arguments[4]);
    }

    function localFunc_two() {
        console.log('localConst_one - ' + localConst_one);
        console.log('localConst_one - ' + arguments[0]);
        console.log('localConst_one - ' + arguments[1]);
        console.log('localConst_one - ' + arguments[2]);
        console.log('localConst_one - ' + arguments[3]);
        console.log('localConst_one - ' + arguments[4]);
    }

    localFunc_one(localConst_array);
    localFunc_one(...localConst_array)
    localFunc_two(localConst_one);
    // localFunc_two(...localConst_one);

    // ----------------------------------------------
    console.log('localConst_array --------- ' + (0 in localConst_array));
    console.log('localConst_array ----------- ' + ('44' in localConst_array));
    console.log('localConst_array ----------- ' + (11 in localConst_array));
    console.log('localConst_one.propertyOne - ' + ('propertyOne' in localConst_one));
    
    console.log('localConst_two.propertyOne --------- ' + ('propertyOne' in localConst_two));
    console.log('LocalConst.prototype.propertyTwo --- ' + ('propertyTwo' in LocalConst.prototype));
    console.log('LocalConst.prototype.propertyTwo --- ' + ('propertyTwo' in LocalConst));
    console.log('LocalConst.prototype.propertyThree - ' + ('propertyThree' in LocalConst.prototype));
    console.log('LocalConst.prototype.propertyThree - ' + ('propertyThree' in LocalConst));
    
    console.log('local_Ob.propertyOne --------------- ' + ('propertyOne' in local_Ob));
    console.log('local_Ob.propertyThree ------------- ' + ('propertyThree' in local_Ob));
    console.log('LocalClass.prototype.propertyTwo --- ' + ('propertyTwo' in LocalClass.prototype));
    console.log('LocalClass.prototype.propertyTwo --- ' + ('propertyTwo' in LocalClass));
    console.log('LocalClass.prototype.propertyThree - ' + ('propertyThree' in LocalClass.prototype));
    console.log('LocalClass.prototype.propertyThree - ' + ('propertyThree' in LocalClass));
    
    // -----------------------------------------------
    delete localConst_array[0]; 
    console.log('localConst_array[0] - ' + localConst_array[0]);
    delete localConst_one.propertyOne;
    console.log('localConst_one.propertyOne - ' + localConst_one.propertyOne);
    delete localConst_one;
    console.log('localConst_one - ' + localConst_one);
    delete localConst_two.propertyOne;
    console.log('localConst_two.propertyOne - ' + localConst_two.propertyOne);
    delete localConst_two;
    console.log('localConst_two - ' + localConst_two);
    delete LocalConst.prototype.propertyTwo;
    console.log('LocalConst.prototype.propertyTwo - ' + LocalConst.prototype.propertyTwo);
    delete LocalConst;
    console.log('LocalConst - ' + LocalConst);
    delete local_Ob.propertyOne;
    console.log('local_Ob.propertyOne - ' + local_Ob.propertyOne);
    delete local_Ob;
    console.log('local_Ob - ' + local_Ob);
    delete LocalClass.prototype.propertyTwo;
    console.log('LocalClass.prototype.propertyTwo - ' + LocalClass.prototype.propertyTwo);
    delete LocalClass;
    console.log('LocalClass - ' + LocalClass);

    // ---------------------------------------------------------
    console.log('localConst_array - ' + localConst_array);
    console.log('localLet_array_1 - ' + localLet_array_1);
    console.log('localLet_array_2 - ' + localLet_array_2);

    localLet_array_2 = [localConst_array, ...localLet_array_1];
    for(let x = 0; x < localLet_array_2.length; x++)
        console.log('localLet_array_2[' + x + '] - ' + localLet_array_2[x]);
}

function func_gag() {
    // =>
    let localLet_one = null;

    localLet_one = () => 10;
    console.log('localLet_one - ' + localLet_one());

    localLet_one = arg => arg;
    console.log('localLet_one - ' + localLet_one(20));

    localLet_one = () => { return 30; };
    console.log('localLet_one - ' + localLet_one());

    localLet_one = arg => { return arg; };
    console.log('localLet_one - ' + localLet_one(40));

    localLet_one = (argOne, argTwo) => argOne + argTwo;
    console.log('localLet_one - ' + localLet_one(11, 22));

    localLet_one = (argOne, argTwo = 10) => {
        if (argOne == argTwo) return argOne + argTwo;
        else return argOne - argTwo;
    }
    console.log('localLet_one - ' + localLet_one(25));
}

function func_gah() {
    // void
    // yield
    // yield*
    function localFunc_one() {
        const localConst_One = void 1;
        // const localConst_two = 1;

        console.log('localFunc_one .....');
        // console.log('localConst_One - ' + localConst_one);
        // console.log('localConst_two - ' + localConst_two);
        return 1;
    }

    void function localFunc_two() {
        console.log('localFunc_two .....');
        return 1;
    }

    try {
        localFunc_one();
        // localFunc_two();
    } catch(err) {
        console.log(err);
    }

    // --------------------------------------------------------
    function* foo(index) {
        while (index < 2) {
            yield index;
            index++;
        }
    }
    
    const iteratorOne = foo(0);
    
    console.log(iteratorOne.next().value);
    // Expected output: 0
    
    console.log(iteratorOne.next().value);
    // Expected output: 1

    function* func1() {
        yield 42;
    }
    
    function* func2() {
        yield* func1();
    }
    
    const iteratorTwo = func2();
    
    console.log(iteratorTwo.next().value);
    // Expected output: 42
}

console.log('\nfunc_gaa : additional operators .......'); func_gaa(null, 20);
console.log('\nfunc_gab : additional operators .......'); 
    func_gab(10, 20, 30, 40, 50, 60, 70);
    func_gab('10', '20', '30', '40', '50', '60', '70');
console.log('\nfunc_gac : additional operators .......'); func_gac();
console.log('\nfunc_gad : additional operators .......');
    func_gad(10, 20, 30);
    func_gad('string', '-', 'one');
    func_gad('TK.', 10, 20);
    func_gad(10, ' Taka', ' only');
    func_gad(10, '20', '30');
    func_gad('10', 20, 30);
    func_gad('10', '20', '30');
console.log('\nfunc_gae : additional operators .......'); func_gae()
console.log('\nfunc_gaf : additional operators .......'); func_gaf();
console.log('\nfunc_gag : additional operators .......'); func_gag();
console.log('\nfunc_gah : additional operators .......'); func_gah();

// -----------------------------------------------------------------------
// Additional Operators
// -----------------------------------------------------------------------
// -- there are additional 22 (twenty two) operators in javascript
// -- 1. (?:)          - ternary operator (is as same as - if..else)
// -- 2. (??)          - nullish coalescing operator (if first-one is null | undefined, then second-one will show)
// -- 3. (??=)         - nullish coalescing assignment (if first-one is null | undefined, then second-one will assign to first-one)
// -- 4. (?.)          - option chaining operator (return (undefined) if an object is undefined | null, instead error)         -
// -- 6. (...)         - spread operator (is used to iterate an array or index)                   -
// -- 5. (.)           - dot operator (used to access object properties | methods)
// -- 7. (,)           - comma operator (for separate identifiers)
// -- 8. (;)           - semi-clone (for separate statement or ending statement)

// -- 1. (+)           - concatenate operator (used to add two strings | string and number)
// -- 2. (+=)          - concatenate assignment operator (used to add-then assign two strings | string and number)
// -- 3. ()            - parenthesis
// -- 4. {}            - bracket | block
// -- 5. []            - index (used for array or object property)
// -- 6. =>            - arrow (is used to arrow function)

// -- 1. (typeof)      - datatype checking operator
// -- 2. (instanceof)  - instance checking operator of an object
// -- 3. (in)          - used to search specified property in the specified object or prototype chain
// -- 4. (new)         - used to create an instance of an object that has a constructor
// -- 5. (delete)      - used to delete (property | variable | expression)
// -- 6. (void)        - used to protected any return from function
// -- 7. (yield)       - used to return from generator-function using the (next()) 
// -- 8. (yield*)      - used to return to other generator-function using the (next())