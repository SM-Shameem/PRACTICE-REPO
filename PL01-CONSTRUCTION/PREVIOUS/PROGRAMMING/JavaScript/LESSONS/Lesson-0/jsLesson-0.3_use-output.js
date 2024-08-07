// ---------------------------------------------------------------------------
// What Can JavaScript Do 
// ---------------------------------------------------------------------------
// -> javascript is basically web based client side programming language  
//     - javascript can change HTML content 
//     - javascript can change HTML attribute values 
//     - javascript can change HTML style (css) 
//     - javascript can hide and show HTML elements 
//     - javascript can create HTML elements 
//     - javascript can check HTML-Form Validity

// ---------------------------------------------------------------------------
// How to Use JavaScript  
// ---------------------------------------------------------------------------
// 01 JavaScript can not use directly without embedding it to HTML
// -- though we can call direct JavaScript file (.js) through (NodeJS)
 
// -> internal javascript
// -- any number of scripts can be placed in a HTML document 
// -- internal script can be placed in two ways 
//    - using the (script) tag 
//    - using the (event) attribute of an HTML element 

// 01 in HTML, JavaScript code is inserted between (script and /script) tabs
// -- old JavaScript may use a (type) attribute, but the (type) attribute is not 
//    required. now JavaScript is the default scripting language in HTML 
// -- scripts can be placed in the (body or head) section of an HTML page, or in both
// -- placing scripts at the bottom of the (body) element improves the display speed, 
//    because script interpretation slows down the display 
//    - script tag syntax: 
//    < script > javascript codes ... < /script >
//    - script tag old syntax: 
//    < script type="text/javascript > javascript codes ... < /script >

// 02 though, the (event) attribute is used to call any script but we can do some 
//    short script as the value of (event) attribute also - 
//    - event syntax: 
//    < button onclick="myFunction()" >Click< /button >
//    < button onclick="document.write(4+6)" >Click< /button >

// -> external javascript 
// -- scripts can also be placed in external files 
// -- external script are practical when the same code is used in many different pages
// -- placing scripts in external files has some advantages 
//    - it separates HTML and code 
//    - it makes HTML and JavaScript easier to read and maintain 
//    - cached javascript files can speed up page loads

// 01 using external javascript
// -- external scripts cannot contain (script) tags
// -- external script files have the file extension (.js) 
// -- to use an external script, put the name of the script file in the (src) attribute
//    of a (script) tag 
// -- external script reference can place in (head or body or in both section)
// -- script will behave as if it was located exactly where the (script) tag is located
//    - link syntax: < script src="scriptOne.js" >< /script >
//    - script syntax: 
//    function myFunction() {
//       document.getElementById('demo').innerHTML = 'Paragraph Content Changed';
//    }

// 02 to add several script files to one page - use several script tags 
//    - link syntax: 
//    < script src="scriptOne.js" >< /script >
//    < script src="scriptTwo.js" >< /script >

// 03 an external script can be referenced in 3 different ways 
//    - with a full URL (a full web address) 
//    - syntax: < script src="https://www.w3schools.com/js/myScript.js >< /script >
//    - with a file path (like /js/)
//    - syntax: < script src="/js/myScript.js" >< /script >
//    - without any path
//    - syntax: < script src="myScript.js" >< /script > 

// -> invoking javascript (function and event) 
// -- a js function is a block of js code, that can be executed when called for 
//    or an event occurs like clicks a button 

// ---------------------------------------------------------------------------
// Output of JavaScript 
// ---------------------------------------------------------------------------
// -> javascript can display data in different ways 
//    - writing into an HTML element, using (innerHTML)
//    - writing into the HTML output, using (document.write())
//    - writing into an alert box, using (window.alert())
//    - writing into the browser console, using (console.log())

// 01 using (innerHTML) 
// -- changing the (innerHTML) property of an HTML element is a common way to display 
//    data in HTML 
// -- to access an HTML element, JS can use the (document.getElementById()) method
// -- the (id) attribute defines the HTML element 
// -- the (innerHTML) property defines the HTML content 
//    - syntax: document.getElementById('idName').innerHTML = 'element content';

// 02 using (document.write())
// -- for testing purposes, it is convenient to use (document.write())
// -- using (document.write()) after an HTML document is loaded, will delete all 
//    existing HTML 
// -- the (document.write()) method should only be used for testing 
//    - syntax: document.write('content');

// 03 using (window.alert())
// -- an (alert box) can be used to display data 
// -- here, the (window) keyword is not essential 
// -- in js, the (window) object is the (global scope object), that means that
//    variables, properties, and methods by default belong to the (window) object 
//    this also means that specifying the (window) keyword is optional 
//    - syntax: window.alert('content');
//    - syntax: alert('content');

// 04 using (console.log())
// -- for debugging purposes, you can call the (console.log()) method in the browser
//    to display data 
//    - syntax: console.log('content');

// 05 javascript (print)
// -- javascript does not have any print object or print methods 
// -- you cannot access output devices form javascript 
// -- only exception is that you can call the (window.print()) method in the browser
//    to print the content of the current window 
//    - syntax: < button onclick="window.print()" > print this page < /print ></button>