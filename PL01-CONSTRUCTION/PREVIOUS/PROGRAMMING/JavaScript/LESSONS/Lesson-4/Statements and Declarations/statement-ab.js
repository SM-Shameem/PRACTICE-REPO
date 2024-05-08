// =======================================================================
// error statements
// =======================================================================
// 1. try..catch..finally
// 2. throw

// =======================================================================
const statement_ab1 = function () {
  // -> the (try...catch) statement is comprised of a (try) block and 
  // -- either a (catch) block, a (finally) block, or both
  // -> the code in the (try) block is executed first, and if it throws 
  // -- an exception, the code in the (catch) block will be executed
  // -> the code in the (finally) block will always be executed before 
  // -- control flow exists the entire construction 

  // NB (SYNTAX)
  // -> (try) - the statements to be executed 
  // -> (catch) - statement that is executed if an exception is thrown in the 
  // -- (try) block
  // -> (exceptionVar) - an (optional) identifier to hold the caught exception
  // -- for the associated (catch) block. if the (catch) block does not utilize
  // -- the exception's value, you can omit the (exceptionVar) and its
  // -- surrounding parentheses, as (catch { ... }) 
  // -> (finally) - statement that are executed before control flow exits the 
  // -- (try..catch..finally) construct. these statements execute regardless of
  // -- whether an exception was thrown or caught

  try {
    nonExistentFunction();
  } catch (error) {
    console.log(error);
    // expected output --
    // ReferenceError: nonExistentFunction is not defined
    // Note: the exact output may be browser-dependent
  }

  try {
    nonExistentFunction();
  } catch {
    console.log('my exception');
  }

  // ---------------------------
  function testOne() {
    try {
      nonExistentFunction();
      return true;
    } catch {
      return false;
    }
  }

  function testTwo() {
    try {
      nonExistentFunction();
    } catch (e) {
      return e;
    }
  }

  console.log('testOne - ' + testOne());
  console.log('testTwo - ' + testTwo());

  // try 
  //     nonExistentFunction();
  // catch (e) 
  //     console.log(e);

  function testThree() {
    // func_a();

    try {
      func_a();
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
    }
  }

  console.log('testThree - ' + testThree());
  console.log('\n');

  // --------------------------------------------------
  // NB
  // -> the (try) statement always starts with a (try) block
  // -- then, a (catch | finally) block must be present 
  // -- it's also possible to have both (catch and finally) blocks
  // -> this gives us three forms for the (try) statement - 
  // -- try .. catch | try .. finally | try .. catch .. finally 
  // -> unlike other constructs such as (if | for), the (try..catch..finally)
  // -- blocks must be blocks, instead of single statements 

  // -> a (catch) block contains statements that specify what to do if an
  // -- exception is thrown in the (try) block 
  // -> if any statement or function within the (try) block throws an exception
  // -- control is immediately shifted to the (catch) block
  // -> if no exception is thrown in the (try) block, the (catch) block is 
  // -- skipped 
  // -> the (finally) block will always execute before control flow exits the 
  // -- (try .. catch .. finally) construct
  // -- it always execute, regardless of whether an exception was thrown or 
  // -- caught 
  // -> you can nest one or more (try) statements 
  // -- if an inner (try) statement does not have a (catch) block, the 
  // -- enclosing (try) statements (catch) block is used instead 
  // -> you can also use the (try) statement to handle javascript exception

  // NB (unconditional catch-block | the exception identifier)
  // -> the (catch) block specifies an identifier (like e) that holds the 
  // -- value of the exception, this value is only available in the (scope)
  // -- of the (catch) block

  // NB (conditional catch-block)
  // -> you can create conditional (catch) block by combining (try .. catch)
  // -- blocks with (if .. else) structures, 
  // -> a common use case for this is to only catch (and silence) a small 
  // -- subset of excepted errors, and then re-throw the error in other cases

  // NB (the finally-block)
  // -> the (finally) block contains statements to execute after the (try) 
  // -- block and (catch) blocks execute, but before the statements following
  // -- the (try .. catch .. finally) block
  // -> control flow will always enter the (finally) block, which can proceed 
  // -- in one of the following ways - 
  // --> immediately before the (try) block finishes execution normally and 
  // --- no exceptions were thrown)
  // --> immediately before the (catch) block finishes execution normally 
  // --> immediately before a control-flow statement 
  // --- (return | throw | break | continue) is executed in the (try) block or 
  // --- (catch) block 

  // -> if an exception is thrown from the (try) block, even when there's no 
  // -- (catch) block to handle the exception, the (finally) block still 
  // -- executes, in which case the exception is still thrown immediately
  // -- after the (finally) block finishes executing 
  // -> the following examples shows one use for the (finally) block 
  // -- the code opens a file and then executes statements that use the file,
  // -- the (finally) block makes sure the file always closes after it is used
  // -- even it an exception was thrown 
  // -> control flow statements (return | throw | break | continue) in the 
  // -- (finally) block will (mask) any completion value of the (try) block or
  // -- (catch) block
}

