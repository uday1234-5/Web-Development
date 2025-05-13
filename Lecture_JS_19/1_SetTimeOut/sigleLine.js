/*
let id = setTimeout(function, time(ms))
let id = setTimeout(function, time(ms), clearTimeOut(id));
*/



let id = setTimeout(function () {
    console.log("Hello World");
}, 5000, setTimeout(function () {
    clearTimeout(id)
}, 6000));
// console.log(id)