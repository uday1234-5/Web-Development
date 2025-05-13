// Disadvantages of call back :
// 1. Horizontal growth
// 2. Error handling

function step1(fn) {
    console.log("Please wail i am selecting image....")
    setTimeout(function(){
        console.log("image selected successfully");
        
        fn("Selected image..");
    }, 4000);
}

function step2(image, fn) {
    console.log(`Please wait i am applying filter to ${image}....`);
    setTimeout(function() {
        console.log("filtered applied successfully");
        fn("Filtere image")
    }, 2000);
    
}

function step3(filter, fn) {
    console.log(`Please wait i am adding caption to ${filter}....`);
    setTimeout(function() {
        console.log("caption added successfully");
        fn("captioned image")
    }, 5000);
    
}
function step4(caption){
    console.log(`Please wait i am uploading ${caption}....`);
    setTimeout(function() {
        console.log("image uploadedd successfully");
    }, 3000);
    
}
step1(function(image) {
    step2(image, function(filter){
        step3(filter , function(caption){
            step4(caption)
        })
    });
})
 