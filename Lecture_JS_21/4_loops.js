/* 
Types of loop in js :
1. for
2. while
3. do-while
4. for-of
5. for-in
*/

// for loop
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if(i == j) {
            continue;
        } else {
            console.log(i,j);
        }
    }
}

// while loop
let c = 100;
while(c > 0) {
    console.log(c);
    c = c - 10;    
}


// for-in loop : iterate inside the object

let obj = {
    age: 19, // property 1
    Name: "Shyam", // property 1
    DOB: "23-09-2006", // property 1
    isEligibleForVote: true, // property 1
  };
for(let item in obj) {
    console.log(obj[item]);
}
  
  
// for-of loop : iterable item (arrays, map, list, vectors)
let arr = [10 ,20, 30, 40, 50];
for (let element of arr) {
    console.log(element);
}
for (let idx in arr) {
    console.log(arr[idx]);
}