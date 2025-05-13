

/* 
3. Filter() : arrays method
--> it accepts a call back function.
--> the callback function is automatically called inside the method.
--> It returns a new array.
--> It only sends the truthful value to the new array.
*/



let marks = [10, 15, 18, 9, 28, 12, 5, 40];
 
/* let newMarks = marks.filter(function(item ){
    if(item%2==0 ){
        return item;
    }
})
console.log(newMarks);
  */


let newMarks = marks.filter(function(item ){
    if(item%2==0 ){
        return true ;
    } 
    return false;
})
console.log(marks);
console.log(newMarks);
 