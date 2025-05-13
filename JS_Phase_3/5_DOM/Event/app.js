// 1st way
/* function handleClick() {
    console.log("button clicked");
    
}
function handleDiv() {
    console.log("div button clicked");
    
}
 */


// 2nd way
/* let btn = document.querySelector('button');

function fun() {
    console.log("fun function clicked.....");
    
}
function fun1() {
    console.log("fun2 function clicked.....");
    
}
btn.onclick = fun;
btn.onclick = fun1; */


// 3rd way
// AddlistenersEvent
let btn = document.querySelector('button');


function fun() {
    console.log("Happy Birthday");
    
}
function fun1() {
    console.log("to you....");
    
}
btn.addEventListener('click',fun)
btn.addEventListener('click',fun1)