
/* 
2. Map : arrays method
--> it accepts a call back function.
--> the callback function is automatically called inside the method.
--> It returns a new array.
*/


let marks = [10, 15, 18, 9, 28, 12, 5, 40];
/* let newMarks = marks.map(function(item ){
    return item*2;
})
console.log(newMarks);
 
 */




// let newMarks = marks.map(function(item ){
//     if(item%2==0 ){
//         return item*2;
//     }
// })
// console.log(newMarks);
 


let newMarks = marks.map(function(item , index){
    // return item*index;
    return [index, item];
})
console.log(newMarks);
 
