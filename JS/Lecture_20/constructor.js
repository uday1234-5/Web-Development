/* function constructorFunc( ) {
    this.username = "Uday Kushwah"
    this.mob = "99393848"
    this.age = "18"
}
console.log(constructorFunc() )
console.log(new constructorFunc() )

let p1 = new constructorFunc();
let p2 = new constructorFunc();

console.log(p1)
console.log(p2.username)  //Uday Kuswhah
console.log(p2.user)  // undefined */



function constructorFunc(naam, mob, age) {
    this.username = naam;
    this.mobile = mob;
    this.age = age;
    this.greet = function() {
        console.log("Goood Morning 🙏🏻!", naam);
    }
}
 
let p1 = new constructorFunc("Uday Kushwah",938393, 22);
let p2 = new constructorFunc("Ram",393839,23);

console.log(p1)
console.log(p2.username)  // Ram
console.log(p2.user)  // undefined
p2.greet()  // undefined