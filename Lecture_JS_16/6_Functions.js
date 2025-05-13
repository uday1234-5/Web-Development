<<<<<<< HEAD
/* 
Functions :
in JS -> function is a datatype too like number
let a = 10;
we can also do,
let f = function fun() {

    }

hum function ko variable mai bhi store kar sakte hai.
*/

function add(a,b) {
    return a+b;
}
console.log(add(10, 20));

function sayHi(name) {
    return "Hello "+name;
}
console.log(sayHi("Uday"));
console.log(sayHi("Ishan"));


let sayHello = function hello(name) {
    return  `Hello, ${name} !!\nHow are you ?`
}
console.log(sayHello("Uday"));
/* Since we invoke the function hello(){ } by the name 'hello' therefore there is no use of even writing it
, we can skip that part*/
// console.log(hello("Uday"));     // gives error


// Anonymous Function -> function without name
// this function is stored inside "sayBye" variable.
let sayBye = function (name) {
    return `Bye Bye ${name}`;
}
console.log(sayBye("Uday......"))




=======
/* 
Functions :
in JS -> function is a datatype too like number
let a = 10;
we can also do,
let f = function fun() {

    }

hum function ko variable mai bhi store kar sakte hai.
*/

function add(a,b) {
    return a+b;
}
console.log(add(10, 20));

function sayHi(name) {
    return "Hello "+name;
}
console.log(sayHi("Uday"));
console.log(sayHi("Ishan"));


let sayHello = function hello(name) {
    return  `Hello, ${name} !!\nHow are you ?`
}
console.log(sayHello("Uday"));
/* Since we invoke the function hello(){ } by the name 'hello' therefore there is no use of even writing it
, we can skip that part*/
// console.log(hello("Uday"));     // gives error


// Anonymous Function -> function without name
// this function is stored inside "sayBye" variable.
let sayBye = function (name) {
    return `Bye Bye ${name}`;
}
console.log(sayBye("Uday......"))




>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
