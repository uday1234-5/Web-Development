<<<<<<< HEAD
/* 
Hoisting :
1. var
2. Functions
these two gets hoisted in JavaScript.

------------------------------------------------

Original Code :
Before executing the code , 1 baar poora code parse kia jaata hai by JS only.
Functions and var -> will be get hoisted at the top of the file.

__________________________________________
|   sayHello("Ishan")                    |    
|   console.log(x);                      |
|   function sayHello(name) {            |
|       console.log("Hello ",name);      |
|       }                                |
|   var x = 10;                          |
|   console.log(x);                      | 
|________________________________________|
                    |
                    |
                    |
                    |
                hoisting hogi
                    |
                    |
                    |
                  \ | /
                   \|/ 
                    :
Final code after hoisting. this code will get executed.
_________________________________________
|    function sayHello(name) {          |
|        console.log("Hello ",name);    |
|    }                                  |
|    var x ;                            |
|    console.log(x);                    |
|    sayHello("Ishan")                  |  
|    x = 10;                            |
|    console.log(x);                    | 
|_______________________________________|

*/    

sayHello("Ishan")  // Fucntion calling before its creation, it is because of hoisting
function sayHello(name) {
    console.log("Hello ",name);
}
console.log(x); // undefined
var x = 10;
console.log(x); // 10




/* 
Important part to be note in hoisting.

sayHi("Ishan....")
var sayHi = function (name) {
    console.log("Hi !", name);
}
sayHi("Prateek....")
            |
            |
            |
            |
        hoisting hogi
            |
            |
            |
          \ | /
           \|/ 
            :
// sirf LHS hoist hogi, not RHS.
var sayHi;    // undefined
sayHi("Ishan....");
sayHi = function (name) {
    console.log("Hi !", name);
}
sayHi("Prateek....");
*/

// console.log(sayHi)  // undefined
sayHi("Ishan....")
var sayHi = function (name) {
    console.log("Hi !", name);
=======
/* 
Hoisting :
1. var
2. Functions
these two gets hoisted in JavaScript.

------------------------------------------------

Original Code :
Before executing the code , 1 baar poora code parse kia jaata hai by JS only.
Functions and var -> will be get hoisted at the top of the file.

__________________________________________
|   sayHello("Ishan")                    |    
|   console.log(x);                      |
|   function sayHello(name) {            |
|       console.log("Hello ",name);      |
|       }                                |
|   var x = 10;                          |
|   console.log(x);                      | 
|________________________________________|
                    |
                    |
                    |
                    |
                hoisting hogi
                    |
                    |
                    |
                  \ | /
                   \|/ 
                    :
Final code after hoisting. this code will get executed.
_________________________________________
|    function sayHello(name) {          |
|        console.log("Hello ",name);    |
|    }                                  |
|    var x ;                            |
|    console.log(x);                    |
|    sayHello("Ishan")                  |  
|    x = 10;                            |
|    console.log(x);                    | 
|_______________________________________|

*/    

sayHello("Ishan")  // Fucntion calling before its creation, it is because of hoisting
function sayHello(name) {
    console.log("Hello ",name);
}
console.log(x); // undefined
var x = 10;
console.log(x); // 10




/* 
Important part to be note in hoisting.

sayHi("Ishan....")
var sayHi = function (name) {
    console.log("Hi !", name);
}
sayHi("Prateek....")
            |
            |
            |
            |
        hoisting hogi
            |
            |
            |
          \ | /
           \|/ 
            :
// sirf LHS hoist hogi, not RHS.
var sayHi;    // undefined
sayHi("Ishan....");
sayHi = function (name) {
    console.log("Hi !", name);
}
sayHi("Prateek....");
*/

// console.log(sayHi)  // undefined
sayHi("Ishan....")
var sayHi = function (name) {
    console.log("Hi !", name);
>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
}