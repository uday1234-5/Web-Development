//str.trim() -> trims whitespaces from both ends of string and return new one. 
// let message = "      Hello           ";
// console.log(message )
// console.log(message.trim())

// let password = prompt("Enter your password : ");
// console.log(password.trim())


//Strings are immutable
let msg = "        hi....";
console.log(msg);
console.log(msg.trim())
let str = msg.trim();
console.log(str )


let Fullname = "Uday Kushwah";
console.log(Fullname.toUpperCase())


//Arguments : it is a some value that we pass to the method

// 1. indexOf -: returns the first index of occurences of some value in string or
                // gives -1 if not found
let str1 = "ILoveCoding";
console.log(str1.indexOf("Love"));    //1 
console.log(str1.indexOf("z"));   //-1  
console.log(str1.indexOf("o"));   //2


//method chaining
let str2 = "                       uday kushwah                   ";
console.log(str2.toUpperCase().trim())
console.log(str2.trim().toUpperCase())


//Slce : Returns a part of the original string as a new string
let str3 = "ILoveCoding";
// console.log(str3.slice(5))
// console.log(str3.slice(1,4))
//negative based string
console.log(str3.slice(-1))
console.log(str3.slice(-100))
console.log(str3.slice(-5))
console.log(str3.slice(-6,-2))

//Replace Method : searches a value in the string  and returns a new string with the value repeated
console.log(str3.replace("Love","Do"));
console.log(str3.replace("o","*"));



//Repeat Method : returns a string with the number of copies of a string
console.log(str3.repeat(3))
