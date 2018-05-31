let str2 = "am";
let str1 = "I";
let age = 29;

console.log(`${str1} ${str2} ${age}`);
const ob = {a: 1, b: 2, c: 3, d: 4};

for (let i in ob) {
    if(!ob.hasOwnProperty(i)) continue;
    console.log(`${i} : ${ob[i]}`);
}

let arr = ['one', 'two', 'tree'];
for(let i of arr) {
    console.log(i);
}