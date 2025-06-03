// Inline way
/* function doSomething() {
    console.log("Button Clicked !!!"); 
} */


// second way
 let btn = document.querySelector('button');
/*btn.onclick = function ( ) {
    console.log("Hello, this is the another way....");
}
 */



// Mouse enter event
/* btn.onmouseenter = function () {
    btn.style.color = 'red';
    btn.style.backgroundColor = 'yellow';
    btn.style.border= '2px solid black';
} 
btn.onmouseleave = function () {
    btn.style.color = 'black';
    btn.style.backgroundColor = 'white';
    btn.style.border= '2px solid black';
} */










// This is to show that only 1 event is possible at a time

/* let btn = document.querySelector('button');
function one() {
    console.log("function one called");
    
}
function two() {
    console.log("function two called");
    
}
btn.onclick = one;
btn.onclick = two; */





// solution : use eventListener
// --> It allows you to run multiple events listener on the same element

// let btn = document.querySelector('button');
// function one() {
//     console.log("function one called");
    
// }
// function two() {
//     console.log("function two called");
    
// }
// btn.addEventListener('click',one) // it accepts two arguments
// btn.addEventListener('click',two) // it accepts two arguments

 
 

 




// onclick : 1 baar click kiya toh chala
// ondblclick : 2 baar click kiya toh chala

// let btn = document.querySelector('button');
// btn.addEventListener('dblclick',function(){
//     console.log("2 baar dabaya hai , 1 bar nhi");
    
// })