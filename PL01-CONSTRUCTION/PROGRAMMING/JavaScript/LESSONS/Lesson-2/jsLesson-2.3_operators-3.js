console.log('JAVASCRIPT OPERATORS 4 ................');

function operator_aa() {
    let letVar_aa;
    const constVar_aa = void 0;
    const constArray_aa = [];
    const constObject_aa = {};
    const ConstConstructor = function() {};
    
    const constExpression_aa = function() {
        letVar_aa = arguments[0];
        constArray_aa[0] = arguments[1];
        constArray_aa[1] = arguments[2];
        constArray_aa[2] = arguments[3];
        constObject_aa.propertyOne = arguments[4];
        constObject_aa.propertyTwo = arguments[5];
        ConstConstructor.prototype.propertyOne = arguments[6];
        ConstConstructor.prototype.propertyTwo = arguments[7];
    };

    function func_aa() {
        constObject_aa.method = function() {
            console.log('co_aa.propertyOne - ' + this.propertyOne);
            console.log('co_aa.propertyTwo - ' + this.propertyTwo);
        }
        ConstConstructor.prototype.method = function() {
            console.log('cc_aa.propertyOne - ' + this.propertyOne);
            console.log('cc_aa.propertyTwo - ' + this.propertyTwo);
        }        
    }
    class class_aa {
        constructor() {
            constExpression_aa(...arguments);
            func_aa();
        }

        showValue() {
            const cc_aa = new ConstConstructor();
            console.log('letVar_aa - ' + letVar_aa);
            console.log('constVar_aa - ' + constVar_aa);
            console.log('constArray - ' + constArray_aa);
            constObject_aa.method();
            cc_aa.method();
        }
    }
    
    const c_aa = new class_aa(10, 20, 30, 40, 50, 60, 70, 80);
    c_aa.showValue();
}

// ===============================================================================
function operator_ab() {
    // exponentiation
    // exponentiation-assignment 
    // logical-assignment
    // assignment and property-assignment 
    // . | ?. | [] - operator 
    // increment | decrement (prefix | postfix)

    const constArray = [10, 20, 30, 40];
    const constObject = {
        proOne: constArray[0],    // assigning value to object-property using (:) operator
        proTwo: constArray[1],
        method: function() {
            return this.proOne + this.proTwo;
        }
    };
    const constConstructor = function() {
        this.proOne = constArray[2];    // assigning value ot object-property using (=) operator
        this.proTwo = constArray[3];
        this.method = function() {
            return this.proOne + this.proTwo;
        }
    };
    class classTemplate {
        constructor() {
            this.proOne = constArray;
            this.proTwo = constObject;
            this.proThree = new constConstructor;
        }
        method() {
            console.log('constArray - ' + this.proOne);
            console.log('constObject.method - ' + this.proTwo.method());
            console.log('constConstructor.method - ' + this.proThree.method());
        }

        exponentiation() {
            console.log('this.proOne[0] * 2 - ' + (this.proOne[0] * 2));
            console.log('this.proOne[0] ** 2 - ' + (this.proOne[0] ** 2));
            console.log('this.proOne[0] *= 2 - ' + (this.proOne[0] *= 2));
            console.log('this.proOne[0] **= 2 - ' + (this.proOne[0] **= 2));
            console.log('this.proTwo.proOne - ' + this.proTwo.proOne);
            console.log('this.proTwo.proOne++ - ' + (this.proTwo.proOne++));
            console.log('++this.proTwo.proOne - ' + (++this.proTwo.proOne));
            console.log('this.proTwo.method-- - ' + (this.proTwo.method--));
            console.log('--this.proTwo.method - ' + (--this.proTwo.method));
            // console.log('--this.proTwo.method() - ' + (--(this.proTwo.method())));

        }
        logicalAssignment() {
            this.proOne[0] &&= this.proOne[1];
            console.log('this.proOne[0] - ' + this.proOne[0]);
            console.log('this.proOne[1] - ' + this.proOne[1]);

            this.proOne[0] &&= this.proOne[1];
            console.log('this.proOne[0] - ' + this.proOne[0]);
            console.log('this.proOne[1] - ' + this.proOne[1]);

            this.proOne[0] ||= this.proOne[1];
            console.log('this.proOne[0] - ' + this.proOne[0]);
            console.log('this.proOne[1] - ' + this.proOne[1]);

            this.proOne[2] ||= this.proOne[3];
            console.log('this.proOne[2] - ' + this.proOne[2]);
            console.log('this.proOne[3] - ' + this.proOne[3]);
        }
    }

    const ct = new classTemplate;
    ct.method();

    console.log('constArray - ' + constArray);
    console.log('constArray - ' + constArray[0]);
    // console.log('constArray - ' + constArray.1);
    console.log('constObject.proOne - ' + constObject.proOne);
    console.log('constObject[proTwo] - ' + constObject['proTwo']);
    // console.log('constObject[method] - ' + constObject['method()']);
    console.log('constConstructor - ' + constConstructor['prototype']['proOne']);
    console.log('ct.proThree.proOne - ' + ct['proThree']['proOne']);
    console.log('classTemplate.prototype.proOne - ' + classTemplate.prototype.proOne);
    console.log('ct.proOne - ' + ct['proOne']);
    console.log('ct.proOne[0] - ' + ct['proOne'][0]);
    console.log('ct.proOne[1] - ' + ct.proOne[1]);
    console.log('ct.proTwo.method - ' + ct.proTwo.method());
    ct.exponentiation();
    ct.logicalAssignment();
}

