// let product = document.querySelectorAll('section figure')
// console.log(product);

/* for (let item of product) {
	item.addEventListener('click', () => {
		console.log(this.innerText);	// undefined
	})
} */

// not the optimised way
/* for (let item of product) {
	item.addEventListener('click', function() {
		console.log(this.innerText);	// section value
	})
} */

// Event Delegation -> parent per event lagao rather than child per
let section = document.getElementById("container");
// console.log(section);
 
section.addEventListener("click", function (event) {
	// console.log(event.target.innerText);
	if (event.target.nodeName === 'FIGURE') {
		console.log(event.target.innerText);		
	}
});

