
// constructor function
/* function Person(firstname, lastname, mail) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = mail;

}
Person.prototype.printName = function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
}
Person.prototype.getName = function () {
    return `${this.firstName} ${this.lastName}`;
}
let p1 = new Person("Uday", "Kushwah", "uday232@gmail.com");

console.log(p1);
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.email);
p1.printName()
console.log(p1.getName()); */



// class syntax
/* class Person {
    constructor() {
         
    }
} */



class Person {
    constructor(firstname, lastname, mail) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = mail;  
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    printName(){
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}
let p1 = new Person("ms","dhoni","dhoni23@gmail.com")
console.log(p1);
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.email);
p1.printName()
console.log(p1.getName());