// ===============================================================================
function operator_ac() {
    // ternary 
    // nullish | nullish-assignment

    const cArray = [null, 11, 22, 33, null];

    cArray[1] < cArray[2]
    ? console.log('cArray[1] + cArray[2] - ' + (cArray[1] + cArray[2]))
    : console.log('cArray[1] - cArray[2] - ' + (cArray[1] - cArray[2]));

    cArray[0] ?? cArray[1]
    ? console.log('cArray[0] - ' + cArray[0])
    : console.log('cArray[1] - ' + cArray[1]);

    (cArray[0] ?? cArray[1])
    ? console.log('cArray[0] - ' + cArray[0])
    : console.log('cArray[1] - ' + cArray[1]);

    cArray[1] ?? cArray[0]
    ? console.log('cArray[0] - ' + cArray[0])
    : console.log('cArray[1] - ' + cArray[1]);

    (cArray[1] ?? cArray[0])
    ? console.log('cArray[0] - ' + cArray[0])
    : console.log('cArray[1] - ' + cArray[1]);

    console.log('nullish - ' + (cArray[0] ?? cArray[1]));
    console.log('nullish - ' + (cArray[1] ?? cArray[0]));
    console.log('nullish - ' + cArray[0] ?? cArray[1]);
    console.log('nullish - ' + cArray[1] ?? cArray[0]);

    cArray[0] ??= cArray[1];
    console.log('cArray[0] - ' + cArray[0]);
    console.log('cArray[1] - ' + cArray[1]);

    cArray[2] ??= cArray[4];
    console.log('cArray[2] - ' + cArray[2]);
    console.log('cArray[4] - ' + cArray[4]);
}

