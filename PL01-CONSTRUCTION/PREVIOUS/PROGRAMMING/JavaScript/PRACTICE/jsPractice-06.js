let out = (arg = '\n') => console.log(arg);
// # ERROR STATEMENTS |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. error statements (try .. catch .. finally | throw)

// ============================================================================
// ----- 07. iterator-statement and try..catch..finally keyword ---------------
// ============================================================================
function example_seven() {
    // 1. try..catch..finally
    // 2. syntax (tryStatement | catchStatement | finallyStatement)
    // 3. description 
    // -> catch binding 
    // -> the finally block
    // 4. examples 
    // -> unconditional catch block 
    // -> conditional catch blocks
    // -> nested try blocks 
    // -> returning from a finally block

    // -----------------------------------------------------------------------
    // -- try.catch - marks a block of statement to try, 
    // -  and specifies a response, 
    // -  should an exception be thrown 

    // -- the (try..catch) statement is comprised of a (try) block 
    // -  and either a (catch) block, a (finally) block, or both
    // -- the code in (try) block is executed first, and if it throws an 
    // -  exception, the code in the (catch) block will be executed 
    // -- the code in the (finally) block will be executed before control flow 
    // -  exits the entire constructs 
    // -- syntax - 
    // -- tryStatement 
    // -  the statements to be executed 
    // -- catchStatement 
    // -  statement that is executed if an exception is thrown in the (try) block
    // -- exceptionVar (optional)
    // -  an optional (identifier | pattern) to hold the caught exception for the
    // -  associated (catch) block. 
    // -  if the (catch) block not use the exception's value, you can omit the 
    // -  (exceptionVar) and its surrounding parentheses 
    // -- finallyStatement 
    // -  statements that are executed before control flow exits the 
    // -  (try..catch..finally) constructs.
    // -  statements execute regardless of whether an exception was thrown or caught

    // -----------------------------------------------------------------------
    const existentFunction = () => 0;

    try {
        out('existentFunction - ' + existentFunction());
    } catch(error) {
        out('error - ' + error);
    }

    try { out('nonExistentFunction - ' + nonExistentFunction()); }
    catch(error) { out('error - ' + error); }
}



// ============================================================================
// ----- 08. iterator-statement and throw keyword -----------------------------
// ============================================================================
function example_eight() {
    // 1. throw
    // 2. syntax (expression)
    // 3. description 
    // -> automatic semicolon insertion 
    // 4. examples 
    // -> throwing a user-defined error 
    // -> throwing an existing object 
}



// ============================================================================
// ----- examples -------------------------------------------------------------
// ============================================================================
out(); example_seven();
out(); example_eight();