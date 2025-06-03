/* 
let inpEle = document.querySelector('input')
inpEle.addEventListener('input',function(){
    console.log("Input element chal gaya , bhai logo");
})  */





function fun(event){
    // console.log("Ipnut element chal gaya , bhai logo");
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    let val = event.target.value
    // alert(val)
    let h2 = document.querySelector('h2');
    h2.innerText = val
    // console.log(val);
    
}
 let inpEle = document.querySelector('input')
inpEle.addEventListener('input',fun)




