//A function that does one or both
//   1. takes one or multiple functions as arguments
//   2. returns a function



function multipleGreet(func,count) {  //higher order function
    for(let i = 1; i <= count;i++) {
        func();
    }
}
let greet = function() {
    console.log("Hello JS.")
}

// multipleGreet(greet,10);
multipleGreet(function() {console.log("Hello JS.")},10);





function OddEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log((n%2 != 0));
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log((n%2 == 0));
        }
        return even; 
    } else {
        console.log("Invalid Request");
    }
} 

let funct = OddEvenFactory("odd")
console.log(funct)
funct(3);
let functi = OddEvenFactory("even")
console.log(functi)
funct(3);
