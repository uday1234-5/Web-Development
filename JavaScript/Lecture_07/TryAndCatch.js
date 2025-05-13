// try and catch

// The try statement allows you to define a block of code to be tested for errors while it is being executed
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// console.log(a)  // gives error 

// let a = 10;
try {
    console.log(a);
} catch {
    console.log("Variable does not define");
} finally {
    console.log("finally block always executed")
}