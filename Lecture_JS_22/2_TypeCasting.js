
// o/p : typecasting
function summ(num1, num2) {
    return num1+num2;
}
console.log(summ(10,true));   // 11
console.log(summ('10',true));   // 10true
console.log(summ());  // Nan
console.log(summ(10,'ram'));  // 10ram
console.log(typeof(summ(10,'ram'))); // string


