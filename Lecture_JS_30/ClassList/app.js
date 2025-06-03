var art = document.querySelector("article");

// 1. Add()
// art.classList.add("sam samarth");  // wrong way
art.classList.add("sam");  
art.classList.add("samarth");
art.classList.add("kamal", "uday","rahul");
art.classList.add("uday");
// console.log(art);
// console.log(art);




// 2. contains()
console.log(art.classList.contains('sam'));
console.log(art.classList.contains('kamal'));
console.log(art.classList.contains('old'));





// 3. remove()
// art.classList.remove('uday', 'rahul');
// console.log(art);





// 4. toggle()
// art.classList.toggle('toggle')
// art.classList.toggle('toggle')
// art.classList.toggle('toggle')
// art.classList.toggle('toggle')
// art.classList.toggle('toggle')
// art.classList.toggle('toggle')
// console.log(art);





var arr = ["sam", "uday", "kamal", "samarth"];
var i = 0;
setInterval(() => {
    // art.classList.add(arr[i]);
    art.setAttribute('class',arr[i]);
    i = (i + 1) % 4;
    i += 1;
    if(i > 4) {
        i = 0;
    }
}, 2000);
