// agar mai function ke aage async laga du, toh hamesha hame return mai promise milega

 
/* async function fun() {
    
}
console.log(fun());   // Promise { undefined }
 */


/* async function fun() {
    return 100;
}
console.log(fun());   // Promise { 100 }
 */


// async function fun() {
//     return new Promise((resolve)=>resolve("Hello"))
// } 
// console.log(fun());



/* 
function fun() {
    console.log(10);
    console.log(20);
    let data = await
    
    
} */



    // // async --> returns a promise
// async function fun() {
//   // return 100; //return likhne se promise ki fulfilled value ban jayega otherwise undefined
//   return new Promise((resolve) => resolve("aman")); //agar return me promise hi bhej de tak humara promise return hota h jo bhi resolve bheja h uskr sath   Output --> Promise { <pending> }
// }
// console.log(fun());

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

// async function sam(){
//     console.log(10);
//     console.log(20);
//     let data = await fetch('https://api.tvmaze.com/serach/shows?q=girls')//jaha promise mil rha h waha await lag sakta h. Await function ke andar lagta h. await kehta h mujhe kam krne me time lagega aap thodi der ke liye mujhe akela chhod do. Await block kr deta h function ko jab tak corresponding o/p.
//     console.log(data);
//     console.log(30);

// }
// console.log(50);
// sam();
// console.log(60);


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


async function callApi(){
    let data = await fetch("https://api.tvmaze.com/serach/shows?q=girls");
    let resp = await data.json();
    console.log(resp);
}
callApi();