// ===============================================================================
function operator_ad() {
    // in | spread 
    const constArray = [11, 22, 33, 44];
    let letArray = [10, 20, 30, 40];

    const constObject = {
        proOne: 10,
        proTwo: 20,
        method: function() {
            return this.proOne + this.proTwo;
        }
    };
    const constConstructor = function() {
        this.proOne = 111;
        this.proTwo = 222;
        this.method = function() {
            return this.proOne + this.proTwo;
        }
    };
    class classTemplate {
        static varOne = null;
        static varTwo = null;
        constructor() {
            this.proOne = arguments[0];
            this.proTwo = arguments[0];
        }
        method() {
            console.log('varOne - ' + classTemplate.varOne);
            console.log('varTwo - ' + classTemplate.varTwo);
            console.log('proOne - ' + this.proOne);
            console.log('proTwo - ' + this.proTwo);
        }
    }

    let letObject_a = new constConstructor;
    let letObject_b = new classTemplate;
    
    // the (in) operator or keyword - search only (index and member)
    console.log('constArray[0] - ' + (0 in constArray));
    console.log('constArray[5] - ' + (5 in constArray));
    console.log('constObject.proOne - ' + ('proOne' in constObject));
    console.log('constObject.method - ' + ('method' in constObject)); 
    console.log('constObject.method - ' + ('method()' in constObject)); 
    console.log('constConstructor.proOne - ' + ('proOne' in constConstructor)); 
    console.log('constConstructor.prototype.proOne - ' + ('proOne' in constConstructor.prototype));
    console.log('letObject_a.proOne - ' + ('proOne' in letObject_a));
    console.log('letObject_a.method - ' + ('method' in letObject_a));
    console.log('classTemplate.proOne - ' + ('proOne' in classTemplate));
    console.log('classTemplate.prototype.proOne - ' + ('proOne' in classTemplate.prototype));
    console.log('classTemplate.varOne - ' + ('varOne' in classTemplate));
    console.log('classTemplate.prototype.varOne - ' + ('varOne' in classTemplate.prototype));
    console.log('letObject_b.varOne - ' + ('varOne' in letObject_b));
    console.log('letObject_b.proOne - ' + ('proOne' in letObject_b));
    console.log('letObject_b.method - ' + ('method' in letObject_b));

    // console.log('constArray[0] - ' + ('11' in constArray[0]));

    let x, y;
    for(x in constObject || y in constArray) {
        console.log('constArray[' + x + '] - ' + constObject[x]);
        console.log('constObject[' + y + '] - ' + constArray[y]);
    }

    for(let z in constObject) 
        console.log('constObject[' + z + '] - ' + constObject[z]);

    if(x in constArray && y in letArray)
        console.log('statement executed ...');

    while(x in letArray)
        console.log('letArray[' + x + '] - ' + letArray[x]);

    // ----------------------
    letArray = [...constArray];
    for(let i = 0; i < letArray.length; i++)
        console.log('letArray[' + i + '] - ' + letArray[i]);

    // letArray = [...constObject];
    // for(let i = 0; i < letArray.length; i++)
    //     console.log('letArray[' + i + '] - ' + letArray[i]);

    let letObject = { ...constArray };
    for(let i = 0; i < letObject.length; i++)
        console.log('letObject[' + i + '] - ' + letObject[i]);

    function funcOne() {
        for(let i = 0; i < arguments.length; i++) 
            console.log('arguments[' + i + '] - ' + arguments[i]);
    }

    funcOne(...constArray);
    // funcOne(...constObject);
}

// ===============================================================================
function operator_ae() {
    // spread
    // -- function.apply(null, array);
    // -- array.push(value);
    // -- array.shift().shift();
    // -- array1.concat(array2);
    // -- Array.prototype.unshift.apply(array1, array2);
    // -- Object.assign(object, { property: value});
    // -- arrow method to create (marge | reduce) for object
    // arrow

    const constArray = [11, 22, 33, 44];
    const constObject = {
        proOne: 55,
        proTwo: 66,
        method: function() {
            return this.proOne + this.proTwo;
        }
    };

    let letArray = [10, 20, 30, 40];
    let letObject = {
        proThree: 77,
        method: function() {
            return this.proOne + this.proTwo;
        }
    };

    var varArray;
    var varObject;

    varArray = [constArray, ...letArray];
    for(let x in varArray) 
        console.log('varArray[' + x + '] - ' + varArray[x]);

    (function() {
        for(let x in arguments)
            console.log('arguments[' + x + '] - ' + arguments[x]);
    })(...varArray);

    varObject = constObject;
    for(let x in constObject) 
        console.log('constObject[' + x + '] - ' + constObject.x);

    for(let x in varObject) 
        console.log('varObject[' + x + '] - ' + varObject[x]);

    varObject = null;
    varObject = { ...constObject};
    for(let x in varObject) 
        console.log('varObject[' + x + '] - ' + varObject[x]);

    varObject = null;
    varObject = { constObject, ...letObject };
    for(let x in varObject) 
        console.log('varObject[' + x + '] - ' + varObject[x]);

    varObject = null;
    varObject = { ...constObject, ...letObject };
    for(let x in varObject) 
        console.log('varObject[' + x + '] - ' + varObject[x]);

    // -----------------------------------------------------------
    console.log('\n');
    const objectOne = { a: 10, x: 11 };
    const objectTwo = { a: 10, y: 22 };
    const mergeOne = (...objectArg) => ( { ...objectArg } );
    console.log(mergeOne(objectOne, objectTwo));
    console.log(mergeOne({}, objectOne, objectTwo));

    const mergeTwo = (...objects) =>
        objects.reduce((acc, cur) => ({ ...acc, ...cur }));

    console.log(mergeTwo(objectOne, objectTwo));
}

