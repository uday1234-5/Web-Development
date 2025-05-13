//Array creation
let students = ["aman","payal","raman"];
console.log(students)
console.log(students[0]);
console.log(students[1]);
console.log(students[92]);    //undefined
console.log(students.length);
console.log(typeof students);

//empty array
let arr = [];

students[1] = "Kajal";
console.log(students)

students[10] = "Ram";
console.log(students) 
//Output : 
  /*   "aman",
    "Kajal",
    "raman",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Ram" */
console.log(students.length)


//Arrays method :
// 1. Push : add to end.
let cars = ["maruti","bmw","audi","nexon"]
cars.push("toyota")
console.log(cars)

//2. Unshift : add to start
cars.unshift("ferari")
console.log(cars)


//3. Pop : delete from end & returns it
cars.pop()
console.log(cars)

//4. shift :  delete from start & returns it
cars.shift()
console.log(cars)

//indexOf : returns index of something
console.log(cars)
console.log(cars.indexOf("bmw"))   //1
console.log(cars.indexOf("green"))  //-1

//includes : search for a value
console.log(cars.includes("bmw"))   //true
console.log(cars.includes('red')) // false

//concat : merge 2 arrays
let primary = ["red","green","yellow"]
let secondary = ["orange","green","sky blue"]
console.log(primary.concat(secondary))

//Reverse : reverse an array
console.log(primary.reverse())

//slice in array : copies a portion of array
let colors = ["red","green","yellow","orange","violet","sky blue"]
console.log(colors.slice())  //to make copy
console.log(colors.slice(2)) 
console.log(colors.slice(2,3)) 
console.log(colors.slice(-3)) 


//splice : removes | replaces | add elements in place 
// splice(start, deleteCount, item0.....itemN)
let color = ["red","yellow","blue","orange","pink","white"]
console.log(color.splice(4))    //[ 'pink', 'white' ]
console.log(color)              //[ 'red', 'yellow', 'blue', 'orange' ]

console.log(color.splice(0,1))      //[ 'red' ]
console.log(color)               //[ 'yellow', 'blue', 'orange' ]

console.log(color.splice(0,1,"black","grey"))    //[ 'yellow' ]
console.log(color)               //[ 'black', 'grey', 'blue', 'orange' ]




console.log()
// Sorting in array
let coloring = ["red","green","yellow","orange","violet","sky blue"]
coloring.sort()
console.log(coloring)

let num = [1000,100,54,76,23,98,26];
num.sort()
console.log(num)


//Question Practice
//1
console.log("Question Practice");
let input = ["jaunary","July","march","august"]
console.log(input.splice(0,2,"july","june"))
console.log(input)
// console.log(input.splice(0,1))
// console.log(input)
// console.log(input.splice(1,0,"june"))
// console.log(input)

//2
let language = ["C","c++","html","javascript","python","java","c#","sql"]
// language.reverse()
// console.log(language.indexOf("javascript"))

console.log(language.reverse().indexOf("javascript"))





//==============================================
//arrays reference
console.log("name"=="name")    //true
console.log("name"==="name")    //true
console.log(1=="1")              //true
console.log(1==="1")             //false
console.log([1]==[1])             //false
// console.log([1] === [1])             //false
console.log([] == [])             //false

let arr3 = ['a','b','c']
let arr3copy = arr3
console.log(arr3 == arr3copy)   //point to the same address  true
console.log(arr3 === arr3copy)   //point to the same address  true
arr3.push('d')
console.log(arr3)  //[ 'a', 'b', 'c', 'd' ]
console.log(arr3copy)  //[ 'a', 'b', 'c', 'd' ]
arr3.shift()
console.log(arr3)  //[ 'b', 'c', 'd' ]
console.log(arr3copy)  //[ 'b', 'c', 'd' ]

//=====================================================
//Constant array
let a = 9;
console.log(a)
a = 10
console.log(a)
const pie = 22/7;
console.log(pie)
// b = 3.14;  
// console.log(b);

const arr4 = [1,2,3,4]
console.log(arr4)
arr4[2] = 10;
console.log(arr4)



//Multi dimensional array =================================
let nums = [[1,2],[3,4],[5,6,5]]
console.log(nums)
console.log(nums[0][1])   // 2
console.log(nums[0][41])   // undefined




//tic tac toe
let game = [['X',null,'O'],
            [null,'X',null],
            ['O',null,'X']]
console.log(game)
