let student = {
    naam : "uday",
    age : 18,
    marks : 80,
    graduation : "B-tech",
    isEligibleforVote : true,
    city : "agra"
}

console.log(student)

let student2 = student;
console.log(student2)

console.log(student == student2)

// add and update values
student.city = "mathura";
console.log(student)

// delete the key 
delete student.isEligibleforVote
console.log(student)




const item = {
    naam : "shirt",
    price : 1200,
    discount : 50,
    color : ["pink","blue","black"]
}
console.log(item)




let obj = {
    1:"a",
    2:"b",
    true : "c",
    null : "d",
    undefined : "e"
}
console.log(obj)
console.log(obj[1])
console.log(obj["true"])
// console.log(obj.1)
console.log(obj.true)