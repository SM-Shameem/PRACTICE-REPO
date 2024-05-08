let out = (arg = '\n') => console.log(arg);
// # CONDITIONAL | ITERATOR | ERROR STATEMENTS ||||||||||||||||||||||||||||||||
// 1. control statements (if | switch)
// 2. iterator statements (while | do .. while)



// ============================================================================
// ----- 01. conditional-statement and if..else keyword -----------------------
// ============================================================================
function example_one() {
    out('01. conditional-statement and if..else keyword ........');

    let localOne = 1;
    if (localOne) {
        out('unary variable condition 1 ...');
    }

    if(!localOne) {
        out('unary variable condition 2 ...');
    }

    if (1) {
        out('unary literal condition - 1 ...');
    } 
    
    if (!1) {
        out('unary literal condition - 2 ...');
    }

    // ----------------------------------------------------
    if (localOne) out('unary variable condition - 1 ...');
    if (!localOne) out('unary variable condition - 2 ...');
    if(0) out('unary literal condition 1 ...');
    if(1) out('unary literal condition 2 ...');
    out('statement out of condition ...');

    // ----------------------------------------------------
    if (localOne == 1) out('equal condition ...');
    else out('not-equal or else condition ...');

    if (localOne != 1) out('not-equal condition ...');
    else if (localOne == 1) out('equal condition ...');

    if (localOne == 1) out('equal condition ...');
    else if (localOne != 1) out('not-equal condition ...');
    else out('else condition ...');

    if (localOne < 1) out('less-than condition ...');
    else if (localOne > 1) out('greater-than condition ...');
    else if (localOne == 1) out('equal condition ...');
    else if (localOne != 1) out('not-equal condition ...');
    else out('else condition ...');

    // ----------------------------------------------------
    if (localOne == 1) {
        out('equal-condition ...');
        out('another statement related to equal');        
    } else if (localOne != 1) {
        out('not-equal-condition ...');
        out('another statement related to not-equal');
    } else out('else condition ...');

    if (localOne == 2) out('equal-condition ...');
    else if (localOne != 2) {
        out('not-equal condition ...');
        out('another statement related to equal');
    } else {
        out('else condition ...');
        out('another statement related to else');
    }

    // ----------------------------------------------------
    if (localOne == 1) 
        if (localOne == 2) out('not-equal condition ...');
        else out('else condition ...');
    else out('another condition ...');

    // ----------------------------------------------------
    if (localOne == 1) {
        out('another statement ...');
        if (localOne != 1) out('not-equal condition ...');
        else {
            out('another else statement ...');
        }
    } else if (localOne != 1) out('not-equal condition ...');
    else {
        if (localOne > 1) {
            out('greater-than statement ...');
            out('another statement related to greater-than');
        } else if (localOne < 1) out('less-than statement ...');
        else if (localOne >= 1) {
            out('grater-than equal-to statement ...');
            out('another statement related to greater-than statement ...');
        } else out('another statement ...');
    }
    
    // ----------------------------------------------------
    if (localOne == 1) out('equal-to condition ...');
    else 
        if (localOne != 1) out('not-equal-to condition ...');
    else 
        if (!localOne) 
            if (!1) out('nested not condition ...');
            else if (0) out('nested not condition ...');
            else out('nested else condition ...');
    else out('else condition ...');

    // ----------------------------------------------------
    if (localOne < 1) {
        out('less-than condition ...');
        out('another statement ...');
    } else 
        if (localOne > 1) {
            out('grater-than condition ...');
            if (!localOne) {
                out('nested not condition ...');
            } else out('nested else condition ...');
        } else 
            if (localOne <= 1) {
                out('less-than equal condition ...');
                out('another statement ...');
            } else {
                out('else condition ...');
                out('another statement ...');
            }

    // ----------------------------------------------------
    if (localOne = 1) {
        var blockVar = null;
        let blockLet = null;
        const blockConst = null;
        block = null;

        function blockFunc() {
            return null;
        }
    }

    out('blockVar : ' + blockVar);
    // out('blockLet : ' + blockLet);
    // out('blockConst : ' + blockConst);
    out('block : ' + block);
    out('blockFunc : ' + blockFunc());

    // ----------------------------------------------------
    if (localOne == 10 - 9) out('conditional expression ...');
    if (localOne != (10 == 9 ? true : false)) out('conditional expression ...');
    if (localOne != (arg => arg)) out('conditional expression ...');
    // if (let localOne = 1) out('declaration statement ...');
}



