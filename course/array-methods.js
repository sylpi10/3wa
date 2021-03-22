const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const powerNumber = numbers.map((number) => number ** 2);

const filtered = powerNumber.filter((number) => number > 50);
console.log(powerNumber);
console.log(filtered);

const filteredPower = numbers
.map((num)=> num **2)
.filter((num) => num > 50)
.reduce((acc, cur) => acc+ cur);

console.log(filteredPower);

