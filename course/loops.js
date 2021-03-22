const arr = ["one", "two", "three", "four"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}

console.log("\nfor of:");

for (const word of arr) {
    console.log(word);
}


console.log("\nfor in:");
const car = {brand: "mercedes", model: "class E", year: 2018};

for (const prop in car) {
    if (Object.hasOwnProperty.call(car, prop)) {
        const element = car[prop];
        console.log(`${prop}: ${element}`);
    }
}

console.log("\nforeach:");

arr.forEach(element => {
    console.log(element);
});

console.log("\nmap:");
arr.map(el => el.toUpperCase);


const upperArr = arr.map(el => el.toUpperCase() + " !!!");
console.log(upperArr);