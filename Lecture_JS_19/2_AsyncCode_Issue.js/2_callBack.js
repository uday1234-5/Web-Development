/*
CallBack :
ek function ka poora hone par doosra function call karna is callback.
*/

function mummyMaggiBanado(cb){
    setTimeout(function(){
        console.log("Mummy Maggi Banado");
        cb(MaggiBananaStart);  // this is a call back function
    },2000)
}
function jaaMarketSeMaggiLaa(cb) {
    setTimeout(function(){
        console.log("Jaker Market se Maggi lekar aa");
        cb()
    },2000)
}
function MaggiBananaStart() {
    setTimeout(function(){
        console.log("Maggi Banana Start");
        
    },2000)
}
mummyMaggiBanado(jaaMarketSeMaggiLaa)
 
 
// download ---> compress  --> upload