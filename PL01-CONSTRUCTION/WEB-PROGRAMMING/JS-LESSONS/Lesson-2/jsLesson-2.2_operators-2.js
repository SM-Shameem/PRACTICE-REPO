console.log('JAVASCRIPT OPERATORS 2 ................');

function func_gaa() {
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    // ?:

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
    let localLet_one = arguments[0];
    let localLet_two = arguments[1];

    // ??
    // ??=

    localLet_one = localLet_one ?? localLet_two;
    console.log('localLet_one -- ' + localLet_one);
    console.log('localLet ------ ' + localLet_one ?? localLet_two);

    localLet_one ??= localLet_two;
    console.log('localLet_one -- ' + localLet_one);
}

function func_gac() {
    const localConst_one = {
        propertyOne: 11,
    };

    const localConst_two = [1, 2, 3, 4, 5];

    function localFunc_one() {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    }

    function localFunc_two() {
        let returnValue = 0;
        for (let i = 0; i < localConst_two.length; i++) {
            returnValue += arguments[i];
        }
        return returnValue;
    }

    // .
    // ?.
    // ...

    console.log('localConst_one.propertyOne - ' + localConst_one.propertyOne);
    console.log('localConst_one.propertyTwo - ' + localConst_one.propertyTwo);
    console.log('localConst_one?.propertyTwo - ' + localConst_one?.propertyTwo);
    console.log('localFunc_one(...localConst_two) - ' + localFunc_one(...localConst_two));
    console.log('localFunc_two(...localConst_two) - ' + localFunc_two(...localConst_two));
}

function func_gad() {
    // + string addition
    // += string addition
    arguments[0] += (arguments[1] + arguments[2]);
    console.log('value is - ' + arguments[0]);
}

function func_gae() {
    const localConst_one = {
        propertyOne: 11,
        propertyTwo: 22, 
        method: function () {
            return this.propertyOne + this.propertyTwo;
        }
    };

    function LocalConstructor() {
        this.l_propertyOne = null;
        this.l_propertyTwo = null;
        this.method = function () {
            this.l_propertyOne = arguments[0];
            this.l_propertyTwo = arguments[1];
            return this.l_propertyOne + this.l_propertyTwo;
        };
    }

    // new
    // typeof
    // instanceof

    const localConst_two = new LocalConstructor();
    console.log('localConst_one.method - ' + localConst_one.method());
    console.log('localConst_two.method - ' + localConst_two.method(10, 20));

    console.log('localConstructor (localConst_one) - ' + (localConst_one instanceof LocalConstructor));
    console.log('LocalConstructor (localConst_two) - ' + (localConst_two instanceof LocalConstructor));
    console.log('localConst_one.propertyOne - ' + typeof localConst_one.propertyOne);
    console.log('localConst_one.propertyTwo - ' + typeof(localConst_one.propertyTwo));
}

function func_gaf() {
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
        method = function () {
            return this.propertyOne + this.propertyTwo;
        };
    };

    // new
    // in

    const localConst_two = new LocalConst();

    for (let x in localConst_one)
        console.log('localConst_one.' + x + ' - ' + localConst_one[x]);

    for (let x in localConst_two)
        console.log('localConst_two.' + x + ' - ' + localConst_two[x]);
}

function func_gag() {
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

console.log('\nfunc_gaa : additional operators .......'); func_gaa(null, 20);
console.log('\nfunc_gab : additional operators .......'); func_gab(null, 10);
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

// -----------------------------------------------------------------------
// Additional Operators
// -----------------------------------------------------------------------
// -- there are additional 20 (twenty) operators in javascript
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
// -- 5. []            - index
// -- 6. =>            - arrow (is used to arrow function)

// -- 1. (typeof)      - datatype checking operator
// -- 2. (instanceof)  - instance checking operator of an object
// -- 3. (new)         - used to create an instance of an object that has a constructor
// -- 4. (in)          - used to search specified property in the specified object or prototype chain
// -- 5. (yield)       -
// -- 6. (yield*)      -