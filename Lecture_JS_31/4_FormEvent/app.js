/* 
let formEl = document.querySelector("form");
formEl.addEventListener("submit", function(event){
    event.preventDefault() // stop the default behaviour for that particular tag so, now my browser will not refresh
    console.log("Form submitted");
}); 
*/















let formEl = document.querySelector("form");
formEl.addEventListener("submit", function(event){
    event.preventDefault() // stop the default behaviour for that particular tag so, now my browser will not refresh
    console.log(formEl.elements);
    console.log(formEl.elements[0] );
    console.log(formEl.elements[1] );
    console.log(formEl.elements[0].value);
    console.log(formEl.elements[1].value);
});
