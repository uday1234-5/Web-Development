//Write a JavaScript function to generate a random number with in a range(start,end)

function RandomNum(start,end) {
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
}

let start  = 100;
let end = 200;
console.log(RandomNum(start,end))