

let Menu = ["Paneer butter masala", "Pizza", "Dal", "Chicken pyaja","Palak Paneer","Chicken Biryani","Mix veg","Egg bhuji","Soda", "Noodles"]

let VegMenu = Menu.filter(function(item){
    if(item ===  "Chicken pyaja" || item === "Chicken Biryani" || item === "Egg bhuji") {
        return false;
    } 
    return true;
    
})

console.log(VegMenu);


/* 
function isVeg(food) {
    if((food.toLowerCase().indexOf('chicken') !== -1) || (food.toLowerCase().indexOf('egg') !== -1)) {
        return false;
    }
    return true;
}
let VegMenu = Menu.filter(isVeg)
console.log(VegMenu);
 */