// =======================================================================
// control follow statements
// =======================================================================
// 1. if..else
// 2. switch
// 3. break
// 4. continue 
// 5. return 

// =======================================================================
const statement_aa1 = function () {
  // -> the (if..else) statement executes a statement if a specified condition is (true)
  // -> if the condition is (false), another statement in the optional (else) clause will be executed
  // -> multiple (if..else) statements can be nested to create an (else if) clause 
  // -> to execute multiple statements within a clause, use a block statement
  // -- not using blocks may lead to confusing behavior, especially if the 
  // -- code is hand-formatted 

  // NB: 
  // -> do not confuse the primitive boolean values (true | false) with
  // -- truthiness or falseness of the (boolean) object 
  // -> any value that is not (false | undefined | null | 0 | -0 | NaN | empty string "" | any object including Boolean object)
  // -- whose value is (false), is considered (true) when used as the condition

  // NB (SYNTAX): 
  // -> condition : an expression that is considered to be either (true | false)
  // -- condition : conditional clause does not support any declaration
  // -> statement : statement that is executed if condition is (true) 
  // --             can be any statement, including further nested (if) statement
  // -- statement : to execute multiple statements, use a block to group those statements
  // -- statement : to execute no statement, use an (empty) statement 

  let x = 0,
    y = 1;

  if (5 == 5) console.log('condition is true');
  if (5 == '5') console.log('condition is true - typed');
  if (5 === '5') console.log('condition is true - typed all');

  if (x != y) console.log('x and y are not equal');
  else console.log('x and y are equal');

  if (x < y) console.log('x is less-than y');
  else if (x > y) console.log('x is greater-than y');
  else if (x == y) console.log('x and y are equal');

  if (x < 1) console.log('x is less-than 1');
  else if (x > 1) console.log('x is grater-than 1');
  else if (x == 1) console.log('x and 1 are equal');
  else console.log('x and 1 are not same typed');

  if (x != y) {
    console.log('value of x - ' + x);
    console.log('value of y - ' + y);
  }

  if (x < y) {
    if (x === y) {
      console.log('x and y are equal');
    } else console.log('x and y are not equal');
  } else
  if (x >= y) {
    console.log('value of x - ' + x);
    console.log('value of y - ' + y);
    if (x === y) console.log('x and y are equal');
    else if (x !== y) {
      console.log('x and y are not equal')
    } else {
      console.log('x and y is - ' + (x + y));
      if ((x - y) == 0) console.log('x and y is - 0');
    }
  } else console.log('x and y are not same typed');

  console.log('\n');
  // -------------------------------------------------------------------
  // -> can have - single operand as condition 
  // -> can compare - with two literals 
  // -> can have empty statement 
  if (1) console.log('condition is true ');
  else if (1 == 1);
  else;

  // -> creates different scope
  if (!1) {
    const constVar = 1;
    console.log('constVar - ' + constVar);
  } else if (2) {
    const constVar = 2;
    console.log('constVar - ' + constVar);
  }

  // without (block) operator (if) clause does not create any scope
  if (1) {
    const constVar = 3;
  }
  // else if (2) const constVar = 4; 

  // -> clause can have (comparison and logical statement)
  if (x != y && x < y) console.log('value of x - ' + x);
  else
  if (x == y && x > y) console.log('value of x ' + x);
  else console.log('conditions are not true');

  // -> can use (assignment expression) but result will be (false)
  // -> with (assignment can compare) and it will execute if (comparison) is (true)
  // -- and these two expressions are separated with (,) operator
  // -> can use more than one (comparison) statement using (,) operator and 
  // -- here (,) operator act as (&&) operator 

  // -> if..else statement can be nested 
  // -> can not declare any thing inside conditional clause
  if (x = 0) {
    console.log('value of x - ' + x);
    x++;
  } else
  if (x = 1, x == 2)
    console.log('value of x - ' + x);
  else
  if (x = 2, x == 2, x == y)
    console.log('value of x - ' + x);
  else
  if (x = 2, y = x, x != 3, x == y)
    console.log('value of x - ' + x);
  // else 
  //     if (x = 1; x < 2)
  //     console.log('value of x - ' + x);
  // else 
  //     if (let y = 0, y < 1)
  //     console.log('value of y - ' + y);
  else if (y = 1, y < 1)
    if (x == y) console.log('x and y are equal');
    else
  if (x != y) console.log('x and y are not equal');
  else {
    if (x < y) console.log('x is less-than y');
    else console.log('x is greater-than y');
  } else console.log('x and y are not same typed');
  console.log('\n');
}

