// ---------------------------------------------------------------------------
// Introduction to Javascript 
// ---------------------------------------------------------------------------
// 01 javascript is the world's most popular programming language 
// -> while it is most well-known as the scripting language for the web pages, 
//    but many non-browser environments also use it, such as (node.JS, Apache-CouchDB)
// -> javascript runs on the client side of the web, which can be used to 
//    design/program how the web pages behave on the occurrence of an event 

// 02 javascript is already running in your web browser like HTML and CSS
// -> javascript is one of the 3 languages all web developers must learn 
//     - HTML to define the content of web pages 
//     - CSS to specify the layout of web pages 
//     - JavaScript to program the behavior of web pages 

// 03 JS and java are completely different languages, both in concept and design 
// -- JS was invented by Brendan Eich in 1995, and became an ECMA standard in 1997
// -- ECMA-262 is the official name of the standard
// -- ECMAScript is the official name of the language

// 04 versions of javascript 
//     - the original javascript ES1, ES2, ES3 (1997-1999)
//     - the first main revision ES5 (2009) 
//     - the second revision ES6 (2015)
//     - the yearly additions (2016, 2017, 2018) 

// ---------------------------------------------------------------------------
// JavaScript Paradigms  
// ---------------------------------------------------------------------------
// 01 javascript is a interpreted, or (just-in-time) compiled, lightweight 
//    programming language with first-class functions
// -- javascript is prototype-based, multi-paradigm, single-threaded, dynamic 
//    language, supporting (imperative) like (object-oriented), and (declarative)
//    like (functional) programming styles 
// -- javascript can function as both a (procedural) and an (object-oriented) 
// -- JS is dynamic scripting language supporting (prototype based) object construction 

// 02 the basic syntax is internationally similar to both java and C++ to reduce the 
//    number of new concepts required to learn the language 

// 03 object system of javascript 
// -- objects are created programmatically in javascript, by attaching methods and 
//    properties, otherwise empty object at run time, as opposed to the syntactic 
//    class definitions common in compiled language 
// -- once an object has been constructed it can be used as a blueprint (prototype) 
//    for creating similar objects 
// -- javascript dynamic capabilities include runtime object construction, variable,
//    parameter lits, function variables, dynamic script creation (via eval), 
//    object introspection (via for ... in), and source code recovery 
// -- javascript has (HTML and browser) objects with properties, methods and events 

// ---------------------------------------------------------------------------
// Implementations of JavaScript 
// ---------------------------------------------------------------------------
// 01 the mozilla project provides two javascript implementations 
// -- the first ever javascript was created by Brendan Eich at Netscape, and has since 
//    been updated to conform to ECMA-262 Edition 5 and later versions 
// -- this engine, code named (SpiderMonkey), is implemented in C/C++ 
// -- the (Rhino) engine, created primarily by Norris Boyd (also at Netscape) is a 
//    javascript implementation written in java 
// -- like (SpiderMonkey, Rhino) is ECMA-262 Edition 5 compliant 

// 02 several major runtime optimizations such as 
//   - TraceMonkey - Firefox 3.5
//   - jagerMonkey - Firefox 4
//   - ionMonkey - were added to the (SpideerMonkey) javascript engine over time 

// 03 besides the above implementation, there are other popular javascript engines 
//   - google's V8 
//     - which is used in the google-chrome browser and 
//     - resent versions of opera browser
//     - this is also the engine used by (NodeJS) 
//   - the JavaScript Core (SquirrelFish/Nitro) 
//     - used in some WebKit browsers such as apple safari 
//   - Carakan - in old versions of Opera 
//   - Chakra - engine used in IE 

// ---------------------------------------------------------------------------
// Browser Engine
// ---------------------------------------------------------------------------
// 01 a browser engine (also know as a LAYOUT ENGINE or RENDERING ENGINE) is a core 
//    software component of every major web browser 
// -- primary job of a browser engine is to transform HTML docs and other resources
//    of a web page into an interactive visual representation on a user's device 

// 02 a browser engine is nto a stand-alone computer program but a critical piece of 
//    a larger program, such as a web browser, from which the term is derived 
// -- NB: the word engine is an analogy of the engine of a car 

