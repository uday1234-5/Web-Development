// Classes :-
// Syntactical sugar of constructor function
// role of classes is to create an object
// First letter of class name should be Capital

//Syntax
class myClass {
    constructor() {

    }
}


// Using function
function Person1(naam, age, color) {
    this.name = naam;
    this.age = age;
    this.favcolor = color;
}

let p1 = new Person1("Uday", 19, "Violet")
let p2 = new Person1("Shyam", 21, "red")
console.log(p1); console.log(p2);


// Using Class
class Person2 {
    constructor(naam, age, color) {
        this.name = naam;
        this.age = age;
        this.favcolor = color;
    }
    greet() {
        console.log("Namaste Sir ji !!")
    }
}
let p3 = new Person2("Ram", 19, "brown")

let p4 = new Person2("Shaya", 21, "black")

console.log(p3); console.log(p4);
// console.log(p3.grretMessage())   // gives error



//==================================================

let obj = {
    a:10 ,
    fun :function(){
        console.log("Good Morning...........")
    }
}

console.log(obj)
console.log(obj.a)
console.log(obj.fun())