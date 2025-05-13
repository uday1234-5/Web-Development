
// function defination
function sum() {
    let num1 = 48;
    let num2 = 33;
    return num1+num2;
}

// function calling
console.log(sum());


// parametrised function
function sum_three_num(num3) {  // parameter
    let num1 = 48;
    let num2 = 33;
    return num1+num2+num3;
}
console.log(sum_three_num(23));  // arguments



console.log("--x--x--x--x--x--x--x--x--x--x--x--x--");

// defult parametrised funcion
function sumthreenum(num3 = 8) {  //default parameter
    let num1 = 48;
    let num2 = 33;
    return num1+num2+num3;
}
// console.log(sumthreenum());  // arguments
// console.log(sumthreenum(23));  // arguments



function fun(n1 = 40, n2) {
    console.log(n1);
    console.log(n2);
}
fun()
fun(2)
fun(4,5)
  