console.log('JAVASCRIPT OPERATORS 4 ................');

function func_haa() {
    
}

console.log('\nfunc_haa : precedences ....... '); func_haa();

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