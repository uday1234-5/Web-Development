//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country=["Australia","Germany","United States of America"]
// output : "United States of America"

function Longestcountry(arr) {
    let max = 0;
    for(let i = 0;i < arr.length;i++) {
        max = Math.max(max,arr[i].length);
    }
    for(let i = 0;i < arr.length;i++) {
        if(arr[i].length == max){
            console.log(arr[i]);
        }
    }
}

let arr = country=["Australia","Germany","United States of America"];
Longestcountry(arr)