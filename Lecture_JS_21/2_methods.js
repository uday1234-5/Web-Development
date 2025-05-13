// the nature of the function return to something , by default undefined.
let obj = {
    evs : 90,
    cn : 89,
    web : 100, 
    maths : 59,
    total : function() {  // methods
        console.log(90+89+100+59);
    },
    bulao :function() {
        return "call to bulao";
    }
}
console.log(obj);
console.log(obj.maths);
console.log(obj.total());
console.log(obj.bulao());
