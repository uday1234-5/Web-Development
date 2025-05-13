// Write a Java Script function to count the number of vowels in a String argument

function countVowel(str) {
    let count = 0;
    for(let i = 0;i < str.length;i++) {
        let ch = str[i];
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }
    return count;
}
 let str = "UnitedStatesofAmerica";
console.log(countVowel(str))