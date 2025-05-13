let post = {
    username : "Uday_Kushwah",
    content : "this is my first post",
    likes : 20,
    reposts : 5,
    tags : ["@uday","@kushwah"]
}

console.log(post)


//get values
// 1. using keys
console.log(post["username"])
console.log(post["likes"])

// 2. using dot format
console.log(post.username)
console.log(post.tags)


let prop = "likes";
console.log(post[prop])   // 20
console.log(post.prop)     //undefined