// Arryays Method :
/* 
1. destructive Method : if you do changes in array, vo original array mai bhi change kar dega
2. Non destructive Method :  if you do changes in array, vo original array mai change nhi karega
*/

//
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr);

// slice :
// console.log(arr.slice(2)); // starting index
// console.log(arr.slice(2, 4)); // [start, end)

// splice  destructive method
// console.log(arr.splice(3));  // destructive method
// console.log(arr.splice(3, 5)); // splice(si, no_of_ele_delete)  si -> starting index
// console.log(arr);


arr.splice(3, 5, 'uday', 's', 'l', null, true, undefined, false, 6, 7)
console.log(arr)


// split method only for the string non destructive
let url = "https://google.com/search/dog/best/color/black";
let ans = url.split('/');
console.log(ans);

// join non destructive
url = ans.join('/');
console.log(url);



// concat (ND) -> (string array)
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let arr2 = ["Ram", "Shyam", "Versha", "Raman"];
console.log(arr1.concat(arr2));


let str = "uday";