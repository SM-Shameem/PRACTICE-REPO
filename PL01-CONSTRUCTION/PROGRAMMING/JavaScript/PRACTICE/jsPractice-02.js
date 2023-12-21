// in javascript there are 6 (six) types of operators 
// 1. arithmetic operators 
// 2. assignment operators 
// 3. comparison operators 
// 4. logical operators 
// 5. additional operators 
// 6. bitwise operators 
// operators operates on operands
// -- combination of (operands and operators) called expression
// -- operands can be (literal | variable)
// -- (literals) are basic static data-types, in javascript these are - 
// -- 1. numbers (with or without decimal), 
// -- 2. string (single or double quoted), 
// -- 3. and booleans (true or false)
// -- (variables or instance) of javascript - 
// -- 1. static variable (contain single - literal | return | expression | func-exp)
// -- 2. array type (contain same or mixed type - literal | return | expression | func-exp)
// -- 3. object type (contain same or mixed type - literal | return | expression | func-exp) with (methods)
// -----------------------------------------------------------------------
function FuncJSP_201() {
    // in javascript there are 8 (eight) arithmetic operators - 
    // 1. addition (+)
    // 2. subtract (-)
    // 3. multiplication (*)
    // 4. division (/)
    // 5. modulus (%)
    // 6. increment (++) - (prefix | postfix)
    // 7. decrement (--) - (prefix | postfix)
    // 8. exponentiation (**) - ES6 (2015)
    const constOne = 10, constTwo = 20.5;
    let letOne = 11, letTwo = 22.5;

    console.log('10 + 10 - ' + 10 + 10);
    console.log('10 - 10.10 - ' + 10 - 10.10);
    console.log('10 * 10.20 - ' + 10 * 10.20);
    console.log('10 / 5 - ' + 10 / 5);
    console.log('10 % 4 - ' + 10 % 4);
    console.log('\n');

    console.log('10 + 10 - ' + (10 + 10));
    console.log('10 - 10.10 - ' + (10 - 10.10));
    console.log('\n');

    console.log('constOne + constTwo - ' + constOne + constTwo);
    console.log('constOne - constTwo - ' + constOne - constTwo);
    console.log('constOne * constTwo - ' + constOne * constTwo);
    console.log('constOne / constTwo - ' + constOne / constTwo);
    console.log('constOne % constTwo - ' + constOne % constTwo);
    console.log('\n');

    console.log('constOne + constTwo - ' + (constOne + constTwo));
    console.log('constOne - constTwo - ' + (constOne - constTwo));
    console.log('\n');

    console.log('10 ** 4 - ' + 10 ** 4);
    console.log('constOne ** constTwo - ' + constOne ** constTwo);
    console.log('\n');

    console.log('letOne++ - ' + letOne++);
    console.log('++letOne - ' + ++letOne);
    console.log('letTwo-- - ' + letTwo--);
    console.log('--letTwo - ' + --letTwo);
}
// -----------------------------------------------------------------------
function FuncJSP_202() {
    // in javascript there are 7 (seven) assignment operators 
    // 1. equal-to (=)
    // 2. add-equal-to (+=) 
    // 3. sub-equal-to (-=)
    // 4. mul-equal-to (*=)
    // 5. div-equal-to (/=)
    // 6. mod-equal-to (%=)
    // 7. exp-equal-to (**=) - ES6 (2015)
    let letOne = 10, letTwo = 20;

    console.log('letOne = 20 - ' + (letOne = 20));
    console.log('letOne += 10 - ' + (letOne += 10));
    console.log('letOne -= 10 - ' + (letOne -= 10));
    console.log('letOne *= 10 - ' + (letOne *= 10));
    console.log('letOne /= 10 - ' + (letOne /= 10));
    console.log('letOne %= 10 - ' + (letOne %= 10));
    console.log('letOne **= 10 - ' + (letOne **= 10));
    console.log('\n');

    console.log('letOne = letTwo - ' + (letOne = letTwo));
    console.log('letOne += letTwo - ' + (letOne += letTwo));
    console.log('letOne -= letTwo - ' + (letOne -= letTwo));
    console.log('letOne *= letTwo - ' + (letOne *= letTwo));
    console.log('letOne /= letTwo - ' + (letOne /= letTwo));
    console.log('letOne %= letTwo - ' + (letOne %= letTwo));
    console.log('letOne **= letTwo - ' + (letOne **= letTwo));
    console.log('\n');
} 
// -----------------------------------------------------------------------
function FuncJSP_203() {
    // in javascript there are 8 (eight) comparison operators 
    // 1. equal (==)
    // 2. not-equal (!=)
    // 3. greater-than (<)
    // 4. greater-than equal (<=)
    // 5. less-than (>)
    // 6. less-than equal (>=)
    // 7. type equal (===) - ES6 (2015)
    // 8. type not-equal (!==) - ES6 (2015)
    const constOne = 10, constTwo = 20;

    console.log('10 == 20 - ' + (10 == 20));
    console.log('10 != 20 - ' + (10 != 20));
    console.log('10 < 20 - ' + (10 < 20));
    console.log('10 > 20 - ' + (10 > 20));
    
    console.log('10 <= 20 - ' + (10 <= 20));
    console.log('10 >= 20 - ' + (10 >= 20));
    console.log('10 === 20 - ' + (10 === 20));
    console.log('10 !== 20 - ' + (10 !== 20));
    console.log('\n');

    console.log('constOne == 10 - ' + (constOne == 10));
    console.log('constTwo != 10 - ' + (constTwo != 10));
    console.log('constOne < constTwo - ' + (constOne < constTwo));
    console.log('constOne > constTwo - ' + (constOne > constTwo));

    console.log('constOne <= 10 - ' + (constOne <= 10));
    console.log('constTwo >= 20 - ' + (constTwo >= 20));
    
    console.log('constOne === constTwo - ' + (constOne === constTwo));
    console.log('constOne !== constTwo - ' + (constOne !== constTwo));
    console.log('\n');
}
// -----------------------------------------------------------------------
function FuncJSP_204() {
    // in javascript there are 5 (five) logical operators 
    // 1. AND (&&)
    // 2. OR (||)
    // 3. NOT (!)
    // 4. AND assignment (&&=)
    // 5. OR assignment (||=)
    let letOne = 10, letTwo = 20, letThree = 30;

    console.log('letOne && letTwo - ' + (letOne && letTwo));
    console.log('letOne || letTwo - ' + (letOne || letTwo));
    console.log('!(letOne && letTwo) - ' + !(letOne && letTwo));
    console.log('!(letOne || letTwo) - ' + !(letOne || letTwo));
    console.log('letTwo && letOne - ' + (letTwo && letOne));
    console.log('letTwo || letOne - ' + (letTwo || letOne));    
    console.log('letOne &&= letTwo - ' + (letOne &&= letTwo));
    console.log('letOne ||= letTwo - ' + (letOne ||= letTwo));
    console.log('!letOne - ' + !letOne);

    letOne = 11, letTwo = 22;

    if (letOne == 11 && letTwo == 11) console.log('value (&&) -- ' + true);
    else console.log('value -- ' + false);
    if (!(letOne == 11 && letTwo == 11)) console.log('value !(&&) -- ' + true);
    else console.log('value -- ' + false);
    if (!(letOne == 1) && !(letTwo == 11)) console.log('value (!&&) -- ' + true);
    else console.log('value -- ' + false);

    if (letOne == 11 || letTwo == 11) console.log('value -- ' + true);
    else console.log('value -- ' + false);

    console.log('\n');
    console.log('letOne == 11 : ' + (letOne == 11));
    console.log('!(letOne == 11) : ' + !(letOne == 11));
    console.log('letOne == 11 && letTwo == 11 : ' + (letOne == 11 && letTwo == 11));
    // console.log('if (letOne == 11 && letOne == 11) : ' + (if(letOne == 11 && letTwo == 11)));

    console.log('\n');
    letOne = 111, letTwo = 222, letThree = 333;
    console.log('letOne : ' + letOne);
    console.log('letTwo : ' + letTwo);
    console.log('letThree : ' + letThree);

    // console.log('letOne &&= 11 : ' + (letOne &&= 11));
    letOne &&= 11;
    console.log('letOne &&= 11 : ' + letOne);
    
    // console.log('letTwo &&= 222 : ' + (letTwo &&= 222));
    letTwo &&= 222;
    console.log('letTwo &&= 222 : ' + letTwo);

    // console.log('letThree &&= 444 : ' + (letThree &&= 444));
    letThree &&= 444;
    console.log('letThree &&= 444 : ' + letThree);

    console.log('letOne ||= 111 : ' + (letOne ||= 111));
    console.log('letTwo ||= 222 : ' + (letTwo ||= 222));
    console.log('letThree ||= 111 : ' + (letThree ||= 111));
}
// -----------------------------------------------------------------------
function FuncJSP_205() {
    // -- there are additional 20 (twenty) operators in javascript
    // -- 1. (+)           - concatenate operator (used to add two strings | string and number)
    // -- 2. (+=)          - concatenate assignment operator (used to add-then assign two strings | string and number)
    const localGlobal_expOne = function() {
        console.log('string + string : ' + ('string' + 'string'));
        console.log('string + 10 : ' + ('string' + 10));
        console.log('10 + string : ' + (10 + 'string'));
        console.log('\n');
        
        console.log('10 + 10 : ' + (10 + 10));
        console.log('"10" + "10" : ' + ('10' + '10'));
        console.log('"10" + 10 : ' + ('10' + 10));
        console.log('10 + "10" : ' + (10 + '10'));
        console.log('"10" + "10" + 10 : ' + ('10' + '10' + 10));
        console.log('"10" + "10" + 10 + 10 : ' + ('10' + '10' + 10 + 10));
        console.log('"10" + "10" + (10 + 10) : ' + ('10' + '10' + (10 + 10)));
        console.log('10 + 10 + "10" + "10" : ' + (10 + 10 + '10' + '10'));
        console.log('10 + "10" + 10 + "10" : ' + (10 + '10' + 10 + '10'));
        console.log('\n');

        let letOne, letTwo;
        letOne = 'Tk. ', letTwo = 11;
        // console.log('string += string : ' + ('string' += 'string'));    
        console.log('letOne : ' + letOne);
        console.log('letTwo : ' + letTwo);

        console.log('letOne += letTwo : ' + (letOne += letTwo));
        // console.log('letTwo += " " += letOne : ' + (letTwo += ' ' += letOne));
        console.log('letTwo += (" " + letOne) : ' + (letTwo += (' ' + letOne)));
        console.log('letOne += 10 : ' + (letOne += 10));
        console.log('letTwo += TK. : ' + (letTwo += 'TK.'));
        console.log('letTwo += letTwo : ' + (letTwo += letTwo));
        console.log('"letTwo" += letTwo : ' + ('letTwo' + letTwo));
    }
    
    function localGlobal_expTwo() {
        // -- 1. (?:)          - ternary operator (is as same as - if..else)
        // -- 2. (??)          - nullish coalescing operator (if first-one is null | undefined, then second-one will show)
        // -- 3. (??=)         - nullish coalescing assignment (if first-one is null | undefined, then second-one will assign to first-one)
        // -- 4. (?.)          - option chaining operator (return (undefined) if an object is undefined | null, instead error)         -
        // -- 6. (...)         - spread operator (is used to iterate an array or index)
        
        let letOne = 10, letTwo = [10, 20, 30];
        
        const localFunc = function() {
            for (let x = 0; x < arguments.length; x++)
                console.log('arrayValue[' + x + '] : ' + arguments[x]);
        }

        for (let x = 0; x < letTwo.length; x++)
            console.log('arrayCompare[' + '] : ' + (letOne == letTwo[x] ? true : false));

        localFunc(letTwo);
        localFunc(...letTwo);
    }
    // -- 1. (typeof)      - datatype checking operator
    // -- 2. (instanceof)  - instance checking operator of an object
    // -- 3. (new)         - used to create an instance of an object that has a constructor
    // -- 4. (in)          - used to search specified property in the specified object or prototype chain
    // -- 5. (yield)       -
    // -- 6. (yield*)      -

    function localGlobal_expThree() {
        var localVar;
        let localLet = null;
        const localConst = undefined;
        const localArray = [11, 22, 33];
        const localObject = {
            propertyOne: 44, 
            propertyTwo: 55, 
            method: function() {
                return this.propertyOne + this.propertyTwo;
            }
        };
        const localFunc = function() {
            localVar = localArray[0], localLet = localArray[1];
            return localVar + localLet;
        };
        const LocalConst = function() {
            this.propertyOne = arguments[0];
            this.propertyTwo = arguments[1];
            this.method = function() {
                return this.propertyOne + this.propertyTwo;
            };
        };

        const localOB_One = new LocalConst(10, 20);
        const localOB_Two = new LocalConst(30, 40);

        console.log('localVar - ' + typeof localVar);
        console.log('localLet - ' + typeof localLet);
        console.log('localConst - ' + typeof localConst);
        console.log('localArray - ' + typeof localArray);
        console.log('localObject - ' + typeof localObject);
        console.log('localFunc - ' + typeof localFunc);
        console.log('localFunc - ' + typeof localFunc());
        console.log('LocalConst - ' + typeof localConst);
        // console.log('localConst - ' + typeof localConst());
    }

    // -- 1. ()            - parenthesis
    // -- 2. {}            - bracket | block
    // -- 3. []            - index
    // -- 4. (.)           - dot operator (used to access object properties | methods)
    // -- 5. (,)           - comma operator (for separate identifiers)
    // -- 6. (;)           - semi-clone (for separate statement or ending statement)
    // -- 7. =>            - arrow (is used to arrow function)

    localGlobal_expOne();
    localGlobal_expTwo();
    localGlobal_expThree();
}
// -----------------------------------------------------------------------
console.log('\narithmetic operators -------'); FuncJSP_201();
console.log('\nassignment operators -------'); FuncJSP_202();
console.log('\ncomparison operators .......'); FuncJSP_203();
console.log('\nlogical operator ...........'); FuncJSP_204();
console.log('\nadditional operators .......'); FuncJSP_205();