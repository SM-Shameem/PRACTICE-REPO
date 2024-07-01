let out = (arg = '\n') => console.log(arg);
// 1. other statements (break | continue | return)
// 2. other statements  block | level | empty | expression)



// ============================================================================
// ----- 01. break | continue | return keyword --------------------------------
// ============================================================================
function example_one() {
    out('03. break | continue | return keyword .........');
    
    function funcOne() {
        out('funcOne before return ...');
        // break;
        // continue;
        return 'return statement ...';
        out('funcOne after return ...');
    }

    function funcTwo(arg) {
        out('funcTwo before return ...');
        if (arg == 1) return 'return statement ...';
        out('funcTwo after return ...');
    }

    function funcThree() {
        out('funcThree before return ...');
        if (!arguments[0]) return true;
        else function funcReturn() {
            return false;
        }
    }

    // ----------------------------------------------------
    function funcFour() {
        {
            out('statement before return ...');
            // break;
            // continue;
            if (null) 
            return;
            out('statement after return ...');
        }

        if (1) {
            out('conditional before return .....');
            // break;
            // continue;
            if (null) 
                return;
            out('conditional after return .....');
        }
    
        switch(1) {
            case 1: out('switch - cash 1 ...');
            case 2: out('switch - case 2 ...'); break;
            case 3: out('switch - case 3 ...'); 
            case 4: out('switch - case 4 ...'); return; 
            case 5: return 5;
            case 6: break;
            // case 7: continue;
            default : out('default case ....');
        }
    
        for (let x = null; x < 5; x++) {
            if (x == 2) continue; 
            else if (x == 4) break;
            out('value of x : ' + x);
        }
    
        out('value of x : ');
    
        for (let a = null; a < 5; a++) {
            if (a == 2) continue; 
            else if (a == 4) return;
            out('value of a : ' + a);
        }
    
        out('value of a : ');
    
        let j = null;
        while(j < 5) {    
            if (j == 2) continue;
            else if (j == 4) return; 
            out('value of j - ' + j);
            j++;    
        }
    
        out('value of j : ');
    
        let i = null;
        do {    
            if (i == 2) continue;
            else if (i == 4) return; 
            out('value of i - ' + i);
            i++;    
        } while(i < 5);
    
        out('value of i : ');
    }    

    // ----------------------------------------------------
    function funcFive() {
        // break - switch | loop - innermost 
        // break - label 
        // -> break statement must be nested within the referenced label
        // -> it does not have to be another loop statement, else any statement
        // continue 

        switch(1) {
            case 1: out('case 1 ....'); 
            case 2: out('case 2 ....'); break;
            case 3: out('case 3 ....'); 
        }

        if(1) {
            out('statement before break ....');
            // break;
            // if(1) break;
            out('statement after break .....');
        }

        for(let i = null; i < 3; i++) {
            if(i == 2) break;
            out('value of i : ' + i);
        }

        let x = null;
        do {
            while(x < 3) {
                if (x == 2) break;
                out('value of x : ' + x);
                x++;
            }

            if (x == 4) break;
            out('x : ' + x);
            x++;
        } while(x < 5);

        // ----------------------------------------------------
        label_1: {
            out('label_1 statement before break ....');
            if(1) break label_1;
            out('label_1 statement after break .....');
        }

        label_2: {
            out('label_2 statement before break ....');
            label_inner: {
                out('label_inner statement before break ....');
                if(1) break label_inner;
                out('label_inner statement after break .....');
            }
            label_jump: {
                out('label_jump statement before break ....');
                if(1) break label_2;
                // if(1) break label_3;
                out('label_jump statement after break .....');
            }
            out('label_2 statement after break ....');
        }

        label_3: {
            out('label_3 statement before break ....');
            if(1) break label_3;
            out('label_3 statement after break .....');
        }

        // ----------------------------------------------------
        loop_outer: for(let a = null; a < 3; a++) {
            out('loop_outer statement - ' + a);

            loop_inner_b: for(let b = null; b < 3; b++) {
                if(b == 2 && a == null) break;
                else if(b == 2) break loop_inner_b;
                out('loop_inner_b statement - ' + (b + a));                
            }
            loop_inner_c: for(let c = null; c < 3; c++) {
                if(c == 2 && a == null) break;   
                else if (c == 2) break loop_outer;
                out('loop_inner_c statement - ' + (c + a));
            }
        }
    }

    // ----------------------------------------------------
    out(funcOne());
    out(funcTwo());
    out(funcTwo(1));
    out(funcThree());
    out(funcReturn = funcThree(1));
    out(funcFour());
    funcFive();
}



// ============================================================================
// ----- examples -------------------------------------------------------------
// ============================================================================
out(); example_one();