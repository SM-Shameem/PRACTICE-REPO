// ---------------------------------------------------------------------------
// JavaScript Syntax 
// ---------------------------------------------------------------------------
// -> javascript syntax is the set of rules, how javascript programs are constructed 

// 01 javascript values
// -- the javascript syntax defines two types of values 
//    - fixed values (are called literals)
//    - variable values (are called variables)

// 02 javascript literals
// -- the tow most important syntax rules for fixed values are 
//    - numbers are written with or without decimals (11, 23.3 ...)
//    - strings are text, written within (double or single) quotes 

// 03 javascript variables
// -- in a programming language, variables are used to store data values 
// -- javascript uses the keywords (var | let | const) to declare variables 
// -- an equal sign (=) is ued to assign value to variables 

// 04 javascript operators
// -- javascript has different types of operators for different operations, such as
// -- arithmetic operators (+ - * /) are used to compute values 
// -- assignment operator (=) is used to assign values to variables 

// 05 javascript expressions 
// -- an expression is a combination of values, variables, and operators, 
//    which computes to a value and is called an evaluation or expression 
//    like (5 * 10 = 50) or (varOne + 22) or (varOne = 4 + x)
// -- expression value can be of various types, such as numbers and strings
//    like ('a' + 'b' = 'ab') or ('ab' + ' ' + 'd' = 'ab d')
// -- if you put a number in quotes, 
//    then the rest of the numbers will be treated as string and concatenated 

// 06 javascript keywords 
// -- JS often start with a keyword to identify the javascript action to be performed 
// -- here is a list of some of the keywords 
//    - var (declares a variable)
//    - let (declares a block variable)
//    - const (declares a block constant) 
//    - if (marks a block of statements to be executed on a condition) 
//    - switch (marks a block of statements to be executed in different cases)
//    - for (marks a block of statements to be executed in a loop) 
//    - function (declares a function) 
//    - return (exits a function) 
//    - try (implements error handling to a block of statements) 
// -- javascript keywords are reserved words, reserved words cannot be used as  
//    names of variables 

// 07 javascript identifiers 
// -- identifiers are javascript names 
// -- identifiers are used to name variables and functions 
// -- the rules for legal names are the same in most programming languages 
// -- a javascript name must begin with
//    - a letter (A-Z | a-z)
//    - a dollar sign ($)
//    - or an underscore (_)
// -- subsequent characters may be (letters | digits | underscores | dollar signs)
// -- numbers are not allowed as the first character in names 
//    this way javascript can easily distinguish identifiers from numbers 

// 08 javascript is case sensitive 
// -- all javascript identifiers are case-sensitive 
// -- javascript does not interpret (LET | Let) as the keyword (let) 

// 09 javascript and camel-case 
// -- historically, programmers have used different ways of joining multiple words
//    into one variable name 
//    - hyphens are not allowed in javascript. they are reserved for subtractions 
//    - underscore is allowed in javascript (first_name, last_name ... ) 
//    - upper camel case (pascal case) is allowed (FirstName, LastName ... )
//    - lower camel case is allowed (firstName, lastName ... ) 

// 10 javascript character set 
// -- javascript uses the (unicode) character set 
// -- unicode covers (almost) all the (characters | punctuations | symbols) 

// 11 javascript comments 
// -- not all javascript statements are executed 
// -- code after double slashes // or between /* and */ is treated as a comment
// -- comments are ignored, and will not be executed 

// ---------------------------------------------------------------------------
// JavaScript Statements 
// ---------------------------------------------------------------------------
// -> javascript programs 
// -- a computer program is a list of instructions to be executed by a computer 
// -- in a programming language, these programming instructions are called (statements)
// -- a javascript program is a list of programming statements 
// -- in HTML, javascript programs are executed by the web browser 

// 01 javascript statements 
// -- javascript statements are composed of 
//    values, operators, expressions, keywords adn comments 
// -- most javascript programs contain many javascript statements 
// -- the statements are executed, one by one, in the same order as they are written 
// -- javascript programs (and javascript statements) are often called javascript code

// 02 semicolons 
// -- semicolons separate javascript statements 
// -- add a semicolon at the end of each executable statement 
// -- when separated by semicolons, multiple statements on one line are allowed 
// -- ending statements with semicolon is not required, but highly recommended 

// 03 white space 
// -- javascript ignores multiple spaces
// -- you can add white space to script to make it more readable 
// -- a good practice is to put spaces around operators (= + - * /)

// 04 line length and line breaks 
// -- for best readability, programmers often likes to avoid code lines longer than 
//    80 characters 
// -- if a javascript statement does not fit on one line, the best place to break it 
//    is after an operator (= + - * /)

// 05 code blocks 
// -- javascript statements can be grouped together in code blocks, 
//    inside curly brackets { ... }
// -- the purpose of code blocks is to define statements to be executed together 
// -- one place you will find statements grouped together in blocks, 
//    is in javascript functions 

// ---------------------------------------------------------------------------
// JavaScript Comments 
// ---------------------------------------------------------------------------
// -> javascript comments can be used to explain javascript code, and to make it 
//    more readable 
// -- javascript comments can also be used to prevent execution, when testing 
//    alternative code 
// -- javascript supports two type of comment system 
//     - single line comments
//     - multi-line comments
// -- it is most common to use single line comments 
// -- block comments are often used for formal documentation 

// 01 single line comment start with // 
// -- any text start with (//) and the end of the line will be ignored by javascript 
//    will not be executed
// -- single line comment can be used to explain the code

// 02 multi-line comments start with (/*) and end with (*/)
// -- any text between (/*) and (*/) will be ignored by javascript 
// -- uses a multi-line comment to explain the code, is a comment block