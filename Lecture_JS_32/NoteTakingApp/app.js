// selecting the input
let titleEle = document.getElementById("title");

// selecting the ul
let listEle = document.getElementById("list");

// selecting the button
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
    // extracting the value from the input
    let titleText = titleEle.value;

    // creating a new li element
    let liEle = document.createElement("li");
    // inserting the text inside li element from the input
    liEle.innerText = titleText;

    listEle.appendChild(liEle);

    // clearing the input field
    titleEle.value = '';

    // remove the li after clicking on the li
    liEle.addEventListener('click', function (){
        liEle.remove();
    })


});
