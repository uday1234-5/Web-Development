// Qs1.Write a JavaScript function that returns array elements larger than a number.

function max(arr, num) {
    for(let i=0;i < arr.length;i++){
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }  
}

let arr = [1,2,3,4,5,6,7,8,9];
max(arr,4)