//Scope determines the accessibilty of variables, objects, and functions from differnt parts

// 1. function
// 2. Block
// 3. Lexical
// 4. Global 


//Function scope :  variables defined inside a function are not accessible from outside the function

let sum = 54; //Global Scope

function Calcsum(a,b) {
    let sum = a+b;  //Function Scope

}
Calcsum(1,2);
console.log(sum)   //gives error