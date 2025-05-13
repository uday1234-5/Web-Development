/* function download() {
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
// download()
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .then((msg)=>{
//         console.log("You are in 2nd then :", msg)
//     })
    





function print() {
    console.log("print started");  
    let res = false;  
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("download finished");
            if(res) {
                resolve("print finished")
            } else {
                reject("Unable to print")
            }
        }, 2000)
    })
}



function upload() {
    console.log("upload started");  
    let res = true;  
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("download finished");
            if(res) {
                resolve("upload finished")
            } else {
                reject("Unable to upload")
            }
        }, 2000)
    })
}
// upload()
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((msg)=>{
//         console.log(msg);
//     })


download()
    .then((msg)=>{
        console.log(msg);
        return print();
    })
    .then((msg)=>{
        console.log(msg);
        return upload();
    })
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })
    .finally(()=>{
        console.log("finally block");

    })



 */






    // ====================================================================================
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

function print(msg) {
    console.log(msg);
    
    console.log("print started");  
    let res = true;  
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("download finished");
            if(res) {
                resolve("print finished")
            } else {
                reject("Unable to print")
            }
        }, 2000)
    })
}


function upload(msg) {
    console.log(msg)
    console.log("upload started");  
    let res = true;  
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("download finished");
            if(res) {
                resolve("upload finished")
            } else {
                reject("Unable to upload")
            }
        }, 2000)
    })
}
 
download()
    .then(print)
    .then(upload)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })
     


// ===========================
download()
    .then((msg)=>{
        console.log(msg);
        
        console.log("print started");  
        let res = true;  
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // console.log("download finished");
                if(res) {
                    resolve("print finished")
                } else {
                    reject("Unable to print")
                }
            }, 2000)
        })
    }
    
    )
    .then((msg)=> {
        console.log(msg)
        console.log("upload started");  
        let res = true;  
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // console.log("download finished");
                if(res) {
                    resolve("upload finished")
                } else {
                    reject("Unable to upload")
                }
            }, 2000)
        })
    })
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })
     

