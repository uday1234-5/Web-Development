let id = setTimeout(function () {
    console.log("Hello World");
}, 5000);
// console.log(id);
clearTimeout(id);
console.log("Hey there!"); 