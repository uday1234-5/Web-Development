// 1.
let allH1 =  document.getElementsByTagName('h1');
// console.log(allH1[0]);
// console.log(allH1[1]);

// allH1[1].style.color = "yellow";
// allH1[1].style.backgroundColor = "red";
// allH1[1].style.border = '5px solid black'
// allH1[1].style.padding = '10px';
// allH1[1].style.fontSize = '30px';
// allH1[1].style.fontSize = '30px';


let id = document.getElementById('vohra');
console.log(id);

// id.style.border = '3px dashed black';
// id.style.color = 'deeppink';
// id.style.cssText = `
//     color : cyan;
//     border : 10px dashed white;
//     font-size : 60px;
//     background-color : blue;
// `


let allClass = document.getElementsByClassName('sam')
// allClass[0].style.cssText = `
//         color : cyan;
//     border : 10px dashed white;
//     font-size : 60px;
//     background-color : blue;
// `
// allClass[1].style.cssText = `
//         color : cyan;
//     border : 10px dashed white;
//     font-size : 60px;
//     background-color : blue;
// `

/* 
for(let item of allClass) {
       item.style.cssText = `
        color : cyan;
    border : 10px dashed white;
    font-size : 60px;
    background-color : blue;
`
} */




// ===================================


/* document.querySelector('h2')
document.querySelector('#vohra')
document.querySelector('.sam')

 */


// ===================================

document.querySelectorAll('h2')
document.querySelectorAll('.sam')
document.querySelectorAll('#vohra')