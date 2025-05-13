function fun() {
    let condition = true;
    return new Promise((resolve, reject)=>{
        if(condition) {
            resolve("success");
        } else {
            reject("failure")
        }
    })
}
// fun();
// console.log("Hello");
// console.log(fun());

fun()
    // if promise resolve
    .then((msg)=>{
        console.log("You are in then :", msg)
    }) 
    // if promise reject
    .catch((msg)=>{
        console.log("You are in catch :", msg)
    }) 