/* let bod = document.querySelector('body')

let btn1 = document.querySelector('#btn1')
btn1.onclick = function () {
    bod.style.backgroundColor = 'yellow';
}
let btn2 = document.querySelector('#btn2')
btn2.onclick = function () {
    bod.style.backgroundColor = 'white';
} */


    



let bod = document.querySelector('body')

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', function () {
    bod.style.backgroundColor = 'yellow';
})

let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', function () {
    bod.style.backgroundColor = 'white';
})