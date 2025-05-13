let max = prompt("Enter the max number")
console.log(max);
const random = Math.floor(Math.random()*max)+1;
console.log(random);

let guess = prompt("guess the number")
while(true) {

    if(guess == 'quit') {
        console.log(quit);
        break;
    }
    if(random == guess) {
        alert("You are right! congrats!!");
        break;
    } else if(guess < random){
        guess = prompt("your guess was too small,please try again")
    }
     else {
        guess = prompt("your guess was too  large, please try again")
    }
}