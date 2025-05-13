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
 

fun()
    .then((msg)=>{
        console.log("You are in 1st then :")
        return new Promise((resolve,reject)=>{
            if(msg) {
                resolve(msg)
            } else {
                reject("failure")
            }
        })
         
    }) 
    .then((msg)=>{
        console.log("You are in 2nd then :", msg)
    }) 
    .catch((msg)=>{
        console.log("You are in catch :", msg)
    }) 
    .finally(()=>{
        console.log("You are in .finally");
    })