/*
this keyword :
"this" keyword is used to access the properties of object inside the methods.
"this" is a special keyword point to the current object;

*/

let obj = {
    name : 'Ram',
    evs: 90,
    cn: 89,
    web: 100,
    maths: 59,
    total: function () { // methods
        console.log(this.evs + this.cn + this.web + this.maths);
    },
    bulao: function () {
        return `call to ${this.name}`;
    }
};
console.log(obj);
console.log(obj.maths);
console.log(obj.total());
console.log(obj.bulao());