// ============================================================================
// ----- 02. conditional-statement and switch keyword -------------------------
// ============================================================================
function example_two() {
    out('02. conditional-statement and switch keyword .........');

    // switch(1) case 1: out('switch statement ...'); break;
    switch(1) {
        case 1: out('switch statement ...'); break;
    }

    switch(1) {
        case 1: out('switch statement 1 ...');
        case 2: out('switch statement 2 ...');
    }

    switch(1) {
        case 1: out('switch statement 1 ...'); break;
        case 2: out('switch statement 2 ...'); break;
        case 3: out('switch statement 3 ...'); break; 
        default : out('default statement ..'); break;
    }

    switch(6) {
        default: out('default statement ...');
        case 1: out('switch statement 1 ...');
        case 2: out('switch statement 2 ...'); break;
        case 3: out('switch statement 3 ...'); break; 
        case 4: out('switch statement 4 ...');
        case 5: out('switch statement 5 ...'); break;
    }

    switch(1) {
        case 1: out('switch statement 1 ...');
        case 2: out('switch statement 2 ...');
        case 3: out('switch statement 3 ...');
        default: out('default statement ...');
        // default: out('default statement ...');
    }

    // ----------------------------------------------------
    switch(1) {
        case 1: 
            out('switch - case 1 ...');
        break;
        case 2: 
            out('switch - case 2 ...');
            out('another statement ...');
        case 3: 
            out('switch - case 3 ...');
            if (1) out('conditional statement ...');
        break;
        case 4: 
            switch(4) {
                case 4: out('switch - case 4 ...'); break;
                default: out('default statement ...');
            }
            out('another statement ....');
            if (1) out('conditional Statement ...');
            else out('else statement ...');
        break;
        default : 
            out('default statement ...'); 
            if (1) {
                out('conditional statement ...');
                switch (0) {
                    case 0: out('another statement ...');
                }
            }    
        break;
    }

    // ----------------------------------------------------
    switch(1) {
        case 1: case 2: case 3: case 4: case 5:
        case 6: case 7: case 8: case 9: 
            out('number cases ...');
        break; 
        case 0: out('zero case ...'); break;
        case a: 
        case e: 
        case i: 
        case o: 
        case u: 
            out('vowel cases ...');
        default: out('default case ...'); 
    }

    // ----------------------------------------------------
    // switch (let i = 0) { case 0: out('switch statement - 0 ...'); }
    // switch(1);
    
    switch (1 == 1 ? true : false) {
        case true: out('true case ...'); break;
        case false: out('false case ...'); break; 
    }

    switch (1+2) {
        case 1: out('switch statement 1 ...'); break;
        case 2: out('switch statement 2 ...'); break;
        case 3: out('switch statement 3 ...'); break;
    }

    let option = null;
    switch (option) {
        case 1: out('switch statement 1 ...'); 
        default : out('default statement ...'); break; 
    }

    switch (option+1) {
        case 1: out('switch statement 1 ...');
        case 2: out('switch statement 2 ...'); break; 
        default : out('default statement ...');
    }

    // ----------------------------------------------------
    switch (1 == 1 ? true : false) {
        case 1 != 1 ? false : true: 
            out('first case is executed ...');
            break;
        default : out('default case is executed ...');
    }

    switch (1) {
        case '1': out('case is character ...'); break;
        case "1": out('case is string ......'); break;
        case 1: out('case is numeric .......'); break;  
    }

    switch(1) {
        case console.log(1): out('log 1 .....'); break;
        case console.log(0): out('log 0 .....'); break;
        default: out('default case .....'); 
    }

    // ----------------------------------------------------
    switch(3) {
        case 1: out('switch case 1 ...'); break;
        // case 2: out('switch case 2 ...'); continue;
        case 3: out('switch case 3 ...'); // return;
        case 4: out('switch case 4 ...');
        default: out('switch default .');
    }

    function localOne(arg) {
        switch(arg) {
            case 1: out('case 1 - statement ....');
            case 2: return 'case 2 - statement ....';
            case 3: out('case 3 - statement ...');
        }

        switch(arg) {
            case 1: out('switch 1 - statement ...'); 
            case 2: out('switch 2 - statement ...'); 
            case 3: out('switch 3 - statement ...'); return;
            case 4: out('switch 4 - statement ...'); 
            case 5: out('switch 4 - statement ...'); break;
            default: out('default - statement ...');
        }
    }

    out(localOne(2));
    localOne(3);

    for(let i = null; i < 10; i++) {
        switch(i) {
            case 1: out('value of i : ' + i); break;
            case 2: out('value of i : ' + i); break;
            case 3: out('value of i : ' + i); continue;
            case 4: out('value of i : ' + i); break;
            case 5: out('value of i : ' + i); continue;
            case 6: out('value of i : ' + i); continue;
            case 7: out('value of i : ' + i); break;
            case 8: out('value of i : ' + i); continue;
            case 9: out('value of i : ' + i); 
            default: out('default - case .');
        }
    }

    for(let i = null; i < 4; i++) {
        switch(i) {
            case 1: 
                var x = 10; 
                let y = 11;
                out('value of x - ' + x);
                out('value of y - ' + y);
                break;
            case 2: 
                // let x = 20; 
                x = null;
                // y = null;
                out('value of x - ' + x);
                // out('value of y - ' + y);
                break;
            case 3: 
                const z = 30; 
                out('value of z - ' + z);
                break;
        }   
        
        // ----------------------------------------------------
        switch (false) {
            case "fetch" in globalThis:
                // Fetch a resource with fetch
                out('fetch ...');
                out('globalThis - ' + globalThis);
                break;
            case "XMLHttpRequest" in globalThis:
                // Fetch a resource with XMLHttpRequest
                out('XMLHttpRequest ...');
                out('globalThis - ' + globalThis);
                break;
            default:
                // Fetch a resource with some custom AJAX logic
                out('AJAX logic ...');
                out('globalThis - ' + globalThis);
                break;
        }

        // switch (true) {
        //     case isSquare(shape):
        //         console.log("This shape is a square.");
        //         // Fall-through, since a square is a rectangle as well!
        //     case isRectangle(shape):
        //         console.log("This shape is a rectangle.");
        //     case isQuadrilateral(shape):
        //         console.log("This shape is a quadrilateral.");
        //         break;
        //     case isCircle(shape):
        //         console.log("This shape is a circle.");
        //         break;
        // }   
    }
}



