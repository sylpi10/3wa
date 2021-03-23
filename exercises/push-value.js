const strNumbers = [];
let strNumbers2 = [];

const str1 = ["one", "two"];
const str2 = ["three", "four"];

strNumbers.push(...str1, ...str2);
strNumbers2 = [...str1, ...str2];

console.log(strNumbers);
console.log(strNumbers2);