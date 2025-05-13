 
/* 
Let : Hoisting nhi hota, Block Scope
Var : Hoisting ho jata hai, Functional Scope
*/

for (let i = 0; i < 5; i++) {
    // console.log(i);
}
// console.log(i);  // error



/* 
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
 */




let x = 1;
function fun() {
    console.log(x);  // 1;
    x++;
}
fun()
console.log(x);  // 2





let y = 1;
function fun() {
    console.log(y); // Give error : can not access before its initialisation
    let y = 1;
    console.log(y);
    y++;
}
fun()
console.log(y); 
 