// ============================================================================
// ----- 03. iterator-statement and while | do..while keyword -----------------
// ============================================================================
function example_three() {
    out('03. iterator-statement and while | do..while keywords ........');

    let x = null;

    while (x < 5) {
        out('value of x - ' + x);
        x++;
    }

    do {
        out('value of x :- ' + x);
        x++;
    } while (x < 5);

    x = null;
    while (x < 7) {
        x++;
        if (x == 3) continue;
        else if (x == 5) break;
        out('value of x -: ' + x);
    }

    // ----------------------------------------------------
    // while (x = 0, x < 5) {
    //     out('value of x : ' + x);
    //     x++;
    // }

    // while (x = 0, x < 5, x++) {
    //     out('value of x : ' + x);
    // }

    // while (let x = 0, x < 5) {
    //     out('value of x : ' + x);
    //     x++;
    // }

    // ----------------------------------------------------
    do {
        out('value of x : ' + x);
    } while (x+1 == (arg => arg));

    do {
        out('value of x : ' + x);
        if (x == null) x++;
        else x--;
    } while (x < 5 && x > null);

    do {
        out('value of x : ' + x);
    } while ((1 == 1 ? true : false) == x);

    // ----------------------------------------------------
    // while(0) 
    //     out('while loop ... infinitive');

    // do 
    //     out('do..while ... infinitive');
    //     // out('another statement');
    // while(1);

    // -> using assignment as a condition 
}



// ============================================================================
// ----- examples -------------------------------------------------------------
// ============================================================================
out(); example_one();
out(); example_two();
out(); example_three();