function download() {
    console.log("download started");  
    let res = false;  
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
    .catch((msg)=>{
        console.log(msg);
    })
    
