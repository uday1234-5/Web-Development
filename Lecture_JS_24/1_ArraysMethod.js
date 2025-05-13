// Arrays Method :
/* 
1. For Each() --> arrays method
--> it accepts a call back function.
--> the callback function is automatically called inside the method.
--> it is just for iteration, not return something.
*/

let student = ["Sachin", "Hardik", "Manish", "Ajay", "Akshay"];
student.forEach(function (item) {
    // item access the element of array
    console.log(item);
});

student.forEach(function (item, index) {
    // item access the element of array
    console.log(index, "-->", item);
});




