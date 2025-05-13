// Function Calling
function fun() {
    console.log(this);   // Window is an global object
}
fun()


// ======================================
// Method Calling
let obj1 = {
    a:10,
    fn:function(){
        console.log(this)  // this point to object "obj1"
        console.log("hello")
    }
}
obj1.fn()


// ======================================
// Method Calling
let obj2 = {
    a:10,
    fun1:function(){
        console.log(this," 1") ; // this point to object "obj2"
        fun2 :function(){
            console.log(this," 2")
            console.log("hello");
        }
        fun2()
    }
}
obj2.fun1()