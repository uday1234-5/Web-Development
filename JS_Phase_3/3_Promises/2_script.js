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
    .then((msg)=>{
        console.log("You are in 1st then :")
        // return msg
        return msg
        // resolve(msg);
    }) 
    .then((msg)=>{
        console.log("You are in 2nd then :", msg)
    }) 
    .catch((msg)=>{
        console.log("You are in catch :", msg)
    }) 