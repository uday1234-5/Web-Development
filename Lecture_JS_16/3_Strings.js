<<<<<<< HEAD
let str = "I am Learning Strings";
console.log(str);
str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


for (let idx in str) {
    // idx give index
    console.log(idx, str[idx]);
}
for (let ele of str) {
    console.log(ele);
}



// String function
console.log("Split Function ===========");
let string = "Hello I am Learning string functions";
let arr = string.split(" ");
// let arr = string.split("i");
console.log(arr);


// To join array element into string
let newStr = arr.join("_");
console.log(newStr);

// To find index of element
str = "I am Learning Strings";
let idx = str.indexOf("Learning");
=======
let str = "I am Learning Strings";
console.log(str);
str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


for (let idx in str) {
    // idx give index
    console.log(idx, str[idx]);
}
for (let ele of str) {
    console.log(ele);
}



// String function
console.log("Split Function ===========");
let string = "Hello I am Learning string functions";
let arr = string.split(" ");
// let arr = string.split("i");
console.log(arr);


// To join array element into string
let newStr = arr.join("_");
console.log(newStr);

// To find index of element
str = "I am Learning Strings";
let idx = str.indexOf("Learning");
>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
console.log(idx)