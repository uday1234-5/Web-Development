
// outputs :
// var a = 10;
// sam();
// function sam() {
//     console.log(a);
//     console.log('inner function');
    
// }
// console.log(a);


/* 
console.log(a);
sam();
function sam() {
    console.log(a);
    console.log('inner function');
}

let a = 10; */



console.log(a);
var a = 10;
function fun() {
    var b = 100;
    function fun2() {
        console.log(a);
        console.log(b);
        
    }
    fun2();
}
fun()