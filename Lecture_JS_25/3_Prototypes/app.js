/* 
Prototypes :

*/


let todo = {
    title : 'Buy Flowers',
    desc : function() {
        return `your task is to ${this.title}.`;
    }
}

console.log(todo.title);       // Buy Flowers
console.log(todo.desc());      // your task is to Buy Flowers.

// Prototypes
console.log(todo.toString());  // [object Object] 
console.log(todo.valueOf());  // [object Object] 