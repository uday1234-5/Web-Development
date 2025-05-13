/* 
Promise :
It is a constructor function.
-> Resolve
-> Reject

Promise is a class in js which is used to handlle asyynchronous operation.

*/

// new Promise()
// new Promise( function() {})

let p1 = new Promise(function(resolve, reject) {
    let data = "10 rupee"
    let error = "chala ja brother";
    // resolve(data);
    reject(error)
})

console.log(p1);
p1
.then(function(d){
    console.log(d);
    
})
.catch(function(err){
    console.log(err);
    
})
.finally(function(){
    console.log("mai har bhar chalunga");
})