// ===============================================================================
function operator_af() {
    // typeof | instanceof 
    // void | null | undefined 

    // new | delete 
    // yield | yield* | generator-function*

    const constA = null;
    const constB = undefined;
    const constC = void 11;
    // const constD = new null;                             (null - is not a constructor)
    // const constE = new undefined;                        (undefined - is not a constructor)
    const constF = [11, 22];
    // const constG = new [33, 44];                         ([33, 44] - is not a constructor)
    const constH = { proOne: 10, proTwo: 20 };
    // const constI = new { proOne: 30, proTwo: 40 };       ({proOne: 30, proTwo: 40} - is not a constructor)

    const constJ = function() {
        this.proOne = 111;
        this.proTwo = 222;
    };
    const constK = new function() {
        this.proOne = 100;
        this.proTwo = 200;
    };
    class classA {
        constructor() {
            this.proOne = 1;
            this.proTwo = 2;
        }
    }

    function printFunc(arg) {
        console.log('constA - ' + constA + ' : ' + typeof constA);
        console.log('constB - ' + constB + ' : ' + typeof constB);
        console.log('constC - ' + constC + ' : ' + typeof constC);
        // console.log('constD - ' + constD + ' : ' + typeof constD);
        // console.log('constE - ' + constE + ' : ' + typeof constE);
        console.log('constF - ' + constF + ' : ' + typeof constF);
        // console.log('constG - ' + constG + ' : ' + typeof constG);
        console.log('constH - ' + constH + ' : ' + typeof constH);
        // console.log('constI - ' + constI + ' : ' + typeof constI);

        const ObjA = new constJ;
        const ObjB = new classA;
        console.log('constJ - ' + constJ + ' : ' + typeof constJ);
        console.log('ObjA.proOne - ' + ObjA.proOne);
        console.log('constK - ' + constK + ' : ' + typeof constK);
        // console.log('constK.proOne - ' constK.proOne);
        console.log('classA - ' + classA + ' : ' + typeof classA);
        console.log('ObjB.proOne - ' + ObjB.proOne);
    }

    function deleteFunc() {
        delete constA; console.log('constA - ' + constA);
        delete constB; console.log('constB - ' + constB);
        delete constC; console.log('constC - ' + constC);
        // delete constD; console.log('constD - ' + constD);
        // delete constE; console.log('constE - ' + constE);
        delete constF[0]; console.log('constF[0] - ' + constF[0]);
        delete constF; console.log('constF - ' + constF);
        // delete constG; console.log('constG - ' + constG);
        delete constH.proOne; console.log('constH.proOne - ' + constH.proOne);
                console.log('constH.proTwo - ' + constH.proTwo);
        delete constH; console.log('constH - ' + constH);
        // delete constI; console.log('constI - ' + constI);
        
        const ObjA = new constJ;
        const ObjB = new classA;

        delete ObjA.proOne; console.log('ObjA.proOne - ' + ObjA.proOne);
        console.log('ObjA.proTwo - ' + ObjA.proTwo);
        delete ObjA; console.log('ObjA - ' + ObjA);
        delete constJ.prototype.proTwo;
                    console.log('constJ.prototype.proTwo - ' + constJ.prototype.proTwo);
        delete constJ; console.log('constJ - ' + constJ);
        delete ObjB.proOne; console.log('ObjB.proOne - ' + ObjB.proOne);
        console.log('ObjB.proTwo - ' + ObjB.proTwo);
        delete ObjB; console.log('ObjB - ' + ObjB);
        delete classA.prototype.Two; 
                    console.log('classA.prototype.proTwo - ' + classA.prototype.proTwo);
        delete classA; console.log('classA - ' + classA);
    }

    function generatorFunc() {
        function* generator() {
            while(arguments[0] < 5) {
                yield arguments[0];
                arguments[0]++;
            }
        }

        const iterator = generator(0);

        console.log('generator - ' + iterator.next().value);
        console.log('generator - ' + iterator.next().value);

        console.log('generator - ' + generator(0).next().value);
        console.log('generator - ' + generator().next().value);

        function* generatorOne() {
            while(arguments[0] < 5) {
                yield arguments[0];
                arguments[0]++;
            }
        }

        function* generatorTwo() {
            yield arguments[0];
        }

        function* generatorThree() {
            yield 11;
            yield 22;
            yield 33;
        }

        function* generatorFour() {
            yield arguments[0];
        }

        function* generatorFive() {
            yield* generatorOne(arguments[0]);

            while(arguments[0] < 30) {
                arguments[0] += 10;
                yield* generatorTwo(arguments[0]);
            }

            yield* generatorThree();

            yield* generatorFour(100);
            yield* generatorFour(200)
        }

        const iteratorNext = generatorFive(0);

        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next());
        console.log('generator - ' + iteratorNext.next().value);
        console.log('generator - ' + iteratorNext.next());
    }

    printFunc();
    deleteFunc();
    generatorFunc();
}

