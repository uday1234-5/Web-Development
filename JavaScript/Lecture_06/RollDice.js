//create a function to roll a dice & always display the value of the dice(1 to 6).
function RollDice() {
    let random  = (Math.floor(Math.random()*6)+1);
    return random;
}

let value = RollDice();
console.log(value)