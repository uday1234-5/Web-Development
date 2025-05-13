/* 
4.  Sort() ==> arrays method

*/


/* let marks = [15, 10, 18, 9, 28, 12, 5, 40];
console.log(marks);
marks.sort();
console.log(marks);  // sort in lexicographical order.


console.log(marks);
let SortedMarks = marks.sort();
console.log(SortedMarks);

 */



let marks = [15, 10, 18, 9, 28, 12, 5, 40];
let SortedMarks = marks.sort(function(a,b){
    return a-b;  // ascending order
    return b-a;  // descending order
});
console.log(SortedMarks);
