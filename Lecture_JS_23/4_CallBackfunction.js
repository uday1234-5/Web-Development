// Callback function : It is a function passed into another function, when is then invoked inside the function.

function a(fun) {  // HOF
    console.log("Hi i am inside A.");
    fun();  // invoked(call) the function
}

function b() { 
    console.log("Hi i am inside B.");
}
a(b)

// a --> is a HOF. and b --> is a callback function