// =======================================================================
const statement_aa2 = function () {
  // -> the (switch) statement evaluates an expression, 
  // -- matching the expression's value against a series of (case) clauses, 
  // -- and execute statements after the first (case) clause with a matching value, 
  // -- until a (break) statement is encountered or the (switch) statement is over. 
  // -> the (default) clause of a (switch) statement will be jumped to if
  // -- no (case) matches the expression's value
  // -> ths (switch) expression and case clause using the strict equality comparison

  // NB (SYNTAX):
  // -> expression: an expression whose result is matched against each (case) clause
  // -> case valueN (optional): a (case) clause used to match against expression. 
  // -- if the expression matches the specific (valueN) (which can be any expression), 
  // -- execution starts from the first statement after that (case) clause until 
  // -- either the end of the (switch) statement or the first encountered (break)
  // -> default (optional): a (default) clause; if provided, this clause is executed,
  // -- if the value of expression doesn't match any of the (case) clauses.
  // -- a (switch) statement can only have one (default) clause and by convention, is 
  // -- the last clause but it does not need to do so

  // NB (Breaking and Fall-Through & using (break | continue | return)): 
  // -> you can use the (break) statement within a (switch) statement's body
  // -- to break out early, often when all statements between two (case) 
  // -- clauses have been executed
  // -- execution will continue at the first statement following (switch)
  // -> if (break) is omitted, execution will proceed to the next (case) 
  // -- clause, even to the (default) clause, regardless to whether the value 
  // -- of that clause matches, this behavior is called (fall-through) 

  // -> the clause value are only evaluated when necessary - if a match is 
  // -- already found, subsequent (case) clause values will not be evaluated, 
  // -- even when they will be visited by (fall-through)

  // -> in the appropriate context, other control-flow statements also have 
  // -- the effect of breaking out of the (switch) statement 
  // -> if the switch statement is contained in a function, then a return statement 
  // -- terminates the execution of function body and therefore the switch statement
  // -> If the switch statement is contained in a loop, then a continue statement stops 
  // -- the switch statement and jumps to the next iteration of the loop

  // NB (LEXICAL SCOPING): 
  // -> the (case) and (default) clauses are like (labels): they indicate 
  // -- possible places that control flow may jump to.
  // -- however, they don't create lexical (scopes) themselves 
  // -- (neither do they automatically break out - as demonstrated above)
  // -> so, declaring same identifier, in different (case) without (block)
  // -- operator it will create (uncaught SyntaxError) 

  switch (1) {
    case '1':
      console.log('case 1 is executed');
    case 1:
      console.log('case 2 is executed');
    case 2:
      console.log('case 3 is executed');
    case 'N':
      console.log('case N is executed');
  }

  let varOne = null;
  switch (varOne) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      console.log('numeric value');
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      console.log('vowel characters');
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      console.log('consonants characters');
    default:
      console.log('special characters')
  }

  switch (1 + 2) {
    case 0:
      console.log('case 1 is executed');
    default:
      console.log('default case is executed');
    case 4 - 1:
      console.log('case 2 is executed');
  }

  let y = 3;
  switch (x = 3) {
    default:
      console.log('default case is executed');
    case 1:
      console.log('case 1 is executed');
    case 2:
      console.log('case 2 is executed');
    case y:
      console.log('case 4 is executed');
    case 0:
      console.log('case 3 is executed');
  }

  // switch(let x = 0) {
  //     case 0: console.log('case 1 is executed');
  // }

  // switch(0) 
  //     case 0: console.log('case 1 is executed');

  let a = 1,
    b = 2;
  switch (((a == 1) && (b == 1))) {
    case true:
      console.log('case 1 is executed...');
    case false:
      console.log('case 2 is executed...');
    case 1:
      console.log('case 3 is executed ...');
    case 0:
      console.log('case 4 is executed ...');
    case ((a != 1) && (b != 1)):
      console.log('case 5 is executed ...');
    case ((a == 1) && (b != 1)):
      console.log('case 6 is executed ...');
    default:
      console.log('default case is executed');
      // default: console.log('default case repeat');
  }

  switch (1) {
    case 0:
      console.log('case 0 is executed');
    case 1:
      console.log('case 1 is executed');
    case 2:
      console.log('case 2 is executed');
    default:
      console.log('default close is executed');
  }

  switch (1) {
    case -1:
      console.log('case -1 is executed');
    case 0:
      console.log('case 0 is executed');
      break;
    case 1:
      console.log('case 1 is executed');
    case 2:
      console.log('case 1 is executed');
      break;
    default:
      console.log('default close is executed');
  }

  switch (1) {
    case 0:
      console.log('case 0 is executed');
      break;
      // case 1: console.log('case 1 is executed'); return 1;
      // case 2: console.log('case 2 is executed'); return 2;
    default:
      console.log('default clause is executed');
    case 3:
      console.log('case 3 is executed');
      break;
  }

  switch (1) {
    case 0:
      console.log('case 0 is executed');
      break;
    case 1:
      console.log('case 1 is executed');
      break;
    case 2:
      console.log('case 2 is executed');
      break;
    case 3:
      console.log('case 3 is executed');
  }

  switch (1) {
    default:
      console.log('default case is executed');
      break;
    case 'a':
      console.log('case a is executed');
      break;
    case 'b':
      console.log('case b is executed');
      break;
    case 'c':
      console.log('case c is executed');
      break;
  }

  // -----------------------------------------------------------

  const func = function (option) {
    switch (option) {
      case 1:
        return 10;
      case 2:
        return 20;
      default:
        console.log('default case is executed');
    }
  };

  console.log('func return - ' + func(1));
  console.log('func return - ' + func(2));
  console.log('func return - ' + func(3));
  console.log('\n');

  // -----------------------------------------------------------

  for (let i = 0; i < 6; i++) {
    switch (i) {
      case 3:
        console.log('loop switches to next iteration');
        continue;
      case 5:
        console.log('loop switches to break');
        break;
    }
    console.log('value of i - ' + i);
  }

  console.log('\n');

  // -----------------------------------------------------------

  switch (6) {
    case 1:
      console.log('case 1 is executed');
      let x = 10;
      console.log('value of x - ' + x);
    case 2:
      console.log('case 2 is executed');
      let y = 11;
      console.log('value of y - ' + y);
      break;
    case 3:
      console.log('case 3 is executed');
      // let y = 100;
      console.log('value of y - ' + y);
      break;
    case 4: {
      console.log('case 4 is executed');
      let y = 111;
      console.log('value of y - ' + y);
      // console.log('value of x - ' + x);
      break;
    }
    case 5:
      let z = 11; {
        console.log('case 5 is executed');
        // console.log('value of x - ' + x);
        // console.log('value of y - ' + y);
        console.log('value of z - ' + z);
      }
      break;
    case 6: {
      let x = 1,
        y = 2,
        z = 3;
      console.log('case 6 is executed');
      console.log('value of x - ' + x);
      console.log('value of y - ' + y);
      console.log('value of z - ' + z);
    }
    break;
  }

  console.log('\n');

  // -----------------------------------------------------------

  switch (8) {
    case 1:
      console.log('case 1 is executed');
      break;
    case 2: {
      console.log('case 2 is executed');
      break;
    }
    case 3: {
      console.log('case 3 is executed');
    }
    break;
  case 4:
    if (4 == 4) console.log('case 4 is executed - the (if) statement');
    break;
  case 5:
    for (; 1 == 1;) {
      console.log('case 5 is executed - the (for) loop');
      break;
    }
    case 6:
      switch (6) {
        case 6:
          console.log('case 6 is executed - the (switch) statement');
          break;
      }
      case 7: {
        switch (7) {
          case 7:
            console.log('case 7 is executed - the (switch) statement');
        }
        break;
      }
      case 8:
        switch (8) {
          case 8:
            console.log('case 8 is executed');
            break;
        }
        break;
  }

  console.log('\n');
}

