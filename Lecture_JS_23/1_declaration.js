// console.log("Hi i am free.");

// {
//   console.log("Hi i am block.");
// }


// scope
/* let score = 50;
if (score > 33) {
    let x = 20;
}
console.log(x);  // Error : x is not defined.
 */

 

/* let x = 10 
{
    let x = 20;
    console.log(x);  // 20
}
console.log(x); */   // 10



/* 
var x = 10 
{
    var x = 20;
    console.log(x);  
}
console.log(x); */


 
/* var x = 10 
{
    x = 20;
    console.log(x);  
}
console.log(x); */


var a = 100;
function fun() {
    var a = 50;
    console.log(a);
}
fun();
console.log(a);
