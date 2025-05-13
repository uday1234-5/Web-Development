//Lexical scope a variable defined outside a function can be accessible inside another function defined after the variable declaration


// function outerFun() {
//     let x = 5;
//     let y = 6;
//     function innerFun() {
//         console.log(x);
//     }
//     // innerFun()
//     return innerFun;
// }
// let fun = outerFun();
// console.log(fun)


//Hoisting

function outerFun() {
    function innerFun() {
        console.log(x);
    }
    // innerFun()
    let x = 5;
    let y = 6;
    return innerFun;
}
let fun = outerFun();
console.log(fun)