

function download() {
    console.log("download started");  
    let res = true;  
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("download finished");
            if(res) {
                resolve("download finished")
            } else {
                reject("Unable to download")
            }
        }, 2000)
    })
}
// console.log(download());
download()
    .then((msg)=>{
        console.log(msg);
    })
    .then((msg)=>{
        console.log("You are in 2nd then :", msg)
    })
    