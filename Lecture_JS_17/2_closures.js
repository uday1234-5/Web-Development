/* 
Closure : important concept

Child function apne parent ke scope ke bucket bhi sath le jayega, in an anonoumous object, that we call closure .

*/

//---------------------------------------------

function Parent() {
    var x = 1;
    function Child() {
        x++;
        console.log(x);
    }
    return Child;
}
let f = Parent();
f();  // 2
f();  // 3
f();  // 4

let f1 = Parent();
f1();  // 2
f1();  // 3
f1();  // 4 


//---------------------------------------------
/* 
Closure : important concept

Child function apne parent ke scope ke bucket bhi sath le jayega, in an anonoumous object, that we call closure .

*/

//---------------------------------------------

function Parent() {
    var x = 1;
    function Child() {
        x++;
        console.log(x);
    }
    return Child;
}
let f = Parent();
f();  // 2
f();  // 3
f();  // 4

let f1 = Parent();
f1();  // 2
f1();  // 3
f1();  // 4 


//---------------------------------------------
