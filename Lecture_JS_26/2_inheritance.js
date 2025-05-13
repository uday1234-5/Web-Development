

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
 
class Student extends Person {
    constructor(firstname, lastname, mail, age, rollno) {
        super(firstname,lastname,mail);
        this.Age = age;
        this.RollNum = rollno;
    }
    getName() {
        return `super se bhi upper ${this.firstName} ${this.lastName}`;
    }
}
let s1 = new Student("ms","dhoni","dhoni23@gmail.com",23,56);
console.log(s1.email);
console.log(s1.getName());
console.log(s1.Age);
console.log(s1.RollNum);
s1.printName();