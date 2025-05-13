const sum = (a,b) => {console.log(a+b)};
console.log(sum)
sum(2,3);

const subtract = (x,y) => {return x-y};
console.log(subtract(6,3));


//Calculate cube of a number having single argument
const cube = a => { 
console.log(`Cube of a ${a} = ${a*a*a}`)};
cube(2)

//Calculate cube of a number having no argument
const greet = () => { 
console.log("Hello World")};
greet()


//There is a implicit "return" keyword
const mul = (a,b) => (a*b)
console.log(mul(3,5))


const multiply = (a,b) => a*b ;
console.log(multiply(30,15))