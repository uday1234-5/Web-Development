/* function getData(fun) {
  setTimeout(() => {
    let data = "Hello world";
    fun(data);
  });
}

getData(function (data) {
    console.log(data);
    
}) */



// Promise() :
// It accept function
/* let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = "hi dosto ye promise hai"
        resolve(data)
    }, 3000);
});

promise.then(function(data){
    console.log(data);  
}).finally(function () {
    console.log("finally block always executed........");
});
 */




// Reject()
/* let prom = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let err = "error in fetching of the data....";
        resolve(err)
    }, 5000);
});

prom.then(function(data){
    console.log(data);  
}).catch(function(err) {
    console.log(err);  
}).finally(function () {
    console.log("finally block always executed........");
})

prom.catch(function(err) {
    console.log(err);  
}) */











// Examples :
/* let p1 = new Promise((resolve, reject)=>{
    console.log("Wait for 3 sec, work in process.......");
    setTimeout(()=>{
    // resolve()
    reject()
    },3000);
}) 

p1.then().catch().finally()
p1.then(()=>{
    console.log("kaam process ho gaya");
}).catch(()=>{
    console.log("error............");
})
*/







// Example 2  :=====================================================
let p1 = new Promise((resolve, reject)=>{
    console.log("Wait for 3 sec, work in process.......");
    setTimeout(()=>{
    resolve()
    // reject()
    },3000);
})

p1.then(()=>{
    return new Promise((resolve, reject)=>{
        console.log("Promise run kardiya hai");
        setTimeout(()=>{
            console.log("2 socond lag gaye ....");   
            resolve()
        },2000);
    })
})
.then(()=>{
    console.log("dono kaam ho gaye....")
})
.catch(()=>{
    console.log("error occur..........");
})




