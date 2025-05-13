/* 
Object :
-> It is a unordered data structure.
-> Collection of Properties
-> Properties (pair of key and value)

It is a data structure, unlike array (It is unordered in nature.)

--> by default, the keys are strong as a string
*/

let obj = {
  age: 19, // property 1
  Name: "Shyam", // property 1
  DOB: "23-09-2006", // property 1
  isEligibleForVote: true, // property 1
};

console.log(obj.Name);
console.log(obj.DOB);
console.log(obj.isEligibleForVote);

console.log(obj["Name"]);  // keys store as a string
console.log(obj["DOB"]);
console.log(obj["isEligibleForVote"]);

let obj1 = obj;
obj1.age = 56;
console.log(obj);
console.log(obj1);
