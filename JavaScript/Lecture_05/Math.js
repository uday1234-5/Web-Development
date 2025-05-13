
//Properties
console.log(Math.PI)
console.log(Math.E)

//Methods
console.log(Math.abs(-23))   //23
console.log(Math.pow(2,3))   //8
console.log(Math.floor(2.3333))   //2
console.log(Math.floor(2))         //2
console.log(Math.floor(-2.3333))   //-3
console.log(Math.floor(2.99))   //2


console.log(Math.ceil(5))   //5
console.log(Math.ceil(5.9))   //6
console.log(Math.ceil(5.000001))   //6
console.log(Math.ceil(-5.000001))   //-5


// 0 inclused and 1 exclusive  [0 ,1)
console.log(Math.random())


//Genrate Random Integers
let num = Math.random()
console.log(num)
num = num * 10;
num = Math.floor(num);
num = num+1;
console.log(num)