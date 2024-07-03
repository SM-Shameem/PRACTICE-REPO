const out = (arg='\n') => console.log(arg);
// VARIABLE | SCOPE | HOSTING | STRICT ||||||||||||||||||||||||||||||||||||||||
// 1. declaration keywords (var | let | const) and undeclared variable 
// 2. declaration keywords (function | class)
// 3. identifiers (variable | function | class)
// 4. scope (variable | array | object | class | function)
// 5. hosting (variable | array | object | class | function)
// 6. strict mode (variable | array | object | class | function)
// ## 3-Pages

// VARIABLE DECLARATION ///////////////////////////////////////////////////////
const example_aa = function () {
    out('variable declaration keywords ..............');
    // 

    var var_aa;
    let let_aa;
    const const_aa = null;
    out('var_aa   - ' + var_aa);
    out('let_aa   - ' + let_aa);
    out('const_aa - ' + const_aa);

    var_aa = 10;
    let_aa = 20;
    const_aa = 30;
    
    out('var_aa   - ' + var_aa);
    out('let_aa   - ' + let_aa);
    out('const_aa - ' + const_aa);
}

// EXAMPLE CALLER /////////////////////////////////////////////////////////////
example_aa(); out();