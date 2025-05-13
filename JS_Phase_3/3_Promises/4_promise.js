let p1 = new Promise(function(resolve, reject){
    let data = "10 rupees"
    let err = "chal na"
    resolve(data);
})

p1
    .then(function(data){
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function(){
        console.log("I am finally block.");        
    })