 
function GrandFather() {
    var x = 1;
    function Parent() {
        x++;
        function Child() {
            x++;
            console.log(x);
        }
        return Child;
    }
    return Parent;
}
let fun = GrandFather();
let fun1 = fun();
let fun2 = fun();
/* 
console.log(fun);    // [Function: Parent]
console.log(fun1);   // [Function: Child]
console.log(fun2);   // [Function: Child] 
*/

fun1()  // 4
fun1()  // 5
fun2()  // 6
fun2()  // 7




/* function GrandFather() {
    var x = 1;
    function Parent() {
        var y = 1;
        function Child() {
            console.log(x);
            console.log(y);
        }
        return Child;
    }
    return Parent;
}
let f = GrandFather();
=======

function GrandFather() {
    var x = 1;
    function Parent() {
        x++;
        function Child() {
            x++;
            console.log(x);
        }
        return Child;
    }
    return Parent;
}
let fun = GrandFather();
let fun1 = fun();
let fun2 = fun();
/* 
console.log(fun);    // [Function: Parent]
console.log(fun1);   // [Function: Child]
console.log(fun2);   // [Function: Child] 
*/

fun1()  // 4
fun1()  // 5
fun2()  // 6
fun2()  // 7




/* function GrandFather() {
    var x = 1;
    function Parent() {
        var y = 1;
        function Child() {
            console.log(x);
            console.log(y);
        }
        return Child;
    }
    return Parent;
}
let f = GrandFather();
 f(); */