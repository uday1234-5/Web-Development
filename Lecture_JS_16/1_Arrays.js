<<<<<<< HEAD
// JS book : Eloquent Javascript
// https://eloquentjavascript.net/

/* Arrays :
➡️ we can store any data type element -> Heterogenous datatype
➡️ Linked list hoti hai (Doubly Linked List)

*/

let arr = [1, 2, 3, 4, "Hello", true, 10.11];
console.log(arr);

/*
Operation in Array :
push : insert at end
pop : delete at end
unshift : insert at front
shift : delete at front
*/

arr.push("Push element");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("unshift element");
console.log(arr);

arr.shift();
console.log(arr);

// For of loop -> give element

for (let ele of arr) {
  console.log(ele);
}
for (let idx in arr) {  // give index
  console.log(idx,arr[idx]);
}


// Searching key
let idx = arr.indexOf("Hello");  // if element is not found, then it give -1,
=======
// JS book : Eloquent Javascript
// https://eloquentjavascript.net/

/* Arrays :
➡️ we can store any data type element -> Heterogenous datatype
➡️ Linked list hoti hai (Doubly Linked List)

*/

let arr = [1, 2, 3, 4, "Hello", true, 10.11];
console.log(arr);

/*
Operation in Array :
push : insert at end
pop : delete at end
unshift : insert at front
shift : delete at front
*/

arr.push("Push element");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("unshift element");
console.log(arr);

arr.shift();
console.log(arr);

// For of loop -> give element

for (let ele of arr) {
  console.log(ele);
}
for (let idx in arr) {  // give index
  console.log(idx,arr[idx]);
}


// Searching key
let idx = arr.indexOf("Hello");  // if element is not found, then it give -1,
>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
console.log("Index :",idx)