// =======================================================================
const statement_ab2 = function () {
  function test_aa() {
    console.log('letOne - ' + letOne);
    let letOne = 10;
  }

  function test_ab() {
    try {
      console.log('letOne - ' + letOne);
      let letOne = 10;
    } catch (err) {
      console.log(err);
    }
  }

  function test_ac() {
    try {
      test_aa()
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
    }
  }

  function test_ad() {
    try {
      test_aa()
    } catch {
      console.log('exception');
    }
  }

  test_ab();
  console.log('\n');
  test_ac();
  console.log('\n');
  test_ad();
  console.log('\n');
  // test_aa(); console.log('\n');

  // -----------------------------------
  function test_ba() {
    try {
      document.getElementById('idOne');
    } catch (err) {
      console.log(err);
      console.log(err.name);
      console.log(err.message);
    } finally {
      console.log('only js debug with nodejs')
    }
  }

  const test_bb = function () {
    function func() {
      let x = arguments[0];
      let y = arguments[1];

      if (x == y) {
        console.log('x - ' + x);
        console.log('y - ' + y);
      } else throw 'x is not equal y';
    }

    try {
      func(10, 20);
    } catch (err) {
      console.log('name - ' + err.name);
      console.log('message - ' + err.message);
      console.log('state - ' + err.state);
      console.log(err);

      // x = y;
      // console.log('x - ' + x);
      // console.log('y - ' + y);
    } finally {
      console.log('end of error checking');
    }
  }

  const test_bc = function () {
    function func() {
      let x = arguments[0];
      // let y = arguments[1];

      if (x === y) console.log('both are equal');
    }

    try {
      console.log('start try block');
      func(10, '10');

      // let x = arguments[0];
      // let y = arguments[1];

      // if (x === y) console.log('both are equal');

      console.log('end of try block');
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      // console.log(err.state);
    } finally {
      console.log('execute finally block')
    }
  }

  const test_bd = function () {
    try {
      let x = 10;
      let y = 20;

      if (x == y) throw 'exception';
      // else break;
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      console.log(err);
    } finally {
      console.log('finally block is execute');
    }
  }

  test_ba();
  console.log('\n');
  test_bb();
  console.log('\n');
  test_bc();
  console.log('\n');
  test_bd();
  console.log('\n');
}

// =======================================================================
const statement_ab3 = function () {
  function test_ca() {
    try {
      console.log('start test - test_ca ...');
      let x = 10;
      let y = 20;
      console.log('end test - test_ca .....');
      return (x + y);
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
    } finally {
      console.log('statement of finally - test_ca ..');
    }
  }

  // ---------------------------------------------------------
  function test_cb(arg) {
    for (arg; arg < 5; arg++) {
      try {
        if (arg < 2) console.log('arg - ' + arg);
        else if (arg == 3) throw new error('exception ...');
        else if (arg == 4) break;
      } catch (err) {
        console.log(err);
      } finally {
        console.log('finally - test_cb ....');
      }
    }

    while (arg < 5) {
      try {
        if (arg < 2) console.log('arg - ' + arg);
        else if (arg == 3) throw 'exception';
        else if (arg == 4) continue;
      } catch (err) {
        console.log(err);
      } finally {
        console.log('finally statement - test_cb ....');
        arg++;
      }
    }
  }

  // ---------------------------------------------------------
  function test_cc() {
    try {
      setTimeout(() => {
        console.log(x + y)
      }, 1000);
    } catch (err) {
      console.log(err.name);
      console.log(err.message)
    }

    try {
      setTimeout(() => {
        try {
          console.log(x + y);
        } catch (err) {
          console.log('inner - ' + err.message);
        }
      }, 1000);
    } catch (err) {
      console.log('outer - ' + err.message);
    }

    try {
      let x = 10;
      let y = 'string';
      console.log(x * y);
    } catch (err) {
      if (err instanceof SyntaxError) console.log('syntax-error');
      else if (err instanceof TypeError) console.log('type-error');
      else if (err instanceof RangeError) console.log('range-error');
      else if (err instanceof EvalError) console.log('eval-error');
      else if (err instanceof URIError) console.log('URI-error');
      else throw err;
    }
  }

  // ---------------------------------------------------------
  function test_cd() {
    const func = function () {
      let x = arguments[0];
      let y = arguments[1];

      if (x == y) return x + y;
      else if (x != y) throw 'values are not equal';
    }

    try {
      try {
        func(11, 22);
      } finally {
        console.log('inner finally statement');
      }
    } catch (err) {
      console.log('outer - ' + err.message);
    } finally {
      console.log('outer finally statement');
    }

    try {
      try {
        func(10, 20);
      } catch (err) {
        console.log('inner - ' + err.message);
      } finally {
        console.log('inner - finally statement');
      }
    } catch (err) {
      console.log('outer - ' + err.message);
    }

    try {
      try {
        func(100, 200);
      } catch (err) {
        console.log('inner - ' + err.message);
        throw err;
      } finally {
        console.log('inner - finally statement');
      }
    } catch (err) {
      console.log('outer - ' + err.message);
    }
  }

  // ---------------------------------------------------------
  function test_ce() {
    function func(arg) {
      if (arg > 0) console.log('arg - ' + arg);
      else throw 'exception';
    }

    try {
      func();
    } catch (err) {
      console.log('error - ' + err);
    } finally {
      console.log('finally statement ...');
    }

    try {
      if (arg > 0) console.log('arg - ' + arg);
      else throw new Error('exception');
    } catch (err) {
      console.log('error - ' + err);
    } finally {
      console.log('finally statement ...');
    }
  }

  test_ca();
  console.log('\n');
  test_cb(0);
  console.log('\n');
  test_cc();
  console.log('\n');
  test_cd();
  console.log('\n');
  test_ce();
  console.log('\n');
}

// =======================================================================
// console.log('error statement (try..catch) .......'); statement_ab1();
console.log('error statement (finally) ..........');
statement_ab2();
console.log('error statement (throw) ............');
statement_ab3();
