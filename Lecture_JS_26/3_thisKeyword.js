// 1. Regular Invocation

function fun() {
    console.log(this);  // in case of regular invocation, this point to window object.
}
// fun();  // direct calling








// 2. Method Invocation
let obj = {
    number : 3,
    fun : function(){
        console.log(this);  // this point to obj.
    }
}
// obj.fun();  // this is pointing to te object over which it is called (function calling with object.)
// console.log(obj.number);
// let myfunc = obj.fun;
// myfunc()   // regular invocation


// ques :
let obj2 = {
    fn : function() {
        function calculate() {
            console.log(this);  // this point to window object
        }
        calculate()  // direct calling regular invocation
    }
}
// obj2.fn()






// 3. Constructor Invocation
// this always point to newly created object.
function CreateObj() {
    this.a = 24;
}
let object = new CreateObj();
console.log(object.a);










// 4. Indirect calling
// .call(), .bind(), .apply()
let obj3 = {
    a:20,
    fn: function () {
        console.log(this);   // this point to object obj3.
    }
}
   
let obj4 = {
    a : 2
}
// obj3.fn()
// obj4.fn() // error
obj3.fn.call(obj4)   // this keyword point to    obj4
// jab bhi tum .call() method ka istemaal kr rhe hote ho tab aap call ke andar mention karte ho , aapka this usse point kart hai
 
obj3.fn.apply(obj4)  // this keyword point to obj4  

//===================================================================

let obje = {
    a:20,
    fn: function (a, b, c) {
        console.log(this, a, b, c);   // this point to object obj3.
    }
}
// obje.fn.call(obje, 1, 2, 3);   // .call() can accept multiple argument
obje.fn.apply(obje,[1, 2, 3]);   // .apply() can accept array as argument



let objec = {
    a:4555,
    fn:function() {
        console.log(this);
    }
}
let my_func = objec.fn.bind(objec);   // bind ke ander jo bhi object daal denge, this keyword usi ko point karega..
my_func()






// 5. Arrow function
