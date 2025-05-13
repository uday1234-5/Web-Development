<<<<<<< HEAD
/* 
➡️ Comparator Operators
1. == -> Loose Equality
2. === -> Strict Equality

> 1 == '1'  // true
value compare karega and type convert kar dega automatically(implicit type con)

`\t` converts to 0
`\n` converts to 0
*/

console.log();
console.log("0 == \\t :", 0 == `\t`); // true,  type conversion hota hai because of different datatype
console.log("0 == \\n :", 0 == `\n`); // true
console.log("\\t == \\n :", `\t` == `\n`); // false,  no type conversion because same datatype

// To convert a value to a number, we can use + sign before it
// \n : give new line
// \t : give tab space
console.log("+\\t :", +`\t`); // 0
console.log("+\\n :", +`\n`); // 0
console.log("+Hello :", +`Hello`); //NaN
console.log("+H :", +`H`); //NaN

console.log("[] == 0", [] == 0); // true
console.log("\\t == 0", `\t` == 0); // true
console.log("[] == \\t", [] == `\t`); // false
/* 
[] -> String
 "" == 't' --> false
*/

// converting [] to number
console.log("+[] :", +[]); // 0
console.log("+[] == \\t :", +[] == `\t`); // true
console.log("+[[[[]]]] :", +[[[[]]]]); // 0
=======
/* 
➡️ Comparator Operators
1. == -> Loose Equality
2. === -> Strict Equality

> 1 == '1'  // true
value compare karega and type convert kar dega automatically(implicit type con)

`\t` converts to 0
`\n` converts to 0
*/

console.log();
console.log("0 == \\t :", 0 == `\t`); // true,  type conversion hota hai because of different datatype
console.log("0 == \\n :", 0 == `\n`); // true
console.log("\\t == \\n :", `\t` == `\n`); // false,  no type conversion because same datatype

// To convert a value to a number, we can use + sign before it
// \n : give new line
// \t : give tab space
console.log("+\\t :", +`\t`); // 0
console.log("+\\n :", +`\n`); // 0
console.log("+Hello :", +`Hello`); //NaN
console.log("+H :", +`H`); //NaN

console.log("[] == 0", [] == 0); // true
console.log("\\t == 0", `\t` == 0); // true
console.log("[] == \\t", [] == `\t`); // false
/* 
[] -> String
 "" == 't' --> false
*/

// converting [] to number
console.log("+[] :",+[])   // 0
console.log("+[] == \\t :",+[] == `\t`)   // true
console.log("+[[[[]]]] :",+[[[[]]]])   // 0
>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
