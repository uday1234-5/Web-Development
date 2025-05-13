

function fun() {

}
let naam = fun();
console.log(naam);  // undefined


// Constructor
/* 
function user() {
   this.name = "uday";
   this.email = "example123@gmail.com"
}
let user1 = new user();
console.log(user1); // user{} -> an empty object
console.log(user1.name);
console.log(user1.email);
 */





/* function User(name, email) {
    this.name = name;
    this.email = email;
    this.description = function() {
        return `My name is ${this.name}`;
    }
}
let user1 = new User("Ritik","ritik6758@gmail.com");
let user2 = new User("Ram","ram53@gmail.com");
console.log(user1); 
console.log(user2); 
console.log(user1.name);
console.log(user1.email);
console.log(user2.name);
console.log(user2.email);
console.log(user1.description());
console.log(user2.description());
 */





function User(name, email) {
    this.name = name;
    this.email = email;
}
User.prototype.description = function() {
    return `My name is ${this.name}`;
}
let user1 = new User("Ritik","ritik6758@gmail.com");
let user2 = new User("Ram","ram53@gmail.com");
console.log(user1); 
console.log(user2); 
console.log(user1.name);
console.log(user1.email);
console.log(user2.name);
console.log(user2.email);
console.log(user1.description());
console.log(user2.description());
