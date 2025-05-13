<<<<<<< HEAD
// Objects : They are Hashmaps (Key value pairs)

var obj = {
  name: "Uday Kushwah",
  age: 19,
  isEligibleForVote: true,
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.isEligibleForVote);
console.log(typeof obj); //object

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["isEligibleForVote"]);

var obj1 = {
  a: 1,
  "intro":"my name is js",
  "Hello world": "First code",
  "": "Empty String",
  " ": "Space",
};
console.log(obj1);
console.log(obj1.a);
console.log(obj1.intro);
// console.log(obj1."Hello World")  // in this , (.) operator not work, so we use indexing
console.log(obj1["Hello world"]);
console.log(obj1[""]);
console.log(obj1[" "]);

// Loop -> for in loop (use only for objects)
for(let key in obj1) {
    console.log(obj1[key]);
}
=======
// Objects : They are Hashmaps (Key value pairs)

var obj = {
  name: "Uday Kushwah",
  age: 19,
  isEligibleForVote: true,
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.isEligibleForVote);
console.log(typeof obj); //object

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["isEligibleForVote"]);

var obj1 = {
  a: 1,
  "intro":"my name is js",
  "Hello world": "First code",
  "": "Empty String",
  " ": "Space",
};
console.log(obj1);
console.log(obj1.a);
console.log(obj1.intro);
// console.log(obj1."Hello World")  // in this , (.) operator not work, so we use indexing
console.log(obj1["Hello world"]);
console.log(obj1[""]);
console.log(obj1[" "]);

// Loop -> for in loop (use only for objects)
for(let key in obj1) {
    console.log(obj1[key]);
}
>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