// =======================================================================
const statement_aa3 = function () {
  // -> the (break) statement terminates the current (loop | switch) 
  // -- statement and transfers program control to the statement 
  // -- following the terminated statement 
  // -> it can also be used to jump past a (labeled) statement when 
  // -- used within that labeled statement 

  // NB (SYNTAX): 
  // -> level (optional), identifier associated with the label of the 
  // -- statement to break to.
  // -> if the (break) statement is not nested within (loop or switch),
  // -- then the (label) identifier is required 

  // NB: 
  // -> when (break) is encountered. the program breaks out of the 
  // -- innermost (switch or loop) statement and continue executing 
  // -- the next statement after that 
  // -> when (break label) is encountered, the program breaks out of 
  // -- the statement labeled with (label) and continues executing the 
  // -- next statement after that.  
  // -> (break) statement needs to be nested within referenced (label)
  // -> the labeled statement can be any statement 
  // -- (commonly a block statement), it does not have to be another 
  // -- loop statement 
  // -> a (break) statement, with or without a following (label), cannot
  // -- be used at the top level of a (script, module, function) body, 
  // -- or (static initialization block), even when the function or class
  // -- is further contained within a loop

  // EXAM: 
  // 1. break in while loop 
  // 2. break in a switch statement 
  // 3. break in labeled block 
  // 4. unsyntactic break statement 

  function funcOne() {

    for (let i = 0; i < 3; i++) {
      console.log('for - before break ....');
      break;
      return 0;
      console.log('for - after break .....');
    }

    while (1) {
      console.log('while - before break ....');
      break;
      return 0;
      console.log('while - after break .....');
    }

    for (let i = 0; i < 4; i++) {
      console.log('for - statement ' + i);
      if (i == 2) continue;
      else if (i == 3) break;
      console.log('for - after condition ....');
    }

    {
      console.log('block - statement ....');
      // break;
      // continue;
      return 0;

      // if (0 == 0) break;
      // if (0 == 0) continue;
      // break;
    }

    console.log('funcOne statement ....');
    // break;
    // continue;

    return 0;
  }

  function funcTwo() {
    levelOne: {
      console.log('levelOne - statement ....');
      break levelOne;
      console.log('levelOne - after break ..');
    }

    levelTwo: {
      console.log('levelTwo - statement ....');
      // continue levelTwo;
      console.log('levelTwo - after continue ....');
    }

    levelThree: {
      console.log('levelThree - statement ....');
      levelThree_inner: {
        console.log('levelThree_inner - statement ....');
        // continue levelThree;
        // continue levelThree_inner;
        break levelThree_inner;
        console.log('levelThree_inner - after break ....');
      }

      console.log('levelThree_inner - after break ...');
      levelThree_inner_2: {
        console.log('levelThree_inner_2 - statement ...');
        break levelThree;
      }

      console.log('levelThree - after break ...');
    }

    levelFour: {
      console.log('levelFour - statement ...');
      levelFour_inner: {
        console.log('levelFour_inner - statement ...');
        return 0;
        console.log('levelFour_inner - after return ...');
      }
      console.log('levelFour - after return ...');
    }
  }

  function funcThree() {
    for (let x = 0; x < 4; x++) {
      console.log('for - ' + x);
      if (x == 2) continue;
      else if (x == 3) break;
      console.log('for - after condition ..');
    }

    levelOne: for (let x = 0; x < 4; x++) {
      console.log('for - ' + x);
      if (x == 2) continue levelOne;
      else if (x == 3) break levelOne;
      console.log('for - after condition ..');
    }

    let i = 0;
    levelTwo: while (i < 4) {
      console.log('while - ' + i);

      if (i == 3) return 0;
      else i++;

      levelTwo_inner: for (let x = 0; x < 4; x++) {
        console.log('for - ' + x);
        if (x == 2) continue levelTwo_inner;
        else if (x == (i + 2)) break levelTwo_inner;
        else if (x == 3) continue levelTwo;
        console.log('for - after condition ..');
      }

      console.log('while - after condition ..');
    }
  }

  function funcFour() {
    let option = 4;
    levelOne: switch (option) {
      case 1:
        console.log('case 1 ....');
        break;
      case 2:
        console.log('case 2 ....'); // continue levelOne;
      case 3:
        console.log('case 3 ....');
        break levelOne;
      case 4: {
        console.log('case 4 ....');
        option = 5;
        // return levelOne;
      }
      case 5:
        console.log('case 5 ....');
        return option;
    }
  }

  funcOne();
  funcTwo();
  funcThree();
  funcFour();
}

// =======================================================================
console.log('control-flow statement (if..else) .................');
statement_aa1();
console.log('control-flow statement (switch) ...................');
statement_aa2();
console.log('control-flow statement (block, break, return) .....');
statement_aa3();
