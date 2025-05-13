function outer(){
    var a = 10;
    function inner() {
        a++;
        var b = 20;
        function innermost(){   
            a++;         
            b++;
            console.log(a)
            console.log(b)
        }
        return innermost;
    }
    return inner;
}

let f1 = outer()  // f1 <--- inner
let f11 = f1()    // f11 <--- innermost
f11()
let f12 = f1();
f12();



// by calling function more and more, the secret variable is no increase
/* function increase(){
    let secret_variable = 0;
    secret_variable++;
    console.log(secret_variable);
    }
    increase()
    increase() */
    
    
    
    
// by calling function more and more, the secret variable is increase due to closure of "secret_variable"
function increase(){
    let secret_variable = 0;
    function get_secret() {
        secret_variable++;
        console.log(secret_variable);
    }
    return get_secret;
}
let g = increase()
g()
g()

/* 
let arr = [];
function multi(a) {
    let res = a*5;
    return res;
}

console.log(multi(4))
console.log(multi(5))
console.log(multi(6)) */



/* 
let arr = [];
console.log(arr)
function multi(a) {
    console.log(arr)
    if(arr[a] != undefined) {
        return arr[a];
    } else {
        let res = a*5;
        arr[a] = res;
        console.log(arr)
        return res;
    }
}

console.log(multi(4))
console.log(multi(5))
console.log(multi(4))
arr[4] = 36; */



function calculate() {
    let arr = [];
    return  function multi(a) {
        console.log(arr)
        if(arr[a] != undefined) {
            return arr[a];
        } else {
            let res = a*5;
            arr[a] = res;
            console.log(arr)
            return res;
        }
    }
}

let multi5 =  calculate();
console.log(multi5(4))
console.log(multi5(5))
console.log(multi5(4))
