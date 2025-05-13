// Higher Order function :

// function that operate on other function either by
// taking as an argument or returning them , are called HOF.


 

//condition 1.
/* function a(fun) {  // HOF
    console.log("Hi i am inside A.");
    fun();
}

function b() { 
    console.log("Hi i am inside B.");
}
a(b); */






// condition 2.
/* function OuterFun() {
    console.log("I am inside outer function");
    
    function InnerFun() {
        console.log("I am inside inner function.");  
    }
    return InnerFun;
}
// OuterFun()
// console.log(OuterFun);
// console.log(OuterFun());

let fun = OuterFun();
fun() */







// array mai se boolean, string, number ko nikalna
/* function getBoolean(arr) {
    let result = [];
    for (let item of arr) {
        if(typeof item === "boolean") {
            result.push(item);
        }
    }
    return result;
}

function getString(arr) {
    let result = [];
    for (let item of arr) {
        if(typeof item === "string") {
            result.push(item);
        }
    }
    return result;
}

function getNumber(arr) {
    let result = [];
    for (let item of arr) {
        if(typeof item === "number") {
            result.push(item);
        }
    }
    return result;
}

let arr = ['uday','kushwah',10,20,true, false];
console.log(getBoolean(arr));
console.log(getString(arr));
console.log(getNumber(arr));
 */



// Separate the different datatype of element from given array
function getBoolean(item){
    return typeof item === "boolean";   
}
function getString(item){
    return typeof item === "string";
}
function getNumber(item){
    return typeof item === "number" ;
}
function get(arr, fun) {
    let result = [];
    for (let item of arr) {
        if(fun(item)) {
            result.push(item);
        }
    }
    return result;
}

let arr = ['uday','kushwah',10,20,true, false, undefined];
console.log(get(arr, getBoolean));
console.log(get(arr, getString));
console.log(get(arr, getNumber));