// 03 besides browser engine two other terms are in common use regarding related 
//    concepts (layout engine and rendering engine) 
// -- in theory, (layout and rendering/painting) could be handled by separated engines
// -- in practice, however they are tightly coupled and rarely considered separately 

// 04 in addition to (layout and rendering), a browser engine enforces 
//   - the security policy between documents, 
//   - handles navigation through hyperlinks,
//   - and data submitted through forms,
//   - and implements the (DOM) data structure exposed to page scripts 

// 05 executing JavaScript (JS) code is a separate matter, 
//     however as every major web browser uses a (dedicated engine) for this 
// -- the JS language was originally created for use in browsers, 
//     but it is now used elsewhere, too
// -- so the implementation of (JS engine) is decoupled from (browser engine)
// -- in web browser, these two engines work in concert via 
//     the shared DOM data structure

// 06 browser engines are used in other types of programs besides web browsers 
//     email clients need them to display HTML email 
// -- the electron framework, which is powered by the two engines of the
//     google chrome browser, has been used to create many applications 

// ---------------------------------------------------------------------------
// JavaScript Engine 
// ---------------------------------------------------------------------------
// 01 a javascript engine is a software component that executes javascript code 
// -- the first javascript engines were mere interpreters, but all relevant modern 
//    engines use (just-in-time) compilation for improved performance 
// -- javascript engines are typically developed by web browser vendors, 
//    and every major browser has one. 
// -- in a browser, the javascript engine runs in concert with 
//    the rendering engine via the DOM (document object model) 

// 02 the use of javascript engines in not limited to browsers, for example, 
//    the V8 engine is a core component of the (NodeJS) and (Deno Runtime System)
// -- the ECMAScript is the standardized specification of javascript 
// -- ECMAScript engine is another name for these engines 
// -- with the advent of (WebAssembly) some engines can also execute this code 
//    in the same sandbox as regular javascript code 

// ---------------------------------------------------------------------------
// Programming Paradigms 
// ---------------------------------------------------------------------------
// 01 programming paradigms are a way to classify programming language based on features
// -- languages can be classified into multiple paradigms 
// -- some paradigms are concerned mainly with implications for the execution model of 
//    the language, such as allowing side effects, or whether the sequence of operations
//    is defined by the execution model 
// -- other paradigms are concerned mainly with the way that code is organized, 
// -- such as grouping a code into units along with the state that is modified by code 
// -- yet others are concerned mainly with the style of syntax and grammar 

// 02 common programming paradigms include 
//    - imperative: in which, programmer instructs the machine, how to change its state
//       - procedural: which groups instructions into procedures 
//       - oop: which groups instructions with the part of the state that operate on 
//    - declarative: in which, programmer merely declares properties of desired result, 
//      but not how to compute it  
//       - functional: in which the desired result is declared as the value of a series
//         of function applications 
//       - logic: in which the desired result is declared as the answer to a question 
//         about a system to facts and rules 
//       - mathematical: in which the desired result is declared as the solution of an 
//         optimization problem 
//       - reactive: in which the desired result is declared with dta streams and the 
//         propagation of change 

// 03 just as software engineering (as a process) is defined by differing methodologies,
//    so the programming languages (as models of computation) are defined by differing 
//    paradigms 
// -- some languages are designed to support one paradigm, like Smalltalk support oop, 
//    Haskell supports functional programming, while other programming languages 
//    support multiple paradigms such as Object Pascal, C++, Java, JavaScript, C#, 
//    Scala, Visual Basic, Common Lisp, Schema, Perl, PHP, Python, Ruby and F#
// -- example, programs written in C++, Object Pascal or PHP can be purely procedural,
//    purely object-oriented, or can contain elements of both or other paradigms 
// -- software designers and programmers decide how to use those paradigm elements 
// -- in object-oriented, programs are treated as a set of interacting object
// -- in functional, programs are treated as a sequence of stateless function evaluation
// -- when programming computers or systems with many processors, in process-oriented 
//    programming, programs are treated as sets of concurrent processes 

