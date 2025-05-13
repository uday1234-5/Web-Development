 
// =======
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("Length :", arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

let str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i] + "_";
}
console.log(str);

// command line se input le sakte hai JS ke ander
// node file_name.js input1 input2
// ex : node 3_Arrays.js "Hello" 1 2 3
console.log(process.argv);
console.log(process.argv.length);

let inp1 = process.argv[1];
let inp2 = process.argv[2];
let inp3 = process.argv[3];
let inp4 = process.argv[4];
console.log(inp1, inp2, inp3, inp4);

/* 
node script.js arg1 arg2 arg3 arg4
console.log(process.argv)

let inp1 = process.argv[1];
let inp2 = process.argv[2];
let inp3 = process.argv[3];
let inp4 = process.argv[4];
console.log(inp1, inp2, inp3, inp4)

Output :
[
  '/path/to/node',      // 0th index - Node.js ka path
  '/path/to/script.js', // 1st index - Tera script file ka path
  'arg1',               // 2nd index - First argument
  'arg2',               // 3rd index - Second argument
  'arg3',               // 4th index - Third argument
  'arg4'                // 5th index - Fourth argument
]

*/