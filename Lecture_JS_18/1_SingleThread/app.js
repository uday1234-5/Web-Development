<<<<<<< HEAD
// Let's create a function to add 1 second of delay...
// endTime - startTime >= 1 sec



function delayOneSec() {
    let currentTime = new Date().getTime();
    while(new Date().getTime() - currentTime < 1000) {
        
    }
}

function delayNSec(n) {
    for(let i = 0; i < n; i++) {
        delayOneSec();
    }
}
delayNSec(5);
=======
// Let's create a function to add 1 second of delay...
// endTime - startTime >= 1 sec



function delayOneSec() {
    let currentTime = new Date().getTime();
    while(new Date().getTime() - currentTime < 1000) {
        
    }
}

function delayNSec(n) {
    for(let i = 0; i < n; i++) {
        delayOneSec();
    }
}
delayNSec(5);
>>>>>>> 6153ead68a2361ac2bec0f7954bb2e69763e4792
console.log("Hello world...")