// socpe | hoisting | strict
// variable | var-let-const
// operator 1 | operator 2 | operator 3 | operator 4

console.log('JavaScript Review (scope | hoisting | strict | variable) .');

// =======================================================================
function func_aa() {
    const localConstArray = [1, 2, 3];
    const localConstObject = {
        propertyOne: null,
        propertyTwo: null,
        propertyThree: null,
        method: function () {
            this.propertyOne = arguments[0];
            this.propertyTwo = arguments[1];
            this.propertyThree = arguments[2];
            return this.propertyOne + this.propertyTwo + this.propertyThree;
        }
    };

    console.log('localConstObject.method - ' + localConstObject.method(...localConstArray));
}

// =======================================================================
function func_ab() {
    const localGlobal_Array = [11, 22, 33];

    function localFunc_one() {
        var localVar = arguments[0];
        let localLet = arguments[1];
        const localConst = arguments[2];

        console.log('localVar - ' + localVar);
        console.log('localLet - ' + localLet);
        console.log('localConst - ' + localConst);
    }

    function localFunc_two(argOne, argTwo, argThree) {
        var localVar = argOne + localGlobal_Array[0];
        let localLet = argTwo + localGlobal_Array[1];
        const localConst = argThree + localGlobal_Array[2];

        console.log('localVar - ' + localVar);
        console.log('localLet - ' + localLet);
        console.log('localConst - ' + localConst);
        console.log('localGlobal_Var - ' + localGlobal_Var);
        // console.log('localGlobal_Let - ' + localGlobal_Let);
        // console.log('localGlobal_Const - ' + localGlobal_Const);
    }

    localFunc_one(...localGlobal_Array);
    localFunc_two(...localGlobal_Array);

    var localGlobal_Var = 111;
    let localGlobal_Let = 222;
    const localGlobal_Const = 333;

    console.log('localGlobal_Var - ' + localGlobal_Var);
    console.log('localGlobal_Let - ' + localGlobal_Let);
    console.log('localGlobal_Const - ' + localGlobal_Const);
}

// =======================================================================
console.log('\nfunc_aa : '); func_aa();
console.log('\nfunc_ab : '); func_ab();

// =======================================================================