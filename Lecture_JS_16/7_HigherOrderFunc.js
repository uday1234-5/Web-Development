<<<<<<< HEAD
/* 
Higher Order Function :
Just like number, a function can be passed as an argument.
and as a number, a funciton can be returned from a function

By default function return type is "undefined".
*/


function outerFun() {
    function innerFun() {
        console.log("Inner function call");
    }
    return innerFun;
}
let f = outerFun();
console.log(f)
f()
console.log(f())




/* 
function outerFun() {
    function innerFun() {
        console.log("Inner function call");
        // function ke ander se kuch return na karne par it return "undefined" by default
    }
    return innerFun();
}
f = outerFun();  // undefined

*/





/* function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function doOperation(addition, subtraction) {
    console.log(addition(10,20));
    console.log(subtraction(10,20));
}
doOperation(add,subtract); */


function doOperation(addition, subtraction) {
    console.log(addition(10,20));
    console.log(subtraction(10,20));
}

doOperation(function add(a,b) {  // function calling
    return a+b;
},function subtract(a,b) {
    return a-b;
});



=======
/* 
Higher Order Function :
Just like number, a function can be passed as an argument.
and as a number, a funciton can be returned from a function

By default function return type is "undefined".
*/


function outerFun() {
    function innerFun() {
        console.log("Inner function call");
    }
    return innerFun;
}
let f = outerFun();
console.log(f)
f()
console.log(f())




/* 
function outerFun() {
    function innerFun() {
        console.log("Inner function call");
        // function ke ander se kuch return na karne par it return "undefined" by default
    }
    return innerFun();
}
f = outerFun();  // undefined

*/





/* function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function doOperation(addition, subtraction) {
    console.log(addition(10,20));
    console.log(subtraction(10,20));
}
doOperation(add,subtract); */


function doOperation(addition, subtraction) {
    console.log(addition(10,20));
    console.log(subtraction(10,20));
}

doOperation(function add(a,b) {  // function calling
    return a+b;
},function subtract(a,b) {
    return a-b;
});



>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