// ===============================================================================

console.log('\noperator_aa : examples ....... '); operator_aa();
console.log('\noperator_ab : assignment ..... '); operator_ab();
console.log('\noperator_ac : '); operator_ac();
console.log('\noperator_ad : '); operator_ad();
console.log('\noperator_ae : .... '); operator_ae();
console.log('\noperator_af : .... '); operator_af();

// -------------------------------------------------------------------------------
// Operator Precedences
// -------------------------------------------------------------------------------
// 01 operator precedences
// -- operator precedence describes the order in which operations are performed in an 
//    in an arithmetic expression
// -- multiplication (*) and division (/) have higher precedence than (+ | -)
// -- as in traditional mathematics, multiplication is done first
// -- as in traditional mathematics, the precedence can be changed by parentheses
// -- when using parentheses, the operations inside the parentheses are computed first 
// -- when may operations have the same precedence (like, + | -), they are computed 
//    from (left to right )

// 02 javascript operator precedences value
// -- pale red entries indicates ECMAScript 2016 or higher
// -- 18. ()         - expression grouping   - (3 + 4)

// -- 17. .          - member                 - person.name
// -- 17. []         - member                 - person['name']
// -- 17. ()         - function call          - myFunction()
// -- 17. new        - (with arguments)       - new Person('john', 'deo')

// -- 16. new        - (without arguments)    - new Date()

// -- 15. ++         - Postfix Increment      - variable++
// -- 15. --         - Postfix decrement      - variable--
// -- 14. ++         - prefix increment       - ++variable
// -- 14. --         - prefix decrement       - --variable

// -- 14. !          - logical NOT            - !(x==y)
// -- 14. ~          - bitwise NOT            - ~x
// -- 14. typeof     - data-type              - typeof x

// -- 13. **         - exponentiation         - 10**2

// -- 12. *          - multiplication         - 10 * 5
// -- 12. /          - division               - 10 / 5
// -- 12. %          - remainder              - 10 / 5
// -- 11. +          - addison                - 10 + 5
// -- 11. -          - subtraction            - 10 - 5

// -- 10. <<         - shift-left             - x << 2
// -- 10. >>         - shift-right (signed)   - x >> 2
// -- 10. >>>        - shift-right (unsigned) - x >>> 2

// -- 09. <          - less-than              - x < y
// -- 09. <=         - less than or equal     - x <= y
// -- 09. >          - greater-than           - x > y
// -- 09. >=         - greater-than or equal  - x >= y
// -- 09. in         - property in object     - 'PI' in Math
// -- 09. instanceof - instance of object - instanceof Array

// -- 08. ==         - equal              - x == y
// -- 08. ===        - strict equal       - x ===y
// -- 08. !=         - unequal            - x != y
// -- 08. !==        - strict unequal     - x !== y

// -- 07. &          - Bitwise AND        - x & y
// -- 06. ^          - Bitwise XOR        - x ^ y
// -- 05. |          - Bitwise OR         - x | y
// -- 04. &&         - logical AND        - x && y
// -- 03. ||         - logical OR         - x || y
// -- 03. ??         - Null Coalescing    - x ?? y

// -- 02. ?:         - condition          - ? 'yes' : 'no'
// -- 02. +=         - assignment         - x += y
// -- 02. -=         - assignment         - x /= y
// -- 02. *=         - assignment         - x *= y
// -- 02. /=         - assignment         - x /= y
// -- 02. %=         - assignment         - x %= y
// -- 02. <<=        - assignment         - x <<= y
// -- 02. >>=        - assignment         - x >>= y
// -- 02. >>>=       - assignment         - x >>>= y
// -- 02. &=         - assignment         - x &= y
// -- 02. |=         - assignment         - x |= y
// -- 02. ^=         - assignment         - x ^= y
// -- 02. =>         - arrow              - x => y
// -- 02. yield      - pause / resume     - yield x
// -- 02. yield*     - delegate           - yield* x
// -- 02. ...        - spread             - ... x

// -- 01. ,          - comma              - x, y