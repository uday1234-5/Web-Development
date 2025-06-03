/* let p1 = new function(){
    
};
console.log(p1);
 */

//============================





async function fun() {
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3 second ho gaye");
            resolve();
        }, 3000)
    })

    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("2 second ho gaye");
            resolve()
        }, 2000)
    })

    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3 second ho gaye");
            resolve();
        }, 3000)
    })


    console.log("dono kaam ho gaye");
    
}
fun();
