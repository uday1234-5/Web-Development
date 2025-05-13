let movie = "stree 2";
let input = prompt("guess my favourite movie ")
/* while(true) {
    if(input == movie) {
        console.error("Congratulation 🎉🎉👏🏻!")
        break;
    } else {
        console.prompt("Again , enter movie name")
    }
} */


while((input!=movie) && (input != "quit")) {
    input = prompt("wrong guess, please try again");
}

if(input == movie) {
    alert("Congratulation 🎉🎉👏🏻!");
}