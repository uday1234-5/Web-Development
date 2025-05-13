//This Keyword : "This" keyword refers to an object that is executing the current piece of code.

const student = {
    name : "Uday",
    age : 23,
    grade : "A+",
    percentage : 80,
    english: 67,
    math : 80,
    physics : 75,
    getAvg() {
        //"this" keyword represent the student object
        console.log(this)
        let avg = (this.english+this.math+this.physics)/3;
        console.log(Avg);
    }

}

console.log(student)
console.log(student.grade)
console.log(student["grade"])
console.log(student["getAvg"])
student.getAvg();