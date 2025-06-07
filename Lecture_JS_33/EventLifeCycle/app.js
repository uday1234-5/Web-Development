let grandparent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");


 
/* grandparent.addEventListener("click", () => {
  	console.log("grandFather clicked!!");
});

parent.addEventListener("click", () => {
  	console.log("Father clicked!!");
});

child.addEventListener("click", () => {
 	console.log("child clicked!!");
}); */




// default --> false
/* grandparent.addEventListener("click", () => {
  	console.log("grandFather clicked!!");
}, true);

parent.addEventListener("click", () => {
  	console.log("Father clicked!!");
}, true);

child.addEventListener("click", () => {
 	console.log("child clicked!!");
}, true); */





// Question

/* grandparent.addEventListener("click", () => {
  	console.log("grandFather clicked!!");
}, true);

parent.addEventListener("click", () => {
  	console.log("Father clicked!!");
}, false);

child.addEventListener("click", () => {
 	console.log("child clicked!!");
}, true); */ 









grandparent.addEventListener("click", (event) => {
  	console.log("grandFather clicked!!");
	// event.stopPropagation()
}, true);

parent.addEventListener("click", (event) => {
	// console.log(event);
	// event.stopPropagation()
	console.log("Father clicked!!");
}, true);

child.addEventListener("click", (event) => {
	// event.stopPropagation()
 	console.log("child clicked!!");
}, true); 

  



