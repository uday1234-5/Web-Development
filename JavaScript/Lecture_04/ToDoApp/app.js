let todo = [];
let request = prompt("Please enter your request.");
while(true) {

    if(request == "quit") {
        console.log("quitting app");
        break;
    }
    if(request == "list") {
        console.log("-------------------")
        for(let i = 0;i < todo.length;i++) {
            console.log(i,todo[i]);
        }
        console.log("List displayed");
        console.log("-------------------")
    } else if(request == "add") {
        let task = prompt("Enter the task that u add");
        todo.push(task);
        console.log("task added successfully");
    } else if(request == "delete") {
        let del = prompt("Enter the task no. that you want to delete");
        todo.splice(del,1);
        console.log("task deleted successfully")
    } else{
        console.log("Invalid request")
    }
    request = prompt("Enter your reques")
}