// 04 different approaches to programming have developed over time
// -- Machine code: the lowest-level programming paradigms, which directly represents 
//    the instructions (the contents of program memory) as a sequence of numbers, and 
//    assembly language where the machine instructions are represented by mnemonics 
//    and memory addresses can be given symbolic labels 
// -- these are sometimes called first- and second-generation languages 
// -- procedural languages: the next advance was the development of procedural languages
// -- these third-generation languages (the first described as high-level languages) use
//    vocabulary related to the problem being solved, like - COBOL, FORTRAN, ALGOL, 
//    PL/I, BASIC, C all these languages follow the procedural paradigm 
// -- following the widespread use of procedural languages, object-oriented programming 
//    languages were created, such as Simula, Smalltalk, C++, Python, PHP, Java, C#
// -- in these languages, data and methods to manipulate 
//    it are kept as one unit called an object
// -- with perfect encapsulation, one of the distinguishing features of OOP, the only 
//    way that another object or user would be able to access the data is via the 
//    object methods, thus an object's inner workings may be changed without affecting 
//    any code that uses the object 
// -- there is still some controversy concerning the efficacy of the OOP paradigm versus
//    the procedural paradigm. the need for every object ot have associative methods 
//    leads some skeptics to associate OOP with software bloat, an attempt to resolve 
//    this dilemma came through polymorphism 
// -- because object-oriented programming is considered a paradigm, not a language, it 
//    is possible to create even an object-oriented assembler language 
//    High Level Assembly (HLA) is an example of this that fully supports advanced 
//    data types and object-oriented assembly language programming - despite its origins

// 05 Further Paradigms: life-rate programming as a form of (imperative programming), 
//    structures programs as a human-centered web, as in a hypertext essay: 
//    documentation is integral to the program, and the program is structured following 
//    the logic of prose exposition, rather than compiler convenience 
// -- independent of the (imperative) branch, (declarative) programming paradigms were 
//    developed 
// -- programs written using this paradigm use functions, blocks of code intended to 
//    behave like (mathematical function)
// -- functional languages discourage changes in the value of variables through 
//    assignment, making a great deal of use of (recursion) instead 
// -- the (logic programming) paradigm views computation as (automated reasoning) over 
//    a body of knowledge 
// -- facts about th e(problem domain) are expressed as logic formulas, and programs
//    are executed by applying (inference rules) over them until an answer to the 
//    problem is found, or the set of formulas is proved inconsistent 
// -- (symbolic programming) is a paradigm that describes programs able to manipulate 
//    formulas and program components as data 
// -- programs can thus effectively modify themselves and appear to learn making them 
//    suited for applications such as (artificial intelligence, expert systems, 
//    natural-language processing) and computer games languages that support this 
//    paradigm include (Lisp and Prolog)

// 06 differentiable programming structures programs so that they can be differentiated
//    throughout, usually via (automatic differentiation) 
// 07 most programming languages support more than one programming paradigm to allow 
//    programmers to use the most suitable programming style and associated language 
//    constructs for a given job 

// ---------------------------------------------------------------------------
// Thread 
// ---------------------------------------------------------------------------
// 01 in computer science, a (thread) of execution is the smallest sequence of
//    programmed instructions that can be managed independently by a scheduler, 
//    which is typically a part of the operating system 
// -- the implementation of threads and processes differs between operating systems
//    but in most cases a thread is a component of a process 
// -- the multiple threads of a given process may be executed concurrently, 
//    sharing resources such as memory, while different processes do not share  
// -- in particular, the threads of a process share its executable code 
//    and the values of its dynamically allocated variables 
//    and no-thread-local global variables at any given time 

// ---------------------------------------------------------------------------
// Prototype-Based Programming
// ---------------------------------------------------------------------------
// 01 prototype-based programming is a style of (object-oriented) programming 
//    in which (classes) are not explicitly defined, 
//    but rather derived by adding properties and methods to an instance 
//    of another class or less frequently, adding them to an empty object 
// -- in simple words, this type of style allows the creating of an object 
//    without first defining its class

// ---------------------------------------------------------------------------
// First-class Function 
// ---------------------------------------------------------------------------
// 01 a programming language is said to have (first-class functions) 
//    when functions in that language are treated like any other variable. 
// -- in such a language, 
//     - a function can be passed as an argument to other functions,
//     - can be returned by another function 
//     - and can be assigned as a value to a variable 