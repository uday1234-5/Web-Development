
// Closures 
// A function bundled together with references to its surrounding state or lexical environment that it is called closure.

/* function someFunct() {
    let username  = "Einstein";
    f>>unction printName() {
        console.log(username);
    }
    printName();
} 
someFunct() */
 


function someFunct() {
    let username  = "Einstein";
    function printName() {
        console.log(username);
    }
    return printName;
} 
let fun = someFunct();
fun()